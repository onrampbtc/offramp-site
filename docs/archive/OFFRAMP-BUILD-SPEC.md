# OFFRAMP — Complete Build Specification

**For the coding agent (Claude Code, Codex, or any builder): this document is self-contained. Everything you need — business context, market data, brand system, copy, architecture, database, integrations, and acceptance criteria — is in this file. Build in milestone order (§16). When this spec and existing code conflict, this spec wins. When something is genuinely ambiguous, choose the simpler option and log the decision in the changelog at the bottom.**

Version 1.0 — July 9, 2026. Derived from OFFRAMP-MASTER-PLAN.md v2.0 (strategy), live Semrush data (US, pulled 2026-07-08), and competitor teardowns.

---

## PART I — CONTEXT (read before building)

## 1. What this business is

Offramp (offrampgold.com) buys gold from consumers. Buy at 80–90% of melt value, refine at 97–98%, keep the spread. Mail-in nationwide (free insured kits) + appointment drop-off in Austin, TX. Average kit: $1,500–3,000 melt → $250–450 gross profit. North-star metric: **kits per month**.

**Tagline/positioning:** *The family way to know, keep, and sell your gold.*

Four differentiators, in priority order:
1. **Photo estimate** — user photographs their gold; AI reads the hallmark and returns an honest price range in ~60 seconds. No competitor has this; every competitor makes users know karat + weight.
2. **Family Vault** — shared heirloom inventory. Invite siblings/parents; everyone sees the same values; optional family sign-off before selling. Dissolves the real blocker in estate gold (family consensus). Every invite = free user acquisition.
3. **XRF assay on video** — every final price comes from an X-ray fluorescence reading recorded (later: streamed) on video. "Watch your assay live" is the uncopyable trust moment.
4. **Bitcoin payout** — via Onramp referral (+1.5% bonus). Offramp always pays USD; the BTC option wires proceeds to the seller's own Onramp account. Never hold/transmit BTC. This is a margin/story/referral feature, **not** an acquisition channel (see data below).

## 2. Market data (verified 2026-07-08, Semrush US database)

### Competitive landscape
| Domain | Organic keywords | Organic visits/mo | Paid spend/mo | Situation |
|---|---:|---:|---:|---|
| thealloymarket.com | 25,311 | 33,946 | $950 | Leader. Moat = calculators + "worth" pages. Ranks only #9–16 on head terms — beatable. |
| cashforgoldusa.com | 3,996 | 2,287 | $32,372 | Organic collapsed (was ~191k). Renting clicks at $6–11 CPC. |
| veldtgold.com | 350 | 134 | $0 | Dormant. Only gold→BTC competitor; undefended. |
| offrampgold.com | 185 | ~0 | $0 | Us. Indexed, not ranking. Clean slate. |

### Proof of what works (Alloy's top pages by traffic share)
scrap-gold-calculator 14.3% (2,086 kw) · 14k-price-per-gram-at-pawn-shop 11.3% · 14k-gold-price-per-gram 8.0% · how-much-is-white-gold-worth 6.9% · 14k-gold-price 6.2% · 5-dollar-gold-coin-value 5.9% · cash-for-gold-calculator 4.6% (3,093 kw) · is-10k-gold-worth-anything 3.8% · gold-melt-value-calculator 3.4% · pawn-shop-gold-calculator 2.8%. **Their homepage: 2.6%.** Lesson: money pages are tools and value answers, not homepages or blogs.

### Keyword targets
**Lane 1 — value discovery (~200k+/mo, 70% of effort):**
14k gold price per gram 74,000 · gold calculator 49,500 · scrap gold calculator 27,100 · gold price today 14k 27,100 · gold scrap calculator 12,100 · gold price calculator 12,100 · how much is 14k gold per gram 8,100 · how much is 14k gold worth 6,600 · scrap gold prices 5,400 · how much is 10k gold worth 4,400 · 14k per gram at pawn shop 3,600 · gold melt calculator 2,400.

**Lane 1b — transactional/local:**
sell gold near me 18,100 · cash for gold 18,100 · sell gold 12,100 (CPC $5.95) · where to sell gold (+near me) 10,800 · how to sell gold 2,900 · sell gold online 1,900 (CPC $10.85) · sell gold jewelry 1,600 · sell dental gold 390 (CPC $6.97) · sell gold austin 140.

