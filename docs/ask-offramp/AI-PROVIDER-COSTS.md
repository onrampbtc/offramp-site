# Ask Offramp — AI provider cost research v1.0 (2026-07-11)

Companion to DATA-CORPUS.md §4 (cache-first RAG, router by task). Question: cheapest reliable API for the two workloads, and the abstraction that makes provider switching a config change. All prices fetched from official pages on **2026-07-11**; the market reprices monthly — re-verify before any volume commitment.

## 0. Verdict in one line

**OpenRouter as the single integration surface, Gemini 3.1 Flash-Lite for both workloads, Haiku 4.5 as the low-confidence escalation. ~$18–25/mo at launch volumes.** Confirms the §4 envelope ($50–150/mo at 10k conv) with ~5x headroom.

## 1. Workload assumptions (token math used everywhere below)

| | Input/call | Output/call | Per 1k calls |
|---|---|---|---|
| **W1 photo valuation** (1–3 photos → JSON) | ~2,000 tok (incl. image tokens) | ~500 tok | 2.0M in / 0.5M out |
| **W2 RAG answer** (chunks + question) | ~2,500 tok | ~300 tok | 2.5M in / 0.3M out |

Image-token math varies by provider: Gemini ≈258 tokens per image ≤384px (tiled above that, 258/tile); Claude ≈ (w×h)/750 → a 1092×1092 photo ≈ 1,590 tokens (so Claude W1 input runs ~2.5–4k, penalizing it further); OpenAI GPT-5.x uses patch-based image tokens, same order of magnitude. 3 phone photos downscaled to ~768px ≈ 800–1,600 tokens on Gemini — the 2k W1 input assumption holds.

## 2. Provider pricing found (all per 1M tokens, USD, fetched 2026-07-11)

### Google Gemini API — https://ai.google.dev/gemini-api/docs/pricing
- `gemini-2.5-flash-lite`: **$0.10 in / $0.40 out** (text/image/video input same rate)
- `gemini-3.1-flash-lite`: **$0.25 in / $1.50 out** (image input included at same rate)
- `gemini-3-flash-preview`: **$0.50 in / $3.00 out** (via OpenRouter listing + search; preview id)
- `gemini-3.5-flash`: **$1.50 in / $9.00 out**
- Batch API = 50% off. Free tier exists but **free tier trains on your data** (see §5) — never route user photos through it.

### OpenAI — https://developers.openai.com/api/docs/pricing
- `gpt-5.4-mini`: **$0.75 in / $4.50 out**, cached input $0.075. Vision: yes (image input listed in model capabilities).
- `gpt-5.4-nano`: **$0.20 in / $1.25 out**, cached input $0.02. Vision support probable (nano-class has been vision-capable since gpt-5-nano) but **verify image input on the model page before relying on it for W1**.

### Anthropic — https://platform.claude.com/docs/en/about-claude/pricing
- `claude-haiku-4-5`: **$1.00 in / $5.00 out**. Vision-capable. Prompt caching: 5m write 1.25x ($1.25), cache read 0.1x (**$0.10**). Batch 50% ($0.50/$2.50). US-only `inference_geo` = 1.1x premium.
- `claude-sonnet-4-6`: $3/$15 (escalation tier if ever needed).

### DeepSeek — https://api-docs.deepseek.com/quick_start/pricing/
- `deepseek-v4-flash`: **$0.14 in (cache miss) / $0.0028 in (cache hit!) / $0.28 out**. 1M context.
- `deepseek-v4-pro`: $0.435 in / $0.87 out.
- `deepseek-chat`/`deepseek-reasoner` names deprecated 2026-07-24 (aliases of v4-flash modes).
- **No vision/VL model on the platform API** → cannot serve W1 at all.

### Zhipu / Z.ai — https://docs.z.ai/guides/overview/pricing
- `glm-4.5-air`: $0.20 in / $1.10 out; `glm-4.5-flash`: **free**
- `glm-4.6v` (vision): $0.30 in / $0.90 out; `glm-4.6v-flash` (vision): **free**
- Free is real but see privacy (§5) — disqualifying for this product.

### Perplexity — https://docs.perplexity.ai/getting-started/pricing
- `sonar`: $1 in / $1 out **plus $5–12 per 1,000 requests** (search-context fee). The per-request fee alone is ~$5/1k calls — 4–13x our entire per-call model cost. It is a web-search-augmented model: exactly wrong for closed-corpus "answer only from context" RAG (it wants to cite the open web). Park it as a *possible* future "current market news" skill; even then Gemini + our own spot data is cheaper. **Not a candidate.**

