# STATE — living status board

> Read first every session. Update before every shipping commit. Statuses: ▢ todo · ◐ in progress · ● done · ⊘ blocked.
> Last updated: 2026-07-10

## Current milestone: **M1 — Reskin + foundation** (spec §16)

| # | M1 item | Status |
|---|---|---|
| 1 | Estate-paper tokens replace dark default (globals.css `@theme`) | ▢ |
| 2 | Delete `.text-gold-shimmer`, `.glow-gold`, pulse rings, shimmer keyframes | ▢ |
| 3 | Real phone everywhere (`NEXT_PUBLIC_PHONE`, nav + footer + schema) | ▢ |
| 4 | Homepage per spec §6 (ticker + review line hidden until real data) | ▢ |
| 5 | Supabase project + schema §12 + RLS | ⊘ needs Supabase project (Michael) |
| 6 | Spot cron (`/api/cron/spot`) accruing daily rows | ⊘ needs Supabase |
| 7 | Redirect map §3: blog/* → guides/learn; sell-X-for-bitcoin → /gold-to-bitcoin | ▢ |
| — | Acceptance: Lighthouse mobile ≥90 home · no placeholder phone · spot rows daily | |

Next milestones: M2 estimate flow → M3 money pages → M4 vault → M5 lane 2 + proof → M6 scale. Full criteria in spec §16.

## Content inventory (backlog — build in this order within each type)
- **Calculators (15):** ▢ scrap-gold (27.1k) · ▢ 14k · ▢ pawn-comparison · ▢ dental · ▢ melt-value · ▢ 10k · ▢ 18k · ▢ 24k · ▢ gold-coin · ▢ class-ring · ▢ wedding-band · ▢ silver · ▢ platinum · ▢ gold-to-btc-converter · ▢ cash-for-gold
- **Prices (6):** ▢ 14k-per-gram (74k/mo!) · ▢ 10k · ▢ 18k · ▢ white-gold · ▢ dental-gold · ▢ hub
- **Worth (12):** ▢ gold-chain · ▢ class-ring · ▢ wedding-band · ▢ dental-gold · ▢ 5-dollar-gold-coin · ▢ krugerrand · ▢ gold-watch · ▢ grillz · ▢ charm-bracelet · ▢ white-gold-ring · ▢ 10k-gold-ring · ▢ inherited-jewelry-box
- **Guides (8):** ▢ where-to-sell-gold · ▢ how-to-sell-gold · ▢ is-it-a-good-time · ▢ pawn-shop-gold-prices · ▢ tax-on-selling-gold · ▢ how-to-weigh-gold-at-home · ▢ spot-vs-melt-vs-retail · ▢ avoid-gold-buyer-scams
- **Learn (6):** ▢ gold-vs-bitcoin · ▢ is-gold-a-good-investment · ▢ currency-debasement · ▢ should-i-sell-gold-for-bitcoin · ▢ gold-btc-ratio · ▢ what-to-do-with-inherited-gold
- **Proof:** ▢ methodology · ▢ payouts ledger · ▢ assay video #1 · ▢ reviews

## Michael's checklist (external — agent cannot do these)
- ▢ Trademark knockout search "Offramp" in financial services (pre-M1, spec §18)
- ▢ Onramp written referral + name-peace agreement
- ▢ Grab @offrampgold on X / YouTube / LinkedIn
- ▢ hello@offrampgold.com created + warming
- ▢ Confirm 512-983-5997 is the OpenPhone line
- ▢ Create Supabase project (unblocks M1 items 5–6, all of M2/M4)
- ▢ Resend account + API key
- ▢ TX precious-metals dealer registration (blocks purchases, not build)
- ▢ New HubSpot instance (optional, later — never the Onramp one)

## Satellites
- **gold-domains** repo (`~/Desktop/gold-domains`, onrampbtc/gold-domains @ d4213c5): goldtobtc 301→Offramp committed ✓ · goldbuyer /reviews stripped ✓ · goldvsbitcoin glossary build-crash fixed ✓. ⊘ **Vercel deploys unproven since the git-author fix** — next push tests it; if UNKNOWN again, inspect project build settings in dashboard.
- goldvsbitcoin.org repoint to /learn/ = wk 7–8 (M5). goldbuyer.io ranking site = Phase 2, month 4+.

## Shipped log
- 2026-07-10: Command center installed (CLAUDE.md + docs/), repo untangled, v1.1 spec canon.
- 2026-06-22 *(pre-spec, dark theme — superseded but live)*: /gold-price per-karat + Dataset/FAQ JSON-LD · /gold-calculator shareable URLs · /embed/calculator.html + /widget · kit-request/newsletter HubSpot-dormant wiring. These URLs survive; rebuild on Estate Paper templates per migration rules.
- 2026-07-09: Root-caused + fixed 105-day Vercel deploy failure (git author not a team member).

## Standing intel notes
- Semrush re-pull monthly (MCP tools; US db). Key baselines 2026-07-09: alloy 25,248 kw / 33,969 visits · CFGUSA $32,382/mo paid · offrampgold 187 kw / ~0 visits.
- Old sitemap/xlsx keyword artifacts are superseded — archive only.
