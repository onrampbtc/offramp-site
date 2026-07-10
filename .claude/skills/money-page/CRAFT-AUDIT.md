# Craft Audit — anti-slop rules for every Offramp page

Harvested 2026-07-10 from taste-skill v1.5 + redesign-skill (github.com/Leonxlnx/taste-skill,
MIT) and adapted to Offramp. Fonts and colors are intentionally EXCLUDED here: Estate Paper
(BUILD-SPEC §4) owns those decisions. Where this audit and the spec conflict, **the spec wins** —
resolved conflicts are marked ⚖ at the bottom so nobody "fixes" intentional design.

## Layout hard rules (failing any of these = not done)

**Hero discipline**
- Hero fits the initial viewport: headline ≤ 2 lines desktop, subtext ≤ 20 words and ≤ 4 lines,
  CTAs visible without scrolling. A 4-line headline is a font-size error, not a copy error.
- Max 4 text elements in the hero: (eyebrow OR nothing) + headline + subtext + CTAs
  (1 primary + max 1 secondary). Banned inside the hero: trust micro-strips, pricing teasers,
  feature bullets, avatar rows, taglines under CTAs — those get their own section below.
- Hero top padding capped ~6rem desktop; content must not float halfway down the viewport.

**Section rhythm**
- Section-layout-repetition ban: a layout family (3-col cards, split text+image, full-width
  quote…) appears at most once per page; a page of 8 sections needs ≥ 4 distinct families.
- Zigzag cap: max 2 consecutive image+text split sections; the 3rd is a fail — break with a
  full-width section, vertical stack, grid, or data panel.
- Eyebrow restraint: max 1 small-caps label per 3 sections (hero counts). Mechanical check:
  count `uppercase tracking` labels; if > ceil(sections/3), rewrite. Usually the headline alone
  is enough.
- Split-header ban: no "big headline left + small floating paragraph right" section headers.
  Stack vertically, body max-width ~65ch.
- Grid cell-count rule: N items → exactly N cells. Never a blank filler tile.
- Multi-cell grids can't be all same-background text cards; 2–3 cells need real visual
  variation (photo, tinted panel, data visualization).

**Navigation & CTAs**
- Nav renders on one line at desktop, height ≤ 80px.
- CTA labels never wrap at desktop (1–3 words for primary).
- No duplicate CTA intent: one label per intent per page, used identically everywhere
  (ours come verbatim from spec §4's CTA table — that solves this by construction).

**Structure**
- Real max-width container (~1200–1440px). `min-height: 100dvh` not `100vh`. CSS Grid over
  flexbox percentage math. Explicit mobile collapse declared per multi-column section.

## Content & data tells (the "Jane Doe effect")

- No fake-perfect numbers (99.99%, 50%, $100.00). Ours are live spot-derived — always real,
  always dated. Any example weight/value must be plausible and specific (16.2g, $412).
- No AI filler verbs: "elevate", "seamless", "unleash", "next-gen", "revolutionize",
  "game-changer", "delve". Plain, specific language. (Spec adds: never "unlock the value",
  "turn clutter into cash".)
- No exclamation marks in system copy. No "Oops!" errors — be direct: "Connection failed.
  Try again." Active voice always.
- Sentence case headers, not Title Case On Everything.
- No Lorem Ipsum, no "John Doe", no identical dates on listings, no stock "diverse team" photos.
- Middle-dot (·) rationed: max 1 per line, in metadata strips only (our dated readings comply).
- Em-dash: banned in all NEW copy we write (headlines, body, buttons, captions, alt text) —
  it's the #1 AI tell. Use a period, comma, colon, or hyphen. ⚖ Exception: the spec's verbatim
  copy strings keep their punctuation as written.

## Decoration bans (production-tested AI tells)

- No section-number eyebrows (`01 / Capabilities`), no `01/4` pagination on tiles, no scroll
  cues ("Scroll to explore"), no vertical rotated text, no decorative crosshair/grid lines.
- No version labels (`BETA`, `v2.0`) in heroes or footers of marketing pages.
- No pills/labels/captions overlaid on photos; caption below the image, functional, or nothing.
- No poetic section labels ("From the field", "On our desks") — plain functional labels.
- No locale/weather strips. One real address in the footer is content; an atmospheric
  "AUS 14:23 · 34°C" strip is decoration.
- No decorative colored status dots. A dot means real state (our live-price dot qualifies —
  it reports actual feed status) and appears once per section max.
- No div-built fake product screenshots. Real screenshots, real photography, or nothing.
  ⚖ Exception: the homepage vault preview card is spec-mandated and labeled illustrative.
- No hand-rolled decorative SVGs; icons from one set at one stroke weight.

## Interactivity & finish states (what AI forgets)

- Every interactive element: hover shift, pressed feedback (`scale(0.98)`), 200–300ms
  transitions, visible focus ring (non-negotiable accessibility).
- Animate only `transform`/`opacity` (GPU); never `top/left/width/height`.
- Loading = skeletons shaped like the layout, not spinners. Designed empty states (spec has
  vault's: "Start with one piece. A photo is enough."). Inline form validation, never `alert()`.
- Active nav state visible. No dead `#` links. Smooth scroll for anchors.
- Custom branded 404. Privacy/terms in footer. Skip-to-content link. Alt text that describes.
- Semantic HTML (`<main> <section> <nav> <table>`), no div soup — this is also GEO: retrieval
  engines parse structure.

## Density rules (adapted: data is our product)

- Marketing sections: headline ≤ 8 words + sub ≤ 25 words + one visual or CTA. Cut ruthlessly.
- Long lists (> 5 items) need a designed component, not `divide-y` hairlines under every row:
  group into 2–3 labeled clusters with sparse dividers, feature 3–4 hero values as display
  tiles with the rest under a disclosure, or card-per-item.
- ⚖ Our price grids and karat tables ARE the product on money pages — they stay, but styled
  as designed specimen tables (grouped, hairline-sparse, mono numerals), never 10 rows of
  identical border-b.

## Pre-flight (run before any page ships — mechanical, not vibes)

- [ ] Hero: ≤ 2-line headline, ≤ 20-word sub, CTA above fold, ≤ 4 text elements
- [ ] Eyebrow count ≤ ceil(sections/3) · no 3+ consecutive split layouts · ≥ 4 layout families
- [ ] Zero em-dashes in new copy · no filler verbs · sentence case · no exclamation marks
- [ ] One CTA label per intent, verbatim from spec §4 · no CTA wraps
- [ ] No decoration tells (section numbers, scroll cues, overlaid pills, version stamps,
      locale strips, fake screenshots, decorative dots)
- [ ] Hover/press/focus states on everything interactive · skeletons · designed empty/error states
- [ ] Semantic HTML · alt text · WCAG AA contrast on every CTA and form field
- [ ] Numbers: DM Mono tabular-nums, real values, dated (spec §4/§11)
- [ ] Grid cells = item count · tables grouped, not hairline-spammed

## ⚖ Resolved conflicts (spec wins — do not "fix" these)

1. **Dark panels inside light pages** — the audit calls a lone dark section "a copy-paste
   accident"; for us dark instrument panels + the dark thesis band are the signature (spec §4).
   They're consistent tokens (`--panel`), used for data/instruments only. Keep them.
2. **Spec's verbatim copy strings** keep their exact punctuation, em-dashes included.
3. **Serif everywhere** — audit limits serif to editorial; Estate Paper is an editorial world.
   Cormorant display stays, per spec.
4. **Small-caps mono labels** are part of the certificate motif; the eyebrow *cap* still
   applies (max 1 per 3 sections), the *style* is ours.
