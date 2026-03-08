import Link from "next/link";

/* ------------------------------------------------------------------ */
/*  Data                                                               */
/* ------------------------------------------------------------------ */

const COINS = [
  {
    name: "American Eagle",
    detail: "1 oz, 1/2 oz, 1/4 oz, 1/10 oz",
    purity: "91.67% (22K)",
    icon: (
      <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    name: "Krugerrand",
    detail: "1 oz, fractional sizes",
    purity: "91.67% (22K)",
    icon: (
      <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M20.893 13.393l-1.135-1.135a2.252 2.252 0 01-.421-.585l-1.08-2.16a.414.414 0 00-.663-.107.827.827 0 01-.812.21l-1.273-.363a.89.89 0 00-.738 1.595l.587.39c.59.395.674 1.23.172 1.732l-.2.2c-.212.212-.33.498-.33.796v.41c0 .409-.11.809-.32 1.158l-1.315 2.191a2.11 2.11 0 01-1.81 1.025 1.055 1.055 0 01-1.055-1.055v-1.172c0-.92-.56-1.747-1.414-2.089l-.655-.261a2.25 2.25 0 01-1.383-2.46l.007-.042a2.25 2.25 0 01.29-.787l.09-.15a2.25 2.25 0 012.37-1.048l1.178.236a1.125 1.125 0 001.302-.795l.208-.73a1.125 1.125 0 00-.578-1.315l-.665-.332-.091.091a2.25 2.25 0 01-1.591.659h-.18a.94.94 0 00-.662.274l-.473.474" />
      </svg>
    ),
  },
  {
    name: "Maple Leaf",
    detail: "1 oz, fractional sizes",
    purity: "99.99% (24K)",
    icon: (
      <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418" />
      </svg>
    ),
  },
  {
    name: "Gold Bars",
    detail: "1 oz, 10 oz, 100g, kilo",
    purity: "99.5%+ (.995+)",
    icon: (
      <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 6.375c0 2.278-3.694 4.125-8.25 4.125S3.75 8.653 3.75 6.375m16.5 0c0-2.278-3.694-4.125-8.25-4.125S3.75 4.097 3.75 6.375m16.5 0v11.25c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125V6.375m16.5 0v3.75m-16.5-3.75v3.75m16.5 0v3.75C20.25 16.153 16.556 18 12 18s-8.25-1.847-8.25-4.125v-3.75m16.5 0c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125" />
      </svg>
    ),
  },
  {
    name: "Rounds",
    detail: "Any size, any mint",
    purity: "Varies (.999+)",
    icon: (
      <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 9.563C9 9.252 9.252 9 9.563 9h4.874c.311 0 .563.252.563.563v4.874c0 .311-.252.563-.563.563H9.564A.562.562 0 019 14.437V9.564z" />
      </svg>
    ),
  },
];

const PROCESS_STEPS = [
  {
    step: "01",
    title: "Ship Free & Insured",
    desc: "Request your free kit. Pack your coins or bars securely. Ship via prepaid, insured label with coverage up to $25,000.",
  },
  {
    step: "02",
    title: "Verified & Assayed",
    desc: "Every coin and bar is weighed, photographed, and tested with our XRF spectrometer under video documentation.",
  },
  {
    step: "03",
    title: "Premium Payout",
    desc: "Receive a competitive offer near spot price. Accept and get paid via wire transfer within 48 hours, or convert to Bitcoin.",
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

export default function SellCoinsPage() {
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
            Gold Coins & Bullion
          </p>
          <h1 className="font-display text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-semibold tracking-tight leading-[1.08]">
            Sell Gold Coins
            <br />
            <span className="text-gold-shimmer">and Bullion</span>
          </h1>
          <p className="mt-8 max-w-2xl mx-auto text-lg sm:text-xl text-cream-60 font-body leading-relaxed">
            Offramp buys gold coins and bullion at competitive rates near spot
            price. We accept American Eagles, Canadian Maple Leafs, Krugerrands,
            gold bars, and rounds of any size. Ship free with insurance up to
            $25,000.
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
              href="/gold-calculator"
              className="inline-flex items-center justify-center px-8 py-4 text-base font-body font-semibold text-gold-500 rounded-full border border-gold-500/40 transition-all duration-300 hover:border-gold-500 hover:bg-gold-500/5"
            >
              Calculate Value
            </Link>
          </div>

          <div className="mt-16 flex flex-wrap items-center justify-center gap-x-8 gap-y-4 text-sm text-cream-45 font-body">
            {["Near-Spot Payouts", "$25K Insurance", "All Sizes Accepted"].map(
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
      {/*  COINS WE BUY                                                */}
      {/* ============================================================ */}
      <section className="py-28 sm:py-36 px-6 border-t border-cream-08">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-20">
            <p className="text-xs font-body uppercase tracking-[0.25em] text-gold-500 mb-4">
              What We Buy
            </p>
            <h2 className="font-display text-4xl sm:text-5xl md:text-6xl font-semibold tracking-tight">
              Coins & Bullion We Buy
            </h2>
            <p className="mt-4 max-w-xl mx-auto text-cream-45 font-body">
              Government-minted coins, private mint bars and rounds, and
              everything in between. Any size, any mint.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {COINS.map((coin) => (
              <div
                key={coin.name}
                className="group bg-bg-card rounded-2xl p-8 sm:p-10 border border-cream-08 transition-all duration-500 hover:border-gold-500/20 hover:shadow-[0_0_40px_rgba(201,168,76,0.06)]"
              >
                <div className="mb-6 inline-flex h-14 w-14 items-center justify-center rounded-xl bg-gold-500/10 text-gold-500 transition-colors group-hover:bg-gold-500/20">
                  {coin.icon}
                </div>
                <h3 className="font-display text-2xl sm:text-3xl font-semibold mb-2 text-cream">
                  {coin.name}
                </h3>
                <p className="text-cream-60 font-body text-sm mb-3">
                  {coin.detail}
                </p>
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-gold-500/10">
                  <span className="font-mono text-xs text-gold-400">
                    {coin.purity}
                  </span>
                </div>
              </div>
            ))}

            {/* Other coins */}
            <div className="group bg-bg-card rounded-2xl p-8 sm:p-10 border border-gold-500/20 glow-gold transition-all duration-500 hover:shadow-[0_0_60px_rgba(201,168,76,0.1)]">
              <div className="mb-6 inline-flex h-14 w-14 items-center justify-center rounded-xl bg-gold-500/15 text-gold-400">
                <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                </svg>
              </div>
              <h3 className="font-display text-2xl sm:text-3xl font-semibold mb-2 text-gold-shimmer">
                Other Coins
              </h3>
              <p className="text-cream-60 font-body text-sm mb-3">
                Philharmonics, Pandas, Britannias, Buffalos, pre-1933 US gold,
                and any other gold coin or medallion.
              </p>
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-gold-500/10">
                <span className="font-mono text-xs text-gold-400">
                  All purities
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/*  PREMIUM PRICING                                             */}
      {/* ============================================================ */}
      <section className="py-28 sm:py-36 px-6 border-t border-cream-08">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            {/* Left */}
            <div>
              <p className="text-xs font-body uppercase tracking-[0.25em] text-gold-500 mb-4">
                Premium Pricing
              </p>
              <h2 className="font-display text-4xl sm:text-5xl font-semibold tracking-tight mb-8">
                Near-Spot Payouts for Bullion
              </h2>
              <div className="space-y-6 text-cream-60 font-body leading-relaxed">
                <p>
                  Gold coins and bullion products with known purities command
                  premium pricing at Offramp. Because we do not need to
                  destructively test these items, the assay process is faster and
                  we pass those savings on to you.
                </p>
                <p>
                  Government-minted coins like American Eagles, Maple Leafs, and
                  Krugerrands have guaranteed gold content backed by their
                  respective governments. Bars from recognized mints (PAMP, Valcambi,
                  Perth Mint) carry verifiable hallmarks. This means faster
                  verification and higher payouts.
                </p>
                <p>
                  Receive a competitive offer near the current spot price &mdash;
                  significantly higher than what coin shops, pawn shops, or
                  online dealers typically pay.
                </p>
              </div>
            </div>

            {/* Right - pricing highlights */}
            <div className="space-y-6">
              {[
                {
                  label: "Government Coins",
                  desc: "Eagles, Maple Leafs, Krugerrands, Philharmonics",
                  rate: "Near spot",
                },
                {
                  label: "Recognized Bars",
                  desc: "PAMP, Valcambi, Perth Mint, Credit Suisse",
                  rate: "Near spot",
                },
                {
                  label: "Generic Rounds & Bars",
                  desc: "Any mint, .999+ fineness",
                  rate: "80%+ of spot",
                },
                {
                  label: "Pre-1933 US Gold",
                  desc: "Liberty, Indian Head, Saint-Gaudens",
                  rate: "At or above melt",
                },
              ].map((tier) => (
                <div
                  key={tier.label}
                  className="border-gold-gradient rounded-xl p-6"
                >
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <h3 className="font-display text-xl font-semibold text-cream mb-1">
                        {tier.label}
                      </h3>
                      <p className="text-cream-45 font-body text-sm">
                        {tier.desc}
                      </p>
                    </div>
                    <span className="shrink-0 inline-flex items-center px-3 py-1.5 rounded-full bg-gold-500/10 font-mono text-xs text-gold-400 font-medium">
                      {tier.rate}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/*  INSURANCE & SHIPPING                                        */}
      {/* ============================================================ */}
      <section className="py-28 sm:py-36 px-6 border-t border-cream-08">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-xs font-body uppercase tracking-[0.25em] text-gold-500 mb-4">
            Ship With Confidence
          </p>
          <h2 className="font-display text-4xl sm:text-5xl md:text-6xl font-semibold tracking-tight">
            $25,000 Insurance Coverage
          </h2>
          <p className="mt-6 max-w-2xl mx-auto text-lg text-cream-60 font-body leading-relaxed">
            Every Offramp shipping kit includes prepaid, fully insured shipping
            with coverage up to $25,000. Your gold coins and bullion are
            protected from the moment you drop them off until they arrive at our
            secure facility.
          </p>

          <div className="mt-16 grid grid-cols-1 sm:grid-cols-3 gap-6">
            {PROCESS_STEPS.map((item) => (
              <div
                key={item.step}
                className="group bg-bg-card rounded-2xl p-8 border border-cream-08 transition-all duration-500 hover:border-gold-500/20 hover:shadow-[0_0_40px_rgba(201,168,76,0.06)]"
              >
                <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-full border-2 border-gold-500/30 transition-colors group-hover:border-gold-500 group-hover:bg-gold-500/10 mx-auto">
                  <span className="font-mono text-base text-gold-500 font-medium">
                    {item.step}
                  </span>
                </div>
                <h3 className="font-display text-xl sm:text-2xl font-semibold mb-3 text-cream">
                  {item.title}
                </h3>
                <p className="text-cream-60 font-body leading-relaxed text-sm">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>

          {/* Insurance details */}
          <div className="mt-16 border-gold-gradient rounded-2xl p-8 sm:p-10">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
              {[
                {
                  stat: "$25K",
                  label: "Insurance Coverage",
                  sub: "Per shipment",
                },
                {
                  stat: "$0",
                  label: "Shipping Cost",
                  sub: "Both ways",
                },
                {
                  stat: "48hrs",
                  label: "Payment Speed",
                  sub: "After acceptance",
                },
              ].map((item) => (
                <div key={item.label} className="text-center">
                  <p className="font-mono text-4xl sm:text-5xl font-medium text-gold-400">
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
            Ready to sell your coins?
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
              { label: "Gold Calculator", href: "/gold-calculator" },
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
