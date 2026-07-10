# Offramp — Command Center

This repo is the single source of truth for offrampgold.com AND the operating hub for the whole gold portfolio. Do not re-derive strategy in-session — it is already written down. Read in this order, only as deep as the task requires:

1. **`docs/STATE.md`** — living status board: current milestone, backlog, what shipped, blockers. **Read this first, every session. Update it before every commit that ships something.**
2. **`docs/BUILD-SPEC.md` (v1.1)** — the constitution. Routes, templates, DB schema, design tokens, copy library, milestones M1–M6 with acceptance criteria. When spec and code conflict, spec wins. Read only the § the task needs.
3. **`docs/MASTER-PLAN.md` (v2.0)** — strategy behind the spec (market data, funnel, ops rituals). Reference, not required reading.
4. **`docs/PLAYBOOK-goldbuyer-phase2.md`** — the ranking-site playbook for goldbuyer.io, Phase 2 (month 4+). Do not build from it before then.

`docs/archive/` = superseded artifacts. Never build from them.

## Hard laws (from spec — do not violate)
- **Five content types only:** calculator · price table · worth page · thesis page · proof asset. No blog posts, no listicles.
- **Assay Ledger** design system (spec §4, chosen 2026-07-10): bone/graphite/champagne, gold only as photographed material, THE ASSAY LINE on every page, one vault-band dark moment per page, documentary captions on real photos. No shimmer/glow/pulse. All numbers Geist Mono `tabular-nums`.
- **Never write** "unlock the value", "turn clutter into cash", countdown timers. "Cash out" only at decision moments (vault sell, alerts, offer accept) — never first-contact copy.
- **BTC is a differentiator, not acquisition** ("sell gold for bitcoin" = 20 searches/mo). Never build pages targeting gold→BTC keywords.
- No fabricated proof: no fake reviews, ticker hidden until ≥5 real payouts.
- Every new page must name its content type + funnel stage; never delete a URL without a 301.

## Three-property architecture (LOCKED, spec §3)
- **offrampgold.com** — brand, funnel, all authority. This repo.
- **goldvsbitcoin.org** — Lane 2 editorial front door → converts to main site.
- **goldbuyer.io** — Phase 2 (month 4+) ranking site w/ FTC footer disclosure.
- **goldtobtc.com** — 301 entirely into /gold-to-bitcoin (redirect already committed in gold-domains@d4213c5).
- Satellites live in `~/Desktop/gold-domains` (turborepo, repo: onrampbtc/gold-domains). Sibling repos may move around the Desktop — GitHub is canonical, `git remote get-url origin` to confirm identity.

## Build & deploy
- Dev: `npm run dev` (or preview_start "offramp-site"). Build check before any deploy: `npm run build`.
- Deploy: push to `main` → Vercel auto-deploys (project `prj_8UGAPE5hDipCeaNRbJTSJKV3NEXE`, org `team_bdclgPUJ9WcveCsRPrQUYCRS`), or `vercel --prod --yes`.
- **Git author must be Michael Tanguma <michael@onrampbitcoin.com>** — the machine-local author (`mt@MTs-MacBook-Pro.local`) caused 105 days of silently rejected Vercel git-deploys before it was fixed (2026-07-09). If deploys hang in UNKNOWN, check commit author first.
- Env var names: spec §13. Secrets live in `.env.local` + Vercel env — never in this repo or docs.
- Contact: phone 512-983-5997 → `NEXT_PUBLIC_PHONE=+15129835997`, display `(512) 983-5997`, DM Mono. Address 500 W 2nd St Ste 1900, Austin, TX 78701 — **Offramp properties only**, appointment-only wording, no Google Business Profile until a staffed space exists.

## CRM guardrail
Stack is Supabase + Resend per spec. The dormant `src/lib/hubspot.ts` wiring activates only via `HUBSPOT_PRIVATE_APP_TOKEN` — that token must come from a NEW HubSpot instance Michael will create. **Never connect anything to the existing Onramp HubSpot.**

## Session ritual
Start: read STATE.md → do the work → verify (build + preview) → update STATE.md (+ spec changelog if a decision changed) → commit + push. Small commits, one shippable unit each.
