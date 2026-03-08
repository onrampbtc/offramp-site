import Link from "next/link";

export default function GoldStandardPage() {
  return (
    <>
      <script
        type="application/ld+json"
        suppressHydrationWarning
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline: "The Gold Standard and What Comes Next",
            author: { "@type": "Person", name: "Yasmine" },
            publisher: {
              "@type": "Organization",
              name: "Offramp",
              url: "https://offrampgold.com",
            },
            datePublished: "2026-03-01",
            dateModified: "2026-03-01",
            description:
              "A complete history of the gold standard from its origins to its collapse, and what Bitcoin means for the future of sound money.",
            mainEntityOfPage: "https://offrampgold.com/guide/gold-standard",
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
            The Gold Standard and What Comes Next
          </h1>
          <p className="text-cream-45 font-body text-lg max-w-2xl mx-auto mb-4">
            For centuries, gold anchored the world&apos;s monetary system.
            Its removal unleashed an era of unprecedented money creation.
            The next chapter is being written now.
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
              The gold standard tied currencies to a fixed quantity of gold,
              imposing fiscal discipline on governments and preserving
              purchasing power for citizens. Its removal in 1971 launched
              the modern fiat experiment. Bitcoin represents a return to the
              principles of the gold standard &mdash; hard, predictable
              money &mdash; adapted for a digital world.
            </p>
          </div>
        </div>
      </section>

      {/* ── Article ── */}
      <article className="px-6 pb-24">
        <div className="max-w-3xl mx-auto space-y-16">
          <section>
            <h2 className="font-display text-3xl sm:text-4xl font-semibold text-cream mb-6">
              Before the Standard: Gold as Natural Money
            </h2>
            <p className="text-cream-60 font-body leading-relaxed mb-4">
              Long before any government declared gold to be money, it
              functioned as money naturally. Archaeological evidence shows
              gold being used as a medium of exchange in ancient Mesopotamia
              as early as 3000 BC. The Lydians minted the first standardized
              gold coins around 600 BC, but gold&apos;s monetary role
              predates coinage by millennia.
            </p>
            <p className="text-cream-60 font-body leading-relaxed mb-4">
              Gold became money because it was the best technology available
              for storing and transferring value. It was scarce enough to
              hold concentrated value, durable enough to last forever,
              recognizable enough to be accepted widely, and difficult
              enough to counterfeit that trust could be maintained.
            </p>
            <p className="text-cream-60 font-body leading-relaxed">
              No committee chose gold. No government mandated it. The market
              selected gold through thousands of years of competition with
              shells, beads, salt, cattle, silver, and dozens of other
              candidates. Gold won because its properties were superior.
            </p>
          </section>

          <section>
            <h2 className="font-display text-3xl sm:text-4xl font-semibold text-cream mb-6">
              The Classical Gold Standard (1870&ndash;1914)
            </h2>
            <p className="text-cream-60 font-body leading-relaxed mb-4">
              The formal gold standard began in the 19th century as
              industrializing nations linked their currencies to gold at
              fixed rates. Britain led the way in 1821, and by 1870 most
              major economies had followed. The result was a unified
              international monetary system.
            </p>
            <p className="text-cream-60 font-body leading-relaxed mb-4">
              Under the classical gold standard, a British pound was worth
              a specific weight of gold, as was a US dollar, a French franc,
              and a German mark. Because all currencies were defined in gold,
              exchange rates were fixed automatically. A pound was always
              worth $4.87 because both were defined in gold terms.
            </p>
            <p className="text-cream-60 font-body leading-relaxed mb-4">
              This system delivered remarkable results. Average annual
              inflation from 1870 to 1914 was approximately zero. Real wages
              rose steadily. International trade expanded rapidly. Capital
              moved freely across borders without the currency risk that
              plagues modern finance.
            </p>
            <p className="text-cream-60 font-body leading-relaxed">
              The gold standard&apos;s greatest virtue was the discipline it
              imposed. Governments could not simply print money to fund
              spending. If a country ran persistent trade deficits, gold
              flowed out, the money supply contracted, and the economy
              adjusted. The system was self-correcting &mdash; painful at
              times, but fundamentally honest.
            </p>
          </section>

          <section>
            <h2 className="font-display text-3xl sm:text-4xl font-semibold text-cream mb-6">
              World War I: The First Break
            </h2>
            <p className="text-cream-60 font-body leading-relaxed mb-4">
              The gold standard could not survive the demands of total war.
              Governments needed to spend far more than their gold reserves
              and tax revenues allowed. In August 1914, the major belligerents
              suspended gold convertibility and began printing money to
              finance the conflict.
            </p>
            <p className="text-cream-60 font-body leading-relaxed mb-4">
              The consequences were severe. Prices doubled or tripled in the
              warring nations. Germany, which funded its war effort almost
              entirely through money printing, would eventually experience
              hyperinflation that destroyed the papiermark and contributed
              to social and political upheaval.
            </p>
            <p className="text-cream-60 font-body leading-relaxed">
              After the war, nations attempted to return to gold backing, but
              the political will to accept the necessary fiscal discipline had
              weakened. The interwar period saw a series of failed attempts to
              restore gold convertibility, currency crises, and ultimately
              the Great Depression &mdash; which many economists blamed, rightly
              or wrongly, on the constraints of gold.
            </p>
          </section>

          <section>
            <h2 className="font-display text-3xl sm:text-4xl font-semibold text-cream mb-6">
              Bretton Woods: The Compromise (1944&ndash;1971)
            </h2>
            <p className="text-cream-60 font-body leading-relaxed mb-4">
              In 1944, delegates from 44 nations gathered at Bretton Woods,
              New Hampshire, to design a new international monetary system.
              The result was a compromise: the US dollar would be backed by
              gold at $35 per ounce, and all other currencies would be
              pegged to the dollar.
            </p>
            <p className="text-cream-60 font-body leading-relaxed mb-4">
              This system placed enormous responsibility &mdash; and privilege
              &mdash; on the United States. America held the world&apos;s
              largest gold reserves and pledged to exchange dollars for gold
              on demand. Other nations held dollars as reserves, trusting
              that each one was worth 1/35th of an ounce of gold.
            </p>
            <p className="text-cream-60 font-body leading-relaxed">
              The system worked well through the 1950s and early 1960s. But
              the cost of the Vietnam War and President Johnson&apos;s Great
              Society programs led to massive deficit spending. The US printed
              more dollars than its gold reserves could support. Foreign
              governments, sensing the imbalance, began demanding gold in
              exchange for their dollar reserves. France was particularly
              aggressive, sending navy ships to New York to collect gold.
            </p>
          </section>

          <section>
            <h2 className="font-display text-3xl sm:text-4xl font-semibold text-cream mb-6">
              The Nixon Shock: August 15, 1971
            </h2>
            <p className="text-cream-60 font-body leading-relaxed mb-4">
              On August 15, 1971, President Richard Nixon announced that the
              United States would no longer redeem dollars for gold. The
              stated reason was to protect the dollar from &ldquo;international
              money speculators.&rdquo; The real reason was that the US had
              printed far more dollars than its gold reserves could back.
            </p>
            <p className="text-cream-60 font-body leading-relaxed mb-4">
              Nixon called the suspension temporary. It was not. More than
              five decades later, no major currency is backed by gold. The
              Nixon Shock was the final severing of money from the physical
              world &mdash; the moment when the constraints that had governed
              monetary systems for millennia were abandoned.
            </p>
            <p className="text-cream-60 font-body leading-relaxed">
              The consequences have been profound. Since 1971, the US dollar
              has lost over 85% of its purchasing power. Government debt has
              exploded from $400 billion to over $36 trillion. Income
              inequality has widened dramatically. Financial crises have
              become larger and more frequent. These outcomes are not
              coincidences &mdash; they are the predictable results of
              removing the discipline that hard money imposed.
            </p>
          </section>

          <section>
            <h2 className="font-display text-3xl sm:text-4xl font-semibold text-cream mb-6">
              Lessons from the Gold Standard
            </h2>
            <p className="text-cream-60 font-body leading-relaxed mb-4">
              The gold standard was not perfect. It could be rigid during
              economic downturns, and it concentrated monetary power in
              nations with gold mines. But its core principle &mdash; that
              money should be hard, scarce, and resistant to political
              manipulation &mdash; produced better outcomes for ordinary
              people than any fiat system has achieved.
            </p>
            <div className="space-y-4 mt-6">
              {[
                {
                  title: "Discipline Creates Stability",
                  desc: "When governments cannot print money freely, they must live within their means. This creates long-term price stability and encourages genuine saving and investment rather than speculation fueled by cheap credit.",
                },
                {
                  title: "Soft Money Widens Inequality",
                  desc: "Fiat money creation benefits those closest to the source of new money: banks, large corporations, and asset holders. Wage earners and savers bear the cost through reduced purchasing power. Hard money levels the playing field.",
                },
                {
                  title: "Trust Must Be Verified",
                  desc: "The gold standard worked because gold is verifiable. You can weigh it, assay it, and confirm its purity. Trust in government promises alone has proven insufficient. The lesson: sound money must be auditable.",
                },
                {
                  title: "Supply Must Be Predictable",
                  desc: "Economic actors need confidence that the money supply will not change dramatically. Gold provided this through its geological scarcity. Fiat currencies fail this test because supply decisions are political, not physical.",
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
              What Comes Next: The Bitcoin Standard
            </h2>
            <p className="text-cream-60 font-body leading-relaxed mb-4">
              Bitcoin addresses the gold standard&apos;s weaknesses while
              preserving its strengths. Its supply is not just scarce but
              mathematically fixed: 21&nbsp;million coins, forever. Its
              issuance schedule is not merely predictable but immutable,
              enforced by code rather than policy. And unlike gold, Bitcoin
              is perfectly portable, infinitely divisible, and nearly
              impossible to confiscate.
            </p>
            <p className="text-cream-60 font-body leading-relaxed mb-4">
              The transition will not happen overnight. Bitcoin is still
              building the institutional infrastructure and regulatory
              clarity that gold has accumulated over centuries. But the
              direction is clear: sovereign wealth funds, central banks,
              and major corporations are accumulating Bitcoin as a reserve
              asset.
            </p>
            <p className="text-cream-60 font-body leading-relaxed">
              The gold standard taught us that hard money works. Bitcoin is
              the technology that makes hard money work in the 21st century.
              Together, gold and Bitcoin form a complementary foundation for
              protecting wealth in an era of unprecedented monetary expansion.
            </p>
          </section>

          {/* Internal Links */}
          <section className="space-y-4">
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
                The evolution of hard money from the gold standard to the
                Bitcoin standard.
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
                Why every fiat currency eventually loses its value.
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
                Side-by-side analysis of both hard money assets.
              </p>
            </Link>
          </section>

          {/* CTA */}
          <section className="text-center py-16 border-t border-cream-08">
            <h2 className="font-display text-3xl sm:text-4xl font-semibold text-cream mb-4">
              Bridge Gold and Bitcoin
            </h2>
            <p className="text-cream-45 font-body mb-8 max-w-lg mx-auto">
              Convert physical gold into Bitcoin or cash. Offramp connects the
              gold standard of the past with the Bitcoin standard of the
              future.
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
