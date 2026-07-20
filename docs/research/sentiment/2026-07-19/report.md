# Sentiment report — 2026-07-19 (run 2, catch-up for the missed 07-15 slot)

**Method.** Reddit public JSON via Playwright (JS-challenge session + same-origin fetch): 12 searches across r/Gold, r/jewelry, r/povertyfinance + sitewide (~220 results scanned; rotated queries per playbook — "coin shop" offer, "sold my gold", "sell wedding ring", "dental gold" sell, "best place to sell gold", "cash for gold" fresh-month, brand names, "should I sell"), then full comment pulls on 14 high-signal threads (top ~7 comments each ≈ 100 posts/comments reviewed). BBB complaint pages read verbatim for 4 buyers: CJ Environmental/CashforGoldUSA (39/3yr, unchanged count but 2 new-to-us complaints), Alloy Market (7/3yr), Express Gold Cash (1/3yr, unchanged), **Worthy.com (NEW profile: 92 complaints/3yr, 22 closed last 12 mo)**. WebSearch for price-moment context + the new entrant Unvault. First-party: Supabase `question_log` — **still 130 questions / 77 content_gap rows, zero organic rows added since the 07-11 seed session** (see §4). All quotes verbatim and linked; nothing paraphrased-as-quote.

**The context flip that frames this whole run:** our own spot cron logged **gold at $4,005.51/oz on 2026-07-19** (spot_prices id 12). Fortune's daily tracker had $4,074 on July 14 ([fortune.com](https://fortune.com/article/current-price-of-gold-07-14-2026/)) against an all-time high of **$5,608.35 set in January 2026** ([pricegold.net July 2026](https://pricegold.net/2026/july/)). Gold is ~28% off its peak. The 07-11 report's "selling at all-time highs" register is stale; the seller's question has flipped from "should I sell at the top?" to **"did I miss it?"**

---

## Themes, ranked by frequency

### 1. The drawdown flip — "did I miss it?" replaces "sell at the top" (NEW; the run's defining context)
Sellers who watched gold hit $5,600 in January are now deciding whether to sell ~28% below the peak, and the anxiety reads completely differently than in the 07-11 run.

