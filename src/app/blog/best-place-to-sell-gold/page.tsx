import Link from "next/link";

export default function BestPlaceToSellGoldPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-16 px-6 border-b border-cream-08">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-gold-500 font-mono text-xs tracking-widest uppercase mb-4">
            Selling Guide
          </p>
          <h1 className="font-display text-4xl sm:text-5xl md:text-6xl font-semibold text-cream leading-tight mb-6">
            Best Place to Sell Gold in 2026: 7 Options Compared
          </h1>
          <p className="text-cream-45 font-mono text-xs tracking-wider">
            April 7, 2026 · By Offramp · 9 min read
          </p>
        </div>
      </section>

      {/* AEO Key Takeaway */}
      <section className="py-12 px-6">
        <div className="max-w-3xl mx-auto">
          <div className="border border-gold-500/30 rounded-2xl bg-gold-500/[0.04] p-8">
            <p className="text-gold-500 font-mono text-xs tracking-widest uppercase mb-3">
              Key Takeaway
            </p>
            <p className="text-cream text-lg leading-relaxed">
              Online mail-in gold buyers (85-95% of spot) consistently pay
              significantly more than pawn shops (40-60%) or local cash-for-gold
              stores. The trade-off is 3-5 days of shipping time vs. immediate
              cash. For maximum payout, use a reputable online buyer with XRF
              testing, free insured shipping, and a transparent return policy.
            </p>
          </div>
        </div>
      </section>

      {/* Article Body */}
      <article className="pb-24 px-6">
        <div className="max-w-3xl mx-auto space-y-16">
          {/* Comparison Table */}
          <section>
            <h2 className="font-display text-3xl font-semibold text-cream mb-6">
              The 7 Places You Can Sell Gold (Ranked by Payout)
            </h2>
            <p className="text-cream-45 leading-relaxed mb-6">
              Not all gold buyers pay the same. The single biggest factor in how
              much you walk away with is <em>where</em> you sell, not how much
              you negotiate. Here&apos;s the full comparison:
            </p>
            <div className="overflow-x-auto">
              <table className="w-full text-sm border border-cream-08 rounded-xl overflow-hidden">
                <thead className="bg-bg-card">
                  <tr>
                    <th className="text-left p-3 font-mono text-xs uppercase text-cream-60">
                      Where to Sell
                    </th>
                    <th className="text-left p-3 font-mono text-xs uppercase text-cream-60">
                      Payout (% of Spot)
                    </th>
                    <th className="text-left p-3 font-mono text-xs uppercase text-cream-60">
                      Speed
                    </th>
                    <th className="text-left p-3 font-mono text-xs uppercase text-cream-60">
                      Best For
                    </th>
                  </tr>
                </thead>
                <tbody className="text-cream-60">
                  <tr className="border-t border-cream-08">
                    <td className="p-3 font-medium text-cream">Online mail-in buyers</td>
                    <td className="p-3 text-green-500">85-95%</td>
                    <td className="p-3">3-5 days</td>
                    <td className="p-3">Maximum payout</td>
                  </tr>
                  <tr className="border-t border-cream-08">
                    <td className="p-3 font-medium text-cream">Coin dealers (specialty)</td>
                    <td className="p-3 text-green-500">80-95%</td>
                    <td className="p-3">Same day</td>
                    <td className="p-3">Numismatic coins</td>
                  </tr>
                  <tr className="border-t border-cream-08">
                    <td className="p-3 font-medium text-cream">Local jewelers</td>
                    <td className="p-3 text-yellow-500">70-85%</td>
                    <td className="p-3">Same day</td>
                    <td className="p-3">Trusted relationship</td>
                  </tr>
                  <tr className="border-t border-cream-08">
                    <td className="p-3 font-medium text-cream">eBay / online marketplace</td>
                    <td className="p-3 text-yellow-500">70-90%*</td>
                    <td className="p-3">7-14 days</td>
                    <td className="p-3">Collectible items</td>
                  </tr>
                  <tr className="border-t border-cream-08">
                    <td className="p-3 font-medium text-cream">Gold parties</td>
                    <td className="p-3 text-orange-500">50-70%</td>
                    <td className="p-3">Same day</td>
                    <td className="p-3">Convenience</td>
                  </tr>
                  <tr className="border-t border-cream-08">
                    <td className="p-3 font-medium text-cream">Pawn shops</td>
                    <td className="p-3 text-red-500">40-60%</td>
                    <td className="p-3">Minutes</td>
                    <td className="p-3">Immediate cash</td>
                  </tr>
                  <tr className="border-t border-cream-08">
                    <td className="p-3 font-medium text-cream">&ldquo;Cash for Gold&rdquo; storefronts</td>
                    <td className="p-3 text-red-500">35-55%</td>
                    <td className="p-3">Minutes</td>
                    <td className="p-3">Avoid if possible</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="text-cream-35 text-xs mt-3">
              *eBay payouts shown after 13% in fees. Speed reflects time to receive funds.
            </p>
          </section>

          {/* 1. Online */}
          <section>
            <h2 className="font-display text-3xl font-semibold text-cream mb-4">
              1. Online Mail-In Buyers (Best Payout)
            </h2>
            <p className="text-cream-45 leading-relaxed mb-4">
              Online gold buyers like Offramp consistently pay the highest
              percentage of spot price because they operate without the overhead
              of retail storefronts. They use XRF spectrometers (the same
              technology refineries use) to determine exact gold content, then
              pay 85-95% of melt value based on live spot prices.
            </p>
            <div className="grid sm:grid-cols-2 gap-4">
              <div className="border border-cream-08 rounded-xl p-5 bg-bg-card">
                <h3 className="text-cream font-medium mb-3">Pros</h3>
                <ul className="text-cream-60 text-sm space-y-1.5">
                  <li>• Highest payout (85-95% of spot)</li>
                  <li>• Free insured shipping (~$5,000 coverage)</li>
                  <li>• XRF testing = accurate valuations</li>
                  <li>• Transparent pricing tied to live spot</li>
                  <li>• Free return if you decline offer</li>
                </ul>
              </div>
              <div className="border border-cream-08 rounded-xl p-5 bg-bg-card">
                <h3 className="text-cream font-medium mb-3">Cons</h3>
                <ul className="text-cream-60 text-sm space-y-1.5">
                  <li>• 3-5 day timeline (not instant)</li>
                  <li>• Must trust the shipping process</li>
                  <li>• Need to research reputable buyers</li>
                </ul>
              </div>
            </div>
          </section>

          {/* 2. Coin Dealers */}
          <section>
            <h2 className="font-display text-3xl font-semibold text-cream mb-4">
              2. Specialty Coin Dealers
            </h2>
            <p className="text-cream-45 leading-relaxed mb-4">
              For bullion coins (American Eagles, Canadian Maples, Krugerrands)
              and numismatic items, specialty coin dealers are often your best
              bet. They understand collectible value and can pay above melt for
              rare or graded coins. Find one with a strong online reputation and
              membership in the Professional Numismatists Guild (PNG).
            </p>
            <p className="text-cream-45 leading-relaxed">
              <strong className="text-cream">Watch out for:</strong> Dealers who
              quote &ldquo;melt only&rdquo; on numismatic coins without
              evaluating their collectible premium.
            </p>
          </section>

          {/* 3. Local Jewelers */}
          <section>
            <h2 className="font-display text-3xl font-semibold text-cream mb-4">
              3. Local Jewelers
            </h2>
            <p className="text-cream-45 leading-relaxed">
              Established jewelers (especially those in business 20+ years) often
              offer fair payouts of 70-85% of spot. They can also evaluate
              gemstone, design, and craftsmanship value separately from gold
              content. The trade-off is variability — jeweler payouts depend
              heavily on the individual buyer&apos;s mood, inventory needs, and
              whether they recognize you. Always get 2-3 quotes.
            </p>
          </section>

          {/* 4. eBay */}
          <section>
            <h2 className="font-display text-3xl font-semibold text-cream mb-4">
              4. eBay & Online Marketplaces
            </h2>
            <p className="text-cream-45 leading-relaxed">
              For collectible coins, vintage jewelry, or branded pieces (Tiffany,
              Cartier), eBay can yield top dollar. But fees stack quickly: 13%
              final value fee + payment processing + shipping insurance. For
              plain melt-value gold, you&apos;ll usually net less than an online
              buyer after fees, with much more hassle (photos, listings,
              shipping, returns).
            </p>
          </section>

          {/* 5. Gold Parties */}
          <section>
            <h2 className="font-display text-3xl font-semibold text-cream mb-4">
              5. Gold Parties
            </h2>
            <p className="text-cream-45 leading-relaxed">
              The traveling buyer who hosts a party at someone&apos;s house is
              one of the worst payout structures available. The &ldquo;party
              host&rdquo; gets a kickback (5-10% of all gold sold), and the
              buyer pays well below market because the social pressure makes
              negotiation awkward. Skip these.
            </p>
          </section>

          {/* 6. Pawn Shops */}
          <section>
            <h2 className="font-display text-3xl font-semibold text-cream mb-4">
              6. Pawn Shops
            </h2>
            <p className="text-cream-45 leading-relaxed mb-4">
              Pawn shops average 40-60% of spot price. They&apos;re fast (in and
              out in 15 minutes) but expensive. Their business model relies on
              under-paying because they need to flip inventory quickly to cover
              overhead.
            </p>
            <p className="text-cream-45 leading-relaxed">
              <strong className="text-cream">Only choose a pawn shop if</strong>{" "}
              you need cash within the hour and can&apos;t wait 3-5 days for an
              online buyer. Otherwise you&apos;re leaving 30-40% on the table.
            </p>
          </section>

          {/* 7. Cash for Gold */}
          <section>
            <h2 className="font-display text-3xl font-semibold text-cream mb-4">
              7. &ldquo;We Buy Gold&rdquo; Storefronts
            </h2>
            <p className="text-cream-45 leading-relaxed">
              These are the strip-mall shops with neon signs. They&apos;re
              typically the worst option — payout often falls to 35-55% of spot.
              Many use rigged scales, melt jewelry on the spot to obscure value,
              or grade your 14K as 10K. If you must visit one, get quotes from 3
              shops and never let them melt anything before you accept the
              offer.
            </p>
          </section>

          {/* How to Get the Best Price */}
          <section>
            <h2 className="font-display text-3xl font-semibold text-cream mb-6">
              How to Get the Best Price No Matter Where You Sell
            </h2>
            <ol className="space-y-4 text-cream-60 leading-relaxed list-decimal pl-6">
              <li>
                <strong className="text-cream">Know your gold&apos;s weight in grams.</strong>{" "}
                Use a kitchen scale (.01g accuracy) before you walk in. This
                prevents short-weighting.
              </li>
              <li>
                <strong className="text-cream">Identify the karat.</strong> Look
                for stamps (10K, 14K, 18K, 22K, 24K). If unstamped, ask for an
                acid or XRF test.
              </li>
              <li>
                <strong className="text-cream">Check the live spot price</strong>{" "}
                on the day of your sale (we update it on{" "}
                <Link href="/gold-price" className="text-gold-500 hover:underline">
                  the live gold price page
                </Link>
                ).
              </li>
              <li>
                <strong className="text-cream">Calculate melt value</strong> with
                a calculator like{" "}
                <Link href="/calculators/scrap" className="text-gold-500 hover:underline">
                  Offramp&apos;s scrap calculator
                </Link>{" "}
                so you know what 100% of spot looks like.
              </li>
              <li>
                <strong className="text-cream">Get 2-3 quotes</strong> from
                different buyer types. Even online, request quotes from 2
                services to compare.
              </li>
              <li>
                <strong className="text-cream">Never accept the first offer</strong>{" "}
                at a pawn shop or cash-for-gold store — they expect negotiation.
              </li>
              <li>
                <strong className="text-cream">Walk away if anything feels off.</strong>{" "}
                Buyers who pressure you, refuse to break out their math, or
                won&apos;t return your gold are red flags.
              </li>
            </ol>
          </section>

          {/* Red Flags */}
          <section>
            <h2 className="font-display text-3xl font-semibold text-cream mb-6">
              Red Flags to Avoid
            </h2>
            <div className="space-y-3">
              {[
                "Buyer melts your gold before showing you the offer",
                "Refuses to share their formula (spot × purity × weight × payout %)",
                "No insurance on shipped items, or insurance below your gold's value",
                "No return policy if you decline the offer",
                "BBB rating below A or unresolved complaints",
                "Quotes change after they receive the gold without clear explanation",
                "High-pressure sales tactics or rushed offers",
              ].map((flag, i) => (
                <div
                  key={i}
                  className="flex items-start gap-3 border border-red-500/20 bg-red-500/[0.04] rounded-lg p-4"
                >
                  <span className="text-red-500 font-bold">✕</span>
                  <span className="text-cream-60">{flag}</span>
                </div>
              ))}
            </div>
          </section>

          {/* FAQ */}
          <section>
            <h2 className="font-display text-3xl font-semibold text-cream mb-6">
              Frequently Asked Questions
            </h2>
            <div className="space-y-6">
              {[
                {
                  q: "What is the best place to sell gold for the most money?",
                  a: "Online mail-in gold buyers consistently pay the highest percentage of spot price (85-95%) because they have lower overhead and use XRF testing. Services like Offramp also offer free insured shipping and transparent pricing tied to live spot rates.",
                },
                {
                  q: "Should I sell my gold to a pawn shop?",
                  a: "Pawn shops typically pay only 40-60% of spot. You can usually get 40-60% more from an online buyer. Only use a pawn shop if you need cash within hours.",
                },
                {
                  q: "Is it safe to sell gold online?",
                  a: "Yes, when you choose a reputable buyer with A+ BBB rating, free insured shipping, transparent pricing tied to live spot, and a free-return option if you decline the offer.",
                },
                {
                  q: "How much should I expect to get for my gold?",
                  a: "85-95% of melt value from a top online buyer, 70-85% from a reputable jeweler, and 40-60% from a pawn shop. Numismatic coins may sell for significantly more than melt.",
                },
                {
                  q: "What documents do I need to sell gold?",
                  a: "A valid government-issued ID for transactions under $10,000. Larger sales may require additional IRS reporting (Form 1099-B).",
                },
              ].map((faq, i) => (
                <div key={i} className="border border-cream-08 rounded-xl p-6 bg-bg-card">
                  <h3 className="font-display text-lg font-semibold text-cream mb-2">
                    {faq.q}
                  </h3>
                  <p className="text-cream-60 leading-relaxed">{faq.a}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Related */}
          <section>
            <h2 className="font-display text-2xl font-semibold text-cream mb-4">
              Related Reading
            </h2>
            <div className="grid sm:grid-cols-2 gap-4">
              <Link
                href="/blog/how-to-sell-gold-coins-online"
                className="border border-cream-08 rounded-xl p-5 bg-bg-card hover:border-gold-500/30 hover:bg-gold-500/[0.04] transition-all"
              >
                <p className="text-gold-500 font-mono text-xs uppercase mb-1">Guide</p>
                <p className="text-cream font-medium">How to Sell Gold Coins Online</p>
              </Link>
              <Link
                href="/blog/gold-vs-bitcoin-investment-comparison"
                className="border border-cream-08 rounded-xl p-5 bg-bg-card hover:border-gold-500/30 hover:bg-gold-500/[0.04] transition-all"
              >
                <p className="text-gold-500 font-mono text-xs uppercase mb-1">Analysis</p>
                <p className="text-cream font-medium">Gold vs Bitcoin Investment Comparison</p>
              </Link>
            </div>
          </section>

          {/* CTA */}
          <section className="text-center border border-cream-08 rounded-2xl bg-bg-card p-10">
            <h2 className="font-display text-3xl font-semibold text-cream mb-3">
              Ready to sell?
            </h2>
            <p className="text-cream-45 mb-6 max-w-md mx-auto">
              Get 85-95% of spot price with insured shipping, XRF testing, and
              payment in cash or Bitcoin within 48 hours.
            </p>
            <Link
              href="/get-kit"
              className="inline-block bg-gold-gradient text-bg font-semibold px-6 py-3 rounded-lg hover:shadow-md hover:shadow-gold-500/20 transition-all"
            >
              Get Your Free Kit →
            </Link>
          </section>
        </div>
      </article>
    </>
  );
}
