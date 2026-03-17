import Link from "next/link";

export default function IsBitcoinTheNewGoldPage() {
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
            Is Bitcoin the New Gold? What the Data Says in 2026
          </h1>
          <p className="text-cream-45 font-body text-lg max-w-2xl mx-auto mb-4">
            The &ldquo;digital gold&rdquo; narrative is Bitcoin&apos;s most
            powerful meme. But does the data actually support it? Here&apos;s an
            evidence-based analysis of where the comparison holds up &mdash;
            and where it breaks down.
          </p>
          <p className="text-cream-35 font-mono text-xs tracking-wider">
            March 15, 2026 &middot; By Yasmine &middot; 11 min read
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
              Bitcoin genuinely shares gold&apos;s core monetary properties
              &mdash; scarcity, durability, and independence from central
              authority &mdash; while adding digital advantages that gold cannot
              match. But it hasn&apos;t yet proven itself as a stability anchor
              in the way gold has over 5,000 years. The most accurate framing:
              Bitcoin is a new form of gold, not a replacement for it.
            </p>
          </div>
        </div>
      </section>

      {/* Article */}
      <article className="px-6 pb-24">
        <div className="max-w-3xl mx-auto space-y-16">
          {/* The Digital Gold Narrative */}
          <section>
            <h2 className="font-display text-3xl sm:text-4xl font-semibold text-cream mb-6">
              The &ldquo;Digital Gold&rdquo; Narrative
            </h2>
            <p className="text-cream-45 font-body leading-relaxed mb-4">
              When people call Bitcoin &ldquo;digital gold,&rdquo; they&apos;re
              making a specific claim: that Bitcoin serves the same economic
              function as gold (scarce, durable store of value outside government
              control) but in a digital format better suited to the modern world.
            </p>
            <p className="text-cream-45 font-body leading-relaxed">
              This narrative has become increasingly mainstream. BlackRock CEO
              Larry Fink called Bitcoin &ldquo;an international asset&rdquo;
              and &ldquo;digital gold&rdquo; before launching the world&apos;s
              largest Bitcoin ETF. But narratives aren&apos;t data. Let&apos;s
              examine each claim.
            </p>
          </section>

          {/* Scarcity Comparison */}
          <section>
            <h2 className="font-display text-3xl sm:text-4xl font-semibold text-cream mb-6">
              Scarcity: 21 Million vs Geology
            </h2>
            <div className="bg-bg-card border border-cream-10 rounded-xl overflow-x-auto mb-6">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-cream-10">
                    <th className="text-left p-4 text-cream font-medium">
                      Metric
                    </th>
                    <th className="p-4 text-cream font-medium">Gold</th>
                    <th className="p-4 text-cream font-medium">Bitcoin</th>
                  </tr>
                </thead>
                <tbody className="text-cream-45">
                  {[
                    ["Total supply", "~209,000 tonnes", "21,000,000 BTC"],
                    ["Annual new supply", "~3,300 tonnes (1.5%)", "~164,250 BTC (0.83%)"],
                    ["Supply verifiability", "Estimated (no exact count)", "Exact (blockchain)"],
                    ["Supply cap", "No hard cap (but geology limits)", "Hard cap (code-enforced)"],
                    ["Stock-to-flow ratio", "~60 (high)", "~120 (higher post-2024 halving)"],
                    ["Can supply increase?", "Yes, with more mining", "No, mathematically impossible"],
                  ].map((row) => (
                    <tr
                      key={row[0]}
                      className="border-b border-cream-10 last:border-0"
                    >
                      <td className="p-4 text-cream font-medium">{row[0]}</td>
                      <td className="p-4 text-center">{row[1]}</td>
                      <td className="p-4 text-center text-gold-500">
                        {row[2]}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="text-cream-45 font-body leading-relaxed">
              <strong className="text-cream">Verdict:</strong> Bitcoin wins on
              scarcity verifiability and absoluteness. Gold wins on
              demonstrated scarcity value over millennia. Both are genuinely
              scarce in ways fiat currencies are not.
            </p>
          </section>

          {/* Store of Value Test */}
          <section>
            <h2 className="font-display text-3xl sm:text-4xl font-semibold text-cream mb-6">
              The Store of Value Test
            </h2>
            <p className="text-cream-45 font-body leading-relaxed mb-6">
              A store of value must preserve purchasing power over time. Let&apos;s
              compare how each has performed:
            </p>
            <div className="space-y-4">
              {[
                {
                  period: "Short-term (1 year)",
                  gold: "Gold: +8% (stable, predictable)",
                  btc: "BTC: +120% (but had -77% in 2022)",
                  winner: "Gold — more reliable over short periods",
                },
                {
                  period: "Medium-term (5 years)",
                  gold: "Gold: +45% (steady uptrend)",
                  btc: "BTC: +380% (with violent drawdowns)",
                  winner: "Depends on risk tolerance",
                },
                {
                  period: "Long-term (10+ years)",
                  gold: "Gold: +90% (beat inflation)",
                  btc: "BTC: +12,000% (extraordinary)",
                  winner: "Bitcoin — but survivorship bias caveat",
                },
                {
                  period: "Very long-term (50+ years)",
                  gold: "Gold: ~35x (1974-2026)",
                  btc: "BTC: N/A (only 17 years of data)",
                  winner: "Gold — the only one with data",
                },
              ].map((item) => (
                <div
                  key={item.period}
                  className="bg-bg-card border border-cream-10 rounded-xl p-5"
                >
                  <h3 className="text-cream font-medium mb-2">
                    {item.period}
                  </h3>
                  <div className="grid sm:grid-cols-2 gap-2 text-sm text-cream-45 mb-2">
                    <p>{item.gold}</p>
                    <p>{item.btc}</p>
                  </div>
                  <p className="text-xs text-gold-500 font-mono">
                    {item.winner}
                  </p>
                </div>
              ))}
            </div>
          </section>

          {/* Institutional Adoption */}
          <section>
            <h2 className="font-display text-3xl sm:text-4xl font-semibold text-cream mb-6">
              Institutional Adoption Timeline
            </h2>
            <p className="text-cream-45 font-body leading-relaxed mb-6">
              The institutional adoption of Bitcoin as &ldquo;digital
              gold&rdquo; has accelerated dramatically:
            </p>
            <div className="space-y-3">
              {[
                { year: "2020", event: "MicroStrategy begins converting treasury to Bitcoin ($250M initial)" },
                { year: "2021", event: "Tesla adds $1.5B in Bitcoin to balance sheet; El Salvador adopts BTC as legal tender" },
                { year: "2022", event: "Fidelity launches Bitcoin 401(k) option for employers" },
                { year: "2024", event: "BlackRock's IBIT becomes largest Bitcoin ETF ($50B+ AUM); spot Bitcoin ETFs approved" },
                { year: "2025", event: "Major pension funds begin 1-2% Bitcoin allocations; MicroStrategy holds $40B+ in BTC" },
                { year: "2026", event: "Bitcoin ETFs surpass gold ETFs in daily trading volume; sovereign wealth funds disclose BTC holdings" },
              ].map((item) => (
                <div
                  key={item.year}
                  className="flex gap-4 items-start bg-bg-card border border-cream-10 rounded-xl p-4"
                >
                  <span className="flex-shrink-0 text-gold-500 font-mono text-sm font-bold">
                    {item.year}
                  </span>
                  <p className="text-sm text-cream-45">{item.event}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Where Comparison Holds */}
          <section>
            <h2 className="font-display text-3xl sm:text-4xl font-semibold text-cream mb-6">
              Where the Comparison Holds Up
            </h2>
            <div className="space-y-3">
              {[
                "Both have a fixed or limited supply outside government control",
                "Both serve as hedges against currency debasement and inflation",
                "Both are globally liquid 24/7 (gold via ETFs, Bitcoin natively)",
                "Both require no counterparty — you can hold them directly",
                "Both have been adopted by institutions as portfolio diversifiers",
                "Both have a 'halvening' dynamic (gold: declining ore grades; Bitcoin: programmatic halving)",
              ].map((point) => (
                <div
                  key={point}
                  className="flex gap-3 items-start"
                >
                  <span className="text-green-400 flex-shrink-0 mt-0.5">
                    &#10003;
                  </span>
                  <p className="text-cream-45 text-sm">{point}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Where Comparison Breaks Down */}
          <section>
            <h2 className="font-display text-3xl sm:text-4xl font-semibold text-cream mb-6">
              Where the Comparison Breaks Down
            </h2>
            <div className="space-y-3">
              {[
                "Gold has 5,000 years of trust; Bitcoin has 17 years",
                "Gold's volatility is 5-15%/year; Bitcoin's is 50-80%",
                "Gold has physical utility (jewelry, electronics); Bitcoin is purely digital",
                "Gold is held by every central bank; Bitcoin is held by few",
                "Gold survives without electricity; Bitcoin requires internet infrastructure",
                "Gold's cultural and psychological significance is deeply embedded across civilizations",
              ].map((point) => (
                <div
                  key={point}
                  className="flex gap-3 items-start"
                >
                  <span className="text-red-400 flex-shrink-0 mt-0.5">
                    &#10007;
                  </span>
                  <p className="text-cream-45 text-sm">{point}</p>
                </div>
              ))}
            </div>
          </section>

          {/* The Sound Money Thesis */}
          <section>
            <h2 className="font-display text-3xl sm:text-4xl font-semibold text-cream mb-6">
              The Sound Money Thesis: Both, Not Either/Or
            </h2>
            <p className="text-cream-45 font-body leading-relaxed mb-4">
              The most nuanced take on &ldquo;Bitcoin as digital gold&rdquo;
              isn&apos;t that Bitcoin replaces gold &mdash; it&apos;s that both
              represent the same fundamental idea: money should be scarce,
              durable, and independent of government.
            </p>
            <p className="text-cream-45 font-body leading-relaxed mb-4">
              Gold is the physical version, proven over 5,000 years. Bitcoin is
              the digital version, proving itself in real-time. Both exist
              because people have always sought money that can&apos;t be
              debased by those in power.
            </p>
            <div className="bg-bg-card border border-gold-500/20 rounded-2xl p-6">
              <p className="text-cream font-body text-lg leading-relaxed italic">
                &ldquo;Gold is the money of kings, silver is the money of
                gentlemen, barter is the money of peasants, debt is the money of
                slaves &mdash; and Bitcoin is the money of the internet.&rdquo;
              </p>
            </div>
          </section>

          {/* FAQ */}
          <section>
            <h2 className="font-display text-3xl sm:text-4xl font-semibold text-cream mb-6">
              Frequently Asked Questions
            </h2>
            <div className="space-y-3">
              {[
                {
                  q: "Is Bitcoin really 'digital gold'?",
                  a: "Bitcoin shares gold's core monetary properties (scarcity, durability, independence) while adding digital advantages (portability, programmability). The comparison is strong on fundamentals but Bitcoin hasn't yet matched gold's 5,000-year track record as a stability anchor.",
                },
                {
                  q: "Will Bitcoin replace gold?",
                  a: "Unlikely. Gold's $13+ trillion market cap, cultural significance, and institutional entrenchment make it irreplaceable. More likely, Bitcoin will grow alongside gold as a complementary digital store of value.",
                },
                {
                  q: "How does Bitcoin's scarcity compare to gold?",
                  a: "Bitcoin's scarcity is mathematically absolute (21M cap, code-enforced). Gold's scarcity is geological (~1.5% annual increase). Bitcoin's is more verifiable and predictable; gold's has been demonstrated over millennia.",
                },
                {
                  q: "What do institutions think about Bitcoin vs gold?",
                  a: "Institutions increasingly view them as complementary. BlackRock offers both Bitcoin and gold ETFs. The consensus is moving toward 'both, not either/or' for portfolio allocation.",
                },
                {
                  q: "Should I hold Bitcoin instead of gold?",
                  a: "Most advisors recommend both — 10% gold for stability + 5% Bitcoin for growth. If you want to rebalance, Offramp lets you convert gold directly to Bitcoin with a free insured shipping kit.",
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

          {/* Related */}
          <section>
            <h2 className="font-display text-3xl sm:text-4xl font-semibold text-cream mb-6">
              Related Posts
            </h2>
            <div className="grid sm:grid-cols-2 gap-4">
              {[
                {
                  title: "Gold vs Bitcoin Investment Comparison",
                  href: "/blog/gold-vs-bitcoin-investment-comparison",
                  tag: "Analysis",
                },
                {
                  title: "Should I Sell My Gold for Bitcoin?",
                  href: "/blog/should-i-sell-gold-for-bitcoin",
                  tag: "Decision Guide",
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
                Convert Gold to Bitcoin
              </h2>
              <p className="text-cream-45 max-w-lg mx-auto mb-6">
                Own both forms of sound money. Convert some of your gold to
                Bitcoin with a free insured shipping kit &mdash; no obligation.
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
