import { NextResponse } from "next/server";

// POST /api/ask/vision — hallmark/karat reading from a photo (Phase A stub).
//
// Env-gated: returns 501 until ANTHROPIC_API_KEY exists (Michael provides
// the key per docs/ask-offramp/ROADMAP.md "Needs from Michael").
//
// TODO(vision, Phase A follow-up) — implementation shape per DATA-CORPUS §4:
//   1. Accept multipart/form-data or { imageBase64, mediaType, sessionId }.
//   2. Call claude-haiku-4-5 with the image + a hallmark-reading prompt:
//      extract { karatStamp ("14K"/"585"/"750"/none), kindGuess, confidence,
//      weightHintGrams? } — NEVER a price; pricing stays in /lib/ask math.
//   3. If confidence < threshold, escalate the same image to Sonnet
//      (claude-sonnet-4-5) once; record cost_cents on assistant_messages.
//   4. Return { karat, kind, confidence } for the client to PRE-FILL the
//      piece form — the seller always confirms/adjusts (roadmap Phase A law).
//   5. Photos remain client-side in Phase A; when persistence lands, use
//      private Supabase storage + photo_url on lead_items (DATA-CORPUS §6).

export const dynamic = "force-dynamic";

export async function POST() {
  if (!process.env.ANTHROPIC_API_KEY) {
    return NextResponse.json({ error: "vision not yet enabled" }, { status: 501 });
  }

  // Key exists but the call isn't built yet — still 501 so clients treat
  // vision as unavailable rather than half-working.
  return NextResponse.json({ error: "vision not yet enabled" }, { status: 501 });
}
