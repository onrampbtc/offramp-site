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
- ● Google Search Console set up ✓ (2026-07-10) — REMAINING: submit sitemap.xml for each property if not done
- ▢ Trademark knockout search "Offramp" in financial services (pre-M1, spec §18)
- ▢ Onramp written referral + name-peace agreement
- ▢ Grab @offrampgold on X / YouTube / LinkedIn (still open)
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

## 🚨 INCIDENT: gold content in Onramp's Sanity — CLOSED FOR US (2026-07-11); ⛔ NO FURTHER ACTION ON 7bsc4ela
- **Final state:** migration legs done (18 posts + 5 categories + author, 579 glossary docs, 323 podcasts copied into r9qnuhp8) and REPOINT VERIFIED live 2026-07-11 (gvb glossary 580 links, compare article 200, /podcast 200 — all served from r9qnuhp8).
- **Access revoked:** Michael's write access to the Onramp Sanity project (7bsc4ela) was removed 2026-07-11. All writes 403. **Do not query, mutate, or "clean up" 7bsc4ela ever again — per Michael, hands off.** NOTHING was ever deleted from it by us.
- **The old cleanup plan was struck AND was unsafe anyway:** creation-date audit showed 7bsc4ela's 581 glossaryTerms date from 2026-03-23 → 2026-07-02 (Onramp's own bitcoin/custody glossary: Cold Storage, Utreexo, Commingling, aof-glossary-* ids) — NOT our July push. Blanket-deleting them would have destroyed Onramp content. The permission revocation blocked the delete before it ran.
- **What that means for OUR instance (r9qnuhp8):** of its 587 glossaryTerms, only 8 predate 2026-07-11 (our March originals); 579 were copied in from 7bsc4ela during migration and are Onramp-flavored/branded (agents flagged "… | Onramp" SEO titles). goldvsbitcoin.org is currently serving them (same content it always served, so no public change). **OPEN DECISION for Michael:** purge them, or keep + rewrite/rebrand them as gvb-native glossary over time (duplicate-content + ownership question now that Onramp access is severed).
- Truly ours-in-their-lake, left behind: the 18 gold posts exist there ONLY AS DRAFTS (never published — zero public exposure); Onramp's team can discard them from Studio whenever.

## Satellites
- **gold-domains** repo (`~/Desktop/gold-domains`): ● **deploys healed + restructure LIVE (2026-07-10)** — goldtobtc.com 308→offrampgold.com/gold-to-bitcoin · goldbuyer.io/reviews 308→touchstonereport.com · goldbuyer /gold-price per-karat + Dataset JSON-LD serving · gold-buyer builds Ready in ~37s on push.
- goldvsbitcoin.org repoint to /learn/ = wk 7–8 (M5). goldbuyer.io ranking site = Phase 2, month 4+.
- GSC setup: DNS verification TXT records are live for `offrampgold.com`, `goldbuyer.io`, `goldvsbitcoin.org`, and `touchstonereport.com`; each `/sitemap.xml` returns 200. Next: confirm sitemap submission status inside Search Console and request indexing for priority pages.