**Lane 2 — conviction/education (~14k/mo Google + outsized AI-engine share, 20% of effort):**
is gold a good investment 5,400 · debasement 4,400 (trending up) · bitcoin vs gold 1,600 (competition ≈ 0) · gold vs bitcoin 1,000 (competition ≈ 0) · currency debasement 720 · **sell gold for bitcoin 20 — never build acquisition around gold→BTC keywords.** Lane 2 visitors hold bullion (10–30× lane-1 transaction size) and these questions are asked to ChatGPT/Perplexity far more than Google — GEO wins this lane.

**Lane 3 — Austin local (10% of effort):** converts at drop-off rates web can't touch; feeds reviews and assay videos back to lanes 1–2.

### Content law (from clone/kill analysis)
Only five content types may exist: **calculator · price table · worth page · thesis page · proof asset.** No generic blog posts, no listicles. Anti-patterns to never build: form-first funnels, manual-only calculators, placeholder phone numbers, unverifiable claims ("thousands of customers"), crypto-dark aesthetics on seller-facing pages, shimmer/glow/pulse animations.

## 3. Existing codebase context

Repo: `offramp-site` — Next.js App Router + Tailwind v4 (tokens inline in `src/app/globals.css` via `@theme`), deployed on Vercel, GA4 present, `useGoldPrice` hook exists. ~50 static pages live including: karat calculators (/calculators/10k|14k|18k|dental|scrap|pawn-comparison), /gold-calculator, /gold-price, guides (/guide/*), 5 blog posts (/blog/*), many sell-X-for-bitcoin pages, /get-kit (a ~10-field form — to be replaced as primary CTA by /estimate), placeholder phone (555) 123-4567 (REMOVE everywhere).

**Migration rules:** keep + rebuild URLs that map to the five content types; 301 thin bitcoin-keyword pages (sell-gold-for-bitcoin, sell-jewelry-for-bitcoin, sell-silver-for-bitcoin, convert-gold-to-bitcoin, precious-metals-to-crypto, gold-to-bitcoin) into /gold-to-bitcoin/; 301 /blog/* into matching /guides/ or /learn/ pages; never delete a URL without a redirect.

Satellite sites exist in a separate `gold-domains` turborepo: goldbuyer.io, goldtobtc.com, goldvsbitcoin.org (shared packages: ui, lib, sanity). They stay thin, embed the estimate widget (M6), and deep-link to main-site money pages. goldvsbitcoin.org points at /learn/.

---

## PART II — BRAND SYSTEM

## 4. "Estate Paper" design system

World: an appraiser's letterhead meets a family album. Warm paper, ink, one gold line, real photography (hands, pieces, the XRF gun, Austin). Human first; precise underneath — numbers are always monospace/tabular, estimates get serial numbers, data lives in dark "instrument panels" set into light pages.

### CSS tokens (replace current dark theme as default; keep dark tokens for panels + /gold-to-bitcoin)
```css
:root {
  /* Estate paper — default, all seller-facing pages */
  --bg:        #F7F2E7;   /* page */
  --raise:     #FFFFFF;   /* cards */
  --ink:       #241F15;   /* text, primary buttons */
  --ink-2:     #756C58;   /* secondary text */
  --ink-3:     #98917D;   /* hints */
  --line:      #EAE2D0;   /* hairlines */
  --line-2:    #CFC5AD;   /* strong borders */
  --gold:      #8A6D1F;   /* accent text on light (AA-safe) */
  --gold-mark: #B8941F;   /* stars, small marks */
  --teal:      #2F6D5E;   /* value-up, positive */
  --coral:     #AC4E28;   /* warnings, pawn comparisons */

  /* Instrument panel + dark room */
  --panel:     #171410;
  --panel-2:   #0B0A08;   /* /gold-to-bitcoin page bg */
  --panel-ink: #EDE5CF;
  --panel-mut: #8D8674;
  --gold-brt:  #C9A84C;   /* gold on dark only */
}
```
- **Type:** display serif = Cormorant (already licensed/loaded); body = Sora; **every number** (prices, weights, purity, serials, phone) = DM Mono with `font-variant-numeric: tabular-nums`. Max two type voices per section.
- **Buttons:** primary = ink pill (`--ink` bg, `--bg` text, border-radius 999px); secondary = hairline pill (`--line-2` border, `--ink` text). Gold is an accent, never a button fill on light.
- **Cards:** white, 0.5–1px `--line` border, radius 12px. No shadows except focus rings.
- **Motion:** none on the LCP path. Allowed: fade-in on scroll (respect `prefers-reduced-motion`). DELETE: `.text-gold-shimmer`, concentric pulse rings, `.glow-gold`, all shimmer keyframes.
- **Dark instrument panels:** camera module, live tickers, per-gram grids, assay player — `--panel` bg, `--gold-brt` data, radius 10–12px, set inside light pages.
- **Certificate motifs:** estimate serials (`EST-2026-07341`), dated readings ("XAU $3,412.10 · 2026-07-09"), hairline specimen tables, small stamped-seal mark in the footer.

### Voice + copy library (use these strings verbatim where they fit)
- Hero H1: `The family gold, finally in one place.`
- Hero sub: `Photograph each piece and we'll tell you what it's honestly worth. Keep it all in a shared family vault — invite your siblings, watch the value together, and sell only when everyone's ready.`
- Eyebrow: `Austin, Texas — and everywhere by insured mail`
- Estimate promise: `We'll read the hallmark and give you an honest range in about a minute.`
- Range disclaimer (every estimate): `Final price set by XRF assay on video.`
- Vault empty state: `Start with one piece. A photo is enough.`
- Invite line: `Invite your siblings — everyone sees the same numbers.`
- Never write: "unlock the value", "turn clutter into cash", countdown timers, exclamation marks in system copy. The 48-hour price lock is the only urgency mechanic.

