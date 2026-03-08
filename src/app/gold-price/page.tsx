"use client";

import { useState, useEffect, useMemo } from "react";
import Link from "next/link";

/* ------------------------------------------------------------------ */
/*  Constants                                                          */
/* ------------------------------------------------------------------ */

const GRAMS_PER_OZ = 31.1035;
const DWT_PER_OZ = 20;
const GRAMS_PER_KG = 1000;

/* ------------------------------------------------------------------ */
/*  Helpers                                                            */
/* ------------------------------------------------------------------ */

function fmtUSD(n: number, decimals = 2) {
  return `$${n.toLocaleString("en-US", {
    minimumFractionDigits: decimals,
    maximumFractionDigits: decimals,
  })}`;
}

function fmtBTC(n: number) {
  if (n >= 1) return n.toFixed(4);
  if (n >= 0.01) return n.toFixed(6);
  return n.toFixed(8);
}

/* ------------------------------------------------------------------ */
/*  Page Component                                                     */
/* ------------------------------------------------------------------ */

export default function GoldPricePage() {
  /* placeholder prices */
  const spotPrice = 5185.8;
  const btcPrice = 87420;
  const change24h = 42.6;
  const changePct = 0.83;

  const [lastUpdated, setLastUpdated] = useState("");

  useEffect(() => {
    const update = () => {
      setLastUpdated(
        new Date().toLocaleTimeString("en-US", {
          hour: "2-digit",
          minute: "2-digit",
          second: "2-digit",
        })
      );
    };
    update();
    const id = setInterval(update, 60_000);
    return () => clearInterval(id);
  }, []);

  /* derived prices */
  const prices = useMemo(() => {
    const perGram = spotPrice / GRAMS_PER_OZ;
    const perDwt = spotPrice / DWT_PER_OZ;
    const perKg = perGram * GRAMS_PER_KG;

    const ozBTC = spotPrice / btcPrice;
    const gramBTC = perGram / btcPrice;
    const dwtBTC = perDwt / btcPrice;
    const kgBTC = perKg / btcPrice;

    return {
      perOz: spotPrice,
      perGram,
      perDwt,
      perKg,
      ozBTC,
      gramBTC,
      dwtBTC,
      kgBTC,
      goldToBtcRatio: spotPrice / btcPrice,
    };
  }, [spotPrice, btcPrice]);

  return (
    <div className="relative min-h-screen">
      {/* Radial glow */}
      <div className="pointer-events-none absolute inset-0 bg-hero-radial" />

      {/* ============================================================ */}
      {/*  HERO                                                        */}
      {/* ============================================================ */}
      <section className="relative px-6 pt-32 pb-16 text-center">
        <p className="text-xs font-body uppercase tracking-[0.3em] text-gold-500 mb-4">
          Live Spot Price
        </p>
        <h1 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold tracking-tight leading-[1.1]">
          Gold Price Today:
          <br />
          <span className="text-gold-shimmer">USD and Bitcoin</span>
        </h1>
        <p className="mt-6 max-w-2xl mx-auto text-lg text-cream-60 font-body leading-relaxed">
          The live gold spot price today is displayed on this page in both
          US&nbsp;dollars and Bitcoin, updated every 60&nbsp;seconds.
        </p>
      </section>

      {/* ============================================================ */}
      {/*  LARGE PRICE DISPLAY                                         */}
      {/* ============================================================ */}
      <section className="relative mx-auto max-w-4xl px-6">
        <div className="border-gold-gradient rounded-2xl p-8 sm:p-12 glow-gold">
          {/* Live indicator */}
          <div className="flex items-center justify-between mb-8">
            <div className="flex items-center gap-2 text-sm text-cream-45 font-body">
              <span className="relative flex h-2.5 w-2.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75" />
                <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-green-500" />
              </span>
              <span>
                Live &middot; Updated {lastUpdated || "--:--:--"}
              </span>
            </div>
            <span className="text-xs font-mono text-cream-35 uppercase tracking-wider">
              XAU/USD
            </span>
          </div>

          {/* Main price */}
          <div className="text-center mb-8">
            <p className="text-xs font-body uppercase tracking-[0.2em] text-cream-45 mb-3">
              Gold Spot Price per Troy Ounce
            </p>
            <p className="font-mono text-5xl sm:text-6xl md:text-7xl font-medium text-cream tracking-tight">
              {fmtUSD(spotPrice)}
            </p>

            {/* 24h change */}
            <div className="mt-4 inline-flex items-center gap-2 rounded-full bg-green-500/10 border border-green-500/20 px-4 py-1.5">
              <svg
                className="h-4 w-4 text-green-400"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M5.293 9.707a1 1 0 010-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 01-1.414 1.414L11 7.414V15a1 1 0 11-2 0V7.414L6.707 9.707a1 1 0 01-1.414 0z"
                  clipRule="evenodd"
                />
              </svg>
              <span className="font-mono text-sm text-green-400">
                +{fmtUSD(change24h)} (+{changePct}%)
              </span>
              <span className="font-body text-xs text-green-400/60">24h</span>
            </div>
          </div>

          {/* Quick stats row */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {[
              { label: "Per Gram", value: fmtUSD(prices.perGram) },
              { label: "Per DWT", value: fmtUSD(prices.perDwt) },
              {
                label: "In BTC",
                value: `${fmtBTC(prices.ozBTC)} BTC`,
                gold: true,
              },
              {
                label: "BTC Price",
                value: fmtUSD(btcPrice, 0),
              },
            ].map((stat) => (
              <div
                key={stat.label}
                className="rounded-xl bg-bg/50 border border-cream-08 p-4 text-center"
              >
                <p className="text-[10px] font-body uppercase tracking-widest text-cream-35 mb-1">
                  {stat.label}
                </p>
                <p
                  className={`font-mono text-base sm:text-lg font-medium ${
                    stat.gold ? "text-gold-400" : "text-cream"
                  }`}
                >
                  {stat.value}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/*  PRICE TABLE                                                 */}
      {/* ============================================================ */}
      <section className="mx-auto mt-20 max-w-4xl px-6">
        <div className="text-center mb-12">
          <p className="text-xs font-body uppercase tracking-[0.25em] text-gold-500 mb-4">
            Price Table
          </p>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight">
            Gold Price by Unit
          </h2>
        </div>

        <div className="overflow-x-auto rounded-xl border border-cream-15">
          <table className="w-full min-w-[500px] text-left">
            <thead>
              <tr className="border-b border-cream-08 bg-bg-card">
                <th className="px-6 py-4 font-body text-xs font-semibold uppercase tracking-widest text-cream-45">
                  Unit
                </th>
                <th className="px-6 py-4 text-right font-body text-xs font-semibold uppercase tracking-widest text-cream-45">
                  USD
                </th>
                <th className="px-6 py-4 text-right font-body text-xs font-semibold uppercase tracking-widest text-gold-500">
                  BTC
                </th>
              </tr>
            </thead>
            <tbody>
              {[
                {
                  unit: "Per Troy Ounce",
                  usd: prices.perOz,
                  btc: prices.ozBTC,
                },
                {
                  unit: "Per Gram",
                  usd: prices.perGram,
                  btc: prices.gramBTC,
                },
                {
                  unit: "Per Pennyweight (DWT)",
                  usd: prices.perDwt,
                  btc: prices.dwtBTC,
                },
                {
                  unit: "Per Kilogram",
                  usd: prices.perKg,
                  btc: prices.kgBTC,
                },
              ].map((row, i) => (
                <tr
                  key={row.unit}
                  className={`border-b border-cream-08 transition-colors hover:bg-bg-card-hover ${
                    i === 0 ? "bg-gold-500/[0.04]" : "bg-bg-card"
                  }`}
                >
                  <td className="px-6 py-5">
                    <span
                      className={`font-body text-sm font-medium ${
                        i === 0 ? "text-gold-400" : "text-cream"
                      }`}
                    >
                      {row.unit}
                    </span>
                  </td>
                  <td className="px-6 py-5 text-right">
                    <span className="font-mono text-base text-cream">
                      {fmtUSD(row.usd)}
                    </span>
                  </td>
                  <td className="px-6 py-5 text-right">
                    <span className="font-mono text-base text-gold-400">
                      {fmtBTC(row.btc)}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* ============================================================ */}
      {/*  BTC CONVERSION SECTION                                      */}
      {/* ============================================================ */}
      <section className="mx-auto mt-20 max-w-4xl px-6">
        <div className="text-center mb-12">
          <p className="text-xs font-body uppercase tracking-[0.25em] text-gold-500 mb-4">
            BTC Conversion
          </p>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight">
            Gold Priced in Bitcoin
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {/* Bitcoin Price */}
          <div className="bg-bg-card rounded-2xl p-6 sm:p-8 border border-cream-08">
            <p className="text-xs font-body uppercase tracking-widest text-cream-35 mb-3">
              Bitcoin Price
            </p>
            <p className="font-mono text-2xl sm:text-3xl font-medium text-cream">
              {fmtUSD(btcPrice, 0)}
            </p>
            <p className="mt-1 text-xs text-cream-35 font-mono">BTC/USD</p>
          </div>

          {/* Gold/BTC Ratio */}
          <div className="bg-bg-card rounded-2xl p-6 sm:p-8 border border-gold-500/20 glow-gold">
            <p className="text-xs font-body uppercase tracking-widest text-gold-500 mb-3">
              1 oz Gold in BTC
            </p>
            <p className="font-mono text-2xl sm:text-3xl font-medium text-gold-400">
              {fmtBTC(prices.goldToBtcRatio)}
            </p>
            <p className="mt-1 text-xs text-cream-35 font-mono">
              {Math.round(prices.goldToBtcRatio * 1e8).toLocaleString("en-US")}{" "}
              sats
            </p>
          </div>

          {/* BTC buys X oz */}
          <div className="bg-bg-card rounded-2xl p-6 sm:p-8 border border-cream-08">
            <p className="text-xs font-body uppercase tracking-widest text-cream-35 mb-3">
              1 BTC Buys
            </p>
            <p className="font-mono text-2xl sm:text-3xl font-medium text-cream">
              {(btcPrice / spotPrice).toFixed(2)} oz
            </p>
            <p className="mt-1 text-xs text-cream-35 font-mono">
              of pure gold
            </p>
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/*  HISTORICAL CONTEXT                                          */}
      {/* ============================================================ */}
      <section className="mx-auto mt-20 max-w-4xl px-6">
        <div className="text-center mb-12">
          <p className="text-xs font-body uppercase tracking-[0.25em] text-gold-500 mb-4">
            Historical Context
          </p>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight">
            Gold&apos;s Record Run
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {/* All-Time High */}
          <div className="bg-bg-card rounded-2xl p-8 border border-cream-08">
            <p className="text-xs font-body uppercase tracking-widest text-cream-35 mb-4">
              All-Time High
            </p>
            <p className="font-mono text-3xl sm:text-4xl font-medium text-cream mb-2">
              $3,500.00
            </p>
            <p className="text-sm text-cream-45 font-body">
              Reached in April 2025, gold hit a historic all-time high driven by
              central bank buying, geopolitical uncertainty, and inflation hedge
              demand.
            </p>
          </div>

          {/* Year Performance */}
          <div className="bg-bg-card rounded-2xl p-8 border border-cream-08">
            <p className="text-xs font-body uppercase tracking-widest text-cream-35 mb-4">
              2024 Performance
            </p>
            <p className="font-mono text-3xl sm:text-4xl font-medium text-green-400 mb-2">
              +27.2%
            </p>
            <p className="text-sm text-cream-45 font-body">
              Gold delivered one of its strongest annual performances in 2024,
              outperforming most traditional asset classes. Central bank
              accumulation reached record levels.
            </p>
          </div>

          {/* 5-Year */}
          <div className="bg-bg-card rounded-2xl p-8 border border-cream-08">
            <p className="text-xs font-body uppercase tracking-widest text-cream-35 mb-4">
              5-Year Return
            </p>
            <p className="font-mono text-3xl sm:text-4xl font-medium text-green-400 mb-2">
              +85%
            </p>
            <p className="text-sm text-cream-45 font-body">
              From approximately $1,800 per ounce in early 2020, gold has nearly
              doubled, reflecting its role as a reliable long-term store of
              value.
            </p>
          </div>

          {/* Key Drivers */}
          <div className="bg-bg-card rounded-2xl p-8 border border-cream-08">
            <p className="text-xs font-body uppercase tracking-widest text-cream-35 mb-4">
              Key Price Drivers
            </p>
            <ul className="space-y-3">
              {[
                "Central bank accumulation at record levels",
                "De-dollarization trends globally",
                "Inflation hedging demand",
                "Geopolitical uncertainty premium",
              ].map((driver) => (
                <li
                  key={driver}
                  className="flex items-start gap-2 text-sm text-cream-45 font-body"
                >
                  <span className="mt-1.5 inline-flex h-1.5 w-1.5 shrink-0 rounded-full bg-gold-500/50" />
                  {driver}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/*  CTA                                                         */}
      {/* ============================================================ */}
      <section className="mx-auto mt-28 max-w-3xl px-6 pb-32 text-center relative">
        <div
          className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px]"
          aria-hidden="true"
          style={{
            background:
              "radial-gradient(ellipse at center, rgba(201,168,76,0.06) 0%, transparent 70%)",
          }}
        />

        <h2 className="relative font-display text-4xl sm:text-5xl md:text-6xl font-semibold tracking-tight">
          Ready to sell at today&apos;s price?
        </h2>
        <p className="relative mt-4 text-xl sm:text-2xl text-cream-60 font-body">
          Lock in the current spot price with Offramp.
        </p>

        <div className="relative mt-10">
          <Link
            href="/sell"
            className="group inline-flex items-center justify-center px-10 py-5 text-lg font-body font-semibold text-bg rounded-full bg-gradient-to-r from-gold-500 via-gold-400 to-gold-600 shadow-lg shadow-gold-500/20 transition-all duration-300 hover:shadow-gold-500/40 hover:scale-[1.03]"
          >
            Sell Your Gold Now
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
            { href: "/gold-calculator", label: "Gold Calculator" },
            { href: "/sell", label: "Sell Gold" },
            {
              href: "/guide/when-to-sell-gold",
              label: "When to Sell Gold",
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
      </section>
    </div>
  );
}
