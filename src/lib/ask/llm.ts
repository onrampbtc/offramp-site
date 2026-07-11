/*
  Provider-agnostic LLM client for Ask Offramp (DATA-CORPUS §4 env shape).
  V1 runs Anthropic-direct (native Messages API); the same env vars point at
  OpenRouter later (OpenAI chat-completions dialect) — switching providers is
  config, not code. Never put pricing in the model: it reads metal, the math
  stays in src/lib/ask.ts.
*/

const API_KEY = process.env.ASK_LLM_API_KEY ?? process.env.ANTHROPIC_API_KEY ?? "";
const BASE_URL = (process.env.ASK_LLM_BASE_URL ?? "https://api.anthropic.com").replace(/\/$/, "");
const MODEL_VISION = process.env.ASK_MODEL_VISION ?? "claude-haiku-4-5";

export function isLlmConfigured(): boolean {
  return Boolean(API_KEY);
}

const isAnthropic = () => BASE_URL.includes("anthropic.com");

export interface VisionRead {
  kindGuess: string | null; // ring|chain|coin|bracelet|dental|other
  karatStamp: string | null; // "14K", "585", "750", "10K", "18K", "22K", "24K", "916", "999"…
  karat: string | null; // normalized to 10k|14k|18k|22k|24k
  weightHintGrams: { low: number; high: number } | null;
  looksGold: boolean;
  confidence: number; // 0–1
  note: string | null; // one short human-readable observation
}

const VISION_PROMPT = `You are reading a customer's photo of jewelry or coins for a gold-buying service. Look for karat hallmark stamps (10K/14K/18K/22K/24K, or millesimal 417/585/750/916/999) and identify what the piece is.

Respond with ONLY a JSON object, no prose:
{"kindGuess": "ring|chain|coin|bracelet|dental|other|null", "karatStamp": "the exact stamp text you can read, or null", "karat": "10k|14k|18k|22k|24k|null", "weightHintGrams": {"low": n, "high": n} or null, "looksGold": true|false, "confidence": 0.0-1.0, "note": "one short observation a person would find useful, or null"}

Rules: never invent a stamp you cannot actually read — null with lower confidence is correct. karat must be derived from a visible stamp or clear evidence, else null. weightHintGrams is a rough visual size estimate for this kind of piece, or null. NEVER include any price or dollar value. confidence reflects the karat/kind read, not the photo quality.`;

function normalizeStamp(karat: string | null, stamp: string | null): string | null {
  const map: Record<string, string> = {
    "417": "10k", "585": "14k", "750": "18k", "916": "22k", "999": "24k", "9999": "24k",
  };
  if (karat && /^(10|14|18|22|24)k$/i.test(karat)) return karat.toLowerCase();
  if (stamp) {
    const m = stamp.match(/(10|14|18|22|24)\s*k/i);
    if (m) return `${m[1]}k`;
    const mm = stamp.match(/\b(417|585|750|916|999|9999)\b/);
    if (mm) return map[mm[1]];
  }
  return null;
}

/** Read one photo. imageBase64 = raw base64 (no data: prefix). */
export async function visionRead(
  imageBase64: string,
  mediaType: string
): Promise<{ read: VisionRead; model: string; inputTokens: number; outputTokens: number }> {
  if (!API_KEY) throw new Error("llm not configured");

  let raw: string;
  let inputTokens = 0;
  let outputTokens = 0;

  if (isAnthropic()) {
    const res = await fetch(`${BASE_URL}/v1/messages`, {
      method: "POST",
      headers: {
        "x-api-key": API_KEY,
        "anthropic-version": "2023-06-01",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        model: MODEL_VISION,
        max_tokens: 400,
        messages: [
          {
            role: "user",
            content: [
              { type: "image", source: { type: "base64", media_type: mediaType, data: imageBase64 } },
              { type: "text", text: VISION_PROMPT },
            ],
          },
        ],
      }),
    });
    if (!res.ok) throw new Error(`vision upstream ${res.status}: ${(await res.text()).slice(0, 200)}`);
    const data = await res.json();
    raw = data.content?.[0]?.text ?? "";
    inputTokens = data.usage?.input_tokens ?? 0;
    outputTokens = data.usage?.output_tokens ?? 0;
  } else {
    // OpenAI chat-completions dialect (OpenRouter et al.)
    const res = await fetch(`${BASE_URL}/chat/completions`, {
      method: "POST",
      headers: { Authorization: `Bearer ${API_KEY}`, "Content-Type": "application/json" },
      body: JSON.stringify({
        model: MODEL_VISION,
        max_tokens: 400,
        messages: [
          {
            role: "user",
            content: [
              { type: "image_url", image_url: { url: `data:${mediaType};base64,${imageBase64}` } },
              { type: "text", text: VISION_PROMPT },
            ],
          },
        ],
      }),
    });
    if (!res.ok) throw new Error(`vision upstream ${res.status}: ${(await res.text()).slice(0, 200)}`);
    const data = await res.json();
    raw = data.choices?.[0]?.message?.content ?? "";
    inputTokens = data.usage?.prompt_tokens ?? 0;
    outputTokens = data.usage?.completion_tokens ?? 0;
  }

  // Defensive parse: model was told JSON-only, but never trust that.
  const jsonMatch = raw.match(/\{[\s\S]*\}/);
  if (!jsonMatch) throw new Error("vision returned no JSON");
  const parsed = JSON.parse(jsonMatch[0]);

  const kinds = ["ring", "chain", "coin", "bracelet", "dental", "other"];
  const read: VisionRead = {
    kindGuess: kinds.includes(parsed.kindGuess) ? parsed.kindGuess : null,
    karatStamp: typeof parsed.karatStamp === "string" ? parsed.karatStamp.slice(0, 24) : null,
    karat: normalizeStamp(parsed.karat ?? null, parsed.karatStamp ?? null),
    weightHintGrams:
      parsed.weightHintGrams &&
      typeof parsed.weightHintGrams.low === "number" &&
      typeof parsed.weightHintGrams.high === "number" &&
      parsed.weightHintGrams.low > 0 &&
      parsed.weightHintGrams.high >= parsed.weightHintGrams.low
        ? { low: parsed.weightHintGrams.low, high: parsed.weightHintGrams.high }
        : null,
    looksGold: Boolean(parsed.looksGold),
    confidence: Math.max(0, Math.min(1, Number(parsed.confidence) || 0)),
    note: typeof parsed.note === "string" ? parsed.note.slice(0, 200) : null,
  };

  return { read, model: MODEL_VISION, inputTokens, outputTokens };
}
