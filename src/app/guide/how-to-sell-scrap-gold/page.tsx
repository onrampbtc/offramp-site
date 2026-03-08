import Link from "next/link";

export default function HowToSellScrapGoldPage() {
  return (
    <>
      <script
        type="application/ld+json"
        suppressHydrationWarning
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline: "How to Sell Scrap Gold for the Best Price",
            author: { "@type": "Person", name: "Yasmine" },
            publisher: {
              "@type": "Organization",
              name: "Offramp",
              url: "https://offrampgold.com",
            },
            datePublished: "2026-03-01",
            dateModified: "2026-03-01",
            description:
              "Complete guide to selling scrap gold for the best price.",
            mainEntityOfPage:
              "https://offrampgold.com/guide/how-to-sell-scrap-gold",
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
            How to Sell Scrap Gold for the Best Price
          </h1>
          <p className="text-cream-45 font-body text-lg max-w-2xl mx-auto mb-4">
            Broken chains, single earrings, dental gold, old watches &mdash;
            your scrap gold is worth real money. Here is how to maximize your
            payout.
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
              Scrap gold includes broken jewelry, single earrings, dental gold,
              watch cases, and any gold item valued for its metal content rather
              than design. Sort by karat, weigh accurately, and sell to a buyer
              that pays the highest percentage of melt value.
            </p>
          </div>
        </div>
      </section>

      {/* ── Article ── */}
      <article className="px-6 pb-24">
        <div className="max-w-3xl mx-auto space-y-16">
          <section>
            <h2 className="font-display text-3xl sm:text-4xl font-semibold text-cream mb-6">
              What Counts as Scrap Gold?
            </h2>
            <p className="text-cream-60 font-body leading-relaxed mb-6">
              Scrap gold is any gold item that is valued primarily for its
              metal content rather than its craftsmanship, design, or brand.
              Common examples include:
            </p>
            <div className="grid sm:grid-cols-2 gap-4">
              {[
                "Broken chains and necklaces",
                "Single or mismatched earrings",
                "Bent or damaged rings",
                "Dental crowns and bridges",
                "Old watch cases and bands",
                "Gold-plated electronics (pins, connectors)",
                "Class rings you will never wear",
                "Outdated or unworn jewelry",
              ].map((item) => (
                <div
                  key={item}
                  className="flex items-start gap-3 bg-bg-card border border-cream-08 rounded-lg p-4"
                >
                  <span className="text-gold-500 mt-0.5">&#9670;</span>
                  <span className="text-cream-60 font-body text-sm">
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </section>

          <section>
            <h2 className="font-display text-3xl sm:text-4xl font-semibold text-cream mb-6">
              Sort by Karat
            </h2>
            <p className="text-cream-60 font-body leading-relaxed mb-4">
              Different karat purities have different values per gram. Mixing
              10K and 18K pieces together leads to inaccurate estimates and
              potential lowball offers.
            </p>
            <p className="text-cream-60 font-body leading-relaxed mb-4">
              Look for karat stamps on each piece: 10K (417), 14K (585), 18K
              (750), 22K (916), or 24K (999). Place each piece in a separate
              bag or container labeled with its karat.
            </p>
            <p className="text-cream-60 font-body leading-relaxed">
              Unmarked pieces should go in their own pile. These will need
              professional testing with an XRF spectrometer or acid test to
              determine purity. Do not assume they are worthless &mdash; many
              older pieces were not stamped but contain genuine gold.
            </p>
          </section>

          <section>
            <h2 className="font-display text-3xl sm:text-4xl font-semibold text-cream mb-6">
              Weigh Accurately
            </h2>
            <p className="text-cream-60 font-body leading-relaxed mb-4">
              Use a digital scale that measures in grams to at least one
              decimal place. Kitchen scales and postal scales both work. Weigh
              each karat group separately.
            </p>
            <p className="text-cream-60 font-body leading-relaxed">
              Remove any non-gold components: clasps that may be base metal,
              leather or fabric elements, large gemstones. The buyer pays for
              gold weight, and extra non-gold weight dilutes your per-gram
              value.
            </p>
          </section>

          <section>
            <h2 className="font-display text-3xl sm:text-4xl font-semibold text-cream mb-6">
              Dental Gold: A Hidden Treasure
            </h2>
            <p className="text-cream-60 font-body leading-relaxed mb-4">
              Dental gold is often overlooked but can be quite valuable. Dental
              crowns, bridges, and inlays are typically made from high-purity
              gold alloys, often 16K to 22K. A single dental crown can contain
              1 to 3 grams of gold.
            </p>
            <p className="text-cream-60 font-body leading-relaxed">
              If you have dental gold &mdash; from a relative&apos;s estate or
              your own dental work &mdash; include it with your scrap gold
              shipment. Offramp tests dental gold with the same XRF
              spectrometer used for jewelry, ensuring you get paid for the
              exact purity.
            </p>
          </section>

          <section>
            <h2 className="font-display text-3xl sm:text-4xl font-semibold text-cream mb-6">
              Finding the Right Buyer
            </h2>
            <p className="text-cream-60 font-body leading-relaxed mb-4">
              Scrap gold buyers range from pawn shops (20&ndash;55% of melt
              value) to online buyers like Offramp (80%+ of melt value). The
              difference on a typical scrap lot can be hundreds of dollars.
            </p>
            <p className="text-cream-60 font-body leading-relaxed mb-4">
              Avoid &ldquo;gold parties&rdquo; and hotel-room gold buyers.
              These operations typically pay even less than pawn shops and
              create social pressure to accept low offers.
            </p>
            <p className="text-cream-60 font-body leading-relaxed">
              The best approach: calculate your estimated melt value using a
              gold calculator, then compare that number to what each buyer
              offers. The buyer paying the highest percentage wins.
            </p>
          </section>

          {/* Internal Links */}
          <section className="space-y-4">
            <Link
              href="/calculators/scrap"
              className="block border border-gold-500/20 rounded-xl p-6 hover:border-gold-500/40 transition-colors bg-bg-card"
            >
              <p className="text-gold-500 font-mono text-xs tracking-widest uppercase mb-2">
                Tool
              </p>
              <p className="text-cream font-display text-xl">
                Scrap Gold Calculator &rarr;
              </p>
              <p className="text-cream-45 text-sm mt-1">
                Calculate the value of your scrap gold with live spot prices.
              </p>
            </Link>
            <Link
              href="/sell"
              className="block border border-gold-500/20 rounded-xl p-6 hover:border-gold-500/40 transition-colors bg-bg-card"
            >
              <p className="text-gold-500 font-mono text-xs tracking-widest uppercase mb-2">
                Get Started
              </p>
              <p className="text-cream font-display text-xl">
                Sell Scrap Gold with Offramp &rarr;
              </p>
              <p className="text-cream-45 text-sm mt-1">
                Free insured shipping, professional XRF assay, 80%+ payout.
              </p>
            </Link>
            <Link
              href="/gold-calculator"
              className="block border border-gold-500/20 rounded-xl p-6 hover:border-gold-500/40 transition-colors bg-bg-card"
            >
              <p className="text-gold-500 font-mono text-xs tracking-widest uppercase mb-2">
                Calculator
              </p>
              <p className="text-cream font-display text-xl">
                Gold Value Calculator &rarr;
              </p>
              <p className="text-cream-45 text-sm mt-1">
                Enter weight and karat for an instant value estimate.
              </p>
            </Link>
          </section>

          {/* CTA */}
          <section className="text-center py-16 border-t border-cream-08">
            <h2 className="font-display text-3xl sm:text-4xl font-semibold text-cream mb-4">
              Turn Your Scrap into Cash
            </h2>
            <p className="text-cream-45 font-body mb-8 max-w-lg mx-auto">
              Broken jewelry, dental gold, old watches &mdash; Offramp buys it
              all. 80%+ of spot value with free insured shipping.
            </p>
            <Link
              href="/sell"
              className="inline-block bg-gold-500 text-bg font-body font-semibold px-8 py-4 rounded-lg hover:bg-gold-400 transition-colors"
            >
              Sell Scrap Gold
            </Link>
          </section>
        </div>
      </article>
    </>
  );
}
