# STATE — living status board

> Read first every session. Update before every shipping commit. Statuses: ▢ todo · ◐ in progress · ● done · ⊘ blocked.
> Last updated: 2026-07-10

## Current milestone: **M1 — COMPLETE ✓ (2026-07-10)** → next: M3 money pages

| # | M1 item | Status |
|---|---|---|
| 1 | Estate-paper tokens replace dark default (globals.css `@theme`) | ● |
| 2 | Delete `.text-gold-shimmer`, `.glow-gold`, pulse rings, shimmer keyframes | ● |
| 3 | Real phone everywhere (`NEXT_PUBLIC_PHONE`, nav + footer + schema) | ● |
| 4 | Homepage per spec §6 (ticker + review line hidden until real data) | ● |
| 5 | Supabase project + schema §12 + RLS | ● 20 tables + RLS live (ref cbqqtyenksrbhtzfxika, us-east-2) |
| 6 | Spot cron (`/api/cron/spot`) accruing daily rows | ● verified end-to-end in prod; daily 11:00 UTC |
| 7 | Redirect map §3: sell-X-for-bitcoin → /gold-to-bitcoin ● · blog/* 301s land in M3 with targets | ◐ |
| — | Acceptance: Lighthouse mobile ≥90 home · no placeholder phone · spot rows daily | |

Next milestones: M2 estimate flow → M3 money pages → M4 vault → M5 lane 2 + proof → M6 scale. Full criteria in spec §16.

## Content inventory (backlog — build in this order within each type)
- **Prices: ● 14k-per-gram SHIPPED 2026-07-10** (74k/mo target; dated facts from DB, honesty table, sparkline-as-history-accrues)
- **Calculators (15):** ▢ scrap-gold (27.1k) · ▢ 14k · ▢ pawn-comparison · ▢ dental · ▢ melt-value · ▢ 10k · ▢ 18k · ▢ 24k · ▢ gold-coin · ▢ class-ring · ▢ wedding-band · ▢ silver · ▢ platinum · ▢ gold-to-btc-converter · ▢ cash-for-gold
- **Prices (6):** ● 14k-per-gram · ▢ 10k · ▢ 18k · ▢ white-gold · ▢ dental-gold · ▢ hub
- **Worth (12):** ▢ gold-chain · ▢ class-ring · ▢ wedding-band · ▢ dental-gold · ▢ 5-dollar-gold-coin · ▢ krugerrand · ▢ gold-watch · ▢ grillz · ▢ charm-bracelet · ▢ white-gold-ring · ▢ 10k-gold-ring · ▢ inherited-jewelry-box
- **Guides (8):** ▢ where-to-sell-gold · ▢ how-to-sell-gold · ▢ is-it-a-good-time · ▢ pawn-shop-gold-prices · ▢ tax-on-selling-gold · ▢ how-to-weigh-gold-at-home · ▢ spot-vs-melt-vs-retail · ▢ avoid-gold-buyer-scams
- **Learn (6):** ▢ gold-vs-bitcoin · ▢ is-gold-a-good-investment · ▢ currency-debasement · ▢ should-i-sell-gold-for-bitcoin · ▢ gold-btc-ratio · ▢ what-to-do-with-inherited-gold
- **Proof:** ▢ methodology · ▢ payouts ledger · ▢ assay video #1 · ▢ reviews

## Michael's checklist (external — agent cannot do these)
- ▢ Trademark knockout search "Offramp" in financial services (pre-M1, spec §18)
- ▢ Onramp written referral + name-peace agreement
- ▢ Grab @offrampgold on X / YouTube / LinkedIn
- ◐ Business email — Google Workspace Business Starter flexible monthly is active. Admin console shows `michael@offrampgold.com` active, created Jul 9, 2026, with aliases `hello@offrampgold.com`, `support@offrampgold.com`, and `clients@offrampgold.com` on the user profile. Google setup page shows Gmail is now ready. Public DNS shows Google MX (`smtp.google.com`), Google SPF (`include:_spf.google.com`), and DMARC monitor record (`p=none`). Google DKIM is not yet present. Next: generate DKIM and run send/receive/reply tests.
- ● Confirm 512-983-5997 is the OpenPhone line (confirmed 2026-07-10)
- ● Supabase fully wired (keys in Vercel, migration applied, cron storing) — done 2026-07-10
- ▢ Resend account + API key
- ▢ TX precious-metals dealer registration (blocks purchases, not build)
- ▢ New HubSpot instance (optional, later — never the Onramp one)

## Workstream: goldbuyer.io ranking site (Phase 2 — PULLED FORWARD 2026-07-10, owner decision)
- Spec §3.3 authority play accelerated from month 4. Justification: SpyFu shows CFGUSA paying for third-party-ranking keywords; Alloy's converting ad angle is geo "Biggest Payouts In [State]".
- ● Methodology v1.0 written (`apps/goldbuyer/src/data/methodology.ts`): payout 30 · proof 25 · tracking 15 · service 10 · tech 10 · reputation 10; tier grades; FTC disclosure text; honesty rules (Offramp scored by same rubric, real weaknesses shown).
- ● Research complete: 8 competitor evidence files + 12 state-law files (real statutes: AZ cash-payout ban, NC hotel-buy ban, FL felony rule) in `apps/goldbuyer/research/`.
- ● buyers.ts scored: **Offramp 70.5 B- #1** (wins payout 90 + proof 70; reputation 20 shown honestly) · Worthy 67.8 · GoldFellow 60 · EGC 59 · SYG 57.8 · **Alloy 56 (#6 — publishes no rate)** · Abe Mor 36.5 · **CFGUSA 29 (biggest ad spender, least disclosure)** · Luriya 29. No buyer above B- = the editorial headline.
- ● **SHIPPED LIVE 2026-07-10:** rankings homepage (ItemList schema) · /methodology (full rubric) · /reviews/[buyer] ×9 (line-by-line evidence) · /states/[state] ×12 (cited statutes + FAQPage) · FTC disclosure sitewide · Offramp NAP removed for entity hygiene · sitemap +22. All verified 200 with content.
- ▢ Next: remaining 38 states · quarterly re-score ritual · comparison pages ([A] vs [B]) · GSC submission.
- Targets: "best place to sell gold" 3,600/mo · "+near me" 2,400/mo · 50× "sell gold [state]" long-tail.

## Satellites
- **gold-domains** repo (`~/Desktop/gold-domains`): ● **deploys healed + restructure LIVE (2026-07-10)** — goldtobtc.com 308→offrampgold.com/gold-to-bitcoin · goldbuyer.io/reviews 308→touchstonereport.com · goldbuyer /gold-price per-karat + Dataset JSON-LD serving · gold-buyer builds Ready in ~37s on push.
- goldvsbitcoin.org repoint to /learn/ = wk 7–8 (M5). goldbuyer.io ranking site = Phase 2, month 4+.

## Shipped log
- 2026-07-10 (late): **Consult layer ×3 sites** — /consult pages (no-fee, no-requirement gold consults) with HubSpot meetings embed (new NA2 instance, michael-tanguma calendar), 'powered by Offramp Gold' on satellites, FAQPage schema, footer links, /austin + /family-vault cross-links, sitemaps. **goldvsbitcoin content wave**: 16 articles published + confirmed rendering live (6 Compare + 5 Bitcoin 101 + 5 Gold 101); glossary deepening in flight (batch 9 of 9 done first: 30/30 published; 8 batches + top-60 premium set pending). llms.txt ×3 live. IndexNow: 31 URLs pinged.
- 2026-07-10: **M1 shipped.** Estate Paper reskin (token-layer, whole site), homepage rebuilt per §6 (split hero + vault preview + live strip + honesty table + dark thesis band), nav/footer rebuilt (phone, NAP, seal, satellites), /calculators hub + /family-vault (waitlist) + /austin (LocalBusiness schema) created, 7 BTC-keyword pages 301→/gold-to-bitcoin, shimmer/glow/pulse deleted, spot cron + Supabase migration + vercel.json crons in place.
- 2026-07-10: CRAFT-AUDIT.md added to /money-page skill — anti-slop rules harvested from taste-skill v1.5 + redesign-skill (61k-star repo the user asked about, name recalled as 'Matt Ball'), fonts/colors excluded (Estate Paper owns those), conflicts resolved spec-first.
- 2026-07-10: `/money-page` project skill created (.claude/skills/money-page) — the content production line: Semrush intel → Firecrawl teardown → template build → GEO layer → verify → ship. Use it for every public page.
- 2026-07-10: Vendored emilkowalski/skills design-engineering reference into `docs/design-skills/` (audited clean; BUILD-SPEC wins on conflicts — see OFFRAMP-NOTES.md). Desktop copy at `~/Desktop/design-skills-emilkowalski/` for cross-project use.
- 2026-07-10: Command center installed (CLAUDE.md + docs/), repo untangled, v1.1 spec canon.
- 2026-06-22 *(pre-spec, dark theme — superseded but live)*: /gold-price per-karat + Dataset/FAQ JSON-LD · /gold-calculator shareable URLs · /embed/calculator.html + /widget · kit-request/newsletter HubSpot-dormant wiring. These URLs survive; rebuild on Estate Paper templates per migration rules.
- 2026-07-09: Root-caused + fixed 105-day Vercel deploy failure (git author not a team member).

## Standing intel notes
- Semrush re-pull monthly (MCP tools; US db). Key baselines 2026-07-09: alloy 25,248 kw / 33,969 visits · offrampgold 187 kw / ~0 visits.
- **SpyFu (API, key in .env.local + KPI & Dashboards/.env) corrects the paid picture (2026-07-10):** Alloy spends **$65,870/mo** on PPC (2,852 ads, avg ad rank 2.3 — not the $950 Semrush showed); CFGUSA spends **$90,960/mo** (3,730 ads, 16,450 paid clicks). Combined ~$157k/mo of rented traffic on exactly the question keywords our money pages target organically ("how much is scrap gold worth", "10 k gold value", "how do i sell gold jewelry").
- **Converting ad angles to counter/steal:** Alloy = geo-personalized "Biggest Payouts In [State]" + question keywords; CFGUSA = heavy brand-defense on "cash for gold usa reviews", "Guaranteed Highest Payouts", "Paid in 24 Hrs", and third-party validation ("#1 By TopConsumerReviews" — the exact psychology goldbuyer.io's Phase-2 ranking site harvests).
- SpyFu working endpoints: `domain_stats_api/v2/getLatestDomainStats?domain=&countryCode=US&api_key=` · `ad_history_api/domain_ad_history?d=&r=&api_key=` · full index: developer.spyfu.com/llms.txt. Raw pulls in .firecrawl/spyfu/ (gitignored).
- Old sitemap/xlsx keyword artifacts are superseded — archive only.
