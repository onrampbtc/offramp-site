import { NextResponse } from "next/server";

/* ──────────────────────────────────────────────────────────────────────
 *  GET /api/prices
 *  Returns live gold (XAU) and BTC prices from free public APIs.
 *  Cached for 60 seconds via Next.js revalidation.
 * ────────────────────────────────────────────────────────────────────── */

interface PriceResponse {
  goldPerOz: number;
  btcPrice: number;
  timestamp: number;
}

// Cache price data in memory for 60s to avoid hammering APIs
let cache: { data: PriceResponse; expiresAt: number } | null = null;
const CACHE_TTL = 60_000; // 60 seconds

async function fetchGoldPrice(): Promise<number> {
  // Primary: Metal Price API (free, no key needed)
  try {
    const res = await fetch(
      "https://api.metalpriceapi.com/v1/latest?api_key=demo&base=XAU&currencies=USD",
      { next: { revalidate: 60 } }
    );
    if (res.ok) {
      const data = await res.json();
      if (data?.rates?.USD) {
        return data.rates.USD;
      }
    }
  } catch {
    // fall through to backup
  }

  // Backup: GoldAPI.io free tier
  try {
    const res = await fetch(
      "https://www.goldapi.io/api/XAU/USD",
      {
        headers: { "x-access-token": "goldapi-demo" },
        next: { revalidate: 60 },
      }
    );
    if (res.ok) {
      const data = await res.json();
      if (data?.price) {
        return data.price;
      }
    }
  } catch {
    // fall through
  }

  // Final fallback: use a reasonable recent price
  return 0;
}

async function fetchBTCPrice(): Promise<number> {
  // Primary: CoinGecko free API (no key needed)
  try {
    const res = await fetch(
      "https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=usd",
      { next: { revalidate: 60 } }
    );
    if (res.ok) {
      const data = await res.json();
      if (data?.bitcoin?.usd) {
        return data.bitcoin.usd;
      }
    }
  } catch {
    // fall through
  }

  // Backup: Coinbase
  try {
    const res = await fetch(
      "https://api.coinbase.com/v2/prices/BTC-USD/spot",
      { next: { revalidate: 60 } }
    );
    if (res.ok) {
      const data = await res.json();
      if (data?.data?.amount) {
        return parseFloat(data.data.amount);
      }
    }
  } catch {
    // fall through
  }

  return 0;
}

export async function GET() {
  const now = Date.now();

  // Return cached data if still fresh
  if (cache && now < cache.expiresAt) {
    return NextResponse.json(cache.data, {
      headers: {
        "Cache-Control": "public, s-maxage=60, stale-while-revalidate=300",
      },
    });
  }

  const [goldPerOz, btcPrice] = await Promise.all([
    fetchGoldPrice(),
    fetchBTCPrice(),
  ]);

  const response: PriceResponse = {
    goldPerOz,
    btcPrice,
    timestamp: now,
  };

  // Only cache if we got real data
  if (goldPerOz > 0 && btcPrice > 0) {
    cache = { data: response, expiresAt: now + CACHE_TTL };
  }

  return NextResponse.json(response, {
    headers: {
      "Cache-Control": "public, s-maxage=60, stale-while-revalidate=300",
    },
  });
}
