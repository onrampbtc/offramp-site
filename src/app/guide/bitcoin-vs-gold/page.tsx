import Link from "next/link";

export default function BitcoinVsGoldPage() {
  return (
    <>
      {/* ── Schema.org Article ── */}
      <script
        type="application/ld+json"
        suppressHydrationWarning
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline: "Bitcoin vs Gold: Why You Want Both",
            author: { "@type": "Person", name: "Yasmine" },
            publisher: {
              "@type": "Organization",
              name: "Offramp",
              url: "https://offramp.com",
            },
            datePublished: "2026-03-01",
            dateModified: "2026-03-01",
            description:
              "Bitcoin and gold share fundamental properties as stores of value: scarcity, durability, and resistance to debasement.",
            mainEntityOfPage: "https://offramp.com/guide/bitcoin-vs-gold",
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
            Bitcoin vs Gold: Why You Want Both
          </h1>
          <p className="text-cream-45 font-body text-lg max-w-2xl mx-auto mb-4">
            Two hard assets, one portfolio. The complete comparison across
            scarcity, portability, divisibility, durability, and censorship
            resistance.
          </p>
          <p className="text-cream-35 font-mono text-xs tracking-wider">
            March 2026 &middot; By Yasmine
          </p>
        </div>
      </section>

      {/* ── AEO Direct Answer ── */}
      <section className="px-6 pb-16">
        <div className="max-w-3xl mx-auto">
          <div className="border border-gold-500/30 rounded-2xl bg-gold-500/[0.04] p-8">
            <p className="text-gold-500 font-mono text-xs tracking-widest uppercase mb-3">
              Key Takeaway
            </p>
            <p className="text-cream font-body text-lg leading-relaxed">
              Bitcoin and gold share fundamental properties as stores of value:
              scarcity, durability, and resistance to debasement. Gold has 5,000
              years of history. Bitcoin has a 21&nbsp;million coin cap and
              digital portability. Owning both gives you the best of the ancient
              and digital worlds.
            </p>
          </div>
        </div>
      </section>

      {/* ── Article Body ── */}
      <article className="px-6 pb-24">
        <div className="max-w-3xl mx-auto space-y-16">
          {/* Section: The Monetary Properties */}
          <section>
            <h2 className="font-display text-3xl sm:text-4xl font-semibold text-cream mb-6">
              The Five Monetary Properties
            </h2>
            <p className="text-cream-60 font-body leading-relaxed mb-4">
              Sound money must satisfy five properties: scarcity, durability,
              portability, divisibility, and fungibility. For thousands of
              years, gold was the best asset across these dimensions. Then
              Bitcoin arrived.
            </p>
            <p className="text-cream-60 font-body leading-relaxed mb-4">
              Both assets score highly, but in different ways. Gold excels in
              physical durability and millennia of trust. Bitcoin excels in
              digital portability and verifiable scarcity. Understanding where
              each one wins &mdash; and where it falls short &mdash; is the key
              to building a resilient portfolio.
            </p>
          </section>

          {/* Section: Scarcity */}
          <section>
            <h2 className="font-display text-3xl sm:text-4xl font-semibold text-cream mb-6">
              Scarcity
            </h2>
            <p className="text-cream-60 font-body leading-relaxed mb-4">
              Gold&apos;s supply grows at roughly 1.5% per year through mining.
              New deposits are increasingly difficult and expensive to extract.
              Above-ground gold stock is estimated at approximately 212,000
              metric tons, growing slowly as deep mines and ocean deposits
              remain economically unviable.
            </p>
            <p className="text-cream-60 font-body leading-relaxed mb-4">
              Bitcoin&apos;s supply is mathematically fixed at 21&nbsp;million
              coins. The issuance rate halves every four years in an event
              called the &ldquo;halving.&rdquo; By 2140, the last satoshi will
              be mined. No CEO, government, or committee can change this. It is
              enforced by code running on tens of thousands of nodes worldwide.
            </p>
            <p className="text-cream-60 font-body leading-relaxed">
              On scarcity alone, Bitcoin has the edge. Gold is scarce. Bitcoin
              is the first asset in human history with absolute, verifiable,
              immutable scarcity.
            </p>
          </section>

          {/* Section: Portability */}
          <section>
            <h2 className="font-display text-3xl sm:text-4xl font-semibold text-cream mb-6">
              Portability
            </h2>
            <p className="text-cream-60 font-body leading-relaxed mb-4">
              Moving $1&nbsp;million in gold requires armored trucks, insurance,
              customs declarations, and days of transit. Moving $1&nbsp;million
              in Bitcoin requires a smartphone and a few minutes. You can cross
              any border with your wealth in your head by memorizing twelve
              words.
            </p>
            <p className="text-cream-60 font-body leading-relaxed">
              Bitcoin is infinitely portable. Gold is not. This single property
              is why Bitcoin has earned the title &ldquo;digital gold&rdquo;
              &mdash; it took gold&apos;s most important attribute, store of
              value, and made it weightless.
            </p>
          </section>

          {/* Section: Divisibility */}
          <section>
            <h2 className="font-display text-3xl sm:text-4xl font-semibold text-cream mb-6">
              Divisibility
            </h2>
            <p className="text-cream-60 font-body leading-relaxed mb-4">
              Gold can be divided, but it is impractical. Cutting a gold coin
              into hundredths requires a refinery. Buying a coffee with gold
              shavings is science fiction.
            </p>
            <p className="text-cream-60 font-body leading-relaxed">
              Each Bitcoin is divisible into 100&nbsp;million satoshis. On the
              Lightning Network, you can send fractions of a cent instantly and
              for almost zero fees. Bitcoin is not only divisible &mdash; it is
              micro-divisible.
            </p>
          </section>

          {/* Section: Durability */}
          <section>
            <h2 className="font-display text-3xl sm:text-4xl font-semibold text-cream mb-6">
              Durability
            </h2>
            <p className="text-cream-60 font-body leading-relaxed mb-4">
              Gold does not rust, tarnish, or decay. Coins recovered from
              ancient shipwrecks are still pure gold after thousands of years
              underwater. This is gold&apos;s killer feature and why it became
              money in the first place.
            </p>
            <p className="text-cream-60 font-body leading-relaxed">
              Bitcoin is durable in a different sense. As long as the network
              runs &mdash; secured by global hash power and distributed across
              continents &mdash; your coins are indestructible. They cannot be
              seized, burned, or corroded. They exist as entries on a ledger
              replicated across the planet.
            </p>
          </section>

          {/* Section: Censorship Resistance */}
          <section>
            <h2 className="font-display text-3xl sm:text-4xl font-semibold text-cream mb-6">
              Censorship Resistance
            </h2>
            <p className="text-cream-60 font-body leading-relaxed mb-4">
              Gold held in a home safe is censorship-resistant. Gold held in a
              bank vault is not. When governments confiscated gold in 1933
              (Executive Order 6102), citizens who stored gold in banks lost
              access overnight.
            </p>
            <p className="text-cream-60 font-body leading-relaxed">
              Bitcoin held in self-custody is censorship-resistant by design.
              No government, bank, or institution can freeze or confiscate your
              Bitcoin if you hold your own keys. This is not a feature
              request &mdash; it is the foundational architecture.
            </p>
          </section>

          {/* Comparison Table */}
          <section>
            <h2 className="font-display text-3xl sm:text-4xl font-semibold text-cream mb-8">
              Side-by-Side Comparison
            </h2>
            <div className="overflow-x-auto rounded-xl border border-cream-08">
              <table className="w-full text-left font-body text-sm">
                <thead>
                  <tr className="border-b border-cream-08 bg-bg-card">
                    <th className="px-6 py-4 text-cream-45 font-medium">
                      Property
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
                    ["Scarcity", "~1.5% annual inflation", "Fixed at 21M coins"],
                    ["Portability", "Heavy, requires custody", "Weightless, borderless"],
                    ["Divisibility", "Impractical below grams", "100M satoshis per coin"],
                    ["Durability", "Eternal (physical)", "Eternal (network)"],
                    ["Censorship Resistance", "If self-custodied", "Native to protocol"],
                    ["Track Record", "5,000+ years", "16 years"],
                    ["Counterparty Risk", "None (physical)", "None (self-custody)"],
                    ["Verifiability", "Requires XRF assay", "Instant on-chain"],
                  ].map(([prop, gold, btc]) => (
                    <tr key={prop} className="border-b border-cream-08 last:border-0">
                      <td className="px-6 py-4 text-cream font-medium">
                        {prop}
                      </td>
                      <td className="px-6 py-4">{gold}</td>
                      <td className="px-6 py-4">{btc}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          {/* Section: Why Own Both */}
          <section>
            <h2 className="font-display text-3xl sm:text-4xl font-semibold text-cream mb-6">
              Why Own Both
            </h2>
            <p className="text-cream-60 font-body leading-relaxed mb-4">
              Gold and Bitcoin are not competitors &mdash; they are
              complements. Gold anchors your portfolio in 5,000 years of
              history. Bitcoin gives you exposure to the most disruptive
              monetary technology since the printing press.
            </p>
            <p className="text-cream-60 font-body leading-relaxed mb-4">
              A portfolio with both assets hedges against a wider range of
              risks: inflation, currency debasement, geopolitical instability,
              and digital disruption. Gold protects you in a world where the
              internet goes down. Bitcoin protects you in a world where borders
              go up.
            </p>
            <p className="text-cream-60 font-body leading-relaxed">
              Offramp exists at the intersection. We let you sell physical gold
              and receive Bitcoin &mdash; or cash &mdash; bridging the oldest
              store of value with the newest.
            </p>
          </section>

          {/* Internal Link Cards */}
          <section className="space-y-4">
            <Link
              href="/gold-to-bitcoin"
              className="block border border-gold-500/20 rounded-xl p-6 hover:border-gold-500/40 transition-colors bg-bg-card"
            >
              <p className="text-gold-500 font-mono text-xs tracking-widest uppercase mb-2">
                Related
              </p>
              <p className="text-cream font-display text-xl">
                Sell Gold for Bitcoin &rarr;
              </p>
              <p className="text-cream-45 text-sm mt-1">
                Convert your physical gold directly into Bitcoin with Offramp.
              </p>
            </Link>
            <Link
              href="/guide/digital-gold"
              className="block border border-gold-500/20 rounded-xl p-6 hover:border-gold-500/40 transition-colors bg-bg-card"
            >
              <p className="text-gold-500 font-mono text-xs tracking-widest uppercase mb-2">
                Deep Dive
              </p>
              <p className="text-cream font-display text-xl">
                Bitcoin Is Digital Gold. Here Is Why. &rarr;
              </p>
              <p className="text-cream-45 text-sm mt-1">
                A deep exploration of why Bitcoin earned the title.
              </p>
            </Link>
          </section>

          {/* CTA */}
          <section className="text-center py-16 border-t border-cream-08">
            <h2 className="font-display text-3xl sm:text-4xl font-semibold text-cream mb-4">
              Ready to Sell Your Gold?
            </h2>
            <p className="text-cream-45 font-body mb-8 max-w-lg mx-auto">
              Whether you want cash or Bitcoin, Offramp pays 80%+ of spot
              value with free insured shipping and XRF assay.
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
                Calculate Value
              </Link>
            </div>
          </section>
        </div>
      </article>
    </>
  );
}
