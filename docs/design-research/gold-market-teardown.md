# Gold Market Visual Design Teardown

**Purpose:** Inform a world-class brand direction for Offramp (offrampgold.com, premium gold buyer). This is an aesthetics / brand / trust-design teardown, not an SEO audit.

**Method:** Firecrawl HTML scrapes (homepage + one interior page per site) with font/hex/radius extraction from rendered markup and fetched stylesheets, plus desktop (1440px) browser screenshots at three scroll depths. Note: `firecrawl browser` failed in this environment (`agent-browser` binary missing); screenshots were taken via Playwright instead. All hex values below were pulled from actual site CSS, not eyeballed.

**Date:** July 2026

---

## 1. Worthy.com — the empathetic estate-resale service

### Palette
| Hex | Role |
|---|---|
| `#F2F0EE` | Page background — warm greige, not white |
| `#2B353C` | Primary text + dark nav/FAQ bands (slate, not black) |
| `#47566D` | Secondary slate text |
| `#2C4EB5` | CTA blue ("Get Started") |
| `#E6E6E6` / `#D2D5D7` | Hairlines, borders |
| `#E5F4EF` / `#00754E` | Trustpilot green moments |

### Typography
- **Display:** Argesta (Display / Headline / Text cuts) — a high-contrast, slightly romantic serif. Used big (~56–64px) and in sentence case: "Worthy gets you the best offer for your jewelry."
- **Body:** Uncut Sans Variable (neutral grotesque), ~16px/1.3.
- Serif for every section heading, sans for everything functional. Buttons 6px radius — barely rounded, calm.

### Imagery strategy
- Hero: soft-focus **macro photography of a hand cradling a diamond ring on silk**, graded champagne/blush. Product-as-heirloom, not product-as-commodity.
- Deeper: lifestyle photos of **mature women** (50s+, reading tablets at home) — they photograph the actual seller demographic (divorce, estate, downsizing), not aspirational 25-year-olds.
- App/UI screenshots in device frames for the process sections.

