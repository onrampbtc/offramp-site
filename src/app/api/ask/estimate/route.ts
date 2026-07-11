import { NextResponse } from "next/server";
import {
  estimateItem,
  getSpot,
  isValidKarat,
  isValidKind,
  type AskItemInput,
} from "@/lib/ask";
import { insertRow, isSupabaseConfigured } from "@/lib/supabase";

// POST /api/ask/estimate — provisional ranges for a set of pieces.
// No auth; creates an assistant_sessions row on first call and returns its
// id so the client can thread the session through /api/ask/lead.
// Every number returned is provisional — the recorded assay sets the price.

export const dynamic = "force-dynamic";

const ALLOWED_BRANDS = ["offramp", "goldbuyer", "goldvsbitcoin"] as const;

interface EstimateBody {
  items?: unknown;
  sessionId?: unknown;
  brand?: unknown;
  zip?: unknown;
}

export async function POST(request: Request) {
  let body: EstimateBody;
  try {
    body = (await request.json()) as EstimateBody;
  } catch {
    return NextResponse.json({ error: "Invalid JSON body" }, { status: 400 });
  }

  if (!Array.isArray(body.items) || body.items.length === 0) {
    return NextResponse.json({ error: "items[] is required" }, { status: 400 });
  }
  if (body.items.length > 50) {
    return NextResponse.json({ error: "Too many items (max 50)" }, { status: 400 });
  }

  const items: AskItemInput[] = [];
  for (const raw of body.items) {
    const it = raw as { kind?: unknown; karat?: unknown; grams?: unknown };
    if (!isValidKind(it.kind) || !isValidKarat(it.karat)) {
      return NextResponse.json(
        { error: "Each item needs a valid kind and karat" },
        { status: 400 }
      );
    }
    const grams =
      typeof it.grams === "number" && isFinite(it.grams) && it.grams > 0 && it.grams < 100000
        ? it.grams
        : null;
    items.push({ kind: it.kind, karat: it.karat, grams });
  }

  const { spot, asOf, source } = await getSpot();
  if (!spot) {
    return NextResponse.json(
      { error: "Spot price unavailable right now" },
      { status: 503 }
    );
  }

  const ranges = items.map((item) => {
    const r = estimateItem(item, spot);
    return {
      kind: item.kind,
      karat: item.karat,
      grams: item.grams,
      gramsAssumed: item.grams == null ? { low: r.gramsLow, high: r.gramsHigh } : null,
      low: Math.round(r.low * 100) / 100,
      high: Math.round(r.high * 100) / 100,
    };
  });
  const total = {
    low: Math.round(ranges.reduce((s, r) => s + r.low, 0) * 100) / 100,
    high: Math.round(ranges.reduce((s, r) => s + r.high, 0) * 100) / 100,
  };

  // Session bookkeeping (source_property from ?brand= or body.brand).
  let sessionId = typeof body.sessionId === "string" ? body.sessionId : null;
  if (isSupabaseConfigured() && !sessionId) {
    const brandParam =
      new URL(request.url).searchParams.get("brand") ??
      (typeof body.brand === "string" ? body.brand : null);
    const sourceProperty = ALLOWED_BRANDS.includes(brandParam as (typeof ALLOWED_BRANDS)[number])
      ? (brandParam as string)
      : "offramp";
    const created = await insertRow("assistant_sessions", {
      source_property: sourceProperty,
      referrer: request.headers.get("referer"),
      zip: typeof body.zip === "string" ? body.zip.slice(0, 10) : null,
    });
    if (created.ok && created.data && created.data.length > 0) {
      sessionId = String(created.data[0].id);
    }
  }

  return NextResponse.json({
    sessionId,
    spot,
    spotAsOf: asOf,
    spotSource: source,
    items: ranges,
    total,
    disclaimer:
      "Provisional — your final price comes from the recorded assay.",
  });
}
