import Link from "next/link";

export default function WhenToSellGoldPage() {
  return (
    <>
      <script
        type="application/ld+json"
        suppressHydrationWarning
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline: "Is Now a Good Time to Sell Gold?",
            author: { "@type": "Person", name: "Yasmine" },
            publisher: {
              "@type": "Organization",
              name: "Offramp",
              url: "https://offramp.com",
            },
            datePublished: "2026-03-01",
            dateModified: "2026-03-01",
            description:
              "Gold prices are trading near all-time highs as of March 2026. Analysis of market conditions and timing.",
            mainEntityOfPage:
              "https://offramp.com/guide/when-to-sell-gold",
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
            Is Now a Good Time to Sell Gold?
          </h1>
          <p className="text-cream-45 font-body text-lg max-w-2xl mx-auto mb-4">
            Market analysis, macro trends, and a framework for deciding
            whether selling your gold right now makes financial sense.
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
              Gold prices are trading near all-time highs as of March 2026.
              Whether to sell depends on your financial goals, not market
              timing. If you need the cash, want to rebalance into Bitcoin, or
              have gold sitting unused, current prices make selling attractive.
            </p>
          </div>
        </div>
      </section>

      {/* ── Article ── */}
      <article className="px-6 pb-24">
        <div className="max-w-3xl mx-auto space-y-16">
          <section>
            <h2 className="font-display text-3xl sm:text-4xl font-semibold text-cream mb-6">
              The Current Gold Market
            </h2>
            <p className="text-cream-60 font-body leading-relaxed mb-4">
              Gold has been on a remarkable run. After breaking through $2,000
              per ounce in 2023, prices have continued to climb, driven by
              persistent inflation concerns, central bank buying, geopolitical
              uncertainty, and growing demand from emerging markets.
            </p>
            <p className="text-cream-60 font-body leading-relaxed mb-4">
              Central banks worldwide have been adding to gold reserves at a
              pace not seen in decades. China, India, Turkey, and Poland have
              been among the largest buyers. This institutional demand provides
              a floor under prices that did not exist in previous cycles.
            </p>
            <p className="text-cream-60 font-body leading-relaxed">
              At the same time, retail demand remains strong as consumers seek
              protection against currency debasement and economic uncertainty.
              The combination of institutional and retail demand has created a
              historically favorable environment for gold sellers.
            </p>
          </section>

          <section>
            <h2 className="font-display text-3xl sm:text-4xl font-semibold text-cream mb-6">
              The Case Against Market Timing
            </h2>
            <p className="text-cream-60 font-body leading-relaxed mb-4">
              Trying to time the gold market is a losing game. Nobody
              consistently predicts tops and bottoms. The investors who waited
              for gold to &ldquo;pull back&rdquo; in 2024 are still waiting
              while prices have moved higher.
            </p>
            <p className="text-cream-60 font-body leading-relaxed">
              Instead of asking &ldquo;is the price going up or down,&rdquo;
              ask yourself: &ldquo;do I need this capital for something more
              productive?&rdquo; If the answer is yes, current prices give you
              an excellent exit point.
            </p>
          </section>

          <section>
            <h2 className="font-display text-3xl sm:text-4xl font-semibold text-cream mb-6">
              When Selling Makes Sense
            </h2>
            <div className="space-y-4">
              {[
                {
                  title: "You need the cash",
                  desc: "Medical bills, home repairs, education, or debt payoff. Gold sitting in a drawer does not help you if you have pressing financial needs.",
                },
                {
                  title: "You want to rebalance into Bitcoin",
                  desc: "Converting gold to Bitcoin at historically high gold prices lets you acquire more satoshis. Offramp makes this a single transaction.",
                },
                {
                  title: "You have inherited gold you will not wear",
                  desc: "Jewelry you never wear is an unproductive asset. Converting it to cash or Bitcoin puts that capital to work.",
                },
                {
                  title: "You are moving or downsizing",
                  desc: "Physical gold requires secure storage. If you are simplifying your life, selling makes practical sense.",
                },
                {
                  title: "You want to diversify",
                  desc: "If gold represents an outsized portion of your net worth, selling some to diversify is sound financial practice.",
                },
              ].map((item) => (
                <div
                  key={item.title}
                  className="bg-bg-card border border-cream-08 rounded-xl p-6"
                >
                  <p className="text-cream font-body font-medium mb-2">
                    {item.title}
                  </p>
                  <p className="text-cream-45 text-sm leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </section>

          <section>
            <h2 className="font-display text-3xl sm:text-4xl font-semibold text-cream mb-6">
              When to Hold
            </h2>
            <p className="text-cream-60 font-body leading-relaxed mb-4">
              If you do not need the cash, have no pressing financial goals,
              and view your gold as long-term insurance against economic
              uncertainty, there is no reason to sell. Gold has preserved
              wealth through every economic crisis in human history.
            </p>
            <p className="text-cream-60 font-body leading-relaxed">
              Similarly, if you own gold coins with significant numismatic
              (collector) value, holding may be wise. Collector premiums tend
              to increase over time, especially for rare dates and low-mintage
              coins.
            </p>
          </section>

          <section>
            <h2 className="font-display text-3xl sm:text-4xl font-semibold text-cream mb-6">
              The Gold-to-Bitcoin Conversion
            </h2>
            <p className="text-cream-60 font-body leading-relaxed mb-4">
              One increasingly popular strategy is converting gold to Bitcoin.
              Both are hard assets with fixed or limited supply. But Bitcoin
              offers digital portability, perfect divisibility, and the
              potential for significantly higher returns.
            </p>
            <p className="text-cream-60 font-body leading-relaxed">
              Selling gold at all-time highs and converting to Bitcoin is a
              way to rotate from a mature, lower-volatility store of value into
              a younger, higher-growth one. Offramp was built specifically for
              this trade.
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
                Sell Gold at Today&apos;s Prices &rarr;
              </p>
              <p className="text-cream-45 text-sm mt-1">
                Lock in current gold prices with free insured shipping.
              </p>
            </Link>
            <Link
              href="/gold-to-bitcoin"
              className="block border border-gold-500/20 rounded-xl p-6 hover:border-gold-500/40 transition-colors bg-bg-card"
            >
              <p className="text-gold-500 font-mono text-xs tracking-widest uppercase mb-2">
                Convert
              </p>
              <p className="text-cream font-display text-xl">
                Gold to Bitcoin &rarr;
              </p>
              <p className="text-cream-45 text-sm mt-1">
                Convert your gold directly into Bitcoin with Offramp.
              </p>
            </Link>
          </section>

          {/* CTA */}
          <section className="text-center py-16 border-t border-cream-08">
            <h2 className="font-display text-3xl sm:text-4xl font-semibold text-cream mb-4">
              Gold Prices Are Near All-Time Highs
            </h2>
            <p className="text-cream-45 font-body mb-8 max-w-lg mx-auto">
              If you are going to sell, now is as good a time as any. Offramp
              pays 80%+ of spot with free insured shipping.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/sell"
                className="inline-block bg-gold-500 text-bg font-body font-semibold px-8 py-4 rounded-lg hover:bg-gold-400 transition-colors"
              >
                Sell Your Gold
              </Link>
              <Link
                href="/gold-calculator"
                className="inline-block border border-gold-500/30 text-gold-500 font-body font-semibold px-8 py-4 rounded-lg hover:border-gold-500/60 transition-colors"
              >
                Check Today&apos;s Price
              </Link>
            </div>
          </section>
        </div>
      </article>
    </>
  );
}
