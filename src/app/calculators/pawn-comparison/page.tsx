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

const BUYERS = [
  {
    name: "Pawn Shop",
    low: 0.2,
    high: 0.55,
    color: "text-red-400",
    borderColor: "border-red-400/20",
    bgColor: "bg-red-400/5",
    description: "Walk-in, quick cash",
    highlight: false,
  },
  {
    name: "Local Jeweler",
    low: 0.4,
    high: 0.6,
    color: "text-cream-60",
    borderColor: "border-cream-08",
    bgColor: "bg-bg",
    description: "Trade-in or purchase",
    highlight: false,
  },
  {
    name: "Online Buyer",
    low: 0.65,
    high: 0.75,
    color: "text-cream-60",
    borderColor: "border-cream-08",
    bgColor: "bg-bg",
    description: "Mail-in services",
    highlight: false,
  },
  {
    name: "Offramp",
    low: 0.8,
    high: 0.8,
    color: "text-gold-400",
    borderColor: "border-gold-500/30",
    bgColor: "bg-gold-500/5",
    description: "Cash or Bitcoin",
    highlight: true,
  },
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

export default function PawnComparisonCalculator() {
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

    const buyerResults = BUYERS.map((b) => {
      const avgRate = (b.low + b.high) / 2;
      const lowPay = meltValue * b.low;
      const highPay = meltValue * b.high;
      const avgPay = meltValue * avgRate;
      return { ...b, lowPay, highPay, avgPay };
    });

    const offrampPay = meltValue * 0.8;
    const pawnAvg = meltValue * ((0.2 + 0.55) / 2);
    const savings = offrampPay - pawnAvg;
    const btcEquivalent = offrampPay / btcPrice;

    return { grams, meltValue, buyerResults, offrampPay, savings, btcEquivalent };
  }, [weightNum, unit, pricePerGram, btcPrice]);

  // Width of bar in the comparison (percentage relative to Offramp)
  const maxPay = results.buyerResults[results.buyerResults.length - 1]?.highPay || 1;

  return (
    <div className="relative min-h-screen bg-bg">
      <div className="absolute inset-0 bg-hero-radial pointer-events-none" />

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 pt-28 pb-20">
        {/* ── Hero ── */}
        <div className="text-center mb-12 animate-fade-in-up">
          <p className="text-gold-500 font-mono text-sm tracking-widest uppercase mb-4">
            Gold Buyer Comparison
          </p>
          <h1 className="font-display text-4xl sm:text-5xl md:text-6xl font-semibold text-cream mb-6">
            Pawn Shop vs Offramp: Gold Value Comparison
          </h1>
          <p className="text-cream-45 font-body text-lg max-w-2xl mx-auto">
            Pawn shops typically pay 20-55% of gold&apos;s melt value due to overhead
            costs and profit margins. See how much more Offramp pays.
          </p>
        </div>

        {/* ── Calculator Card ── */}
        <div
          className="border-gold-gradient rounded-2xl p-6 sm:p-8 glow-gold mb-12 animate-fade-in-up"
          style={{ animationDelay: "150ms" }}
        >
          <h2 className="font-display text-2xl sm:text-3xl text-cream mb-6">
            Enter Your Gold Details
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
            {/* Karat Selector */}
            <div>
              <label className="block text-cream-45 font-body text-sm mb-2">
                Gold Purity (Karat)
              </label>
              <div className="flex rounded-xl border border-cream-08 overflow-hidden">
                {KARATS.map((k, i) => (
                  <button
                    key={k.label}
                    onClick={() => setKaratIdx(i)}
                    className={`flex-1 px-2 sm:px-3 py-3 font-mono text-sm transition-colors ${
                      karatIdx === i
                        ? "bg-gold-500 text-bg"
                        : "bg-bg text-cream-45 hover:text-cream"
                    }`}
                  >
                    {k.label}
                  </button>
                ))}
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

          {/* Melt Value Header */}
          <div className="bg-bg rounded-xl p-4 border border-cream-08 mb-6 text-center">
            <p className="text-cream-45 font-body text-sm">
              {selectedKarat.label} Gold Melt Value ({fmt(results.grams, 2)}g)
            </p>
            <p className="text-cream font-display text-3xl font-bold mt-1">
              {fmtUSD(results.meltValue)}
            </p>
          </div>

          {/* ── Side-by-Side Comparison ── */}
          <div className="space-y-4 mb-8">
            <p className="text-cream-45 font-body text-sm uppercase tracking-wider">
              What Each Buyer Pays
            </p>
            {results.buyerResults.map((b) => {
              const barWidth = maxPay > 0 ? (b.avgPay / maxPay) * 100 : 0;
              return (
                <div
                  key={b.name}
                  className={`rounded-xl p-5 border ${b.borderColor} ${b.bgColor} ${
                    b.highlight ? "glow-gold" : ""
                  }`}
                >
                  <div className="flex items-center justify-between mb-3">
                    <div>
                      <p className={`font-body font-semibold ${b.color}`}>
                        {b.name}
                        {b.highlight && (
                          <span className="ml-2 text-xs bg-gold-500/20 text-gold-400 px-2 py-0.5 rounded-full font-mono">
                            BEST
                          </span>
                        )}
                      </p>
                      <p className="text-cream-35 font-body text-xs mt-0.5">
                        {b.description}
                      </p>
                    </div>
                    <div className="text-right">
                      <p className={`font-mono text-xl font-bold ${b.color}`}>
                        {b.low === b.high
                          ? fmtUSD(b.highPay)
                          : `${fmtUSD(b.lowPay)} - ${fmtUSD(b.highPay)}`}
                      </p>
                      <p className="text-cream-35 font-mono text-xs mt-0.5">
                        {(b.low * 100).toFixed(0)}
                        {b.low !== b.high && `-${(b.high * 100).toFixed(0)}`}% of melt
                      </p>
                    </div>
                  </div>
                  {/* Bar */}
                  <div className="h-2 bg-cream-08 rounded-full overflow-hidden">
                    <div
                      className={`h-full rounded-full transition-all duration-500 ${
                        b.highlight
                          ? "bg-gold-gradient"
                          : b.name === "Pawn Shop"
                          ? "bg-red-400/60"
                          : "bg-cream-25"
                      }`}
                      style={{ width: `${Math.min(barWidth, 100)}%` }}
                    />
                  </div>
                </div>
              );
            })}
          </div>

          {/* Savings Summary */}
          <div className="bg-bg rounded-xl p-6 border border-gold-500/30 glow-gold mb-6">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-center">
              <div>
                <p className="text-cream-45 font-body text-sm mb-1">
                  You Save vs Pawn Shop
                </p>
                <p className="text-gold-400 font-mono text-2xl font-bold">
                  {fmtUSD(results.savings)}
                </p>
              </div>
              <div>
                <p className="text-cream-45 font-body text-sm mb-1">Offramp Payout</p>
                <p className="text-gold-400 font-mono text-2xl font-bold">
                  {fmtUSD(results.offrampPay)}
                </p>
              </div>
              <div>
                <p className="text-cream-45 font-body text-sm mb-1">Or in Bitcoin</p>
                <p className="text-cream font-mono text-2xl">
                  {results.btcEquivalent.toFixed(6)}
                </p>
                <p className="text-cream-35 font-mono text-xs">BTC</p>
              </div>
            </div>
          </div>

          {/* CTA */}
          <Link
            href="/sell"
            className="block w-full text-center bg-gold-gradient text-bg font-body font-semibold py-4 rounded-xl hover:opacity-90 transition-opacity"
          >
            Get 80%+ With Offramp
          </Link>
        </div>

        {/* ── Why Pawn Shops Pay Less ── */}
        <div
          className="border-gold-gradient rounded-2xl p-6 sm:p-8 mb-12 animate-fade-in-up"
          style={{ animationDelay: "300ms" }}
        >
          <h2 className="font-display text-2xl sm:text-3xl text-cream mb-6">
            Why Pawn Shops Pay Less for Gold
          </h2>
          <div className="space-y-4 text-cream-60 font-body leading-relaxed">
            <p>
              Pawn shops operate with significant overhead including storefront rent,
              staffing, insurance, and security. They need to purchase gold at a steep
              discount to cover these costs and generate profit when they resell to
              refiners. This typically means you receive only 20-55% of your gold&apos;s
              actual melt value.
            </p>
            <p>
              Additionally, many pawn shops lack precise assay equipment. Without an XRF
              spectrometer, they often estimate purity conservatively, which further
              reduces their offer. Some may also test with acid kits, which are less
              accurate and can only give approximate karat readings.
            </p>
            <p>
              Offramp operates online with lower overhead and uses professional XRF
              spectrometer analysis under video for every piece. This allows us to pay
              80% or more of the true melt value, significantly more than any pawn shop
              or most local jewelers.
            </p>
          </div>

          {/* Comparison table */}
          <div className="mt-8 overflow-x-auto">
            <table className="w-full text-left">
              <thead>
                <tr className="border-b border-cream-08">
                  <th className="py-3 pr-4 text-cream-45 font-body text-sm font-medium">
                    Feature
                  </th>
                  <th className="py-3 px-4 text-red-400 font-body text-sm font-medium">
                    Pawn Shop
                  </th>
                  <th className="py-3 pl-4 text-gold-500 font-body text-sm font-medium">
                    Offramp
                  </th>
                </tr>
              </thead>
              <tbody className="text-cream-60 font-body text-sm">
                {[
                  ["Payout Rate", "20-55%", "80%+"],
                  ["Testing Method", "Acid test / visual", "XRF Spectrometer"],
                  ["Transparency", "Verbal offer", "Video recorded assay"],
                  ["Payment Options", "Cash only", "Cash or Bitcoin"],
                  ["Shipping", "N/A (walk-in)", "Free insured shipping"],
                  ["Turnaround", "Immediate", "24-48 hours"],
                ].map(([feature, pawn, offramp]) => (
                  <tr key={feature} className="border-b border-cream-08/50">
                    <td className="py-3 pr-4 text-cream">{feature}</td>
                    <td className="py-3 px-4">{pawn}</td>
                    <td className="py-3 pl-4 text-gold-400">{offramp}</td>
                  </tr>
                ))}
              </tbody>
            </table>
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
              href="/guide/pawn-shop-gold-prices"
              className="bg-bg-card border border-cream-08 rounded-xl p-4 hover:border-gold-500/30 transition-colors group"
            >
              <p className="text-cream font-body font-medium group-hover:text-gold-500 transition-colors">
                Pawn Shop Guide
              </p>
              <p className="text-cream-35 font-body text-sm mt-1">
                Understanding pricing
              </p>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
