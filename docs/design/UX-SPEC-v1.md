# Offramp UX and Wireframe Specification

**Status:** Draft for product approval  
**Version:** 0.1  
**Date:** 2026-07-09  
**Applies to:** offrampgold.com core acquisition, estimate, vault, kit, and payout experience

## 1. Purpose and source-of-truth order

This document turns the business requirements in `docs/BUILD-SPEC.md` into an implementable interface contract. It defines page hierarchy, responsive behavior, interaction states, component rules, measurement, and screen-level acceptance criteria.

Use the sources in this order:

1. `docs/BUILD-SPEC.md` controls business rules, routes, calculations, data, infrastructure, compliance, and milestone order.
2. This document controls information hierarchy, responsive layout, interaction behavior, and UX acceptance.
3. `docs/design/wireframes.html` shows the intended composition. It is explanatory, not pixel-perfect visual design.
4. Existing production code is migration input. When it conflicts with the approved specifications, the specifications win.

## 2. Product outcome

Offramp should help a person move from uncertainty about family gold to a trusted next step without demanding expertise, an account, or an immediate sale.

**North-star business metric:** completed kits per month.  
**Primary leading metric:** completed photo estimates.  
**Secondary leading metrics:** estimate-to-kit conversion, estimate-to-vault conversion, vault invites, and vault-to-kit conversion.

### Experience promise

> Photograph a piece, understand its honest range, decide with your family, and sell only when everyone is ready.

### Primary audiences

| Audience | Starting concern | Needed proof | Preferred next step |
|---|---|---|---|
| Inheritor or family organizer | “I do not know what this is, and I do not want to make a bad decision.” | Conservative range, no pressure, shared visibility | Save to a family vault |
| Price-aware seller | “What is this worth today, and who pays fairly?” | Live spot, transparent payout rate, buyer comparison | Photo estimate, then kit |
| Austin local seller | “Can I deal with a real person nearby?” | Real NAP, appointment terms, assay process | Book drop-off |
| Gold-to-Bitcoin holder | “How do I change monetary assets without hidden custody risk?” | USD-first handoff, Onramp role, explicit sequence | Estimate, then Onramp handoff |

## 3. Scope

### In scope for this specification

- Global navigation, footer, and responsive shell.
- Homepage.
- Photo-estimate landing, capture, reading, manual fallback, and result fork.
- Calculator and price-content template.
- Family Vault dashboard and its core empty, populated, and invite states.
- Kit and offer tracker.
- Gold-to-Bitcoin “dark room.”
- Shared components, system states, accessibility, analytics, and implementation sequencing.

### Not in scope for first-pass wireframes

- Admin operations, assay technician tooling, customer support console, or payout back office.
- Full visual identity production, final photography, illustrations, or motion studies.
- Native mobile apps.
- Detailed auth-provider screens owned by Google or Supabase.
- Every SEO instance. Calculator, price, worth, guide, and thesis pages inherit from the template rules here and `docs/BUILD-SPEC.md` §9.

## 4. Experience laws

1. **Value before identity.** A visitor can complete an estimate without an account. Ask for identity only to ship, save, invite, track, or accept.
2. **Ranges before false precision.** Estimates are ranges. Final price always points to XRF assay on video.
3. **Two-path result.** Every estimate ends with an immediate path to a free kit and a patient path to the Family Vault.
4. **Proof beside the claim.** Price claims sit beside spot time, payout rate, methodology, or assay proof.
5. **Family-safe language.** First-contact surfaces say “see what it’s worth.” “Cash out” appears only after sell intent.
6. **Bitcoin is a payout path, not the acquisition story.** Seller-facing pages stay warm and human. The dark room is the only full dark page.
7. **No invented trust.** Review, rating, and payout modules remain absent until backed by real records.
8. **One dominant action per state.** Secondary actions remain visible without competing visually.

## 5. Information architecture

