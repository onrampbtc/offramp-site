import Link from "next/link";

export default function BestPlaceSellGoldPage() {
  return (
    <>
      <script
        type="application/ld+json"
        suppressHydrationWarning
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline: "The Best Place to Sell Gold for Maximum Cash",
            author: { "@type": "Person", name: "Yasmine" },
            publisher: {
              "@type": "Organization",
              name: "Offramp",
              url: "https://offramp.com",
            },
            datePublished: "2026-03-01",
            dateModified: "2026-03-01",
            description:
              "The best place to sell gold depends on what you prioritize. Compare options by payout, speed, and convenience.",
            mainEntityOfPage: "https://offramp.com/guide/best-place-sell-gold",
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
            The Best Place to Sell Gold for Maximum Cash
          </h1>
          <p className="text-cream-45 font-body text-lg max-w-2xl mx-auto mb-4">
            A decision framework to help you choose the right buyer based on
            your priorities: maximum payout, same-day speed, or ultimate
            convenience.
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
              The best place to sell gold depends on what you prioritize. For
              maximum payout, online buyers and refineries pay 80&ndash;95% of
              spot. For speed, local pawn shops offer same-day cash but pay
              20&ndash;55%. Online buyers like Offramp offer the best balance
              of high payout and convenience.
            </p>
          </div>
        </div>
      </section>

      {/* ── Article ── */}
      <article className="px-6 pb-24">
        <div className="max-w-3xl mx-auto space-y-16">
          {/* Decision Framework */}
          <section>
            <h2 className="font-display text-3xl sm:text-4xl font-semibold text-cream mb-6">
              The Decision Framework
            </h2>
            <p className="text-cream-60 font-body leading-relaxed mb-4">
              Before comparing options, ask yourself one question: what matters
              most? Your answer determines the best place to sell.
            </p>
            <div className="grid gap-4 sm:grid-cols-3">
              {[
                {
                  priority: "Maximum Payout",
                  answer: "Online Buyer or Refinery",
                  detail: "80-99% of spot value",
                },
                {
                  priority: "Same-Day Cash",
                  answer: "Pawn Shop or Jeweler",
                  detail: "20-60% of spot value",
                },
                {
                  priority: "Best Balance",
                  answer: "Online Buyer (Offramp)",
                  detail: "80%+ of spot, 48hr payment",
                },
              ].map((item) => (
                <div
                  key={item.priority}
                  className="bg-bg-card border border-cream-08 rounded-xl p-6"
                >
                  <p className="text-gold-500 font-mono text-xs tracking-widest uppercase mb-2">
                    {item.priority}
                  </p>
                  <p className="text-cream font-body font-medium mb-1">
                    {item.answer}
                  </p>
                  <p className="text-cream-35 text-sm">{item.detail}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Why Online Buyers Win */}
          <section>
            <h2 className="font-display text-3xl sm:text-4xl font-semibold text-cream mb-6">
              Why Online Buyers Win for Most Sellers
            </h2>
            <p className="text-cream-60 font-body leading-relaxed mb-4">
              Most people selling gold are not in a financial emergency. They
              have a few days. They want the best price. They want a
              trustworthy process. Online gold buyers check every box.
            </p>
            <p className="text-cream-60 font-body leading-relaxed mb-4">
              The economics are simple. Online buyers have lower overhead than
              brick-and-mortar stores. No retail lease. No display cases. No
              walk-in traffic costs. Those savings are passed to you as a
              higher payout percentage.
            </p>
            <p className="text-cream-60 font-body leading-relaxed">
              The best online buyers &mdash; like Offramp &mdash; also invest
              in technology that builds trust: XRF spectrometer assays recorded
              on video, live spot price calculators, insured shipping both
              ways, and transparent payout rates published on the website.
            </p>
          </section>

          {/* When Pawn Shops Make Sense */}
          <section>
            <h2 className="font-display text-3xl sm:text-4xl font-semibold text-cream mb-6">
              When a Pawn Shop Actually Makes Sense
            </h2>
            <p className="text-cream-60 font-body leading-relaxed mb-4">
              Pawn shops are not always the wrong choice. If you need cash
              today &mdash; literally today &mdash; and cannot wait 48 hours
              for an online buyer to process your gold, a pawn shop is your
              fastest option.
            </p>
            <p className="text-cream-60 font-body leading-relaxed">
              Just go in with realistic expectations. You will receive
              significantly less than your gold is worth. That is the price of
              immediate liquidity. If you can wait even a few days, you will
              almost always make more selling online.
            </p>
          </section>

          {/* The Refinery Option */}
          <section>
            <h2 className="font-display text-3xl sm:text-4xl font-semibold text-cream mb-6">
              The Refinery Option: High Payout, High Minimums
            </h2>
            <p className="text-cream-60 font-body leading-relaxed mb-4">
              Refineries pay the highest percentage of spot value because they
              are the final stop in the gold supply chain. They melt, refine,
              and sell pure gold to industrial users, jewelers, and mints.
            </p>
            <p className="text-cream-60 font-body leading-relaxed">
              The catch: most refineries have minimum quantity requirements,
              often 10 troy ounces ($30,000+ at current prices). If you have a
              few rings and a bracelet, a refinery will not take your business.
              For smaller quantities, an online buyer like Offramp gives you
              refinery-level service at consumer-friendly minimums.
            </p>
          </section>

          {/* Our Recommendation */}
          <section>
            <h2 className="font-display text-3xl sm:text-4xl font-semibold text-cream mb-6">
              Our Recommendation
            </h2>
            <p className="text-cream-60 font-body leading-relaxed mb-4">
              For the vast majority of sellers, an online gold buyer offers the
              best combination of payout, convenience, and trust. You ship from
              home, your gold is tested with professional equipment, and you
              receive payment within 48 hours.
            </p>
            <p className="text-cream-60 font-body leading-relaxed mb-4">
              Offramp was built specifically for this use case. We pay 80%+ of
              spot value &mdash; more than double what most pawn shops offer
              &mdash; with free insured FedEx shipping and XRF spectrometer
              assay recorded on video.
            </p>
            <p className="text-cream-60 font-body leading-relaxed">
              You can also choose to receive your payout in Bitcoin, making
              Offramp the only gold buyer that bridges physical precious metals
              with the digital economy.
            </p>
          </section>

          {/* Internal Links */}
          <section className="space-y-4">
            <Link
              href="/sell"
              className="block border border-gold-500/20 rounded-xl p-6 hover:border-gold-500/40 transition-colors bg-bg-card"
            >
              <p className="text-gold-500 font-mono text-xs tracking-widest uppercase mb-2">
                Get Started
              </p>
              <p className="text-cream font-display text-xl">
                Sell Your Gold with Offramp &rarr;
              </p>
              <p className="text-cream-45 text-sm mt-1">
                Free shipping, XRF assay, 80%+ of spot value.
              </p>
            </Link>
            <Link
              href="/guide/where-to-sell-gold"
              className="block border border-gold-500/20 rounded-xl p-6 hover:border-gold-500/40 transition-colors bg-bg-card"
            >
              <p className="text-gold-500 font-mono text-xs tracking-widest uppercase mb-2">
                Related Guide
              </p>
              <p className="text-cream font-display text-xl">
                Where to Sell Gold: All Options Compared &rarr;
              </p>
              <p className="text-cream-45 text-sm mt-1">
                Detailed breakdown of every selling option with pros and cons.
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
                Calculate what your gold is worth at today&apos;s spot price.
              </p>
            </Link>
          </section>

          {/* CTA */}
          <section className="text-center py-16 border-t border-cream-08">
            <h2 className="font-display text-3xl sm:text-4xl font-semibold text-cream mb-4">
              Stop Settling for Pawn Shop Prices
            </h2>
            <p className="text-cream-45 font-body mb-8 max-w-lg mx-auto">
              Offramp pays 80%+ of spot value. That is 2&ndash;4x more than
              your local pawn shop. Free insured shipping included.
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
