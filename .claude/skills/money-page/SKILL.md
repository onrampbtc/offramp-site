---
name: money-page
description: >
  The Offramp content-marketing production line. Use whenever building or revising ANY
  public page on offrampgold.com or its satellites — calculators, price tables, worth
  pages, guides, learn/thesis pages, proof assets — or when the user says "ship a page",
  "next page from the backlog", "content marketing", or names a target keyword. Enforces
  the five-content-type law, Estate Paper design, GEO structure, and the
  intel→build→verify→ship loop.
---

# Money Page — the Offramp content production line

You are producing a page whose job is to rank, get cited by AI engines, and convert
visitors into photo estimates. Every page follows this line, in order. The constitution
is `docs/BUILD-SPEC.md`; this skill operationalizes it.

## Step 0 — Qualify (30 seconds, non-negotiable)
- Name the content type: **calculator · price table · worth · guide · learn · proof**.
  If it fits none, STOP — it doesn't get built (spec content law).
- Confirm it's on the backlog in `docs/STATE.md` (or add it with a keyword + volume).
- One primary keyword per page; no two pages may share one.

## Step 1 — Intel (before writing a line of code)
1. **Semrush** (MCP): confirm the primary keyword's live volume + who ranks top 5.
   Pull 3–5 secondary keywords from the same cluster and the question keywords
   (these become the FAQ blocks).
2. **SpyFu** (API key in .env.local): check if competitors BUY this keyword —
   `ad_history_api/domain_ad_history?d={domain}&r=40&api_key=` shows their ad copy.
   A keyword they pay for is proven commercial intent; mirror the promise their ad
   makes (payout, speed, safety) in our direct answer, honestly.
3. **Firecrawl**: scrape the top-ranking competitor page for this keyword (usually
   thealloymarket.com). Extract: their H1, section order, table structures, FAQ
   questions, word count, schema types. We clone the *skeleton that already ranks*,
   then beat it on: freshness (dated facts), honesty (three-way payout table),
   schema depth, and page speed.
4. Note the findings in one short comment block at the top of the page's data file.

## Step 2 — Build from the template (spec §9)
- One React template per content type; pages are **data files** under `src/content/`
  (JSON/MDX). Never fork a template for one page — extend the data schema.
- Server-rendered, ISR `revalidate: 86400`.
- Required on every page: breadcrumbs + BreadcrumbList · internal links (1 hub +
  2–3 siblings + estimate CTA) · dated-fact sentence · footer estimate CTA.
- CTA copy comes verbatim from spec §4's CTA table. "Cash out" never appears on
  first-contact surfaces.

## Step 3 — Estate Paper execution (design excellence, constrained)
The aesthetic direction is already chosen — an appraiser's letterhead meets a family
album. Do not invent a new direction per page; the craft is precision within it:
- Tokens from `globals.css` only (`--bg #F7F2E7` paper default; dark `--panel` solely
  for instrument insets: tickers, per-gram grids, camera, assay player).
- Type trio, max two voices per section: Cormorant (display serif) · Sora (body) ·
  **DM Mono with `tabular-nums` for every number** — prices, weights, purities,
  serials, phone. A number in Sora is a bug.
- Ink-pill primary buttons, hairline-pill secondary. Gold is an accent color on
  light, never a button fill.
- White cards, 0.5–1px `--line` borders, radius 12px, no shadows.
- Certificate motifs are the personality: serials, dated readings
  ("XAU $3,412.10 · 2026-07-09"), hairline specimen tables, the stamped-seal footer.
- Motion: none on the LCP path; fade-in-on-scroll only, honoring
  `prefers-reduced-motion`. Shimmer/glow/pulse are banned.
- The generic-AI-slop test still applies (no cookie-cutter hero + three-card layouts,
  no timid evenly-spread palettes): if the page could belong to any gold site, add
  the Offramp specifics — real numbers, dated readings, honesty tables — until it
  couldn't.
- **Read `CRAFT-AUDIT.md` (same folder) and obey its hard rules**: hero discipline
  (≤2-line headline, ≤20-word sub, ≤4 text elements), eyebrow cap, zigzag cap,
  section-layout variety, decoration bans, no em-dashes in new copy, finish states.
  Its ⚖ section lists conflicts already resolved in the spec's favor — don't "fix" those.

## Step 4 — GEO layer (why AI engines will cite us)
- **Direct answer first**: 40–80 words under the H1/question H2 answering the query
  outright, containing the primary keyword in sentence one, with a specific number.
  Detail after, never before.
- **Dated-fact sentence**, auto-generated from live spot, e.g. "As of July 10, 2026,
  14k gold melts at $63.98/gram; a fair mail-in offer is $52–56/gram." Matching
  `dateModified` in schema.
- Schema stack per type: FAQPage (3–5 real question-keywords) on every money page;
  HowTo where stepwise; VideoObject for assays; Review/AggregateRating only when real.
- Copy rules: short paragraphs (2–3 sentences), subhead every 3–4 paragraphs, tables
  over prose for comparisons, no hedging in answers, no exclamation marks, never
  "unlock the value" / "turn clutter into cash" / urgency theater.

## Step 5 — Verify (nothing ships unverified)
0. Run the CRAFT-AUDIT.md pre-flight checklist — it's mechanical, not vibes.
1. `npm run build` clean.
2. Preview: page renders, calculator math correct at current spot, dated sentence
   shows today, all internal links resolve.
3. Schema passes Google Rich Results test structure (validate the JSON-LD parses and
   types are complete).
4. Mobile viewport check — these pages are majority-mobile traffic.

## Step 6 — Ship + record
1. Add URL to sitemap; confirm robots allows.
2. Update `docs/STATE.md`: flip the backlog mark ▢→●, add to shipped log.
3. Commit (one page = one commit, message names keyword + volume) and push —
   Vercel auto-deploys. Ping IndexNow route if configured.

## Checklist (paste into the commit body)
```
[ ] content type named + on backlog       [ ] direct answer 40–80w w/ number
[ ] Semrush volume + cluster confirmed    [ ] dated-fact sentence live
[ ] competitor teardown done (Firecrawl)  [ ] FAQPage + Breadcrumb schema
[ ] template + data file (no fork)        [ ] hub/sibling/estimate links
[ ] numbers in DM Mono tabular-nums       [ ] build + preview + mobile verified
[ ] CTA copy verbatim from spec §4        [ ] STATE.md updated
```
