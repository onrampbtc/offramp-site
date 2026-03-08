"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import { useGoldPrice } from "@/hooks/useGoldPrice";

/* ──────────────────────────── constants ──────────────────────────── */

const GRAMS_PER_OZ = 31.1035;

const KARATS = [
  { label: "10K", purity: 0.417 },
  { label: "14K", purity: 0.583 },
  { label: "18K", purity: 0.75 },
  { label: "22K", purity: 0.917 },
  { label: "24K", purity: 0.999 },
] as const;

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

/* ──────────────────────────── component ──────────────────────────── */

export default function ScrapGoldCalculator() {
  const { goldPerOz, btcPrice } = useGoldPrice();
  const [karatIdx, setKaratIdx] = useState(1); // default 14K
  const [weight, setWeight] = useState<string>("10");
  const [unit, setUnit] = useState<"g" | "oz">("g");

  const weightNum = parseFloat(weight) || 0;
  const selectedKarat = KARATS[karatIdx];
  const pricePerGramPure = goldPerOz / GRAMS_PER_OZ;
  const pricePerGram = pricePerGramPure * selectedKarat.purity;

  const results = useMemo(() => {
    const grams = unit === "oz" ? weightNum * GRAMS_PER_OZ : weightNum;
    const meltValue = grams * pricePerGram;
    const offrampPays = meltValue * 0.8;
    const pawnPays = meltValue * 0.35;
    const btcEquivalent = offrampPays / btcPrice;
    const savings = offrampPays - pawnPays;

    return { grams, meltValue, offrampPays, pawnPays, btcEquivalent, savings };
  }, [weightNum, unit, pricePerGram, btcPrice]);

  return (
    <div className="relative min-h-screen bg-bg">
      <div className="absolute inset-0 bg-hero-radial pointer-events-none" />

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 pt-28 pb-20">
        {/* ── Hero ── */}
        <div className="text-center mb-12 animate-fade-in-up">
          <p className="text-gold-500 font-mono text-sm tracking-widest uppercase mb-4">
            Scrap Gold Calculator
          </p>
          <h1 className="font-display text-4xl sm:text-5xl md:text-6xl font-semibold text-cream mb-6">
            Scrap Gold Value Calculator
          </h1>
          <p className="text-cream-45 font-body text-lg max-w-2xl mx-auto">
            Use the Offramp scrap gold calculator to find the value of your scrap
            gold based on weight, purity, and today&apos;s spot price.
          </p>
        </div>

        {/* ── Calculator Card ── */}
        <div
          className="border-gold-gradient rounded-2xl p-6 sm:p-8 glow-gold mb-12 animate-fade-in-up"
          style={{ animationDelay: "150ms" }}
        >
          <h2 className="font-display text-2xl sm:text-3xl text-cream mb-6">
            Enter Your Scrap Gold Details
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
            {/* Karat Selector */}
            <div>
              <label className="block text-cream-45 font-body text-sm mb-2">
                Gold Purity (Karat)
              </label>
              <div className="relative">
                <select
                  value={karatIdx}
                  onChange={(e) => setKaratIdx(Number(e.target.value))}
                  className="w-full appearance-none bg-bg border border-cream-08 rounded-xl px-4 py-3 text-cream font-mono text-lg focus:outline-none focus:border-gold-500 transition-colors cursor-pointer"
                >
                  {KARATS.map((k, i) => (
                    <option key={k.label} value={i}>
                      {k.label} ({(k.purity * 100).toFixed(1)}% pure)
                    </option>
                  ))}
                </select>
                <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none">
                  <svg className="w-4 h-4 text-cream-45" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
              </div>
            </div>

            {/* Weight Input */}
            <div>
              <label className="block text-cream-45 font-body text-sm mb-2">
                Weight
              </label>
              <div className="flex gap-3">
                <div className="flex-1 relative">
                  <input
                    type="number"
                    value={weight}
                    onChange={(e) => setWeight(e.target.value)}
                    placeholder="Enter weight"
                    min="0"
                    step="0.1"
                    className="w-full bg-bg border border-cream-08 rounded-xl px-4 py-3 text-cream font-mono text-lg focus:outline-none focus:border-gold-500 transition-colors"
                  />
                  <span className="absolute right-4 top-1/2 -translate-y-1/2 text-cream-35 font-mono text-sm">
                    {unit === "g" ? "grams" : "troy oz"}
                  </span>
                </div>
                <div className="flex rounded-xl border border-cream-08 overflow-hidden">
                  <button
                    onClick={() => setUnit("g")}
                    className={`px-4 py-3 font-mono text-sm transition-colors ${
                      unit === "g"
                        ? "bg-gold-500 text-bg"
                        : "bg-bg text-cream-45 hover:text-cream"
                    }`}
                  >
                    g
                  </button>
                  <button
                    onClick={() => setUnit("oz")}
                    className={`px-4 py-3 font-mono text-sm transition-colors ${
                      unit === "oz"
                        ? "bg-gold-500 text-bg"
                        : "bg-bg text-cream-45 hover:text-cream"
                    }`}
                  >
                    oz
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Price per gram display */}
          <div className="bg-bg rounded-xl p-4 border border-cream-08 mb-6 text-center">
            <p className="text-cream-45 font-body text-sm">
              {selectedKarat.label} Gold Price Per Gram
            </p>
            <p className="text-gold-shimmer font-display text-3xl sm:text-4xl font-bold mt-1">
              {fmtUSD(pricePerGram)}
            </p>
          </div>

          {/* Results Panel */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
            <div className="bg-bg rounded-xl p-5 border border-cream-08">
              <p className="text-cream-45 font-body text-sm mb-1">Melt Value</p>
              <p className="text-cream font-mono text-2xl">{fmtUSD(results.meltValue)}</p>
              <p className="text-cream-35 font-mono text-xs mt-1">
                {fmt(results.grams, 2)}g of {selectedKarat.label}
              </p>
            </div>
            <div className="bg-bg rounded-xl p-5 border border-gold-500/30 glow-gold">
              <p className="text-gold-500 font-body text-sm mb-1">Offramp Pays (80%)</p>
              <p className="text-gold-400 font-mono text-2xl font-bold">
                {fmtUSD(results.offrampPays)}
              </p>
              <p className="text-cream-35 font-mono text-xs mt-1">Best online offer</p>
            </div>
            <div className="bg-bg rounded-xl p-5 border border-cream-08">
              <p className="text-cream-45 font-body text-sm mb-1">Pawn Shop Pays (~35%)</p>
              <p className="text-red-400 font-mono text-2xl">{fmtUSD(results.pawnPays)}</p>
              <p className="text-cream-35 font-mono text-xs mt-1">
                You lose {fmtUSD(results.savings)}
              </p>
            </div>
            <div className="bg-bg rounded-xl p-5 border border-cream-08">
              <p className="text-cream-45 font-body text-sm mb-1">BTC Equivalent</p>
              <p className="text-cream font-mono text-2xl">
                {results.btcEquivalent.toFixed(6)} BTC
              </p>
              <p className="text-cream-35 font-mono text-xs mt-1">
                @ {fmtUSD(btcPrice)}/BTC
              </p>
            </div>
          </div>

          {/* CTA */}
          <Link
            href="/sell"
            className="block w-full text-center bg-gold-gradient text-bg font-body font-semibold py-4 rounded-xl hover:opacity-90 transition-opacity"
          >
            Sell Your Scrap Gold to Offramp
          </Link>
        </div>

        {/* ── Info Section ── */}
        <div
          className="border-gold-gradient rounded-2xl p-6 sm:p-8 mb-12 animate-fade-in-up"
          style={{ animationDelay: "300ms" }}
        >
          <h2 className="font-display text-2xl sm:text-3xl text-cream mb-6">
            What Counts as Scrap Gold?
          </h2>
          <div className="space-y-4 text-cream-60 font-body leading-relaxed">
            <p>
              Scrap gold refers to any gold item that is valued primarily for its gold
              content rather than its craftsmanship or design. This includes broken
              jewelry, single earrings, tangled chains, bent rings, outdated pieces, and
              gold items you no longer wear or want.
            </p>
            <p>
              Common scrap gold items include old wedding bands, class rings, broken
              necklace chains, mismatched earrings, gold-plated items with solid gold
              components, dental gold, and gold watch cases. Even small pieces add up
              quickly in value.
            </p>
            <p>
              The value of scrap gold is determined by three factors: weight, purity
              (karat), and the current spot price of gold. Unlike jewelry buyers who may
              pay for design or brand, scrap gold buyers focus purely on the gold content.
              Offramp pays 80% or more of the melt value, which is among the best rates
              available online.
            </p>
          </div>

          {/* Common scrap items */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-8">
            {[
              { item: "Broken Chains", weight: "2-15g" },
              { item: "Old Rings", weight: "3-8g" },
              { item: "Single Earrings", weight: "1-4g" },
              { item: "Watch Cases", weight: "5-20g" },
            ].map((s) => (
              <div
                key={s.item}
                className="bg-bg rounded-xl p-4 border border-cream-08 text-center"
              >
                <p className="text-cream font-body text-sm font-medium">{s.item}</p>
                <p className="text-cream-35 font-mono text-xs mt-1">~{s.weight}</p>
              </div>
            ))}
          </div>
        </div>

        {/* ── Related Links ── */}
        <div className="animate-fade-in-up" style={{ animationDelay: "400ms" }}>
          <h3 className="font-display text-xl text-cream mb-4">Related Tools</h3>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <Link
              href="/gold-calculator"
              className="bg-bg-card border border-cream-08 rounded-xl p-4 hover:border-gold-500/30 transition-colors group"
            >
              <p className="text-cream font-body font-medium group-hover:text-gold-500 transition-colors">
                Gold Calculator
              </p>
              <p className="text-cream-35 font-body text-sm mt-1">
                All karats &amp; weights
              </p>
            </Link>
            <Link
              href="/sell"
              className="bg-bg-card border border-cream-08 rounded-xl p-4 hover:border-gold-500/30 transition-colors group"
            >
              <p className="text-cream font-body font-medium group-hover:text-gold-500 transition-colors">
                Start Selling
              </p>
              <p className="text-cream-35 font-body text-sm mt-1">
                Free insured shipping
              </p>
            </Link>
            <Link
              href="/guide/how-to-sell-scrap-gold"
              className="bg-bg-card border border-cream-08 rounded-xl p-4 hover:border-gold-500/30 transition-colors group"
            >
              <p className="text-cream font-body font-medium group-hover:text-gold-500 transition-colors">
                Scrap Gold Guide
              </p>
              <p className="text-cream-35 font-body text-sm mt-1">
                Tips &amp; best practices
              </p>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