### OpenRouter (aggregator) — https://openrouter.ai/docs/faq
- **Zero markup on inference** — pass-through provider pricing.
- Fees: **5.5% (min $0.80) on Stripe credit purchases**, 5% crypto. **BYOK: first 1M requests/mo free, then 5% of what the routed model would cost** — at our volume BYOK is effectively free forever (we'd never exceed 1M req/mo).
- Automatic provider fallback: "If a provider returns an error OpenRouter will automatically fall back to the next provider." Variants `:floor` (cheapest) and `:nitro` (fastest); per-request provider pinning available.
- Rate limits: free models 50 req/day (1,000 with ≥$10 credits); paid models scale with credits — no issue at our volume.
- Relevant model listings (openrouter.ai): `google/gemini-3.1-flash-lite-preview` $0.25/$1.50 · `google/gemini-3-flash-preview` $0.50/$3.00 · `qwen/qwen3-vl-32b-instruct` $0.104/$0.416 · `qwen/qwen3-vl-8b-instruct` $0.117/$0.455 · `anthropic/claude-haiku-4.5` pass-through $1/$5.

## 3. COST TABLE

$ per 1,000 calls (math: W1 = 2.0M×in + 0.5M×out; W2 = 2.5M×in + 0.3M×out):

| Model | W1 $/1k calls | W2 $/1k calls | Notes |
|---|---|---|---|
| gemini-2.5-flash-lite | **$0.40** | **$0.37** | cheapest credible vision; older gen |
| qwen3-vl-32b (via OR) | $0.42 | $0.39 | open-weights; OCR unproven on hallmarks |
| deepseek-v4-flash | — no vision | **$0.43** | PRC — see §5 |
| glm-4.5-air / 4.6v | $1.05 (4.6v) | $0.83 (air) | PRC — see §5; Flash tiers $0 |
| gpt-5.4-nano | $1.03* | $0.88 | *verify vision |
| **gemini-3.1-flash-lite** ← pick | **$1.25** | **$1.08** | current-gen, image-priced-in |
| gemini-3-flash-preview | $2.50 | $2.15 | escalation option |
| gpt-5.4-mini | $3.75 | $3.23 | |
| claude-haiku-4.5 | $4.50–6.00† | $4.00 | †image tokens heavier; cache read $0.10 helps W2 system prompt |
| gemini-3.5-flash | $7.50 | $6.45 | overkill |
| perplexity sonar | n/a | $7.80 | $5/1k request fee kills it |

**Monthly bill @ 5k W1 + 10k paid W2** (W1×5 + W2×10):

| Stack | $/mo | |
|---|---|---|
| All gemini-2.5-flash-lite | **$5.70** | absolute floor, US-safe |
| qwen3-vl-32b + deepseek-v4-flash | $6.40 | PRC exposure on W2 |
| All gpt-5.4-nano | $13.95 | vision unverified |
| **All gemini-3.1-flash-lite (recommended)** | **$17.05** | +5.5% OR credit fee ≈ **$18** |
| + 20% W1 escalation to haiku-4.5 | +$4.50 | ≈ **$22–25 all-in** |
| All claude-haiku-4.5 | $62.50 | quality ceiling of the cheap tier |

Every option is noise relative to the business. The §4 envelope ($50–150/mo @ 10k conversations) is confirmed conservative — the paid tail costs $6–25/mo. **Cost is not the deciding variable below Haiku prices; OCR quality on engraved hallmarks and instruction-following are.** Spend the extra $11/mo for current-gen.

## 4. Reliability / structured output

- **OpenRouter**: adds one dependency layer, but its automatic cross-provider fallback is *more* resilient than any single-provider direct integration for a one-person ops team. No formal SLA (nor do the cheap tiers of anyone else). Passes `response_format`/JSON schema through where the underlying provider supports it.
- **Google**: paid-tier Gemini is production-grade; `-preview` model ids get capacity-throttled and deprecated — prefer stable ids in config, treat previews as escalation only. Native `responseSchema` structured output: strong.
- **OpenAI/Anthropic**: most mature reliability reputations. OpenAI structured outputs = best-in-class JSON guarantee; Anthropic via tool-use forcing (works, slightly more ceremony).
- **DeepSeek**: history of capacity congestion at peaks; JSON mode supported. **Qwen/GLM via OpenRouter**: structured-output support varies per hosting provider — needs a per-endpoint check, one more reason they're fallbacks not primaries.
- W1's JSON contract should ALSO be validated server-side (zod) with one retry-on-parse-failure regardless of provider — never trust JSON mode alone.

## 5. Privacy (user photos of personal jewelry — the binding constraint)

- **Google Gemini API**: paid tier — "Google doesn't use your prompts...or responses to improve our products" (https://ai.google.dev/gemini-api/terms, fetched 2026-07-11). **Free/unpaid tier explicitly trains on submissions and allows human review — RED FLAG: never route production traffic, especially photos, through the free tier.** Bill from day one.
- **OpenAI / Anthropic**: no training on API data by default; US companies; retention windows for abuse monitoring. Safe.
- **DeepSeek — RED FLAG for W1, caution for W2**: data processed/stored in the PRC under PRC jurisdiction; privacy policy permits use of inputs for service improvement. Unacceptable for US consumers' jewelry photos (photos can contain hands, homes, EXIF-adjacent context). Text-only W2 through it is defensible on pure economics but saves ~$6/mo — not worth the "your questions go to China" footnote.
- **Zhipu/Z.ai — same RED FLAG**, and the "free" tiers are free for the usual reason. Disqualified for anything user-generated.
- **OpenRouter**: per-provider data policies; account-level setting to **deny routing to providers that may train on your data** (https://openrouter.ai/docs/features/privacy-and-logging) — set this ON day one, account-wide, both paid and free toggles. OpenRouter itself: don't enable prompt logging.
- Also per DATA-CORPUS §6: photos stored private in Supabase, deletable on request — provider calls should send the image bytes, never a public URL.

## 6. RECOMMENDATION

**(a) Architecture — hypothesis confirmed: OpenRouter as the single integration surface.** Every serious provider (OpenRouter, OpenAI, DeepSeek, Z.ai, and Gemini via its OpenAI-compat endpoint) speaks the OpenAI chat-completions dialect, so the abstraction is just `baseURL + apiKey + model` from env — one client, zero SDK lock-in. OpenRouter adds: zero inference markup, automatic fallback routing, per-model A/B by changing a string, account-wide no-training policy filter, and a BYOK path (free at our volume) if we ever want Google direct billing. Direct-to-Google saves only the 5.5% credit fee (≈ $1/mo) and loses fallback + one-line model switching — not worth it. Revisit direct integration only if OpenRouter itself becomes the reliability problem.

**(b) Model ids** (OpenRouter slugs — verify exact slug at integration, previews get renamed):
- **W1 primary**: `google/gemini-3.1-flash-lite` — current-gen vision, image input priced at text rate, native JSON schema.
- **W1 escalation** (hallmark confidence low, per §4 router): `anthropic/claude-haiku-4.5` (or `google/gemini-3-flash-preview` as the cheaper middle rung).
- **W2 primary**: `google/gemini-3.1-flash-lite` — same model, one less thing to babysit; strong instruction-following for "answer only from context."
- **Benchmark candidates during eval week**: `google/gemini-2.5-flash-lite` (3x cheaper downgrade if quality holds) and `qwen/qwen3-vl-32b-instruct` (open-weights hedge). Ship the eval harness before swapping.

**(c) Expected monthly bill at launch (5k W1 + 10k paid W2): ≈ $18/mo primary-only, ≈ $25/mo with a 20% W1 escalation rate. Budget $40/mo for headroom.** At 10x volume: ~$200–250/mo — still fine; that's the point at which BYOK-to-Google-direct + batch pre-compute of cache answers becomes worth an afternoon.

**(d) Env/config shape** (extends the existing env-gated `/api/ask/vision`; names per spec §13 conventions, secrets in `.env.local` + Vercel only):

```bash
# Provider-agnostic — swapping providers = changing these values, no code change
ASK_LLM_BASE_URL=https://openrouter.ai/api/v1     # or https://generativelanguage.googleapis.com/v1beta/openai/ etc.
ASK_LLM_API_KEY=sk-or-v1-...                       # secret
ASK_MODEL_VISION=google/gemini-3.1-flash-lite      # W1 primary
ASK_MODEL_VISION_ESCALATE=anthropic/claude-haiku-4.5  # W1 low-confidence rung
ASK_MODEL_TEXT=google/gemini-3.1-flash-lite        # W2 primary
ASK_VISION_CONFIDENCE_FLOOR=0.7                    # below this → escalate model
```

Client: one thin module (`src/lib/ask/llm.ts`) wrapping `fetch` (or the `openai` npm pkg with `baseURL`) — chat-completions shape, `response_format: { type: "json_schema" }` for W1, zod-validate + single retry on parse failure. Log `model`, `usage`, and computed `cost_cents` into `assistant_messages.cost_cents` (schema already has the column). Embeddings stay open-source/pgvector per §4 — no change.

**Setup checklist (day one):** OpenRouter account → Settings → Privacy: deny providers that may train (both toggles) → buy $20 credits → never enable prompt logging → wire env vars in Vercel.

## Sources (all fetched 2026-07-11)
- https://ai.google.dev/gemini-api/docs/pricing — Gemini 2.5/3.1/3.5 prices
- https://ai.google.dev/gemini-api/terms — paid vs free tier data use
- https://developers.openai.com/api/docs/pricing — gpt-5.4-mini/nano
- https://platform.claude.com/docs/en/about-claude/pricing — Haiku 4.5, caching, batch
- https://api-docs.deepseek.com/quick_start/pricing/ — v4-flash/pro, deprecations
- https://docs.z.ai/guides/overview/pricing — GLM 4.5/4.6 incl. free tiers
- https://docs.perplexity.ai/getting-started/pricing — sonar token + request fees
- https://openrouter.ai/docs/faq — fees, BYOK, rate limits, fallback
- https://openrouter.ai/docs/features/privacy-and-logging — data-policy routing filter
- OpenRouter model pages: /google/gemini-3.1-flash-lite-preview, /google/gemini-3-flash-preview, /qwen (Qwen3-VL prices)
