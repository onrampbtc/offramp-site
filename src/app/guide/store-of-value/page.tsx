import Link from "next/link";

export default function StoreOfValuePage() {
  return (
    <>
      <script
        type="application/ld+json"
        suppressHydrationWarning
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline: "What Is a Store of Value?",
            author: { "@type": "Person", name: "Yasmine" },
            publisher: {
              "@type": "Organization",
              name: "Offramp",
              url: "https://offramp.com",
            },
            datePublished: "2026-03-01",
            dateModified: "2026-03-01",
            description:
              "The properties that make gold and Bitcoin reliable stores of value for preserving wealth.",
            mainEntityOfPage: "https://offramp.com/guide/store-of-value",
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
            What Is a Store of Value?
          </h1>
          <p className="text-cream-45 font-body text-lg max-w-2xl mx-auto mb-4">
            The properties that separate assets which preserve wealth from
            those that slowly destroy it.
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
              A store of value is an asset that maintains its purchasing power
              over time. The best stores of value are scarce, durable,
              portable, divisible, and resistant to confiscation. Gold has
              served this role for 5,000 years. Bitcoin is emerging as its
              digital counterpart.
            </p>
          </div>
        </div>
      </section>

      {/* ── Article ── */}
      <article className="px-6 pb-24">
        <div className="max-w-3xl mx-auto space-y-16">
          <section>
            <h2 className="font-display text-3xl sm:text-4xl font-semibold text-cream mb-6">
              The Definition
            </h2>
            <p className="text-cream-60 font-body leading-relaxed mb-4">
              A store of value is any asset, commodity, or currency that retains
              its purchasing power into the future. When you exchange your labor
              for money, you need confidence that the money will buy a similar
              amount of goods and services next year, next decade, or next
              century.
            </p>
            <p className="text-cream-60 font-body leading-relaxed">
              Not all assets qualify. A car loses value the moment you drive it
              off the lot. A smartphone is obsolete in three years. Even cash
              &mdash; the asset most people think of as money &mdash; loses
              purchasing power steadily due to inflation. A true store of value
              must resist this decay.
            </p>
          </section>

          <section>
            <h2 className="font-display text-3xl sm:text-4xl font-semibold text-cream mb-6">
              The Five Properties
            </h2>
            <p className="text-cream-60 font-body leading-relaxed mb-6">
              Through thousands of years of trial and error, humanity has
              identified five properties that make an asset an effective store
              of value:
            </p>
            <div className="space-y-4">
              {[
                {
                  title: "Scarcity",
                  desc: "The supply must be limited. If an asset can be easily produced, increased supply will dilute its value. Gold is scarce because it requires enormous effort to extract. Bitcoin is scarce because its supply is capped at 21 million by immutable code.",
                },
                {
                  title: "Durability",
                  desc: "The asset must not degrade over time. Gold does not rust, corrode, or decay. It is chemically inert and virtually indestructible. Bitcoin is durable as long as the network operates, maintained by thousands of nodes across the globe.",
                },
                {
                  title: "Portability",
                  desc: "Wealth must be transportable. Gold is portable but heavy. A million dollars in gold weighs about 15 kilograms. Bitcoin is infinitely portable: a billion dollars can be carried in twelve memorized words.",
                },
                {
                  title: "Divisibility",
                  desc: "The asset must be usable in transactions of any size. Gold can be divided but it requires physical cutting and refining. Bitcoin divides into 100 million satoshis per coin, enabling microtransactions.",
                },
                {
                  title: "Resistance to Confiscation",
                  desc: "A store of value that can be easily seized is not reliable. Physical gold in self-custody is resistant but detectable. Bitcoin in self-custody is nearly impossible to confiscate because it exists only as information.",
                },
              ].map((item) => (
                <div
                  key={item.title}
                  className="bg-bg-card border border-cream-08 rounded-xl p-6"
                >
                  <p className="text-cream font-display text-xl mb-2">
                    {item.title}
                  </p>
                  <p className="text-cream-45 font-body text-sm leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </section>

          <section>
            <h2 className="font-display text-3xl sm:text-4xl font-semibold text-cream mb-6">
              Why Fiat Currency Fails as a Store of Value
            </h2>
            <p className="text-cream-60 font-body leading-relaxed mb-4">
              Fiat currency fails the most important test: scarcity. Governments
              and central banks can create unlimited quantities at will.
              The US dollar has lost over 96% of its purchasing power since the
              Federal Reserve was established in 1913. The British pound has
              lost over 99% of its purchasing power since 1750.
            </p>
            <p className="text-cream-60 font-body leading-relaxed">
              Holding cash is not saving. It is watching your wealth evaporate
              at 2&ndash;10% per year, guaranteed by the very institutions that
              control the money supply. Every dollar you hold is a bet that the
              government will exercise restraint. History shows this bet
              consistently loses.
            </p>
          </section>

          <section>
            <h2 className="font-display text-3xl sm:text-4xl font-semibold text-cream mb-6">
              Gold: 5,000 Years of Proof
            </h2>
            <p className="text-cream-60 font-body leading-relaxed mb-4">
              Gold&apos;s track record is unmatched. It has preserved
              purchasing power across the rise and fall of empires, world wars,
              pandemics, and technological revolutions. An ounce of gold in
              ancient Rome bought roughly the same quality of goods as an
              ounce today.
            </p>
            <p className="text-cream-60 font-body leading-relaxed">
              This consistency is not magic. It is the result of gold&apos;s
              unique physical and chemical properties: it is rare enough to be
              valuable, durable enough to last forever, and difficult enough
              to produce that supply grows slowly. No other element on the
              periodic table combines all these properties as effectively.
            </p>
          </section>

          <section>
            <h2 className="font-display text-3xl sm:text-4xl font-semibold text-cream mb-6">
              Bitcoin: The Digital Store of Value
            </h2>
            <p className="text-cream-60 font-body leading-relaxed mb-4">
              Bitcoin emerged in 2009 as the first purely digital asset with
              verifiable scarcity. Its properties mirror gold&apos;s but
              operate in the digital realm: mathematically fixed supply,
              decentralized security, and no dependence on any single
              institution or government.
            </p>
            <p className="text-cream-60 font-body leading-relaxed mb-4">
              Bitcoin is still young. Sixteen years of history does not compare
              to 5,000. But every year that Bitcoin survives, its credibility
              as a store of value strengthens. It has already outlasted
              thousands of critics, multiple regulatory crackdowns, and
              several market crashes of 50% or more.
            </p>
            <p className="text-cream-60 font-body leading-relaxed">
              The growing institutional adoption &mdash; sovereign wealth
              funds, public companies, pension funds &mdash; reflects a
              recognition that Bitcoin&apos;s monetary properties are real and
              enduring.
            </p>
          </section>

          <section>
            <h2 className="font-display text-3xl sm:text-4xl font-semibold text-cream mb-6">
              The Complementary Approach
            </h2>
            <p className="text-cream-60 font-body leading-relaxed mb-4">
              Gold and Bitcoin are not competitors for the store of value
              crown. They are complementary tools in a wealth preservation
              strategy. Gold offers the unmatched track record and physical
              presence. Bitcoin offers digital portability and the potential
              for growth as adoption expands.
            </p>
            <p className="text-cream-60 font-body leading-relaxed">
              Together, they provide comprehensive protection against currency
              debasement, political instability, and economic uncertainty.
              Offramp exists at this intersection: we help you convert physical
              gold into Bitcoin, or into cash, depending on your needs.
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
                Why every fiat currency eventually fails.
              </p>
            </Link>
            <Link
              href="/guide/hard-money"
              className="block border border-gold-500/20 rounded-xl p-6 hover:border-gold-500/40 transition-colors bg-bg-card"
            >
              <p className="text-gold-500 font-mono text-xs tracking-widest uppercase mb-2">
                Next
              </p>
              <p className="text-cream font-display text-xl">
                Hard Money: From Gold to Bitcoin &rarr;
              </p>
              <p className="text-cream-45 text-sm mt-1">
                The evolution of hard money through history.
              </p>
            </Link>
            <Link
              href="/guide/bitcoin-vs-gold"
              className="block border border-gold-500/20 rounded-xl p-6 hover:border-gold-500/40 transition-colors bg-bg-card"
            >
              <p className="text-gold-500 font-mono text-xs tracking-widest uppercase mb-2">
                Comparison
              </p>
              <p className="text-cream font-display text-xl">
                Bitcoin vs Gold: The Complete Comparison &rarr;
              </p>
              <p className="text-cream-45 text-sm mt-1">
                Side-by-side analysis of both store-of-value assets.
              </p>
            </Link>
          </section>

          {/* CTA */}
          <section className="text-center py-16 border-t border-cream-08">
            <h2 className="font-display text-3xl sm:text-4xl font-semibold text-cream mb-4">
              Preserve Your Wealth
            </h2>
            <p className="text-cream-45 font-body mb-8 max-w-lg mx-auto">
              Convert gold to Bitcoin or cash. Offramp bridges physical and
              digital stores of value.
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
