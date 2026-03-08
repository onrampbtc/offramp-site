import Link from "next/link";

export default function SellInheritedGoldPage() {
  return (
    <>
      <script
        type="application/ld+json"
        suppressHydrationWarning
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline: "How to Sell Inherited Gold and Jewelry",
            author: { "@type": "Person", name: "Yasmine" },
            publisher: {
              "@type": "Organization",
              name: "Offramp",
              url: "https://offramp.com",
            },
            datePublished: "2026-03-01",
            dateModified: "2026-03-01",
            description:
              "A sensitive guide to selling inherited gold and jewelry with care.",
            mainEntityOfPage:
              "https://offramp.com/guide/sell-inherited-gold",
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
            How to Sell Inherited Gold and Jewelry
          </h1>
          <p className="text-cream-45 font-body text-lg max-w-2xl mx-auto mb-4">
            A thoughtful guide for navigating the process of selling inherited
            precious metals &mdash; balancing financial decisions with
            sentimental value.
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
              Selling inherited gold requires care. Start by inventorying all
              pieces: separate jewelry from coins and bullion. Get each item
              tested for purity. Consider which pieces have sentimental or
              collector value before selling for melt value.
            </p>
          </div>
        </div>
      </section>

      {/* ── Article ── */}
      <article className="px-6 pb-24">
        <div className="max-w-3xl mx-auto space-y-16">
          <section>
            <h2 className="font-display text-3xl sm:text-4xl font-semibold text-cream mb-6">
              Take Your Time
            </h2>
            <p className="text-cream-60 font-body leading-relaxed mb-4">
              There is no rush. Gold does not spoil, degrade, or lose value
              sitting in a drawer. If you have recently inherited gold from a
              loved one, give yourself the space to process before making
              financial decisions.
            </p>
            <p className="text-cream-60 font-body leading-relaxed">
              When you are ready, approach the process methodically. The
              difference between a hasty sale and a well-prepared one can be
              hundreds or even thousands of dollars.
            </p>
          </section>

          <section>
            <h2 className="font-display text-3xl sm:text-4xl font-semibold text-cream mb-6">
              Inventory Everything
            </h2>
            <p className="text-cream-60 font-body leading-relaxed mb-4">
              Lay out all pieces and sort them into categories: rings,
              necklaces, bracelets, earrings, coins, bars, watches, and
              miscellaneous items like dental gold or gold-filled pieces.
            </p>
            <p className="text-cream-60 font-body leading-relaxed mb-4">
              Photograph each piece next to a ruler for scale. Note any
              inscriptions, hallmarks, or maker&apos;s marks. This
              documentation is important for insurance, estate records, and
              getting accurate quotes.
            </p>
            <p className="text-cream-60 font-body leading-relaxed">
              Separate items into three piles: items to keep for sentimental
              reasons, items that might have collector or antique value beyond
              melt, and items to sell for gold content.
            </p>
          </section>

          <section>
            <h2 className="font-display text-3xl sm:text-4xl font-semibold text-cream mb-6">
              Sentimental Considerations
            </h2>
            <p className="text-cream-60 font-body leading-relaxed mb-4">
              Not everything should be sold. A grandmother&apos;s wedding ring
              may be worth $200 at melt value but priceless as a family
              heirloom. Consider offering sentimental pieces to other family
              members before selling.
            </p>
            <p className="text-cream-60 font-body leading-relaxed">
              For pieces you decide to keep, consider having them appraised and
              insured. A professional appraisal documents the item&apos;s value
              for insurance purposes and creates a record for future
              generations.
            </p>
          </section>

          <section>
            <h2 className="font-display text-3xl sm:text-4xl font-semibold text-cream mb-6">
              Check for Collector Value
            </h2>
            <p className="text-cream-60 font-body leading-relaxed mb-4">
              Some inherited gold items are worth significantly more than their
              melt value. Gold coins from certain years, mints, or with low
              mintages can command premiums of 2x, 5x, or even 100x over spot
              price.
            </p>
            <p className="text-cream-60 font-body leading-relaxed mb-4">
              Vintage jewelry from known designers &mdash; Cartier, Tiffany,
              Van Cleef &amp; Arpels &mdash; can also be worth far more as
              jewelry than as scrap gold. If you suspect a piece might be
              collectible, have it appraised by a specialist before selling
              for melt.
            </p>
            <p className="text-cream-60 font-body leading-relaxed">
              For standard jewelry and modern bullion coins, melt value is
              typically the most you can expect. An online buyer like Offramp
              will pay 80%+ of melt value for these items.
            </p>
          </section>

          <section>
            <h2 className="font-display text-3xl sm:text-4xl font-semibold text-cream mb-6">
              Tax Implications
            </h2>
            <p className="text-cream-60 font-body leading-relaxed mb-4">
              Inherited gold receives a &ldquo;stepped-up basis&rdquo; for tax
              purposes. This means the cost basis is reset to the fair market
              value on the date of the decedent&apos;s death, not what they
              originally paid. If you sell shortly after inheriting, you may
              owe little or no capital gains tax.
            </p>
            <p className="text-cream-60 font-body leading-relaxed">
              Consult a tax professional for specific guidance. Tax rules vary
              by state and situation, and the stepped-up basis rules may change
              over time. Keep records of the date of death, the gold spot
              price on that date, and the sale price when you sell.
            </p>
          </section>

          <section>
            <h2 className="font-display text-3xl sm:text-4xl font-semibold text-cream mb-6">
              Choosing a Buyer for Inherited Gold
            </h2>
            <p className="text-cream-60 font-body leading-relaxed mb-4">
              For inherited gold you have decided to sell, the same rules apply
              as any gold sale: get multiple quotes, understand the melt value
              before negotiating, and choose a buyer that pays the highest
              percentage of spot.
            </p>
            <p className="text-cream-60 font-body leading-relaxed">
              Offramp is a particularly good fit for inherited gold because we
              handle mixed lots &mdash; jewelry, coins, and bullion all in one
              shipment. Each piece is tested individually with our XRF
              spectrometer and recorded on video, so you know exactly what each
              item was worth.
            </p>
          </section>

          {/* Internal Links */}
          <section className="space-y-4">
            <Link
              href="/sell"
              className="block border border-gold-500/20 rounded-xl p-6 hover:border-gold-500/40 transition-colors bg-bg-card"
            >
              <p className="text-gold-500 font-mono text-xs tracking-widest uppercase mb-2">
                Get Started
              </p>
              <p className="text-cream font-display text-xl">
                Sell Gold with Offramp &rarr;
              </p>
              <p className="text-cream-45 text-sm mt-1">
                We handle mixed lots of jewelry, coins, and bullion.
              </p>
            </Link>
            <Link
              href="/sell-jewelry"
              className="block border border-gold-500/20 rounded-xl p-6 hover:border-gold-500/40 transition-colors bg-bg-card"
            >
              <p className="text-gold-500 font-mono text-xs tracking-widest uppercase mb-2">
                Related
              </p>
              <p className="text-cream font-display text-xl">
                Sell Gold Jewelry &rarr;
              </p>
              <p className="text-cream-45 text-sm mt-1">
                Specific guidance for selling gold jewelry online.
              </p>
            </Link>
            <Link
              href="/sell-coins"
              className="block border border-gold-500/20 rounded-xl p-6 hover:border-gold-500/40 transition-colors bg-bg-card"
            >
              <p className="text-gold-500 font-mono text-xs tracking-widest uppercase mb-2">
                Related
              </p>
              <p className="text-cream font-display text-xl">
                Sell Gold Coins &rarr;
              </p>
              <p className="text-cream-45 text-sm mt-1">
                Guidance for selling inherited gold coins and bullion.
              </p>
            </Link>
          </section>

          {/* CTA */}
          <section className="text-center py-16 border-t border-cream-08">
            <h2 className="font-display text-3xl sm:text-4xl font-semibold text-cream mb-4">
              We Handle Inherited Gold with Care
            </h2>
            <p className="text-cream-45 font-body mb-8 max-w-lg mx-auto">
              Mixed lots welcome. Every piece tested individually on video.
              80%+ of spot value. Payment by wire or Bitcoin.
            </p>
            <Link
              href="/sell"
              className="inline-block bg-gold-500 text-bg font-body font-semibold px-8 py-4 rounded-lg hover:bg-gold-400 transition-colors"
            >
              Start Your Sale
            </Link>
          </section>
        </div>
      </article>
    </>
  );
}
