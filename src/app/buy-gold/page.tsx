import Link from "next/link";

/* ------------------------------------------------------------------ */
/*  Buy Gold with Bitcoin Page                                         */
/* ------------------------------------------------------------------ */

export default function BuyGoldPage() {
  return (
    <div className="relative overflow-hidden">
      {/* ============================================================ */}
      {/*  HERO                                                        */}
      {/* ============================================================ */}
      <section className="relative min-h-[90vh] flex flex-col items-center justify-center px-6 text-center">
        {/* Radial gold glow */}
        <div
          className="pointer-events-none absolute inset-0"
          aria-hidden="true"
          style={{
            background:
              "radial-gradient(ellipse 80% 50% at 50% 0%, rgba(201,168,76,0.10) 0%, transparent 70%)",
          }}
        />

        {/* Subtle animated rings */}
        <div
          className="pointer-events-none absolute inset-0 flex items-center justify-center"
          aria-hidden="true"
        >
          <div className="absolute h-[500px] w-[500px] rounded-full border border-gold-500/[0.04]" />
          <div
            className="absolute h-[800px] w-[800px] rounded-full border border-gold-500/[0.03]"
            style={{
              animation:
                "pulse 3s cubic-bezier(0.4,0,0.6,1) infinite",
            }}
          />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto animate-fade-in-up">
          <p className="text-xs font-body uppercase tracking-[0.3em] text-gold-500 mb-6">
            BTC to Physical Gold
          </p>

          <h1 className="font-display text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-semibold tracking-tight leading-[1.08]">
            Buy Physical Gold
            <br />
            With <span className="text-gold-shimmer">Bitcoin</span>
          </h1>

          <p className="mt-8 max-w-2xl mx-auto text-lg sm:text-xl text-cream-60 font-body leading-relaxed">
            Offramp lets you buy physical gold using Bitcoin. Sell BTC through
            Onramp, receive USD, and purchase gold coins or bars. The two-way
            bridge between digital and physical hard money.
          </p>

          {/* CTA */}
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/sell"
              className="group relative inline-flex items-center justify-center px-8 py-4 text-base font-body font-semibold text-bg rounded-full bg-gradient-to-r from-gold-500 via-gold-400 to-gold-600 shadow-lg shadow-gold-500/20 transition-all duration-300 hover:shadow-gold-500/40 hover:scale-[1.03]"
            >
              Get Started
              <svg
                className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </Link>
            <Link
              href="/gold-to-bitcoin"
              className="inline-flex items-center justify-center px-8 py-4 text-base font-body font-semibold text-gold-500 rounded-full border border-gold-500/40 transition-all duration-300 hover:border-gold-500 hover:bg-gold-500/5"
            >
              Sell Gold for Bitcoin
            </Link>
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/*  HOW IT WORKS — Visual Flow                                  */}
      {/* ============================================================ */}
      <section className="py-28 sm:py-36 px-6 border-t border-cream-08">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-20">
            <p className="text-xs font-body uppercase tracking-[0.25em] text-gold-500 mb-4">
              How It Works
            </p>
            <h2 className="font-display text-4xl sm:text-5xl md:text-6xl font-semibold tracking-tight">
              Bitcoin to Gold in Five Steps
            </h2>
            <p className="mt-4 max-w-xl mx-auto text-cream-45 font-body">
              The reverse bridge &mdash; from digital hard money back to
              physical hard money.
            </p>
          </div>

          {/* Flow visualization */}
          <div className="relative">
            {/* Connecting line */}
            <div
              className="hidden lg:block absolute top-1/2 left-0 right-0 h-px -translate-y-1/2"
              aria-hidden="true"
              style={{
                background:
                  "linear-gradient(90deg, transparent, rgba(201,168,76,0.3) 20%, rgba(201,168,76,0.3) 80%, transparent)",
              }}
            />

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 lg:gap-4">
              {[
                {
                  label: "Your BTC",
                  desc: "Bitcoin in your wallet",
                  highlight: true,
                  icon: (
                    <svg
                      className="h-7 w-7"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={1.5}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M15.75 5.25a3 3 0 013 3m3 0a6 6 0 01-7.029 5.912c-.563-.097-1.159.026-1.563.43L10.5 17.25H8.25v2.25H6v2.25H2.25v-2.818c0-.597.237-1.17.659-1.591l6.499-6.499c.404-.404.527-1 .43-1.563A6 6 0 1121.75 8.25z"
                      />
                    </svg>
                  ),
                },
                {
                  label: "Onramp",
                  desc: "Sell BTC, receive USD",
                  icon: (
                    <svg
                      className="h-7 w-7"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={1.5}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z"
                      />
                    </svg>
                  ),
                },
                {
                  label: "USD",
                  desc: "Funds in your account",
                  icon: (
                    <svg
                      className="h-7 w-7"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={1.5}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  ),
                },
                {
                  label: "Offramp",
                  desc: "Select your gold products",
                  icon: (
                    <svg
                      className="h-7 w-7"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={1.5}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
                      />
                    </svg>
                  ),
                },
                {
                  label: "Physical Gold",
                  desc: "Coins, bars, delivered",
                  highlight: true,
                  icon: (
                    <svg
                      className="h-7 w-7"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={1.5}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M20.25 6.375c0 2.278-3.694 4.125-8.25 4.125S3.75 8.653 3.75 6.375m16.5 0c0-2.278-3.694-4.125-8.25-4.125S3.75 4.097 3.75 6.375m16.5 0v11.25c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125V6.375"
                      />
                    </svg>
                  ),
                },
              ].map((step, i) => (
                <div
                  key={step.label}
                  className="relative flex flex-col items-center text-center"
                >
                  {/* Arrow between steps */}
                  {i > 0 && (
                    <div
                      className="hidden lg:block absolute -left-[calc(50%-8px)] top-1/2 -translate-y-1/2 text-gold-500/40"
                      aria-hidden="true"
                    >
                      <svg
                        className="h-4 w-4"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                  )}

                  <div
                    className={`mb-4 flex h-16 w-16 items-center justify-center rounded-2xl border transition-all duration-500 ${
                      step.highlight
                        ? "border-gold-500/40 bg-gold-500/10 text-gold-400 glow-gold"
                        : "border-cream-15 bg-bg-card text-cream-45"
                    }`}
                  >
                    {step.icon}
                  </div>
                  <h3 className="font-body text-sm font-semibold text-cream mb-1">
                    {step.label}
                  </h3>
                  <p className="font-body text-xs text-cream-35">
                    {step.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/*  WHAT YOU CAN BUY                                            */}
      {/* ============================================================ */}
      <section className="py-28 sm:py-36 px-6 border-t border-cream-08">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-20">
            <p className="text-xs font-body uppercase tracking-[0.25em] text-gold-500 mb-4">
              Product Selection
            </p>
            <h2 className="font-display text-4xl sm:text-5xl md:text-6xl font-semibold tracking-tight">
              What You Can Buy
            </h2>
            <p className="mt-4 max-w-xl mx-auto text-cream-45 font-body">
              Premium physical gold products, purchased with Bitcoin.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Gold Coins",
                desc: "Government-minted legal tender coins from world mints. American Eagles, Canadian Maple Leafs, South African Krugerrands, and more. IRA-eligible. Globally recognized and highly liquid.",
                examples: [
                  "American Gold Eagle",
                  "Canadian Maple Leaf",
                  "South African Krugerrand",
                  "Australian Kangaroo",
                ],
                icon: (
                  <svg
                    className="h-8 w-8"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={1.5}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M20.25 6.375c0 2.278-3.694 4.125-8.25 4.125S3.75 8.653 3.75 6.375m16.5 0c0-2.278-3.694-4.125-8.25-4.125S3.75 4.097 3.75 6.375m16.5 0v11.25c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125V6.375"
                    />
                  </svg>
                ),
              },
              {
                title: "Gold Bars",
                desc: "LBMA-certified gold bars from trusted refiners. Available from 1 gram to 1 kilogram. Lower premiums per ounce than coins. Ideal for larger allocations and long-term storage.",
                examples: [
                  "1 oz PAMP Suisse",
                  "10 oz Royal Canadian Mint",
                  "1 kg Good Delivery Bar",
                  "1 gram Valcambi",
                ],
                icon: (
                  <svg
                    className="h-8 w-8"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={1.5}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M6.429 9.75L2.25 12l4.179 2.25m0-4.5l5.571 3 5.571-3m-11.142 0L2.25 7.5 12 2.25l9.75 5.25-4.179 2.25m0 0L21.75 12l-4.179 2.25m0 0l4.179 2.25L12 21.75 2.25 16.5l4.179-2.25m11.142 0l-5.571 3-5.571-3"
                    />
                  </svg>
                ),
              },
              {
                title: "Gold Rounds",
                desc: "Privately minted gold rounds in .999+ fine gold. Lower premiums than government coins with the same gold content. A cost-effective way to accumulate physical gold.",
                examples: [
                  "1 oz Buffalo Round",
                  "1 oz Sunshine Mint",
                  "Fractional Rounds",
                  "Custom Designs",
                ],
                icon: (
                  <svg
                    className="h-8 w-8"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={1.5}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M9 9.563C9 9.252 9.252 9 9.563 9h4.874c.311 0 .563.252.563.563v4.874c0 .311-.252.563-.563.563H9.564A.562.562 0 019 14.437V9.564z"
                    />
                  </svg>
                ),
              },
            ].map((item) => (
              <div
                key={item.title}
                className="group bg-bg-card rounded-2xl p-8 sm:p-10 border border-cream-08 transition-all duration-500 hover:border-gold-500/20 hover:shadow-[0_0_40px_rgba(201,168,76,0.06)]"
              >
                <div className="mb-8 inline-flex h-14 w-14 items-center justify-center rounded-xl bg-gold-500/10 text-gold-500 transition-colors group-hover:bg-gold-500/20">
                  {item.icon}
                </div>

                <h3 className="font-display text-2xl sm:text-3xl font-semibold mb-4 text-cream">
                  {item.title}
                </h3>

                <p className="text-cream-60 font-body leading-relaxed text-base mb-6">
                  {item.desc}
                </p>

                <ul className="space-y-2">
                  {item.examples.map((ex) => (
                    <li
                      key={ex}
                      className="flex items-center gap-2 text-sm font-body text-cream-45"
                    >
                      <span className="inline-flex h-1.5 w-1.5 shrink-0 rounded-full bg-gold-500/50" />
                      {ex}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/*  THE TWO-WAY BRIDGE                                          */}
      {/* ============================================================ */}
      <section className="py-28 sm:py-36 px-6 border-t border-cream-08">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-xs font-body uppercase tracking-[0.25em] text-gold-500 mb-8">
            The Two-Way Bridge
          </p>

          <h2 className="font-display text-4xl sm:text-5xl md:text-6xl font-semibold tracking-tight leading-[1.15]">
            Digital Hard Money.
            <br />
            <span className="text-gold-shimmer">Physical Hard Money.</span>
          </h2>

          <p className="mt-8 max-w-3xl mx-auto text-cream-60 font-body text-lg sm:text-xl leading-relaxed">
            Offramp is not a one-way street. Whether you want to convert gold
            into bitcoin or bitcoin into gold, Offramp and Onramp together form
            the two-way bridge between the two greatest stores of value in human
            history.
          </p>

          <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-2xl mx-auto">
            {/* Gold to BTC */}
            <div className="border-gold-gradient rounded-2xl p-6 sm:p-8 text-center">
              <div className="mb-4 flex items-center justify-center gap-3 text-gold-400">
                <span className="font-display text-xl font-semibold">Gold</span>
                <svg
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
                  />
                </svg>
                <span className="font-display text-xl font-semibold">BTC</span>
              </div>
              <p className="text-sm text-cream-45 font-body mb-4">
                Sell physical gold, receive bitcoin
              </p>
              <Link
                href="/gold-to-bitcoin"
                className="inline-flex items-center gap-1.5 font-body text-sm text-gold-500 transition-colors hover:text-gold-400"
              >
                Learn more
                <svg
                  className="h-3.5 w-3.5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
                  />
                </svg>
              </Link>
            </div>

            {/* BTC to Gold */}
            <div className="border-gold-gradient rounded-2xl p-6 sm:p-8 text-center glow-gold">
              <div className="mb-4 flex items-center justify-center gap-3 text-gold-400">
                <span className="font-display text-xl font-semibold">BTC</span>
                <svg
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
                  />
                </svg>
                <span className="font-display text-xl font-semibold">Gold</span>
              </div>
              <p className="text-sm text-cream-45 font-body mb-4">
                Sell bitcoin, receive physical gold
              </p>
              <span className="inline-flex items-center gap-1.5 font-body text-sm text-gold-500">
                You are here
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/*  FINAL CTA                                                   */}
      {/* ============================================================ */}
      <section className="py-28 sm:py-36 px-6 border-t border-cream-08">
        <div className="max-w-3xl mx-auto text-center relative">
          <div
            className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px]"
            aria-hidden="true"
            style={{
              background:
                "radial-gradient(ellipse at center, rgba(201,168,76,0.06) 0%, transparent 70%)",
            }}
          />

          <h2 className="relative font-display text-4xl sm:text-5xl md:text-6xl font-semibold tracking-tight">
            Ready to hold gold?
          </h2>
          <p className="relative mt-4 text-xl sm:text-2xl text-cream-60 font-body">
            Turn your bitcoin into physical gold today.
          </p>

          <div className="relative mt-10">
            <Link
              href="/sell"
              className="group inline-flex items-center justify-center px-10 py-5 text-lg font-body font-semibold text-bg rounded-full bg-gradient-to-r from-gold-500 via-gold-400 to-gold-600 shadow-lg shadow-gold-500/20 transition-all duration-300 hover:shadow-gold-500/40 hover:scale-[1.03]"
            >
              Get Started
              <svg
                className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </Link>
          </div>

          {/* Related links */}
          <div className="relative mt-16 flex flex-wrap items-center justify-center gap-x-8 gap-y-3">
            {[
              { href: "/sell", label: "Sell Gold" },
              { href: "/gold-to-bitcoin", label: "Gold to Bitcoin" },
              {
                href: "/guide/bitcoin-vs-gold",
                label: "Bitcoin vs. Gold Guide",
              },
            ].map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="inline-flex items-center gap-1.5 font-body text-sm text-cream-35 transition-colors hover:text-gold-500"
              >
                {link.label}
                <svg
                  className="h-3.5 w-3.5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
                  />
                </svg>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
