"use client";

import { useGoldPrice } from "@/hooks/useGoldPrice";

const usd = (n: number, d = 2) =>
  n.toLocaleString("en-US", { minimumFractionDigits: d, maximumFractionDigits: d });

/**
 * Dark instrument panel: live gold spot, BTC, and the gold/BTC ratio.
 * The one sanctioned dark inset on light pages (spec §4/§6.3).
 */
export function LiveStrip() {
  const { goldPerOz, btcPrice, isLive, lastUpdated } = useGoldPrice();
  const ratio = goldPerOz / btcPrice;

  return (
    <section aria-label="Live prices" className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div className="rounded-xl bg-panel px-5 py-4 sm:px-8">
        <div className="flex flex-col items-start justify-between gap-3 font-mono text-sm sm:flex-row sm:items-center">
          <div className="flex items-center gap-2">
            <span
              className={`inline-block h-1.5 w-1.5 rounded-full ${isLive ? "bg-teal" : "bg-panel-mut"}`}
              aria-hidden="true"
            />
            <span className="text-panel-mut">
              {isLive ? `Live · ${lastUpdated}` : "Indicative"}
            </span>
          </div>
          <dl className="flex flex-wrap items-baseline gap-x-8 gap-y-2">
            <div className="flex items-baseline gap-2">
              <dt className="text-panel-mut">XAU</dt>
              <dd className="text-panel-ink">
                <span className="text-gold-brt">${usd(goldPerOz)}</span>
                <span className="text-panel-mut">/oz</span>
              </dd>
            </div>
            <div className="flex items-baseline gap-2">
              <dt className="text-panel-mut">BTC</dt>
              <dd className="text-panel-ink">${usd(btcPrice, 0)}</dd>
            </div>
            <div className="flex items-baseline gap-2">
              <dt className="text-panel-mut">1oz</dt>
              <dd className="text-panel-ink">≈ {ratio.toFixed(4)} BTC</dd>
            </div>
          </dl>
        </div>
      </div>
    </section>
  );
}
