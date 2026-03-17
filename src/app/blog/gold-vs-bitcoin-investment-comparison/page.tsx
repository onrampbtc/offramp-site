import Link from "next/link";

export default function GoldVsBitcoinInvestmentPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-20 px-6">
        <div className="absolute inset-0 bg-hero-radial pointer-events-none" />
        <div className="relative max-w-3xl mx-auto text-center">
          <p className="text-gold-500 font-mono text-sm tracking-widest uppercase mb-4">
            Blog
          </p>
          <h1 className="font-display text-4xl sm:text-5xl md:text-6xl font-semibold text-cream leading-tight mb-6">
            Gold vs Bitcoin as an Investment: A 2026 Comparison
          </h1>
          <p className="text-cream-45 font-body text-lg max-w-2xl mx-auto mb-4">
            Both gold and Bitcoin are scarce, decentralized stores of value.
            But they behave very differently as investments. Here&apos;s a
            data-driven comparison to help you decide how to allocate.
          </p>
          <p className="text-cream-35 font-mono text-xs tracking-wider">
            March 15, 2026 &middot; By Yasmine &middot; 10 min read
          </p>
        </div>
      </section>

      {/* AEO */}
      <section className="px-6 pb-16">
        <div className="max-w-3xl mx-auto">
          <div className="border border-gold-500/30 rounded-2xl bg-gold-500/[0.04] p-8">
            <p className="text-gold-500 font-mono text-xs tracking-widest uppercase mb-3">
              Key Takeaway
            </p>
            <p className="text-cream font-body text-lg leading-relaxed">
              Gold and Bitcoin aren&apos;t competing investments &mdash;
              they&apos;re complementary. Gold provides stability and inflation
              protection (5&ndash;15% annual volatility), while Bitcoin offers
              asymmetric upside potential (50&ndash;80% volatility). A portfolio
              holding both benefits from low cross-correlation and exposure to
              two different forms of sound money.
            </p>
          </div>
        </div>
      </section>

      {/* Article */}
      <article className="px-6 pb-24">
        <div className="max-w-3xl mx-auto space-y-16">
          {/* Historical Performance */}
          <section>
            <h2 className="font-display text-3xl sm:text-4xl font-semibold text-cream mb-6">
              Historical Performance Compared
            </h2>
            <p className="text-cream-45 font-body leading-relaxed mb-6">
              The numbers tell a dramatic story. Bitcoin has been the
              best-performing asset of the last decade by an enormous margin,
              but gold has been the more consistent one.
            </p>
            <div className="bg-bg-card border border-cream-10 rounded-xl overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-cream-10">
                    <th className="text-left p-4 text-cream font-medium">
                      Period
                    </th>
                    <th className="p-4 text-cream font-medium">Gold Return</th>
                    <th className="p-4 text-cream font-medium">BTC Return</th>
                    <th className="p-4 text-cream font-medium">S&amp;P 500</th>
                  </tr>
                </thead>
                <tbody className="text-cream-45">
                  {[
                    ["1 Year (2025)", "+8%", "+120%", "+15%"],
                    ["5 Years (2021-26)", "+45%", "+380%", "+65%"],
                    ["10 Years (2016-26)", "+90%", "+12,000%", "+180%"],
                    ["Max Drawdown", "-20%", "-77%", "-34%"],
                    ["Sharpe Ratio (10yr)", "0.45", "0.95", "0.72"],
                  ].map((row) => (
                    <tr
                      key={row[0]}
                      className="border-b border-cream-10 last:border-0"
                    >
                      <td className="p-4 text-cream font-medium">{row[0]}</td>
                      <td className="p-4 text-center">{row[1]}</td>
                      <td className="p-4 text-center text-gold-500 font-medium">
                        {row[2]}
                      </td>
                      <td className="p-4 text-center">{row[3]}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="mt-4 text-xs text-cream-35 font-mono">
              Returns are approximate. Past performance does not guarantee
              future results.
            </p>
          </section>

          {/* Risk Profiles */}
          <section>
            <h2 className="font-display text-3xl sm:text-4xl font-semibold text-cream mb-6">
              Risk Profiles: How They Differ
            </h2>
            <div className="grid sm:grid-cols-2 gap-6">
              <div className="bg-bg-card border border-cream-10 rounded-2xl p-6">
                <h3 className="font-display text-xl font-semibold text-cream mb-4">
                  Gold
                </h3>
                <ul className="space-y-3 text-sm text-cream-45">
                  {[
                    "Annual volatility: 5-15%",
                    "Max drawdown (10yr): ~20%",
                    "Recovery time: months to 2 years",
                    "Correlation to stocks: ~0.0 to 0.2",
                    "Correlation to bonds: ~0.0",
                    "Inflation hedge: strong (5,000yr track record)",
                    "Yield: none (storage costs -0.3% to -0.5%/yr)",
                  ].map((item) => (
                    <li key={item} className="flex gap-2">
                      <span className="text-gold-500 flex-shrink-0">
                        &#8226;
                      </span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="bg-bg-card border border-cream-10 rounded-2xl p-6">
                <h3 className="font-display text-xl font-semibold text-cream mb-4">
                  Bitcoin
                </h3>
                <ul className="space-y-3 text-sm text-cream-45">
                  {[
                    "Annual volatility: 50-80%",
                    "Max drawdown: ~77% (2022 cycle)",
                    "Recovery time: 1-3 years historically",
                    "Correlation to stocks: ~0.3 to 0.5 (varies)",
                    "Correlation to gold: ~0.0 to 0.3 (low)",
                    "Inflation hedge: theoretical (limited data)",
                    "Yield: none (but no storage costs)",
                  ].map((item) => (
                    <li key={item} className="flex gap-2">
                      <span className="text-gold-500 flex-shrink-0">
                        &#8226;
                      </span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </section>

          {/* When Gold Wins */}
          <section>
            <h2 className="font-display text-3xl sm:text-4xl font-semibold text-cream mb-6">
              When Gold Wins
            </h2>
            <div className="space-y-4">
              {[
                {
                  scenario: "Geopolitical crisis",
                  detail:
                    "Gold tends to spike during wars, trade disputes, and political instability. It's the original flight-to-safety asset.",
                },
                {
                  scenario: "High inflation environments",
                  detail:
                    "Gold has a 5,000-year track record as an inflation hedge. During the 1970s inflation spike, gold rose 1,400%.",
                },
                {
                  scenario: "Short-term preservation",
                  detail:
                    "If you need to preserve capital over 1-2 years, gold's low volatility makes it much more predictable than Bitcoin.",
                },
                {
                  scenario: "Institutional portfolio allocation",
                  detail:
                    "Gold's $13 trillion market cap and deep liquidity make it suitable for large institutional allocations without moving the market.",
                },
              ].map((item) => (
                <div
                  key={item.scenario}
                  className="bg-bg-card border border-cream-10 rounded-xl p-5"
                >
                  <h3 className="text-cream font-medium mb-1">
                    {item.scenario}
                  </h3>
                  <p className="text-sm text-cream-45">{item.detail}</p>
                </div>
              ))}
            </div>
          </section>

          {/* When Bitcoin Wins */}
          <section>
            <h2 className="font-display text-3xl sm:text-4xl font-semibold text-cream mb-6">
              When Bitcoin Wins
            </h2>
            <div className="space-y-4">
              {[
                {
                  scenario: "Long-term growth (5+ year horizon)",
                  detail:
                    "Every 4-year rolling period in Bitcoin's history has been positive. For patient investors, Bitcoin has offered unmatched returns.",
                },
                {
                  scenario: "Currency debasement",
                  detail:
                    "In countries experiencing rapid currency devaluation (Argentina, Turkey, Nigeria), Bitcoin has become a popular savings vehicle due to its fixed supply.",
                },
                {
                  scenario: "Portability and censorship resistance",
                  detail:
                    "If you need to move wealth across borders or protect it from confiscation, Bitcoin's digital nature is a decisive advantage over physical gold.",
                },
                {
                  scenario: "Technological adoption curves",
                  detail:
                    "Bitcoin is still early in its adoption S-curve (~5% global penetration). As adoption grows toward gold-level ubiquity, the asymmetric upside potential remains significant.",
                },
              ].map((item) => (
                <div
                  key={item.scenario}
                  className="bg-bg-card border border-cream-10 rounded-xl p-5"
                >
                  <h3 className="text-cream font-medium mb-1">
                    {item.scenario}
                  </h3>
                  <p className="text-sm text-cream-45">{item.detail}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Portfolio Strategies */}
          <section>
            <h2 className="font-display text-3xl sm:text-4xl font-semibold text-cream mb-6">
              Portfolio Allocation Strategies
            </h2>
            <p className="text-cream-45 font-body leading-relaxed mb-6">
              Here are three common approaches to incorporating gold and Bitcoin:
            </p>
            <div className="space-y-4">
              {[
                {
                  name: "Conservative",
                  alloc: "60% stocks, 25% bonds, 10% gold, 5% cash",
                  desc: "Traditional portfolio with gold as an insurance policy. No Bitcoin exposure. Best for near-retirees or very risk-averse investors.",
                },
                {
                  name: "Balanced",
                  alloc: "55% stocks, 20% bonds, 10% gold, 5% BTC, 10% cash",
                  desc: "Gold for stability, Bitcoin for growth. This combination historically improved risk-adjusted returns vs. gold or Bitcoin alone.",
                },
                {
                  name: "Growth-Oriented",
                  alloc: "50% stocks, 15% bonds, 5% gold, 10% BTC, 20% alts/cash",
                  desc: "Higher Bitcoin allocation for investors with a long time horizon and high risk tolerance. The gold serves as a volatility dampener.",
                },
              ].map((strat) => (
                <div
                  key={strat.name}
                  className="bg-bg-card border border-cream-10 rounded-2xl p-6"
                >
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="font-display text-lg font-semibold text-cream">
                      {strat.name}
                    </h3>
                  </div>
                  <p className="text-gold-500 font-mono text-xs mb-3">
                    {strat.alloc}
                  </p>
                  <p className="text-sm text-cream-45">{strat.desc}</p>
                </div>
              ))}
            </div>
          </section>

          {/* The Complementary Case */}
          <section>
            <h2 className="font-display text-3xl sm:text-4xl font-semibold text-cream mb-6">
              The Case for Holding Both
            </h2>
            <p className="text-cream-45 font-body leading-relaxed mb-4">
              Gold and Bitcoin aren&apos;t either/or investments. They&apos;re
              both forms of sound money that exist outside the fiat system, but
              they behave differently enough to provide genuine diversification:
            </p>
            <ul className="space-y-3 text-cream-45">
              {[
                "Low correlation to each other (~0.1 average) means they don't move in lockstep",
                "Gold dampens portfolio volatility during Bitcoin drawdowns",
                "Bitcoin provides upside that gold can't match during risk-on periods",
                "Both hedge against currency debasement and money printing",
                "Together they represent the two forms of hard money: physical and digital",
              ].map((item) => (
                <li key={item} className="flex gap-3 text-sm">
                  <span className="text-gold-500 flex-shrink-0 mt-0.5">
                    &#10003;
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          </section>

          {/* FAQ */}
          <section>
            <h2 className="font-display text-3xl sm:text-4xl font-semibold text-cream mb-6">
              Frequently Asked Questions
            </h2>
            <div className="space-y-3">
              {[
                {
                  q: "Is gold or Bitcoin a better investment in 2026?",
                  a: "Neither is universally better — they serve different roles. Gold provides stability (5-15% annual volatility), while Bitcoin offers higher potential returns with higher risk (50-80% volatility). Many advisors recommend holding both.",
                },
                {
                  q: "How has Bitcoin performed vs gold over 10 years?",
                  a: "From 2016-2026, Bitcoin returned ~12,000% vs gold's ~90%. However, Bitcoin had a max drawdown of -77% compared to gold's -20%. Risk-adjusted returns depend on entry points and time horizon.",
                },
                {
                  q: "Should I sell my gold to buy Bitcoin?",
                  a: "It depends on your time horizon and risk tolerance. If you have 5+ years and can handle drawdowns, converting a portion may offer asymmetric upside. Services like Offramp make the conversion easy with a free insured shipping kit.",
                },
                {
                  q: "Can I hold both gold and Bitcoin?",
                  a: "Yes — and it's often recommended. Their low correlation (~0.1) provides genuine diversification. A common allocation is 10% gold and 5% Bitcoin alongside traditional stocks and bonds.",
                },
                {
                  q: "What's the correlation between gold and Bitcoin?",
                  a: "Historically low and variable (ranging from -0.2 to +0.3). This low correlation is what makes holding both valuable for portfolio diversification.",
                },
              ].map((faq) => (
                <details
                  key={faq.q}
                  className="group bg-bg-card border border-cream-10 rounded-xl"
                >
                  <summary className="flex items-center justify-between p-5 cursor-pointer text-cream font-medium hover:text-gold-500 transition-colors">
                    {faq.q}
                    <span className="text-cream-35 group-open:rotate-45 transition-transform text-xl ml-4">
                      +
                    </span>
                  </summary>
                  <div className="px-5 pb-5 text-sm text-cream-45 leading-relaxed">
                    {faq.a}
                  </div>
                </details>
              ))}
            </div>
          </section>

          {/* Related Posts */}
          <section>
            <h2 className="font-display text-3xl sm:text-4xl font-semibold text-cream mb-6">
              Related Posts
            </h2>
            <div className="grid sm:grid-cols-2 gap-4">
              {[
                {
                  title: "Should I Sell My Gold for Bitcoin?",
                  href: "/blog/should-i-sell-gold-for-bitcoin",
                  tag: "Decision Guide",
                },
                {
                  title: "Best Way to Convert Gold to Bitcoin",
                  href: "/blog/best-way-to-convert-gold-to-bitcoin",
                  tag: "How-To",
                },
              ].map((post) => (
                <Link
                  key={post.href}
                  href={post.href}
                  className="group bg-bg-card border border-cream-10 rounded-xl p-5 hover:border-gold-500/30 transition-colors"
                >
                  <span className="text-gold-500 font-mono text-xs">
                    {post.tag}
                  </span>
                  <h3 className="mt-2 text-cream font-medium group-hover:text-gold-500 transition-colors">
                    {post.title} &rarr;
                  </h3>
                </Link>
              ))}
            </div>
          </section>

          {/* CTA */}
          <section className="text-center">
            <div className="bg-bg-card border border-gold-500/20 rounded-2xl p-8 sm:p-12">
              <h2 className="font-display text-2xl sm:text-3xl font-semibold text-cream mb-3">
                Ready to Rebalance?
              </h2>
              <p className="text-cream-45 max-w-lg mx-auto mb-6">
                Convert some of your gold to Bitcoin with a free insured
                shipping kit. No obligation &mdash; if you don&apos;t like the
                offer, we ship your gold back free.
              </p>
              <Link
                href="/get-kit"
                className="inline-flex items-center gap-2 bg-gold-500 text-bg font-semibold px-6 py-3 rounded-lg hover:bg-gold-400 transition-colors"
              >
                Get Your Free Kit &rarr;
              </Link>
            </div>
          </section>
        </div>
      </article>
    </>
  );
}