```text
Home
├── See what it is worth → Estimate
│   ├── Capture
│   ├── Reading / manual fallback
│   └── Result
│       ├── Lock 48h → Kit request → Tracker
│       └── Save → Auth → Family Vault → Invite / alerts → Kit
├── Calculators / Prices / Worth / Guides → Estimate
├── Family Vault marketing → Vault / Auth
├── Austin → Appointment / Estimate
└── Gold to Bitcoin → Estimate → Kit → USD wire → Onramp
```

### Global navigation

Desktop order: wordmark · Sell gold · What it’s worth · Family vault · Austin · phone. Primary action is **See what it’s worth**.

Mobile order: wordmark · primary estimate action · menu. The menu contains the five text links and the phone number. Opening the menu must not obscure the estimate action or lose scroll position.

### Indexing boundaries

- Index: estimate landing, homepage, content templates, family-vault marketing, Austin, proof, and gold-to-Bitcoin.
- Noindex: estimate application steps, vault application, join tokens, tracker, auth, and all private states.

## 6. Layout and responsive system

### Breakpoints and grids

| Range | Grid | Page gutter | Behavior |
|---|---|---|---|
| 320–639 | 4 columns | 20px | Single-column, actions stack, sticky bottom action allowed in transactional steps |
| 640–1023 | 8 columns | 32px | Two-column modules when content remains readable |
| 1024+ | 12 columns | 48px | 1200px maximum content width; hero and app views may use asymmetric 5/7 or 7/5 splits |

Spacing should follow an 8px base rhythm. Reading copy is limited to 68 characters per line. Transactional forms are limited to 640px. Numbers use DM Mono with tabular figures.

### Visual layer

- Seller-facing surfaces use Estate Paper: warm paper, ink, white cards, hairlines, and restrained gold accents.
- Dark instrument panels are embedded only where the data benefits from contrast: live prices, camera/reading, assay video, per-gram grids, and charts.
- Gold-to-Bitcoin uses the dark-room palette page-wide.
- No gradients, glow, shimmer, pulse, decorative glass, or motion on the LCP path.
- Real photography should show hands, pieces, assay equipment, and Austin context. Do not use generic luxury bullion imagery as the primary human story.

## 7. Core journeys

### Journey A — unsure inheritor

1. Lands on the homepage and sees the family-first promise.
2. Starts a photo estimate without creating an account.
3. Receives a conservative range, serial, dated spot, and assay disclaimer.
4. Saves the piece, uses Google One Tap or email magic link, gives it a story name, and invites family.
5. Returns via price alert or monthly statement and requests a kit when ready.

**Success:** estimate saved and at least one vault invitation sent.  
**Guardrail:** do not introduce urgency before the user signals intent to sell.

### Journey B — ready seller

1. Enters from a calculator, price, worth, guide, local, or homepage surface.
2. Completes an estimate or uses a calculated value as context.
3. Locks the price for 48 hours and requests a free insured kit in five fields or fewer.
4. Tracks shipping, receipt, recorded assay, offer, acceptance, and payout.

**Success:** kit requested.  
**Guardrail:** shipping, insurance, return, expiry, and payout terms are visible before commitment.

### Journey C — Gold-to-Bitcoin

1. Enters the dark room from a thesis page or homepage band.
2. Understands the sequence: gold → Offramp assay → USD wire → seller-owned Onramp account → Bitcoin custody.
3. Uses the ratio converter, then starts an estimate.

**Success:** estimate started from the dark room.  
**Guardrail:** never imply that Offramp holds, transmits, or directly pays Bitcoin.

## 8. Screen specification

### W01 — Homepage `/`

**Job:** establish the family-first proposition and begin an estimate.

Section order:

1. Global nav.
2. Split hero: message and CTAs left; illustrative vault preview right.
3. Live dark strip: gold spot, BTC, gold/BTC ratio, observation time.
4. Three-step process: photo → free insured kit or Austin → assay on video and payout.
5. Pawn shop vs typical mail-in vs Offramp comparison.
6. Proof slot: payout ticker only after five real public entries; otherwise the section does not render.
7. Family Vault explanation and invite loop.
8. Dark thesis band to Gold-to-Bitcoin.
9. Footer with approved NAP and compliance language.

