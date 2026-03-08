import { NextResponse } from "next/server";

/* ──────────────────────────────────────────────────────────────────────
 *  GET /api/prices
 *  Returns live gold (XAU) and BTC prices.
 *
 *  Primary source: CoinGecko (PAX Gold tracks gold spot 1:1)
 *  Backup for BTC: Coinbase spot price
 *  Cached 60 s server-side to stay within free-tier rate limits.
 * ────────────────────────────────────────────────────────────────────── */

interface PriceResponse {
  goldPerOz: number;
  btcPrice: number;
  timestamp: number;
}

let cache: { data: PriceResponse; expiresAt: number } | null = null;
const CACHE_TTL = 60_000;

async function fetchPrices(): Promise<{ gold: number; btc: number }> {
  // Primary: CoinGecko — both gold (via PAX Gold) and BTC in one call
  try {
    const res = await fetch(
      "https://api.coingecko.com/api/v3/simple/price?ids=bitcoin,pax-gold&vs_currencies=usd",
      { next: { revalidate: 60 } }
    );
    if (res.ok) {
      const data = await res.json();
      const gold = data?.["pax-gold"]?.usd ?? 0;
      const btc = data?.bitcoin?.usd ?? 0;
      if (gold > 0 && btc > 0) return { gold, btc };
      // If only BTC came through, keep it and try gold backup below
      if (btc > 0) return { gold: 0, btc };
    }
  } catch {
    // fall through
  }

  return { gold: 0, btc: 0 };
}

async function fetchBTCFallback(): Promise<number> {
  try {
    const res = await fetch(
      "https://api.coinbase.com/v2/prices/BTC-USD/spot",
      { next: { revalidate: 60 } }
    );
    if (res.ok) {
      const data = await res.json();
      if (data?.data?.amount) return parseFloat(data.data.amount);
    }
  } catch {
    // fall through
  }
  return 0;
}

export async function GET() {
  const now = Date.now();

  if (cache && now < cache.expiresAt) {
    return NextResponse.json(cache.data, {
      headers: {
        "Cache-Control": "public, s-maxage=60, stale-while-revalidate=300",
      },
    });
  }

  let { gold: goldPerOz, btc: btcPrice } = await fetchPrices();

  // Fallback for BTC if CoinGecko didn't return it
  if (btcPrice === 0) {
    btcPrice = await fetchBTCFallback();
  }

  const response: PriceResponse = { goldPerOz, btcPrice, timestamp: now };

  if (goldPerOz > 0 && btcPrice > 0) {
    cache = { data: response, expiresAt: now + CACHE_TTL };
  }

  return NextResponse.json(response, {
    headers: {
      "Cache-Control": "public, s-maxage=60, stale-while-revalidate=300",
    },
  });
}
