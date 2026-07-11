# Ask Offramp — product roadmap v0.1 (2026-07-11)

Companion to CONCEPT.md (thesis, skills, guardrails). This file is the build sequence and the business tracks. Update it the way STATE.md gets updated: every time a phase ships or a decision lands.

## Locked decisions (Michael, 2026-07-11)
- **Scope: gold + precious metals only at launch** (silver/platinum/coins ride the same spot-price math). Broader "sell anything" expansion is demand-driven: the question log tells us when watches/diamonds/etc. justify the build. No speculative categories.
- **goldbuyer.io runs Ask Offramp white-labeled** — presented as the site's assistant ("powered by Ask Offramp" disclosure), Match skill front and center. Bi-directional flywheel: Ask Offramp (flagship) cites goldbuyer rankings as evidence; goldbuyer's assistant surfaces Offramp naturally because mail-in ranks everywhere ("find a place near you — or the top-ranked option ships anywhere").
- **Third-party embeds are a real product track** (SaaS potential; eventually its own sales motion). Build the widget so white-labeling is config, not code.
- **Cost posture:** cheapest serious inference, no self-hosted LLM ops burden.

## Phase A — the Valuation flow (BUILD NEXT)
/ask on offrampgold.com: photo upload → vision model reads hallmark/karat cues + weight estimate (user confirms/adjusts) → provisional per-piece ranges vs live spot → completion checkbox: "Email me this breakdown + occasional market notes" → save-to-ledger hook.
- Ships standalone; no chat needed. Supabase lead tables + Resend wired.
- Acceptance: photo→range in <60s; provisional labels everywhere; email consent recorded with source property; lead row visible in Supabase.

## Phase B — Learn (chat + RAG)
Chat wrapper grounded ONLY in owned corpus (see DATA-CORPUS.md) via pgvector. Question logging from day one → weekly content ritual (gaps become /learn pages). Answer cache for the top ~200 questions (serve from DB, zero inference).
- Acceptance: refuses/routes out-of-corpus; tax/legal hedged + routed to /consult; question_log populating.

## Phase C — Match (the map) + widget + satellite deployments
"Who buys gold near me": buyer directory (DATA-CORPUS.md §3) on a map, overlaid with our two-tier ranking — national buyers carry full Gold Buyer Scores; local places carry directory facts + "not yet scored" honesty. Offramp appears in every geography as the top-ranked mail-in.
- Embeddable widget (pattern: existing /embed/calculator.html), config-driven branding → gvb deployment + goldbuyer white-label.
- Acceptance: zip → map + ranked list in <2s; FTC/operated-by disclosure on satellites; every surface captures to the same lead spine.

## Phase D — the platform track
Partner embeds (estate attorneys, mediators, advisors, CPAs): co-branded widget, partner dashboard (their leads/questions), pricing TBD (likely free→paid tiers). This is the SaaS seed. Future: sales rep once ≥10 organic partner installs prove pull.

## Parallel track — flagship site (sequence per STATE.md)
1. Michael's design verdict on chique-v3-verdant → merge → deploy.
2. Token-swap satellites to the verdant system (same one-file pattern as the champagne rollout).
3. Content pushes continue (money pages, states 26 remaining, glossary rebrand pass).
Ask Offramp Phase A starts in parallel with (2) — different files, no conflicts.

## Needs from Michael
- Design verdict on chique-v3-verdant (blocks merge + satellite rollout).
- Phase A greenlight.
- Google Places API key (recommended for the directory; ~$17/1k lookups, one-time bulk build ≈ low hundreds of $) — or bless the Firecrawl-only start (slower, patchier coverage).
- Anthropic API key for the assistant (Haiku tier) when Phase A/B starts.
