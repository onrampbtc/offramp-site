// Load the Ask Offramp Learn corpus into ask_corpus (Phase B).
// Re-runnable: deletes each source's rows before reinserting.
//
// Sources:
//   glossary    — docs/ask-offramp/corpus/glossary.jsonl (587 terms)
//   site        — string/JSX text extracted from guide/*, how-it-works, faq, learn
//   methodology — Gold Buyer Score methodology (gold-domains repo, if present)
//
// Embeddings stay null on purpose — retrieval is Postgres FTS (0003).
// Upgrade path: backfill ask_corpus.embedding via Voyage/OpenAI later.
//
// Usage: node scripts/load-corpus.mjs

import { readFileSync, readdirSync, existsSync, statSync } from "node:fs";
import { join } from "node:path";
import { loadEnv, makeRest, chunkText } from "./lib-ask.mjs";

const db = makeRest(loadEnv());
const SITE = "https://offrampgold.com";
const METHODOLOGY_TS =
  process.env.METHODOLOGY_TS ??
  "/Users/mt/Desktop/gold-domains/apps/goldbuyer/src/data/methodology.ts";

// ── 1. glossary ───────────────────────────────────────────────────────────

function glossaryRows() {
  const rows = [];
  const lines = readFileSync("docs/ask-offramp/corpus/glossary.jsonl", "utf8")
    .split("\n")
    .filter(Boolean);
  for (const line of lines) {
    const t = JSON.parse(line);
    if (t.definition?.trim()) {
      rows.push({ source: "glossary", title: t.term, url: t.url, chunk: `${t.term}: ${t.definition.trim()}` });
    }
    for (const chunk of chunkText(t.fullExplanation ?? "", 800)) {
      rows.push({ source: "glossary", title: t.term, url: t.url, chunk });
    }
  }
  return rows;
}

// ── 2. site pages (string literals + JSX text nodes out of .tsx) ─────────

const ENTITIES = {
  "&ndash;": "–", "&mdash;": "—", "&rsquo;": "'", "&lsquo;": "'",
  "&ldquo;": "“", "&rdquo;": "”", "&amp;": "&", "&middot;": "·",
  "&hellip;": "…", "&apos;": "'", "&quot;": '"', "&nbsp;": " ",
};
const decode = (s) => s.replace(/&[a-z]+;/g, (m) => ENTITIES[m] ?? " ");

const NOISE = /className|font-|text-|hover:|https?:\/\/|@context|@type|application\/ld|^[A-Z_]+$|aria-|px-|py-|\.(jpg|png|svg|webp)/;

/** Pull human-readable prose out of a TSX page: JSX text + long string literals. */
function extractProse(tsx) {
  const out = [];
  // JSX text nodes: between > and <, skipping expressions-only content
  for (const m of tsx.matchAll(/>([^<>{}]+)</g)) {
    const t = decode(m[1]).replace(/\s+/g, " ").trim();
    if (t.length >= 40 && /[a-z] [a-z]/.test(t) && !NOISE.test(t)) out.push(t);
  }
  // String literals ≥ 60 chars (FAQ answers, JSON-LD descriptions, data arrays)
  for (const m of tsx.matchAll(/"((?:[^"\\]|\\.){60,}?)"/g)) {
    const t = decode(m[1].replace(/\\"/g, '"').replace(/\\n/g, " ")).replace(/\s+/g, " ").trim();
    if (/[a-z] [a-z]/.test(t) && !NOISE.test(t)) out.push(t);
  }
  // de-dup (JSX text often mirrors JSON-LD strings)
  return [...new Set(out)];
}

function pageRows(dir, urlPath, title) {
  const file = join(dir, "page.tsx");
  if (!existsSync(file)) return [];
  const prose = extractProse(readFileSync(file, "utf8"));
  const rows = [];
  for (const chunk of chunkText(prose.join("\n"), 800)) {
    rows.push({ source: "site", title, url: `${SITE}${urlPath}`, chunk });
  }
  return rows;
}

function titleFromSlug(slug) {
  return slug.split("-").map((w) => w[0].toUpperCase() + w.slice(1)).join(" ");
}

function siteRows() {
  const rows = [];
  for (const slug of readdirSync("src/app/guide")) {
    const dir = join("src/app/guide", slug);
    if (statSync(dir).isDirectory()) {
      rows.push(...pageRows(dir, `/guide/${slug}`, `Guide: ${titleFromSlug(slug)}`));
    }
  }
  rows.push(...pageRows("src/app/how-it-works", "/how-it-works", "How Offramp Works"));
  rows.push(...pageRows("src/app/faq", "/faq", "Offramp FAQ"));
  rows.push(...pageRows("src/app/learn", "/learn", "Learn Hub"));
  return rows;
}

// ── 3. Gold Buyer Score methodology ──────────────────────────────────────