**Hero primary:** See what it’s worth.  
**Hero secondary:** Start a family vault.  
**Required copy:** use `docs/BUILD-SPEC.md` §4 and §6 verbatim where provided.

**Responsive:** the vault preview follows the hero actions on mobile. Live data wraps into three equal rows. CTAs become full-width. The dark thesis band remains a single concise message, not an article preview.

**Acceptance:** primary action is visible at 320×568 without scrolling; no review or payout claims render without records; current prices include a timestamp or dated snapshot.

### W02 — Estimate capture `/estimate`

**Job:** receive usable photos while keeping effort and anxiety low.

States:

- Landing: value proposition, no-account promise, sample estimate, camera action, FAQ.
- Camera/upload: primary photo target, hallmark guidance, gallery fallback.
- Optional second photo: hallmark close-up or scale reference.
- Uploading: progress, cancel, and retry.
- Validation error: unsupported type, oversized input, unreadable image, or connection failure.

**Primary:** Take a photo.  
**Secondary:** Choose from library.  
**Helper:** Center the piece. Get the stamp or hallmark if you can: 14K · 585 · 750 · 10K.

**Responsive:** mobile camera action is dominant and may use a sticky bottom action after guidance. Desktop supports drag and drop and never requires a device camera.

**Acceptance:** accepts camera or file input; client downscales to 1600px maximum; keyboard and screen-reader users can operate the file control; photo is not uploaded before explicit action.

### W03 — Estimate reading and result `/estimate`

**Job:** make the analysis legible, issue a trustworthy range, and present the two-path fork.

Reading reveals actual server progress in this order: image received → hallmark finding → weight range → collector check → serial. Do not fake progress percentages.

Low confidence below 0.4 switches to a guided manual path:

1. Pick likely hallmark/karat from photographed examples.
2. Enter weight or use a household-object helper.
3. Confirm item type.
4. Return a deliberately wider range marked “guided estimate.”

Result hierarchy:

1. Story-neutral item label and estimate serial.
2. Large range, never a single point.
3. `at {rate}% of spot` plus dated XAU reading.
4. `Final price set by XRF assay on video.`
5. Collector-value note when flagged.
6. Primary kit lock and secondary vault save.
7. Methodology link and quiet market context.

**Primary:** Lock this price for 48h — free kit.  
**Secondary:** Save to your family vault.

**Acceptance:** calculation matches `weight × purity × spot × payout rate`; result persists by serial; refresh does not duplicate the estimate; screen remains usable when price context or market-change data is unavailable.

### W04 — Calculator and price template

**Job:** answer the search question immediately, make the math inspectable, and convert to a photo estimate.

Calculator hierarchy:

1. Breadcrumb and direct H1 answer with live spot context.
2. Inputs: karat, weight, unit, and payout-rate slider.
3. Results: melt value, expected Offramp range, and buyer comparison.
4. Primary photo-estimate CTA; secondary kit CTA only after a value exists.
5. Dark per-gram instrument panel.
6. Methodology, dated fact, FAQs, assay proof, and internal links.

Price-page variation replaces the inputs with a per-unit table and 30-day chart. Worth pages lead with a 40–80 word direct answer and typical examples.

**Responsive:** result follows inputs immediately on mobile. Tables use row-label/value pairs rather than horizontal page scrolling. The primary CTA appears after the result and again at page end.

**Acceptance:** all values share the same spot snapshot; query parameters can preserve calculator state; a dated-fact sentence and matching `dateModified` are rendered server-side; schema matches visible content.

### W05 — Family Vault `/vault`

**Job:** preserve item context, make shared value understandable, and invite family participation.

Populated hierarchy:

1. Vault name, total range, monthly change, member avatars, and actions.
2. Alert or family-signoff banner only when applicable.
3. Item grid: photo, story name, category, range, trend, flag, added-by.
4. Add item and invite family actions.
5. Activity and valuation context.

Empty state uses the exact line: `Start with one piece. A photo is enough.`

