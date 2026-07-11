# Ask Offramp — conversion flow spec v1.0 (2026-07-11, per Michael)

The canonical UX contract for the Ask experience on every surface (flagship /ask, homepage modal, satellite widgets, future partner embeds). Mobile-first: the primary persona is holding a phone in one hand and gold in the other.

## The two questions, one surface
Header everywhere: **"What's your gold worth — and who should you sell it to?"** Value answers the first (live), Match answers the second (Phase C: metro directory + scored national tier). Learn (chat) backs both.

## Entry points (all → the same flow)
1. Homepage hero primary CTA "See what it's worth" → **opens the modal in place** (no navigation; /ask as no-JS fallback). Footnote under CTAs: "✦ AI-enabled — photograph your gold, get a read in seconds. No account needed." ● SHIPPED
2. /ask standalone page (SEO/AEO surface + widget iframe target). ● SHIPPED
3. Satellite launchers (gvb, goldbuyer) + future partner embeds — same widget, config-only branding. ● SHIPPED
4. Every worth-intent page cross-links (/learn, /calculators, /sell, /gold-calculator). ● SHIPPED

## The flow (5 steps, camera-first)

**Step 1 — Capture.** Two doors, photo door dominant (visual card, "Fastest"). Mobile: tapping "Upload photos" opens the camera roll/camera directly (capture attribute on mobile). Manual door = "Enter the details." ● SHIPPED (polish pass below)

**Step 2 — Confirm.** AI reads the photo (hallmark → karat, kind, size hint) and pre-fills; the seller confirms with the LEAST possible typing:
- Karat: chips (10k 14k 18k 22k 24k · Not sure) — pre-selected when AI read a stamp, with "14K stamp read from your photo ✓"
- Weight: **radio quick-pick first** — "Light / About average / Heavy / I'll type grams" mapping to the kind's typical band (e.g. ring: 2–3g / 4–6g / 7–12g) — grams input only for those who choose it. ▢ BUILD (currently number-input-first)
- Add another piece = one tap, camera again.

**Step 3 — The number (the payoff, zero gate).** Provisional range per piece + running total against live spot, dark-hunter panel, amber numerals. Always labeled "provisional — final price comes from the recorded assay." Free forever, no email required to SEE it. ● SHIPPED

**Step 4 — Keep it (the capture moment, value-for-value).** "Email me this breakdown" + market-notes checkbox. ● SHIPPED. Then the upgrade: **"Save these to your ledger"** → /ledger — V1 = email magic link (Supabase Auth), V2 = Google one-tap once OAuth creds exist. Signed-in users get: pieces saved w/ photos (private bucket, signed-URL display), live re-valuation at current spot, one-step sell CTAs; price alerts + share-with-family = next. Login is NEVER required before the number — it buys tracking, not the answer. ● SHIPPED 2026-07-11 (magic-link only: built-in SMTP ≈2 emails/hr + free tier blocks adding the 6-digit {{ .Token }} to templates — Resend SMTP unblocks both; photos persist only AFTER the save, per this step's law)

**Step 5 — The route (Match).** After the number: "Ready now?" → kit / Austin appointment / consult. "Just exploring?" → track it + "see who pays the most near you" (Phase C map). ● partial (3 CTAs shipped; Match pending)

## Design standards (the audit bar)
- Mobile: single column, thumb-reach primary actions, camera-first, no field requires a keyboard until the user opts into typing grams; total panel sticky-bottom on small screens ▢. Desktop: two-column (flow left, live total right-sticky) ▢.
- Verdant tokens only; numbers mono tabular; one dark moment (the total panel); no shimmer/glow.
- Every AI output labeled and confirmable; honest-null behavior (never invent a stamp) ● VERIFIED live.
- Performance: photo downscaled client-side (~1024px) before upload ●; vision round-trip target <8s ● (measured ~3–6s).
- Conversion instrumentation: ask_events for every step transition (opened, photo_added, ai_read, estimate_shown, email_saved, ledger_created, kit/consult clicked) ▢ partial (estimate/lead events ship today).

## Copy laws (inherited + new)
Provisional never "appraisal" · no XRF · no dollar-promises in AI text · consent copy says "market notes," not "specials" · the number is never gated.

## Rollout
This spec is the template for goldbuyer/gvb embeds and partner widgets — config changes only, no per-site UX forks. Build order: weight quick-picks + mobile polish → ledger magic-link auth → Match step (Phase C) → Google one-tap.
