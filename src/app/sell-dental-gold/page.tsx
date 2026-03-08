import Link from "next/link";

/* ------------------------------------------------------------------ */
/*  Data                                                               */
/* ------------------------------------------------------------------ */

const DENTAL_ITEMS = [
  {
    name: "Crowns",
    desc: "Gold crowns, porcelain-fused-to-gold crowns (PFG), and crown fragments",
    icon: (
      <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
      </svg>
    ),
  },
  {
    name: "Bridges",
    desc: "Full gold bridges, multi-unit bridges, and bridge components",
    icon: (
      <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M13.19 8.688a4.5 4.5 0 011.242 7.244l-4.5 4.5a4.5 4.5 0 01-6.364-6.364l1.757-1.757m13.35-.622l1.757-1.757a4.5 4.5 0 00-6.364-6.364l-4.5 4.5a4.5 4.5 0 001.242 7.244" />
      </svg>
    ),
  },
  {
    name: "Inlays & Onlays",
    desc: "Gold inlays, onlays, and fillings of any size",
    icon: (
      <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09z" />
      </svg>
    ),
  },
  {
    name: "Dental Scrap",
    desc: "Loose gold filings, dental sweeps, polishings, and miscellaneous scrap",
    icon: (
      <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 6.375c0 2.278-3.694 4.125-8.25 4.125S3.75 8.653 3.75 6.375m16.5 0c0-2.278-3.694-4.125-8.25-4.125S3.75 4.097 3.75 6.375m16.5 0v11.25c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125V6.375m16.5 0v3.75m-16.5-3.75v3.75m16.5 0v3.75C20.25 16.153 16.556 18 12 18s-8.25-1.847-8.25-4.125v-3.75m16.5 0c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125" />
      </svg>
    ),
  },
];

