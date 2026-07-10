# Offramp — Master Build Plan v2.0

**The family way to know, keep, and sell your gold.** Photo-first estimates, a shared family vault, XRF assay on video, paid in dollars or bitcoin.

Version 2.0 — July 9, 2026. Supersedes v1.0. Single source of truth for website, product, funnel, brand, content engine, infrastructure, and operations. Written to be loaded into Claude Code (or any builder) section-by-section.

---

## How to use this document

- Each numbered section is a self-contained build spec. Hand Claude Code one section at a time ("build §5.2 per the master plan").
- The **Content Inventory (§7)** is the living backlog — every page has a status column. Update it as pages ship.
- The **Changelog** (bottom) records every meaningful change to this plan. Bump the version when strategy changes, not when pages ship.
- **Operating rule:** robust but simple. One database, one host, one content system, five content types. If a proposal adds a second system, it needs to displace one.

---

## 1. Business definition

- **Model:** Buy gold at 80–90% of melt from consumers, refine at 97–98%, keep the spread. Mail-in nationally + appointment drop-off in Austin, TX.
- **Unit economics:** avg kit $1,500–3,000 melt → **$250–450 gross/kit** at 12–18% spread. Conviction-lane bullion sellers: $5–50k/transaction. North star: **kits/month**.
- **The wedge (in order):**
  1. **Photo estimate** — answers "what's it worth" without karat/weight knowledge. No competitor has it.
  2. **Family vault** — shared heirloom inventory with invited family members. Dissolves the real blocker in estate selling (family consensus) and makes every invite free acquisition of a user who has gold. This is Heirfolo, pulled forward as a feature.
  3. **XRF assay on video** — proof no competitor offers ("watch your assay live").
  4. **Bitcoin payout via Onramp referral** (+1–2% bonus) — undefended position, margin story, press hook. NOT an acquisition channel (~20 searches/mo).
