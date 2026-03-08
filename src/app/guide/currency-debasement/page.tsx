import Link from "next/link";

export default function CurrencyDebasementPage() {
  return (
    <>
      <script
        type="application/ld+json"
        suppressHydrationWarning
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline: "Currency Debasement: Why Hard Money Always Wins",
            author: { "@type": "Person", name: "Yasmine" },
            publisher: {
              "@type": "Organization",
              name: "Offramp",
              url: "https://offramp.com",
            },
            datePublished: "2026-03-01",
            dateModified: "2026-03-01",
            description:
              "A 5,000 year history of currency debasement from Roman denarii to modern fiat, and why hard money always wins.",
            mainEntityOfPage:
              "https://offramp.com/guide/currency-debasement",
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
            Currency Debasement: Why Hard Money Always Wins
          </h1>
          <p className="text-cream-45 font-body text-lg max-w-2xl mx-auto mb-4">
            From the Roman Empire to the Federal Reserve, every fiat currency
            follows the same arc. The pattern has repeated for 5,000 years.
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
              Currency debasement &mdash; the deliberate reduction of a
              currency&apos;s value &mdash; has been practiced by every major
              civilization. The Roman denarius, the Byzantine solidus, the
              British pound, and the US dollar have all been debased. Hard
              assets like gold survive every debasement. Bitcoin is the
              digital continuation of this pattern.
            </p>
          </div>
        </div>
      </section>

      {/* ── Article ── */}
      <article className="px-6 pb-24">
        <div className="max-w-3xl mx-auto space-y-16">
          <section>
            <h2 className="font-display text-3xl sm:text-4xl font-semibold text-cream mb-6">
              The Roman Denarius: Where It Began
            </h2>
            <p className="text-cream-60 font-body leading-relaxed mb-4">
              The Roman denarius was introduced around 211 BC as a nearly pure
              silver coin. For centuries, it served as the backbone of Roman
              commerce, trusted across the Mediterranean world. Its value was
              its metal content: approximately 4.5 grams of silver.
            </p>
            <p className="text-cream-60 font-body leading-relaxed mb-4">
              Then emperors discovered they could fund wars and public works
              by reducing the silver content while maintaining the coin&apos;s
              face value. Under Nero (AD 54&ndash;68), the silver content
              dropped to about 90%. Under Septimius Severus (AD 193&ndash;211),
              it fell to 50%. By the reign of Gallienus (AD 253&ndash;268),
              the denarius contained less than 5% silver.
            </p>
            <p className="text-cream-60 font-body leading-relaxed">
              The result was predictable: inflation, economic instability, and
              eventually the collapse of the Roman monetary system. Soldiers
              demanded payment in gold or goods. Trade reverted to barter.
              The currency that built an empire destroyed it when debased
              beyond recognition.
            </p>
          </section>

          <section>
            <h2 className="font-display text-3xl sm:text-4xl font-semibold text-cream mb-6">
              The Medieval Pattern
            </h2>
            <p className="text-cream-60 font-body leading-relaxed mb-4">
              After Rome, the pattern repeated across medieval Europe. Kings
              and monarchs debased their coinage to fund wars, build castles,
              and maintain courts. Henry VIII of England, known as &ldquo;Old
              Coppernose,&rdquo; debased English coinage so severely that the
              copper base metal showed through the thin silver plating on his
              coins, particularly on the nose of his portrait.
            </p>
            <p className="text-cream-60 font-body leading-relaxed">
              The exception was the Byzantine solidus, which maintained its
              gold content for nearly 700 years (from the 4th to 11th
              century). This stability made it the dominant trade currency
              across Europe and the Middle East. When the Byzantines finally
              debased it, their economic power collapsed within decades.
              Hard money built empires. Debasement destroyed them.
            </p>
          </section>

          <section>
            <h2 className="font-display text-3xl sm:text-4xl font-semibold text-cream mb-6">
              The Modern Fiat Experiment
            </h2>
            <p className="text-cream-60 font-body leading-relaxed mb-4">
              In 1971, President Nixon severed the last link between the US
              dollar and gold. For the first time in history, every major
              currency in the world was backed by nothing but government
              promises. This was the beginning of the modern fiat experiment.
            </p>
            <p className="text-cream-60 font-body leading-relaxed mb-4">
              Since then, the US dollar has lost over 85% of its purchasing
              power. The Federal Reserve&apos;s balance sheet has grown from
              under $1 trillion in 2008 to over $8 trillion by 2022. The M2
              money supply has expanded relentlessly, accelerating
              dramatically during the COVID-19 pandemic.
            </p>
            <p className="text-cream-60 font-body leading-relaxed">
              This is not unique to the dollar. The Japanese yen, the
              European euro, the British pound &mdash; all fiat currencies are
              being debased simultaneously. Central banks worldwide are
              engaged in competitive devaluation, each trying to weaken their
              currency to boost exports and reduce the real burden of
              government debt.
            </p>
          </section>

          <section>
            <h2 className="font-display text-3xl sm:text-4xl font-semibold text-cream mb-6">
              The Average Lifespan of Fiat Currency
            </h2>
            <p className="text-cream-60 font-body leading-relaxed mb-4">
              Studies of historical currencies show that the average fiat
              currency has a lifespan of roughly 27 years. Some last longer.
              Many do not. The German papiermark lasted 4 years before
              hyperinflation destroyed it. The Zimbabwean dollar lasted about
              28 years. The current US dollar has been fiat since 1971 &mdash;
              55 years and counting.
            </p>
            <p className="text-cream-60 font-body leading-relaxed">
              No fiat currency has ever survived indefinitely. Every single one
              in history has either collapsed, been reformed, or been replaced.
              The question is not whether the current system will change, but
              when and how.
            </p>
          </section>

          <section>
            <h2 className="font-display text-3xl sm:text-4xl font-semibold text-cream mb-6">
              Gold: The Survivor
            </h2>
            <p className="text-cream-60 font-body leading-relaxed mb-4">
              Through every currency debasement, gold has survived. Roman
              citizens who held gold preserved their wealth when the denarius
              collapsed. Weimar Germans who held gold survived the
              hyperinflation that destroyed the papiermark. Venezuelans who
              held gold maintained purchasing power when the bolivar became
              worthless.
            </p>
            <p className="text-cream-60 font-body leading-relaxed">
              Gold does not promise returns. It promises survival. An ounce of
              gold bought a fine men&apos;s suit in ancient Rome, in
              Victorian England, and today. Its purchasing power has remained
              remarkably stable across millennia &mdash; not because gold is
              magical, but because its supply cannot be inflated by political
              decree.
            </p>
          </section>

          <section>
            <h2 className="font-display text-3xl sm:text-4xl font-semibold text-cream mb-6">
              Bitcoin: Gold for the Digital Age
            </h2>
            <p className="text-cream-60 font-body leading-relaxed mb-4">
              Bitcoin was born from the 2008 financial crisis &mdash; the most
              recent episode of monetary excess. Satoshi Nakamoto embedded a
              newspaper headline in Bitcoin&apos;s genesis block:
              &ldquo;Chancellor on brink of second bailout for banks.&rdquo;
              The message was clear: Bitcoin exists because the traditional
              monetary system failed.
            </p>
            <p className="text-cream-60 font-body leading-relaxed">
              Bitcoin carries gold&apos;s most important property &mdash;
              resistance to debasement &mdash; into the digital age. Its
              21&nbsp;million coin cap cannot be changed. No central bank, no
              government, no corporation can print more Bitcoin. It is the
              first purely digital hard money, and its existence is a direct
              response to 5,000 years of currency debasement.
            </p>
          </section>

          {/* Internal Links */}
          <section className="space-y-4">
            <Link
              href="/guide/store-of-value"
              className="block border border-gold-500/20 rounded-xl p-6 hover:border-gold-500/40 transition-colors bg-bg-card"
            >
              <p className="text-gold-500 font-mono text-xs tracking-widest uppercase mb-2">
                Next
              </p>
              <p className="text-cream font-display text-xl">
                What Is a Store of Value? &rarr;
              </p>
              <p className="text-cream-45 text-sm mt-1">
                The properties that make an asset preserve wealth across time.
              </p>
            </Link>
            <Link
              href="/guide/hard-money"
              className="block border border-gold-500/20 rounded-xl p-6 hover:border-gold-500/40 transition-colors bg-bg-card"
            >
              <p className="text-gold-500 font-mono text-xs tracking-widest uppercase mb-2">
                Related
              </p>
              <p className="text-cream font-display text-xl">
                Hard Money: From Gold to Bitcoin &rarr;
              </p>
              <p className="text-cream-45 text-sm mt-1">
                The evolution of hard money from the gold standard to Bitcoin.
              </p>
            </Link>
            <Link
              href="/guide/money-printing"
              className="block border border-gold-500/20 rounded-xl p-6 hover:border-gold-500/40 transition-colors bg-bg-card"
            >
              <p className="text-gold-500 font-mono text-xs tracking-widest uppercase mb-2">
                Related
              </p>
              <p className="text-cream font-display text-xl">
                Money Printing: Why Hard Assets Exist &rarr;
              </p>
              <p className="text-cream-45 text-sm mt-1">
                How quantitative easing reduces purchasing power.
              </p>
            </Link>
          </section>

          {/* CTA */}
          <section className="text-center py-16 border-t border-cream-08">
            <h2 className="font-display text-3xl sm:text-4xl font-semibold text-cream mb-4">
              Exit the Debasement
            </h2>
            <p className="text-cream-45 font-body mb-8 max-w-lg mx-auto">
              Convert physical gold to Bitcoin or cash. Offramp bridges the
              oldest store of value with the newest.
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
