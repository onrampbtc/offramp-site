import Link from "next/link";

export default function MoneyPrintingPage() {
  return (
    <>
      <script
        type="application/ld+json"
        suppressHydrationWarning
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline: "Money Printing and the Case for Hard Assets",
            author: { "@type": "Person", name: "Yasmine" },
            publisher: {
              "@type": "Organization",
              name: "Offramp",
              url: "https://offramp.com",
            },
            datePublished: "2026-03-01",
            dateModified: "2026-03-01",
            description:
              "How money printing and quantitative easing reduce purchasing power and why hard assets protect your wealth.",
            mainEntityOfPage: "https://offramp.com/guide/money-printing",
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
            Money Printing and the Case for Hard Assets
          </h1>
          <p className="text-cream-45 font-body text-lg max-w-2xl mx-auto mb-4">
            How quantitative easing works, what it does to your purchasing
            power, and why gold and Bitcoin are the antidote.
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
              Money printing, or quantitative easing, increases the money
              supply and reduces the purchasing power of each dollar over time.
              Since 2020, the M2 money supply has expanded dramatically. Gold
              and Bitcoin exist as hard assets that cannot be printed,
              providing protection against this debasement.
            </p>
          </div>
        </div>
      </section>

      {/* ── Article ── */}
      <article className="px-6 pb-24">
        <div className="max-w-3xl mx-auto space-y-16">
          <section>
            <h2 className="font-display text-3xl sm:text-4xl font-semibold text-cream mb-6">
              What Is Quantitative Easing?
            </h2>
            <p className="text-cream-60 font-body leading-relaxed mb-4">
              Quantitative easing (QE) is a monetary policy tool where a
              central bank creates new money electronically and uses it to buy
              financial assets &mdash; typically government bonds and
              mortgage-backed securities. The goal is to lower interest rates,
              stimulate lending, and boost economic activity.
            </p>
            <p className="text-cream-60 font-body leading-relaxed mb-4">
              In plain language: the central bank creates money out of thin air
              and injects it into the financial system. The money does not come
              from taxes or savings. It is simply created.
            </p>
            <p className="text-cream-60 font-body leading-relaxed">
              The Federal Reserve, the European Central Bank, the Bank of
              Japan, and the Bank of England have all used QE extensively since
              2008. Each round increases the total money supply, diluting the
              value of every dollar, euro, yen, and pound already in
              circulation.
            </p>
          </section>

          <section>
            <h2 className="font-display text-3xl sm:text-4xl font-semibold text-cream mb-6">
              The M2 Money Supply Expansion
            </h2>
            <p className="text-cream-60 font-body leading-relaxed mb-4">
              M2 is the broadest commonly cited measure of the money supply.
              It includes cash, checking deposits, savings deposits, money
              market funds, and other near-money assets.
            </p>
            <p className="text-cream-60 font-body leading-relaxed mb-4">
              In January 2020, US M2 stood at approximately $15.4 trillion.
              By early 2022, it had surged to over $21.7 trillion &mdash; an
              increase of more than 40% in just two years. This was the
              fastest expansion of the money supply in modern American history.
            </p>
            <p className="text-cream-60 font-body leading-relaxed">
              When you increase the supply of something by 40%, each unit
              becomes less valuable. This is the fundamental mechanism of
              inflation: too many dollars chasing too few goods.
            </p>
          </section>

          <section>
            <h2 className="font-display text-3xl sm:text-4xl font-semibold text-cream mb-6">
              How It Affects Your Purchasing Power
            </h2>
            <p className="text-cream-60 font-body leading-relaxed mb-4">
              Inflation is often presented as prices going up. A more accurate
              description is that the value of your dollars is going down. When
              milk costs $5 instead of $3, the milk has not changed. The
              dollar has weakened.
            </p>
            <p className="text-cream-60 font-body leading-relaxed mb-4">
              Since 1971, when the US abandoned the gold standard, the dollar
              has lost over 85% of its purchasing power. A dollar in 1971
              bought what roughly $7.50 buys today. This is not a conspiracy.
              It is the mathematical consequence of an ever-expanding money
              supply.
            </p>
            <p className="text-cream-60 font-body leading-relaxed">
              Savings accounts, bonds, and cash holdings are all losing
              purchasing power every year. The interest rates offered by banks
              almost never keep up with the real rate of inflation, meaning
              your savings are shrinking in real terms even as the nominal
              number stays the same.
            </p>
          </section>

          <section>
            <h2 className="font-display text-3xl sm:text-4xl font-semibold text-cream mb-6">
              Why Hard Assets Are the Answer
            </h2>
            <p className="text-cream-60 font-body leading-relaxed mb-4">
              Hard assets are assets whose supply cannot be easily increased.
              Gold is hard because mining more of it requires enormous capital
              and effort. Bitcoin is hard because its supply is capped at
              21&nbsp;million coins by unalterable code.
            </p>
            <p className="text-cream-60 font-body leading-relaxed mb-4">
              When the money supply increases, the price of hard assets rises
              in nominal terms. This is not because gold or Bitcoin have become
              more valuable in absolute terms &mdash; it is because the
              dollars used to measure them have become less valuable.
            </p>
            <p className="text-cream-60 font-body leading-relaxed">
              Owning hard assets is not speculation. It is self-defense against
              a system designed to erode your purchasing power over time. Gold
              has served this function for millennia. Bitcoin is the digital
              complement for the modern era.
            </p>
          </section>

          <section>
            <h2 className="font-display text-3xl sm:text-4xl font-semibold text-cream mb-6">
              The Cantillon Effect
            </h2>
            <p className="text-cream-60 font-body leading-relaxed mb-4">
              Not everyone is affected equally by money printing. Those who
              receive new money first &mdash; banks, large corporations,
              government contractors &mdash; benefit because they spend it
              before prices adjust. Those who receive it last &mdash; wage
              earners, savers, retirees &mdash; are hurt because they face
              higher prices without corresponding income increases.
            </p>
            <p className="text-cream-60 font-body leading-relaxed">
              This is known as the Cantillon Effect, named after 18th-century
              economist Richard Cantillon. It explains why money printing
              widens wealth inequality: asset owners benefit from rising prices,
              while wage earners fall behind. Hard assets like gold and Bitcoin
              help ordinary people protect themselves from this dynamic.
            </p>
          </section>

          {/* Internal Links */}
          <section className="space-y-4">
            <Link
              href="/guide/currency-debasement"
              className="block border border-gold-500/20 rounded-xl p-6 hover:border-gold-500/40 transition-colors bg-bg-card"
            >
              <p className="text-gold-500 font-mono text-xs tracking-widest uppercase mb-2">
                Related
              </p>
              <p className="text-cream font-display text-xl">
                Currency Debasement: A 5,000 Year History &rarr;
              </p>
              <p className="text-cream-45 text-sm mt-1">
                How governments have debased currencies since ancient Rome.
              </p>
            </Link>
            <Link
              href="/guide/store-of-value"
              className="block border border-gold-500/20 rounded-xl p-6 hover:border-gold-500/40 transition-colors bg-bg-card"
            >
              <p className="text-gold-500 font-mono text-xs tracking-widest uppercase mb-2">
                Deep Dive
              </p>
              <p className="text-cream font-display text-xl">
                What Is a Store of Value? &rarr;
              </p>
              <p className="text-cream-45 text-sm mt-1">
                The properties that make gold and Bitcoin reliable stores of
                wealth.
              </p>
            </Link>
            <Link
              href="/gold-to-bitcoin"
              className="block border border-gold-500/20 rounded-xl p-6 hover:border-gold-500/40 transition-colors bg-bg-card"
            >
              <p className="text-gold-500 font-mono text-xs tracking-widest uppercase mb-2">
                Action
              </p>
              <p className="text-cream font-display text-xl">
                Convert Gold to Bitcoin &rarr;
              </p>
              <p className="text-cream-45 text-sm mt-1">
                Bridge from physical gold to digital hard money.
              </p>
            </Link>
          </section>

          {/* CTA */}
          <section className="text-center py-16 border-t border-cream-08">
            <h2 className="font-display text-3xl sm:text-4xl font-semibold text-cream mb-4">
              Protect Your Purchasing Power
            </h2>
            <p className="text-cream-45 font-body mb-8 max-w-lg mx-auto">
              Convert idle gold into Bitcoin or cash. Offramp pays 80%+ of
              spot value with free insured shipping.
            </p>
            <Link
              href="/sell"
              className="inline-block bg-gold-500 text-bg font-body font-semibold px-8 py-4 rounded-lg hover:bg-gold-400 transition-colors"
            >
              Sell Your Gold
            </Link>
          </section>
        </div>
      </article>
    </>
  );
}
