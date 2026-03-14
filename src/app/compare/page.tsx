"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import { useGoldPrice } from "@/hooks/useGoldPrice";

const fmt = (n: number) =>
  n.toLocaleString("en-US", { minimumFractionDigits: 2, maximumFractionDigits: 2 });
const fmtUSD = (n: number) => `$${fmt(n)}`;

const GRAMS_PER_OZ = 31.1035;

const BUYERS = [
  { name: "Offramp", pct: 0.8, highlight: true },
  { name: "Local Jeweler", pct: 0.5, highlight: false },
  { name: "Pawn Shop", pct: 0.275, highlight: false },
  { name: "Cash-for-Gold", pct: 0.2, highlight: false },
];

const FEATURES = [
  { feature: "Payout (% of melt)", offramp: "80%+", jeweler: "40-60%", pawn: "20-35%" },
  { feature: "XRF Testing", offramp: "Yes, on video", jeweler: "Rarely", pawn: "No" },
  { feature: "Free Shipping", offramp: "Yes, insured", jeweler: "No (in person)", pawn: "No (in person)" },
  { feature: "Bitcoin Payment", offramp: "Yes", jeweler: "No", pawn: "No" },
  { feature: "No Obligation", offramp: "Yes — free returns", jeweler: "Varies", pawn: "Yes" },
  { feature: "Payment Speed", offramp: "24-48 hours", jeweler: "Same day", pawn: "Same day" },
  { feature: "Transparent Pricing", offramp: "Live spot price", jeweler: "Subjective", pawn: "Subjective" },
];

const FAQ_ITEMS = [
  {
    question: "Why does Offramp pay more than pawn shops?",
    answer:
      "Pawn shops have high overhead costs — rent, staff, inventory — and buy gold as a side business. Offramp is a dedicated online gold buyer with lower overhead, so we pass those savings to you by paying 80% or more of melt value.",
  },
  {
    question: "How does Offramp compare to local jewelers?",
    answer:
      "Local jewelers typically pay 40-60% of melt value. Offramp pays 80% or more. Plus, we provide free insured shipping so you don't even need to leave home.",
  },
  {
    question: "Is it safe to mail gold?",
    answer:
      "Yes. Offramp provides free insured shipping kits. Your gold is fully insured from the moment you drop it off at the carrier until we process your payment.",
  },
  {
    question: "How fast does Offramp pay?",
    answer:
      "We process payments within 24-48 hours of receiving and testing your gold. You can choose bank wire or Bitcoin.",
  },
];