### CTA copy system
| Surface | Primary | Secondary |
|---|---|---|
| Homepage | See what it's worth | Start a family vault |
| Calculator result | Get an exact range from a photo | Lock this price — free kit |
| Estimate result | Lock this price for 48h — free kit | Save to your family vault |
| Vault (owner) | Get a free kit for these pieces | Invite family |
| Price alert | Your vault is up — lock today's prices | See my vault |
| Thesis pages | Check your gold in 60 seconds | Read the methodology |

---

## PART III — PRODUCT SPECIFICATION

## 5. Routes

```
/                    Homepage (spec §6)
/estimate            Photo estimate flow (spec §7) — landing indexed, app steps noindex
/vault               Family vault app (spec §8) — noindex
/vault/join/[token]  Invite acceptance
/calculators/[slug]  15 calculator instances (spec §9.1)
/prices/[slug]       6 live price tables (spec §9.2)
/worth/[slug]        12+ item value pages (spec §9.3)
/guides/[slug]       8 question guides (spec §9.4)
/learn/[slug]        6 thesis pages — lane 2 (spec §9.5)
/austin              Local hub (spec §9.6)
/gold-to-bitcoin     Dark room (spec §9.7)
/proof/methodology   /proof/payouts  /proof/assays  /proof/reviews  (spec §9.8)
/family-vault        Vault marketing page
/track/[kitId]       Offer tracker (spec §10)
/llms.txt  /sitemap.xml  /robots.txt
```

## 6. Homepage spec