function methodologyRows() {
  if (!existsSync(METHODOLOGY_TS)) {
    console.warn(`methodology.ts not found at ${METHODOLOGY_TS} — skipping`);
    return [];
  }
  const ts = readFileSync(METHODOLOGY_TS, "utf8");
  const prose = [];
  for (const m of ts.matchAll(/(label|why|what):\s*"((?:[^"\\]|\\.)+)"/g)) {
    prose.push(decode(m[2].replace(/\\"/g, '"')));
  }
  const rows = [];
  for (const chunk of chunkText(
    `The Gold Buyer Score is goldbuyer.io's published methodology for scoring national mail-in gold buyers. ${prose.join(" ")}`,
    800
  )) {
    rows.push({
      source: "methodology",
      title: "Gold Buyer Score methodology",
      url: "https://goldbuyer.io/methodology",
      chunk,
    });
  }
  return rows;
}

// ── 4. pricing math (DATA-CORPUS §1: melt formulas, karat table, payout) ──
// Authored evergreen chunks from spec §7 / src/lib/ask.ts — the canonical
// math, no live prices (answers must point to /gold-calculator for those).

function pricingRows() {
  const CALC = `${SITE}/gold-calculator`;
  const facts = [
    {
      title: "How gold melt value is calculated",
      text: "Melt value is the metal itself, priced at the live market: melt value = (gold spot price per troy ounce ÷ 31.1035) × purity × weight in grams. A troy ounce is 31.1035 grams — slightly heavier than a regular ounce. The spot price changes all day, so how much a gram, an ounce, a pound, or a bar of gold is worth depends on the live number: use the calculator at /gold-calculator or the live price page at /gold-price. To value any weight of gold: multiply the grams by the karat purity, then by the live per-gram spot price.",
    },
    {
      title: "Karat purity table (what 10k, 14k, 18k, 22k, 24k mean)",
      text: "Karat measures how much of the metal is actually gold. 24k is 99.9% pure gold (stamped 999), 22k is 91.67% (stamped 916), 18k is 75% (stamped 750), 14k is 58.33% (stamped 585), and 10k is 41.67% (stamped 417). Those three-digit stamps inside a ring band or on a jewelry clasp are millesimal fineness — 585 simply means 58.5% gold, the European way of writing 14k. So a gram of 14k gold is worth 58.33% of what a gram of pure gold is worth. Every real karat of gold — 10k, 14k, 18k, 22k, 24k — has melt value, even broken, mismatched, or out-of-style pieces.",
    },
    {
      title: "Gold weights and units (gram, troy ounce, pound, bars)",
      text: "Gold is priced in troy ounces: 1 troy ounce = 31.1035 grams, and a pound of gold is about 14.58 troy ounces. Common gold bars: 1 gram, 1 troy ounce, 10 troy ounces, 1 kilo (32.15 troy ounces), and the 400 oz good-delivery bar banks use. Common gold coins run 8–34 grams — a standard 1 oz bullion coin like an American Eagle is 31.1 grams of gold content. What any of them is worth in dollars moves with the live spot price — check /gold-price for the number right now, or /gold-calculator to price a specific weight and karat.",
    },
    {
      title: "What Offramp pays (published payout band)",
      text: "Offramp's published payout is 80–90% of melt value, and the final price always comes from a recorded assay of the actual metal — an assay you can watch, not a guess over the internet. For comparison, pawn shops typically pay 20–55% of melt and local jewelers 40–60%. Every online range is provisional until the assay: that is honesty, not hedging.",
    },
    {
      title: "Typical weights of gold jewelry pieces",
      text: "If you don't have a scale, typical weights: a ring runs 2–8 grams (wedding bands 3–6 g), a chain 8–30 grams (heavy ones reach 50 g), a bracelet 8–25 grams, a single dental crown 2–6 grams, and small miscellaneous pieces 3–15 grams. Weigh-or-estimate, the karat stamp plus weight is all the math needs: the calculator at /gold-calculator turns them into a dollar range at the live spot price.",
    },
  ];
  return facts.map((f) => ({ source: "pricing", title: f.title, url: CALC, chunk: f.text }));
}

// ── run ───────────────────────────────────────────────────────────────────

const bySource = {
  glossary: glossaryRows(),
  site: siteRows(),
  methodology: methodologyRows(),
  pricing: pricingRows(),
};

for (const [source, rows] of Object.entries(bySource)) {
  await db.deleteWhere("ask_corpus", `source=eq.${source}`);
  for (let i = 0; i < rows.length; i += 200) {
    await db.insertBatch("ask_corpus", rows.slice(i, i + 200));
  }
  console.log(`${source}: ${rows.length} chunks loaded`);
}
console.log(`total: ${Object.values(bySource).reduce((s, r) => s + r.length, 0)}`);
