# Green / amber / paper precedent — research for chique-v3 "verdant" (2026-07-11)

Basis for the chique-v3-verdant palette. Method: hex values marked **[live CSS]** were extracted from the brand's actual served CSS or computed styles on 2026-07-11; **[secondary]** = brand-color reference sites.

## 1. Dark green in luxury/wealth design

**Rolex** [live CSS] — the strongest precedent; full token set from `:root` on rolex.com:
`--green` **#127749** (interactive: links, pills, focus) · `--dark-green` **#0B3E27** (deep grounds/moments) · `--light-green` #249A64 (hover) · gold gradient **#A37E2C → #DFAB3A** · flat gold #926C1C · body ink **#212121** (near-black, NOT green) · grounds #F8F8F8/#FFF. Restraint: white chrome, near-black body, green only on interactive elements and inside photography. Dark green is a *moment*, never the wallpaper. (Logo green #006039 is the print standard; their web green is deliberately brighter.)

**Harrods** [live] — greens **#304835** (primary CTA) and **#122717** (one deep panel); golds are muted bronze **#8A7252** / **#AB8E66** doing the everyday work (bronze #8A7252 on white = 4.56:1, the only "gold" that passes AA as text on white). Green on ~5 elements per page. Gold works daily; green marks signatures.

**Fortnum & Mason** [live] — eau-de-nil teal-greens (#007373 primary, mint tints #E3F2EE) on warm off-whites **#FBF8F6/#F8F1E9**; #007373 on #FBF8F6 = 5.37:1 — a mid-green can carry text on warm paper.

**Aesop** [live] — grounds #FFFEF2 + parchment panel **#F6F5E8** on 190 elements; green appears exactly once (#468254, 4.52:1). Master class in two warm papers layered instead of white-on-white.

**Corrections:** Coutts is claret #400718, not green (cite for "one deep heritage hue" only). Macallan's amber lives in bottle photography, not UI. Bottega green #4CBB17 is the counter-example — high-chroma fashion green, wrong register for trust/wealth; the wealth band is value 15–30%, restrained chroma, hue 140–160°.

## 2. Amber/orange as live-data accent

- **Bloomberg Terminal**: amber is the retained default for *non-semantic live data* (their UX post on Terminal color accessibility confirms); commonly cited amber ≈ **#F39F41** [secondary]. Convention: amber = live/neutral; green/red stay semantic up/down. Maps perfectly to "spot is live" without implying gain/loss.
- **Hermès** [live]: brand orange #F37021, but the site is warm off-whites (#FFFCF7, #FCF7F1, #F6F1EB), tans, black ink — orange is packaging and moments, never interface wallpaper. "Orange brand" ≠ orange UI.
- **Hue law**: discount-CTA orange = hue 25–35°, high sat, high value (e.g. #FF6600). Premium warm signal = burnt/cognac on light (**#A0490A** = 5.69:1, #B45309 = 4.69:1 on #FAF7F0) or terminal amber on dark (**#F39F41** = 5.68:1 on #0B3E27). Never on a button.

## 3. Menē photography grammar [browsed live]

UI: midnight-navy ink #1C2134 (not black), gold #D19F4E family, body #67747C, grounds #FFF/#FAFAFA. Shots:
1. Hero laydown — gold piled on deep navy seamless (≈#252B42), one soft key upper-left, long soft shadows; navy cools the frame so 24k reads warmer by complementary contrast.
2. Single object on pure black, candle-grade light, deep shadow, object 35–45% of frame.
3. Catalog: single piece on white, soft top-front light, *contact shadow* (no drop-shadow fakery), hallmark legible — proof-of-purity as art direction.
4. Humans: film-look editorial or B&W hands — skin desaturated so gold is the only saturated thing in frame. Human = provenance; metal = the color.
5. Price chart on #FAFAFA paper, faint champagne grid, gold price line — direct precedent for live-pricing-on-paper UI.

## 4. Chosen triad (Triad A, "Rolex ledger") — measured contrast

- Vault ground **#0B3E27** · bone #F4F1E8 text = 10.73:1 ✓ · champagne #DFAB3A = 5.79:1 ✓ · amber #F39F41 = 5.68:1 ✓
- Paper #FAF7F0 · ink #1F1F1C = 15.4:1 ✓ · interactive green #127749 = 5.22:1 ✓ · ember #A0490A = 5.69:1 ✓

**Applied in globals.css (chique-v3-verdant):** panel #0B3E27 · panel-2/vault-atmosphere #0A3220 · ember #A0490A (light) / ember-brt #F39F41 (dark) · champagne family unchanged · ink #1D2721 green-cast charcoal.

**Usage laws:** green never for body copy (Rolex) · gold does daily accents, green marks signature moments (Harrods) · amber only on numbers that are actually live (Bloomberg) · ember never a button fill (Hermès) · two warm papers layered, not white-on-white (Aesop) · photos: one object, one directional key, dark/navy or white-with-contact-shadow grounds, humans in film/B&W treatment (Menē).
