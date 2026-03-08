import Link from "next/link";

export default function WhereToSellGoldPage() {
  return (
    <>
      <script
        type="application/ld+json"
        suppressHydrationWarning
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline: "Where to Sell Gold for the Best Price",
            author: { "@type": "Person", name: "Yasmine" },
            publisher: {
              "@type": "Organization",
              name: "Offramp",
              url: "https://offrampgold.com",
            },
            datePublished: "2026-03-01",
            dateModified: "2026-03-01",
            description:
              "Compare pawn shops, jewelers, online gold buyers, and refineries to find the best place to sell your gold.",
            mainEntityOfPage: "https://offrampgold.com/guide/where-to-sell-gold",
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
            Where to Sell Gold for the Best Price
          </h1>
          <p className="text-cream-45 font-body text-lg max-w-2xl mx-auto mb-4">
            Pawn shops, jewelers, online buyers, and refineries compared. Know
            what each option pays before you sell.
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
              You can sell gold at pawn shops (20&ndash;55% of spot), local
              jewelers (40&ndash;60%), online gold buyers (70&ndash;90%+), or
              direct to refineries (95&ndash;99%). Online buyers like Offramp
              offer the best combination of payout and convenience.
            </p>
          </div>
        </div>
      </section>

      {/* ── Article ── */}
      <article className="px-6 pb-24">
        <div className="max-w-3xl mx-auto space-y-16">
          {/* Option 1: Pawn Shops */}
          <section>
            <h2 className="font-display text-3xl sm:text-4xl font-semibold text-cream mb-6">
              Option 1: Pawn Shops
            </h2>
            <div className="flex items-center gap-3 mb-4">
              <span className="text-cream-45 font-mono text-sm">
                Typical Payout:
              </span>
              <span className="text-red-400 font-mono font-semibold">
                20&ndash;55% of spot
              </span>
            </div>
            <p className="text-cream-60 font-body leading-relaxed mb-4">
              Pawn shops offer immediate cash, which is their primary advantage.
              Walk in, negotiate, walk out with money. The downside is severe:
              pawn shops typically pay the lowest prices of any gold buyer.
            </p>
            <p className="text-cream-60 font-body leading-relaxed mb-4">
              Their business model requires covering rent, utilities, staff,
              insurance, and profit on every transaction. They also need margin
              because they often cannot verify exact purity without expensive
              equipment. Many rely on acid tests, which are less accurate than
              modern XRF technology.
            </p>
            <div className="bg-bg-card rounded-xl p-6 border border-cream-08">
              <p className="text-cream font-body font-medium mb-2">
                Best for:
              </p>
              <p className="text-cream-45 text-sm">
                Emergency same-day cash when maximizing value is not the
                priority.
              </p>
            </div>
          </section>

          {/* Option 2: Local Jewelers */}
          <section>
            <h2 className="font-display text-3xl sm:text-4xl font-semibold text-cream mb-6">
              Option 2: Local Jewelers
            </h2>
            <div className="flex items-center gap-3 mb-4">
              <span className="text-cream-45 font-mono text-sm">
                Typical Payout:
              </span>
              <span className="text-cream-60 font-mono font-semibold">
                40&ndash;60% of spot
              </span>
            </div>
            <p className="text-cream-60 font-body leading-relaxed mb-4">
              Independent jewelers often pay more than pawn shops because they
              can reuse gold in their own work. A jeweler who melts and
              refashions gold saves on raw material costs, which means they can
              afford to pay a higher price.
            </p>
            <p className="text-cream-60 font-body leading-relaxed mb-4">
              The experience varies dramatically by shop. Some jewelers are
              fair and transparent. Others use the same high-pressure tactics
              as pawn shops. Always get at least three quotes before selling to
              a local jeweler.
            </p>
            <div className="bg-bg-card rounded-xl p-6 border border-cream-08">
              <p className="text-cream font-body font-medium mb-2">
                Best for:
              </p>
              <p className="text-cream-45 text-sm">
                Sellers who prefer face-to-face transactions and have time to
                shop around.
              </p>
            </div>
          </section>

          {/* Option 3: Online Gold Buyers */}
          <section>
            <h2 className="font-display text-3xl sm:text-4xl font-semibold text-cream mb-6">
              Option 3: Online Gold Buyers
            </h2>
            <div className="flex items-center gap-3 mb-4">
              <span className="text-cream-45 font-mono text-sm">
                Typical Payout:
              </span>
              <span className="text-gold-500 font-mono font-semibold">
                70&ndash;90%+ of spot
              </span>
            </div>
            <p className="text-cream-60 font-body leading-relaxed mb-4">
              Online gold buyers like Offramp operate with lower overhead than
              brick-and-mortar stores. No retail rent. No showroom staff. This
              cost advantage is passed directly to you as a higher payout.
            </p>
            <p className="text-cream-60 font-body leading-relaxed mb-4">
              The best online buyers provide free insured shipping, professional
              assays using XRF spectrometers, transparent pricing, and fast
              payment by wire transfer or Bitcoin. Offramp records every assay
              on video so you can verify the process yourself.
            </p>
            <p className="text-cream-60 font-body leading-relaxed mb-4">
              The tradeoff is time. You ship your gold, wait for it to arrive
              and be tested, and then receive payment &mdash; typically within
              48 hours of receipt.
            </p>
            <div className="bg-bg-card rounded-xl p-6 border border-cream-08">
              <p className="text-cream font-body font-medium mb-2">
                Best for:
              </p>
              <p className="text-cream-45 text-sm">
                Sellers who want the highest payout and are comfortable with a
                2&ndash;5 day turnaround.
              </p>
            </div>
          </section>

          {/* Option 4: Refineries */}
          <section>
            <h2 className="font-display text-3xl sm:text-4xl font-semibold text-cream mb-6">
              Option 4: Refineries
            </h2>
            <div className="flex items-center gap-3 mb-4">
              <span className="text-cream-45 font-mono text-sm">
                Typical Payout:
              </span>
              <span className="text-cream-60 font-mono font-semibold">
                95&ndash;99% of spot
              </span>
            </div>
            <p className="text-cream-60 font-body leading-relaxed mb-4">
              Refineries pay the highest percentage because they process gold
              directly into bars and industrial products. They are the end of
              the supply chain. However, most refineries require minimum
              quantities &mdash; often 10 troy ounces or more &mdash; making
              them impractical for individual sellers with small amounts of
              jewelry or coins.
            </p>
            <p className="text-cream-60 font-body leading-relaxed">
              Refineries also may not offer the convenience of prepaid shipping
              kits or consumer-friendly processes. They are built for dealers
              and large-volume sellers.
            </p>
            <div className="bg-bg-card rounded-xl p-6 border border-cream-08 mt-4">
              <p className="text-cream font-body font-medium mb-2">
                Best for:
              </p>
              <p className="text-cream-45 text-sm">
                Dealers and sellers with large quantities (10+ troy ounces).
              </p>
            </div>
          </section>

          {/* Comparison Table */}
          <section>
            <h2 className="font-display text-3xl sm:text-4xl font-semibold text-cream mb-8">
              Comparison at a Glance
            </h2>
            <div className="overflow-x-auto rounded-xl border border-cream-08">
              <table className="w-full text-left font-body text-sm">
                <thead>
                  <tr className="border-b border-cream-08 bg-bg-card">
                    <th className="px-6 py-4 text-cream-45 font-medium">
                      Buyer Type
                    </th>
                    <th className="px-6 py-4 text-cream-45 font-medium">
                      Payout
                    </th>
                    <th className="px-6 py-4 text-cream-45 font-medium">
                      Speed
                    </th>
                    <th className="px-6 py-4 text-cream-45 font-medium">
                      Convenience
                    </th>
                  </tr>
                </thead>
                <tbody className="text-cream-60">
                  {[
                    ["Pawn Shop", "20-55%", "Same day", "Walk in"],
                    ["Local Jeweler", "40-60%", "Same day", "Shop around"],
                    ["Online Buyer", "70-90%+", "2-5 days", "Ship from home"],
                    ["Refinery", "95-99%", "5-10 days", "Min qty required"],
                  ].map(([type, payout, speed, convenience]) => (
                    <tr
                      key={type}
                      className={`border-b border-cream-08 last:border-0 ${
                        type === "Online Buyer" ? "bg-gold-500/[0.04]" : ""
                      }`}
                    >
                      <td className="px-6 py-4 text-cream font-medium">
                        {type}
                        {type === "Online Buyer" && (
                          <span className="ml-2 text-gold-500 text-xs">
                            Best Value
                          </span>
                        )}
                      </td>
                      <td className="px-6 py-4">{payout}</td>
                      <td className="px-6 py-4">{speed}</td>
                      <td className="px-6 py-4">{convenience}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          {/* Internal Link Cards */}
          <section className="space-y-4">
            <Link
              href="/sell"
              className="block border border-gold-500/20 rounded-xl p-6 hover:border-gold-500/40 transition-colors bg-bg-card"
            >
              <p className="text-gold-500 font-mono text-xs tracking-widest uppercase mb-2">
                Get Started
              </p>
              <p className="text-cream font-display text-xl">
                Sell Your Gold Online with Offramp &rarr;
              </p>
              <p className="text-cream-45 text-sm mt-1">
                Free insured shipping, XRF assay, 80%+ of spot value.
              </p>
            </Link>
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
                See exactly how much more Offramp pays compared to your local
                pawn shop.
              </p>
            </Link>
            <Link
              href="/how-it-works"
              className="block border border-gold-500/20 rounded-xl p-6 hover:border-gold-500/40 transition-colors bg-bg-card"
            >
              <p className="text-gold-500 font-mono text-xs tracking-widest uppercase mb-2">
                Learn More
              </p>
              <p className="text-cream font-display text-xl">
                How Offramp Works &rarr;
              </p>
              <p className="text-cream-45 text-sm mt-1">
                Our step-by-step process from shipping to payout.
              </p>
            </Link>
          </section>

          {/* CTA */}
          <section className="text-center py-16 border-t border-cream-08">
            <h2 className="font-display text-3xl sm:text-4xl font-semibold text-cream mb-4">
              Get the Best Price for Your Gold
            </h2>
            <p className="text-cream-45 font-body mb-8 max-w-lg mx-auto">
              Stop leaving money on the table. Offramp pays 80%+ of spot with
              free insured shipping and professional XRF assay.
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
