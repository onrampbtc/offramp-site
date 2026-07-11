// Prime answer_cache with the top ~120 seed questions (Phase B).
// Runs each question through the live /api/ask/chat pipeline exactly once —
// same normalization, retrieval, grounding rules — so cached answers are
// byte-identical to what a visitor would have gotten. Evergreen by design:
// the Learn system prompt forbids embedding today's spot price.
//
// Requires the dev server (npm run dev) on BASE_URL. Uses the service-key
// header to bypass the per-IP rate limit.
//
// Usage: node scripts/prime-cache.mjs [--limit 120] [--base http://localhost:3000]

import { readFileSync } from "node:fs";
import { loadEnv } from "./lib-ask.mjs";

const args = process.argv.slice(2);
const LIMIT = Number(args[args.indexOf("--limit") + 1] || 0) || 120;
const BASE = args.includes("--base")
  ? args[args.indexOf("--base") + 1]
  : "http://localhost:3000";

const { key } = loadEnv();

// Mirror of src/lib/ask/normalize.ts — used only for near-duplicate skipping
// (the server applies its own copy as the cache key).
const STOPWORDS = new Set([
  "a", "an", "the", "of", "to", "for", "in", "on", "at", "and", "or",
  "is", "are", "am", "be", "was", "were", "do", "does", "did",
  "can", "could", "should", "would", "will", "i", "my", "your", "you", "it",
]);
const normalize = (q) =>
  q.toLowerCase().replace(/[^a-z0-9\s]/g, " ").split(/\s+/)
    .filter((w) => w && !STOPWORDS.has(w)).join(" ").slice(0, 200);

// Near-duplicate check: identical normalized form, or ≥80% token overlap
// with something already queued ("how much is a gram of gold worth" vs
// "how much is one gram of gold worth").
function isNearDupe(norm, seenSets) {
  const tokens = new Set(norm.split(" "));
  for (const prev of seenSets) {
    const inter = [...tokens].filter((t) => prev.has(t)).length;
    const union = new Set([...tokens, ...prev]).size;
    if (inter / union >= 0.8) return true;
  }
  return false;
}

const seed = JSON.parse(readFileSync("docs/ask-offramp/corpus/seed-questions.json", "utf8"));
const ranked = [...seed.questions].sort((a, b) => (b.volume ?? 0) - (a.volume ?? 0));

const queue = [];
const seenSets = [];
for (const row of ranked) {
  const norm = normalize(row.q);
  if (!norm || isNearDupe(norm, seenSets)) continue;
  queue.push(row.q);
  seenSets.push(new Set(norm.split(" ")));
  if (queue.length >= LIMIT) break;
}

console.log(`Priming ${queue.length} questions against ${BASE} …`);
let cached = 0, answered = 0, refused = 0, failed = 0;

for (const [i, q] of queue.entries()) {
  try {
    const res = await fetch(`${BASE}/api/ask/chat`, {
      method: "POST",
      headers: { "Content-Type": "application/json", "x-ask-service": key },
      body: JSON.stringify({ question: q }),
    });
    const data = await res.json();
    if (!res.ok) throw new Error(data.error ?? res.status);
    if (data.cached) cached += 1;
    else if (data.sources?.length > 0) answered += 1;
    else refused += 1;
    console.log(
      `${String(i + 1).padStart(3)} ${data.cached ? "cache " : data.sources?.length ? "answer" : "refuse"} ${q}`
    );
  } catch (e) {
    failed += 1;
    console.error(`${String(i + 1).padStart(3)} FAIL   ${q} — ${e.message}`);
  }
}

console.log(
  `\nDone. answered=${answered} already-cached=${cached} refused=${refused} failed=${failed}`
);
console.log("Cost: see assistant_messages.cost_cents (sum below via SQL).");
