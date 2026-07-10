import { NextResponse } from "next/server";
import { revalidatePath } from "next/cache";
import { insertRow, isSupabaseConfigured } from "@/lib/supabase";

// Daily spot snapshot (spec §13): gold + BTC into spot_prices, then ISR
// revalidation so every money page carries a fresh dated-fact sentence.
// Gold source: CoinGecko PAX Gold (tracks spot); silver/platinum arrive
// with METALS_API_KEY later — columns are nullable.
//
// Secured by CRON_SECRET (Vercel Cron sends it as a Bearer token).

const COINGECKO =
  "https://api.coingecko.com/api/v3/simple/price?ids=pax-gold,bitcoin&vs_currencies=usd";

const REVALIDATE_PATHS = [
  "/",
  "/gold-price",
  "/gold-calculator",
  "/calculators",
  "/calculators/10k",
  "/calculators/14k",
  "/calculators/18k",
  "/calculators/dental",
  "/calculators/scrap",
  "/calculators/pawn-comparison",
  "/prices/14k-gold-price-per-gram",
];

export async function GET(request: Request) {
  const auth = request.headers.get("authorization");
  if (process.env.CRON_SECRET && auth !== `Bearer ${process.env.CRON_SECRET}`) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  try {
    const res = await fetch(COINGECKO, { cache: "no-store" });
    if (!res.ok) {
      return NextResponse.json({ error: `price feed ${res.status}` }, { status: 502 });
    }
    const data = (await res.json()) as {
      "pax-gold"?: { usd?: number };
      bitcoin?: { usd?: number };
    };
    const gold = data["pax-gold"]?.usd;
    const btc = data.bitcoin?.usd;
    if (!gold || !btc) {
      return NextResponse.json({ error: "incomplete price data" }, { status: 502 });
    }

    let stored = false;
    if (isSupabaseConfigured()) {
      const ins = await insertRow("spot_prices", {
        gold_usd_oz: gold,
        btc_usd: btc,
      });
      stored = ins.ok;
      if (!ins.ok) console.error("spot cron: insert failed", ins.status);
    } else {
      console.log("spot cron: Supabase not configured, snapshot not stored");
    }

    for (const p of REVALIDATE_PATHS) revalidatePath(p);

    return NextResponse.json({
      ok: true,
      gold_usd_oz: gold,
      btc_usd: btc,
      stored,
      revalidated: REVALIDATE_PATHS.length,
      ts: new Date().toISOString(),
    });
  } catch (err) {
    console.error("spot cron failed:", err);
    return NextResponse.json({ error: "cron failed" }, { status: 500 });
  }
}