- "Just a few months ago it was in the 500 range. It's way more valuable than a temporary $380" — [u/SpazoIsTheName](https://www.reddit.com/r/Gold/comments/1ut2gvo/comment/owsi1zx/) on a 1/10-oz Eagle whose melt was $412 on 2026-07-10 ([thread, 139↑](https://www.reddit.com/r/Gold/comments/1ut2gvo/))
- "Now that gold prices will go down, should I sell the gold I currently own, pickup the capital and buy more gold at lesser price when the price goes down?" — [r/Gold, 2026-05-11](https://www.reddit.com/r/Gold/comments/1t9vb3k/)
- "Coin shops that bought Gold and Silver at inflated prices, what happened?" — [r/Gold, 149↑, 114 comments, 2026-02-06](https://www.reddit.com/r/Gold/comments/1qxb3ap/)
- "I need to pay for something in cash in the next 14 days, should I sell in the upcoming 2-3 days or should I wait for another week or so?" — [r/Gold, 2026-03-20](https://www.reddit.com/r/Gold/comments/1rzawsw/) — need-driven sellers now also carry timing dread.
- The winner's story that haunts them: "I sold my gold collection today with 112% yield in just 2.1 years. This makes part of my deposit on [a house]" — [r/Gold, 2,480↑, 2026-03-17](https://www.reddit.com/r/Gold/comments/1rw2166/) — sold in March, above today's price.
- Distress selling continues regardless of price: "With how uncertain everything is I don't want to completely cash out on gold but currently only have a 1 oz Kruggerand and desperately need the money for bills after losing my job." — [r/Gold, 2026-03-09](https://www.reddit.com/r/Gold/comments/1rp35c2/)

**For us:** the honest timing answer ("the best time is when you need the money; here's the math at today's price vs the peak, and here's why the offer spread matters more than the spot wiggle") is now MORE differentiated, because everyone else is still running "gold at record highs!!" ad copy while spot is $4,000. The 07-11 brief #6 (ATH essay) must be reframed before it's built — see briefs.md #3.

### 2. The percent-of-melt lottery — no shared yardstick (sharpened from 07-11's "lowball shock")
The offer range consumers report is absurdly wide — 25% to 99% of melt — and nobody hands them the yardstick. This run's evidence adds something new: a buyer openly admitting underkarating.

- A 9.6g 14K ring, melt $928, offered $591 (63.7%): "Places will offer 60-85% of melt. Keep looking for better." — [u/epilepsyisdumb](https://www.reddit.com/r/Gold/comments/1rdtjyn/comment/o77p9h8/); same thread: "My local scrap gold buyer aims for 25% below melt." — [u/Baka_Otaku173](https://www.reddit.com/r/Gold/comments/1rdtjyn/comment/o77s7yv/)
- A self-identified shop owner in that thread: "I will pay up to 90% post melt weight at my shop… **Your 14k is most likely 56-57% not 585** some is even worse." — [u/NorthStarGold](https://www.reddit.com/r/Gold/comments/1rdtjyn/comment/o79qmvn/) — a buyer, on the record, saying he assumes your 14k stamp is a lie in his favor. This is the assay-transparency wedge stated by the other side.
- The literate get 98%: "I get 94-96% on my fine Silver and 98-99% on all my gold at my lcs of choice. I usually just call all of them in my area and ask them what they are paying back of spot." — [u/Fit-Snow2034](https://www.reddit.com/r/Gold/comments/1ur0h0t/comment/owcddb2/)
- The average seller gets 70-80%: "Realistically you'll be lucky to get 80% as 70% is the going average. It's only the places that buy huge volumes every day that will give you 90% or more" — [u/SirLoinofHamalot](https://www.reddit.com/r/Gold/comments/1uuxbez/comment/ox723oa/)
- Local knowledge is tribal, not published: "Stay away from sols they will only give you 50% of scrap value… Best place to go is DSS coin and bullion. They 70 to 80% by gold weight" — [u/immee1, r/Omaha](https://www.reddit.com/r/Omaha/comments/1ryimgl/comment/obf7c5w/)
- Even mid-negotiation, offers move DOWN as pressure: seller countered $390 on a $380 offer and "the owner just straight up said $370… I felt like they were lowballing and trying to pressure me" — [r/Gold, 2026-07-10](https://www.reddit.com/r/Gold/comments/1ut2gvo/)

**For us:** "what percentage of melt should I get?" is the single most answerable question in the category and nobody answers it with a published number. Our rate + the percent-of-melt table (pawn 50-70%, LCS 70-90%, volume buyers 90%+, us: printed on the page) is a page that writes itself. See briefs.md #2.

### 3. The divorce-ring cluster — city subs are full of women selling wedding rings (NEW theme)
Six separate city-sub threads in the window, all the same shape: recently divorced (or DV-escaped) woman, rings she never wants to see again, no idea where to go, braced to be cheated.

- "i'm looking for any pointers on where to go to sell my old wedding rings (ex husband and I). i'm fully aware I will not get anywhere near what he paid" — [r/ColoradoSprings, 45↑](https://www.reddit.com/r/ColoradoSprings/comments/1t6lnsh/); top advice: "Don't sell it to a pawn shop unless you want to eat 95% of the value." — [u/Itsoktobe](https://www.reddit.com/r/ColoradoSprings/comments/1t6lnsh/comment/okig31j/)
- The Worthy warning inside that thread is devastating: "**Don't use Worthy. I was emotional when I shipped mine off to them and didn't want to deal with the shitty quote they gave me and see the rings again, so I just took the offer.** But, just don't. Not good." — [u/Forward_Slash_HardNo](https://www.reddit.com/r/ColoradoSprings/comments/1t6lnsh/comment/okivgk4/) — emotional distance from the item becomes leverage AGAINST the seller once it's in someone else's building.
- In our own metro: a DV survivor selling her rings on the anniversary of her wedding — [r/askaustin, 2026-05-12](https://www.reddit.com/r/askaustin/comments/1tbi1hi/); reply: "turning those guilt rings into divorce money is pretty poetic honestly" — [u/SufficientFlight2736](https://www.reddit.com/r/askaustin/comments/1tbi1hi/comment/olgyag0/)
- The buyback trap: "She went to Kay and Riddle's, but **they only buy back rings purchased from their own stores.**" — [r/Omaha](https://www.reddit.com/r/Omaha/comments/1ryimgl/)
- Also: [r/raleigh "Hello! I am getting divorced! YAY!"](https://www.reddit.com/r/raleigh/comments/1s9783s/) · [r/Divorce on Worthy/eBay/Etsy](https://www.reddit.com/r/Divorce/comments/1sg9ubq/) · [r/Divorce_Women](https://www.reddit.com/r/Divorce_Women/comments/1mlvkb9/) · [r/Detroit ring set](https://www.reddit.com/r/Detroit/comments/1remwic/)

**For us:** this seller wants speed, dignity, and zero sentimentality-guilt (the opposite of the inherited-jewelry seller, who wants permission). The backlog wedding-band worth page should be built for HER. Note the stones problem: "you'll get nothing for the stones" ([r/ColoradoSprings comment](https://www.reddit.com/r/ColoradoSprings/comments/1t6lnsh/comment/okig1pi/)) — honest diamond expectations are part of the trust play. See briefs.md #1.

### 4. Mail-in distrust, round 2 — and Worthy's BBB record is the surprise (continuing, escalating)
New BBB pulls this run:

- **Worthy.com: 92 complaints / 3 years, 22 closed in the last 12 months** — [BBB profile](https://www.bbb.org/us/ny/new-york/profile/online-auctions/worthycom-0121-149680/complaints) — more than double CashforGoldUSA's 39, and Worthy is the buyer polite society recommends to divorcees.
  - 06/16/2026 complaint: "Despite my explicit instructions to reject any offers below my $22,000 reserve price, the company ignored my written commands and unilaterally extended the auction, attempting to pressure me into accepting bids as low as $5,000-$6,500." ([complaints page](https://www.bbb.org/us/ny/new-york/profile/online-auctions/worthycom-0121-149680/complaints))
  - 06/15/2026 complaint: return delivery required a weekday signature she could never make, the ring boomeranged back to Worthy, and "Worthy is now trying to make me pay $50 to have my ring retuned to me."
- **CashforGoldUSA/CJ Environmental** (still [39/3yr](https://www.bbb.org/us/ma/canton/profile/precious-metal-dealers/cj-environmental-inc-0021-32441/complaints)), 05/13/2026: seller declined the quote, the returned ring was misdelivered ("the delivery photo… is a picture of a hard brown box and the photo of concrete. This was not my front porch"), she'd bought $9,000 of package protection, the carrier denied the claim, and after months CJ settled at $1,500. 12/05/2025: lost inbound silver shipment, then "I received an E-mail that the claim has been approved for **$0**."
- **Alloy Market** ([7/3yr](https://www.bbb.org/us/pa/newtown/profile/precious-metal-dealers/alloy-market-inc-0241-236075033/complaints)), new 05/28/2026: "I received the item back and the watch was shattered and in pieces… I contacted alloy and was advised that they could not submit a claim to their insurance company, and that **I damaged the watch myself.**" (later resolved). The 04/2026 "I'm feeling robbed" missing-items complaint now includes: "I now can access the video which has been edited at 45 seconds."
- **Express Gold Cash** unchanged ([1/3yr](https://www.bbb.org/us/ny/salamanca/profile/precious-metal-dealers/express-gold-cash-inc-0041-33000215/complaints), the altered-footage rhodium complaint, marked resolved 02/26/2026).

**For us:** the pattern hardened — the industry's own proof artifacts (unboxing videos, insurance, delivery confirmations) fail exactly when the seller needs them. "An assay you can watch" + the Ledger is the structural answer. Worthy's 92 also feeds goldbuyer's quarterly re-score (Worthy currently ranks #2 at 67.8) and its /reviews/worthy page.

### 5. "So I don't get ripped off / not swindled" — the pre-visit information gap (continuing)
Fresh July instances of the 07-11 core theme; the phrasing is remarkably stable:

- "Realistically if I took my gold/silver to a coin shop how much would they offer? **I don't want to get ripped off since I don't know much about them.**" — [r/Gold, 2026-07-08, 83↑](https://www.reddit.com/r/Gold/comments/1ur0h0t/)
- "My mom recently passed… What do I do with it to sell and get a good return, **not swindled.** Separated into 14k with no stones (161.95 g)…" — [r/Gold, 2026-07-13](https://www.reddit.com/r/Gold/comments/1uuxbez/) — note she already did the sorting-and-weighing homework; what's missing is the yardstick.
- The advice that always follows: "Call and ask what they offer… Your LCS will tell you something along the lines of '95% of spot' or 'spot minus x'" — [u/MysticSunshine45](https://www.reddit.com/r/Gold/comments/1ur0h0t/comment/owc5hne/)
- Locals share calculators as trust artifacts: "[AJPM] is a great reference & has a great scrap calculator to figure out melt value. This is who most jewelers/pawn shops sell to." — [u/eltacotacotaco, r/askportland](https://www.reddit.com/r/askportland/comments/1pni5tq/comment/nu7xb8p/) — a dealer's calculator page is the most-recommended link in a "where to sell in Portland" thread. Our calculator + published rate is built for exactly this slot.
- "Best place to sell gold [city]" threads keep spawning: [Oakland](https://www.reddit.com/r/oakland/comments/1uivzck/) · [Knoxville](https://www.reddit.com/r/Knoxville/comments/1u29s52/) · [Durham](https://www.reddit.com/r/bullcity/comments/1u6hx5b/) · [Columbus GA](https://www.reddit.com/r/ColumbusGA/comments/1tnqs83/) · [New Orleans](https://www.reddit.com/r/AskNOLA/comments/1u3gzvn/) · [NYC "I need to pay rent"](https://www.reddit.com/r/NYCbitcheswithtaste/comments/1sxo1xu/) — continuing validation for goldbuyer /metros.

### 6. The refiner-backlog excuse — now openly contested (continuing from 07-11's "offers get worse at highs")
The excuse survives the price drop, and Reddit has started calling it what it is:

- "I have heard the refineries are all backed up and not accepting anymore gold, I don't know if that was a lie in a attempt to cover up why they offered 10% under spot" — [r/Gold, 2026-03-27](https://www.reddit.com/r/Gold/comments/1s5b83f/); top reply: "What kind of gold refinery turns away gold?" — [u/MrWrock](https://www.reddit.com/r/Gold/comments/1s5b83f/comment/oct8gxm/)
- "This is true for silver… So **they are fudging this argument for gold to rip you off.**" — [u/vbt_res](https://www.reddit.com/r/Gold/comments/1s5b83f/comment/octil8f/)
- The real numbers, from someone who refines: "Refineries never stopped accepting gold. Their processing times have increased. Mine takes about 2 weeks on generic scrap jewelry… Silver is 8-10 weeks" — [u/StrengthDazzling8922](https://www.reddit.com/r/Gold/comments/1s5b83f/comment/octcu0s/)

**For us:** citable, current ammunition for the honesty-table pattern ("what buyers say vs what's true").

### 7. AI enters the category — Unvault, and the GEO spam wave (NEW, strategic signal more than content theme)
- **Unvault** (unvault.co, San Mateo): AI photo → instant valuation → mail-in sale, marketed "built by women, for women," claims 100k+ valuations, 4.8 Trustpilot, 15-20% platform fee, and is already publishing "[How to Sell Inherited Jewelry with Unvault (2026 Guide)](https://www.unvault.co/blog/how-to-sell-inherited-jewelry-with-unvault-2026-guide)" ([site](https://www.unvault.co/) · [Trustpilot](https://www.trustpilot.com/review/unvault.co) · [BBB](https://www.bbb.org/us/ca/san-mateo/profile/jewelry-buyers/unvault-1116-977975)). Organic curiosity exists: "Has anyone tried Unvault to test/sell their jewelry?" — [r/jewelry, 2026-05-29](https://www.reddit.com/r/jewelry/comments/1tqlkyg/). This is the closest competitor yet to the Ask Offramp photo-first Value flow — same photo-in, number-out promise, but mail-in fulfillment and a disclosed 15-20% fee. **For Michael:** validates the Ask bet; differentiators to press = watchable assay + local/on-camera fulfillment + no auction/fee opacity + rate printed. Unvault should also be added to goldbuyer's buyer coverage.
- SEO/AI-search astroturf is visibly colonizing the "sell gold" SERP-adjacent space on Reddit itself: single-purpose subs like [r/buyinggoldlasvegas](https://www.reddit.com/r/buyinggoldlasvegas/comments/1up0q6n/) self-answering "where is the best place to sell gold in Vegas?", and the meta-story "[Spammers are flooding Reddit with fake posts designed to show up in AI search results](https://www.reddit.com/r/technology/comments/1twzntr/)" (17k↑, r/technology, 2026-06). Real, linked, human threads — what this playbook harvests — are exactly what those spammers fake. Our no-fabrication law is also a moat.

### 8. Perennials still running (brief notes)
- **Dental gold** demand keeps surfacing locally: [r/santacruz](https://www.reddit.com/r/santacruz/comments/1tw9fi7/) (answered own question with a local jeweler), [r/indianapolis "found a mail in place but wasn't sure how legit"](https://www.reddit.com/r/indianapolis/comments/1suu1lk/), [r/Gold who-removes-the-tooth](https://www.reddit.com/r/Gold/comments/1qsisrt/), and the 157↑ [bag-of-dental-scrap thread](https://www.reddit.com/r/Gold/comments/1q4sejp/) ("I sold two crowns recently and got $120 for 3 grams. Don't make my mistake and sell to the first shop." — [u/Fun_Organization_654](https://www.reddit.com/r/Gold/comments/1q4sejp/comment/nxusuqz/)). Backlog dental pages stay validated; no new angle needed.
- **Windfall/inheritance "should I sell or keep"**: [180g of 14k found in a just-bought house](https://www.reddit.com/r/Gold/comments/1u7utgf/) ("The melt value is worth ~$14k. Do you need $14k?" — [u/BluPhi82](https://www.reddit.com/r/Gold/comments/1u7utgf/comment/os39tkr/)) · [inherited bullion "should I sell now or keep"](https://www.reddit.com/r/Gold/comments/1tzvb6l/) · [Canadian grandkids with Costco bars "trying to avoid the cash for gold stores, which I'm assuming don't give fair market value"](https://www.reddit.com/r/CanadianInvestor/comments/1umcxhg/).
- **Fair-offer literacy counterweight** (don't strawman the trade): "You're really squabbling over a 3% difference? I'd pay 3% for the convenience of walking out with cash the same day" — [u/Basic_Butterscotch](https://www.reddit.com/r/Gold/comments/1n9lehh/comment/ncnr41l/) on a 96%-of-melt coin offer. Speed + certainty remain the product; our copy should keep honoring that.

---

## Language patterns (their words, not ours — additions to the 07-11 table)

| Consumers say | Industry says (avoid) |
|---|---|
| "back of spot" / "percentage of melt" / "spot minus x" (Reddit-literate) | discount to market |
| "not swindled" / "so I don't get ripped off" | fair market offer |
| "call around" / "check around for the best price" / "don't sell to the first shop" | obtain multiple quotes |
| "eat 95% of the value" | depreciation on resale |
| "they only buy back their own" | brand buyback program |
| "guilt rings" / "my old wedding rings (ex husband and I)" | pre-owned bridal |
| "get a good return" (inheritors) | maximize proceeds |
| "did I miss it" / "too late to sell" / "temporary $380" (drawdown talk) | market timing |
| "is it legit" (mail-in) | accredited buyer |

Headline-ready constructions observed this run: "don't sell to the first shop" · "what they pay back of spot" · "not swindled" · "the number before the counter" · "they said the refineries are backed up".

## question_log gap clusters (first-party)

**Counts unchanged since 07-11: 130 total / 77 gaps; zero organic rows since 2026-07-11 18:18 UTC** (last rows are the seed/priming session — verified via Management API this run). Two implications:
1. The 07-11 gap clusters (material-worth, unit-price, niche-item, tax, process) remain the standing first-party backlog — nothing to re-cluster this run; the pound-of-gold and gold-filled briefs from 07-11 are still unbuilt and still gap-backed.
2. **The flywheel is traffic-starved.** The Ask surface works but nobody new is asking. The unblockers are on Michael's list already (GSC indexing requests for /ask + /learn, Resend for the email loop, social handles for distribution). Worth a line in the next chief-of-staff brief: content-gap mining produces nothing new until /ask gets visitors.

## Social signals (for docs/social/queue/)

- **The drawdown stat, from our own ledger:** gold $4,005.51/oz on 07-19 (spot cron) vs the $5,608.35 January peak ([pricegold.net](https://pricegold.net/2026/july/)) — ~28% off the top, while "record high gold!" ads still run. Honest-broker post material.
- **A buyer saying the quiet part:** "Your 14k is most likely 56-57% not 585, some is even worse." — [r/Gold comment by a shop owner](https://www.reddit.com/r/Gold/comments/1rdtjyn/comment/o79qmvn/). Pair with: our assay happens on camera.
- **The negging offer:** seller counters $390 on a $380 offer; shop drops to $370 — [r/Gold, 2026-07-10](https://www.reddit.com/r/Gold/comments/1ut2gvo/). "The counter that goes DOWN" is instantly recognizable.
- **Worthy by the numbers:** 92 BBB complaints in 3 years ([BBB](https://www.bbb.org/us/ny/new-york/profile/online-auctions/worthycom-0121-149680/complaints)) at the buyer most often recommended to divorcing women. Handle with care (name the record, not the intent).
- **The emotional-leverage quote:** "I was emotional when I shipped mine off to them and didn't want to deal with the shitty quote and see the rings again, so I just took the offer." — [r/ColoradoSprings](https://www.reddit.com/r/ColoradoSprings/comments/1t6lnsh/comment/okivgk4/). The moment distance becomes leverage against the seller.
- **The buyback trap:** Kay & Riddle's "only buy back rings purchased from their own stores" — [r/Omaha](https://www.reddit.com/r/Omaha/comments/1ryimgl/).
- **Claim approved for $0:** a lost-shipment insurance claim "approved for $0" — [CJ Environmental BBB complaint, 12/2025](https://www.bbb.org/us/ma/canton/profile/precious-metal-dealers/cj-environmental-inc-0021-32441/complaints).

## Verification notes
- Reddit access: same as 07-11 — Playwright JS-challenge + same-origin fetch worked first try; raw JSON dumps kept in scratchpad, not the repo (today's .playwright-mcp session artifacts moved out of the repo too).
- Yelp untouched (ToS). X sentiment only via public WebSearch surfacing — nothing notable surfaced this run.
- All Reddit quotes copied verbatim from JSON `title`/`selftext`/`body`; BBB quotes from public complaint pages with their `REMOVED` redaction tokens left as-is; typos in quotes are the authors' own ("retuned", "mor", "verity").
- Gold-price context cross-checked three ways: our spot_prices table (primary), Fortune daily tracker, pricegold.net monthly history. One outlier source (discoveryalert.com.au) claims a $5,000-$5,400 2026 range — discounted as stale/promotional against the two daily trackers + our cron.
- question_log queried via Management API only (playbook §1d); no service keys used; no key values printed.
