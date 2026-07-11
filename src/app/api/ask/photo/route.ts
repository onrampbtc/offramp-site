import { NextResponse } from "next/server";
import {
  isSupabaseConfigured,
  selectRows,
  updateRows,
  uploadObject,
} from "@/lib/supabase";
import { randomUUID } from "crypto";

// POST /api/ask/photo — persist a piece photo AFTER the seller saves their
// breakdown (FLOW-SPEC step 4: nothing uploads before the save/sign-in
// moment; before that, photos are client-side previews only).
//
// Auth model (pre-account): the caller must present the sessionId whose
// assistant_sessions.email_id matches the leadId — i.e. the same browser
// session that just created the lead. Photos land in the PRIVATE
// 'ask-photos' bucket at {leadId}/{uuid}.jpg; display is via short-expiry
// signed URLs only (see /api/ledger/items).

export const dynamic = "force-dynamic";

// The client sends the same ~1024px downscaled jpeg the vision flow uses.
const MAX_B64_CHARS = 2_000_000; // ~1.5 MB decoded — generous for 1024px jpeg

const WINDOW_MS = 60_000;
const MAX_PER_WINDOW = 20;
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
  if (hits.size > 10_000) hits.clear();
  return false;
}

const UUID_RE = /^[0-9a-f-]{36}$/i;

interface PhotoBody {
  leadId?: unknown;
  sessionId?: unknown;
  itemId?: unknown;
  imageBase64?: unknown;
}

export async function POST(request: Request) {
  const ip =
    request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ?? "unknown";
  if (rateLimited(ip)) {
    return NextResponse.json({ error: "Too many uploads" }, { status: 429 });
  }

  let body: PhotoBody;
  try {
    body = (await request.json()) as PhotoBody;
  } catch {
    return NextResponse.json({ error: "Invalid JSON body" }, { status: 400 });
  }

  const leadId = typeof body.leadId === "string" ? body.leadId : "";
  const sessionId = typeof body.sessionId === "string" ? body.sessionId : "";
  const itemId = typeof body.itemId === "string" ? body.itemId : "";
  const b64 = typeof body.imageBase64 === "string" ? body.imageBase64 : "";

  if (!UUID_RE.test(leadId) || !UUID_RE.test(sessionId) || !UUID_RE.test(itemId)) {
    return NextResponse.json({ error: "leadId, sessionId, itemId required" }, { status: 400 });
  }
  if (!b64 || b64.length > MAX_B64_CHARS) {
    return NextResponse.json({ error: "imageBase64 missing or too large" }, { status: 400 });
  }

  if (!isSupabaseConfigured()) {
    return NextResponse.json({ success: true, skipped: true });
  }

  // The session must be the one that created this lead.
  const session = await selectRows(
    "assistant_sessions",
    `id=eq.${sessionId}&email_id=eq.${leadId}&select=id&limit=1`
  );
  if (!session.ok || !session.data || session.data.length === 0) {
    return NextResponse.json({ error: "Session does not match lead" }, { status: 403 });
  }

  // And the item must belong to the lead and not already carry a photo.
  const item = await selectRows(
    "lead_items",
    `id=eq.${itemId}&lead_id=eq.${leadId}&select=id,photo_url&limit=1`
  );
  if (!item.ok || !item.data || item.data.length === 0) {
    return NextResponse.json({ error: "Item does not match lead" }, { status: 403 });
  }
  if (item.data[0].photo_url) {
    return NextResponse.json({ error: "Item already has a photo" }, { status: 409 });
  }

  let bytes: Uint8Array;
  try {
    bytes = Uint8Array.from(Buffer.from(b64, "base64"));
  } catch {
    return NextResponse.json({ error: "Invalid base64" }, { status: 400 });
  }
  // JPEG magic bytes (the client always sends the downscaled jpeg).
  if (bytes.length < 4 || bytes[0] !== 0xff || bytes[1] !== 0xd8) {
    return NextResponse.json({ error: "Not a JPEG" }, { status: 400 });
  }

  const path = `${leadId}/${randomUUID()}.jpg`;
  const uploaded = await uploadObject("ask-photos", path, bytes, "image/jpeg");
  if (!uploaded) {
    return NextResponse.json({ error: "Upload failed" }, { status: 500 });
  }

  await updateRows("lead_items", `id=eq.${itemId}`, { photo_url: path });

  return NextResponse.json({ success: true, path });
}
