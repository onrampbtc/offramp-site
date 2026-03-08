import Link from "next/link";

/* ------------------------------------------------------------------ */
/*  Gold type data                                                     */
/* ------------------------------------------------------------------ */
const GOLD_TYPES = [
  {
    title: "Jewelry",
    description:
      "Rings, necklaces, bracelets, earrings, watches, and broken pieces. Any karat from 8K to 24K.",
    icon: (
      <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M21 11.25v8.25a1.5 1.5 0 01-1.5 1.5H5.25a1.5 1.5 0 01-1.5-1.5v-8.25M12 4.875A2.625 2.625 0 109.375 7.5H12m0-2.625V7.5m0-2.625A2.625 2.625 0 1114.625 7.5H12m0 0V21m-8.625-9.75h18c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125h-18c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125z" />
      </svg>
    ),
  },
  {
    title: "Coins & Bullion",
    description:
      "American Eagles, Krugerrands, Maple Leafs, bars, rounds, and all sovereign gold coins.",
    icon: (
      <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    title: "Dental Gold",
    description:
      "Crowns, bridges, inlays, and dental alloys. We accept dental gold in any condition, even attached to porcelain.",
    icon: (
      <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 3.104v5.714a2.25 2.25 0 01-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 014.5 0m0 0v5.714a2.25 2.25 0 00.659 1.591L19 14.5M14.25 3.104c.251.023.501.05.75.082M19 14.5l-2.47 2.47a2.25 2.25 0 01-1.59.659H9.06a2.25 2.25 0 01-1.591-.659L5 14.5m14 0V17a2.25 2.25 0 01-2.25 2.25H7.25A2.25 2.25 0 015 17v-2.5" />
      </svg>
    ),
  },
  {
    title: "Scrap Gold",
    description:
      "Broken chains, single earrings, watch cases, gold flake, nuggets, and industrial gold scrap.",
    icon: (
      <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 6.375c0 2.278-3.694 4.125-8.25 4.125S3.75 8.653 3.75 6.375m16.5 0c0-2.278-3.694-4.125-8.25-4.125S3.75 4.097 3.75 6.375m16.5 0v11.25c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125V6.375m16.5 0v3.75m-16.5-3.75v3.75m16.5 0v3.75C20.25 16.153 16.556 18 12 18s-8.25-1.847-8.25-4.125v-3.75m16.5 0c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125" />
      </svg>
    ),
  },
];

/* ------------------------------------------------------------------ */
/*  Pricing comparison data                                            */
/* ------------------------------------------------------------------ */
const PRICING_ROWS = [
  { label: "Pawn Shop", payout: "20-55%", highlight: false },
  { label: "We Buy Gold stores", payout: "40-60%", highlight: false },
  { label: "Online competitors", payout: "60-75%", highlight: false },
  { label: "Offramp", payout: "80%+", highlight: true },
];

/* ------------------------------------------------------------------ */
/*  Page                                                               */
/* ------------------------------------------------------------------ */
export default function SellPage() {
  return (
    <div className="relative overflow-hidden">
      {/* ============================================================ */}
      {/*  HERO                                                        */}
      {/* ============================================================ */}
      <section className="relative min-h-[85vh] flex flex-col items-center justify-center px-6 text-center">
        {/* Radial gold glow */}
        <div
          className="pointer-events-none absolute inset-0"
          aria-hidden="true"
          style={{
            background:
              "radial-gradient(ellipse 70% 50% at 50% 0%, rgba(201,168,76,0.10) 0%, transparent 70%)",
          }}
        />

        {/* Concentric rings */}
        <div className="pointer-events-none absolute inset-0 flex items-center justify-center" aria-hidden="true">
          <div className="absolute h-[500px] w-[500px] rounded-full border border-gold-500/[0.04] animate-pulse" />
          <div className="absolute h-[800px] w-[800px] rounded-full border border-gold-500/[0.03]" style={{ animation: "pulse 3s cubic-bezier(0.4,0,0.6,1) infinite" }} />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto animate-fade-in-up">
          <p className="text-xs font-body uppercase tracking-[0.3em] text-gold-500 mb-6">
            Sell Gold Online
          </p>
          <h1 className="font-display text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-semibold tracking-tight leading-[1.1]">
            Sell Your Gold
            <br />
            <span className="text-gold-shimmer">for Cash</span>
          </h1>

          <p className="mt-6 max-w-2xl mx-auto text-lg sm:text-xl text-cream-60 font-body leading-relaxed">
            Turn your unwanted jewelry, coins, dental gold, and scrap into
            cash. Free insured shipping, transparent XRF assay, and wire
            payment within 48 hours.
          </p>

          {/* CTAs */}
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/get-kit"
              className="group relative inline-flex items-center justify-center px-8 py-4 text-base font-body font-semibold text-bg rounded-full bg-gradient-to-r from-gold-500 via-gold-400 to-gold-600 shadow-lg shadow-gold-500/20 transition-all duration-300 hover:shadow-gold-500/40 hover:scale-[1.03]"
            >
              Get Your Free Kit
              <svg className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
            <Link
              href="/gold-calculator"
              className="inline-flex items-center justify-center px-8 py-4 text-base font-body font-semibold text-gold-500 rounded-full border border-gold-500/40 transition-all duration-300 hover:border-gold-500 hover:bg-gold-500/5"
            >
              Estimate Your Gold&apos;s Value
            </Link>
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/*  AEO ANSWER BOX                                              */}
      {/* ============================================================ */}
      <section className="py-16 px-6">
        <div className="max-w-3xl mx-auto">
          <div className="border-gold-gradient rounded-2xl p-8 sm:p-10">
            <div className="flex items-start gap-4">
              <div className="hidden sm:flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-gold-500/10">
                <svg className="h-5 w-5 text-gold-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.455 2.456L21.75 6l-1.036.259a3.375 3.375 0 00-2.455 2.456z" />
                </svg>
              </div>
              <div>
                <p className="text-xs font-mono uppercase tracking-widest text-gold-500 mb-3">
                  Quick Answer
                </p>
                <p className="font-body text-base sm:text-lg text-cream-60 leading-relaxed">
                  Offramp buys gold jewelry, coins, bars, and scrap gold via a
                  free insured mail-in service. We assay with XRF spectrometry
                  and wire USD directly to your bank account within 48 hours of
                  acceptance.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/*  WHAT WE BUY                                                 */}
      {/* ============================================================ */}
      <section className="py-28 sm:py-36 px-6 border-t border-cream-08">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-20">
            <p className="text-xs font-body uppercase tracking-[0.25em] text-gold-500 mb-4">
              What We Buy
            </p>
            <h2 className="font-display text-4xl sm:text-5xl md:text-6xl font-semibold tracking-tight">
              Every Form of Gold
            </h2>
            <p className="mt-4 max-w-xl mx-auto text-cream-45 font-body">
              From fine jewelry to scrap metal, we buy it all at transparent
              prices based on live spot.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {GOLD_TYPES.map((type) => (
              <div
                key={type.title}
                className="group relative bg-bg-card rounded-2xl p-8 sm:p-10 border border-cream-08 transition-all duration-500 hover:border-gold-500/20 hover:shadow-[0_0_40px_rgba(201,168,76,0.06)]"
              >
                <div className="mb-6 inline-flex h-14 w-14 items-center justify-center rounded-xl bg-gold-500/10 text-gold-500 transition-colors group-hover:bg-gold-500/20">
                  {type.icon}
                </div>
                <h3 className="font-display text-2xl sm:text-3xl font-semibold mb-3 text-cream">
                  {type.title}
                </h3>
                <p className="text-cream-60 font-body leading-relaxed text-base">
                  {type.description}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <p className="text-cream-45 font-body text-sm">
              Not sure if we buy your item?{" "}
              <Link href="/get-kit" className="text-gold-500 hover:text-gold-400 transition-colors underline underline-offset-4">
                Request a free kit
              </Link>{" "}
              and we&apos;ll evaluate everything you send.
            </p>
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/*  PRICING TRANSPARENCY                                        */}
      {/* ============================================================ */}
      <section className="py-28 sm:py-36 px-6 border-t border-cream-08">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-20">
            <p className="text-xs font-body uppercase tracking-[0.25em] text-gold-500 mb-4">
              Pricing
            </p>
            <h2 className="font-display text-4xl sm:text-5xl md:text-6xl font-semibold tracking-tight">
              Transparent Pricing
            </h2>
            <p className="mt-4 max-w-xl mx-auto text-cream-45 font-body">
              We pay 80%+ of melt value based on live spot price. No hidden
              fees, no lowball offers.
            </p>
          </div>

          {/* Payout Comparison */}
          <div className="border-gold-gradient rounded-2xl overflow-hidden">
            <div className="grid grid-cols-2 text-center border-b border-cream-08 bg-bg-card">
              <div className="px-6 py-4">
                <span className="text-xs font-body uppercase tracking-widest text-cream-45">
                  Buyer
                </span>
              </div>
              <div className="px-6 py-4">
                <span className="text-xs font-body uppercase tracking-widest text-cream-45">
                  % of Spot Payout
                </span>
              </div>
            </div>
            {PRICING_ROWS.map((row) => (
              <div
                key={row.label}
                className={`grid grid-cols-2 text-center border-b border-cream-08 last:border-b-0 transition-colors ${
                  row.highlight
                    ? "bg-gold-500/[0.06]"
                    : "bg-bg-card hover:bg-bg-card-hover"
                }`}
              >
                <div className="px-6 py-5 flex items-center justify-center">
                  <span
                    className={`font-body text-base ${
                      row.highlight
                        ? "font-semibold text-cream"
                        : "text-cream-60"
                    }`}
                  >
                    {row.label}
                  </span>
                </div>
                <div className="px-6 py-5 flex items-center justify-center">
                  <span
                    className={`font-mono text-lg ${
                      row.highlight
                        ? "font-semibold text-gold-400"
                        : "text-cream-45"
                    }`}
                  >
                    {row.payout}
                  </span>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 text-center">
            <p className="text-cream-35 font-body text-sm">
              Exact payout depends on karat, weight, and current spot price.{" "}
              <Link href="/gold-calculator" className="text-gold-500 hover:text-gold-400 transition-colors underline underline-offset-4">
                Use our calculator
              </Link>{" "}
              for an instant estimate.
            </p>
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/*  HOW IT WORKS MINI                                           */}
      {/* ============================================================ */}
      <section className="py-28 sm:py-36 px-6 border-t border-cream-08">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-20">
            <p className="text-xs font-body uppercase tracking-[0.25em] text-gold-500 mb-4">
              The Process
            </p>
            <h2 className="font-display text-4xl sm:text-5xl md:text-6xl font-semibold tracking-tight">
              Three Simple Steps
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                step: "01",
                title: "Request Your Free Kit",
                desc: "We ship you a prepaid, insured FedEx mailer. No cost, no commitment.",
              },
              {
                step: "02",
                title: "Ship Your Gold",
                desc: "Pack your gold and drop it off at any FedEx location. Insured up to $25,000.",
              },
              {
                step: "03",
                title: "Get Paid",
                desc: "We assay with XRF, send your quote, and wire payment within 48 hours of acceptance.",
              },
            ].map((item) => (
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

          <div className="mt-12 text-center">
            <Link
              href="/how-it-works"
              className="inline-flex items-center gap-2 font-body text-base text-gold-500 transition-colors hover:text-gold-400"
            >
              See the full process in detail
              <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/*  TRUST SIGNALS                                               */}
      {/* ============================================================ */}
      <section className="py-20 px-6 border-t border-cream-08">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 text-center">
            {[
              {
                stat: "$25K",
                label: "Insurance on Every Kit",
                icon: (
                  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
                  </svg>
                ),
              },
              {
                stat: "48hrs",
                label: "Wire Payment After Acceptance",
                icon: (
                  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                ),
              },
              {
                stat: "Free",
                label: "Returns If You Decline",
                icon: (
                  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 18.75a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 01-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 00-3.213-9.193 2.056 2.056 0 00-1.58-.86H14.25M16.5 18.75h-2.25m0-11.177v-.958c0-.568-.422-1.048-.987-1.106a48.554 48.554 0 00-10.026 0 1.106 1.106 0 00-.987 1.106v7.635m12-6.677v6.677m0 4.5v-4.5m0 0h-12" />
                  </svg>
                ),
              },
            ].map((item) => (
              <div key={item.label} className="flex flex-col items-center">
                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-full bg-gold-500/10 text-gold-500">
                  {item.icon}
                </div>
                <p className="font-mono text-3xl sm:text-4xl font-semibold text-cream">
                  {item.stat}
                </p>
                <p className="mt-2 text-cream-45 font-body text-sm">
                  {item.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/*  TALK TO AN EXPERT                                           */}
      {/* ============================================================ */}
      <section className="py-20 sm:py-28 px-6 border-t border-cream-08">
        <div className="max-w-3xl mx-auto">
          <div className="rounded-2xl border border-gold-500/20 bg-bg-card p-8 sm:p-12 text-center">
            <div className="mb-6 inline-flex h-14 w-14 items-center justify-center rounded-full bg-gold-500/10">
              <svg className="h-7 w-7 text-gold-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
              </svg>
            </div>
            <h3 className="font-display text-2xl sm:text-3xl font-semibold text-cream mb-3">
              Have questions about selling your gold?
            </h3>
            <p className="text-cream-60 font-body text-base max-w-xl mx-auto mb-8">
              Our experts can help you understand your gold&apos;s value, walk you through the process, and answer any questions. No pressure, no obligation.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="tel:+15551234567"
                className="inline-flex items-center gap-2 rounded-full border border-gold-500/40 px-8 py-3.5 font-body text-base font-medium text-gold-500 transition-all hover:bg-gold-500/10 hover:border-gold-500/60"
              >
                <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                </svg>
                Call (555) 123-4567
              </a>
              <Link
                href="/get-kit"
                className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-gold-500 via-gold-400 to-gold-600 px-8 py-3.5 font-body text-base font-semibold text-bg transition-all hover:shadow-lg hover:shadow-gold-500/20"
              >
                Request Free Kit
                <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/*  INTERNAL LINKS                                              */}
      {/* ============================================================ */}
      <section className="py-20 px-6 border-t border-cream-08">
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {[
              {
                href: "/how-it-works",
                label: "How It Works",
                desc: "See the full 3-step process",
              },
              {
                href: "/gold-calculator",
                label: "Gold Calculator",
                desc: "Estimate your payout instantly",
              },
              {
                href: "/gold-to-bitcoin",
                label: "Gold to Bitcoin",
                desc: "Convert gold into BTC",
              },
            ].map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="group bg-bg-card rounded-xl p-6 border border-cream-08 transition-all duration-300 hover:border-gold-500/20 hover:shadow-[0_0_30px_rgba(201,168,76,0.04)]"
              >
                <h3 className="font-body text-base font-semibold text-cream group-hover:text-gold-500 transition-colors">
                  {link.label}
                </h3>
                <p className="mt-1 text-cream-45 font-body text-sm">
                  {link.desc}
                </p>
                <div className="mt-3 flex items-center gap-1 text-gold-500 text-sm font-body opacity-0 group-hover:opacity-100 transition-opacity">
                  Learn more
                  <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/*  FINAL CTA                                                   */}
      {/* ============================================================ */}
      <section className="py-28 sm:py-36 px-6 border-t border-cream-08">
        <div className="relative max-w-3xl mx-auto text-center">
          <div
            className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px]"
            aria-hidden="true"
            style={{
              background:
                "radial-gradient(ellipse at center, rgba(201,168,76,0.06) 0%, transparent 70%)",
            }}
          />

          <h2 className="relative font-display text-4xl sm:text-5xl md:text-6xl font-semibold tracking-tight">
            Ready to turn your gold
            <br />
            <span className="text-gold-shimmer">into cash?</span>
          </h2>
          <p className="relative mt-4 text-xl sm:text-2xl text-cream-60 font-body">
            Get your free insured kit and find out what your gold is worth.
          </p>

          <div className="relative mt-10">
            <Link
              href="/get-kit"
              className="group inline-flex items-center justify-center px-10 py-5 text-lg font-body font-semibold text-bg rounded-full bg-gradient-to-r from-gold-500 via-gold-400 to-gold-600 shadow-lg shadow-gold-500/20 transition-all duration-300 hover:shadow-gold-500/40 hover:scale-[1.03]"
            >
              Get Your Free Kit
              <svg className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