export default function ComparePage() {
  const { goldPerOz, isLive } = useGoldPrice();
  const [grams, setGrams] = useState(10);
  const [karat, setKarat] = useState(14);

  const purityMap: Record<number, number> = {
    8: 0.333,
    9: 0.375,
    10: 0.417,
    14: 0.583,
    18: 0.75,
    22: 0.916,
    24: 0.999,
  };

  const purity = purityMap[karat] ?? 0.583;
  const meltValue = useMemo(
    () => (goldPerOz / GRAMS_PER_OZ) * grams * purity,
    [goldPerOz, grams, purity]
  );

  return (
    <>
      {/* ── Hero ── */}
      <section className="relative min-h-[75vh] flex flex-col items-center justify-center px-6 text-center">
        <div
          className="pointer-events-none absolute inset-0"
          aria-hidden="true"
          style={{
            background:
              "radial-gradient(ellipse 70% 50% at 50% 0%, rgba(201,168,76,0.10) 0%, transparent 70%)",
          }}
        />
        <div className="relative z-10 max-w-4xl mx-auto animate-fade-in-up">
          <p className="text-xs font-body uppercase tracking-[0.3em] text-gold-500 mb-6">
            Gold Buyer Comparison
          </p>
          <h1 className="font-display text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-semibold tracking-tight leading-[1.1]">
            See How Much
            <br />
            <span className="text-gold-shimmer">More You Earn</span>
          </h1>
          <p className="mt-6 max-w-2xl mx-auto text-lg sm:text-xl text-cream-60 font-body leading-relaxed">
            Compare what Offramp pays versus pawn shops, jewelers, and
            cash-for-gold stores &mdash; using live gold prices.
          </p>
        </div>
      </section>

      {/* ── Live Comparison Calculator ── */}
      <section className="py-28 sm:py-36 px-6 border-t border-cream-08">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-xs font-body uppercase tracking-[0.25em] text-gold-500 mb-4">
              Live Price Comparison
            </p>
            <h2 className="font-display text-4xl sm:text-5xl md:text-6xl font-semibold tracking-tight">
              Your Gold, Four Offers
            </h2>
          </div>

          {/* Controls */}
          <div className="rounded-2xl border border-cream-08 bg-bg-card p-6 sm:p-8 mb-8">
            <div className="grid gap-6 sm:grid-cols-2">
              <div>
                <label className="block text-xs font-body uppercase tracking-widest text-cream-45 mb-2">
                  Weight (grams)
                </label>
                <input
                  type="number"
                  min={0.1}
                  step={0.1}
                  value={grams}
                  onChange={(e) => setGrams(Math.max(0.1, +e.target.value))}
                  className="w-full rounded-lg border border-cream-15 bg-bg px-4 py-3 font-mono text-lg text-cream focus:border-gold-500 focus:outline-none transition-colors"
                />
              </div>
              <div>
                <label className="block text-xs font-body uppercase tracking-widest text-cream-45 mb-2">
                  Karat
                </label>
                <select
                  value={karat}
                  onChange={(e) => setKarat(+e.target.value)}
                  className="w-full rounded-lg border border-cream-15 bg-bg px-4 py-3 font-mono text-lg text-cream focus:border-gold-500 focus:outline-none transition-colors"
                >
                  {Object.keys(purityMap).map((k) => (
                    <option key={k} value={k}>
                      {k}K Gold
                    </option>
                  ))}
                </select>
              </div>
            </div>
            <div className="mt-4 flex items-center gap-2 text-xs text-cream-35 font-body">
              <span
                className={`inline-block h-2 w-2 rounded-full ${
                  isLive ? "bg-emerald-400" : "bg-amber-400"
                }`}
              />
              {isLive ? "Live" : "Estimated"} gold: {fmtUSD(goldPerOz)}/oz
            </div>
          </div>

          {/* Comparison bars */}
          <div className="space-y-4">
            {BUYERS.map((buyer) => {
              const payout = meltValue * buyer.pct;
              const barWidth = (buyer.pct / 0.8) * 100;
              return (
                <div
                  key={buyer.name}
                  className={`rounded-2xl border p-6 sm:p-8 ${
                    buyer.highlight
                      ? "border-gold-500/20 bg-bg-card shadow-[0_0_30px_rgba(201,168,76,0.04)]"
                      : "border-cream-08 bg-bg-card"
                  }`}
                >
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-3">
                      <span
                        className={`font-display text-lg font-semibold ${
                          buyer.highlight ? "text-gold-500" : "text-cream"
                        }`}
                      >
                        {buyer.name}
                      </span>
                      {buyer.highlight && (
                        <span className="rounded-full bg-gold-500/10 px-3 py-1 text-xs font-body font-semibold text-gold-500 uppercase tracking-wider">
                          Best
                        </span>
                      )}
                    </div>
                    <span
                      className={`font-mono text-2xl font-bold ${
                        buyer.highlight ? "text-gold-500" : "text-cream"
                      }`}
                    >
                      {fmtUSD(payout)}
                    </span>
                  </div>
                  <div className="h-3 w-full rounded-full bg-cream/5 overflow-hidden">
                    <div
                      className={`h-full rounded-full transition-all duration-500 ${
                        buyer.highlight
                          ? "bg-gradient-to-r from-gold-500 to-gold-400"
                          : "bg-cream/20"
                      }`}
                      style={{ width: `${Math.min(barWidth, 100)}%` }}
                    />
                  </div>
                  <p className="mt-2 text-xs text-cream-35 font-body">
                    {Math.round(buyer.pct * 100)}% of melt value ({fmtUSD(meltValue)})
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Feature Comparison Table ── */}
      <section className="py-28 sm:py-36 px-6 border-t border-cream-08">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-xs font-body uppercase tracking-[0.25em] text-gold-500 mb-4">
              Side by Side
            </p>
            <h2 className="font-display text-4xl sm:text-5xl md:text-6xl font-semibold tracking-tight">
              Feature Comparison
            </h2>
          </div>
          <div className="overflow-x-auto rounded-2xl border border-cream-08">
            <table className="w-full text-left">
              <thead>
                <tr className="border-b border-cream-08 bg-bg-card">
                  <th className="px-6 py-4 font-body text-sm font-semibold text-cream-45 uppercase tracking-wider">
                    Feature
                  </th>
                  <th className="px-6 py-4 font-body text-sm font-semibold text-gold-500 uppercase tracking-wider">
                    Offramp
                  </th>
                  <th className="px-6 py-4 font-body text-sm font-semibold text-cream-45 uppercase tracking-wider">
                    Jeweler
                  </th>
                  <th className="px-6 py-4 font-body text-sm font-semibold text-cream-45 uppercase tracking-wider">
                    Pawn Shop
                  </th>
                </tr>
              </thead>
              <tbody>
                {FEATURES.map((row, i) => (
                  <tr
                    key={row.feature}
                    className={`border-b border-cream-08 ${
                      i % 2 === 0 ? "bg-bg" : "bg-bg-card"
                    }`}
                  >
                    <td className="px-6 py-4 font-body text-sm text-cream font-medium">
                      {row.feature}
                    </td>
                    <td className="px-6 py-4 font-body text-sm text-gold-400 font-medium">
                      {row.offramp}
                    </td>
                    <td className="px-6 py-4 font-body text-sm text-cream-60">
                      {row.jeweler}
                    </td>
                    <td className="px-6 py-4 font-body text-sm text-cream-60">
                      {row.pawn}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="py-28 sm:py-36 px-6 border-t border-cream-08">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-xs font-body uppercase tracking-[0.25em] text-gold-500 mb-4">
              Questions
            </p>
            <h2 className="font-display text-4xl sm:text-5xl md:text-6xl font-semibold tracking-tight">
              Common Questions
            </h2>
          </div>
          <FAQAccordion />
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-28 sm:py-36 px-6 border-t border-cream-08">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-display text-4xl sm:text-5xl md:text-6xl font-semibold tracking-tight mb-6">
            Get the Best Payout
          </h2>
          <p className="text-cream-60 font-body text-lg leading-relaxed mb-10 max-w-xl mx-auto">
            Stop leaving money on the table. Request a free insured shipping kit
            and see why sellers choose Offramp.
          </p>
          <Link
            href="/get-kit"
            className="inline-flex items-center gap-2 rounded-full bg-gold-gradient px-8 py-4 font-body text-sm font-semibold uppercase tracking-widest text-bg transition-transform hover:scale-105"
          >
            Get Your Free Kit
            <svg
              className="h-4 w-4"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
              />
            </svg>
          </Link>
        </div>
      </section>

      {/* ── Internal Links ── */}
      <section className="py-20 px-6 border-t border-cream-08">
        <div className="max-w-5xl mx-auto">
          <div className="flex flex-wrap justify-center gap-4">
            {[
              { label: "How It Works", href: "/how-it-works" },
              { label: "Gold Calculator", href: "/calculators" },
              { label: "Reviews", href: "/reviews" },
              { label: "FAQ", href: "/faq" },
              { label: "About Offramp", href: "/about" },
            ].map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="rounded-full border border-cream-15 px-5 py-2.5 font-body text-sm text-cream-60 transition-all hover:border-gold-500/30 hover:text-gold-500"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

function FAQAccordion() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  return (
    <div className="space-y-3">
      {FAQ_ITEMS.map((item, i) => {
        const isOpen = openIndex === i;
        return (
          <div
            key={i}
            className={`rounded-xl border transition-all duration-300 ${
              isOpen
                ? "border-gold-500/20 bg-bg-card shadow-[0_0_30px_rgba(201,168,76,0.04)]"
                : "border-cream-08 bg-bg-card hover:border-cream-15"
            }`}
          >
            <button
              type="button"
              onClick={() => setOpenIndex(isOpen ? null : i)}
              className="flex w-full items-center justify-between px-6 py-5 sm:px-8 sm:py-6 text-left"
              aria-expanded={isOpen}
            >
              <span className="font-body text-base sm:text-lg font-medium text-cream pr-4">
                {item.question}
              </span>
              <span
                className={`shrink-0 inline-flex h-8 w-8 items-center justify-center rounded-full border transition-all duration-300 ${
                  isOpen
                    ? "border-gold-500/30 bg-gold-500/10 rotate-45"
                    : "border-cream-15 bg-transparent"
                }`}
              >
                <svg
                  className={`h-4 w-4 transition-colors ${
                    isOpen ? "text-gold-500" : "text-cream-45"
                  }`}
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
                <div className="px-6 pb-6 sm:px-8 sm:pb-8">
                  <p className="text-cream-60 font-body leading-relaxed text-base">
                    {item.answer}
                  </p>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
