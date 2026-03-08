"use client";

import { useState, useMemo } from "react";
import Link from "next/link";

/* ──────────────────────────── constants ──────────────────────────── */

const SPOT_PRICE = 5185.80;
const BTC_PRICE = 87420;
const GRAMS_PER_OZ = 31.1035;

const DENTAL_KARATS = [
  { label: "16K", purity: 0.667 },
  { label: "18K", purity: 0.75 },
  { label: "20K", purity: 0.833 },
] as const;

const TYPICAL_WEIGHTS = [
  { item: "Single Crown", range: "2 - 5g", avg: 3.5 },
  { item: "Bridge (2-unit)", range: "3 - 8g", avg: 5.5 },
  { item: "Bridge (3-unit)", range: "5 - 10g", avg: 7.5 },
  { item: "Inlay / Onlay", range: "1 - 3g", avg: 2.0 },
] as const;

const PRICE_PER_GRAM_PURE = SPOT_PRICE / GRAMS_PER_OZ;

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

export default function DentalGoldCalculator() {
  const [karatIdx, setKaratIdx] = useState(0); // default 16K
  const [weight, setWeight] = useState<string>("3.5");
  const [unit, setUnit] = useState<"g" | "oz">("g");

  const weightNum = parseFloat(weight) || 0;
  const selectedKarat = DENTAL_KARATS[karatIdx];
  const pricePerGram = PRICE_PER_GRAM_PURE * selectedKarat.purity;

  const results = useMemo(() => {
    const grams = unit === "oz" ? weightNum * GRAMS_PER_OZ : weightNum;
    const meltValue = grams * pricePerGram;
    const offrampPays = meltValue * 0.8;
    const pawnPays = meltValue * 0.35;
    const btcEquivalent = offrampPays / BTC_PRICE;

    return { grams, meltValue, offrampPays, pawnPays, btcEquivalent };
  }, [weightNum, unit, pricePerGram]);

  return (
    <div className="relative min-h-screen bg-bg">
      <div className="absolute inset-0 bg-hero-radial pointer-events-none" />

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 pt-28 pb-20">
        {/* ── Hero ── */}
        <div className="text-center mb-12 animate-fade-in-up">
          <p className="text-gold-500 font-mono text-sm tracking-widest uppercase mb-4">
            Dental Gold Calculator
          </p>
          <h1 className="font-display text-4xl sm:text-5xl md:text-6xl font-semibold text-cream mb-6">
            Dental Gold Value Calculator
          </h1>
          <p className="text-cream-45 font-body text-lg max-w-2xl mx-auto">
            Dental gold is typically 16K-20K purity and ranges from 1-10 grams
            per piece. Calculate the value of your dental gold instantly.
          </p>
        </div>

        {/* ── Calculator Card ── */}
        <div
          className="border-gold-gradient rounded-2xl p-6 sm:p-8 glow-gold mb-12 animate-fade-in-up"
          style={{ animationDelay: "150ms" }}
        >
          <h2 className="font-display text-2xl sm:text-3xl text-cream mb-6">
            Enter Your Dental Gold Details
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
            {/* Purity Selector */}
            <div>
              <label className="block text-cream-45 font-body text-sm mb-2">
                Estimated Purity
              </label>
              <div className="flex rounded-xl border border-cream-08 overflow-hidden">
                {DENTAL_KARATS.map((k, i) => (
                  <button
                    key={k.label}
                    onClick={() => setKaratIdx(i)}
                    className={`flex-1 px-4 py-3 font-mono text-sm transition-colors ${
                      karatIdx === i
                        ? "bg-gold-500 text-bg"
                        : "bg-bg text-cream-45 hover:text-cream"
                    }`}
                  >
                    {k.label}
                  </button>
                ))}
              </div>
              <p className="text-cream-35 font-mono text-xs mt-2">
                {(selectedKarat.purity * 100).toFixed(1)}% pure gold
              </p>
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

          {/* Typical Weights Guide */}
          <div className="bg-bg rounded-xl p-4 border border-cream-08 mb-6">
            <p className="text-cream-45 font-body text-sm mb-3">
              Typical Dental Gold Weights
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              {TYPICAL_WEIGHTS.map((tw) => (
                <button
                  key={tw.item}
                  onClick={() => setWeight(String(tw.avg))}
                  className="text-left bg-bg-card rounded-lg p-3 border border-cream-08 hover:border-gold-500/30 transition-colors cursor-pointer"
                >
                  <p className="text-cream font-body text-sm font-medium">{tw.item}</p>
                  <p className="text-cream-35 font-mono text-xs mt-1">{tw.range}</p>
                </button>
              ))}
            </div>
          </div>

          {/* Results Panel */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
            <div className="bg-bg rounded-xl p-5 border border-cream-08">
              <p className="text-cream-45 font-body text-sm mb-1">Melt Value</p>
              <p className="text-cream font-mono text-2xl">{fmtUSD(results.meltValue)}</p>
              <p className="text-cream-35 font-mono text-xs mt-1">
                {fmt(results.grams, 2)}g of {selectedKarat.label} dental gold
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
                You lose {fmtUSD(results.offrampPays - results.pawnPays)}
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
            Sell Your Dental Gold to Offramp
          </Link>
        </div>

        {/* ── Info Section ── */}
        <div
          className="border-gold-gradient rounded-2xl p-6 sm:p-8 mb-12 animate-fade-in-up"
          style={{ animationDelay: "300ms" }}
        >
          <h2 className="font-display text-2xl sm:text-3xl text-cream mb-6">
            About Dental Gold
          </h2>
          <div className="space-y-4 text-cream-60 font-body leading-relaxed">
            <p>
              Dental gold is a specialized gold alloy used in crowns, bridges, inlays,
              and onlays. It is typically between 16K and 20K purity, making it more
              valuable per gram than most standard jewelry gold. Dental gold alloys are
              designed for biocompatibility and durability, often containing small amounts
              of palladium, platinum, or silver in addition to gold.
            </p>
            <p>
              A single dental crown typically weighs between 2 and 5 grams, while bridges
              can weigh 3 to 10 grams or more depending on the number of units. Even a
              small amount of dental gold can be worth a significant amount due to its
              high purity.
            </p>
            <p>
              Many people have dental gold from old dental work sitting in a drawer. Whether
              your dentist gave you a removed crown or you inherited dental gold, Offramp
              makes it easy to convert this gold into cash or Bitcoin. We accept dental gold
              in any condition, including pieces with porcelain or cement still attached.
            </p>
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
              href="/sell-dental-gold"
              className="bg-bg-card border border-cream-08 rounded-xl p-4 hover:border-gold-500/30 transition-colors group"
            >
              <p className="text-cream font-body font-medium group-hover:text-gold-500 transition-colors">
                Sell Dental Gold
              </p>
              <p className="text-cream-35 font-body text-sm mt-1">
                How it works
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
