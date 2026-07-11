# Ask Offramp — concept doc v0.1 (2026-07-11)

Status: concept locked by Michael (name: **Ask Offramp**, network deployment, email at continue/save). Build phases below pending final go.

## Thesis

Ask Offramp is not a chatbot on a gold site. It is a **selling-decision engine** — the thing a person with valuables in a drawer actually needs: *what is this worth, what should I know, where should I sell it*. Deployed everywhere intent shows up, capturing email at the moment value is delivered, transparent about who runs it ("Powered by Offramp"). The properties are the mouths; the engine is the brain; Offramp-the-buyer is the best-ranked fulfillment path, not the only one shown — which is exactly why it's believable.

## The three skills

1. **Value** — photos in → hallmark/karat read + weight estimate → provisional per-piece range against live spot. Always labeled provisional; the recorded assay stays the only final price. (Liability law: never the word "appraisal"; footer already carries "informational, not insurance appraisals.")
2. **Learn** — answers grounded ONLY in our corpus: /learn hub, 580-term glossary (r9qnuhp8), methodology, state-law research files. Tax/legal → hedge + cite + route to a professional or /consult (human handoff is a feature: "ask a person" → HubSpot meetings).
3. **Match** — "buyers near you, ranked": goldbuyer.io's Gold Buyer Score + state pages by zip. No buyer shows you competitors; we can because we win an evidence-cited scorecard. Highest-trust answer to the highest-intent question in the category.

## The lead engine (Michael's law)

- First value is FREE (a range, an answer) — no gate. The gate is at **continue / save / send-me-this**: "email me this breakdown," "save these pieces to your ledger," "keep asking." Checkbox consent for specials/market notes.
- Every conversation yields structured lead data → Supabase (pieces, est. weights, zip, timeline, source property, questions asked). Resend nurtures. The ledger (beta) is the natural save destination — assistant and ledger are one funnel.

## Network deployment (build once, deploy everywhere)

- Core = API service in offramp-site (start as API routes): `value`, `learn` (RAG — Supabase pgvector over the corpus), `match` (goldbuyer dataset).
- Surfaces: (1) offrampgold.com **/ask** flagship page; (2) **embeddable widget** (precedent: /embed/calculator.html + /widget already exist); (3) satellite deployments — same name "Ask Offramp" everywhere, visibly "Powered by Offramp."
- goldvsbitcoin.org: clean fit (editorial reader → "what's my gold worth in BTC?" → engine).
- goldbuyer.io: ⚠️ TENSION — embedding the #1-ranked buyer's assistant on the ranking site weakens the third-party psychology. Options: (a) Match-skill-only UI (rankings explorer) with explicit disclosure; (b) keep assistant off goldbuyer until Phase D. Decision: Michael.
- Phase D channel (the sleeper): **partner embeds** — estate attorneys, probate clerks, divorce mediators, financial advisors get the co-branded widget for their sites/clients. They get a genuinely useful tool + answers; we get the exact moment gold changes hands in America. B2B2C distribution nobody in the category has.

## Flywheel

Conversations → log every question asked → unanswered/frequent questions become new /learn entries (weekly ritual, within the five-content-types law) → better corpus → better answers → more AEO surface (each Q is an indexable page) → more conversations. The repository literally writes its own backlog from real demand.

## Monetization split (LOCKED per Michael's instinct)

- **offrampgold.com: ad-free forever.** Its brand = nothing to sell but the truth. Revenue = the spread on first-party sell events the assistant warms up.
- **goldbuyer.io: the marketplace side.** Later sells labeled placement/leads to ranked buyers (FTC disclosure infra already built). LAW: **money never changes a score** — paid placement is labeled, rankings stay evidence-only, or the trust asset dies.

## Category expansion ("selling items", not just gold)

The value/learn/match architecture generalizes (watches, silver, diamonds, coins). Discipline: gold first — it's where we have the moat (live spot infra, methodology, rankings, glossary). Expansion trigger: assistant conversations showing sustained non-gold demand. Do not build watch valuation before the gold engine converts.

## Moats

1. Proprietary evidence corpus (methodology, scores, state laws, spot infra). 2. Question→content flywheel compounding AEO. 3. Owned-domain network + partner embeds. 4. The honest-broker position — incumbents can't copy "we'll show you our competitors" without torching their spread.

## Guardrails

- Provisional labels on every AI number; assay = final. No "appraisal." No fabricated precision (ranges + confidence).
- Grounded answers only; refuse/route beyond corpus. Disclaimers on tax/legal.
- Usage caps on anonymous sessions (cost + capture alignment).
- Satellites get the widget, not a brand takeover. Disclosure everywhere: "Ask Offramp is operated by Offramp."

## Build phases

- **A (next):** /ask page on offramp — photo→valuation flow (vision model), email checkbox at completion ("email me this breakdown + occasional specials"), save-to-ledger hook, Supabase lead tables + Resend. Ships standalone value.
- **B:** chat wrapper + RAG (pgvector) over /learn + glossary + methodology; question logging + weekly content ritual.
- **C:** Match skill (goldbuyer data by state/zip); embeddable widget; gvb deployment ("Powered by Offramp").
- **D:** partner-embed program; goldbuyer deployment decision; expansion review.

## Open decisions (Michael)

1. goldbuyer.io deployment shape (Match-only vs full vs none-for-now).
2. Expansion appetite/timing beyond gold.
3. Phase A greenlight.
