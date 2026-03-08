import Link from "next/link";

export default function HardMoneyPage() {
  return (
    <>
      <script
        type="application/ld+json"
        suppressHydrationWarning
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline:
              "Hard Money: From the Gold Standard to the Bitcoin Standard",
            author: { "@type": "Person", name: "Yasmine" },
            publisher: {
              "@type": "Organization",
              name: "Offramp",
              url: "https://offrampgold.com",
            },
            datePublished: "2026-03-01",
            dateModified: "2026-03-01",
            description:
              "The evolution of hard money from ancient gold to the gold standard to Bitcoin, and why sound money matters.",
            mainEntityOfPage: "https://offrampgold.com/guide/hard-money",
          }),
        }}
      />

      {/* ── Hero ── */}
      <section className="relative pt-32 pb-20 px-6">
        <div className="absolute inset-0 bg-hero-radial pointer-events-none" />
        <div className="relative max-w-3xl mx-auto text-center">
          <p className="text-gold-500 font-mono text-sm tracking-widest uppercase mb-4">
            Thesis
          </p>
          <h1 className="font-display text-4xl sm:text-5xl md:text-6xl font-semibold text-cream leading-tight mb-6">
            Hard Money: From the Gold Standard to the Bitcoin Standard
          </h1>
          <p className="text-cream-45 font-body text-lg max-w-2xl mx-auto mb-4">
            Throughout history, civilizations that adopted hard money thrived.
            Those that abandoned it declined. The pattern is unbroken.
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
              Hard money is money whose supply cannot be easily increased. Gold
              was the original hard money &mdash; scarce, durable, and resistant
              to manipulation. The gold standard formalized this principle.
              Bitcoin carries it into the digital age with a mathematically
              fixed supply of 21&nbsp;million coins. Hard money protects
              purchasing power; soft money destroys it.
            </p>
          </div>
        </div>
      </section>

      {/* ── Article ── */}
      <article className="px-6 pb-24">
        <div className="max-w-3xl mx-auto space-y-16">
          <section>
            <h2 className="font-display text-3xl sm:text-4xl font-semibold text-cream mb-6">
              What Makes Money &ldquo;Hard&rdquo;?
            </h2>
            <p className="text-cream-60 font-body leading-relaxed mb-4">
              The concept of monetary hardness comes from the stock-to-flow
              ratio: the existing supply (stock) divided by the annual new
              production (flow). The higher this ratio, the harder the money.
              An asset with a high stock-to-flow ratio cannot be diluted easily,
              which means its holders are protected from supply inflation.
            </p>
            <p className="text-cream-60 font-body leading-relaxed mb-4">
              Gold has the highest stock-to-flow ratio of any physical
              commodity. All the gold ever mined still exists &mdash;
              approximately 205,000 tonnes. Annual production adds about
              3,500 tonnes, or roughly 1.7% per year. It would take over
              60 years of mining at current rates to double the existing supply.
            </p>
            <p className="text-cream-60 font-body leading-relaxed">
              Contrast this with fiat currencies, where a central bank can
              increase the supply by 40% in two years, as the Federal Reserve
              did between 2020 and 2022. Fiat money has a stock-to-flow ratio
              that approaches zero in practice &mdash; production is unlimited
              and costless. This is the essence of &ldquo;soft&rdquo; money.
            </p>
          </section>

          <section>
            <h2 className="font-display text-3xl sm:text-4xl font-semibold text-cream mb-6">
              Gold: The First Hard Money
            </h2>
            <p className="text-cream-60 font-body leading-relaxed mb-4">
              Gold emerged as money not by government decree but by natural
              selection. Across every civilization on every continent, gold
              rose to the top of the monetary hierarchy. This was not
              coincidence. Gold possesses a unique combination of properties
              that no other element matches.
            </p>
            <p className="text-cream-60 font-body leading-relaxed mb-4">
              It is chemically inert &mdash; it does not rust, tarnish, or
              decay. It is scarce enough to be valuable but not so rare that
              it cannot function as a medium of exchange. It is malleable
              enough to be coined and divided. And critically, its supply
              grows slowly and predictably, constrained by the immense
              difficulty and cost of mining.
            </p>
            <p className="text-cream-60 font-body leading-relaxed">
              For thousands of years, gold served as the foundation of
              monetary systems worldwide. Kings measured their wealth in gold.
              Trade routes were built to move it. Wars were fought to control
              it. The reason was simple: gold was money that governments could
              not easily debase.
            </p>
          </section>

          <section>
            <h2 className="font-display text-3xl sm:text-4xl font-semibold text-cream mb-6">
              The Classical Gold Standard (1870&ndash;1914)
            </h2>
            <p className="text-cream-60 font-body leading-relaxed mb-4">
              The classical gold standard, roughly from 1870 to 1914,
              represents the most successful period of hard money in modern
              history. Under this system, each national currency was defined
              as a specific weight of gold, and currencies were freely
              convertible at fixed rates.
            </p>
            <p className="text-cream-60 font-body leading-relaxed mb-4">
              The result was unprecedented economic stability. Inflation was
              near zero over the entire period. International trade flourished
              because merchants could transact across borders without currency
              risk. Capital flowed freely. Innovation accelerated. The
              Industrial Revolution reached its peak.
            </p>
            <p className="text-cream-60 font-body leading-relaxed">
              The gold standard imposed discipline on governments. They could
              not spend more than they collected in taxes and gold reserves
              without facing immediate consequences. This constraint was seen
              as a feature by citizens who valued monetary stability, and as
              an obstacle by governments that wanted unlimited spending power.
            </p>
          </section>

          <section>
            <h2 className="font-display text-3xl sm:text-4xl font-semibold text-cream mb-6">
              The Dismantling: 1914&ndash;1971
            </h2>
            <p className="text-cream-60 font-body leading-relaxed mb-4">
              World War I ended the classical gold standard. Governments
              needed to print money to fund the war, and gold convertibility
              made this impossible. One by one, nations suspended gold
              backing, promising to restore it after the war. Most never
              fully did.
            </p>
            <p className="text-cream-60 font-body leading-relaxed mb-4">
              The interwar period saw chaotic attempts to restore gold backing
              at pre-war parities, contributing to deflation and depression.
              The Bretton Woods agreement of 1944 created a diluted version:
              the US dollar was backed by gold at $35 per ounce, and other
              currencies were pegged to the dollar.
            </p>
            <p className="text-cream-60 font-body leading-relaxed">
              This system lasted until 1971, when President Nixon closed the
              gold window, ending dollar convertibility. The stated reason was
              temporary. It became permanent. For the first time in 5,000
              years of recorded history, no major currency had any link to
              gold. The era of pure fiat money had begun.
            </p>
          </section>

          <section>
            <h2 className="font-display text-3xl sm:text-4xl font-semibold text-cream mb-6">
              The Fiat Experiment: 1971&ndash;Present
            </h2>
            <p className="text-cream-60 font-body leading-relaxed mb-4">
              Since 1971, all major currencies have been soft money &mdash;
              backed by nothing but government promises and legal tender laws.
              The results have been predictable to anyone who understands
              monetary history.
            </p>
            <p className="text-cream-60 font-body leading-relaxed mb-4">
              The US dollar has lost over 85% of its purchasing power. The
              national debt has grown from $400 billion to over $36 trillion.
              Asset prices have become disconnected from fundamentals as
              central banks flood markets with liquidity. Wealth inequality
              has widened as asset holders benefit from money printing while
              wage earners fall behind.
            </p>
            <p className="text-cream-60 font-body leading-relaxed">
              Financial crises have become more frequent and more severe: the
              savings and loan crisis, the dot-com bubble, the 2008 financial
              crisis, the COVID monetary expansion. Each crisis is met with
              more money printing, which sets the stage for the next crisis.
              The cycle continues because the fundamental problem &mdash;
              soft money &mdash; is never addressed.
            </p>
          </section>

          <section>
            <h2 className="font-display text-3xl sm:text-4xl font-semibold text-cream mb-6">
              Bitcoin: The Return of Hard Money
            </h2>
            <p className="text-cream-60 font-body leading-relaxed mb-4">
              Bitcoin emerged in 2009 as a direct response to the failures of
              soft money. Its creator, Satoshi Nakamoto, embedded a headline
              about bank bailouts in the genesis block &mdash; a clear
              statement of purpose.
            </p>
            <p className="text-cream-60 font-body leading-relaxed mb-4">
              Bitcoin&apos;s monetary policy is the hardest in history. Its
              supply is capped at 21&nbsp;million coins. New supply is issued
              on a predetermined schedule that halves approximately every four
              years. By 2140, all 21&nbsp;million coins will have been mined.
              No central authority can change this schedule &mdash; it is
              enforced by thousands of independent nodes running open-source
              code.
            </p>
            <p className="text-cream-60 font-body leading-relaxed mb-4">
              Bitcoin&apos;s stock-to-flow ratio already exceeds gold&apos;s
              after the most recent halving. And unlike gold, Bitcoin&apos;s
              supply schedule is perfectly predictable and unchangeable. There
              will never be a Bitcoin mining boom that floods the market with
              new supply. There will never be a Bitcoin central bank that
              decides to &ldquo;ease&rdquo; monetary policy.
            </p>
            <p className="text-cream-60 font-body leading-relaxed">
              This is the Bitcoin standard: hard money for the digital age.
              It combines gold&apos;s scarcity with the portability and
              divisibility of digital technology. A billion dollars in Bitcoin
              can be sent anywhere in the world in minutes. It can be stored
              in twelve memorized words. It cannot be confiscated, censored,
              or inflated.
            </p>
          </section>

          <section>
            <h2 className="font-display text-3xl sm:text-4xl font-semibold text-cream mb-6">
              Gold and Bitcoin: Complementary Hard Money
            </h2>
            <p className="text-cream-60 font-body leading-relaxed mb-4">
              Gold and Bitcoin are not competitors. They are allies in the
              same cause: protecting individual wealth from monetary
              debasement. Gold provides the physical foundation &mdash;
              5,000 years of proven reliability, tangible presence, and
              universal recognition. Bitcoin provides the digital layer
              &mdash; borderless transfer, perfect scarcity, and resistance
              to physical seizure.
            </p>
            <p className="text-cream-60 font-body leading-relaxed">
              A thoughtful hard money strategy includes both. Gold anchors
              your wealth in the physical world. Bitcoin extends it into the
              digital future. Offramp exists to bridge these two forms of
              hard money, allowing you to convert physical gold into Bitcoin
              or cash whenever you choose.
            </p>
          </section>

          {/* Internal Links */}
          <section className="space-y-4">
            <Link
              href="/guide/gold-standard"
              className="block border border-gold-500/20 rounded-xl p-6 hover:border-gold-500/40 transition-colors bg-bg-card"
            >
              <p className="text-gold-500 font-mono text-xs tracking-widest uppercase mb-2">
                Deep Dive
              </p>
              <p className="text-cream font-display text-xl">
                The Gold Standard and What Comes Next &rarr;
              </p>
              <p className="text-cream-45 text-sm mt-1">
                History of the gold standard and its lessons for the future.
              </p>
            </Link>
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
                Related
              </p>
              <p className="text-cream font-display text-xl">
                What Is a Store of Value? &rarr;
              </p>
              <p className="text-cream-45 text-sm mt-1">
                The properties that make gold and Bitcoin reliable stores of
                wealth.
              </p>
            </Link>
          </section>

          {/* CTA */}
          <section className="text-center py-16 border-t border-cream-08">
            <h2 className="font-display text-3xl sm:text-4xl font-semibold text-cream mb-4">
              Choose Hard Money
            </h2>
            <p className="text-cream-45 font-body mb-8 max-w-lg mx-auto">
              Convert physical gold to Bitcoin or cash. Offramp bridges the
              oldest hard money with the newest.
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
