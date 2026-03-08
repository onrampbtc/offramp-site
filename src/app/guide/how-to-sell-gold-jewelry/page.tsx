import Link from "next/link";

export default function HowToSellGoldJewelryPage() {
  return (
    <>
      <script
        type="application/ld+json"
        suppressHydrationWarning
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline: "How to Sell Gold Jewelry for the Most Money",
            author: { "@type": "Person", name: "Yasmine" },
            publisher: {
              "@type": "Organization",
              name: "Offramp",
              url: "https://offrampgold.com",
            },
            datePublished: "2026-03-01",
            dateModified: "2026-03-01",
            description:
              "Step-by-step guide to selling gold jewelry for the most money.",
            mainEntityOfPage:
              "https://offrampgold.com/guide/how-to-sell-gold-jewelry",
          }),
        }}
      />

      {/* ── Hero ── */}
      <section className="relative pt-32 pb-20 px-6">
        <div className="absolute inset-0 bg-hero-radial pointer-events-none" />
        <div className="relative max-w-3xl mx-auto text-center">
          <p className="text-gold-500 font-mono text-sm tracking-widest uppercase mb-4">
            Guide
          </p>
          <h1 className="font-display text-4xl sm:text-5xl md:text-6xl font-semibold text-cream leading-tight mb-6">
            How to Sell Gold Jewelry for the Most Money
          </h1>
          <p className="text-cream-45 font-body text-lg max-w-2xl mx-auto mb-4">
            A step-by-step process for identifying, weighing, valuing, and
            selling your gold jewelry at the best possible price.
          </p>
          <p className="text-cream-35 font-mono text-xs tracking-wider">
            March 2026 &middot; By Yasmine
          </p>
        </div>
      </section>

      {/* ── AEO ── */}
      <section className="px-6 pb-16">
        <div className="max-w-3xl mx-auto">
          <div className="border border-gold-500/30 rounded-2xl bg-gold-500/[0.04] p-8">
            <p className="text-gold-500 font-mono text-xs tracking-widest uppercase mb-3">
              Key Takeaway
            </p>
            <p className="text-cream font-body text-lg leading-relaxed">
              Selling gold jewelry starts with knowing what you have. Check for
              karat stamps (10K, 14K, 18K, 24K), weigh your pieces on a
              kitchen or postal scale, and calculate melt value using a gold
              calculator. Then choose a buyer that pays the highest percentage
              of that melt value.
            </p>
          </div>
        </div>
      </section>

      {/* ── Article ── */}
      <article className="px-6 pb-24">
        <div className="max-w-3xl mx-auto space-y-16">
          {/* Step 1 */}
          <section>
            <h2 className="font-display text-3xl sm:text-4xl font-semibold text-cream mb-6">
              Step 1: Identify the Karat
            </h2>
            <p className="text-cream-60 font-body leading-relaxed mb-4">
              Every piece of gold jewelry sold in the United States is required
              to be stamped with its karat purity. Look for small markings on
              the inside of rings, on the clasp of necklaces and bracelets, or
              on the post of earrings.
            </p>
            <p className="text-cream-60 font-body leading-relaxed mb-6">
              Common stamps and what they mean:
            </p>
            <div className="overflow-x-auto rounded-xl border border-cream-08">
              <table className="w-full text-left font-body text-sm">
                <thead>
                  <tr className="border-b border-cream-08 bg-bg-card">
                    <th className="px-6 py-4 text-cream-45 font-medium">
                      Stamp
                    </th>
                    <th className="px-6 py-4 text-cream-45 font-medium">
                      Karat
                    </th>
                    <th className="px-6 py-4 text-cream-45 font-medium">
                      Pure Gold %
                    </th>
                  </tr>
                </thead>
                <tbody className="text-cream-60">
                  {[
                    ["417", "10K", "41.7%"],
                    ["585 or 14K", "14K", "58.3%"],
                    ["750 or 18K", "18K", "75.0%"],
                    ["916 or 22K", "22K", "91.6%"],
                    ["999 or 24K", "24K", "99.9%"],
                  ].map(([stamp, karat, purity]) => (
                    <tr
                      key={stamp}
                      className="border-b border-cream-08 last:border-0"
                    >
                      <td className="px-6 py-4 font-mono text-cream">
                        {stamp}
                      </td>
                      <td className="px-6 py-4">{karat}</td>
                      <td className="px-6 py-4 text-gold-500">{purity}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="text-cream-45 font-body text-sm mt-4">
              If you cannot find a stamp, the item may be gold-plated rather
              than solid gold. A professional assay with an XRF spectrometer
              can determine exact purity.
            </p>
          </section>

          {/* Step 2 */}
          <section>
            <h2 className="font-display text-3xl sm:text-4xl font-semibold text-cream mb-6">
              Step 2: Weigh Your Pieces
            </h2>
            <p className="text-cream-60 font-body leading-relaxed mb-4">
              Use a kitchen scale, postal scale, or jewelry scale to weigh each
              piece in grams. Separate pieces by karat &mdash; do not mix 10K
              and 14K jewelry on the same weighing.
            </p>
            <p className="text-cream-60 font-body leading-relaxed mb-4">
              Remove any non-gold components you can: leather straps, fabric
              cords, large gemstones that might add weight. The buyer is paying
              for gold content, not the total weight of the piece.
            </p>
            <p className="text-cream-60 font-body leading-relaxed">
              If you do not have a scale, most online gold buyers will weigh
              your pieces as part of the assay process. Offramp weighs every
              item on a calibrated scale during the video-recorded assay.
            </p>
          </section>

          {/* Step 3 */}
          <section>
            <h2 className="font-display text-3xl sm:text-4xl font-semibold text-cream mb-6">
              Step 3: Calculate the Melt Value
            </h2>
            <p className="text-cream-60 font-body leading-relaxed mb-4">
              The melt value is the theoretical value of the pure gold content
              in your jewelry. It is calculated using three numbers: weight in
              grams, karat purity percentage, and the current gold spot price
              per gram.
            </p>
            <p className="text-cream-60 font-body leading-relaxed mb-4">
              For example: a 14K gold ring weighing 5 grams contains
              5 &times; 0.583 = 2.915 grams of pure gold. At a spot price of
              $95 per gram, the melt value is $277.
            </p>
            <p className="text-cream-60 font-body leading-relaxed">
              Use our free gold calculator to run this math instantly with live
              spot prices.
            </p>
          </section>

          {/* Step 4 */}
          <section>
            <h2 className="font-display text-3xl sm:text-4xl font-semibold text-cream mb-6">
              Step 4: Get Multiple Quotes
            </h2>
            <p className="text-cream-60 font-body leading-relaxed mb-4">
              Never accept the first offer. Get at least three quotes from
              different types of buyers: a local jeweler, a pawn shop, and an
              online buyer. Compare what each one pays as a percentage of melt
              value.
            </p>
            <p className="text-cream-60 font-body leading-relaxed">
              Online buyers typically pay the highest percentage because they
              have lower overhead. Offramp pays 80%+ of melt value, which is
              significantly more than the 20&ndash;55% typical of pawn shops.
            </p>
          </section>

          {/* Step 5 */}
          <section>
            <h2 className="font-display text-3xl sm:text-4xl font-semibold text-cream mb-6">
              Step 5: Ship and Get Paid
            </h2>
            <p className="text-cream-60 font-body leading-relaxed mb-4">
              Once you choose a buyer, the process is straightforward. With
              Offramp, you request a free insured FedEx shipping kit. Pack your
              jewelry, drop it off at any FedEx location, and track the
              package online.
            </p>
            <p className="text-cream-60 font-body leading-relaxed">
              When your gold arrives, we test every piece with an XRF
              spectrometer and record the entire process on video. You receive
              your payout &mdash; by wire transfer or Bitcoin &mdash; within
              48 hours.
            </p>
          </section>

          {/* Pro Tips */}
          <section>
            <h2 className="font-display text-3xl sm:text-4xl font-semibold text-cream mb-6">
              Pro Tips for Maximum Value
            </h2>
            <div className="space-y-4">
              {[
                "Sort by karat before weighing. Mixing karats leads to inaccurate estimates.",
                "Do not clean or polish your gold. Buyers pay for metal content, not appearance.",
                "Keep gemstones if they are valuable. Most gold buyers do not pay for diamonds or gems in jewelry.",
                "Sell when gold prices are high. Use the Offramp gold price tracker to monitor trends.",
                "Ask about Bitcoin payouts. If you believe in Bitcoin long-term, converting gold to BTC can be a powerful move.",
              ].map((tip, i) => (
                <div
                  key={i}
                  className="flex gap-4 bg-bg-card border border-cream-08 rounded-xl p-5"
                >
                  <span className="text-gold-500 font-mono text-sm font-semibold shrink-0">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <p className="text-cream-60 font-body text-sm leading-relaxed">
                    {tip}
                  </p>
                </div>
              ))}
            </div>
          </section>

          {/* Internal Links */}
          <section className="space-y-4">
            <Link
              href="/sell-jewelry"
              className="block border border-gold-500/20 rounded-xl p-6 hover:border-gold-500/40 transition-colors bg-bg-card"
            >
              <p className="text-gold-500 font-mono text-xs tracking-widest uppercase mb-2">
                Get Started
              </p>
              <p className="text-cream font-display text-xl">
                Sell Gold Jewelry with Offramp &rarr;
              </p>
              <p className="text-cream-45 text-sm mt-1">
                Free insured shipping and professional XRF assay.
              </p>
            </Link>
            <Link
              href="/gold-calculator"
              className="block border border-gold-500/20 rounded-xl p-6 hover:border-gold-500/40 transition-colors bg-bg-card"
            >
              <p className="text-gold-500 font-mono text-xs tracking-widest uppercase mb-2">
                Tool
              </p>
              <p className="text-cream font-display text-xl">
                Gold Value Calculator &rarr;
              </p>
              <p className="text-cream-45 text-sm mt-1">
                Calculate your jewelry&apos;s melt value with live spot prices.
              </p>
            </Link>
            <Link
              href="/calculators/14k"
              className="block border border-gold-500/20 rounded-xl p-6 hover:border-gold-500/40 transition-colors bg-bg-card"
            >
              <p className="text-gold-500 font-mono text-xs tracking-widest uppercase mb-2">
                Calculator
              </p>
              <p className="text-cream font-display text-xl">
                14K Gold Calculator &rarr;
              </p>
              <p className="text-cream-45 text-sm mt-1">
                Most US jewelry is 14K. Calculate its value instantly.
              </p>
            </Link>
          </section>

          {/* CTA */}
          <section className="text-center py-16 border-t border-cream-08">
            <h2 className="font-display text-3xl sm:text-4xl font-semibold text-cream mb-4">
              Ready to Sell Your Jewelry?
            </h2>
            <p className="text-cream-45 font-body mb-8 max-w-lg mx-auto">
              Offramp pays 80%+ of melt value for gold jewelry. Free insured
              shipping, XRF assay on video, payment in 48 hours.
            </p>
            <Link
              href="/sell-jewelry"
              className="inline-block bg-gold-500 text-bg font-body font-semibold px-8 py-4 rounded-lg hover:bg-gold-400 transition-colors"
            >
              Sell Gold Jewelry
            </Link>
          </section>
        </div>
      </article>
    </>
  );
}
