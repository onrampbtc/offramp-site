# Ask Offramp — data corpus & architecture v0.1 (2026-07-11)

What goes in the engine's brain, where it comes from, what it costs, and the capture schema. The corpus is the moat — the model is a commodity.

## 1. Owned corpus (RAG substrate — embed into Supabase pgvector)
| Source | Size | Feeds |
|---|---|---|
| /learn hub + guide/ pages + how-it-works | ~40 pages | Learn |
| Glossary (r9qnuhp8 Sanity) | 580 terms | Learn |
| Gold Buyer Score methodology + 9 buyer evidence files | goldbuyer repo | Match + Learn |
| State law research (24 states, statute-cited; 26 to go) | goldbuyer repo | Match + Learn |
| Pricing math: melt formulas, karat table, payout bands, spot history | Supabase spot_prices + spec §7 | Value + Learn |
| FAQ/objection bank (consult FAQs, comparison rows) | site copy | Learn |
| Seed question bank: Semrush/SpyFu question keywords + PAA scrapes ("how much is a 14k ring worth", "is selling gold taxable") | MCP pulls | Learn + cache priming |

Rebrand pass needed before embedding glossary (some entries carry "… | Onramp" SEO fields — strip metadata, embed body text only).

## 2. Live data (not embedded — fetched at answer time)
- Spot XAU/BTC (Supabase, cron-fed) — every Value answer is dated ("at today's $X/oz").
- Buyer directory queries by geo (below).

## 3. The buyer directory ("who buys gold near me")
Goal: top metros first (Texas → top 50 US metros → long tail), 5–10 legit buyers per metro.
- **Recommended source: Google Places API** (legit, structured: name/address/geo/hours/rating/phone). Text-search "gold buyer near {metro}", "we buy gold {metro}", "pawn shop gold {metro}". One-time bulk build for 50 metros ≈ 2–4k lookups ≈ low hundreds of dollars; refresh quarterly. (Scraping Google Maps directly = ToS violation + brittle — don't.)
- **Firecrawl layer on top:** crawl each buyer's own site for payout claims, fee language, testing method — feeds the honesty overlay and future scoring.
- **Two-tier ranking display (honesty law):** national buyers = full Gold Buyer Scores (evidence-cited). Local places = directory facts + Google rating, labeled **"not yet scored by our methodology"** — never fake a score. Offramp appears in every geography as top-ranked mail-in with the "ships from anywhere" explanation.
- Schema: `buyer_directory(id, name, kind[pawn|jeweler|refiner|mail-in], lat, lng, metro, state, address, phone, hours, google_rating, google_reviews_n, site_url, payout_claims jsonb, gbs_score nullable, last_verified)`.

## 4. Inference architecture (cheapest that's still good)
- **No self-hosted LLM.** Ops burden + quality risk exceed API cost at our volume; revisit only at >500k conversations/mo.
- **Router by task:** Learn/chat → Haiku tier (claude-haiku-4-5) with RAG (~1–3k tokens ≈ well under 1¢/answer). Value/photo → vision call, Haiku first, escalate to Sonnet only when hallmark confidence is low (~1–3¢/valuation). Embeddings → open-source model via pgvector (one-time pennies).
- **Cache-first:** precompute answers for the top ~200 questions (seeded from Semrush PAA) → served from DB at $0. Most traffic never touches the model.
- **Caps:** N free exchanges per anonymous session, then the continue/save email gate (aligns cost control with capture).
- Envelope math: 10k conversations/mo ≈ $50–150/mo inference. Not a cost problem; don't over-engineer.

## 5. Capture schema (Supabase — extends spec §12)
```
assistant_sessions(id, source_property, referrer, zip, started_at, email_id nullable)
assistant_messages(id, session_id, role, skill[value|learn|match], text, confidence, cost_cents, created_at)
question_log(id, normalized_q, first_asked, times_asked, answered_from[corpus|cache|model|refused], content_gap bool)  -- the flywheel table
leads(id, email, consent_marketing bool, consent_at, source_property, zip, persona_hints jsonb)
lead_items(id, lead_id, kind, karat, est_grams, photo_url, provisional_low, provisional_high, spot_at_estimate, created_at)
events(id, lead_id, type[estimate|save_to_ledger|kit_request|consult_booked|sold], meta jsonb, created_at)
```
`question_log.content_gap` drives the weekly ritual: gaps → new /learn pages → re-embed → better answers → more AEO surface. The repository writes its own backlog.

## 6. Privacy/copy laws
- Email checkbox copy: "market notes," not "specials" (register). Consent stored explicitly; unsubscribe in every send (Resend).
- Photos: stored private (Supabase storage), never public without separate consent; deletable on request.
- Every provisional number: "provisional — final price comes from the recorded assay." Never "appraisal."
