"use client";

import { useState, useMemo } from "react";
import Link from "next/link";

/* ──────────────────────────── constants ──────────────────────────── */

const SPOT_PRICE = 5185.80;
const BTC_PRICE = 87420;
const GRAMS_PER_OZ = 31.1035;
const PURITY = 0.417;
const KARAT_LABEL = "10K";

const PRICE_PER_GRAM_PURE = SPOT_PRICE / GRAMS_PER_OZ;
const PRICE_PER_GRAM_10K = PRICE_PER_GRAM_PURE * PURITY;

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

export default function TenKaratCalculator() {
  const [weight, setWeight] = useState<string>("5");
  const [unit, setUnit] = useState<"g" | "oz">("g");

  const weightNum = parseFloat(weight) || 0;

  const results = useMemo(() => {
    const grams = unit === "oz" ? weightNum * GRAMS_PER_OZ : weightNum;
    const meltValue = grams * PRICE_PER_GRAM_10K;
    const offrampPays = meltValue * 0.8;
    const pawnPays = meltValue * 0.35;
    const btcEquivalent = offrampPays / BTC_PRICE;

    return { grams, meltValue, offrampPays, pawnPays, btcEquivalent };
  }, [weightNum, unit]);

  return (
    <div className="relative min-h-screen bg-bg">
      <div className="absolute inset-0 bg-hero-radial pointer-events-none" />

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 pt-28 pb-20">
        {/* ── Hero ── */}
        <div className="text-center mb-12 animate-fade-in-up">
          <p className="text-gold-500 font-mono text-sm tracking-widest uppercase mb-4">
            Live {KARAT_LABEL} Gold Price
          </p>
          <h1 className="font-display text-4xl sm:text-5xl md:text-6xl font-semibold text-cream mb-6">
            {KARAT_LABEL} Gold Price Per Gram Today
          </h1>
          <p className="text-cream-45 font-body text-lg max-w-2xl mx-auto">
            The current {KARAT_LABEL} gold price per gram is updated live.{" "}
            {KARAT_LABEL} gold contains 41.7% pure gold.
          </p>
        </div>

        {/* ── Large Price Display ── */}
        <div className="text-center mb-12 animate-fade-in-up" style={{ animationDelay: "100ms" }}>
          <div className="inline-block border-gold-gradient rounded-2xl p-8 glow-gold">
            <p className="text-cream-45 font-body text-sm uppercase tracking-wider mb-2">
              {KARAT_LABEL} Gold Per Gram
            </p>
            <p className="text-gold-shimmer font-display text-5xl sm:text-6xl md:text-7xl font-bold">
              {fmtUSD(PRICE_PER_GRAM_10K)}
            </p>
            <p className="text-cream-35 font-mono text-xs mt-3">
              Spot: {fmtUSD(SPOT_PRICE)}/oz &middot; Purity: {(PURITY * 100).toFixed(1)}%
            </p>
          </div>
        </div>

        {/* ── Calculator Card ── */}
        <div
          className="border-gold-gradient rounded-2xl p-6 sm:p-8 glow-gold mb-12 animate-fade-in-up"
          style={{ animationDelay: "200ms" }}
        >
          <h2 className="font-display text-2xl sm:text-3xl text-cream mb-6">
            Calculate Your {KARAT_LABEL} Gold Value
          </h2>

          {/* Weight Input */}
          <div className="mb-6">
            <label className="block text-cream-45 font-body text-sm mb-2">
              Weight of your {KARAT_LABEL} gold
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

          {/* Results Panel */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
            <div className="bg-bg rounded-xl p-5 border border-cream-08">
              <p className="text-cream-45 font-body text-sm mb-1">Melt Value</p>
              <p className="text-cream font-mono text-2xl">{fmtUSD(results.meltValue)}</p>
              <p className="text-cream-35 font-mono text-xs mt-1">
                {fmt(results.grams, 2)}g &times; {fmtUSD(PRICE_PER_GRAM_10K)}/g
              </p>
            </div>
            <div className="bg-bg rounded-xl p-5 border border-gold-500/30 glow-gold">
              <p className="text-gold-500 font-body text-sm mb-1">Offramp Pays (80%)</p>
              <p className="text-gold-400 font-mono text-2xl font-bold">
                {fmtUSD(results.offrampPays)}
              </p>
              <p className="text-cream-35 font-mono text-xs mt-1">
                Best online offer
              </p>
            </div>
            <div className="bg-bg rounded-xl p-5 border border-cream-08">
              <p className="text-cream-45 font-body text-sm mb-1">Pawn Shop Pays (~35%)</p>
              <p className="text-red-400 font-mono text-2xl">{fmtUSD(results.pawnPays)}</p>
              <p className="text-cream-35 font-mono text-xs mt-1">
                You lose {fmtUSD(results.offrampPays - results.pawnPays)} vs Offramp
              </p>
            </div>
            <div className="bg-bg rounded-xl p-5 border border-cream-08">
              <p className="text-cream-45 font-body text-sm mb-1">BTC Equivalent</p>
              <p className="text-cream font-mono text-2xl">
                {results.btcEquivalent.toFixed(6)} BTC
              </p>
              <p className="text-cream-35 font-mono text-xs mt-1">
                @ {fmtUSD(BTC_PRICE)}/BTC
              </p>
            </div>
          </div>

          {/* CTA */}
          <Link
            href="/sell"
            className="block w-full text-center bg-gold-gradient text-bg font-body font-semibold py-4 rounded-xl hover:opacity-90 transition-opacity"
          >
            Sell Your {KARAT_LABEL} Gold to Offramp
          </Link>
        </div>

        {/* ── Info Section ── */}
        <div
          className="border-gold-gradient rounded-2xl p-6 sm:p-8 mb-12 animate-fade-in-up"
          style={{ animationDelay: "300ms" }}
        >
          <h2 className="font-display text-2xl sm:text-3xl text-cream mb-6">
            About {KARAT_LABEL} Gold
          </h2>
          <div className="space-y-4 text-cream-60 font-body leading-relaxed">
            <p>
              10K gold is the most affordable karat of gold used in jewelry. It contains
              41.7% pure gold and 58.3% alloy metals, making it the most durable gold
              option available. In the United States, 10K is the minimum karat that can be
              legally sold as &ldquo;gold.&rdquo;
            </p>
            <p>
              Because of its high alloy content, 10K gold is exceptionally resistant to
              scratches, dents, and everyday wear. It is a popular choice for budget-friendly
              jewelry, class rings, and pieces meant for active lifestyles.
            </p>
            <p>
              When selling 10K gold, the value is based on the 41.7% pure gold content by
              weight. While 10K items contain less gold per gram than higher karats, they
              are still valuable. Offramp pays 80% or more of melt value for 10K gold,
              compared to 20-35% at pawn shops.
            </p>
          </div>

          {/* Quick facts */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-8">
            <div className="bg-bg rounded-xl p-4 border border-cream-08 text-center">
              <p className="text-gold-500 font-display text-2xl font-bold">41.7%</p>
              <p className="text-cream-45 font-body text-sm mt-1">Pure Gold Content</p>
            </div>
            <div className="bg-bg rounded-xl p-4 border border-cream-08 text-center">
              <p className="text-gold-500 font-display text-2xl font-bold">417</p>
              <p className="text-cream-45 font-body text-sm mt-1">Hallmark Stamp</p>
            </div>
            <div className="bg-bg rounded-xl p-4 border border-cream-08 text-center">
              <p className="text-gold-500 font-display text-2xl font-bold">Most</p>
              <p className="text-cream-45 font-body text-sm mt-1">Durable Karat</p>
            </div>
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
              href="/sell-jewelry"
              className="bg-bg-card border border-cream-08 rounded-xl p-4 hover:border-gold-500/30 transition-colors group"
            >
              <p className="text-cream font-body font-medium group-hover:text-gold-500 transition-colors">
                Sell Gold Jewelry
              </p>
              <p className="text-cream-35 font-body text-sm mt-1">
                Rings, chains &amp; more
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
          </div>
        </div>
      </div>
    </div>
  );
}
