# Sentiment report — 2026-07-11 (run 1)

**Method.** Reddit public JSON via Playwright (JS-challenge session + same-origin fetch): 10 searches across r/personalfinance, r/Gold, r/jewelry, r/Silverbugs, r/povertyfinance, r/AskWomenOver30 + sitewide (~60 results scanned), then full comment pulls on 14 high-signal threads (top ~7 comments each ≈ 90 posts/comments reviewed). BBB complaint pages read verbatim for 3 mail-in buyers: CJ Environmental/CashforGoldUSA (39 complaints/3yr), Alloy Market (7/3yr), Express Gold Cash (1/3yr). WebSearch for review-site synthesis (Trustpilot/ConsumerAffairs aggregates). First-party: Supabase `question_log` — **130 questions logged, 77 content_gap rows**. All quotes below are verbatim and linked; nothing is paraphrased-as-quote.

---

## Themes, ranked by frequency

### 1. Lowball-offer shock (dominant theme — present in ~every selling thread)
The moment of hearing the offer is the emotional core of this market. Sellers arrive with a number in their head (spot × weight) and get offered 25–70% of it.

- "Local cash for gold place offered me 25% of melt lol because 'it's overbought'" — [r/Gold post title](https://www.reddit.com/r/Gold/comments/1qx11zc/) (2026-02). Top reply: "Go to Google, type in coin shop near me. Read reviews, then call." — [u/PR0FIT132](https://www.reddit.com/r/Gold/comments/1qx11zc/comment/o3t6an0/)
- "The online offer is decent. $250 is straight robbery" — [u/xagds](https://www.reddit.com/r/Gold/comments/1jibbaj/comment/mje02x3/) on a seller whose local offers ranged wildly ("the range of offers was enough to drive me a bit crazy" — [thread](https://www.reddit.com/r/Gold/comments/1jibbaj/))
- "[RANT] My buddy made a pawn shop very happy today!" — 797-upvote [r/Gold thread](https://www.reddit.com/r/Gold/comments/1rrcsxi/) (2026-03) about a friend selling 47g mixed gold to a pawn shop against advice.
- "the ones that are offer insane lowballs… absolutely nobody wants to buy it for more than 50% off" — [r/Silverbugs, 345 upvotes](https://www.reddit.com/r/Silverbugs/comments/1q5jsaf/) (2026-01)
- "Be careful where you sell it and do your research on the price. Unscrupulous gold dealers will try to lowball you." — [u/backspinnn, 90 upvotes](https://www.reddit.com/r/personalfinance/comments/1du1ox3/comment/lbdpaa0/)
- BBB (CashforGoldUSA): "Their first offer was $220, then raised it to $395. Then $505, then $575, all of which I refused" — [CJ Environmental complaints](https://www.bbb.org/us/ma/canton/profile/precious-metal-dealers/cj-environmental-inc-0021-32441/complaints) (03/2025). The ladder of escalating offers reads to consumers as proof the first offer was predatory.

**For us:** the anxiety isn't abstract distrust — it's the specific fear of not knowing the fair number before walking in. Our published price + camera assay is the direct antidote.

### 2. "How do I know what it's worth before I go" (the pre-offer information gap)
- "LCS offered me $700, Seems low, my rough estimate was around $1500 - 1700. I am not sure what to do either." — [u/dazanion](https://www.reddit.com/r/Gold/comments/1jibbaj/comment/mje267q/)
- "I know pawn shops don't give you what it's worth… Any one have ideas on how to get the best value for my stuff?" — [r/povertyfinance](https://www.reddit.com/r/povertyfinance/comments/1koklbk/) (2025-05)
- "How do I go about finding their real worth and then what avenue do I use to sell them?" — [r/personalfinance](https://www.reddit.com/r/personalfinance/comments/5nuerf/)
- "Any tips to avoid getting lowballed or scammed?" — [r/Gold, 22K jewelry seller](https://www.reddit.com/r/Gold/comments/1shm5xf/) (2026-04)
- CashforGoldUSA's own calculator vs offer gap: a seller's coin was "$1816 according to their calculator" but the offer was $1300 — surfaced via [wealthysinglemommy review roundup](https://www.wealthysinglemommy.com/cash-for-gold-usa-review/).

**For us:** "what it's worth" is the consumer phrase (not "valuation", not "appraisal"). They want the number BEFORE the encounter. This validates the camera-first Ask flow and every worth page on the backlog.

### 3. Distrust of mail-in buyers (chain-of-custody horror stories)
BBB complaint text is brutal and specific — items lost after a declined offer is the recurring nightmare:
- "I declined on there offer now they wont send my ring back! I just want my item back untouched" — [CJ Environmental complaint](https://www.bbb.org/us/ma/canton/profile/precious-metal-dealers/cj-environmental-inc-0021-32441/complaints) (05/2025)
- "at least 5 gold items were (ARE) unaccounted for! No payment, no return… for now...I'm feeling robbed." — [Alloy Market complaint](https://www.bbb.org/us/pa/newtown/profile/precious-metal-dealers/alloy-market-inc-0241-236075033/complaints) (04/2026)
- "Alloy Market admitted that two items were lost… then offered me $15 for both missing pieces." + a $750 goodwill payment conditioned on "no public statements" — [Alloy Market complaint](https://www.bbb.org/us/pa/newtown/profile/precious-metal-dealers/alloy-market-inc-0241-236075033/complaints) (11/2025)
- "the footage was altered at the 0:45 [mark]… deliberately excising the segment where the assay results… would have been displayed" — [Express Gold Cash complaint](https://www.bbb.org/us/ny/salamanca/profile/precious-metal-dealers/express-gold-cash-inc-0041-33000215/complaints) (02/2026). Sellers now forensically review unboxing videos — the industry's own "proof" is distrusted.
- Meta-signal: "Cash for Gold" is a literal South Park punchline; the episode still generates emotional threads ([r/southpark, 767 upvotes, 2025-09](https://www.reddit.com/r/southpark/comments/1nro2mo/)) about mail-in buyers exploiting the elderly.

**For us:** every complaint is about opacity after the item leaves the seller's hands. "An assay you can watch" + ledger is the structural answer; the proof asset (assay video #1) should be accelerated.

### 4. Pawn shops: the known-bad default (used anyway, resented always)
- "How do pawn shops actually get away with this?… Not only are they buying 70-80% of spot, but they sell at like 15-20% over" — [r/Gold, 247 upvotes](https://www.reddit.com/r/Gold/comments/1tn7rwd/) (2026-05). Top reply: "They 'get away with it' because people keep buying from them and selling to them." — [u/Taintcomb](https://www.reddit.com/r/Gold/comments/1tn7rwd/comment/onrykyz/)
- "Pawn shops are ass water." — [u/Buttchuggle](https://www.reddit.com/r/Gold/comments/1shm5xf/comment/ofdm01g/)
- "Avoid pawn shops and 'we buy gold' places. They will lowball you." — [u/SecretIdea](https://www.reddit.com/r/Gold/comments/1shm5xf/comment/ofdp2u9/)
- "Pawn shop is quick and sure thing as long as it's real, but low ball." — [u/grenz1, r/povertyfinance](https://www.reddit.com/r/povertyfinance/comments/1koklbk/comment/msr00wi/) — note: povertyfinance users defend pawn as *fast and certain*; speed/certainty is the real product.

**For us:** don't just say "pawn shops pay less" — quantify it (70–80% of spot, verbatim sourced) and beat their speed/certainty story.

### 5. Inherited jewelry: overwhelm, guilt, and family politics
- "Gma died and I'm tasked w/ selling her gold rings… I wanna know how to get the best $" — [r/Gold post title](https://www.reddit.com/r/Gold/comments/rsmhdx/)
- "I was offered roughly $550 for melt value… I know some will say keep it, but my wife demands we get rid of it" — [r/jewelry, 85 upvotes](https://www.reddit.com/r/jewelry/comments/1thu15k/) (2026-05). Reply: "Don't sell please i would give the world for my grandma's jewelry" — [u/Soullessbuthappy20](https://www.reddit.com/r/jewelry/comments/1thu15k/comment/omrtlcp/)
- The absolution people are looking for: "Your grandmother would be happy you were able to both enjoy her bracelet and use it to provide for your family in a time of need." — [u/Low_Obligation_4317, on a 566-upvote r/jewelry thread](https://www.reddit.com/r/jewelry/comments/1tewtqp/comment/om5i7ir/) about selling an inherited tennis bracelet during hard times
- "If I was your dad I'd be mad if you kept my gold while holding almost exactly the same amount of value in debt. Go be debt free as a gift from your dad." — [u/JoshAllentown, r/personalfinance](https://www.reddit.com/r/personalfinance/comments/1sjleht/comment/ofugcdx/) (2026)
- "Grandpa was 99% likely gifting you gold in order to make you richer as an adult, not necessarily gifting you coins for sentimental reasons." — [u/Braign, 342 upvotes](https://www.reddit.com/r/personalfinance/comments/1du1ox3/comment/lbdlkst/)

**For us:** the inherited-jewelry seller needs permission as much as price. Warm, guilt-aware framing (TAM Uber lens: friendliness unlocks the dusty drawer). This is the emotional register for the inherited-jewelry-box worth page.

### 6. Appraiser conflict of interest (who can I even trust for the number?)
- "It's best to go to someone who just does appraisals and doesn't actually sell jewelry. That way they have nothing to gain" — [u/veganbiker](https://www.reddit.com/r/personalfinance/comments/5nuerf/comment/dcef3tj/)
- "Any appraiser that also offers to buy is not an appraiser you want to trust according to antiques roadshow." — [u/oldnumberseven](https://www.reddit.com/r/personalfinance/comments/5nuerf/comment/dcekkgp/)
- "Whatever you do, do not sell to that appraiser as chances are you are siting on more then you think." — [deleted user, same thread](https://www.reddit.com/r/personalfinance/comments/5nuerf/comment/dcef8nr/)

**For us:** the market has internalized that the person quoting you is incentivized to lie. Transparent method + published rate = the trust wedge. (Methodology proof asset.)

### 7. Offer opacity — no breakdown, no math shown
- Express Gold Cash reviewer: "sent in four rings but got one lump sum with no breakdown and no explanation of how they calculated the value—no info on weight, karat, or rate per gram" — via [BBB reviews page](https://www.bbb.org/us/ny/salamanca/profile/precious-metal-dealers/express-gold-cash-inc-0041-33000215/customer-reviews) (WebSearch synthesis)
- Alloy testing disputes: "Alloy tested a watch case and said it had no gold content, but a local jeweler found it to be solid 14k… they 'stood by their assessment'" — via [Trustpilot/BBB synthesis](https://www.trustpilot.com/review/thealloymarket.com)
- The heirloom-vs-melt blindspot: "they are only going to give you the scrap value (weight of gold)… retail value would be about at least $60,000" vs a melt offer in the mid-$20,000s — [r/jewelry heirloom thread](https://www.reddit.com/r/jewelry/comments/iq53r8/comment/g4pfng3/)

**For us:** per-item, per-gram, karat-explicit receipts (Geist Mono tabular-nums energy) are a product feature AND a content angle. Show the math nobody shows.

### 8. Timing anxiety / seller's regret at all-time highs
- "Should I sell gold in March 2021 or wait?" — [r/personalfinance](https://www.reddit.com/r/personalfinance/comments/luarfx/) — evergreen question shape, resurging in 2026 highs
- "with the current price really high right now… the broken gold may be worth more if sold by weight." — [u/zzotus, r/povertyfinance](https://www.reddit.com/r/povertyfinance/comments/1koklbk/comment/msua4e9/)
- Dealer-side glut at highs: "Refiners are up to their eyeballs in silver… local coin shops and pawn shops are being offered back of spot" — [u/idahopostman, 147 upvotes](https://www.reddit.com/r/Silverbugs/comments/1q5jsaf/comment/ny0guo4/) — at price spikes, walk-in offers get WORSE, not better. Counterintuitive, citable.
- "the best time to sell is often when you need funds, not when the market peaks" — [jjgoldjewellery blog via WebSearch](https://jjgoldjewellery.com/blogs/blog/gold-selling-strategy-singapore-avoid-regret)

**For us:** "is now a good time" is already a question_log gap (`good time sell gold`, asked 2x). A thesis page can own the honest answer.

---

## Language patterns (their words, not ours)

| Consumers say | Industry says (avoid) |
|---|---|
| "what it's worth" / "real worth" | valuation, appraisal value |
| "lowball" / "straight robbery" / "ripped off" / "taken advantage of" | competitive offer |
| "melt value" / "scrap value" / "spot" (Reddit-literate) — but normies say "weight times the current value of the metal" | assay result |
| "get the most money" / "best price" / "maximize value" | optimize returns |
| "shop around" / "call around" / "get estimates from several businesses" | comparison shopping |
| "send my ring back" / "my items" / "my belongings" | consignment return |
| "broken gold" / "old gold jewelry" / "stash of mixed gold" | scrap lots |
| "is it real" / "as long as it's real" | authentication |

Headline-ready constructions observed: "so I don't get taken advantage of", "what pawn shops actually pay", "before you walk in", "know what you have".

## question_log gap clusters (77 gap rows / 130 total)

Filtered of noise (pizza/superbowl/sushi tests, RDR2/FarCry game queries, Robinhood Gold), the real gaps cluster as:
1. **Material-worth gaps:** `gold filled jewelry worth anything` · `what 14k gold vermeil` · `white gold worth more than gold` · `platinum worth more than gold` · `14k gold real` · `14k gold good` — the "is my thing even gold" pre-question.
2. **Unit-price gaps:** `how much 1 lb gold worth` / `how much one pound gold worth` / `how much gold worth per pound` (3 variants!) · `what 1g gold worth` · `how much ounce gold worth today` · `how much 14k gold worth today` — "today" variants imply live-price content.
3. **Niche-item gaps:** `who buys dental gold near me` · `how much gold crown worth 2020` · `how much seiko gold watch worth` · `recovering gold from electronics worth` · `selling paparazzi jewelry worth` · `where sell canadian gold coins` · `where sell native american jewelry near me` · `where sell vintage costume jewelry near me`.
4. **Tax gaps:** `how sell gold without paying taxes` · `selling inherited gold taxable` — matches Reddit anxiety ("Gold is not a normal investment. It is considered a 'collectable'… profits are taxes as ordinary income" — [u/OftTopic](https://www.reddit.com/r/personalfinance/comments/1sjleht/comment/oftqf50/)).
5. **Care/behavior gaps** (low priority, corpus one-liners): `14k gold tarnish` · `18k gold tarnish` · `18k gold magnetic` · `wear 18k gold shower` · `how shine gold coin`.
6. **Process gaps:** `better pawn sell jewelry` · `how much pawn shops pay gold` (asked 2x, answered from corpus but flagged gap — corpus answer is thin) · `how sell estate jewelry` · `good time sell gold`.

## Social signals (for docs/social/queue/)

- **The 12,961-upvote origin story:** "Grandparents gifted me & S/O 100g of 99.99% gold… How do I convert this literal bar of gold into a more fungible/secure investment?" — [r/personalfinance, 1,448 comments](https://www.reddit.com/r/personalfinance/comments/6b3ku8/) — the single biggest gold-selling thread on Reddit; "Cash for gold" was dismissed in the OP itself.
- **Stat:** pawn shops buy at "70-80% of spot" and sell "15-20% over spot" — [r/Gold, 247 upvotes](https://www.reddit.com/r/Gold/comments/1tn7rwd/). Pair with our published rate.
- **Stat:** 39 BBB complaints in 3 years for the biggest mail-in buyer (CJ Environmental/CashforGoldUSA) vs its A+ rating — [BBB](https://www.bbb.org/us/ma/canton/profile/precious-metal-dealers/cj-environmental-inc-0021-32441/complaints). "A+ rated" and "39 families chasing their rings" coexist.
- **Moment:** a seller offered **25% of melt** "because it's overbought" — [r/Gold](https://www.reddit.com/r/Gold/comments/1qx11zc/). Quote-tweet material.
- **Warmth moment:** "jewelry can be a way to escape if I ever needed it" — grandma story, [r/jewelry, 76 upvotes](https://www.reddit.com/r/jewelry/comments/1tewtqp/comment/om5wuel/) — the dusty drawer as a family's quiet safety net. On-brand emotional register.
- **Counterintuitive:** at all-time highs, walk-in offers get worse (refiner glut) — [r/Silverbugs](https://www.reddit.com/r/Silverbugs/comments/1q5jsaf/comment/ny0guo4/).

## Verification notes
- Reddit access: curl/WebFetch/Browser-pane all 403; Playwright JS-challenge + same-origin fetch worked (documented in playbook §1a).
- Yelp untouched (ToS); X sentiment only via public WebSearch surfacing — nothing notable surfaced this run.
- All Reddit quotes copied verbatim from JSON `body`/`selftext`/`title` fields; BBB quotes from public complaint pages, business-redacted tokens (`REMOVED`) left as-is.
