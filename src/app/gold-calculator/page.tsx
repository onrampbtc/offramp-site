"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import { useGoldPrice } from "@/hooks/useGoldPrice";

/* ──────────────────────────── constants ──────────────────────────── */

const KARATS = [
  { label: "10K", purity: 0.417 },
  { label: "14K", purity: 0.583 },
  { label: "18K", purity: 0.75 },
  { label: "22K", purity: 0.917 },
  { label: "24K", purity: 0.999 },
] as const;

const GRAMS_PER_OZ = 31.1035;
const GRAMS_PER_DWT = 1.55517;

const BUYERS = [
  { name: "Pawn Shop", low: 0.2, high: 0.35, accent: "text-red-400", highlight: false },
  { name: "Local Jeweler", low: 0.4, high: 0.6, accent: "text-cream-60", highlight: false },
  { name: "Online Buyer", low: 0.65, high: 0.75, accent: "text-cream-60", highlight: false },
  { name: "Offramp", low: 0.8, high: 0.8, accent: "text-gold-400", highlight: true },
] as const;

const FAQS = [
  {
    q: "How accurate is this calculator?",
    a: "Our calculator uses live gold spot prices updated every 60 seconds directly from global commodity exchanges. The \u201CMelt Value\u201D represents the theoretical value of the pure gold content in your item. The \u201COfframp Pays\u201D figure reflects our actual payout rate of 80%+ of melt value, which is significantly higher than most competitors. Final payout after assay may vary slightly based on the exact purity determined by our XRF spectrometer analysis.",
  },
  {
    q: "What karat is my gold?",
    a: "Most gold jewelry sold in the US is 10K or 14K. European jewelry is often 18K. Look for a small stamp on the inside of rings, on clasps of necklaces, or on the back of pendants. Common stamps include \u201C10K\u201D, \u201C14K\u201D, \u201C585\u201D (14K), \u201C750\u201D (18K), \u201C916\u201D (22K), or \u201C999\u201D (24K). If you cannot find a stamp, select 10K as a conservative estimate \u2014 our XRF assay will determine the exact purity.",
  },
  {
    q: "How does Offramp determine the final price?",
    a: "When we receive your gold, we test every piece with an XRF spectrometer \u2014 the same technology used by refineries and the US Mint. This gives an exact purity reading to 0.01%. We record the entire assay process on video so you can verify the results. Your payout is calculated using the spot price at the time of assay multiplied by the verified purity and weight, at our published payout rate of 80%+.",
  },
  {
    q: "Can I get paid in Bitcoin instead of cash?",
    a: "Yes. Offramp is the first gold buyer built for the Bitcoin economy. You can choose to receive your payout as a bank wire (USD), a Bitcoin transfer to your wallet, or a combination of both. Bitcoin payouts are sent within 1 hour of assay confirmation. No exchange account needed \u2014 just provide your Bitcoin address.",
  },
  {
    q: "What is the minimum amount of gold I can sell?",
    a: "There is no strict minimum. However, because we provide free insured shipping and a professional XRF assay for every order, we recommend sending at least 5 grams of gold (roughly one small ring or pendant) to make the process worthwhile. For items under 2 grams, the shipping and insurance costs may exceed the payout value.",
  },
];

/* ──────────────────────────── helpers ──────────────────────────── */

function fmt(n: number, decimals = 2) {
  return n.toLocaleString("en-US", {
    minimumFractionDigits: decimals,
    maximumFractionDigits: decimals,
  });
}

function fmtUSD(n: number) {
  return `$${fmt(n)}`;
}

function fmtBTC(n: number) {
  if (n < 0.0001) return n.toFixed(8);
  return n.toFixed(6);
}

function fmtSats(btc: number) {
  return Math.round(btc * 1e8).toLocaleString("en-US");
}

/* ──────────────────────────── component ──────────────────────────── */

