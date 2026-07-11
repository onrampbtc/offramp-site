import { NextResponse } from "next/server";
import { visionRead, isLlmConfigured } from "@/lib/ask/llm";
import { insertRow, isSupabaseConfigured } from "@/lib/supabase";

/*
  POST /api/ask/vision — hallmark/karat reading from a photo.
  The model reads metal (kind, stamp, karat, size hint) and NEVER prices —
  pricing stays in src/lib/ask.ts math. The client pre-fills the piece form;
  the seller always confirms/adjusts (Phase A law). Photos are not persisted:
  the base64 is passed through to the model and dropped.
*/

export const dynamic = "force-dynamic";

const MAX_IMAGE_BYTES = 4 * 1024 * 1024; // ~3MB image → ~4MB base64
const MEDIA_TYPES = new Set(["image/jpeg", "image/png", "image/webp", "image/heic"]);

export async function POST(request: Request) {
  if (!isLlmConfigured()) {
    return NextResponse.json({ error: "vision not yet enabled" }, { status: 501 });
  }

  let body: { imageBase64?: string; mediaType?: string; sessionId?: string };
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "invalid JSON" }, { status: 400 });
  }

  const { imageBase64, mediaType } = body;
  if (!imageBase64 || typeof imageBase64 !== "string") {
    return NextResponse.json({ error: "imageBase64 required" }, { status: 400 });
  }
  if (imageBase64.length > MAX_IMAGE_BYTES) {
    return NextResponse.json({ error: "image too large — resize under 3MB" }, { status: 413 });
  }
  if (!mediaType || !MEDIA_TYPES.has(mediaType)) {
    return NextResponse.json({ error: "unsupported mediaType" }, { status: 400 });
  }
  // Strip a data: prefix if the client sent a full data URL.
  const b64 = imageBase64.replace(/^data:[^;]+;base64,/, "");

  try {
    const { read, model, inputTokens, outputTokens } = await visionRead(b64, mediaType);

    // Bookkeeping (never blocks the response): cost at Haiku 4.5 list rates.
    if (isSupabaseConfigured() && body.sessionId && /^[0-9a-f-]{36}$/i.test(body.sessionId)) {
      const costCents = (inputTokens / 1e6) * 100 + (outputTokens / 1e6) * 500;
      insertRow("assistant_messages", {
        session_id: body.sessionId,
        role: "assistant",
        skill: "value",
        text: JSON.stringify(read),
        confidence: read.confidence,
        cost_cents: Math.round(costCents * 1000) / 1000,
      }).catch(() => {});
    }

    return NextResponse.json({ read, model });
  } catch (e) {
    console.error("vision failed:", e);
    return NextResponse.json({ error: "vision unavailable" }, { status: 502 });
  }
}
