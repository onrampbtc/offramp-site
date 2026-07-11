import { NextResponse } from "next/server";
import {
  estimateItem,
  getSpot,
  isValidKarat,
  isValidKind,
  type AskItemInput,
} from "@/lib/ask";
import { insertRow, updateRows, isSupabaseConfigured } from "@/lib/supabase";

// POST /api/ask/lead — email capture at the completion block of /ask.
// Inserts a leads row + lead_items (with spot_at_estimate) + an ask_events
// 'estimate' row; links the assistant_session when a sessionId is provided.

export const dynamic = "force-dynamic";

const ALLOWED_BRANDS = ["offramp", "goldbuyer", "goldvsbitcoin"] as const;

// Naive per-IP rate limit (in-memory; fine for Phase A single-region).
const WINDOW_MS = 60_000;
const MAX_PER_WINDOW = 5;
const hits = new Map<string, number[]>();

function rateLimited(ip: string): boolean {
  const now = Date.now();
  const recent = (hits.get(ip) ?? []).filter((t) => now - t < WINDOW_MS);
  if (recent.length >= MAX_PER_WINDOW) {
    hits.set(ip, recent);
    return true;
  }
  recent.push(now);
  hits.set(ip, recent);
  // keep the map from growing unbounded
  if (hits.size > 10_000) hits.clear();
  return false;
}

interface LeadBody {
  email?: unknown;
  consentMarketing?: unknown;
  sessionId?: unknown;
  items?: unknown;
  zip?: unknown;
  brand?: unknown;
}

export async function POST(request: Request) {
  const ip =
    request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ?? "unknown";
  if (rateLimited(ip)) {
    return NextResponse.json(
      { error: "Too many requests — try again in a minute" },
      { status: 429 }
    );
  }

  let body: LeadBody;
  try {
    body = (await request.json()) as LeadBody;
  } catch {
    return NextResponse.json({ error: "Invalid JSON body" }, { status: 400 });
  }

  const email = typeof body.email === "string" ? body.email.trim().toLowerCase() : "";
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) || email.length > 254) {
    return NextResponse.json({ error: "Invalid email address" }, { status: 400 });
  }
  const consentMarketing = body.consentMarketing === true;

  const items: AskItemInput[] = [];
  if (Array.isArray(body.items)) {
    for (const raw of body.items.slice(0, 50)) {
      const it = raw as { kind?: unknown; karat?: unknown; grams?: unknown };
      if (!isValidKind(it.kind) || !isValidKarat(it.karat)) continue;
      const grams =
        typeof it.grams === "number" && isFinite(it.grams) && it.grams > 0 && it.grams < 100000
          ? it.grams
          : null;
      items.push({ kind: it.kind, karat: it.karat, grams });
    }
  }

  if (!isSupabaseConfigured()) {
    // Graceful degradation, same posture as the HubSpot wiring.
    console.log("Ask lead received (Supabase not configured):", {
      email,
      consentMarketing,
      items: items.length,
    });
    return NextResponse.json({ success: true, skipped: true });
  }

  const brand = typeof body.brand === "string" ? body.brand : null;
  const sourceProperty = ALLOWED_BRANDS.includes(brand as (typeof ALLOWED_BRANDS)[number])
    ? (brand as string)
    : "offramp";

  const lead = await insertRow("leads", {
    email,
    consent_marketing: consentMarketing,
    consent_at: consentMarketing ? new Date().toISOString() : null,
    source_property: sourceProperty,
    zip: typeof body.zip === "string" ? body.zip.slice(0, 10) : null,
  });
  if (!lead.ok || !lead.data || lead.data.length === 0) {
    console.error("Ask lead insert failed:", lead.status);
    return NextResponse.json({ error: "Could not save your breakdown" }, { status: 500 });
  }
  const leadId = String(lead.data[0].id);

  // Per-item rows with the spot they were priced at.
  if (items.length > 0) {
    const { spot } = await getSpot();
    const rows = items.map((item) => {
      const r = spot ? estimateItem(item, spot) : null;
      return {
        lead_id: leadId,
        kind: item.kind,
        karat: item.karat,
        est_grams: item.grams,
        provisional_low: r ? Math.round(r.low * 100) / 100 : null,
        provisional_high: r ? Math.round(r.high * 100) / 100 : null,
        spot_at_estimate: spot || null,
      };
    });
    for (const row of rows) {
      const ins = await insertRow("lead_items", row);
      if (!ins.ok) console.error("lead_items insert failed:", ins.status);
    }
  }

  await insertRow("ask_events", {
    lead_id: leadId,
    type: "estimate",
    meta: { items: items.length, source_property: sourceProperty },
  });

  // Thread the email back onto the assistant session.
  if (typeof body.sessionId === "string" && /^[0-9a-f-]{36}$/i.test(body.sessionId)) {
    await updateRows("assistant_sessions", `id=eq.${body.sessionId}`, {
      email_id: leadId,
    });
  }

  return NextResponse.json({ success: true, leadId });
}
