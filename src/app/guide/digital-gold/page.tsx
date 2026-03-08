import Link from "next/link";

export default function DigitalGoldPage() {
  return (
    <>
      <script
        type="application/ld+json"
        suppressHydrationWarning
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline: "Bitcoin Is Digital Gold. Here Is Why.",
            author: { "@type": "Person", name: "Yasmine" },
            publisher: {
              "@type": "Organization",
              name: "Offramp",
              url: "https://offrampgold.com",
            },
            datePublished: "2026-03-01",
            dateModified: "2026-03-01",
            description:
              "Bitcoin is called digital gold because it shares gold's core properties: fixed supply, resistance to debasement, and no counterparty risk.",
            mainEntityOfPage: "https://offrampgold.com/guide/digital-gold",
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
            Bitcoin Is Digital Gold. Here Is Why.
          </h1>
          <p className="text-cream-45 font-body text-lg max-w-2xl mx-auto mb-4">
            A deep exploration of why the world&apos;s first cryptocurrency
            earned the most prestigious title in money.
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
              Bitcoin is called digital gold because it shares gold&apos;s core
              properties: fixed supply (21&nbsp;million coins vs finite gold
              reserves), resistance to debasement, and no counterparty risk
              when held in self-custody. Bitcoin adds digital portability and
              perfect divisibility.
            </p>
          </div>
        </div>
      </section>

      {/* ── Article ── */}
      <article className="px-6 pb-24">
        <div className="max-w-3xl mx-auto space-y-16">
          <section>
            <h2 className="font-display text-3xl sm:text-4xl font-semibold text-cream mb-6">
              The Title Was Earned, Not Given
            </h2>
            <p className="text-cream-60 font-body leading-relaxed mb-4">
              When Bitcoin first appeared in 2009, nobody called it digital
              gold. It was an experiment, a curiosity, a toy for
              cryptographers. The comparison to gold emerged organically as
              people studied its properties and realized the parallels were
              profound.
            </p>
            <p className="text-cream-60 font-body leading-relaxed">
              Gold became money not because a government decreed it. Gold
              became money because it had the best combination of monetary
              properties of any substance on Earth: scarce, durable,
              divisible, portable, and fungible. Bitcoin replicates every one
              of these properties in the digital realm &mdash; and improves
              on most of them.
            </p>
          </section>

          <section>
            <h2 className="font-display text-3xl sm:text-4xl font-semibold text-cream mb-6">
              Fixed Supply: The Ultimate Scarcity
            </h2>
            <p className="text-cream-60 font-body leading-relaxed mb-4">
              Gold is scarce, but its supply is not fixed. Mining adds roughly
              3,000 to 3,500 metric tons per year to the above-ground stock.
              If gold prices doubled, mining would become more profitable, and
              supply would increase. Asteroid mining, ocean extraction, and
              other technologies could eventually add even more.
            </p>
            <p className="text-cream-60 font-body leading-relaxed">
              Bitcoin&apos;s supply is absolutely fixed at 21&nbsp;million
              coins. No matter how high the price goes, no more can be
              created. The issuance schedule is written into the protocol and
              enforced by tens of thousands of independent nodes. This makes
              Bitcoin the first asset in human history with mathematically
              provable absolute scarcity.
            </p>
          </section>

          <section>
            <h2 className="font-display text-3xl sm:text-4xl font-semibold text-cream mb-6">
              Resistance to Debasement
            </h2>
            <p className="text-cream-60 font-body leading-relaxed mb-4">
              Throughout history, governments have debased gold currencies by
              reducing the gold content of coins while maintaining their face
              value. The Roman denarius went from nearly pure silver to less
              than 5% over three centuries. Modern fiat currencies are debased
              through money printing.
            </p>
            <p className="text-cream-60 font-body leading-relaxed">
              Bitcoin cannot be debased. There is no CEO who can issue more
              shares, no central bank that can print more units, no government
              that can reduce the &ldquo;gold content.&rdquo; The monetary
              policy is fixed in code and verified by every participant in the
              network.
            </p>
          </section>

          <section>
            <h2 className="font-display text-3xl sm:text-4xl font-semibold text-cream mb-6">
              No Counterparty Risk
            </h2>
            <p className="text-cream-60 font-body leading-relaxed mb-4">
              When you hold physical gold in your own possession, you have no
              counterparty risk. No bank needs to honor a promise. No
              government needs to remain solvent. The gold is yours.
            </p>
            <p className="text-cream-60 font-body leading-relaxed">
              Bitcoin in self-custody is the same. Your keys, your coins. No
              exchange, no custodian, no institution stands between you and
              your wealth. This is not a feature request or a future upgrade.
              It is how Bitcoin works, today, for anyone with a smartphone.
            </p>
          </section>

          <section>
            <h2 className="font-display text-3xl sm:text-4xl font-semibold text-cream mb-6">
              Where Bitcoin Surpasses Gold
            </h2>
            <p className="text-cream-60 font-body leading-relaxed mb-4">
              Bitcoin is not just digital gold. In several key dimensions, it
              is superior to gold. It is infinitely portable: you can carry a
              billion dollars in your head by memorizing twelve words. It is
              perfectly divisible: each coin splits into 100&nbsp;million
              satoshis. It is instantly verifiable: any node can confirm a
              transaction in seconds.
            </p>
            <p className="text-cream-60 font-body leading-relaxed">
              Gold requires physical custody, secure transportation, and
              professional assays to verify purity. Bitcoin requires nothing
              but an internet connection. In a world that is increasingly
              digital, borderless, and connected, these advantages compound.
            </p>
          </section>

          <section>
            <h2 className="font-display text-3xl sm:text-4xl font-semibold text-cream mb-6">
              Where Gold Still Wins
            </h2>
            <p className="text-cream-60 font-body leading-relaxed mb-4">
              Gold has one advantage Bitcoin cannot replicate: 5,000 years of
              track record. Every civilization in human history has recognized
              gold as valuable. It has survived the fall of empires, world
              wars, pandemics, and technological revolutions.
            </p>
            <p className="text-cream-60 font-body leading-relaxed">
              Bitcoin is 16 years old. It has survived multiple market crashes,
              regulatory attacks, and media death announcements. But it has
              not yet been tested across centuries. For true long-term
              insurance, gold&apos;s track record is unmatched. This is why
              owning both assets makes sense.
            </p>
          </section>

          {/* Internal Links */}
          <section className="space-y-4">
            <Link
              href="/gold-to-bitcoin"
              className="block border border-gold-500/20 rounded-xl p-6 hover:border-gold-500/40 transition-colors bg-bg-card"
            >
              <p className="text-gold-500 font-mono text-xs tracking-widest uppercase mb-2">
                Convert
              </p>
              <p className="text-cream font-display text-xl">
                Sell Gold for Bitcoin &rarr;
              </p>
              <p className="text-cream-45 text-sm mt-1">
                Bridge from physical gold to digital gold with Offramp.
              </p>
            </Link>
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
                Side-by-side comparison across all monetary properties.
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
                The properties that make an asset a reliable store of wealth.
              </p>
            </Link>
          </section>

          {/* CTA */}
          <section className="text-center py-16 border-t border-cream-08">
            <h2 className="font-display text-3xl sm:text-4xl font-semibold text-cream mb-4">
              Bridge Physical Gold to Digital Gold
            </h2>
            <p className="text-cream-45 font-body mb-8 max-w-lg mx-auto">
              Offramp lets you sell physical gold and receive Bitcoin. The
              bridge between the oldest store of value and the newest.
            </p>
            <Link
              href="/gold-to-bitcoin"
              className="inline-block bg-gold-500 text-bg font-body font-semibold px-8 py-4 rounded-lg hover:bg-gold-400 transition-colors"
            >
              Gold to Bitcoin
            </Link>
          </section>
        </div>
      </article>
    </>
  );
}