Invitees see inviter, vault name, item count, and current total before authentication. Private item details and photos remain hidden until membership is accepted.

**Owner primary after sell intent:** Cash out — get a free kit.  
**Secondary:** Invite family.

**Responsive:** totals and actions stack; item cards become a one-column list; avatar overflow becomes `+N`; destructive member controls move to a separate settings view.

**Acceptance:** RLS prevents cross-vault reads; totals and trends use one valuation timestamp; viewer role cannot mutate; invite links expire after 14 days; item photos are signed private URLs.

### W06 — Kit and offer tracker `/track/[kitId]`

**Job:** make custody and next action unmistakable from label creation through payout.

Timeline states: requested → shipped → delivered → received → assaying → offered → accepted → paid, with returned as an alternate terminal state.

The current state is expanded. Completed and future states remain concise. Each state shows time, custody party, and relevant evidence. Offered state includes itemized assay data, recorded video, total, seven-day expiry, accept action, and free-return action.

**Primary changes by state:** Track package · Watch assay · Review offer · Accept and cash out · View receipt.  
**Secondary at offer:** Free return instead.

**Responsive:** timeline becomes vertical on mobile. Offer comparison and assay table become labeled rows. Primary transactional action may be sticky but cannot hide expiry or return terms.

**Acceptance:** magic-link access is scoped to one kit; every transition has a timestamp; status refresh is idempotent; offer acceptance requires an explicit confirmation; payout receipt states USD amount and Onramp reference when applicable.

### W07 — Gold-to-Bitcoin `/gold-to-bitcoin`

**Job:** explain the monetary and custody handoff, then start an estimate.

Section order:

1. Dark-room hero with thesis, estimate CTA, and methodology link.
2. Current gold/BTC ratio and historical chart.
3. Five-step handoff: gold → Offramp assay → USD wire → Onramp → seller custody.
4. Ratio converter.
5. Bonus explanation only after written terms are approved.
6. Risk/custody clarification and sourced thesis content.
7. Estimate CTA and Onramp referral disclosure.

**Primary:** Check your gold in 60 seconds.  
**Secondary:** Read the methodology.

**Acceptance:** copy never says direct BTC payout; chart and dated ratio share one snapshot; bonus is hidden or marked pending until approved; sources are visible; page passes color contrast without glow or gradients.

## 9. Shared component contracts

| Component | Required content | Key behavior |
|---|---|---|
| Global nav | Wordmark, primary sections, real phone, estimate CTA | Keyboard operable; current page indicated; compact mobile menu |
| CTA pair | One dominant action, one secondary | Stack on mobile; action labels remain context-specific |
| Live datum | Label, value, unit, observation time/source state | Monospace; fallback visibly marked, never presented as live |
| Estimate certificate | Serial, range, payout rate, spot time, assay disclaimer | Printable/shareable; no PII on public serial view |
| Proof module | Method, timestamp, source record | Entire module omitted when evidence is unavailable |
| Item card | Photo, story name, category, range, trend, flags, contributor | Whole card opens detail; nested actions have explicit labels |
| Timeline | State, timestamp, custody, evidence, action | Current step expanded; alternate return path supported |
| Data table | Caption, units, source time, row/column headers | Mobile reflows without horizontal page scrolling |

## 10. System states and recovery

- **Loading:** reserve final geometry; use text state changes rather than decorative skeleton motion.
- **Offline or price unavailable:** retain captured work, show last-known observation time, and disable price locking while preserving vault save.
- **Upload failure:** keep the local preview, explain the failure, and allow retry without recapture.
- **Vision failure:** route to manual estimate and record the fallback reason.
- **Auth interruption:** retain the estimate serial and resume the chosen fork after authentication.
- **Expired kit lock:** preserve the estimate and offer a one-action refresh at current spot.
- **Expired invite:** show vault identity without private details and provide a request-new-link action.
- **Empty proof:** omit the module; never render placeholder reviews, ledger rows, avatars, or ratings.

## 11. Accessibility and trust requirements

