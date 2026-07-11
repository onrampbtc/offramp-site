// Ask Offramp — shared valuation math + spot fetch (Phase A).
//
// Pricing law (spec §7 / prices pages): melt = spot/31.1035 × purity;
// Offramp's published payout band is 80–90% of melt. Every number these
// helpers produce is PROVISIONAL — the recorded assay sets the final price.

import { selectRows, isSupabaseConfigured } from "@/lib/supabase";

export const GRAMS_PER_OZ = 31.1035;
export const PAYOUT_LOW = 0.8;
export const PAYOUT_HIGH = 0.9;

export const KINDS = ["ring", "chain", "coin", "bracelet", "dental", "other"] as const;
export type Kind = (typeof KINDS)[number];

export const KARATS = ["10k", "14k", "18k", "22k", "24k", "not-sure"] as const;
export type Karat = (typeof KARATS)[number];

/** Fine-gold purity by karat stamp. */
export const PURITY: Record<Exclude<Karat, "not-sure">, number> = {
  "10k": 0.4167,
  "14k": 0.5833,
  "18k": 0.75,
  "22k": 0.9167,
  "24k": 0.999,
};

/**
 * Typical weight ranges in grams, used when the seller marks weight
 * "not sure". Deliberately wide — provisional, not a promise.
 */
export const TYPICAL_GRAMS: Record<Kind, { low: number; high: number; hint: string }> = {
  ring: { low: 2, high: 8, hint: "a typical ring runs 2–8 g (wedding bands 3–6 g)" },
  chain: { low: 8, high: 30, hint: "a typical chain runs 8–30 g; heavy ones reach 50 g" },
  coin: { low: 8, high: 34, hint: "common gold coins run 8–34 g (a 1 oz coin is 31.1 g)" },
  bracelet: { low: 8, high: 25, hint: "a typical bracelet runs 8–25 g" },
  dental: { low: 2, high: 6, hint: "a single crown runs 2–6 g" },
  other: { low: 3, high: 15, hint: "small pieces usually run 3–15 g" },
};

export interface AskItemInput {
  kind: Kind;
  karat: Karat;
  /** grams; null/undefined = "not sure" → typical range for the kind */
  grams?: number | null;
}

export interface AskItemRange {
  low: number;
  high: number;
  /** grams actually used for the math (typical band when not sure) */
  gramsLow: number;
  gramsHigh: number;
}

/**
 * Provisional payout range for one piece at a given spot price.
 * "not-sure" karat prices the 10k–18k band (the common jewelry range).
 */
export function estimateItem(item: AskItemInput, spotUsdOz: number): AskItemRange {
  const perGramPure = spotUsdOz / GRAMS_PER_OZ;
  const purityLow = item.karat === "not-sure" ? PURITY["10k"] : PURITY[item.karat];
  const purityHigh = item.karat === "not-sure" ? PURITY["18k"] : PURITY[item.karat];

  const hasGrams = typeof item.grams === "number" && item.grams > 0;
  const gramsLow = hasGrams ? (item.grams as number) : TYPICAL_GRAMS[item.kind].low;
  const gramsHigh = hasGrams ? (item.grams as number) : TYPICAL_GRAMS[item.kind].high;

  return {
    low: perGramPure * purityLow * gramsLow * PAYOUT_LOW,
    high: perGramPure * purityHigh * gramsHigh * PAYOUT_HIGH,
    gramsLow,
    gramsHigh,
  };
}

/**
 * Latest gold spot: Supabase spot_prices (cron-fed) first, CoinGecko
 * pax-gold as fallback. Same approach as /prices/14k-gold-price-per-gram.
 */
export async function getSpot(): Promise<{ spot: number; asOf: string; source: string }> {
  if (isSupabaseConfigured()) {
    const res = await selectRows("spot_prices", "select=ts,gold_usd_oz&order=ts.desc&limit=1");
    if (res.ok && res.data && res.data.length > 0) {
      const row = res.data[0] as { ts: string; gold_usd_oz: number };
      return { spot: Number(row.gold_usd_oz), asOf: row.ts, source: "supabase" };
    }
  }
  try {
    const r = await fetch(
      "https://api.coingecko.com/api/v3/simple/price?ids=pax-gold&vs_currencies=usd",
      { next: { revalidate: 3600 } }
    );
    const d = (await r.json()) as { "pax-gold"?: { usd?: number } };
    const spot = d["pax-gold"]?.usd ?? 0;
    return { spot, asOf: new Date().toISOString(), source: "coingecko" };
  } catch {
    return { spot: 0, asOf: new Date().toISOString(), source: "none" };
  }
}

export function isValidKind(v: unknown): v is Kind {
  return typeof v === "string" && (KINDS as readonly string[]).includes(v);
}

export function isValidKarat(v: unknown): v is Karat {
  return typeof v === "string" && (KARATS as readonly string[]).includes(v);
}