### Layout signature
- Full-bleed photographic hero, headline left, and — instead of one CTA — **three intent-segmented buttons: "Ring / Watch / Jewelry"** under "I want to sell my:".
- Trust logo strip (GIA, FedEx, Lloyd's, IGI) directly under the hero fold.
- Alternating warm-light and dark-slate bands; FAQ lives on the dark band with serif headings.
- Interior how-it-works: a **5-step horizontal stepper with oversized serif numerals** (1 Fill Out the Form → 5 Get Paid) connected by thin arrows, each step then expanded as a giant card with serif title + photo.

### Trust devices
- Live Trustpilot carousel **including a 4-star "Low ball price" review** — radical transparency, reviews are visibly unfiltered, each tagged "Invited."
- "Rated 4.4/5 based on 4,875 reviews" — specific, linked, current ("2 hours ago").
- Institutional logos: GIA (grading), Lloyd's (insurance), FedEx (logistics), IGI. Each logo answers a specific fear.

### Signature element
The serif-numeral 5-step process stepper — the transaction ritualized into something that feels like a private service, not a form funnel.

### Register
Empathetic, editorial, calm-premium.

### Steal / Avoid
- **Steal:** warm greige + slate + romantic serif formula; intent segmentation in the hero; unfiltered review feed; logo-per-fear trust strip; the serif-numbered process ritual.
- **Avoid:** the SaaS-blue CTA (feels borrowed, off-brand against the greige); some lifestyle shots drift stocky.

---

## 2. Mene.com — the investment-jewelry maison

### Palette
| Hex | Role |
|---|---|
| `#1C2134` | Midnight navy chrome / dark buttons |
| `#000000` | Full-black bands |
| `#D19F4E` | Gold — CTA fill and wordmark |
| `#D4DBDE` | Cool silver-grey (platinum counterpart) |
| `#FFFFFF` | Text on dark |
| `#67747C` / `#989EA2` | Muted slate secondaries |

### Typography
- **Everything is futura-pt** (geometric sans), incl. the letterspaced MENĒ wordmark with macron.
- Elegant sentence-case headlines ("Luxury that lasts, value that grows."), small underlined text links as CTAs.
- **Buttons: border-radius 0.** Hard-edged, bullion-like. Gold `#D19F4E` fill, 44px height.

### Imagery strategy
- Hero: **chiaroscuro still-life of a pile of 24k gold and platinum pieces on deep blue** — museum lighting, zero people. Metal as protagonist.
- Product photography on navy/black; campaign imagery (Nick Foulkes collab) is old-world editorial.
- Phone mockups for the app; no lifestyle-stock anywhere.

### Layout signature
- Center-axis hero statements over full-bleed still-life; carousel dots; announcement bar.
- E-comm grid below with **visible prices ("From $9,224") driven by gram weight** — pricing transparency is part of the aesthetic.
- Heavy modal usage (email/SMS capture popup fires on first scroll — the one cheap move on the site).

### Trust devices
- "Priced by weight" investment framing; gold/platinum purity (24k, pure platinum) repeated as copy and as visual (hallmark-style badges).
- Live gold-price context and "value that grows" language — jewelry as asset class.

### Signature element
24-karat gold photographed on midnight blue — the color pairing *is* the brand.

### Register
Opulent, monetary, theatrical.

### Steal / Avoid
- **Steal:** navy + gold executed with restraint; square buttons as a "bullion bar" cue; price/weight transparency as a design feature, not a footnote.
- **Avoid:** first-visit capture modal; letting theatrical darkness make the operation feel remote (works for selling jewelry, risky for buying someone's heirlooms).

---

## 3. TheAlloyMarket.com — the chipper fintech kid

### Palette
| Hex | Role |
|---|---|
| `#B9E5F5` → light tints | Sky-blue page grounds |
| `#0B2230` | Navy-ink text (dominant, 243 uses) |
| `#F17F51` / `#FF6900` | Coral-orange pill CTAs |
| `#1B98B9` | Teal (offset shadows, accents) |
| `#FFFFFF` | Cards |
| `#3182CE` | Link blue |

### Typography
- **Lexend Deca** (rounded geometric sans) for everything; 800-weight display; title case headlines with two-tone color ("Sell Gold Jewelry Online **For Cash**").
- Pill buttons (1000px radius) with **hard offset teal drop-shadows** — sticker/neo-brutalist-lite. Thumbs-up icons inside CTAs. Cards 3–10px radius.

### Imagery strategy
- **Illustration-forward:** doodle line-art (cash stacks, interlocked rings), squiggle burst marks, wavy pattern fills.
- Collage heroes: real product photo (gold chain) inside a **mock "SOLD $2,111 — Miranda's Luxury Bracelet — Houston, TX" card**, circular cutout photos of smiling customers holding phones, arrows connecting them.
- Phone mockups showing the actual kit-request form.

### Layout signature
- Startup classic: left headline + checkmark benefit list (6 checks), right collage.
- "Easy as 1, 2, 3!" **vertical numbered timeline with a connecting coral line** — each step a white card with icon, copy, CTA, and phone mock.
- Grayscale trust-logo strip (BBB, FedEx, Lloyd's, PayPal) under the hero.

### Trust devices
- **Sold-item receipts as social proof** (named item, price, city) — the single smartest trust move in the set.
- Specific numbers: "$25K of insurance," "Double Pay Exclusive Benefits," BBB accreditation.
- "Dedicated Alloy Advisor... real human support from beginning to end."

### Signature element
The SOLD price-tag card collage — turning transactions into testimonials.

### Register
Chipper, approachable, millennial-fintech.

### Steal / Avoid
- **Steal:** sold-receipt social proof pattern; insurance-amount specificity; named human advisor concept.
- **Avoid:** the entire cartoon register — rounded fonts, sticker shadows, thumbs-up icons cap the perceived ticket size at ~$2k. Nobody ships a $40k estate to a mascot.

---

## 4. Vaulted.com — the monumental bullion app

### Palette
| Hex | Role |
|---|---|
| `#DFB975` | Camel-gold hero panel + brand gold |
| `#0E0E0E` / `#000000` | Black panel, buttons, nav |
| `#C9A961` | Secondary gold accent |
| `#FEFEFE` / `#F5F5F5` | White / light-grey sections |
| `#112337` | Deep navy moments |
| `#E0E0E0` | Borders |

### Typography
- **Display: Fixture Condensed Medium** — tall, poster-grade condensed sans, set enormous (~90px+): "The asset that built empires, now builds yours."
- **Body: Inter** (with Noto Sans secondary). Sentence case, punchy short lines.
- Square-ish buttons (~2–5px radius), black fill on gold ground.

### Imagery strategy
- **Surreal conceptual photography: a gilded pharaoh hand (gold-painted skin, Egyptian cuff) balancing an iPhone** running the app. One image carries the whole brand.
- App UI screenshots with real-looking balances ($200,647.47, Royal Canadian Mint product cards); demo video with human hands holding the phone.
- No jewelry, no lifestyle stock — myth + machine.

### Layout signature
- **Hard split-panel hero:** camel-gold left (type + CTA + store badges), black right (image). Poster composition.
- Long-scroll sections alternate gold/black/white; copywriting does heavy lifting ("Getting gold used to take an army. Now it's at your fingertips." / "Pharaohs stacked it. You can too.").

### Trust devices
- Named counterparties: Royal Canadian Mint; McAlvany family heritage (50+ years) deeper in.
- Real app numbers and store badges; FAQ front and center in nav ("Why Vaulted? Why Gold? Why Silver?").

### Signature element
The golden pharaoh hand. Unforgettable, ownable, meme-able.

### Register
Monumental, witty, confident.

### Steal / Avoid
- **Steal:** the courage of ONE surreal signature image; condensed display type for poster-scale claims; history-as-wit copy voice; split-panel hero.
- **Avoid:** novelty tipping into gimmick — for a company receiving grandma's wedding set, pharaoh cosplay would read tone-deaf. Steal the confidence, not the costume.

---

## 5. GlintPay.com — the nocturnal gold-money ideology

### Palette (from their own custom-property system)
| Hex | Role |
|---|---|
| `#0A0E1F` (`--c-ink`) | Page background — near-black navy |
| `#141B3D` (`--c-mirage`) / `#1F295C` | Panels, cards |
| `#E8E9BE` (`--c-gold`) | Pale champagne text/headings on dark |
| `#D1B375` (`--c-camel`) | Warm gold accents |
| `#3D5CF5` (`--c-blue`) | CTA pills ("Get the App") |
| `#EB4763` (`--c-cherry`), `#47EB7E` (`--c-malachite`) | Data up/down accents |

### Typography
- **Inter only**, but with a disciplined fluid clamp() scale: body 1–1.25rem, display 2.5–6rem, and a "super" tier 4–10rem. Type does all the branding.
- Sentence case; kicker lines in champagne ("Gold as Money") over white headlines. Pill buttons (~24px radius). `letter-spacing: -0.02em` on display.

### Imagery strategy
- Macro **bullion renders (FINE GOLD 999.9 / FINE SILVER kilobars)** overlapping app-UI screenshots; brand card render with gold G monogram.
- **Fine concentric guilloche line-work in the background** — banknote/security-engraving reference, very quiet.
- No people at all. Abstract + product.

### Layout signature
- Centered hero stack: kicker → 2-line headline → app composite. Dark end-to-end.
- **Manifesto section: paragraph-length ideology with scroll-reveal color** ("Glint believes in financial fairness for all... liberate everyone from our current monetary system"), champagne text warming as you scroll.

### Trust devices
- Mastercard partnership named in body copy; "allocated gold" custody language; Swiss vault story on interior pages.
- The guilloche pattern itself is a subliminal trust device — currency craft.

### Signature element
Security-engraving linework on ink-black — the site feels like the inside of a banknote.

### Register
Ideological, nocturnal, fintech-slick.

### Steal / Avoid
- **Steal:** guilloche/engraved-line motifs (currency-grade craft cues); champagne-on-ink text color instead of pure white; kicker-line typographic hierarchy; disciplined fluid type scale.
- **Avoid:** the disconnected blue CTA (their gold story, then a periwinkle SaaS button); unrelieved darkness reads cold and crypto-adjacent — wrong for sellers parting with sentimental items.

---

## 6. BrilliantEarth.com — ethical retail polish

### Palette
| Hex | Role |
|---|---|
| `#FFFFFF` | Base |
| `#599D8E` + tints | Signature seafoam/sage — photo backdrops, brand moments |
| `#183E40` | Deep forest — promo bars, dark UI |
| `#2C2C2C` | Text near-black |
| `#D9D9D9` / `#EDEDED` | Borders, tiles |
| `#C21419` | Sale red (sparingly) |

### Typography
- **Logo/nav:** widely letterspaced light caps "BRILLIANT EARTH". **Display:** a refined old-style serif for section heads ("Shop Jewelry by Category", "The Solstice"). **Body/UI: Avenir** (Book/Heavy).
- All-caps letterspaced nav; sentence-case serif merchandising heads; mostly squared buttons with occasional 17px pills.

### Imagery strategy
- **Product macro on colored seamless studio backgrounds** (sage, mint, celadon) — jewelry floats in branded color fields.
- **Hands-only crops:** rings on real, diverse hands (varied skin tones, painted nails) — intimacy without faces.
- Warm natural-light model photography for campaigns; color grading fresh, spring-like — the opposite of gold-market darkness.

### Layout signature
- Full retail stack: promo countdown bar → phone + showroom locator → mega-nav → split hero carousel → category tile rows → editorial rows. Dense but gridded.
- Category tiles are product-on-color, labeled in serif beneath — merchandising as editorial.

### Trust devices
- Mission is the brand (ethically sourced, recycled metals) — trust via values, expressed in the green itself.
- **Local phone number + city in the header** (214.432.7099 · Dallas) — physical showrooms collapse the distance problem.
- Craftsmanship copy ("Artistry and craftsmanship in every detail").

### Signature element
Sage-green seamless backdrops — they own a color in a market that defaults to navy/black/gold.

### Register
Fresh, ethical, retail-polished.

### Steal / Avoid
- **Steal:** owning a non-obvious brand color in a gold-cliché market; hands-only photography; local/physical presence signals in the chrome.
- **Avoid:** promo-bar + giveaway-popup + countdown clutter — every interruption taxes the premium feel.

---

## 7. 1stDibs.com — the connoisseur's gallery

### Palette
| Hex | Role |
|---|---|
| `#FFFFFF` | Gallery-white base |
| `#000000` / `#222` | Text, buttons |
| `#F4F4F4` | Object-tile backgrounds |
| `#C2A661` | Gold — used only as fine accent (badges, highlights) |
| `#436B93` | Link blue |
| `#2A7140` | Positive green |

### Typography
- **Display: Cardinal Classic Short** (warm, bookish serif with sharp details) — "See What's New," "Now Trending," italic for editorial flourishes.
- **Utility: proxima-nova** for nav/UI. Letterspaced small caps for nav categories.
- Border-radius 0 nearly everywhere; the search bar is the one pill.

### Imagery strategy
- **Objects silhouetted on pale grey tiles** — uniform, museum-catalog treatment across wildly different items.
- Editorial photography (interiors, gardens, hands wearing statement rings) for "Now Trending" collections — magazine art direction.
- B/W craftsmanship imagery in ad slots. No smiling-customer stock, ever.

### Layout signature
- Whitespace + thin hairlines; horizontal carousels of object tiles; serif section heads centered.
- Density comes from *content* (hundreds of objects), never from chrome. The chrome disappears; the collection is the interface.

### Trust devices
- **Curation as trust:** vetted dealers, "World of 1stDibs" editorial, provenance language ("Stories of artistry, provenance and passion").
- Wishlist hearts, price-on-request culture — signals of an art market, not a discount market.

### Signature element
Cardinal serif on gallery white — austerity as luxury.

### Register
Curated, editorial, old-money.

### Steal / Avoid
- **Steal:** restraint math (white space + serif + object-on-neutral = expensive); provenance vocabulary; gold as accent ink `#C2A661` rather than paint.
- **Avoid:** pure austerity is too passive for a conversion business — Offramp needs warmth and a clear next action layered onto this discipline.

---

## 8. CashForGoldUSA.com — the cautionary tale (that upgraded its wardrobe)

### Palette
| Hex | Role |
|---|---|
| `#FDF6F1` / `#FBF2E8` / `#DFD8CD` | Cream/beige grounds |
| `#0B3B46` | Deep teal — headings, CTA |
| `#B7791F` / `#AF8129` | Gold icons/accents |
| `#3898EC` | Leftover Webflow default blue |
| `#FF3B30` | Required-field red |

### Typography
- **Playfair Display** (high-contrast Didone) for headlines + **Lato** body — the "default fancy" template pairing.
- Mixed radii (4, 5, 8, 12px) — no system. Square dark-teal CTA with drop shadow.

### Imagery strategy
- **Generic stock:** blonde model touching her earring; woman-in-beige-blazer at laptop; office-headshot smiling employee. Nobody you believe works there.
- Arch-shaped image masks and thin gold squiggle lines as decoration; YouTube video embed.

### Layout signature
- **The lead form IS the hero** — First name / Last name / Email / Phone plus shipping-method radios before the site has said anything about who they are.
- Trust-card stack (Insured Shipments / Free Overnight Shipping / ★★★★★ 3000+ 5-star reviews) beside the stock photo; numbered 01/02 process with alternating arches; "Your Trusted Partner" grayscale logo wall (Jewelers Mutual, Inc. 500, BBB A+, Shopper Approved, Trustpilot).

### Trust devices (and why they underperform)
- Badge saturation without specificity: "3000+ 5-star reviews" is unlinked and unsourced; five logos in a row answer no particular fear.
- Every trust element is generic and appended; nothing is *demonstrated*.

### Signature element
The hero lead-capture form — transaction demanded before trust is earned. Pawnshop energy in a nicer suit.

### Register
Template-premium, anonymous, transactional.

### Steal / Avoid
- **Nothing to steal** except the warning embedded in their redesign: even the bottom-feeder now wears cream, serif, and teal. **Surface-level "premium" (Playfair + beige + badges) is table stakes and instantly recognizable as template.** Offramp must win on demonstrated specificity, real process, and real people — the things a template can't fake.
- **Avoid:** PII-first heroes; stock humans; unlinked review claims; decoration (arches, squiggles) doing the work photography should do.

---
---

# Synthesis

## The white space in this market

**Every register is taken except one: quiet financial authority with documentary honesty.**
The market splits into dark-opulent fintech (Menē, Glint, Vaulted), light-generic lead-gen (CashForGoldUSA, Alloy's cartoon variant), and premium-editorial resale (Worthy, with 1stDibs and Brilliant Earth adjacent in retail). Nobody occupies the **"private bank meets assay laboratory"** position: warm, daylight, precise, and *real* — the register of an institution that would exist even if the internet didn't. Worthy comes closest but softens into empathy-marketing; nobody projects *competence you could audit*.

**Palette white space.** The market's axes are navy+gold, black+gold, and cream+teal. Unowned: **warm paper/bone grounds + graphite + oxblood or bronze**, with gold appearing almost exclusively **as photographed material, not as UI paint** — the 1stDibs trick (`#C2A661` as accent ink only) taken further. Also unowned: Glint's champagne-text-on-ink executed in a *light* theme — champagne/bronze typography on warm ivory. Everyone who reaches for a gold hex ends up looking like a template; the premium move is restraint.

**Typography white space.** The field is serif-display+grotesque (Worthy, 1stDibs, CFG) or mono-family sans (Menē, Glint, Alloy). Nobody pairs a serious modern serif with a **monospace/tabular face for numbers** — spot prices, weights, assay results, offer amounts set in mono like a ledger. In a business that is ultimately about *numbers you can trust*, data-as-craft typography is a completely open lane. Same for engraved/guilloche craft detail (Glint gestures at it in the dark; no one owns it in daylight).

**Imagery white space.** The entire market photographs either still-life gold, stock humans, or app UI. **Nobody shows the actual operation**: the real facility, the real assayer's hands, the XRF readout, the scale, the sealed and numbered package moving through chain of custody, the real check. Documentary process photography — shot like a Monocle feature on a Swiss refinery — would be instantly differentiating and is the single most credible answer to the seller's core fear ("what happens to my jewelry after I mail it into the void?"). Menē proves metal-as-protagonist works; no one has made *process*-as-protagonist.

## The 3 biggest trust-design lessons

1. **Specificity beats badges.** The strongest trust devices found were Worthy's live, unfiltered Trustpilot feed (a visible 4-star "Low ball price" review makes the 5-stars believable) and Alloy's sold receipts ("$2,111 — Miranda's Luxury Bracelet — Houston, TX"). The weakest was CashForGoldUSA's five-logo wall and unlinked "3000+ 5-star reviews." Rule: every trust claim should carry a number, a name, a date, or a link — and each logo should answer one specific fear (Lloyd's = "insured," GIA = "graded fairly," FedEx = "tracked"). One imperfection displayed honestly outperforms ten superlatives.

2. **Show the machine — design the black box away.** Mail-in gold's conversion killer is the gap between "I shipped it" and "I got paid." The sites that visualize the pipeline (Worthy's serif-numeral 5-step ritual, Alloy's connected timeline) feel safe; the ones that jump from form to promise (CFG's hero form) feel like pawn shops. Offramp should make chain of custody a designed artifact — numbered, photographed, trackable steps, ideally with the real facility and real staff — and treat the *offer math* (weight × purity × spot) as a visible, beautiful calculation rather than a mystery number.

3. **Typography is the fastest trust signal — it sets the ticket size.** Before a single word is read, Argesta-on-greige (Worthy) and Cardinal-on-white (1stDibs) say "estate service," while rounded Lexend with sticker shadows (Alloy) says "$200 gadget," and Playfair+Lato+badges (CFG) says "template." People will mail a $50,000 ring to something that looks like a trust department, not to something that looks like an app. For Offramp: a serious serif used at confident scale, restrained warm grounds, gold as photographed material rather than UI color, mono for the numbers — and every popup, countdown, and thumbs-up icon deleted before launch.