## Shipped log
- 2026-07-11 (corpus leg 1): glossary Onramp-brand scrub DONE on r9qnuhp8 — 565 docs patched (561 "| Onramp" metaTitles → "| Gold vs Bitcoin", 479 directAnswers, 323 faqPair fields), 0 residual branding; RAG export docs/ask-offramp/corpus/glossary.jsonl (587 lines). ⚠️ EDITORIAL DECISION PENDING (fold into the existing purge-vs-rewrite call): 242 docs still carry Onramp company-claim prose in aeo FAQ fields ("Onramp provides custody…", "$250M managed…") — promotional third-party claims on gvb; skipped-field detail in scratchpad/skipped.json. Semrush question pull BLOCKED (API units exhausted — Michael: refill at semrush.com/mcp-access); rerouted to SpyFu, running.
- 2026-07-11 (Ask Offramp round 2): product folder created **docs/ask-offramp/** (CONCEPT + ROADMAP + DATA-CORPUS). Locked: gold-only launch scope (expansion demand-driven), goldbuyer white-label w/ Match-first, SaaS embed track, Haiku+RAG+cache-first inference (no local LLM), Places-API buyer directory (50 metros, two-tier honest ranking: national=scored, local="not yet scored"), capture schema (assistant_sessions/messages, question_log w/ content_gap flywheel, leads/lead_items/events). SEQUENCE: design verdict → merge → satellite token rollout ∥ Phase A build. Needs Michael: verdict, Phase A go, Places API key, Anthropic key.
- 2026-07-11 (Ask Offramp locked): concept canonized in **docs/ASK-OFFRAMP-CONCEPT.md** — Value/Learn/Match engine, network deployment ("Powered by Offramp"), email at continue/save, offramp ad-free / goldbuyer monetizes, phases A-D. /austin: Firmspace name removed from copy per Michael (kept "Google building" + private office suite), 19th-floor meeting-room photo live (front-desk shot staged in public/photos/austin/, provenance in CREDITS.md — Michael authorized use as a member). Open: goldbuyer deployment shape, Phase A greenlight.
- 2026-07-11 (assistant riff + Firmspace): /austin gains Firmspace social proof (19th floor of 500 W 2nd "the Google building", staffed desk, glass rooms — "nothing like a pawn counter"; photos pending permission from austin@firmspace.com or Michael's own shots). ASSISTANT CONCEPT under naming review (candidates incl. Offramp GPT; rec "Ask Offramp"): one AI surface with three skills — Value (photo→range), Learn (RAG over /learn+glossary+methodology), Match (buyers-near-you from goldbuyer.io scores); ads/lead-gen monetization belongs on goldbuyer.io, offrampgold stays ad-free.
- 2026-07-11 (ledger repositioning): family vault reframed as **"The Gold Ledger" (beta)** per Michael — tracker-first (persona: 28-35 inheritor/divorce/dusty-drawer wanting no-obligation valuation → passive tracking → one-step sell), family sharing demoted to feature subtext. /family-vault URL kept (301 rule; rename decision pending product-name verdict), page + homepage section + hero allusion + nav/footer labels rewritten. PENDING MICHAEL: AI analyzer name (rec: "Preassay"), calculator-vs-analyzer funnel roles, email-checkbox capture at calculator completion.
- 2026-07-11 (funnel v1, chique-v3-verdant): **homepage funnel restructured per Michael** — hero now sell-intent ("Sell your gold for what it's actually worth"), eyebrow "Austin, Texas HQ · online everywhere, on demand", CTAs = See what it's worth (primary) + Sell gold for cash (secondary), family vault demoted to beta allusion line + section moved below comparison; nav: phone → "Book a consultation" button (phone stays in footer/mobile), added Learn; NEW /learn education hub (thesis hub, top-of-funnel: process / worth / questions-to-ask-any-buyer via goldbuyer methodology / gold+bitcoin via gvb + glossary), sitemap +1. FUNNEL LAWS pending decision: email-gate placement (recommend: free instant range, gate AI photo-estimate + 48h lock + alerts), AI photo-estimate = M2 accelerated.
- 2026-07-11 (round 4): **Inversion on chique-v3-verdant per Michael**: white page ground, estate paper demoted to cards (#FAF7F1 raise/bg-card, hover #F5F0E6), dark moments deepened to darkest hunter (#122717 panel / #0E2015 dark room + vault band). POSITIONING LAW added (Uber lens): TAM = the dusty drawer, not the existing gold-seller; convenience + friendliness unlock it — never gate warmth behind luxury. Build ✓.
- 2026-07-11: **chique-v3-verdant branch (UNMERGED — awaiting Michael's screenshot verdict).** Direction per his 07-11 feedback (dark greens not black; orange on live pricing; human + Menē photos; minimal stark white): panels/vault → Rolex --dark-green #0B3E27/#0A3220, new ember tokens #A0490A/#F39F41 (Bloomberg amber convention: amber = live data) on the Live dot/timestamp/XAU in LiveStrip + Assay Line, ink → green-cast #1D2721. 14 free-license photos (Unsplash/Pexels, credited in public/photos/CREDITS.md): hero = hands + gold ring over granite, vault band = coin in warm light (lg only); vault card moved to its own "family vault" section. Research: docs/design-research/green-amber-precedent.md (Rolex/Harrods/Fortnum/Aesop/Hermès/Menē live-CSS teardown, WCAG-checked triad). Build ✓ 63/63.
- 2026-07-10: XRF language retired from all customer copy (~100 occurrences, 3 sites) → "an assay you can watch" family; technical term kept only in ranking-site evidence + future methodology footnote. Sitemaps submitted in GSC by Michael ✓. Register feedback: palette/content reads too transactional; chique refs = Worthy/Mene/Rolex/Proper Hotel; reference board in production.
- 2026-07-10 (brand lock): **ASSAY LEDGER CHOSEN + SHIPPED.** Spec §4 v1.2 + CLAUDE.md updated; type system refined (Source Serif 4 variable/opsz + Geist + Geist Mono, display tracking); logo system 'The Assay Stamp' (Seal/Wordmark/Lockup + favicon); THE ASSAY LINE live sitewide; merged to main. Satellites: champagne token family + Source Serif 4 display (subtle variation, own body stacks kept); hello@offrampgold.com + consult booking in both footers. goldbuyer /states expanded to 24 (verify-flagged legal facts hedged).
- 2026-07-10 (night): **Glossary 581/581 COMPLETE** — every goldvsbitcoin term now has a full explanation (batches 1-9 + premium top-60 winning overlaps), zero mutation failures; 168 stranded drafts from the session-limit interruption found and cleaned. Live pages roll over as ISR revalidates (≤1h).
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
