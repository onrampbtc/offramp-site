"use client";

import { useGoldPrice } from "@/hooks/useGoldPrice";

/**
 * THE ASSAY LINE — Direction 1's signature element. A persistent hairline
 * that carries live, dated market data across every page, set in mono like
 * a ledger header. The brand as a running ledger.
 */
export function AssayLine() {
  const { goldPerOz, btcPrice, isLive } = useGoldPrice();
  const today = new Date().toLocaleDateString("en-US", {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  });

  return (
    <div className="w-full border-b border-gold-400/40 bg-paper">
      <div className="mx-auto flex max-w-7xl items-baseline justify-between gap-4 px-4 py-1.5 sm:px-6 lg:px-8">
        <span className="font-mono text-[11px] tracking-wide text-ink-3">
          {today}
        </span>
        <span className="font-mono text-[11px] tracking-wide text-ink-2">
          XAU{" "}
          <span className="text-gold-400">
            ${goldPerOz.toLocaleString("en-US", { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
          </span>
          /oz
          <span className="hidden sm:inline">
            {" "}· BTC ${btcPrice.toLocaleString("en-US", { maximumFractionDigits: 0 })}
          </span>
          {!isLive && <span className="text-ink-3"> · indicative</span>}
        </span>
      </div>
    </div>
  );
}
