import Link from "next/link";

export default function ShouldISellGoldForBitcoinPage() {
  return (
    <>
      {/* ── Hero ── */}
      <section className="relative pt-32 pb-20 px-6">
        <div className="absolute inset-0 bg-hero-radial pointer-events-none" />
        <div className="relative max-w-3xl mx-auto text-center">
          <p className="text-gold-500 font-mono text-sm tracking-widest uppercase mb-4">
            Blog
          </p>
          <h1 className="font-display text-4xl sm:text-5xl md:text-6xl font-semibold text-cream leading-tight mb-6">
            Should I Sell My Gold for Bitcoin?
          </h1>
          <p className="text-cream-45 font-body text-lg max-w-2xl mx-auto mb-4">
            Gold and Bitcoin are both stores of value &mdash; but they behave
            very differently. Here&apos;s a data-driven framework for deciding
            whether converting gold to BTC makes sense for your situation.
          </p>
          <p className="text-cream-35 font-mono text-xs tracking-wider">
            March 14, 2026 &middot; By Yasmine &middot; 8 min read
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
              Selling gold for Bitcoin makes sense if you have a 5+ year
              investment horizon, already maintain an emergency fund, and want
              exposure to a scarce digital asset. It does not make sense if you
              need the money within 1&ndash;2 years or cannot tolerate 30&ndash;50%
              drawdowns.
            </p>
          </div>
        </div>
      </section>

      {/* ── Article ── */}
      <article className="px-6 pb-24">
        <div className="max-w-3xl mx-auto space-y-16">
          {/* The Big Question */}
          <section>
            <h2 className="font-display text-3xl sm:text-4xl font-semibold text-cream mb-6">
              Why People Are Asking This Question in 2026
            </h2>
            <p className="text-cream-60 font-body leading-relaxed mb-4">
              Gold recently crossed $3,000 per ounce for the first time in
              history. Bitcoin has spent most of 2025&ndash;2026 above $80,000.
              Both assets are at or near all-time highs, which means both gold
              holders and Bitcoin believers are asking the same question: is now
              the right time to swap?
            </p>
            <p className="text-cream-60 font-body leading-relaxed mb-4">
              The answer depends entirely on your financial situation, time
              horizon, and beliefs about where value flows next. This is not a
              question with a universal answer. But there is a framework that
              helps you arrive at the right answer for you.
            </p>
            <p className="text-cream-60 font-body leading-relaxed">
              Let&apos;s walk through it.
            </p>
          </section>

          {/* Framework */}
          <section>
            <h2 className="font-display text-3xl sm:text-4xl font-semibold text-cream mb-6">
              The Decision Framework: 5 Questions to Ask Yourself
            </h2>
            <div className="space-y-6">
              {[
                {
                  num: "01",
                  q: "What is my time horizon?",
                  a: "Bitcoin has outperformed gold in every 4+ year rolling window since 2013. But it has also had drawdowns of 50-80% within single years. If you need the money in under 2 years, gold is the safer hold. If you're investing for 5+ years, Bitcoin's risk-reward ratio has historically been far superior.",
                },
                {
                  num: "02",
                  q: "Do I already have an emergency fund?",
                  a: "Never convert your last line of financial defense into a volatile asset. If your gold is your safety net, keep it. Bitcoin is not a substitute for liquid emergency savings. But if your gold is an investment sitting in a drawer or a safe deposit box — gold you won't touch for years — converting some to Bitcoin is a reasonable portfolio decision.",
                },
                {
                  num: "03",
                  q: "What percentage of my net worth is in gold?",
                  a: "If gold is 50%+ of your portfolio, you're heavily concentrated in a single asset class. Diversifying some into Bitcoin reduces single-asset risk while keeping your allocation in hard, scarce assets. If gold is only 5% of your portfolio, the decision matters less — either way your risk profile doesn't change dramatically.",
                },
                {
                  num: "04",
                  q: "Do I believe in Bitcoin's long-term thesis?",
                  a: "This isn't a FOMO question. It's a conviction question. Bitcoin's value proposition is digital scarcity — 21 million coins, ever. If you believe the world is moving toward digital stores of value and that Bitcoin will capture some of gold's $15 trillion market cap, converting gold to BTC is a rational bet. If you don't, it isn't.",
                },
                {
                  num: "05",
                  q: "Can I handle 30-50% drawdowns?",
                  a: "Bitcoin drops 30%+ regularly. Gold rarely drops more than 15% in a year. If you will panic-sell during a Bitcoin crash, you'll lock in losses and wish you'd kept the gold. Only convert money you genuinely won't touch during a drawdown.",
                },
              ].map((item) => (
                <div
                  key={item.num}
                  className="bg-bg-card border border-cream-08 rounded-xl p-6"
                >
                  <div className="flex items-start gap-4">
                    <span className="text-gold-500 font-mono text-sm font-bold mt-1 shrink-0">
                      {item.num}
                    </span>
                    <div>
                      <h3 className="text-cream font-body font-semibold text-lg mb-2">
                        {item.q}
                      </h3>
                      <p className="text-cream-60 font-body leading-relaxed">
                        {item.a}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Performance Comparison */}
          <section>
            <h2 className="font-display text-3xl sm:text-4xl font-semibold text-cream mb-6">
              Gold vs Bitcoin: Performance by the Numbers
            </h2>
            <p className="text-cream-60 font-body leading-relaxed mb-6">
              Historical performance doesn&apos;t guarantee future results. But
              it provides essential context for the decision.
            </p>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="border-b border-cream-15">
                    <th className="text-left py-3 pr-4 text-cream-35 font-mono text-xs tracking-widest uppercase">
                      Metric
                    </th>
                    <th className="text-right py-3 px-4 text-cream-35 font-mono text-xs tracking-widest uppercase">
                      Gold
                    </th>
                    <th className="text-right py-3 pl-4 text-cream-35 font-mono text-xs tracking-widest uppercase">
                      Bitcoin
                    </th>
                  </tr>
                </thead>
                <tbody className="text-cream-60 font-body">
                  {[
                    ["10-Year Return (2016–2026)", "+95%", "+8,400%"],
                    ["5-Year Return (2021–2026)", "+62%", "+320%"],
                    ["Worst Single-Year Drawdown", "-28% (2013)", "-65% (2022)"],
                    ["Max Supply", "~205,000 tonnes (mined)", "21,000,000 BTC"],
                    ["Annual New Supply (Inflation)", "~1.5%/year", "~0.8%/year (post-halving)"],
                    ["Market Cap", "~$15 trillion", "~$1.7 trillion"],
                    ["Portability", "Physical, heavy", "Digital, instant"],
                    ["Custody", "Vaults, safes, dealers", "Self-custody or exchange"],
                  ].map(([metric, gold, btc]) => (
                    <tr key={metric} className="border-b border-cream-08">
                      <td className="py-3 pr-4 font-medium text-cream">
                        {metric}
                      </td>
                      <td className="text-right py-3 px-4 font-mono text-sm">
                        {gold}
                      </td>
                      <td className="text-right py-3 pl-4 font-mono text-sm text-gold-400">
                        {btc}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          {/* When to sell */}
          <section>
            <h2 className="font-display text-3xl sm:text-4xl font-semibold text-cream mb-6">
              When Selling Gold for Bitcoin Makes Sense
            </h2>
            <p className="text-cream-60 font-body leading-relaxed mb-4">
              Based on the framework above, selling gold for Bitcoin tends to
              make the most sense when:
            </p>
            <ul className="space-y-3 mb-6">
              {[
                "You have a 5+ year investment horizon and won't need the money soon",
                "Your gold is an investment holding, not an emergency fund",
                "You believe in Bitcoin's long-term value proposition as digital gold",
                "You're comfortable with significant short-term volatility",
                "You want to diversify out of a heavy gold position into another scarce asset",
                "You're looking for higher potential returns and accept higher risk",
              ].map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-3 text-cream-60 font-body"
                >
                  <svg
                    className="h-5 w-5 text-score-green shrink-0 mt-0.5"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </section>

          {/* When NOT to sell */}
          <section>
            <h2 className="font-display text-3xl sm:text-4xl font-semibold text-cream mb-6">
              When You Should Keep Your Gold
            </h2>
            <p className="text-cream-60 font-body leading-relaxed mb-4">
              There are legitimate reasons to hold gold instead of converting to
              Bitcoin:
            </p>
            <ul className="space-y-3 mb-6">
              {[
                "You need the money within 1-2 years for a specific purpose",
                "Your gold serves as your emergency financial safety net",
                "You can't tolerate watching your investment drop 30-50% in a bad year",
                "You don't have conviction in Bitcoin's long-term thesis",
                "You prefer the stability and 5,000-year track record of gold",
                "You're already heavily exposed to Bitcoin or crypto",
              ].map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-3 text-cream-60 font-body"
                >
                  <svg
                    className="h-5 w-5 text-red-400 shrink-0 mt-0.5"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={2}
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </section>

          {/* The "Both" Approach */}
          <section>
            <h2 className="font-display text-3xl sm:text-4xl font-semibold text-cream mb-6">
              The &ldquo;Both&rdquo; Approach: Partial Conversion
            </h2>
            <p className="text-cream-60 font-body leading-relaxed mb-4">
              You don&apos;t have to go all-in either way. Many investors are
              choosing a barbell strategy: keep a portion of gold for stability
              and convert a portion to Bitcoin for growth potential.
            </p>
            <p className="text-cream-60 font-body leading-relaxed mb-4">
              A common approach is converting 20&ndash;50% of a gold position to
              Bitcoin while keeping the rest in physical gold. This gives you
              exposure to Bitcoin&apos;s upside while maintaining gold&apos;s
              stability as a floor.
            </p>
            <p className="text-cream-60 font-body leading-relaxed">
              The key is that both gold and Bitcoin are hard money. Both have
              limited supply. Both exist outside the traditional banking system.
              They are more alike than different &mdash; but their risk-reward
              profiles suit different needs.
            </p>
          </section>

          {/* How to Actually Do It */}
          <section>
            <h2 className="font-display text-3xl sm:text-4xl font-semibold text-cream mb-6">
              How to Convert Gold to Bitcoin (If You Decide Yes)
            </h2>
            <p className="text-cream-60 font-body leading-relaxed mb-4">
              If you&apos;ve worked through the framework and decided to convert
              some gold to Bitcoin, the process is simpler than you might think:
            </p>
            <div className="space-y-4">
              {[
                {
                  step: "1",
                  title: "Request a free shipping kit",
                  desc: "Offramp sends you a free insured FedEx shipping kit with everything you need to safely mail your gold.",
                },
                {
                  step: "2",
                  title: "Ship your gold",
                  desc: "Pack your gold items in the kit and drop it at any FedEx location. Fully insured, tracked, and free.",
                },
                {
                  step: "3",
                  title: "XRF assay on video",
                  desc: "We test every item with an XRF spectrometer and record the entire process on video so you can verify.",
                },
                {
                  step: "4",
                  title: "Receive Bitcoin",
                  desc: "Accept your offer and Bitcoin is sent directly to your wallet. No exchange account needed.",
                },
              ].map((item) => (
                <div
                  key={item.step}
                  className="flex items-start gap-4 bg-bg-card border border-cream-08 rounded-xl p-6"
                >
                  <span className="bg-gold-gradient text-bg font-mono font-bold text-sm h-8 w-8 rounded-lg flex items-center justify-center shrink-0">
                    {item.step}
                  </span>
                  <div>
                    <h3 className="text-cream font-body font-semibold mb-1">
                      {item.title}
                    </h3>
                    <p className="text-cream-60 font-body text-sm leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* FAQ */}
          <section>
            <h2 className="font-display text-3xl sm:text-4xl font-semibold text-cream mb-6">
              Frequently Asked Questions
            </h2>
            <div className="space-y-4">
              {[
                {
                  q: "Should I sell my gold for Bitcoin?",
                  a: "It depends on your financial goals, time horizon, and risk tolerance. If you believe in Bitcoin's long-term appreciation and already have a diversified portfolio, converting some gold to BTC can make sense. If you need stability or liquidity within 1-2 years, holding gold may be smarter.",
                },
                {
                  q: "Is Bitcoin a better store of value than gold?",
                  a: "Bitcoin has outperformed gold significantly over the past decade in total returns, but with much higher volatility. Gold provides stability and thousands of years of track record. Many investors hold both as complementary stores of value.",
                },
                {
                  q: "How do I convert physical gold to Bitcoin?",
                  a: "The simplest method is to sell your gold to a buyer like Offramp that offers Bitcoin payouts. You mail in your gold, it's assayed and valued, and you receive Bitcoin directly to your wallet — no need to sell gold for cash and then buy BTC separately.",
                },
                {
                  q: "What are the tax implications of selling gold for Bitcoin?",
                  a: "Selling gold is a taxable event — you may owe capital gains tax on the difference between your cost basis and the sale price. Receiving Bitcoin instead of cash does not change the tax treatment. Consult a tax professional for your specific situation.",
                },
              ].map((item) => (
                <div
                  key={item.q}
                  className="bg-bg-card border border-cream-08 rounded-xl p-6"
                >
                  <h3 className="text-cream font-body font-semibold mb-2">
                    {item.q}
                  </h3>
                  <p className="text-cream-60 font-body text-sm leading-relaxed">
                    {item.a}
                  </p>
                </div>
              ))}
            </div>
          </section>

          {/* Internal Links */}
          <section className="space-y-4">
            <Link
              href="/sell-gold-for-bitcoin"
              className="block border border-gold-500/20 rounded-xl p-6 hover:border-gold-500/40 transition-colors bg-bg-card"
            >
              <p className="text-gold-500 font-mono text-xs tracking-widest uppercase mb-2">
                Service
              </p>
              <p className="text-cream font-display text-xl">
                Sell Gold for Bitcoin with Offramp &rarr;
              </p>
              <p className="text-cream-45 text-sm mt-1">
                Free insured shipping. XRF assay on video. BTC to your wallet.
              </p>
            </Link>
            <Link
              href="/gold-to-bitcoin"
              className="block border border-gold-500/20 rounded-xl p-6 hover:border-gold-500/40 transition-colors bg-bg-card"
            >
              <p className="text-gold-500 font-mono text-xs tracking-widest uppercase mb-2">
                Calculator
              </p>
              <p className="text-cream font-display text-xl">
                Gold to Bitcoin Calculator &rarr;
              </p>
              <p className="text-cream-45 text-sm mt-1">
                See exactly how much BTC your gold is worth at today&apos;s price.
              </p>
            </Link>
            <Link
              href="/blog/best-way-to-convert-gold-to-bitcoin"
              className="block border border-gold-500/20 rounded-xl p-6 hover:border-gold-500/40 transition-colors bg-bg-card"
            >
              <p className="text-gold-500 font-mono text-xs tracking-widest uppercase mb-2">
                Related Article
              </p>
              <p className="text-cream font-display text-xl">
                The Best Way to Convert Gold to Bitcoin &rarr;
              </p>
              <p className="text-cream-45 text-sm mt-1">
                Compare every conversion method side by side.
              </p>
            </Link>
            <Link
              href="/guide/gold-vs-bitcoin-investment"
              className="block border border-gold-500/20 rounded-xl p-6 hover:border-gold-500/40 transition-colors bg-bg-card"
            >
              <p className="text-gold-500 font-mono text-xs tracking-widest uppercase mb-2">
                Guide
              </p>
              <p className="text-cream font-display text-xl">
                Gold vs Bitcoin as an Investment &rarr;
              </p>
              <p className="text-cream-45 text-sm mt-1">
                Deep-dive comparison of both assets for long-term investors.
              </p>
            </Link>
          </section>

          {/* CTA */}
          <section className="text-center py-16 border-t border-cream-08">
            <h2 className="font-display text-3xl sm:text-4xl font-semibold text-cream mb-4">
              Ready to Convert Gold to Bitcoin?
            </h2>
            <p className="text-cream-45 font-body mb-8 max-w-lg mx-auto">
              Offramp pays 80%+ of spot value and sends Bitcoin directly to your
              wallet. Free insured shipping. No exchange account needed.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/get-kit"
                className="inline-block bg-gold-gradient text-bg font-body font-semibold px-8 py-4 rounded-xl hover:shadow-lg hover:shadow-gold-400/20 transition-all"
              >
                Get Free Shipping Kit
              </Link>
              <Link
                href="/gold-to-bitcoin"
                className="inline-block border-2 border-gold-500 text-gold-400 font-body font-semibold px-8 py-4 rounded-xl hover:bg-gold-500/10 transition-all"
              >
                Gold &rarr; BTC Calculator
              </Link>
            </div>
          </section>
        </div>
      </article>
    </>
  );
}