export default function GoldCalculatorPage() {
  /* ── state ── */
  const [selectedKarat, setSelectedKarat] = useState(1); // index into KARATS (default 14K)
  const [weightGrams, setWeightGrams] = useState(10);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  /* ── live prices ── */
  const { goldPerOz: spotPricePerOz, btcPrice, lastUpdated, isLive } = useGoldPrice();

  /* ── derived calculations ── */
  const calc = useMemo(() => {
    const purity = KARATS[selectedKarat].purity;
    const spotPerGram = spotPricePerOz / GRAMS_PER_OZ;
    const meltValue = weightGrams * purity * spotPerGram;
    const offrampPays = meltValue * 0.8;
    const pawnPays = meltValue * 0.35;
    const savings = offrampPays - pawnPays;
    const offrampBTC = offrampPays / btcPrice;

    return {
      purity,
      spotPerGram,
      meltValue,
      offrampPays,
      pawnPays,
      savings,
      offrampBTC,
      weightOz: weightGrams / GRAMS_PER_OZ,
      weightDwt: weightGrams / GRAMS_PER_DWT,
    };
  }, [selectedKarat, weightGrams, spotPricePerOz, btcPrice]);

  /* ── weight adjustment ── */
  const adjustWeight = (delta: number) => {
    setWeightGrams((prev) => {
      const next = Math.round((prev + delta) * 10) / 10;
      return Math.max(0.1, next);
    });
  };

  return (
    <div className="relative min-h-screen bg-bg">
      {/* radial glow behind hero */}
      <div className="pointer-events-none absolute inset-0 bg-hero-radial" />

      {/* ════════════════════════ HERO ════════════════════════ */}
      <section className="relative px-4 pt-32 pb-16 text-center sm:px-6 lg:px-8">
        <h1 className="font-display text-4xl font-semibold tracking-tight text-cream sm:text-5xl lg:text-6xl">
          Gold Value Calculator
        </h1>
        <p className="mx-auto mt-5 max-w-2xl font-body text-lg text-cream-60 sm:text-xl">
          Calculate your gold&rsquo;s value in USD and Bitcoin.
          <br className="hidden sm:block" /> Live spot prices. Updated every 60
          seconds.
        </p>
      </section>

      {/* ════════════════════════ CALCULATOR ════════════════════════ */}
      <section className="relative mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-2xl border border-cream-15 bg-bg-card p-6 shadow-2xl sm:p-10">
          {/* ── Karat Selector ── */}
          <div className="mb-8">
            <label className="mb-3 block font-body text-sm font-medium uppercase tracking-widest text-cream-45">
              Gold Purity (Karat)
            </label>
            <div className="flex flex-wrap gap-2 sm:gap-3">
              {KARATS.map((k, i) => (
                <button
                  key={k.label}
                  onClick={() => setSelectedKarat(i)}
                  className={`relative rounded-lg border px-5 py-3 font-mono text-sm font-medium transition-all duration-200 sm:px-6 sm:text-base ${
                    selectedKarat === i
                      ? "border-gold-500 bg-gold-500/10 text-gold-400 shadow-[0_0_20px_rgba(201,168,76,0.15)]"
                      : "border-cream-15 bg-bg-card text-cream-60 hover:border-cream-25 hover:text-cream"
                  }`}
                >
                  {k.label}
                  <span className="mt-0.5 block text-[10px] text-cream-35">
                    {(k.purity * 100).toFixed(1)}%
                  </span>
                </button>
              ))}
            </div>
          </div>

          {/* ── Weight Input ── */}
          <div className="mb-8">
            <label className="mb-3 block font-body text-sm font-medium uppercase tracking-widest text-cream-45">
              Weight
            </label>
            <div className="flex items-center gap-3">
              <button
                onClick={() => adjustWeight(-1)}
                className="flex h-12 w-12 items-center justify-center rounded-lg border border-cream-15 bg-bg-card text-xl text-cream-60 transition-colors hover:border-cream-25 hover:text-cream active:bg-cream-08"
              >
                &minus;
              </button>
              <div className="relative flex-1">
                <input
                  type="number"
                  min="0.1"
                  step="0.1"
                  value={weightGrams}
                  onChange={(e) => {
                    const v = parseFloat(e.target.value);
                    if (!isNaN(v) && v > 0) setWeightGrams(v);
                  }}
                  className="w-full rounded-lg border border-cream-15 bg-bg px-4 py-3 pr-16 font-mono text-2xl text-cream outline-none transition-colors focus:border-gold-500 focus:ring-1 focus:ring-gold-500/30 [appearance:textfield] [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none"
                />
                <span className="absolute right-4 top-1/2 -translate-y-1/2 font-mono text-sm text-cream-45">
                  grams
                </span>
              </div>
              <button
                onClick={() => adjustWeight(1)}
                className="flex h-12 w-12 items-center justify-center rounded-lg border border-cream-15 bg-bg-card text-xl text-cream-60 transition-colors hover:border-cream-25 hover:text-cream active:bg-cream-08"
              >
                +
              </button>
            </div>
            {/* conversion readout */}
            <div className="mt-2 flex gap-4 font-mono text-xs text-cream-35">
              <span>{fmt(calc.weightOz, 3)} oz</span>
              <span>{fmt(calc.weightDwt, 2)} dwt</span>
            </div>
          </div>

          {/* ── Live Prices ── */}
          <div className="mb-8 flex flex-col gap-3 rounded-xl border border-cream-08 bg-bg/60 p-4 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex items-center gap-6">
              <div>
                <span className="block font-body text-[11px] uppercase tracking-widest text-cream-35">
                  Gold Spot
                </span>
                <span className="font-mono text-lg text-cream sm:text-xl">
                  {fmtUSD(spotPricePerOz)}
                  <span className="text-xs text-cream-35"> /oz</span>
                </span>
              </div>
              <div className="h-8 w-px bg-cream-08" />
              <div>
                <span className="block font-body text-[11px] uppercase tracking-widest text-cream-35">
                  Bitcoin
                </span>
                <span className="font-mono text-lg text-cream sm:text-xl">
                  {fmtUSD(btcPrice)}
                </span>
              </div>
            </div>
            <div className="flex items-center gap-2 text-xs text-cream-35">
              <span className="relative flex h-2 w-2">
                <span className={`absolute inline-flex h-full w-full animate-ping rounded-full ${isLive ? "bg-green-400" : "bg-yellow-400"} opacity-75`} />
                <span className={`relative inline-flex h-2 w-2 rounded-full ${isLive ? "bg-green-500" : "bg-yellow-500"}`} />
              </span>
              <span>
                {isLive ? "Live" : "Loading"} &middot; Updated {lastUpdated || "--:--:--"}
              </span>
            </div>
          </div>

          {/* ── Results Panel ── */}
          <div className="relative overflow-hidden rounded-xl border border-gold-500/40 bg-gradient-to-b from-gold-500/[0.04] to-transparent p-6 shadow-[0_0_40px_rgba(201,168,76,0.06)] sm:p-8">
            {/* corner glow decoration */}
            <div className="pointer-events-none absolute -right-20 -top-20 h-60 w-60 rounded-full bg-gold-500/[0.07] blur-3xl" />

            <h3 className="mb-6 font-display text-xl text-cream-60 sm:text-2xl">
              Your Gold&rsquo;s Value
            </h3>

            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {/* Melt Value */}
              <div className="rounded-lg border border-cream-08 bg-bg/50 p-4">
                <span className="block text-[11px] font-medium uppercase tracking-widest text-cream-35">
                  Melt Value
                </span>
                <span className="mt-1 block font-mono text-2xl text-cream sm:text-3xl">
                  {fmtUSD(calc.meltValue)}
                </span>
                <span className="mt-1 block text-xs text-cream-35">
                  {fmt(weightGrams, 1)}g &times; {(calc.purity * 100).toFixed(1)}%
                  &times; {fmtUSD(calc.spotPerGram)}/g
                </span>
              </div>

              {/* Offramp Pays */}
              <div className="rounded-lg border border-gold-500/30 bg-gold-500/[0.06] p-4 shadow-[0_0_24px_rgba(201,168,76,0.08)]">
                <span className="block text-[11px] font-medium uppercase tracking-widest text-gold-500">
                  Offramp Pays
                </span>
                <span className="mt-1 block font-mono text-3xl font-medium text-gold-400 sm:text-4xl">
                  {fmtUSD(calc.offrampPays)}
                </span>
                <span className="mt-1 block text-xs text-gold-600">
                  80% of melt value
                </span>
              </div>

              {/* In Bitcoin */}
              <div className="rounded-lg border border-cream-08 bg-bg/50 p-4">
                <span className="block text-[11px] font-medium uppercase tracking-widest text-cream-35">
                  In Bitcoin
                </span>
                <span className="mt-1 block font-mono text-2xl text-cream sm:text-3xl">
                  {fmtBTC(calc.offrampBTC)}
                  <span className="ml-1 text-sm text-cream-35">BTC</span>
                </span>
                <span className="mt-1 block font-mono text-xs text-cream-35">
                  {fmtSats(calc.offrampBTC)} sats
                </span>
              </div>

              {/* Pawn Shop Pays */}
              <div className="rounded-lg border border-cream-08 bg-bg/50 p-4">
                <span className="block text-[11px] font-medium uppercase tracking-widest text-cream-35">
                  Pawn Shop Pays
                </span>
                <span className="mt-1 block font-mono text-2xl text-red-400/80 sm:text-3xl">
                  {fmtUSD(calc.pawnPays)}
                </span>
                <span className="mt-1 block text-xs text-cream-35">
                  ~35% of melt value
                </span>
              </div>

              {/* You Save */}
              <div className="rounded-lg border border-green-500/20 bg-green-500/[0.04] p-4 sm:col-span-2 lg:col-span-2">
                <span className="block text-[11px] font-medium uppercase tracking-widest text-green-400">
                  You Save with Offramp
                </span>
                <span className="mt-1 block font-mono text-3xl font-medium text-green-400 sm:text-4xl">
                  +{fmtUSD(calc.savings)}
                </span>
                <span className="mt-1 block text-xs text-green-400/60">
                  compared to a typical pawn shop
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ════════════════════════ COMPARISON TABLE ════════════════════════ */}
      <section className="mx-auto mt-20 max-w-4xl px-4 sm:px-6 lg:px-8">
        <h2 className="mb-2 text-center font-display text-3xl font-semibold text-cream sm:text-4xl">
          Compare Payouts
        </h2>
        <p className="mb-10 text-center font-body text-cream-45">
          See how Offramp stacks up against the competition.
        </p>

        <div className="overflow-x-auto rounded-xl border border-cream-15">
          <table className="w-full min-w-[560px] text-left">
            <thead>
              <tr className="border-b border-cream-08 bg-bg-card">
                <th className="px-5 py-4 font-body text-xs font-semibold uppercase tracking-widest text-cream-45">
                  Buyer
                </th>
                <th className="px-5 py-4 font-body text-xs font-semibold uppercase tracking-widest text-cream-45">
                  Typical Payout
                </th>
                <th className="px-5 py-4 text-right font-body text-xs font-semibold uppercase tracking-widest text-cream-45">
                  Your Gold Value
                </th>
                <th className="px-5 py-4 text-right font-body text-xs font-semibold uppercase tracking-widest text-cream-45">
                  Difference
                </th>
              </tr>
            </thead>
            <tbody>
              {BUYERS.map((b) => {
                const midPayout = ((b.low + b.high) / 2) * calc.meltValue;
                const diff = midPayout - calc.offrampPays;
                const isOfframp = !!b.highlight;

                return (
                  <tr
                    key={b.name}
                    className={`border-b border-cream-08 transition-colors ${
                      isOfframp
                        ? "bg-gold-500/[0.06]"
                        : "bg-bg-card hover:bg-bg-card-hover"
                    }`}
                  >
                    <td className="px-5 py-4">
                      <span
                        className={`font-body text-sm font-medium ${
                          isOfframp ? "text-gold-400" : "text-cream"
                        }`}
                      >
                        {b.name}
                      </span>
                    </td>
                    <td className="px-5 py-4">
                      <span className="font-mono text-sm text-cream-60">
                        {(b.low * 100).toFixed(0)}
                        {b.low !== b.high
                          ? `\u2013${(b.high * 100).toFixed(0)}`
                          : ""}
                        %
                        {isOfframp && "+"}
                      </span>
                    </td>
                    <td className="px-5 py-4 text-right">
                      <span
                        className={`font-mono text-base font-medium ${b.accent}`}
                      >
                        {fmtUSD(midPayout)}
                      </span>
                    </td>
                    <td className="px-5 py-4 text-right">
                      {isOfframp ? (
                        <span className="font-mono text-sm font-medium text-gold-400">
                          &mdash;
                        </span>
                      ) : (
                        <span className="font-mono text-sm font-medium text-red-400">
                          {fmtUSD(diff)}
                        </span>
                      )}
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </section>

      {/* ════════════════════════ CTA ════════════════════════ */}
      <section className="mx-auto mt-24 max-w-3xl px-4 text-center sm:px-6 lg:px-8">
        <h2 className="font-display text-3xl font-semibold text-cream sm:text-4xl">
          Like what you see?
        </h2>
        <p className="mx-auto mt-4 max-w-xl font-body text-lg text-cream-60">
          Get your free insured kit and sell your gold to Offramp.
        </p>
        <Link
          href="/get-started"
          className="mt-8 inline-flex items-center gap-2 rounded-full bg-gold-gradient px-10 py-4 font-body text-base font-semibold text-bg transition-all duration-300 hover:shadow-[0_0_32px_rgba(201,168,76,0.35)] hover:brightness-110 active:scale-[0.98]"
        >
          Get Your Free Kit
          <svg
            className="h-4 w-4"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2.5}
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
            />
          </svg>
        </Link>
      </section>

      {/* ════════════════════════ FAQ ════════════════════════ */}
      <section className="mx-auto mt-28 max-w-3xl px-4 pb-32 sm:px-6 lg:px-8">
        <h2 className="mb-10 text-center font-display text-3xl font-semibold text-cream sm:text-4xl">
          Frequently Asked Questions
        </h2>

        <div className="divide-y divide-cream-08 rounded-xl border border-cream-15">
          {FAQS.map((faq, i) => {
            const isOpen = openFaq === i;

            return (
              <div key={i} className="group">
                <button
                  onClick={() => setOpenFaq(isOpen ? null : i)}
                  className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left transition-colors hover:bg-cream-08/40"
                >
                  <span className="font-body text-base font-medium text-cream">
                    {faq.q}
                  </span>
                  <span
                    className={`flex h-6 w-6 shrink-0 items-center justify-center rounded-full border border-cream-15 text-cream-45 transition-transform duration-300 ${
                      isOpen ? "rotate-45" : ""
                    }`}
                  >
                    <svg
                      className="h-3.5 w-3.5"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={2}
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M12 4.5v15m7.5-7.5h-15"
                      />
                    </svg>
                  </span>
                </button>

                <div
                  className={`grid transition-all duration-300 ease-in-out ${
                    isOpen
                      ? "grid-rows-[1fr] opacity-100"
                      : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <div className="overflow-hidden">
                    <p className="px-6 pb-5 font-body text-sm leading-relaxed text-cream-60">
                      {faq.a}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
}