- WCAG 2.2 AA target across light and dark surfaces.
- Visible focus on every interactive element; logical source order matches the visual order.
- 44×44px minimum touch targets for primary mobile controls.
- Camera/upload works with a labeled native file input; no drag-and-drop-only interaction.
- All icons have text labels or accessible names. Decorative imagery is ignored by assistive technology.
- Charts include a concise table or text alternative. Trend is never encoded by color alone.
- Motion honors `prefers-reduced-motion`; no looping or urgency animation.
- Errors identify the field, describe the fix, and preserve valid input.
- Prices, ranges, units, expiry times, insurance limits, and payout terms are readable without tooltips.

## 12. Analytics contract

Events should use stable names and contain no image data, addresses, assay details, invite contacts, or other sensitive content.

| Event | Minimum properties |
|---|---|
| `estimate_started` | source route, device class |
| `estimate_photo_added` | photo index, capture method |
| `estimate_completed` | item type, confidence band, fallback used, duration band |
| `estimate_kit_selected` | source route, estimate serial |
| `estimate_vault_selected` | source route, estimate serial |
| `kit_requested` | source route, lock status |
| `vault_item_saved` | item category, source estimate yes/no |
| `vault_invite_sent` | channel, member role |
| `tracker_viewed` | current kit state |
| `offer_accepted` | payout method |
| `content_estimate_clicked` | template type, slug, CTA position |
| `gold_btc_estimate_started` | chart or converter interaction yes/no |

Funnel reporting must separate immediate kit conversion from patient vault conversion. Do not count a vault save as a failed sale.

## 13. Performance and technical acceptance

- Mobile Lighthouse target: 90+ performance, accessibility, best practices, and SEO on public templates.
- LCP target under 2.5 seconds at p75; CLS under 0.1; INP under 200ms.
- Hero imagery uses responsive dimensions and no blocking animation.
- Estimate image processing runs client-side before upload and never blocks basic page navigation.
- Public content is server-rendered with one daily price snapshot per response.
- Private app routes are noindex and require scoped data access.
- Forms survive refresh or auth detours when safe; submission handlers are idempotent.

## 14. Implementation sequence

1. **Foundation/M1:** tokens, type, shell, nav/footer, homepage, shared live-data component, redirect map, and real contact data.
2. **Estimate/M2:** capture, upload, manual fallback, result certificate, kit fork, vault fork, auth resume, and event spine.
3. **Content/M3:** calculator/price/worth templates, schema, dated facts, internal links, and methodology proof.
4. **Vault/M4:** auth, vault roles, items, invites, alerts, private photos, and statement-ready valuation data.
5. **Thesis/M5:** Gold-to-Bitcoin dark room, ratio chart, proof routes, and transparent Onramp handoff.
6. **Transaction/M6:** tracker, assay media, offers, payout receipt, family sign-off, real payout ledger, and review engine.

Each phase ships only when its screen-level acceptance criteria, analytics events, error states, mobile layout, and access controls pass.

## 15. Approval gates before production claims

- Confirm the 512 phone line and approved display formatting.
- Confirm Austin address and appointment-only language.
- Complete the Offramp trademark knockout search.
- Approve payout-rate range and public methodology language.
- Approve written Onramp referral, custody, and bonus terms.
- Create the Supabase and Resend projects.
- Supply real reviews, payouts, assay media, licenses, and team imagery before those modules render.
- Confirm free-kit insurance and return terms in customer-facing language.

## 16. Wireframe review checklist

Approval should answer these questions before visual design or implementation begins:

1. Is the homepage primarily a family/value product, with Bitcoin in a supporting role?
2. Does the estimate result give equal legitimacy to “sell now” and “save with family”?
3. Is the amount of identity requested appropriate at each step?
4. Are price, payout rate, assay method, insurance, expiry, and return terms visible at the decision moment?
5. Does the Vault feel useful before a sale and still lead naturally to kits?
6. Does the tracker make custody, evidence, and the current action unambiguous?
7. Does the dark room accurately represent the USD-to-Onramp handoff?
8. Can all primary tasks be completed at 320px width and with keyboard-only input?

