"use client";

import { useState } from "react";
import Link from "next/link";
import { useGoldPrice } from "@/hooks/useGoldPrice";

/* ------------------------------------------------------------------ */
/*  Gold karat purity map                                              */
/* ------------------------------------------------------------------ */
const KARAT_PURITY: Record<string, number> = {
  "24K": 0.999,
  "22K": 0.9167,
  "18K": 0.75,
  "14K": 0.5833,
  "10K": 0.4167,
};

const GRAMS_PER_TROY_OZ = 31.1035;

function fmt(n: number, decimals = 2) {
  return n.toLocaleString("en-US", {
    minimumFractionDigits: decimals,
    maximumFractionDigits: decimals,
  });
}

function fmtUSD(n: number) {
  return `$${fmt(n)}`;
}

/* ------------------------------------------------------------------ */
/*  Page                                                               */
/* ------------------------------------------------------------------ */
export default function Home() {
  /* Live prices */
  const { goldPerOz, btcPrice } = useGoldPrice();

  /* Calculator state */
  const [karat, setKarat] = useState("14K");
  const [weightG, setWeightG] = useState(10);

  const purity = KARAT_PURITY[karat] ?? 0.5833;
  const goldOz = (weightG / GRAMS_PER_TROY_OZ) * purity;
  const usdValue = goldOz * goldPerOz * 0.82; // 82% of spot
  const btcValue = usdValue / btcPrice;

  return (
    <div className="relative overflow-hidden">
      {/* ============================================================ */}
      {/*  HERO                                                        */}
      {/* ============================================================ */}
      <section className="relative min-h-screen flex flex-col items-center justify-center px-6 text-center">
        {/* radial gold glow */}
        <div
          className="pointer-events-none absolute inset-0"
          aria-hidden="true"
          style={{
            background:
              "radial-gradient(ellipse 70% 50% at 50% 0%, rgba(201,168,76,0.10) 0%, transparent 70%)",
          }}
        />

        {/* Subtle animated concentric rings */}
        <div className="pointer-events-none absolute inset-0 flex items-center justify-center" aria-hidden="true">
          <div className="absolute h-[600px] w-[600px] rounded-full border border-gold-500/[0.04] animate-pulse" />
          <div className="absolute h-[900px] w-[900px] rounded-full border border-gold-500/[0.03]" style={{ animation: "pulse 3s cubic-bezier(0.4,0,0.6,1) infinite" }} />
          <div className="absolute h-[1200px] w-[1200px] rounded-full border border-gold-500/[0.02]" style={{ animation: "pulse 4s cubic-bezier(0.4,0,0.6,1) infinite" }} />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto animate-fade-in-up">
          <h1 className="font-display text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-semibold tracking-tight leading-[1.1]">
            Sell Your Gold for Cash
            <br />
            <span className="text-gold-shimmer">or Bitcoin</span>
          </h1>

          <p className="mt-6 max-w-2xl mx-auto text-lg sm:text-xl text-cream-60 font-body leading-relaxed">
            Free insured shipping. XRF spectrometer assay under video. Wire
            payment to your bank in 48 hours. Or convert to Bitcoin through
            Onramp.
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
              Calculate Gold Value
            </Link>
          </div>

          {/* Trust signals */}
          <div className="mt-16 flex flex-wrap items-center justify-center gap-x-8 gap-y-4 text-sm text-cream-45 font-body">
            <div className="flex items-center gap-2">
              <span className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-gold-500/10 text-gold-500">
                <svg className="h-3 w-3" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" /></svg>
              </span>
              XRF Assay Verified
            </div>
            <span className="hidden sm:inline text-cream-15">|</span>
            <div className="flex items-center gap-2">
              <span className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-gold-500/10 text-gold-500">
                <svg className="h-3 w-3" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" /></svg>
              </span>
              $25K Insurance
            </div>
            <span className="hidden sm:inline text-cream-15">|</span>
            <div className="flex items-center gap-2">
              <span className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-gold-500/10 text-gold-500">
                <svg className="h-3 w-3" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" /></svg>
              </span>
              48hr Payment
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/*  LIVE GOLD PRICE BANNER                                      */}
      {/* ============================================================ */}
      <section className="relative py-6 border-y border-gold-500/10">
        <div className="max-w-7xl mx-auto px-6">
          <div className="border-gold-gradient rounded-xl px-6 py-5">
            <div className="flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
              {/* Gold Spot */}
              <div className="flex items-center gap-3">
                <span className="text-xs font-body uppercase tracking-widest text-cream-45">
                  Gold Spot
                </span>
                <span className="font-mono text-2xl sm:text-3xl font-medium text-cream">
                  {fmtUSD(goldPerOz)}
                  <span className="text-sm text-score-green ml-1">/oz</span>
                </span>
                <svg className="h-4 w-4 text-score-green" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M5.293 9.707a1 1 0 010-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 01-1.414 1.414L11 7.414V15a1 1 0 11-2 0V7.414L6.707 9.707a1 1 0 01-1.414 0z" clipRule="evenodd" />
                </svg>
              </div>

              {/* Divider */}
              <div className="hidden md:block h-10 w-px bg-gold-500/15" />

              {/* Bitcoin */}
              <div className="flex items-center gap-3">
                <span className="text-xs font-body uppercase tracking-widest text-cream-45">
                  Bitcoin
                </span>
                <span className="font-mono text-2xl sm:text-3xl font-medium text-cream">
                  {fmtUSD(btcPrice)}
                </span>
              </div>

              {/* Divider */}
              <div className="hidden md:block h-10 w-px bg-gold-500/15" />

              {/* Ratio */}
              <div className="flex items-center gap-3">
                <span className="text-xs font-body uppercase tracking-widest text-cream-45">
                  1 oz Gold
                </span>
                <span className="font-mono text-xl sm:text-2xl font-medium text-gold-400">
                  &asymp; {(goldPerOz / btcPrice).toFixed(4)} BTC
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/*  HOW IT WORKS                                                */}
      {/* ============================================================ */}
      <section className="py-28 sm:py-36 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-20">
            <p className="text-xs font-body uppercase tracking-[0.25em] text-gold-500 mb-4">
              The Process
            </p>
            <h2 className="font-display text-4xl sm:text-5xl md:text-6xl font-semibold tracking-tight">
              How It Works
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                step: "01",
                title: "Request Your Free Kit",
                desc: "We send you a prepaid, insured shipping kit. Pack your gold \u2014 jewelry, coins, bullion, dental, scrap \u2014 and ship it to us for free.",
              },
              {
                step: "02",
                title: "We Assay Under Video",
                desc: "Your gold is tested with an XRF spectrometer on camera. You see exactly what we see. No guessing, no games.",
              },
              {
                step: "03",
                title: "Get Paid Your Way",
                desc: "Accept our offer and get paid via wire transfer within 48 hours. Or convert to Bitcoin through Onramp.",
              },
            ].map((item) => (
              <div
                key={item.step}
                className="group relative bg-bg-card rounded-2xl p-8 sm:p-10 border border-cream-08 transition-all duration-500 hover:border-gold-500/20 hover:shadow-[0_0_40px_rgba(201,168,76,0.06)]"
              >
                {/* Step number */}
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
      {/*  WHY OFFRAMP                                                 */}
      {/* ============================================================ */}
      <section className="py-28 sm:py-36 px-6 border-t border-cream-08">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-20">
            <p className="text-xs font-body uppercase tracking-[0.25em] text-gold-500 mb-4">
              The Offramp Advantage
            </p>
            <h2 className="font-display text-4xl sm:text-5xl md:text-6xl font-semibold tracking-tight">
              Why Offramp
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                icon: (
                  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 3.104v5.714a2.25 2.25 0 01-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 014.5 0m0 0v5.714a2.25 2.25 0 00.659 1.591L19 14.5M14.25 3.104c.251.023.501.05.75.082M19 14.5l-2.47 2.47a2.25 2.25 0 01-1.59.659H9.06a2.25 2.25 0 01-1.591-.659L5 14.5m14 0V17a2.25 2.25 0 01-2.25 2.25H7.25A2.25 2.25 0 015 17v-2.5" />
                  </svg>
                ),
                title: "XRF Spectrometer Assay",
                desc: "Laboratory-grade testing under video documentation. The same technology used by refineries and the U.S. Mint.",
              },
              {
                icon: (
                  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                ),
                title: "80%+ of Spot Value",
                desc: "Pawn shops pay 20\u201355%. We pay 80%+ of melt value. That difference adds up to hundreds or thousands.",
              },
              {
                icon: (
                  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 18.75a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 01-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 00-3.213-9.193 2.056 2.056 0 00-1.58-.86H14.25M16.5 18.75h-2.25m0-11.177v-.958c0-.568-.422-1.048-.987-1.106a48.554 48.554 0 00-10.026 0 1.106 1.106 0 00-.987 1.106v7.635m12-6.677v6.677m0 4.5v-4.5m0 0h-12" />
                  </svg>
                ),
                title: "Free Insured Shipping",
                desc: "$25,000 coverage on every kit. We pay shipping both ways. Zero risk to you.",
              },
              {
                icon: (
                  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                ),
                title: "48-Hour Payment",
                desc: "Wire transfer to your bank within 48 hours of acceptance. No waiting weeks.",
              },
              {
                icon: (
                  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M20.893 13.393l-1.135-1.135a2.252 2.252 0 01-.421-.585l-1.08-2.16a.414.414 0 00-.663-.107.827.827 0 01-.812.21l-1.273-.363a.89.89 0 00-.738 1.595l.587.39c.59.395.674 1.23.172 1.732l-.2.2c-.212.212-.33.498-.33.796v.41c0 .409-.11.809-.32 1.158l-1.315 2.191a2.11 2.11 0 01-1.81 1.025 1.055 1.055 0 01-1.055-1.055v-1.172c0-.92-.56-1.747-1.414-2.089l-.655-.261a2.25 2.25 0 01-1.383-2.46l.007-.042a2.25 2.25 0 01.29-.787l.09-.15a2.25 2.25 0 012.37-1.048l1.178.236a1.125 1.125 0 001.302-.795l.208-.73a1.125 1.125 0 00-.578-1.315l-.665-.332-.091.091a2.25 2.25 0 01-1.591.659h-.18a.94.94 0 00-.662.274l-.473.474" />
                  </svg>
                ),
                title: "Bitcoin Option",
                desc: "Convert your payout to Bitcoin through Onramp. Gold \u2192 BTC. The ultimate off-ramp into sound money.",
              },
              {
                icon: (
                  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="m15.75 10.5 4.72-4.72a.75.75 0 011.28.53v11.38a.75.75 0 01-1.28.53l-4.72-4.72M4.5 18.75h9a2.25 2.25 0 002.25-2.25v-9a2.25 2.25 0 00-2.25-2.25h-9A2.25 2.25 0 002.25 7.5v9a2.25 2.25 0 002.25 2.25z" />
                  </svg>
                ),
                title: "Video Documentation",
                desc: "Every assay recorded. Full transparency, no surprises. You watch the entire process.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="group bg-bg-card rounded-2xl p-8 border border-cream-08 transition-all duration-500 hover:border-gold-500/20 hover:shadow-[0_0_40px_rgba(201,168,76,0.06)]"
              >
                <div className="mb-6 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gold-500/10 text-gold-500 transition-colors group-hover:bg-gold-500/20">
                  {item.icon}
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
        </div>
      </section>

      {/* ============================================================ */}
      {/*  PAWN SHOP COMPARISON                                        */}
      {/* ============================================================ */}
      <section className="py-28 sm:py-36 px-6 border-t border-cream-08">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-20">
            <p className="text-xs font-body uppercase tracking-[0.25em] text-gold-500 mb-4">
              Compare
            </p>
            <h2 className="font-display text-4xl sm:text-5xl md:text-6xl font-semibold tracking-tight">
              Pawn Shop vs. Offramp
            </h2>
            <p className="mt-4 text-cream-45 font-body max-w-xl mx-auto">
              See why thousands choose Offramp over their local pawn shop.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-0">
            {/* Pawn Shop Column */}
            <div className="relative bg-bg-card rounded-2xl md:rounded-r-none p-8 sm:p-10 border border-cream-08 md:border-r-0">
              {/* Red tint overlay */}
              <div className="absolute inset-0 rounded-2xl md:rounded-r-none bg-gradient-to-br from-red-500/[0.03] to-transparent pointer-events-none" />
              <div className="relative">
                <h3 className="font-display text-2xl sm:text-3xl font-semibold mb-8 text-cream-60">
                  Pawn Shop
                </h3>
                <ul className="space-y-5">
                  {[
                    "20\u201355% of spot",
                    "No insurance",
                    "Cash only",
                    "Visual estimate",
                    "No documentation",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-3 text-cream-45">
                      <span className="mt-0.5 inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-red-500/10 text-red-400">
                        <svg className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                        </svg>
                      </span>
                      <span className="font-body text-base">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Offramp Column */}
            <div className="relative bg-bg-card rounded-2xl md:rounded-l-none p-8 sm:p-10 border border-gold-500/20 glow-gold">
              {/* Gold tint overlay */}
              <div className="absolute inset-0 rounded-2xl md:rounded-l-none bg-gradient-to-br from-gold-500/[0.04] to-transparent pointer-events-none" />
              <div className="relative">
                <h3 className="font-display text-2xl sm:text-3xl font-semibold mb-8 text-gold-shimmer">
                  Offramp
                </h3>
                <ul className="space-y-5">
                  {[
                    "80%+ of spot",
                    "$25K insured",
                    "Cash or Bitcoin",
                    "XRF Spectrometer",
                    "Video documented",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-3 text-cream">
                      <span className="mt-0.5 inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-gold-500/15 text-gold-400">
                        <svg className="h-3 w-3" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      </span>
                      <span className="font-body text-base">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/*  THE THESIS                                                  */}
      {/* ============================================================ */}
      <section className="py-28 sm:py-36 px-6 border-t border-cream-08">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-xs font-body uppercase tracking-[0.25em] text-gold-500 mb-8">
            The Thesis
          </p>

          <blockquote className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold leading-[1.2] tracking-tight">
            Gold preserved wealth for 5,000&nbsp;years.
            <br />
            <span className="text-gold-shimmer">
              Bitcoin will preserve it for the next&nbsp;5,000.
            </span>
          </blockquote>

          <p className="mt-6 font-display text-xl sm:text-2xl text-cream-45 italic">
            Offramp is the bridge.
          </p>

          <p className="mt-10 max-w-2xl mx-auto text-cream-60 font-body leading-relaxed text-base sm:text-lg">
            For millennia, gold has been the ultimate store of value &mdash; scarce,
            durable, universally recognized. Bitcoin shares those properties but
            adds programmability, portability, and a fixed 21-million supply.
            Offramp exists so that gold holders can access the next era of sound
            money without friction, with full transparency, and on their own
            terms.
          </p>

          <div className="mt-10">
            <Link
              href="/gold-to-bitcoin"
              className="inline-flex items-center gap-2 font-body text-base text-gold-500 transition-colors hover:text-gold-400"
            >
              Learn about Gold to Bitcoin
              <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/*  CALCULATOR PREVIEW                                          */}
      {/* ============================================================ */}
      <section className="py-28 sm:py-36 px-6 border-t border-cream-08">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-xs font-body uppercase tracking-[0.25em] text-gold-500 mb-4">
              Estimate
            </p>
            <h2 className="font-display text-4xl sm:text-5xl font-semibold tracking-tight">
              Gold Value Calculator
            </h2>
          </div>

          <div className="border-gold-gradient rounded-2xl p-8 sm:p-10">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
              {/* Karat select */}
              <div>
                <label className="block text-xs font-body uppercase tracking-widest text-cream-45 mb-2">
                  Karat
                </label>
                <select
                  value={karat}
                  onChange={(e) => setKarat(e.target.value)}
                  className="w-full appearance-none bg-bg border border-cream-15 rounded-lg px-4 py-3 font-mono text-cream text-lg focus:outline-none focus:border-gold-500/50 transition-colors cursor-pointer"
                >
                  {Object.keys(KARAT_PURITY).map((k) => (
                    <option key={k} value={k}>
                      {k}
                    </option>
                  ))}
                </select>
              </div>

              {/* Weight input */}
              <div>
                <label className="block text-xs font-body uppercase tracking-widest text-cream-45 mb-2">
                  Weight (grams)
                </label>
                <input
                  type="number"
                  value={weightG}
                  onChange={(e) => setWeightG(Math.max(0, Number(e.target.value)))}
                  min={0}
                  step={0.1}
                  className="w-full bg-bg border border-cream-15 rounded-lg px-4 py-3 font-mono text-cream text-lg focus:outline-none focus:border-gold-500/50 transition-colors"
                />
              </div>
            </div>

            {/* Results */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="bg-bg/50 rounded-xl p-6 border border-cream-08">
                <p className="text-xs font-body uppercase tracking-widest text-cream-45 mb-2">
                  Estimated USD
                </p>
                <p className="font-mono text-3xl sm:text-4xl font-medium text-cream">
                  ${usdValue.toLocaleString("en-US", { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                </p>
                <p className="mt-1 text-xs text-cream-35 font-mono">
                  at 82% of spot
                </p>
              </div>

              <div className="bg-bg/50 rounded-xl p-6 border border-cream-08">
                <p className="text-xs font-body uppercase tracking-widest text-cream-45 mb-2">
                  Estimated BTC
                </p>
                <p className="font-mono text-3xl sm:text-4xl font-medium text-gold-400">
                  {btcValue.toFixed(6)}
                </p>
                <p className="mt-1 text-xs text-cream-35 font-mono">
                  &asymp; {(btcValue * 100_000_000).toLocaleString("en-US", { maximumFractionDigits: 0 })} sats
                </p>
              </div>
            </div>

            <div className="mt-8 text-center">
              <Link
                href="/gold-calculator"
                className="inline-flex items-center gap-2 font-body text-sm text-gold-500 transition-colors hover:text-gold-400"
              >
                See full calculator
                <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/*  FINAL CTA                                                   */}
      {/* ============================================================ */}
      <section className="py-28 sm:py-36 px-6 border-t border-cream-08">
        <div className="max-w-3xl mx-auto text-center">
          {/* Subtle radial glow */}
          <div
            className="pointer-events-none absolute left-1/2 -translate-x-1/2 w-[600px] h-[400px]"
            aria-hidden="true"
            style={{
              background:
                "radial-gradient(ellipse at center, rgba(201,168,76,0.06) 0%, transparent 70%)",
            }}
          />

          <h2 className="relative font-display text-4xl sm:text-5xl md:text-6xl font-semibold tracking-tight">
            Ready to sell your gold?
          </h2>
          <p className="relative mt-4 text-xl sm:text-2xl text-cream-60 font-body">
            Get your free insured kit today.
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

          <p className="relative mt-6 text-cream-45 font-body text-sm">
            Questions?{" "}
            <a href="tel:+15551234567" className="text-cream hover:text-gold-500 transition-colors font-medium">
              Call (555) 123-4567
            </a>{" "}
            to speak with a gold expert.
          </p>
        </div>
      </section>
    </div>
  );
}
