import { NextResponse } from "next/server";
import {
  estimateItem,
  getSpot,
  isValidKarat,
  isValidKind,
  type Karat,
  type Kind,
} from "@/lib/ask";
import {
  getAuthUser,
  insertRow,
  isSupabaseConfigured,
  selectRows,
  signObjectUrl,
} from "@/lib/supabase";

// GET /api/ledger/items — the signed-in user's pieces, LIVE re-valued at
// the current spot (same math as /api/ask/estimate: melt × 80–90% payout
// band). Photo display uses short-expiry signed URLs from the private
// ask-photos bucket — raw paths never leave the server. Every read logs a
// ledger_viewed event. All numbers remain provisional: the recorded assay
// is final.

export const dynamic = "force-dynamic";

const SIGNED_URL_TTL_S = 600;

export async function GET(request: Request) {
  if (!isSupabaseConfigured()) {
    return NextResponse.json({ error: "Not configured" }, { status: 503 });
  }

  const user = await getAuthUser(request);
  if (!user) {
    return NextResponse.json({ error: "Sign in required" }, { status: 401 });
  }

  const res = await selectRows(
    "lead_items",
    `user_id=eq.${user.id}&select=id,lead_id,kind,karat,est_grams,photo_url,provisional_low,provisional_high,spot_at_estimate,created_at&order=created_at.desc&limit=200`
  );
  if (!res.ok || !res.data) {
    return NextResponse.json({ error: "Could not load your ledger" }, { status: 500 });
  }

  const { spot, asOf } = await getSpot();

  const items = await Promise.all(
    res.data.map(async (row) => {
      const kind: Kind = isValidKind(row.kind) ? row.kind : "other";
      const karat: Karat = isValidKarat(row.karat) ? row.karat : "not-sure";
      const grams =
        typeof row.est_grams === "number" || typeof row.est_grams === "string"
          ? Number(row.est_grams)
          : null;
      const r = spot
        ? estimateItem({ kind, karat, grams: grams && grams > 0 ? grams : null }, spot)
        : null;
      const photoPath = typeof row.photo_url === "string" ? row.photo_url : null;
      return {
        id: String(row.id),
        kind,
        karat,
        grams: grams && grams > 0 ? grams : null,
        gramsAssumed: r && !(grams && grams > 0) ? { low: r.gramsLow, high: r.gramsHigh } : null,
        low: r ? Math.round(r.low * 100) / 100 : null,
        high: r ? Math.round(r.high * 100) / 100 : null,
        savedAt: String(row.created_at),
        spotAtSave: row.spot_at_estimate ? Number(row.spot_at_estimate) : null,
        photoUrl: photoPath
          ? await signObjectUrl("ask-photos", photoPath, SIGNED_URL_TTL_S)
          : null,
      };
    })
  );

  const total = {
    low: Math.round(items.reduce((s, i) => s + (i.low ?? 0), 0) * 100) / 100,
    high: Math.round(items.reduce((s, i) => s + (i.high ?? 0), 0) * 100) / 100,
  };

  // Retention instrumentation — anchored to the newest lead we know of.
  const anchorLead = res.data[0]?.lead_id ? String(res.data[0].lead_id) : null;
  await insertRow("ask_events", {
    lead_id: anchorLead,
    type: "ledger_viewed",
    meta: { user_id: user.id, items: items.length },
  });

  return NextResponse.json({
    email: user.email,
    spot,
    spotAsOf: asOf,
    items,
    total,
    disclaimer: "Ranges are provisional — the recorded assay is final.",
  });
}
