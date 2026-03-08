import Link from "next/link";

export default function PawnShopGoldPricesPage() {
  return (
    <>
      <script
        type="application/ld+json"
        suppressHydrationWarning
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline: "How Much Do Pawn Shops Pay for Gold?",
            author: { "@type": "Person", name: "Yasmine" },
            publisher: {
              "@type": "Organization",
              name: "Offramp",
              url: "https://offrampgold.com",
            },
            datePublished: "2026-03-01",
            dateModified: "2026-03-01",
            description:
              "Pawn shops typically pay 20-55% of gold's melt value. Breakdown of pawn shop economics and alternatives.",
            mainEntityOfPage:
              "https://offrampgold.com/guide/pawn-shop-gold-prices",
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
            How Much Do Pawn Shops Pay for Gold?
          </h1>
          <p className="text-cream-45 font-body text-lg max-w-2xl mx-auto mb-4">
            The economics behind pawn shop offers, typical payout ranges by
            item type, and how to get more for your gold.
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
              Pawn shops typically pay 20&ndash;55% of gold&apos;s melt value
              because they must cover rent, utilities, staff, insurance, and
              profit margins. Online gold buyers like Offramp pay significantly
              more &mdash; 80%+ of spot value &mdash; because of lower
              operating costs.
            </p>
          </div>
        </div>
      </section>

      {/* ── Article ── */}
      <article className="px-6 pb-24">
        <div className="max-w-3xl mx-auto space-y-16">
          <section>
            <h2 className="font-display text-3xl sm:text-4xl font-semibold text-cream mb-6">
              Why Pawn Shops Pay So Little
            </h2>
            <p className="text-cream-60 font-body leading-relaxed mb-4">
              Pawn shops are not gold specialists. They are general-purpose
              businesses that deal in electronics, tools, instruments, firearms,
              and yes, gold. Their overhead is substantial: retail rent in high-
              traffic locations, staff wages, security systems, insurance, and
              regulatory compliance.
            </p>
            <p className="text-cream-60 font-body leading-relaxed mb-4">
              Every dollar they pay you for gold must be recovered when they
              resell it &mdash; plus their operating costs and profit margin.
              The math simply does not allow them to pay high percentages of
              melt value.
            </p>
            <p className="text-cream-60 font-body leading-relaxed">
              Additionally, many pawn shops lack sophisticated testing
              equipment. Without an XRF spectrometer, they rely on acid tests
              or visual inspection, which means they build in a margin of
              safety by offering less.
            </p>
          </section>

          <section>
            <h2 className="font-display text-3xl sm:text-4xl font-semibold text-cream mb-6">
              Typical Pawn Shop Payouts by Item
            </h2>
            <div className="overflow-x-auto rounded-xl border border-cream-08">
              <table className="w-full text-left font-body text-sm">
                <thead>
                  <tr className="border-b border-cream-08 bg-bg-card">
                    <th className="px-6 py-4 text-cream-45 font-medium">
                      Item Type
                    </th>
                    <th className="px-6 py-4 text-cream-45 font-medium">
                      Pawn Shop Pays
                    </th>
                    <th className="px-6 py-4 text-cream-45 font-medium">
                      Offramp Pays
                    </th>
                  </tr>
                </thead>
                <tbody className="text-cream-60">
                  {[
                    ["10K Jewelry", "20-35%", "80%+"],
                    ["14K Jewelry", "25-40%", "80%+"],
                    ["18K Jewelry", "30-45%", "80%+"],
                    ["24K Jewelry", "35-55%", "80%+"],
                    ["Gold Coins", "40-60%", "85%+"],
                    ["Gold Bars", "50-65%", "90%+"],
                    ["Dental Gold", "15-30%", "80%+"],
                    ["Scrap / Broken", "15-25%", "80%+"],
                  ].map(([item, pawn, offramp]) => (
                    <tr
                      key={item}
                      className="border-b border-cream-08 last:border-0"
                    >
                      <td className="px-6 py-4 text-cream font-medium">
                        {item}
                      </td>
                      <td className="px-6 py-4 text-red-400">{pawn}</td>
                      <td className="px-6 py-4 text-gold-500">{offramp}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="text-cream-35 text-sm mt-4">
              Percentages are of melt value (pure gold content at spot price).
              Pawn shop ranges reflect national averages.
            </p>
          </section>

          <section>
            <h2 className="font-display text-3xl sm:text-4xl font-semibold text-cream mb-6">
              The Real Cost of Convenience
            </h2>
            <p className="text-cream-60 font-body leading-relaxed mb-4">
              The main argument for pawn shops is convenience: walk in, get
              cash, walk out. But that convenience comes at a steep cost.
            </p>
            <p className="text-cream-60 font-body leading-relaxed mb-4">
              Consider this example: you have a 14K gold chain weighing 20
              grams. At current spot prices, the melt value is approximately
              $2,200. A pawn shop might offer $550&ndash;$880 (25&ndash;40%).
              Offramp would pay $1,760+ (80%+). The difference is
              $880&ndash;$1,210 &mdash; for waiting two extra days.
            </p>
            <p className="text-cream-60 font-body leading-relaxed">
              Unless you need cash within the hour, selling to an online buyer
              is almost always the smarter financial decision.
            </p>
          </section>

          <section>
            <h2 className="font-display text-3xl sm:text-4xl font-semibold text-cream mb-6">
              How to Negotiate at a Pawn Shop
            </h2>
            <p className="text-cream-60 font-body leading-relaxed mb-4">
              If you must sell at a pawn shop, know your gold&apos;s melt
              value before you walk in. Use a gold calculator to get the
              number. This gives you leverage in negotiation.
            </p>
            <p className="text-cream-60 font-body leading-relaxed mb-4">
              Tell the pawn broker you know the melt value and ask what
              percentage they pay. Most will not volunteer this information. If
              the offer is below 40% of melt, walk away. Try another shop.
            </p>
            <p className="text-cream-60 font-body leading-relaxed">
              Visit at least three pawn shops before accepting any offer.
              Prices vary significantly from shop to shop, even within the
              same city.
            </p>
          </section>

          {/* Internal Links */}
          <section className="space-y-4">
            <Link
              href="/calculators/pawn-comparison"
              className="block border border-gold-500/20 rounded-xl p-6 hover:border-gold-500/40 transition-colors bg-bg-card"
            >
              <p className="text-gold-500 font-mono text-xs tracking-widest uppercase mb-2">
                Tool
              </p>
              <p className="text-cream font-display text-xl">
                Pawn Shop vs Offramp Calculator &rarr;
              </p>
              <p className="text-cream-45 text-sm mt-1">
                See the exact dollar difference between pawn shop offers and
                Offramp payouts.
              </p>
            </Link>
            <Link
              href="/sell"
              className="block border border-gold-500/20 rounded-xl p-6 hover:border-gold-500/40 transition-colors bg-bg-card"
            >
              <p className="text-gold-500 font-mono text-xs tracking-widest uppercase mb-2">
                Get Started
              </p>
              <p className="text-cream font-display text-xl">
                Sell Gold Online Instead &rarr;
              </p>
              <p className="text-cream-45 text-sm mt-1">
                Skip the pawn shop. Get 80%+ of spot with Offramp.
              </p>
            </Link>
            <Link
              href="/guide/where-to-sell-gold"
              className="block border border-gold-500/20 rounded-xl p-6 hover:border-gold-500/40 transition-colors bg-bg-card"
            >
              <p className="text-gold-500 font-mono text-xs tracking-widest uppercase mb-2">
                Related
              </p>
              <p className="text-cream font-display text-xl">
                Where to Sell Gold: All Options Compared &rarr;
              </p>
              <p className="text-cream-45 text-sm mt-1">
                Full comparison of every gold-selling option.
              </p>
            </Link>
          </section>

          {/* CTA */}
          <section className="text-center py-16 border-t border-cream-08">
            <h2 className="font-display text-3xl sm:text-4xl font-semibold text-cream mb-4">
              Get 2&ndash;4x More Than a Pawn Shop
            </h2>
            <p className="text-cream-45 font-body mb-8 max-w-lg mx-auto">
              Offramp pays 80%+ of spot value. Free insured shipping. XRF assay
              on video. Payment in 48 hours.
            </p>
            <Link
              href="/sell"
              className="inline-block bg-gold-500 text-bg font-body font-semibold px-8 py-4 rounded-lg hover:bg-gold-400 transition-colors"
            >
              Sell Your Gold Now
            </Link>
          </section>
        </div>
      </article>
    </>
  );
}
