import { NextResponse } from "next/server";
import { textAnswer, isLlmConfigured, type ContextChunk } from "@/lib/ask/llm";
import { normalizeQuestion } from "@/lib/ask/normalize";
import { insertRow, selectRows, rpc, isSupabaseConfigured } from "@/lib/supabase";

/*
  POST /api/ask/chat — the Learn skill (Phase B).
  Cache-first grounded Q&A: normalized question → answer_cache hit ($0) →
  else Postgres FTS over ask_corpus (top 6 chunks) → Haiku answer grounded
  ONLY in those chunks. Every question feeds question_log (the flywheel);
  content_gap flags what the corpus can't answer yet.

  GET /api/ask/chat — the top cached questions (suggested chips for the UI).
*/

export const dynamic = "force-dynamic";

const MAX_QUESTION_CHARS = 400;
const RATE_LIMIT = 20; // per IP per hour
const RATE_WINDOW_MS = 60 * 60 * 1000;
const ALLOWED_BRANDS = ["offramp", "goldbuyer", "goldvsbitcoin"] as const;

// Haiku-tier pricing for cost bookkeeping (USD per million tokens).
const USD_PER_M_INPUT = 1;
const USD_PER_M_OUTPUT = 5;

const REFUSAL =
  "Our published guides don't cover that yet, so I won't guess. The free consultation is a person who can — book one at /consult and we'll get you a straight answer.";

// ── simple in-memory rate limit (per server instance) ─────────────────────
const hits = new Map<string, { count: number; resetAt: number }>();
function rateLimited(ip: string): boolean {
  const now = Date.now();
  const h = hits.get(ip);
  if (!h || now > h.resetAt) {
    hits.set(ip, { count: 1, resetAt: now + RATE_WINDOW_MS });
    return false;
  }
  h.count += 1;
  if (hits.size > 5000) {
    for (const [k, v] of hits) if (now > v.resetAt) hits.delete(k);
  }
  return h.count > RATE_LIMIT;
}

interface CorpusHit {
  title: string | null;
  url: string | null;
  chunk: string;
  source: string | null;
  rank: number;
}

// Tokens that carry no retrieval signal: pure numbers and quantities kill
// the strict AND-query ("how much is 3 grams of gold worth" must not demand
// a literal "3" in a chunk). Karat tokens (14k…) stay — they're content.
const FTS_NOISE = new Set(["anything", "something", "any", "really", "actually", "much", "many"]);
function ftsTerms(question: string): string {
  return normalizeQuestion(question)
    .split(" ")
    .filter((t) => !/^\d+(\.\d+)?$/.test(t) && !FTS_NOISE.has(t))
    .join(" ");
}

/** FTS retrieval: strict websearch (AND) first, OR-fallback for recall. */
async function retrieve(question: string): Promise<{ chunks: CorpusHit[]; strictCount: number }> {
  const terms = ftsTerms(question) || question;
  const strict = await rpc("search_ask_corpus", { q: terms, n: 6 });
  const strictHits = (strict.data ?? []) as unknown as CorpusHit[];
  if (strictHits.length >= 4) return { chunks: strictHits, strictCount: strictHits.length };

  const orQuery = terms.split(" ").join(" or ");
  const loose = orQuery ? await rpc("search_ask_corpus", { q: orQuery, n: 6 }) : { data: [] };
  const seen = new Set(strictHits.map((c) => c.chunk));
  const merged = [
    ...strictHits,
    ...((loose.data ?? []) as unknown as CorpusHit[]).filter((c) => !seen.has(c.chunk)),
  ].slice(0, 6);
  return { chunks: merged, strictCount: strictHits.length };
}

function sourcesOf(chunks: CorpusHit[]): { title: string; url: string }[] {
  const out: { title: string; url: string }[] = [];
  const seen = new Set<string>();
  for (const c of chunks) {
    if (!c.url || seen.has(c.url)) continue;
    seen.add(c.url);
    out.push({ title: c.title ?? c.url, url: c.url });
    if (out.length >= 3) break;
  }
  return out;
}

async function ensureSession(
  sessionId: string | null,
  request: Request,
  brand: string | null
): Promise<string | null> {
  if (sessionId) return sessionId;
  const sourceProperty = ALLOWED_BRANDS.includes(brand as (typeof ALLOWED_BRANDS)[number])
    ? (brand as string)
    : "offramp";
  const created = await insertRow("assistant_sessions", {
    source_property: sourceProperty,
    referrer: request.headers.get("referer"),
  });
  return created.ok && created.data?.[0] ? String(created.data[0].id) : null;
}

interface ChatBody {
  question?: unknown;
  sessionId?: unknown;
  brand?: unknown;
}