const XRF_STEPS = [
  {
    step: "01",
    title: "Send It In",
    desc: "Pack your dental gold in the free insured kit. Clean or unclean, it does not matter. We handle the preparation.",
  },
  {
    step: "02",
    title: "XRF Analysis",
    desc: "Our XRF spectrometer measures the exact gold, platinum, palladium, and silver content to 0.01% precision, all recorded on video.",
  },
  {
    step: "03",
    title: "Fair Payout",
    desc: "Your offer is calculated from verified precious metal content at current market prices. Accept and get paid within 48 hours.",
  },
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

export default function SellDentalGoldPage() {
  return (
    <div className="relative overflow-hidden">
      {/* ============================================================ */}
      {/*  HERO                                                        */}
      {/* ============================================================ */}
      <section className="relative py-32 sm:py-40 px-6 text-center">
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
            Dental Gold
          </p>
          <h1 className="font-display text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-semibold tracking-tight leading-[1.08]">
            Sell Dental Gold
            <br />
            <span className="text-gold-shimmer">for Cash</span>
          </h1>
          <p className="mt-8 max-w-2xl mx-auto text-lg sm:text-xl text-cream-60 font-body leading-relaxed">
            Offramp buys dental gold including crowns, bridges, inlays, and
            dental scrap. We accept both clean and unclean pieces. XRF analysis
            determines exact gold content for a fair payout based on current
            market prices.
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
              href="/calculators/dental"
              className="inline-flex items-center justify-center px-8 py-4 text-base font-body font-semibold text-gold-500 rounded-full border border-gold-500/40 transition-all duration-300 hover:border-gold-500 hover:bg-gold-500/5"
            >
              Dental Gold Calculator
            </Link>
          </div>

          <div className="mt-16 flex flex-wrap items-center justify-center gap-x-8 gap-y-4 text-sm text-cream-45 font-body">
            {["Clean or Unclean", "XRF Tested", "All Dental Work Accepted"].map(
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
              Dental Gold We Buy
            </h2>
            <p className="mt-4 max-w-xl mx-auto text-cream-45 font-body">
              We accept all types of dental gold work, whether it came from your
              dentist, an estate, or a collection. Clean or unclean.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {DENTAL_ITEMS.map((item) => (
              <div
                key={item.name}
                className="group bg-bg-card rounded-2xl p-8 sm:p-10 border border-cream-08 transition-all duration-500 hover:border-gold-500/20 hover:shadow-[0_0_40px_rgba(201,168,76,0.06)]"
              >
                <div className="flex items-start gap-6">
                  <div className="shrink-0 inline-flex h-14 w-14 items-center justify-center rounded-xl bg-gold-500/10 text-gold-500 transition-colors group-hover:bg-gold-500/20">
                    {item.icon}
                  </div>
                  <div>
                    <h3 className="font-display text-2xl sm:text-3xl font-semibold mb-2 text-cream">
                      {item.name}
                    </h3>
                    <p className="text-cream-60 font-body leading-relaxed text-sm">
                      {item.desc}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Clean or unclean callout */}
          <div className="mt-10 border-gold-gradient rounded-2xl p-8 sm:p-10">
            <div className="flex flex-col sm:flex-row items-center gap-6 text-center sm:text-left">
              <div className="shrink-0 inline-flex h-16 w-16 items-center justify-center rounded-full bg-gold-500/15 text-gold-400">
                <CheckIcon />
              </div>
              <div>
                <h3 className="font-display text-2xl font-semibold text-cream mb-2">
                  Clean or Unclean &mdash; We Accept Both
                </h3>
                <p className="text-cream-60 font-body leading-relaxed">
                  You do not need to clean or prepare your dental gold in any
                  way. Send it exactly as you received it from your dentist. Our
                  team handles all preparation and cleaning before the XRF
                  analysis.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/*  TYPICAL PURITY                                              */}
      {/* ============================================================ */}
      <section className="py-28 sm:py-36 px-6 border-t border-cream-08">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            {/* Left */}
            <div>
              <p className="text-xs font-body uppercase tracking-[0.25em] text-gold-500 mb-4">
                Purity Range
              </p>
              <h2 className="font-display text-4xl sm:text-5xl font-semibold tracking-tight mb-8">
                Higher Purity Than You Think
              </h2>
              <div className="space-y-6 text-cream-60 font-body leading-relaxed">
                <p>
                  Dental gold is typically alloyed to be extremely durable,
                  resulting in purities ranging from 10K to 22K. The most common
                  dental gold alloys fall in the 16K to 20K range &mdash;
                  significantly higher than the 10K&ndash;14K typical of fashion
                  jewelry.
                </p>
                <p>
                  Many dental gold alloys also contain platinum and palladium,
                  which are valuable precious metals in their own right. Our XRF
                  spectrometer detects all precious metals present, so you get
                  paid for everything &mdash; not just the gold.
                </p>
                <p>
                  A single dental crown typically weighs 2&ndash;5 grams and at
                  current gold prices can be worth $50&ndash;$250 or more
                  depending on the gold content.
                </p>
              </div>
            </div>

            {/* Right - purity breakdown */}
            <div className="border-gold-gradient rounded-2xl p-8 sm:p-10">
              <h3 className="font-display text-2xl font-semibold mb-8 text-cream">
                Typical Dental Gold Purity
              </h3>

              <div className="space-y-6">
                {[
                  {
                    label: "High Noble",
                    range: "60%+ gold (15K-22K)",
                    bar: 85,
                    note: "Premium dental crowns and bridges",
                  },
                  {
                    label: "Noble",
                    range: "25-60% gold (6K-15K)",
                    bar: 55,
                    note: "Standard dental restorations",
                  },
                  {
                    label: "Base Metal Alloy",
                    range: "<25% gold",
                    bar: 20,
                    note: "Lower-tier dental work",
                  },
                ].map((item) => (
                  <div key={item.label}>
                    <div className="flex items-center justify-between mb-2">
                      <span className="font-body text-sm font-medium text-cream">
                        {item.label}
                      </span>
                      <span className="font-mono text-xs text-gold-400">
                        {item.range}
                      </span>
                    </div>
                    <div className="h-2 rounded-full bg-cream-08 overflow-hidden">
                      <div
                        className="h-full rounded-full bg-gradient-to-r from-gold-600 to-gold-400"
                        style={{ width: `${item.bar}%` }}
                      />
                    </div>
                    <p className="mt-1.5 text-xs text-cream-35 font-body">
                      {item.note}
                    </p>
                  </div>
                ))}
              </div>

              <div className="mt-8 p-4 rounded-xl bg-gold-500/5 border border-gold-500/10">
                <p className="text-sm text-cream-60 font-body leading-relaxed">
                  <span className="text-gold-400 font-medium">
                    Most dental gold is 16K&ndash;20K
                  </span>{" "}
                  &mdash; often purer than jewelry gold. Our XRF spectrometer
                  determines the exact composition.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/*  HOW WE TEST                                                 */}
      {/* ============================================================ */}
      <section className="py-28 sm:py-36 px-6 border-t border-cream-08">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-20">
            <p className="text-xs font-body uppercase tracking-[0.25em] text-gold-500 mb-4">
              The Process
            </p>
            <h2 className="font-display text-4xl sm:text-5xl md:text-6xl font-semibold tracking-tight">
              How We Test Dental Gold
            </h2>
            <p className="mt-4 max-w-xl mx-auto text-cream-45 font-body">
              XRF spectrometry is non-destructive, precise, and fast. The same
              technology used by refineries worldwide.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {XRF_STEPS.map((item) => (
              <div
                key={item.step}
                className="group relative bg-bg-card rounded-2xl p-8 sm:p-10 border border-cream-08 transition-all duration-500 hover:border-gold-500/20 hover:shadow-[0_0_40px_rgba(201,168,76,0.06)]"
              >
                <div className="mb-8 flex h-14 w-14 items-center justify-center rounded-full border-2 border-gold-500/30 transition-colors group-hover:border-gold-500 group-hover:bg-gold-500/10">
                  <span className="font-mono text-lg text-gold-500 font-medium">
                    {item.step}
                  </span>
                </div>
                <h3 className="font-display text-2xl sm:text-3xl font-semibold mb-4 text-cream">
                  {item.title}
                </h3>
                <p className="text-cream-60 font-body leading-relaxed text-base">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>

          {/* XRF accuracy callout */}
          <div className="mt-12 bg-bg-card rounded-2xl p-8 sm:p-10 border border-cream-08">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 text-center">
              {[
                {
                  stat: "0.01%",
                  label: "Purity Precision",
                  sub: "XRF accuracy",
                },
                {
                  stat: "Au, Pt, Pd, Ag",
                  label: "All Precious Metals",
                  sub: "Detected and valued",
                },
                {
                  stat: "100%",
                  label: "Video Documented",
                  sub: "Full transparency",
                },
              ].map((item) => (
                <div key={item.label}>
                  <p className="font-mono text-3xl sm:text-4xl font-medium text-gold-400">
                    {item.stat}
                  </p>
                  <p className="mt-2 font-body text-sm text-cream font-medium">
                    {item.label}
                  </p>
                  <p className="mt-1 font-mono text-xs text-cream-35">
                    {item.sub}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/*  CTA                                                         */}
      {/* ============================================================ */}
      <section className="py-28 sm:py-36 px-6 border-t border-cream-08">
        <div className="relative max-w-3xl mx-auto text-center">
          <div
            className="pointer-events-none absolute left-1/2 -translate-x-1/2 w-[600px] h-[400px]"
            aria-hidden="true"
            style={{
              background:
                "radial-gradient(ellipse at center, rgba(201,168,76,0.06) 0%, transparent 70%)",
            }}
          />

          <h2 className="relative font-display text-4xl sm:text-5xl md:text-6xl font-semibold tracking-tight">
            Ready to sell your dental gold?
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

          <div className="relative mt-16 flex flex-wrap items-center justify-center gap-x-8 gap-y-4">
            {[
              { label: "How It Works", href: "/how-it-works" },
              { label: "All Sell Options", href: "/sell" },
              { label: "Dental Gold Calculator", href: "/calculators/dental" },
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