- **Ownership:** personal venture, standalone brand "Offramp" (offrampgold.com). Onramp = referral partner only ("Bitcoin payouts powered by Onramp"); written agreement required; never hold/transmit BTC (wire USD to seller's own Onramp account).

## 2. Positioning & brand — "Estate Paper" (Angle A, chosen)

**World:** an appraiser's letterhead meets a family album. Warm paper, ink, one gold line, real hands and real pieces. Human first, precise underneath — keep instrument credibility (mono numbers, live spot, serials) inside warm framing.

### Tokens
```
--bg:      #F7F2E7   (estate paper)
--raise:   #FFFFFF   (cards)
--ink:     #241F15   (text, primary buttons)
--ink-2:   #756C58   (secondary text)
--line:    #EAE2D0   (hairlines)
--gold:    #8A6D1F   (accent text on light) / #B8941F (stars, marks)
--teal:    #2F6D5E   (value-up, positive data)
--coral:   #AC4E28   (warnings, pawn comparisons)
--panel:   #171410   (dark instrument insets: camera, tickers, assay player)
```
- **Type:** serif display (Cormorant retained, or Iowan/Palatino stack), humanist sans body (Sora retained ok), mono for ALL numbers (tabular-nums). Max two voices per section.
- **Buttons:** ink pill primary, hairline pill secondary. No gradients, no shimmer, no glow, no pulse animations (LCP + credibility).
- **Dark room exception:** /gold-to-bitcoin section stays dark (#0B0A08 + flat #C9A84C) — the door to it from the homepage is a dark thesis band.

### Voice & language system (the family layer)
- Estimate: "We'll read the hallmark and give you an honest range."
- Vault: "The family gold, finally in one place." · "Manage the heirlooms until you're ready." · "Invite your siblings — everyone sees the same numbers." · "Sell only when everyone's ready."
- Items are named by story, not SKU: "Grandma's wedding band," "Dad's Krugerrand" (user-editable names, prompted at save).
- Never: "unlock value," "turn clutter into cash," urgency theater, countdown timers. The 48h price lock is the only urgency mechanic and it's honest.

### CTA copy system
| Surface | Primary | Secondary |
|---|---|---|
| Homepage | See what it's worth | Start a family vault |
| Calculator result | Get an exact range from a photo | Lock this price — free kit |
| Estimate result | Lock this price for 48h — free kit | Save to your family vault |
| Vault (owner) | Get a free kit for these pieces | Invite family |
| Price alert | Your vault is up — lock today's prices | See my vault |
| Thesis pages | Check your gold in 60 seconds | Read the methodology |

## 3. Market data (verified 2026-07-08, Semrush US)

| Domain | Organic kw | Visits/mo | Paid/mo | Read |
|---|---:|---:|---:|---|
| thealloymarket.com | 25,311 | 33,946 | $950 | Leader; calculator moat; #9–16 on head terms — beatable |
| cashforgoldusa.com | 3,996 | 2,287 | $32,372 | Organic collapsed; renting clicks at $6–11 |
| veldtgold.com | 350 | 134 | $0 | Dormant; gold→BTC position undefended |
| offrampgold.com | 185 | ~0 | $0 | Clean slate |

**Lane 1 — value discovery (~200k+/mo):** 14k gold price per gram 74,000 · gold calculator 49,500 · scrap gold calculator 27,100 · gold price today 14k 27,100 · gold scrap calculator 12,100 · gold price calculator 12,100 · how much is 14k per gram 8,100 · how much is 14k worth 6,600 · scrap gold prices 5,400 · how much is 10k worth 4,400 · 14k per gram at pawn shop 3,600 · gold melt calculator 2,400.

**Lane 1b — transactional/local:** sell gold near me 18,100 · cash for gold 18,100 · sell gold 12,100 ($5.95 CPC) · where to sell gold (+near me) 10,800 · how to sell gold 2,900 · sell gold online 1,900 ($10.85) · sell gold jewelry 1,600 · sell dental gold 390 ($6.97) · sell gold austin 140.

**Lane 2 — conviction/education (~14k/mo Google + outsized AI-engine share):** is gold a good investment 5,400 · debasement 4,400 (rising) · bitcoin vs gold 1,600 (comp ≈ 0) · gold vs bitcoin 1,000 (comp ≈ 0) · currency debasement 720 · sell gold for bitcoin **20** (differentiator, not acquisition — never plan traffic here again).

**Effort split: 70% lane 1 · 20% lane 2 · 10% lane 3 (local).**

### Clone / kill
**Clone:** Alloy's calculator-first architecture, pawn-comparison pages (2 of their top 10), item-specific worth pages, live payout ticker, kit CTA doubled, insurance headline, logo strips. CFGUSA's speed promise + free-return guarantee.
**Kill:** form-first funnels; manual-only calculators; generic blog/listicles; fake trust (placeholder phone, unverifiable claims); crypto-dark on seller pages; decorative animation. **Five allowed content types: calculator · price table · worth page · thesis page · proof asset.** Anything else doesn't get built.

## 4. Product spec

### 4.1 Estimate flow (mobile-first web)
1. **Capture** — camera via `<input capture>`, overlay guidance ("center the hallmark · 14K · 585 · 750"), gallery upload, tips. "No account needed."
2. **Reading** — hallmark result, est. weight range, numismatic check (flags coins worth over melt), estimate serial (EST № NNNNN), spot locked to reading time. Trust theater with real function.
3. **Fork** — range "$410–560 · at 82% of spot · final price on video assay" → [Lock 48h — free kit] / [Save to your family vault].
- Vision: image → Claude vision → `{type, hallmark_text, karat_evidence, weight_range_g, numismatic_flag, confidence}` → range = weight × purity × spot × payout rate. Show ranges, never points. Every completed XRF assay = labeled training data.

### 4.2 Family vault (the Heirfolo layer)
- **Vaults** are shared containers. Roles: **owner** (creates, can request kits, manages members), **member** (adds/edits items, comments), **viewer** (read-only — grandma-friendly).
- **Invite** by email or SMS link; invitee lands on the vault with one-tap Google or magic-link signup. Each invite = acquisition.
- **Item cards:** photo, story-name, estimate range, trend arrow, numismatic flag, notes ("from Aunt Ruth, 1962").
- **Consensus mechanic (v1.1):** optional "family sign-off" toggle — kit request notifies all members; sale proceeds only after owner confirms. Marketing line: "Sell only when everyone's ready."
- **Monthly statement email** to all members: vault total, movers, market note. The retention engine and Heirfolo's seed behavior.
- Guardrail metric: vault→kit conversion. The vault is the patient path, not a museum.

### 4.3 Accounts & auth (strategic call)
- **No account to estimate. Ever.** Identity is requested only when it stores value for the user:
  - Save/track or accept invite → **Google One Tap** (primary — covers the demographic, one tap, gives verified email) + **email magic link** (fallback, no password anywhere).
  - **Skip Facebook login v1**: review overhead + breach stigma + adds a system; revisit only if signup drop-off data demands it. **Add Apple Sign-In** when the native app ships (App Store requirement).
- Sell → name + shipping address. Payout → government ID (TX licensing). Progressive, never earlier than needed.
- Strategic value of the account = vault persistence + family sharing + alert permission (email/SMS = the marketing asset).

### 4.4 Offer tracker
kit delivered ✓ → received ✓ → **assay in progress (watch live)** → offer (accept / free return) → payout (wire 48h / BTC +1.5% via Onramp). Every state change = email/SMS. The "watch live" step is the uncopyable moment.

## 5. Site architecture

```
offrampgold.com
├── /                      Estate-paper home: family headline, estimate CTA,
│                          vault preview card, payout ticker, pawn table,
│                          dark thesis band → /gold-to-bitcoin
├── /estimate              W2 flow. Landing indexed; app steps noindex.
├── /vault                 Family vault app. Noindex. /vault/join/[invite]
├── /calculators/          15 instances (template §5.1)
├── /prices/               6 live daily tables (template §5.2)
├── /worth/                12+ item pages (template §5.3)
├── /guides/               8 question pages (template §5.4)
├── /learn/                6 thesis pages — lane 2 hub (template §5.5)
├── /austin/               Local hub: appointment booking, GBP, map
├── /gold-to-bitcoin/      Dark room: thesis, ratio chart, payout bonus, Onramp handoff
├── /proof/                methodology · assay videos · payouts ledger · reviews
├── /family-vault          Marketing page for the vault (conversion, light SEO)
└── llms.txt · sitemap.xml · robots.txt
```
**Satellites:** goldbuyer.io, goldtobtc.com, goldvsbitcoin.org — thin, embed the estimate widget, deep-link to money pages. goldvsbitcoin.org → /learn/. Authority concentrates on the main domain.

### Template specs
- **5.1 Calculator:** H1 + live spot inline · inputs (karat, weight+unit, payout slider) · result with three-way honesty table (pawn 20–55% / typical mail-in / Offramp 80–90%) · dark panel: live 10k–24k per-gram grid · CTAs [photo estimate] [lock price] · 3–5 FAQPage Q&As from the cluster's question keywords · assay video + review strip.
- **5.2 Price table:** "14k gold price per gram — updated daily" · dated fact sentence (GEO, see §8) · per-gram/dwt/oz grid · 30-day sparkline · what-buyers-pay table · estimate CTA · FAQs.
- **5.3 Worth page:** "How much is a gold chain worth?" · direct 50-word answer first · typical weight/karat table with example values at live spot · numismatic/premium callout where relevant · photo estimate CTA · FAQs.
- **5.4 Guide:** question H1 · direct answer · decision table · estimate CTA mid + end.
- **5.5 Thesis (/learn/):** editorial serif, longer form · dated data blocks (ratio chart, debasement stats) · ends in ratio converter + estimate CTA + Onramp referral block. The what-to-do-with-inherited-gold piece bridges lane 2 to the family vault.

## 6. Funnel & lifecycle messaging

```
Lane 1 (calculators/prices/worth)   Lane 2 (/learn + satellites)   Lane 3 (Austin/GBP)
            \                                 |                          /
             └────────────►  PHOTO ESTIMATE (60s, no account)  ◄────────┘
                                |                        |
                       [Lock 48h → kit]        [Save → FAMILY VAULT]
                                |                        |  invites → new users
                        assay ON VIDEO          alerts + monthly statement
                                |                        |
                          offer → payout  ◄───── re-entry on price alert
                            /        \
                    USD wire 48h    BTC via Onramp (+1.5%)
```

**Email/SMS sequences (Resend + Twilio):**
1. **Estimate abandoned** (email captured, no fork choice): +1h "your estimate № is saved", +3d market note.
2. **Vault welcome:** set item names → invite family → set alert threshold. 3 emails / 7 days.
3. **Price alert** (event): "Gold crossed $3,450 — your vault is up $94" → lock CTA. SMS if opted in.
4. **Monthly family statement** (all vault members): total, movers, one market paragraph, soft CTA.
5. **Kit lifecycle** (transactional): each tracker state; assay-live link; offer; payout confirmation → review ask → referral ask.
6. **Post-payout:** review request (GBP), "know someone settling an estate?" referral, BTC payout receipt with Onramp cross-link.

## 7. Content inventory (the living backlog)

Status: ▢ todo · ◐ draft · ● live. Every page uses its template spec + schema stack (§8).

**Calculators (15):** ▢ scrap-gold (27.1k) · ▢ 14k (49.5k head assist) · ▢ pawn-comparison (3.6k+1k) · ▢ dental (480+390) · ▢ melt-value (2.4k) · ▢ 10k · ▢ 18k · ▢ 24k · ▢ gold-coin · ▢ class-ring · ▢ wedding-band · ▢ silver · ▢ platinum · ▢ gold-to-btc-converter (lane 2) · ▢ cash-for-gold (Alloy's 3,093-kw page)

**Prices (6):** ▢ 14k-per-gram (74k!) · ▢ 10k-per-gram · ▢ 18k-per-gram · ▢ white-gold (2.4k+720) · ▢ dental-gold · ▢ hub page

**Worth (12):** ▢ gold-chain (769 visits proven) · ▢ class-ring · ▢ wedding-band · ▢ dental-gold · ▢ 5-dollar-gold-coin (2k visits proven) · ▢ krugerrand · ▢ gold-watch · ▢ grillz · ▢ charm-bracelet · ▢ white-gold-ring · ▢ 10k-gold-ring (448 proven) · ▢ inherited-jewelry-box (family/GEO bridge)

**Guides (8):** ▢ where-to-sell-gold (10.8k) · ▢ how-to-sell-gold (2.9k) · ▢ is-it-a-good-time-to-sell-gold (720) · ▢ pawn-shop-gold-prices · ▢ tax-on-selling-gold (1k "tax-free" cluster) · ▢ how-to-weigh-gold-at-home (127+ proven) · ▢ spot-vs-melt-vs-retail · ▢ avoid-gold-buyer-scams (trust + links)

**Learn / thesis (6):** ▢ gold-vs-bitcoin (2.6k, zero comp) · ▢ is-gold-a-good-investment (5.4k) · ▢ currency-debasement (5.3k cluster, rising) · ▢ should-i-sell-gold-for-bitcoin (GEO) · ▢ gold-btc-ratio (daily data page) · ▢ what-to-do-with-inherited-gold (family bridge)

**Proof (rolling):** ▢ methodology · ▢ payouts ledger · ▢ assay video #1 → weekly · ▢ reviews page

**Migration note:** current offramp-site has ~50 pages including 5 blog posts and many sell-X-for-bitcoin pages. Keep URLs that map to the five types (calculators, guides); 301 the thin bitcoin-keyword pages into /gold-to-bitcoin/; delete nothing with backlinks without a redirect.

## 8. SEO + GEO playbook

### Technical SEO (day 1)
- Server-render everything; prices injected at build/ISR, never client-only. ISR revalidate daily for /prices/ and calculators (fresh spot + fresh dateModified).
- Schema stack: Organization + LocalBusiness (Austin NAP) · Service · FAQPage (every money page) · HowTo (process) · VideoObject (assays) · Review/AggregateRating · BreadcrumbList.
- next-sitemap w/ priorities · GSC + Bing + IndexNow (partially done) · Core Web Vitals budget: no animation on LCP path, images AVIF, fonts subset.
- Internal linking law: every page links up (hub), across (2–3 siblings), and down (estimate). Calculator ↔ matching price page ↔ matching worth pages.

### GEO (generative engines: AI Overviews, ChatGPT, Perplexity)
- **Dated fact sentences** on every price/calculator/worth page, auto-refreshed: "As of July 9, 2026, 14k gold melts at $63.98/gram; a fair mail-in offer is $52–56/gram." Machines cite fresh, specific, attributed numbers.
- **Direct-answer-first** structure: 40–80 word answer under every question H2, detail after.
- **/proof/methodology** — named, linkable method (AI estimate, XRF process, payout-rate table vs pawn/competitors). "According to Offramp's methodology…" is the citation you're engineering.
- **/proof/payouts** — dated original data ("Class ring, 16.2g 10k — $412, paid in BTC, Mar 2026"). Original data is what LLMs and journalists both quote.
- **Daily gold/BTC ratio table** (/learn/gold-btc-ratio) — the citable asset for conversational "should I sell gold for bitcoin" queries, which vastly exceed their Google volume.
- **llms.txt** — summary, key tables, methodology link. Plus clean semantic HTML; most competitors are unparseable to retrieval.
- Consistent NAP + GBP so local AI answers resolve to us for "sell gold austin."

### Local SEO (lane 3)
GBP with real categories/photos/hours · review engine post-payout (target: 25 reviews in 90 days) · /austin/ hub with embedded booking · LocalBusiness schema · later /texas/{houston,dallas,san-antonio} using the drop-off + mail-in hybrid story.

## 9. Formats beyond the site

- **Phone:** real Austin (512) number on **OpenPhone** (~$15/mo): shared inbox, business hours, voicemail→transcript→email, SMS-capable (doubles as alert reply line). Number in the nav sitewide. Kill the placeholder immediately.
- **YouTube (anchor format):** weekly assay video ("What 32g of inherited 14k is actually worth") + Shorts/TikTok cuts of the XRF moment. Each embeds on /proof/ and relevant worth pages (VideoObject schema). Search magnet + trust proof + backlink bait; nobody in the market does this.
- **Newsletter:** ONE brand: **"The Family Ledger."** Two streams, same list: (a) monthly vault statement (product, automatic), (b) monthly editorial — one debasement/ratio insight, one payout-ledger story, one worth-knowing tip. Resend broadcasts v1; move to Beehiiv when list >2k and lane-2 growth tools (boosts, recommendations) earn their complexity.
- **X/Twitter (lane 2 voice):** gold/BTC ratio charts, debasement data points, payout-ledger entries, assay clips. Semi-automated: Claude drafts from news alerts, human approves, 15 min/day. Audience: bitcoiners with drawer gold + Onramp-adjacent.
- **LinkedIn (B2B referral channel, not content theater):** target estate attorneys, probate professionals, wealth advisors, senior-move managers in TX. Offer: white-glove estate assay service + family vault for their clients. 2 posts/week (payout ledger, family-vault stories) + direct outreach. This channel feeds Heirfolo's future too.
- **Podcasts/press (quarterly):** pitch = payouts ledger + annual "State of Selling Gold" report + "the gold buyer that shows every assay on video."

## 10. Infrastructure & database

### Stack decision (the Vercel-vs-Railway question)
**V1: Vercel + Supabase. No Railway yet.**
- **Vercel:** Next.js App Router (existing repo), ISR for money pages, Vercel Cron for daily spot snapshot + alert evaluation. Already deployed there.
- **Supabase:** Postgres (+RLS for vault sharing), Auth (Google One Tap + magic link), Storage (item photos, private buckets). One vendor for data/auth/files = the "simple" mandate.
- **Railway:** add ONLY when a real long-running worker appears (video transcoding pipeline, heavy scraping). A cron hitting an API route covers alerts at this scale.
- **Content system:** MDX + JSON data files **in the repo** (no CMS v1). Claude Code edits content directly; everything versioned in git; deploys are content updates. Sanity (existing project r9qnuhp8) parked — reintroduce only if a non-technical editor joins.
- Integrations: Claude API (vision estimates) · metals price API (spot; cached snapshots) · CoinGecko or exchange API (BTC) · Resend (email) · Twilio (SMS, phase 2) · OpenPhone · Plausible or GA4 · YouTube embeds.

### Database schema (Postgres / Supabase)
```
users            id, auth_id, email, phone, name, created_at, marketing_opt_in
vaults           id, name ("The Alvarez vault"), owner_id, family_signoff bool, created_at
vault_members    vault_id, user_id, role enum(owner|member|viewer), invited_by, joined_at
invites          id, vault_id, email/phone, role, token, status, expires_at
items            id, vault_id, owner_id, story_name, category enum(ring|chain|coin|bullion|dental|scrap|watch|other),
                 karat_claimed, weight_g_low, weight_g_high, numismatic bool, notes, status enum(tracked|in_kit|assayed|sold|kept)
item_photos      id, item_id, storage_path, kind enum(main|hallmark|scale)
estimates        id, item_id, serial "EST-07341", model_version, hallmark_text, karat_evidence,
                 weight_low, weight_high, confidence, spot_price_id, range_usd_low/high, payout_rate, created_at
spot_prices      id, ts, gold_usd_oz, silver, platinum, btc_usd   -- daily+intraday snapshots; feeds /prices/ and ratio page
item_valuations  item_id, date, usd_low, usd_high                 -- nightly materialized for trends/statements
alerts           id, user_id, vault_id/item_id, rule enum(threshold|pct_move|weekly), value, channel enum(email|sms|push), active
alert_events     alert_id, fired_at, payload, converted_kit_id
kits             id, vault_id, user_id, items[], status enum(requested|shipped|delivered|received|assaying|offered|accepted|returned|paid),
                 price_lock_low/high, lock_expires_at, tracking_no, insurance_usd
assays           id, kit_id, item_id, video_url, xrf_karat, weight_g, melt_usd, live_stream_url
offers           id, kit_id, total_usd, breakdown jsonb, expires_at, accepted_at
payouts          id, offer_id, method enum(wire|btc_onramp), usd_amount, btc_bonus_pct, onramp_ref, id_verified_at, paid_at
referrals        id, referrer_user_id, kind enum(family_invite|post_payout|professional), converted_user_id
reviews          id, payout_id, rating, text, gbp_synced bool
events           id, user_id, name, props jsonb, ts               -- product analytics spine
newsletter_subs  email, source, stream enum(statement|editorial|both), status
```
- RLS: vault rows visible to members only; items via vault membership; estimates public-readable by serial (shareable link, no PII).
- The estimates + assays pair is the proprietary dataset: photo → predicted vs XRF ground truth. Log everything; this compounds into the moat (and Heirfolo).

## 11. Compliance (before first purchase)

▢ TX precious-metals dealer registration (Occ. Code Ch. 1956) + Austin PD reporting/holding check · ▢ ID verification at payout only · ▢ BTC = USD wire to seller's own Onramp account; never custody BTC; written Onramp referral + trademark-peace agreement · ▢ 1099-B bullion rules; no cash payouts · ▢ verify $25k/kit shipping insurance · ▢ photo/video consent checkbox for assay publishing · ▢ vault terms: price data informational, not appraisal for insurance purposes.

## 12. Operations — how this stays alive and growing

**Weekly ritual (~4h, mostly Claude Code):**
- Mon: ship 2 content-inventory pages (§7 order); update status marks.
- Tue: assay video publish + cuts; payout-ledger entries.
- Wed: X queue (Claude drafts, you approve); LinkedIn post.
- Fri: 15-min metrics review (GSC queries, estimate funnel, vault saves); log anomalies in changelog.

**Monthly:** Semrush pull (same reports as §3) → re-rank the backlog by movement; family statement goes out (automatic); newsletter editorial; GBP review push.

**Quarterly:** version-bump this plan; "State of Selling Gold" report (email-gated, press release); prune/301 underperformers; re-shoot best-performing calculator pages.

**Automatic freshness (no human):** daily spot snapshot → ISR regenerates /prices/, calculators, ratio page, dated GEO sentences, dateModified. The site gets "updated daily" credit forever from one cron.

**Rule for new ideas:** every proposed page/feature must name (a) its content type (of the five) or funnel stage, (b) the §7 line it adds, (c) what it displaces if it adds a system.

## 13. KPIs (90-day)

organic visits 1,000+/mo · estimate completion >40% · estimate→kit 8–12% · estimate→vault save >25% · invites per vault ≥1.0 · kits 10+/mo · first alert-driven kit by wk 10 · BTC payout share 15%+ · GBP reviews 25 · first AI-engine citation by wk 12.

## 14. Build order (12 weeks)

| Wk | Ship |
|---|---|
| 1–2 | Estate-paper tokens on home + estimate flow live (stub→real vision). OpenPhone number. GBP. Supabase schema §10. |
| 3–4 | Calculators: scrap, 14k, pawn, dental, melt. /prices/14k + /10k (daily ISR). Schema + llms.txt. |
| 5–6 | Family vault v1 (roles, invites, Google One Tap + magic link). Alerts. /proof/methodology. |
| 7–8 | /learn/gold-vs-bitcoin + ratio page + converter; goldvsbitcoin.org repointed. First assay video. Statement email. |
| 9–10 | Worth pages ×6. /austin/ + booking. Payouts ledger. Guides ×2. |
| 11–12 | Remaining calculators. /gold-to-bitcoin dark room. Satellites embed widget. Review engine. Family sign-off toggle. |

## 15. Open questions (my defaults in bold — overrule anytime)

1. Vault feature name: **"Family Vault"** now; keep "Heirfolo" reserved as future spinoff brand once the vault proves organic pull.
2. Social login: **Google + magic link only at launch**; Apple with native app; Facebook only if funnel data demands.
3. Newsletter/brand name: **"The Family Ledger"** — confirm or rename.
4. Austin presence: appointment-only office vs jeweler partnership — **appointment-only** claim on /austin/ until physical space exists (GBP category "Gold dealer", service-area honest).
5. BTC bonus size: **1.5%** placeholder pending Onramp referral economics.
6. Display serif: **keep Cormorant** (equity + already licensed) unless you want the heavier Palatino feel from the mockups.

---

## Changelog
- **v2.0 (2026-07-09):** Brand switched to Estate Paper (Angle A) with family layer; Family Vault (Heirfolo) pulled forward as core product; auth strategy (Google One Tap + magic link, no FB); full DB schema; infra decision Vercel+Supabase (no Railway v1); content inventory with statuses; lifecycle messaging; newsletter/phone/X/LinkedIn plans; operations rituals.
- **v1.0 (2026-07-09):** Initial plan from Semrush teardown; Assay House direction; three-lane funnel; 12-week roadmap.
