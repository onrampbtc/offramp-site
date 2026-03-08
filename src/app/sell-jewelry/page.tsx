import Link from "next/link";

/* ------------------------------------------------------------------ */
/*  Data                                                               */
/* ------------------------------------------------------------------ */

const JEWELRY_TYPES = [
  {
    name: "Rings",
    desc: "Wedding bands, engagement settings, class rings, signet rings, cocktail rings",
    icon: (
      <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 3c-4.97 0-9 4.03-9 9s4.03 9 9 9 9-4.03 9-9-4.03-9-9-9zm0 0v2m0 14v2m9-9h-2M5 12H3" />
      </svg>
    ),
  },
  {
    name: "Chains & Necklaces",
    desc: "Rope, curb, figaro, box, herringbone, pendants, lockets, chokers",
    icon: (
      <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M13.19 8.688a4.5 4.5 0 011.242 7.244l-4.5 4.5a4.5 4.5 0 01-6.364-6.364l1.757-1.757m13.35-.622l1.757-1.757a4.5 4.5 0 00-6.364-6.364l-4.5 4.5a4.5 4.5 0 001.242 7.244" />
      </svg>
    ),
  },
  {
    name: "Bracelets",
    desc: "Bangles, tennis bracelets, cuffs, charm bracelets, link bracelets",
    icon: (
      <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.53 16.122a3 3 0 00-5.78 1.128 2.25 2.25 0 01-2.4 2.245 4.5 4.5 0 008.4-2.245c0-.399-.078-.78-.22-1.128zm0 0a15.998 15.998 0 003.388-1.62m-5.043-.025a15.994 15.994 0 011.622-3.395m3.42 3.42a15.995 15.995 0 004.764-4.648l3.876-5.814a1.151 1.151 0 00-1.597-1.597L14.146 6.32a15.996 15.996 0 00-4.649 4.764m3.42 3.42a6.776 6.776 0 00-3.42-3.42" />
      </svg>
    ),
  },
  {
    name: "Earrings",
    desc: "Studs, hoops, drop earrings, clip-ons, single earrings accepted",
    icon: (
      <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09z" />
      </svg>
    ),
  },
  {
    name: "Broken & Damaged",
    desc: "Tangled chains, broken clasps, bent rings, single pieces, scrap gold",
    icon: (
      <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M11.42 15.17l-5.1-5.1a2.25 2.25 0 113.18-3.18l5.1 5.1m-6.36 6.36l5.1 5.1a2.25 2.25 0 003.18-3.18l-5.1-5.1m-2.83 2.83l-1.42-1.42m8.49-8.49l-1.42-1.42" />
      </svg>
    ),
  },
];

const KARATS = [
  { label: "10K", purity: "41.7%", common: "Budget jewelry, class rings" },
  { label: "14K", purity: "58.3%", common: "Most US jewelry" },
  { label: "18K", purity: "75.0%", common: "Fine & European jewelry" },
  { label: "22K", purity: "91.7%", common: "Asian & Middle Eastern jewelry" },
  { label: "24K", purity: "99.9%", common: "Pure gold pieces" },
];

/* ------------------------------------------------------------------ */
/*  Reusable sub-components                                            */
/* ------------------------------------------------------------------ */

function CheckIcon() {
  return (
    <svg className="h-3 w-3" fill="currentColor" viewBox="0 0 20 20">
      <path
        fillRule="evenodd"
        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
        clipRule="evenodd"
      />
    </svg>
  );
}

function ArrowIcon({ className = "h-4 w-4" }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
    </svg>
  );
}

/* ------------------------------------------------------------------ */
/*  Page                                                               */
/* ------------------------------------------------------------------ */

