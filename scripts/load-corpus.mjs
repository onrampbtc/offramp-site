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

// ── run ───────────────────────────────────────────────────────────────────

const bySource = {
  glossary: glossaryRows(),
  site: siteRows(),
  methodology: methodologyRows(),
};

for (const [source, rows] of Object.entries(bySource)) {
  await db.deleteWhere("ask_corpus", `source=eq.${source}`);
  for (let i = 0; i < rows.length; i += 200) {
    await db.insertBatch("ask_corpus", rows.slice(i, i + 200));
  }
  console.log(`${source}: ${rows.length} chunks loaded`);
}
console.log(`total: ${Object.values(bySource).reduce((s, r) => s + r.length, 0)}`);