Sections top→bottom:
1. **Nav:** Offramp wordmark (serif) · Sell gold · What it's worth (→/calculators) · Family vault · Austin · phone number (mono, real OpenPhone 512 number — env `NEXT_PUBLIC_PHONE`).
2. **Hero (split):** left = eyebrow (italic serif, gold), H1, sub, [See what it's worth] [Start a family vault], review line (stars + real quote once reviews exist; until then omit — no fabricated proof). Right = **vault preview card**: family vault named "The Alvarez vault", 3 story-named items with mono ranges and trend arrows, stacked member avatars, total line. This card is marketing render, clearly illustrative.
3. **Live strip:** gold spot, BTC, 1oz≈BTC ratio — mono, dark panel, from spot snapshot (§13).
4. **How it works (3 steps):** photo → free insured kit or Austin drop-off → assay on video, paid your way. Each step links.
5. **Payout ticker:** recent real payouts "Class ring, 16.2g 10k — $412 · Georgetown TX" from payouts table (hidden until ≥5 real entries).
6. **Pawn vs Offramp table** (keep existing content, restyle: coral X column vs teal ✓ column).
7. **Dark thesis band:** `Gold preserved wealth for 5,000 years. Decide its next 5,000.` → link /gold-to-bitcoin. This band uses panel tokens — the one dark moment on the page.
8. **Footer:** NAP (Austin address when it exists), phone, hours, licenses line, stamped-seal mark, satellite links.

## 7. Estimate flow spec (/estimate)

**Step 0 (landing, indexed):** value prop + camera CTA + "no account needed" + sample estimate card. FAQPage schema.

**Step 1 — Capture:** `<input type="file" accept="image/*" capture="environment">` + drag-drop on desktop. Overlay tips: "Center the piece — get the stamp or hallmark if you can (14K · 585 · 750 · 10K)". Optional 2nd photo prompt: "hallmark close-up" and "next to a coin for scale". Client-side downscale to ≤1600px before upload.

**Step 2 — Reading (progressive reveal, ~3–6s):** show sequentially as results arrive: `✓ hallmark read: 585 (14k)` → `est. weight 8–11 g` → `checking collector value…` → serial issued. If confidence < 0.4: fall back to guided manual inputs (karat picker with hallmark photo examples, weight with "about X quarters" helper).

**Step 3 — Result + fork:**
- Range display (serif, large): `$410 – $560` · sub (mono): `at 82% of spot · final price set by XRF assay on video` · serial + dated spot reading.
- Primary: **Lock this price for 48h — free kit** → kit request (name, address, email/phone — ≤5 fields; creates account implicitly via magic link).
- Secondary: **Save to your family vault** → Google One Tap or magic-link email → item saved, prompt story-name ("What should we call it? e.g. 'Grandma's wedding band'") → prompt invite.
- Context line: `Gold is {qtr_change}% this quarter — vault members get an alert the moment your pieces gain value.`

**Vision call (server route, Anthropic SDK, model claude-sonnet-latest, temperature 0):**
```
System: You are a precious-metals intake assessor. Analyze the photo(s) of a
jewelry/coin/bullion item. Respond ONLY with JSON matching the schema. Be
conservative: wide ranges and low confidence beat wrong precision. If a
hallmark/stamp is legible, transcribe it exactly. Flag potential numismatic
(collector) value for coins — do not melt-price collectible coins.

Schema:
{ "item_type": "ring|chain|bracelet|coin|bar|dental|watch|earrings|other",
  "hallmark_text": "string|null", "karat_estimate": "24|22|18|14|10|null",
  "karat_evidence": "hallmark|color_guess|none",
  "weight_g_low": number, "weight_g_high": number,
  "numismatic_flag": boolean, "numismatic_note": "string|null",
  "confidence": 0.0-1.0, "notes": "string" }
```
**Math:** `melt_per_g = spot_usd_oz / 31.1035 × purity` where purity = {24k:0.999, 22k:0.9167, 18k:0.75, 14k:0.5833, 10k:0.4167}. `range = weight_low×melt_per_g×PAYOUT_RATE … weight_high×melt_per_g×PAYOUT_RATE`, PAYOUT_RATE env default 0.82. Karat unknown → compute across 10k–18k and widen. Numismatic flag → append note "this may be worth more than melt to collectors — our assay includes a collector check". Serial: `EST-{YYYY}-{5-digit sequence}`. Store everything (§12 estimates table).

## 8. Family Vault spec (/vault)

- **Roles:** owner (creates vault, requests kits, manages members, toggles family sign-off) · member (adds/edits items, invites) · viewer (read-only).
- **Invite:** email or copyable link (`/vault/join/[token]`, 14-day expiry). Invitee sees vault name + inviter + item count *before* auth ("Maria invited you to The Alvarez vault — 3 pieces, $3,895–4,075 today"), then Google One Tap / magic link.
- **Item card:** photo, story name (editable), category, estimate range (auto-refreshed against latest spot), 30-day trend arrow, numismatic flag, notes, added-by.
- **Vault header:** name, member avatars, total range, monthly change.
- **Alerts:** per-vault rules — threshold ("gold above $X/oz"), percent move (±3% default), weekly digest. Channels: email v1, SMS phase 2.
- **Family sign-off (M6):** when toggled, kit requests notify all members; a banner shows who's viewed; owner confirms after 24h.
- **Monthly statement email** (to all members, 1st of month): vault total + change, top mover, one-paragraph market note (auto-generated from spot data), soft CTA. This is the retention engine.
- **RLS:** vault rows and items visible to members only. Estimates readable by serial via public share link (no PII). Photos in private bucket, signed URLs.
- **Auth:** Supabase Auth — Google OAuth (One Tap) + email magic link. No passwords anywhere. No Facebook (revisit only on funnel evidence). Apple Sign-In when native app ships.

## 9. Page template specs (the SEO/GEO machine)

Common to all money pages: server-rendered, ISR `revalidate: 86400`, breadcrumbs + BreadcrumbList schema, internal links (1 hub + 2–3 siblings + estimate CTA), dated-fact sentence (§11), footer estimate CTA. Content lives in repo: one JSON/MDX data file per page under `src/content/` — no CMS.

**9.1 Calculator (`/calculators/[slug]`)** — one React template, 15 data-driven instances: scrap-gold, 14k, 10k, 18k, 24k, dental, gold-coin, class-ring, wedding-band, pawn-comparison, melt-value, silver, platinum, cash-for-gold, gold-to-btc-converter.
Layout: H1 with live spot inline → inputs (karat select, weight + unit toggle g/dwt/oz, payout-rate slider 40–95% defaulting 82%) → result card: melt value + **three-way honesty table** (pawn shops 20–55% / typical mail-in 70–80% / Offramp 80–90%, coral vs teal) → CTAs [Get an exact range from a photo] [Lock this price — free kit] → dark panel: live per-gram grid 10k–24k → 3–5 FAQ blocks (FAQPage schema) → assay video embed + review strip. The pawn-comparison instance leads with the comparison table (it's the page's H1 promise). The gold-to-btc-converter adds sats output + ratio context + Onramp block.

**9.2 Price table (`/prices/[slug]`)** — 14k-gold-price-per-gram (74k/mo target), 10k, 18k, white-gold, dental-gold, hub.
H1 "14k gold price per gram — updated daily" → dated-fact sentence → grid $/g·$/dwt·$/oz (melt AND what-buyers-pay columns) → 30-day sparkline from spot_prices → "why buyers pay less than melt" 60-word block → estimate CTA → FAQs.

**9.3 Worth (`/worth/[slug]`)** — gold-chain, class-ring, wedding-band, dental-gold, 5-dollar-gold-coin, krugerrand, gold-watch, grillz, charm-bracelet, white-gold-ring, 10k-gold-ring, inherited-jewelry-box.
H1 question → **direct 40–80 word answer first** (GEO) → typical weight/karat table with live example values → collector-premium callout where relevant → photo estimate CTA → FAQs. The inherited-jewelry-box page is the family-vault bridge: "you don't have to decide today — put it in a shared vault first."

**9.4 Guide (`/guides/[slug]`)** — where-to-sell-gold, how-to-sell-gold, is-it-a-good-time-to-sell-gold, pawn-shop-gold-prices, tax-on-selling-gold, how-to-weigh-gold-at-home, spot-vs-melt-vs-retail, avoid-gold-buyer-scams. Question H1 → direct answer → decision table → estimate CTA mid + end. HowTo schema where stepwise.

**9.5 Thesis (`/learn/[slug]`)** — gold-vs-bitcoin, is-gold-a-good-investment, currency-debasement, should-i-sell-gold-for-bitcoin, gold-btc-ratio (daily data page: ratio chart, table, dated facts), what-to-do-with-inherited-gold. Editorial serif, longer form, dated data blocks, ends: ratio converter + estimate CTA + "Bitcoin payouts powered by Onramp" referral block. Cite sources (Incrementum IGWT, Lyn Alden, World Gold Council — citation list exists in gold-domains/packages/lib/src/constants.ts).

**9.6 Austin (`/austin`)** — appointment drop-off booking (Cal.com embed or simple form), map, GBP link, team photo, LocalBusiness schema with real NAP, service-area honesty (appointment-only until physical space exists).

**9.7 Gold-to-bitcoin (dark room)** — full `--panel-2` background, flat `--gold-brt`. Thesis copy (existing "5,000 years" content), gold/BTC ratio chart, payout bonus explainer, how-the-Onramp-handoff-works steps, converter. All old bitcoin-keyword pages 301 here.

**9.8 Proof** — methodology (how the AI estimate works, XRF process, payout-rate table vs competitors — the citable named method), payouts (dated ledger from payouts table, names withheld), assays (video gallery, VideoObject schema), reviews (AggregateRating once real).

## 10. Offer tracker (/track/[kitId])

States: requested → shipped (label + $25k insurance shown) → delivered → received ("logged: 4 items, photos attached") → **assaying ("watch live" link when streaming; recorded video after)** → offered (breakdown per item, accept / free return, 7-day expiry) → accepted → paid (wire confirmation or BTC receipt with Onramp reference). Every transition fires email (+SMS phase 2). Magic-link access, no password.

---

## PART IV — DATA & INFRASTRUCTURE

## 11. SEO/GEO implementation

- **Dated-fact sentence** (auto-generated on every price/calculator/worth page, refreshed by daily ISR):
  `As of {Month D, YYYY}, 14k gold melts at ${melt_per_g}/gram; a fair mail-in offer is ${low}–{high}/gram.`
  Emit matching `dateModified` in schema. This freshness is what AI engines cite.
- **JSON-LD examples:**
```json
{ "@context":"https://schema.org", "@type":"FAQPage",
  "mainEntity":[{ "@type":"Question", "name":"How much is 14k gold worth per gram?",
    "acceptedAnswer":{ "@type":"Answer",
      "text":"As of July 9, 2026, 14k gold melts at $63.98 per gram. Reputable mail-in buyers pay $52–56 per gram; pawn shops typically pay $13–35." } }] }
```
```json
{ "@context":"https://schema.org", "@type":"LocalBusiness", "name":"Offramp",
  "url":"https://offrampgold.com", "telephone":"+1-512-XXX-XXXX",
  "address":{ "@type":"PostalAddress", "addressLocality":"Austin","addressRegion":"TX" },
  "priceRange":"$$", "sameAs":["https://x.com/...","https://www.linkedin.com/company/..."] }
```
- **llms.txt** (serve at /llms.txt):
```
# Offramp — sell gold online or in Austin, TX
> Photo-based gold estimates, shared family vaults, XRF assay on video,
> payment in USD or bitcoin (via Onramp). Payout rate: 80–90% of melt.
Key pages:
- Live gold prices per karat: https://offrampgold.com/prices/
- Calculators: https://offrampgold.com/calculators/
- Methodology (how estimates and assays work): https://offrampgold.com/proof/methodology
- Payout ledger (real, dated): https://offrampgold.com/proof/payouts
- Gold/BTC ratio, updated daily: https://offrampgold.com/learn/gold-btc-ratio
```
- robots: allow all; noindex /vault, /track, /estimate app steps. next-sitemap on build. GSC + Bing + IndexNow ping on deploy.
- Internal-linking law enforced in templates (hub/sibling/estimate links are template props, not editorial choices).

## 12. Database (Supabase Postgres — run as migration)

```sql
create type vault_role as enum ('owner','member','viewer');
create type item_category as enum ('ring','chain','bracelet','coin','bar','dental','watch','earrings','scrap','other');
create type item_status as enum ('tracked','in_kit','assayed','sold','kept');
create type kit_status as enum ('requested','shipped','delivered','received','assaying','offered','accepted','returned','paid');
create type payout_method as enum ('wire','btc_onramp');
create type alert_rule as enum ('threshold','pct_move','weekly');

create table users (
  id uuid primary key default gen_random_uuid(),
  auth_id uuid unique,              -- supabase auth.users
  email text unique, phone text, full_name text,
  marketing_opt_in boolean default false,
  created_at timestamptz default now());

create table vaults (
  id uuid primary key default gen_random_uuid(),
  name text not null, owner_id uuid references users(id),
  family_signoff boolean default false,
  created_at timestamptz default now());

create table vault_members (
  vault_id uuid references vaults(id), user_id uuid references users(id),
  role vault_role not null, invited_by uuid references users(id),
  joined_at timestamptz default now(), primary key (vault_id, user_id));

create table invites (
  id uuid primary key default gen_random_uuid(),
  vault_id uuid references vaults(id), contact text not null,
  role vault_role default 'member', token text unique not null,
  status text default 'pending', expires_at timestamptz);

create table items (
  id uuid primary key default gen_random_uuid(),
  vault_id uuid references vaults(id), added_by uuid references users(id),
  story_name text, category item_category, status item_status default 'tracked',
  karat_claimed int, weight_g_low numeric, weight_g_high numeric,
  numismatic boolean default false, notes text,
  created_at timestamptz default now());

create table item_photos (
  id uuid primary key default gen_random_uuid(),
  item_id uuid references items(id), storage_path text not null,
  kind text default 'main');

create table spot_prices (
  id bigserial primary key, ts timestamptz default now(),
  gold_usd_oz numeric not null, silver_usd_oz numeric,
  platinum_usd_oz numeric, btc_usd numeric);

create table estimates (
  id uuid primary key default gen_random_uuid(),
  item_id uuid references items(id),
  serial text unique not null,                 -- EST-2026-07341
  model_version text, hallmark_text text, karat_estimate int,
  karat_evidence text, weight_g_low numeric, weight_g_high numeric,
  numismatic_flag boolean, confidence numeric,
  spot_price_id bigint references spot_prices(id),
  payout_rate numeric, usd_low numeric, usd_high numeric,
  raw_response jsonb, created_at timestamptz default now());

create table item_valuations (                 -- nightly job: trends + statements
  item_id uuid references items(id), date date,
  usd_low numeric, usd_high numeric, primary key (item_id, date));

create table alerts (
  id uuid primary key default gen_random_uuid(),
  user_id uuid references users(id), vault_id uuid references vaults(id),
  rule alert_rule not null, value numeric, channel text default 'email',
  active boolean default true);

create table alert_events (
  id bigserial primary key, alert_id uuid references alerts(id),
  fired_at timestamptz default now(), payload jsonb,
  converted_kit_id uuid);

create table kits (
  id uuid primary key default gen_random_uuid(),
  vault_id uuid references vaults(id), user_id uuid references users(id),
  status kit_status default 'requested',
  price_lock_low numeric, price_lock_high numeric, lock_expires_at timestamptz,
  ship_name text, ship_address jsonb, tracking_no text,
  insurance_usd numeric default 25000, created_at timestamptz default now());

create table kit_items ( kit_id uuid references kits(id), item_id uuid references items(id), primary key (kit_id, item_id));

create table assays (
  id uuid primary key default gen_random_uuid(),
  kit_id uuid references kits(id), item_id uuid references items(id),
  video_url text, live_stream_url text,
  xrf_karat numeric, weight_g numeric, melt_usd numeric,
  created_at timestamptz default now());

create table offers (
  id uuid primary key default gen_random_uuid(),
  kit_id uuid references kits(id), total_usd numeric,
  breakdown jsonb, expires_at timestamptz, accepted_at timestamptz);

create table payouts (
  id uuid primary key default gen_random_uuid(),
  offer_id uuid references offers(id), method payout_method,
  usd_amount numeric, btc_bonus_pct numeric default 1.5,
  onramp_ref text, id_verified_at timestamptz, paid_at timestamptz,
  public_ledger boolean default false, ledger_label text);  -- "Class ring, 16.2g 10k"

create table referrals (
  id uuid primary key default gen_random_uuid(),
  referrer_user_id uuid references users(id), kind text,
  converted_user_id uuid references users(id), created_at timestamptz default now());

create table reviews (
  id uuid primary key default gen_random_uuid(),
  payout_id uuid references payouts(id), rating int, body text,
  gbp_synced boolean default false, created_at timestamptz default now());

create table events (                          -- product analytics spine
  id bigserial primary key, user_id uuid, name text, props jsonb,
  ts timestamptz default now());

create table newsletter_subs (
  email text primary key, source text,
  stream text default 'both', status text default 'active',
  created_at timestamptz default now());
```
RLS: enable on vaults/vault_members/items/item_photos/estimates/kits/offers/payouts — access via `vault_members.user_id = auth.uid()` join. `estimates` also selectable by `serial` through a security-definer RPC for public share links (strip user/vault fields). Storage: private `item-photos` bucket, signed URLs, 10MB cap.

## 13. Integrations, env, jobs

**Stack decision: Vercel (Next.js, existing) + Supabase (Postgres/Auth/Storage/RLS) + Vercel Cron. No Railway until a real long-running worker exists (e.g., video transcode). Content = MDX/JSON in repo; Sanity stays parked.**

```
ANTHROPIC_API_KEY=            # vision estimates (claude-sonnet-latest)
METALS_API_KEY=               # gold/silver/platinum spot (metals-api.com or goldapi.io)
NEXT_PUBLIC_SUPABASE_URL=     SUPABASE_SERVICE_ROLE_KEY=   NEXT_PUBLIC_SUPABASE_ANON_KEY=
RESEND_API_KEY=               # email (alerts, statements, lifecycle)
TWILIO_ACCOUNT_SID= TWILIO_AUTH_TOKEN= TWILIO_FROM=   # SMS, phase 2
NEXT_PUBLIC_PHONE=+1512XXXXXXX   # OpenPhone number — replaces ALL placeholder phones
NEXT_PUBLIC_SITE_URL=https://offrampgold.com
PAYOUT_RATE=0.82  BTC_BONUS_PCT=1.5
CRON_SECRET=                  # protects cron routes
```
**Cron (vercel.json):**
- `0 11 * * *` `/api/cron/spot` — snapshot gold/silver/platinum/BTC into spot_prices; trigger ISR revalidation of /prices/*, /calculators/*, /learn/gold-btc-ratio (fresh dated-fact sentences + dateModified daily, forever).
- `15 11 * * *` `/api/cron/valuations` — write item_valuations for all tracked items; evaluate alerts; send via Resend.
- `0 14 1 * *` `/api/cron/statement` — monthly family statement to all vault members.

**Email (Resend) sequences:** estimate-abandoned (+1h, +3d) · vault welcome (3 over 7d: name your pieces → invite family → set an alert) · price alert (event) · monthly statement · kit lifecycle (every tracker state) · post-payout (review ask → referral ask → BTC receipt w/ Onramp cross-link). Plain, letter-like templates on estate-paper styling; from "Offramp <hello@offrampgold.com>"; newsletter brand: **The Family Ledger** (Resend broadcasts v1; Beehiiv only when list >2k).

---

## PART V — EXECUTION

## 14. Distribution (context for site hooks, build later)

Phone: OpenPhone 512 number sitewide (nav + footer + LocalBusiness schema). YouTube: weekly assay video, embedded on /proof/assays + relevant worth pages (VideoObject). X: lane-2 voice (ratio charts, debasement data, ledger entries) — add share cards (OG images per money page, `@vercel/og`). LinkedIn: estate attorneys/wealth advisors referral channel — /austin gets a "for professionals" block (estate assay service, white-glove). GBP: review engine post-payout; reviews page syncs.

## 15. Compliance gates (block real purchases, not the build)

TX precious-metals dealer registration (Occupations Code Ch. 1956) + Austin PD reporting check · ID verification at payout step only · BTC = USD wire to seller's own Onramp account (never custody BTC); written Onramp referral agreement pending (bonus % placeholder 1.5) · no cash payouts · 1099-B awareness for bullion quantities · photo/video consent checkbox at kit acceptance · vault disclaimer: "estimates are informational, not insurance appraisals."

## 16. Build milestones + acceptance criteria

**M1 — Reskin + foundation (wk 1–2)**
Estate-paper tokens replace dark default; shimmer/glow/pulse deleted; real phone everywhere; homepage per §6 (payout ticker + review line hidden until data); Supabase project + schema §12 + RLS; spot cron live.
✓ Lighthouse mobile ≥ 90 perf/SEO on home · ✓ no placeholder phone anywhere · ✓ spot_prices rows accruing daily.

**M2 — Estimate flow (wk 2–3)**
/estimate per §7 with real vision call; serials; fallback manual path; kit request (≤5 fields) writing kits row; estimate share links.
✓ photo → range < 8s p50 · ✓ EST serial issued + stored with raw_response · ✓ kit request works end-to-end with confirmation email.

**M3 — Money pages v1 (wk 3–4)**
Calculator template + 5 instances (scrap, 14k, pawn-comparison, dental, melt-value); /prices/14k + /prices/10k; FAQPage/Breadcrumb/LocalBusiness schema; llms.txt; sitemap; redirect map §3 live.
✓ all pages server-rendered w/ dated-fact sentence · ✓ Rich Results test passes · ✓ 301s verified.

**M4 — Family Vault (wk 5–6)**
Vault CRUD, roles, invites (/vault/join), Google One Tap + magic link, item save from estimate, alerts (email), vault welcome sequence.
✓ invite → join → both members see item in <60s · ✓ RLS verified (member A cannot read vault B) · ✓ alert fires on threshold cross.

**M5 — Lane 2 + proof (wk 7–8)**
/learn/gold-vs-bitcoin, /learn/gold-btc-ratio (daily data), converter calculator; /proof/methodology; /gold-to-bitcoin dark room; monthly statement cron.
✓ ratio page shows yesterday's dated row · ✓ methodology linked from every estimate result.

**M6 — Scale + retention (wk 9–12)**
Remaining calculators + 6 worth pages + 2 guides; /austin + booking; payouts ledger (feeds homepage ticker); tracker /track/[kitId] full states; family sign-off toggle; satellite embed snippet; review engine.
✓ 25+ money pages live · ✓ tracker states transition with emails · ✓ widget embeds on one satellite.

## 17. Operating loop (post-build — the growth system)

Weekly (~4h): Mon ship 2 backlog pages (worth→guides order per §2 volumes) · Tue assay video + ledger entries · Wed X queue + LinkedIn post · Fri 15-min metrics (GSC, estimate funnel, vault saves). Monthly: Semrush re-pull re-ranks backlog; statement + newsletter go out; GBP review push. Quarterly: version-bump specs; "State of Selling Gold" gated report; prune/301 losers. Daily (automatic): spot cron keeps every money page fresh + citable.

**KPIs (90-day):** 1,000+ organic visits/mo · estimate completion >40% · estimate→kit 8–12% · estimate→vault >25% · invites/vault ≥1.0 · 10+ kits/mo · BTC payout share 15%+ · 25 GBP reviews · first AI citation by wk 12.

## 18. Defaults chosen (overrule anytime)

Vault feature named "Family Vault" (Heirfolo reserved as future spinoff brand) · Google + magic link only at launch (no Facebook; Apple with native app) · newsletter "The Family Ledger" · Austin = appointment-only claims until space exists · BTC bonus 1.5% pending Onramp agreement · Cormorant retained as display serif · payout rate 82% default.

## Changelog
- v1.0 (2026-07-09): Initial complete build spec consolidating master plan v2.0 + all research.
