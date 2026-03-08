import Link from "next/link";

export default function GoldVsBitcoinInvestmentPage() {
  return (
    <>
      <script
        type="application/ld+json"
        suppressHydrationWarning
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline: "Gold vs Bitcoin: Which Is the Better Investment?",
            author: { "@type": "Person", name: "Yasmine" },
            publisher: {
              "@type": "Organization",
              name: "Offramp",
              url: "https://offramp.com",
            },
            datePublished: "2026-03-01",
            dateModified: "2026-03-01",
            description:
              "Investment comparison of gold and Bitcoin across returns, volatility, and portfolio theory.",
            mainEntityOfPage:
              "https://offramp.com/guide/gold-vs-bitcoin-investment",
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
            Gold vs Bitcoin: Which Is the Better Investment?
          </h1>
          <p className="text-cream-45 font-body text-lg max-w-2xl mx-auto mb-4">
            Returns data, volatility analysis, and portfolio allocation theory
            for the two premier hard assets.
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
              Over the past decade, Bitcoin has returned over 10,000% while
              gold returned approximately 80%. But gold offers lower
              volatility and 5,000 years of track record. The optimal strategy
              for most investors is to own both in proportions that match
              their risk tolerance.
            </p>
          </div>
        </div>
      </section>

      {/* ── Article ── */}
      <article className="px-6 pb-24">
        <div className="max-w-3xl mx-auto space-y-16">
          <section>
            <h2 className="font-display text-3xl sm:text-4xl font-semibold text-cream mb-6">
              The Returns Comparison
            </h2>
            <p className="text-cream-60 font-body leading-relaxed mb-4">
              Raw returns tell a dramatic story. An investor who put $10,000
              into Bitcoin a decade ago would have seen that grow to over
              $1&nbsp;million. The same amount in gold would be worth
              approximately $18,000.
            </p>
            <p className="text-cream-60 font-body leading-relaxed mb-4">
              But past returns do not guarantee future performance. Bitcoin was
              a $200 asset a decade ago, in the earliest stages of adoption.
              As it matures and market cap grows, the percentage returns will
              naturally compress. Gold, meanwhile, has been in a steady
              uptrend as global uncertainty and currency debasement increase.
            </p>
            <div className="overflow-x-auto rounded-xl border border-cream-08 mt-6">
              <table className="w-full text-left font-body text-sm">
                <thead>
                  <tr className="border-b border-cream-08 bg-bg-card">
                    <th className="px-6 py-4 text-cream-45 font-medium">
                      Metric
                    </th>
                    <th className="px-6 py-4 text-gold-500 font-medium">
                      Gold
                    </th>
                    <th className="px-6 py-4 text-gold-500 font-medium">
                      Bitcoin
                    </th>
                  </tr>
                </thead>
                <tbody className="text-cream-60">
                  {[
                    ["10-Year Return", "~80%", "~10,000%+"],
                    ["Annualized Return", "~6%", "~60%"],
                    ["Max Drawdown", "~45% (1980-2000)", "~85% (2017-2018)"],
                    ["Volatility (Annual)", "~15%", "~60-80%"],
                    ["Market Cap", "~$15 trillion", "~$2 trillion"],
                    ["Correlation to S&P500", "Low / Negative", "Moderate / Decreasing"],
                  ].map(([metric, gold, btc]) => (
                    <tr
                      key={metric}
                      className="border-b border-cream-08 last:border-0"
                    >
                      <td className="px-6 py-4 text-cream font-medium">
                        {metric}
                      </td>
                      <td className="px-6 py-4">{gold}</td>
                      <td className="px-6 py-4">{btc}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          <section>
            <h2 className="font-display text-3xl sm:text-4xl font-semibold text-cream mb-6">
              The Volatility Question
            </h2>
            <p className="text-cream-60 font-body leading-relaxed mb-4">
              Bitcoin&apos;s volatility is its most common criticism. Drawdowns
              of 50&ndash;85% have occurred multiple times. For an investor who
              needs stability &mdash; someone approaching retirement or
              managing a trust &mdash; this level of volatility can be
              unacceptable.
            </p>
            <p className="text-cream-60 font-body leading-relaxed">
              Gold&apos;s volatility is much lower. Annual moves of
              10&ndash;20% are typical, with larger moves during crises. Gold
              tends to rise when everything else falls, making it an excellent
              portfolio hedge. Bitcoin is increasingly showing similar
              behavior, but with more noise.
            </p>
          </section>

          <section>
            <h2 className="font-display text-3xl sm:text-4xl font-semibold text-cream mb-6">
              Portfolio Allocation Theory
            </h2>
            <p className="text-cream-60 font-body leading-relaxed mb-4">
              Modern portfolio theory suggests that adding non-correlated
              assets improves risk-adjusted returns. Both gold and Bitcoin have
              historically shown low correlation to equities, making them
              valuable portfolio diversifiers.
            </p>
            <p className="text-cream-60 font-body leading-relaxed mb-4">
              A common approach is to allocate 5&ndash;15% of a portfolio to
              hard assets. Within that allocation, the split between gold and
              Bitcoin depends on risk tolerance:
            </p>
            <div className="grid sm:grid-cols-3 gap-4">
              {[
                {
                  profile: "Conservative",
                  gold: "80% Gold",
                  btc: "20% Bitcoin",
                  desc: "Preservation-focused",
                },
                {
                  profile: "Moderate",
                  gold: "50% Gold",
                  btc: "50% Bitcoin",
                  desc: "Balanced approach",
                },
                {
                  profile: "Aggressive",
                  gold: "20% Gold",
                  btc: "80% Bitcoin",
                  desc: "Growth-oriented",
                },
              ].map((item) => (
                <div
                  key={item.profile}
                  className="bg-bg-card border border-cream-08 rounded-xl p-6"
                >
                  <p className="text-gold-500 font-mono text-xs tracking-widest uppercase mb-2">
                    {item.profile}
                  </p>
                  <p className="text-cream font-body text-sm font-medium">
                    {item.gold}
                  </p>
                  <p className="text-cream font-body text-sm font-medium mb-2">
                    {item.btc}
                  </p>
                  <p className="text-cream-35 text-xs">{item.desc}</p>
                </div>
              ))}
            </div>
          </section>

          <section>
            <h2 className="font-display text-3xl sm:text-4xl font-semibold text-cream mb-6">
              The Asymmetric Bet
            </h2>
            <p className="text-cream-60 font-body leading-relaxed mb-4">
              Bitcoin&apos;s current market cap is roughly one-eighth of
              gold&apos;s. If Bitcoin captures even a fraction of gold&apos;s
              use case as a store of value, the upside is substantial. This
              is the asymmetric bet that attracts investors: limited downside
              (you can only lose what you put in), but potentially massive
              upside.
            </p>
            <p className="text-cream-60 font-body leading-relaxed">
              Gold, by contrast, is a mature asset. It is unlikely to 10x from
              here. But it is also unlikely to lose 80% of its value. Gold is
              insurance. Bitcoin is insurance with a growth option attached.
            </p>
          </section>

          <section>
            <h2 className="font-display text-3xl sm:text-4xl font-semibold text-cream mb-6">
              Our View: Own Both
            </h2>
            <p className="text-cream-60 font-body leading-relaxed mb-4">
              The question is not gold or Bitcoin. It is gold and Bitcoin.
              They protect against different risks, offer different return
              profiles, and behave differently in different market conditions.
            </p>
            <p className="text-cream-60 font-body leading-relaxed">
              If you currently own physical gold and want exposure to Bitcoin,
              Offramp makes the conversion seamless. Sell your gold, receive
              Bitcoin. One transaction, no exchange account needed.
            </p>
          </section>

          {/* Internal Links */}
          <section className="space-y-4">
            <Link
              href="/guide/bitcoin-vs-gold"
              className="block border border-gold-500/20 rounded-xl p-6 hover:border-gold-500/40 transition-colors bg-bg-card"
            >
              <p className="text-gold-500 font-mono text-xs tracking-widest uppercase mb-2">
                Related
              </p>
              <p className="text-cream font-display text-xl">
                Bitcoin vs Gold: The Complete Comparison &rarr;
              </p>
              <p className="text-cream-45 text-sm mt-1">
                Property-by-property comparison of both assets.
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
                Gold to Bitcoin with Offramp &rarr;
              </p>
              <p className="text-cream-45 text-sm mt-1">
                Sell gold, receive Bitcoin. One seamless transaction.
              </p>
            </Link>
          </section>

          {/* CTA */}
          <section className="text-center py-16 border-t border-cream-08">
            <h2 className="font-display text-3xl sm:text-4xl font-semibold text-cream mb-4">
              Rebalance from Gold to Bitcoin
            </h2>
            <p className="text-cream-45 font-body mb-8 max-w-lg mx-auto">
              Sell physical gold and receive Bitcoin directly. No exchange
              account needed. Offramp handles everything.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/gold-to-bitcoin"
                className="inline-block bg-gold-500 text-bg font-body font-semibold px-8 py-4 rounded-lg hover:bg-gold-400 transition-colors"
              >
                Gold to Bitcoin
              </Link>
              <Link
                href="/sell"
                className="inline-block border border-gold-500/30 text-gold-500 font-body font-semibold px-8 py-4 rounded-lg hover:border-gold-500/60 transition-colors"
              >
                Sell for Cash
              </Link>
            </div>
          </section>
        </div>
      </article>
    </>
  );
}