export async function POST(request: Request) {
  let body: ChatBody;
  try {
    body = (await request.json()) as ChatBody;
  } catch {
    return NextResponse.json({ error: "Invalid JSON body" }, { status: 400 });
  }

  const question = typeof body.question === "string" ? body.question.trim() : "";
  if (question.length < 3) {
    return NextResponse.json({ error: "question is required" }, { status: 400 });
  }
  if (question.length > MAX_QUESTION_CHARS) {
    return NextResponse.json(
      { error: `Question too long (max ${MAX_QUESTION_CHARS} characters)` },
      { status: 400 }
    );
  }
  if (!isSupabaseConfigured()) {
    return NextResponse.json({ error: "Ask is not available right now" }, { status: 503 });
  }

  // Rate limit (service-key header bypass for the cache-priming script).
  const serviceHeader = request.headers.get("x-ask-service");
  const isService =
    Boolean(serviceHeader) && serviceHeader === process.env.SUPABASE_SERVICE_ROLE_KEY;
  const ip =
    request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ?? "unknown";
  if (!isService && rateLimited(ip)) {
    return NextResponse.json(
      { error: "Too many questions — try again in a bit, or book the free consult at /consult." },
      { status: 429 }
    );
  }

  const normalized = normalizeQuestion(question);
  const sessionId = await ensureSession(
    typeof body.sessionId === "string" ? body.sessionId : null,
    request,
    typeof body.brand === "string" ? body.brand : null
  );

  // ── 1. cache hit: serve from DB at $0 ──────────────────────────────────
  const cached = await selectRows(
    "answer_cache",
    `normalized_q=eq.${encodeURIComponent(normalized)}&select=answer,sources&limit=1`
  );
  if (cached.ok && cached.data && cached.data.length > 0) {
    const row = cached.data[0] as { answer: string; sources: unknown };
    await rpc("log_question", { nq: normalized, answered: "cache", gap: false });
    await insertRow("assistant_messages", {
      session_id: sessionId,
      role: "assistant",
      skill: "learn",
      text: row.answer,
      cost_cents: 0,
    });
    return NextResponse.json({
      answer: row.answer,
      sources: row.sources ?? [],
      cached: true,
      sessionId,
    });
  }

  // ── 2. retrieve from the corpus ────────────────────────────────────────
  const { chunks, strictCount } = await retrieve(question);
  const contentGap = strictCount < 2;

  await insertRow("assistant_messages", {
    session_id: sessionId,
    role: "user",
    skill: "learn",
    text: question.slice(0, MAX_QUESTION_CHARS),
  });

  // No strict (all-terms) match = off-corpus question. Refuse honestly at $0
  // rather than let OR-fallback scraps drag the model toward junk sources.
  if (strictCount === 0 || !isLlmConfigured()) {
    await rpc("log_question", { nq: normalized, answered: "refused", gap: true });
    await insertRow("assistant_messages", {
      session_id: sessionId,
      role: "assistant",
      skill: "learn",
      text: REFUSAL,
      cost_cents: 0,
    });
    return NextResponse.json({
      answer: REFUSAL,
      sources: [],
      cached: false,
      sessionId,
    });
  }

  // ── 3. grounded answer ─────────────────────────────────────────────────
  let answer: string;
  let costCents = 0;
  try {
    const result = await textAnswer(question, chunks as ContextChunk[]);
    answer = result.answer;
    costCents =
      ((result.inputTokens * USD_PER_M_INPUT + result.outputTokens * USD_PER_M_OUTPUT) /
        1_000_000) *
      100;
  } catch {
    return NextResponse.json(
      { error: "Answer engine is busy — try again in a moment." },
      { status: 502 }
    );
  }

  const sources = sourcesOf(chunks);

  // Bookkeeping: flywheel log + message row; cache confident answers.
  await rpc("log_question", { nq: normalized, answered: "corpus", gap: contentGap });
  await insertRow("assistant_messages", {
    session_id: sessionId,
    role: "assistant",
    skill: "learn",
    text: answer,
    cost_cents: Math.round(costCents * 1000) / 1000,
  });
  if (!contentGap) {
    // Duplicate normalized_q insert just fails quietly (unique constraint) —
    // fine: first writer wins, everyone after reads the cache.
    await insertRow("answer_cache", { normalized_q: normalized, question, answer, sources });
  }

  return NextResponse.json({ answer, sources, cached: false, sessionId });
}

// GET — suggested-question chips: the most-asked questions that have a
// cached answer (first_asked tie-break ≈ search volume, priming inserts
// in volume order).
export async function GET() {
  if (!isSupabaseConfigured()) return NextResponse.json({ questions: [] });
  const top = await selectRows(
    "question_log",
    "select=normalized_q&order=times_asked.desc,first_asked.asc&limit=24"
  );
  const norms = (top.data ?? []).map((r) => String(r.normalized_q));
  if (norms.length === 0) return NextResponse.json({ questions: [] });
  const inList = norms.map((n) => `"${n.replace(/"/g, "")}"`).join(",");
  const cachedRows = await selectRows(
    "answer_cache",
    `select=normalized_q,question&normalized_q=in.(${encodeURIComponent(inList)})`
  );
  const byNorm = new Map(
    (cachedRows.data ?? []).map((r) => [String(r.normalized_q), String(r.question)])
  );
  const questions: string[] = [];
  for (const n of norms) {
    const q = byNorm.get(n);
    if (q) questions.push(q);
    if (questions.length >= 4) break;
  }
  return NextResponse.json({ questions });
}