export default function SellJewelryPage() {
  return (
    <div className="relative overflow-hidden">
      {/* ============================================================ */}
      {/*  HERO                                                        */}
      {/* ============================================================ */}
      <section className="relative py-32 sm:py-40 px-6 text-center">
        {/* Radial gold glow */}
        <div
          className="pointer-events-none absolute inset-0"
          aria-hidden="true"
          style={{
            background:
              "radial-gradient(ellipse 60% 40% at 50% 0%, rgba(201,168,76,0.08) 0%, transparent 70%)",
          }}
        />

        <div className="relative z-10 max-w-4xl mx-auto">
          <p className="text-xs font-body uppercase tracking-[0.3em] text-gold-500 mb-6">
            Gold Jewelry
          </p>
          <h1 className="font-display text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-semibold tracking-tight leading-[1.08]">
            Sell Gold Jewelry
            <br />
            <span className="text-gold-shimmer">for Cash</span>
          </h1>
          <p className="mt-8 max-w-2xl mx-auto text-lg sm:text-xl text-cream-60 font-body leading-relaxed">
            Offramp buys gold jewelry in any condition, including broken,
            damaged, or outdated pieces. We evaluate based on gold content using
            XRF spectrometry, not resale value. All karats accepted: 10K, 14K,
            18K, 22K, 24K.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/get-kit"
              className="group relative inline-flex items-center justify-center px-8 py-4 text-base font-body font-semibold text-bg rounded-full bg-gradient-to-r from-gold-500 via-gold-400 to-gold-600 shadow-lg shadow-gold-500/20 transition-all duration-300 hover:shadow-gold-500/40 hover:scale-[1.03]"
            >
              Get Your Free Kit
              <ArrowIcon className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
            <Link
              href="/calculators/14k"
              className="inline-flex items-center justify-center px-8 py-4 text-base font-body font-semibold text-gold-500 rounded-full border border-gold-500/40 transition-all duration-300 hover:border-gold-500 hover:bg-gold-500/5"
            >
              Estimate Value
            </Link>
          </div>

          {/* Trust row */}
          <div className="mt-16 flex flex-wrap items-center justify-center gap-x-8 gap-y-4 text-sm text-cream-45 font-body">
            {["All Karats Accepted", "$25K Insured Shipping", "48hr Payment"].map(
              (item, i) => (
                <div key={item} className="flex items-center gap-2">
                  {i > 0 && (
                    <span className="hidden sm:inline text-cream-15 -ml-4 mr-4">
                      |
                    </span>
                  )}
                  <span className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-gold-500/10 text-gold-500">
                    <CheckIcon />
                  </span>
                  {item}
                </div>
              )
            )}
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/*  WHAT WE ACCEPT                                              */}
      {/* ============================================================ */}
      <section className="py-28 sm:py-36 px-6 border-t border-cream-08">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-20">
            <p className="text-xs font-body uppercase tracking-[0.25em] text-gold-500 mb-4">
              Accepted Items
            </p>
            <h2 className="font-display text-4xl sm:text-5xl md:text-6xl font-semibold tracking-tight">
              What We Buy
            </h2>
            <p className="mt-4 max-w-xl mx-auto text-cream-45 font-body">
              We buy all types of gold jewelry regardless of style, age, or
              condition. If it contains gold, we want it.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {JEWELRY_TYPES.map((item) => (
              <div
                key={item.name}
                className="group bg-bg-card rounded-2xl p-8 sm:p-10 border border-cream-08 transition-all duration-500 hover:border-gold-500/20 hover:shadow-[0_0_40px_rgba(201,168,76,0.06)]"
              >
                <div className="mb-6 inline-flex h-14 w-14 items-center justify-center rounded-xl bg-gold-500/10 text-gold-500 transition-colors group-hover:bg-gold-500/20">
                  {item.icon}
                </div>
                <h3 className="font-display text-2xl sm:text-3xl font-semibold mb-3 text-cream">
                  {item.name}
                </h3>
                <p className="text-cream-60 font-body leading-relaxed text-sm">
                  {item.desc}
                </p>
              </div>
            ))}

            {/* Catch-all card */}
            <div className="group bg-bg-card rounded-2xl p-8 sm:p-10 border border-gold-500/20 glow-gold transition-all duration-500 hover:shadow-[0_0_60px_rgba(201,168,76,0.1)] sm:col-span-2 lg:col-span-1">
              <div className="mb-6 inline-flex h-14 w-14 items-center justify-center rounded-xl bg-gold-500/15 text-gold-400">
                <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                </svg>
              </div>
              <h3 className="font-display text-2xl sm:text-3xl font-semibold mb-3 text-gold-shimmer">
                And More
              </h3>
              <p className="text-cream-60 font-body leading-relaxed text-sm">
                Watches, brooches, pins, tie clips, cufflinks, money clips,
                charms, and any other gold item. Not sure? Send it in and we
                will test it.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/*  HOW WE PRICE                                                */}
      {/* ============================================================ */}
      <section className="py-28 sm:py-36 px-6 border-t border-cream-08">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            {/* Left - text */}
            <div>
              <p className="text-xs font-body uppercase tracking-[0.25em] text-gold-500 mb-4">
                Transparent Pricing
              </p>
              <h2 className="font-display text-4xl sm:text-5xl font-semibold tracking-tight mb-8">
                We Pay for Gold Content, Not Resale Value
              </h2>
              <div className="space-y-6 text-cream-60 font-body leading-relaxed">
                <p>
                  Unlike jewelers or pawn shops who estimate value by eye,
                  Offramp uses an XRF spectrometer to measure the exact gold
                  content of every piece down to 0.01% purity. This is the same
                  technology used by refineries and the U.S. Mint.
                </p>
                <p>
                  We calculate your payout based on melt value &mdash; the pure
                  gold weight multiplied by the current spot price. Because we
                  pay based on actual gold content rather than subjective resale
                  value, you get a higher and fairer payout.
                </p>
                <p>
                  The entire assay process is recorded on video so you can
                  verify every measurement yourself. No guessing, no games, no
                  hidden deductions.
                </p>
              </div>
              <div className="mt-8">
                <Link
                  href="/how-it-works"
                  className="inline-flex items-center gap-2 font-body text-base text-gold-500 transition-colors hover:text-gold-400"
                >
                  See how our assay works
                  <ArrowIcon />
                </Link>
              </div>
            </div>

            {/* Right - karat table */}
            <div className="border-gold-gradient rounded-2xl p-8 sm:p-10">
              <h3 className="font-display text-2xl font-semibold mb-6 text-cream">
                All Karats Accepted
              </h3>
              <div className="space-y-4">
                {KARATS.map((k) => (
                  <div
                    key={k.label}
                    className="flex items-center justify-between py-3 border-b border-cream-08 last:border-0"
                  >
                    <div className="flex items-center gap-4">
                      <span className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-gold-500/10 font-mono text-sm text-gold-400 font-medium">
                        {k.label}
                      </span>
                      <div>
                        <p className="font-body text-sm text-cream">
                          {k.common}
                        </p>
                      </div>
                    </div>
                    <span className="font-mono text-sm text-cream-45">
                      {k.purity} pure
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/*  CONDITION DOESN'T MATTER                                    */}
      {/* ============================================================ */}
      <section className="py-28 sm:py-36 px-6 border-t border-cream-08">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-xs font-body uppercase tracking-[0.25em] text-gold-500 mb-4">
            Any Condition
          </p>
          <h2 className="font-display text-4xl sm:text-5xl md:text-6xl font-semibold tracking-tight">
            Condition Doesn&apos;t Matter
          </h2>
          <p className="mt-6 max-w-2xl mx-auto text-lg text-cream-60 font-body leading-relaxed">
            Because we pay based on gold content, not aesthetic value, the
            condition of your jewelry is irrelevant. Broken, bent, tangled,
            tarnished, missing stones &mdash; it all pays the same per gram of
            pure gold.
          </p>

          <div className="mt-16 grid grid-cols-2 sm:grid-cols-4 gap-6">
            {[
              { label: "Broken Clasps", sub: "Still gold" },
              { label: "Tangled Chains", sub: "Still gold" },
              { label: "Single Earrings", sub: "Still gold" },
              { label: "Outdated Styles", sub: "Still gold" },
            ].map((item) => (
              <div
                key={item.label}
                className="bg-bg-card rounded-xl p-6 border border-cream-08"
              >
                <div className="mb-3 inline-flex h-10 w-10 items-center justify-center rounded-full bg-gold-500/10 text-gold-500">
                  <CheckIcon />
                </div>
                <p className="font-body text-sm font-medium text-cream">
                  {item.label}
                </p>
                <p className="mt-1 font-mono text-xs text-gold-400">
                  {item.sub}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/*  MINI CALCULATOR PREVIEW                                     */}
      {/* ============================================================ */}
      <section className="py-28 sm:py-36 px-6 border-t border-cream-08">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-xs font-body uppercase tracking-[0.25em] text-gold-500 mb-4">
              Quick Estimate
            </p>
            <h2 className="font-display text-4xl sm:text-5xl font-semibold tracking-tight">
              What&apos;s Your Jewelry Worth?
            </h2>
            <p className="mt-4 text-cream-45 font-body">
              Get an instant estimate, then use our full calculator for a
              detailed breakdown.
            </p>
          </div>

          <div className="border-gold-gradient rounded-2xl p-8 sm:p-10">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-8">
              {[
                {
                  karat: "10K",
                  example: "10g ring",
                  value: "$692",
                },
                {
                  karat: "14K",
                  example: "10g chain",
                  value: "$971",
                },
                {
                  karat: "18K",
                  example: "10g bracelet",
                  value: "$1,249",
                },
              ].map((item) => (
                <div
                  key={item.karat}
                  className="bg-bg/50 rounded-xl p-6 border border-cream-08 text-center"
                >
                  <span className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-gold-500/10 font-mono text-sm text-gold-400 font-medium mb-4">
                    {item.karat}
                  </span>
                  <p className="text-xs text-cream-45 font-body mb-2">
                    {item.example}
                  </p>
                  <p className="font-mono text-2xl sm:text-3xl font-medium text-cream">
                    {item.value}
                  </p>
                  <p className="mt-1 text-xs text-cream-35 font-mono">
                    est. payout
                  </p>
                </div>
              ))}
            </div>

            <div className="text-center">
              <Link
                href="/calculators/14k"
                className="inline-flex items-center gap-2 font-body text-sm text-gold-500 transition-colors hover:text-gold-400"
              >
                Use the full 14K calculator
                <ArrowIcon />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/*  CTA                                                         */}
      {/* ============================================================ */}
      <section className="py-28 sm:py-36 px-6 border-t border-cream-08">
        <div className="relative max-w-3xl mx-auto text-center">
          {/* Glow */}
          <div
            className="pointer-events-none absolute left-1/2 -translate-x-1/2 w-[600px] h-[400px]"
            aria-hidden="true"
            style={{
              background:
                "radial-gradient(ellipse at center, rgba(201,168,76,0.06) 0%, transparent 70%)",
            }}
          />

          <h2 className="relative font-display text-4xl sm:text-5xl md:text-6xl font-semibold tracking-tight">
            Ready to sell your jewelry?
          </h2>
          <p className="relative mt-4 text-xl sm:text-2xl text-cream-60 font-body">
            Get your free insured shipping kit today.
          </p>

          <div className="relative mt-10">
            <Link
              href="/get-kit"
              className="group inline-flex items-center justify-center px-10 py-5 text-lg font-body font-semibold text-bg rounded-full bg-gradient-to-r from-gold-500 via-gold-400 to-gold-600 shadow-lg shadow-gold-500/20 transition-all duration-300 hover:shadow-gold-500/40 hover:scale-[1.03]"
            >
              Get Your Free Kit
              <ArrowIcon className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>

          {/* Related links */}
          <div className="relative mt-16 flex flex-wrap items-center justify-center gap-x-8 gap-y-4">
            {[
              { label: "How It Works", href: "/how-it-works" },
              { label: "All Sell Options", href: "/sell" },
              { label: "14K Calculator", href: "/calculators/14k" },
            ].map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="inline-flex items-center gap-1.5 font-body text-sm text-cream-45 transition-colors hover:text-gold-500"
              >
                {link.label}
                <ArrowIcon className="h-3.5 w-3.5" />
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
