import Link from "next/link";

/* ------------------------------------------------------------------ */
/*  Gold to Bitcoin Page                                               */
/* ------------------------------------------------------------------ */

export default function GoldToBitcoinPage() {
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
              "radial-gradient(ellipse 80% 50% at 50% 0%, rgba(201,168,76,0.12) 0%, transparent 70%)",
          }}
        />

        {/* Concentric rings */}
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
          <div
            className="absolute h-[1100px] w-[1100px] rounded-full border border-gold-500/[0.02]"
            style={{
              animation:
                "pulse 4.5s cubic-bezier(0.4,0,0.6,1) infinite",
            }}
          />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto animate-fade-in-up">
          <p className="text-xs font-body uppercase tracking-[0.3em] text-gold-500 mb-6">
            The Bridge from Gold to BTC
          </p>

          <h1 className="font-display text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-semibold tracking-tight leading-[1.08]">
            Turn Physical Gold
            <br />
            Into <span className="text-gold-shimmer">Bitcoin</span>
          </h1>

          <p className="mt-8 max-w-2xl mx-auto text-lg sm:text-xl text-cream-60 font-body leading-relaxed">
            Offramp is the bridge from physical gold to Bitcoin. Sell your
            jewelry, coins, or scrap gold for USD wired to your bank, then
            convert to BTC through Onramp custody.
          </p>

          {/* CTA */}
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/sell"
              className="group relative inline-flex items-center justify-center px-8 py-4 text-base font-body font-semibold text-bg rounded-full bg-gradient-to-r from-gold-500 via-gold-400 to-gold-600 shadow-lg shadow-gold-500/20 transition-all duration-300 hover:shadow-gold-500/40 hover:scale-[1.03]"
            >
              Start the Process
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
              href="/gold-calculator"
              className="inline-flex items-center justify-center px-8 py-4 text-base font-body font-semibold text-gold-500 rounded-full border border-gold-500/40 transition-all duration-300 hover:border-gold-500 hover:bg-gold-500/5"
            >
              Calculate Gold Value
            </Link>
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/*  THE BRIDGE — Visual Flow                                    */}
      {/* ============================================================ */}
      <section className="py-28 sm:py-36 px-6 border-t border-cream-08">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-20">
            <p className="text-xs font-body uppercase tracking-[0.25em] text-gold-500 mb-4">
              The Bridge
            </p>
            <h2 className="font-display text-4xl sm:text-5xl md:text-6xl font-semibold tracking-tight">
              From Physical to Digital
            </h2>
            <p className="mt-4 max-w-xl mx-auto text-cream-45 font-body">
              The seamless path from gold in your hand to bitcoin in
              self-custody.
            </p>
          </div>

          {/* Flow visualization */}
          <div className="relative">
            {/* Connecting line — desktop only */}
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
                  label: "Your Gold",
                  desc: "Jewelry, coins, bars, scrap",
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
                {
                  label: "Offramp",
                  desc: "XRF assay, verified purity",
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
                        d="M9.75 3.104v5.714a2.25 2.25 0 01-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 014.5 0m0 0v5.714a2.25 2.25 0 00.659 1.591L19 14.5"
                      />
                    </svg>
                  ),
                },
                {
                  label: "USD Wire",
                  desc: "To your bank in 48 hours",
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
                  label: "Onramp",
                  desc: "Bitcoin custody platform",
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
                  label: "Bitcoin",
                  desc: "Self-custody, your keys",
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
              ].map((step, i) => (
                <div key={step.label} className="relative flex flex-col items-center text-center">
                  {/* Arrow between steps — desktop only */}
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
                      i === 0 || i === 4
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
      {/*  WHY CONVERT — Grid                                          */}
      {/* ============================================================ */}
      <section className="py-28 sm:py-36 px-6 border-t border-cream-08">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-20">
            <p className="text-xs font-body uppercase tracking-[0.25em] text-gold-500 mb-4">
              Why Convert
            </p>
            <h2 className="font-display text-4xl sm:text-5xl md:text-6xl font-semibold tracking-tight">
              Bitcoin Improves on Gold
            </h2>
            <p className="mt-4 max-w-xl mx-auto text-cream-45 font-body">
              Gold served humanity well for 5,000 years. Bitcoin takes the best
              properties of gold and makes them better.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {[
              {
                title: "Portability",
                desc: "A billion dollars in gold weighs over 15 tons. A billion dollars in Bitcoin fits in your pocket. Move any amount, anywhere, in minutes.",
                gold: "Heavy, expensive to transport",
                btc: "Weightless, instant global transfer",
                icon: (
                  <svg
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={1.5}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5"
                    />
                  </svg>
                ),
              },
              {
                title: "Divisibility",
                desc: "You cannot shave off $5 worth of a gold bar. Bitcoin divides into 100 million satoshis. Send any amount, no matter how small.",
                gold: "Impractical to divide",
                btc: "100,000,000 satoshis per coin",
                icon: (
                  <svg
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={1.5}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M3.75 6A2.25 2.25 0 016 3.75h2.25A2.25 2.25 0 0110.5 6v2.25a2.25 2.25 0 01-2.25 2.25H6a2.25 2.25 0 01-2.25-2.25V6zM3.75 15.75A2.25 2.25 0 016 13.5h2.25a2.25 2.25 0 012.25 2.25V18a2.25 2.25 0 01-2.25 2.25H6A2.25 2.25 0 013.75 18v-2.25zM13.5 6a2.25 2.25 0 012.25-2.25H18A2.25 2.25 0 0120.25 6v2.25A2.25 2.25 0 0118 10.5h-2.25a2.25 2.25 0 01-2.25-2.25V6zM13.5 15.75a2.25 2.25 0 012.25-2.25H18a2.25 2.25 0 012.25 2.25V18A2.25 2.25 0 0118 20.25h-2.25A2.25 2.25 0 0113.5 18v-2.25z"
                    />
                  </svg>
                ),
              },
              {
                title: "Self-Custody",
                desc: "Gold requires vaults, guards, and trust in third parties. Bitcoin gives you absolute sovereignty over your wealth with a private key.",
                gold: "Vaults, guards, counterparty risk",
                btc: "Your keys, your coins",
                icon: (
                  <svg
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={1.5}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z"
                    />
                  </svg>
                ),
              },
              {
                title: "21 Million Cap",
                desc: "Gold mining adds 1.5% supply each year. Bitcoin's supply is fixed at 21 million coins forever. Mathematically guaranteed scarcity.",
                gold: "~1.5% annual supply inflation",
                btc: "21,000,000. Forever. Period.",
                icon: (
                  <svg
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={1.5}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z"
                    />
                  </svg>
                ),
              },
            ].map((item) => (
              <div
                key={item.title}
                className="group bg-bg-card rounded-2xl p-8 sm:p-10 border border-cream-08 transition-all duration-500 hover:border-gold-500/20 hover:shadow-[0_0_40px_rgba(201,168,76,0.06)]"
              >
                <div className="mb-6 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gold-500/10 text-gold-500 transition-colors group-hover:bg-gold-500/20">
                  {item.icon}
                </div>
                <h3 className="font-display text-2xl sm:text-3xl font-semibold mb-3 text-cream">
                  {item.title}
                </h3>
                <p className="text-cream-60 font-body leading-relaxed text-base mb-6">
                  {item.desc}
                </p>

                {/* Gold vs BTC comparison */}
                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-sm">
                    <span className="inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-cream-08 text-cream-35">
                      <svg
                        className="h-2.5 w-2.5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2.5}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M6 18L18 6M6 6l12 12"
                        />
                      </svg>
                    </span>
                    <span className="font-body text-cream-35">
                      {item.gold}
                    </span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <span className="inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-gold-500/15 text-gold-400">
                      <svg
                        className="h-2.5 w-2.5"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </span>
                    <span className="font-body text-gold-400">
                      {item.btc}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/*  HOW IT WORKS — 3 Steps                                      */}
      {/* ============================================================ */}
      <section className="py-28 sm:py-36 px-6 border-t border-cream-08">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-20">
            <p className="text-xs font-body uppercase tracking-[0.25em] text-gold-500 mb-4">
              The Process
            </p>
            <h2 className="font-display text-4xl sm:text-5xl md:text-6xl font-semibold tracking-tight">
              Three Steps to Bitcoin
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                step: "01",
                title: "Ship Your Gold",
                desc: "Request a free insured shipping kit. Pack your gold jewelry, coins, bullion, or scrap and send it to us. Up to $25,000 insured coverage.",
              },
              {
                step: "02",
                title: "Verified Assay",
                desc: "We test every item with an XRF spectrometer on video. You see the exact purity and weight. Accept or decline our offer with zero obligation.",
              },
              {
                step: "03",
                title: "Receive Bitcoin",
                desc: "Once accepted, your USD is wired to your bank. Convert to Bitcoin through Onramp and take self-custody. Your gold becomes your bitcoin.",
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
        </div>
      </section>

      {/* ============================================================ */}
      {/*  THE THESIS                                                  */}
      {/* ============================================================ */}
      <section className="py-28 sm:py-36 px-6 border-t border-cream-08">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-xs font-body uppercase tracking-[0.25em] text-gold-500 mb-4">
              The Thesis
            </p>
            <h2 className="font-display text-4xl sm:text-5xl md:text-6xl font-semibold tracking-tight">
              Old Hard Money.
              <br />
              <span className="text-gold-shimmer">New Hard Money.</span>
            </h2>
          </div>

          <div className="space-y-8 max-w-3xl mx-auto">
            <p className="text-cream-60 font-body text-lg sm:text-xl leading-relaxed">
              For five thousand years, gold has been the ultimate form of sound
              money. It cannot be printed. It does not decay. Civilizations rise
              and fall, but gold endures. Every ounce ever mined still exists
              somewhere in the world.
            </p>

            <p className="text-cream-60 font-body text-lg sm:text-xl leading-relaxed">
              Bitcoin is the successor. It shares gold&apos;s scarcity and
              durability, but adds the qualities the digital age demands:
              portability across borders, divisibility down to the hundred
              millionth, programmable self-custody without vaults or guards, and
              a supply cap that is mathematically fixed &mdash; not just
              geologically constrained.
            </p>

            <p className="text-cream-60 font-body text-lg sm:text-xl leading-relaxed">
              Gold is old hard money. Bitcoin is new hard money. Offramp exists
              to bridge the two &mdash; so that those who stored value in gold
              can access the next era of sound money without friction, with full
              transparency, and on their own terms.
            </p>

            <blockquote className="border-l-2 border-gold-500/40 pl-6 py-2">
              <p className="font-display text-2xl sm:text-3xl font-semibold text-cream italic leading-snug">
                &ldquo;Gold preserved wealth for 5,000 years. Bitcoin will
                preserve it for the next 5,000.&rdquo;
              </p>
            </blockquote>
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
            Ready to make the switch?
          </h2>
          <p className="relative mt-4 text-xl sm:text-2xl text-cream-60 font-body">
            Turn your gold into bitcoin today.
          </p>

          <div className="relative mt-10">
            <Link
              href="/sell"
              className="group inline-flex items-center justify-center px-10 py-5 text-lg font-body font-semibold text-bg rounded-full bg-gradient-to-r from-gold-500 via-gold-400 to-gold-600 shadow-lg shadow-gold-500/20 transition-all duration-300 hover:shadow-gold-500/40 hover:scale-[1.03]"
            >
              Start the Process
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
              { href: "/guide/bitcoin-vs-gold", label: "Bitcoin vs. Gold Guide" },
              { href: "/gold-calculator", label: "Gold Calculator" },
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
