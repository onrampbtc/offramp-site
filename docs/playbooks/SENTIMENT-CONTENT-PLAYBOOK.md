# SENTIMENT → CONTENT PLAYBOOK
**Cadence:** every 2 weeks. **Owner:** scheduled agent (executable cold — everything needed is in this file).
**Purpose:** mine what real consumers say when they try to sell gold/jewelry, then turn it into content briefs for the three properties. Consumer language verbatim is the gold — their words become our headlines.

First run: 2026-07-11 (`docs/research/sentiment/2026-07-11/`). Use it as the reference for tone and depth.

---

## 0. Session setup

1. Read `docs/STATE.md` (what shipped since last run) and the previous run's `briefs.md` (don't re-brief the same pages; note which briefs got built).
2. Confirm you're in `/Users/mt/Desktop/offramp-site` on a branch that deploys (check `git status`; `git pull --rebase` before starting — other agents share branches).
3. Hard laws that bind every brief you write (from `CLAUDE.md` / spec):
   - offrampgold.com allows FIVE content types only: calculator · price table · worth page · thesis page · proof asset. **No blog posts. No listicles.**
   - goldbuyer.io (Phase 2) takes guides; goldvsbitcoin.org takes editorial/comparison essays.
   - Banned customer-facing copy: "unlock the value", "turn clutter into cash", countdown timers, "XRF" (say "an assay you can watch" / "assayed on camera"). "Cash out" only at decision moments. Quoting consumers verbatim in *research docs* is fine — the ban is on OUR copy.

---

## 1. Sources + method

### 1a. Reddit (primary — public JSON endpoints)

Target subreddits: `r/personalfinance`, `r/Gold`, `r/jewelry`, `r/Silverbugs`, `r/povertyfinance`, `r/AskWomenOver30`, plus sitewide search. Also productive: `r/GoldIndia` (diaspora selling culture), city subs (e.g. r/amarillo, r/grandrapids — "best cash-for-gold places?" threads are pure local intent).

Core search queries (rotate/expand each run):
- `"sell gold"` · `"gold estimate"` · `"pawn shop offer"` · `inherited jewelry` · `lowball OR "pawn shop"` · `"cash for gold"` · `"cash for gold" ripoff OR scam` · `pawn jewelry` (in r/povertyfinance) · `sell offered` (in r/jewelry)

URL patterns (public JSON — no login):
```
https://old.reddit.com/r/{sub}/search.json?q={query}&restrict_sr=on&sort=relevance&t=all&limit=25
https://old.reddit.com/search.json?q={query}&sort=relevance&t=all&limit=25        # sitewide
https://old.reddit.com{permalink}.json?sort=top&limit=12                          # thread + comments
```

**Access reality (verified 2026-07-11):** plain `curl` gets 403 ("whoa there, pardner" network-policy block) even with a browser UA; WebFetch and the claude.ai Browser pane are blocked on reddit domains too. **Working method — Playwright MCP:**
1. `browser_navigate` to a normal search page, e.g. `https://www.reddit.com/r/personalfinance/search/?q=%22sell%20gold%22&restrict_sr=1` — this passes Reddit's JS challenge and sets the cookie.
2. Then `browser_evaluate` with same-origin `fetch()` calls to the `.json` endpoints above (relative URLs like `/r/Gold/search.json?...`). Batch several searches per evaluate with ~700ms sleeps between requests. From each result keep: `title`, `permalink`, `score`, `num_comments`, `subreddit`, `created_utc`, `selftext` (first ~300 chars).
3. Pick the 10–15 highest-signal threads and fetch `{permalink}.json?sort=top&limit=12` the same way; keep top ~7 comments each (`author`, `score`, `id`, `body`). Comment permalink = `https://www.reddit.com{permalink}comment/{id}/`.
4. If you save evaluate output via the `filename` param it lands in the repo root — **move it to the scratchpad; never commit raw dumps.**

Review target per run: **30+ real threads/comments** across the searches. Skip obvious noise (video games — RDR2 "sell gold bars", Robinhood Gold, South Park episode threads — though South Park "Cash for Gold" discourse is itself a sentiment signal: the mail-in industry is a cultural punchline).

### 1b. BBB public complaint pages (the big mail-in buyers)

Same Playwright method (BBB loads fine; page is server-rendered — `browser_evaluate` → `document.body.innerText` slices). Known profiles:
- CashforGoldUSA = **CJ Environmental, Inc.**: `https://www.bbb.org/us/ma/canton/profile/precious-metal-dealers/cj-environmental-inc-0021-32441/complaints` (39 complaints/3yr as of 2026-07)
- **Alloy Market, Inc.**: `https://www.bbb.org/us/pa/newtown/profile/precious-metal-dealers/alloy-market-inc-0241-236075033/complaints`
- **Express Gold Cash Inc.**: `https://www.bbb.org/us/ny/salamanca/profile/precious-metal-dealers/express-gold-cash-inc-0041-33000215/complaints`

Add more each run (Luriya, GoldFellow, Worthy, local chains) — find profiles via WebSearch `bbb.org {buyer} complaints`. Record: complaint count / 3yr, complaint types, and verbatim complaint excerpts (they're public). Note the pattern of business responses too — the gap between an A+ rating and the complaint text is itself a content angle.

### 1c. General WebSearch

For recent forum/news chatter, review-site synthesis (Trustpilot/ConsumerAffairs aggregates surface in results), and gold-price-moment context. Useful queries: `{buyer} complaints reviews trustpilot BBB`, `"we buy gold" lowball experience`, `sell gold regret {year}`.

### 1d. First-party: Supabase `question_log` (the Ask Offramp flywheel)

Rows with `content_gap = true` are questions our corpus couldn't answer — direct demand signal. Query via the **Management API only** (never the service key in scripts, and never any client that isn't curl):

```bash
export $(grep SUPABASE_ACCESS_TOKEN .env.local)   # sbp_ token, lives in .env.local
curl -s -X POST "https://api.supabase.com/v1/projects/cbqqtyenksrbhtzfxika/database/query" \
  -H "Authorization: Bearer $SUPABASE_ACCESS_TOKEN" -H "Content-Type: application/json" \
  -d '{"query":"select normalized_q, times_asked, answered_from, first_asked from question_log where content_gap = true order by times_asked desc, first_asked asc limit 100"}'
```
Also pull the counts: `select count(*) filter (where content_gap) as gaps, count(*) as total from question_log`. Columns: `id, normalized_q, first_asked, times_asked, answered_from (corpus|cache|refused), content_gap`. Filter out off-topic tests (pizza, superbowl) and video-game queries; cluster the rest into gap themes.

### 1e. EXPLICIT LIMITS — do not cross

- **No Yelp scraping** (ToS prohibits it). Don't fetch or automate against yelp.com at all.
- **No logged-in Twitter/X scraping.** X sentiment only via what WebSearch surfaces publicly.
- No fabricated or paraphrased-as-verbatim quotes, ever. If you can't link it, it doesn't go in the report.
- Reddit quotes: copy exactly, attribute `u/{author}` + permalink. BBB: quote the public complaint text, link the complaints page.

---

## 2. Output contract (per run)

Create `docs/research/sentiment/YYYY-MM-DD/` containing exactly two files:

### `report.md`
1. **Method line** — what was searched, how many threads/comments reviewed, which BBB profiles, question_log counts.
2. **Themes ranked by frequency** — each theme: name, frequency evidence, 2–5 **verbatim quotes with permalinks**, and what it means for us.
3. **Language patterns** — the words CONSUMERS use (their vocabulary vs industry vocabulary). These become headlines, H2s, FAQ questions, and Ask corpus phrasing.
4. **question_log gap clusters** — first-party gaps mapped to backlog items.
5. **Social-signals section** — quotable stats/moments for the social queue (`docs/social/queue/`): numbers, rants, cultural moments. Each with source link.

### `briefs.md`
3–6 content briefs. Each brief MUST have:
- **Property + legal content type** (offrampgold: worth page / thesis page / price table / calculator / proof asset · goldbuyer.io: guide · gvb: comparison essay)
- **Target keyword** (+ variants), **angle** (one sentence, grounded in a theme), **evidence to cite** (links from report.md), **consumer-language headline candidates** (their words), **funnel stage**, and where it sits vs the STATE.md backlog (net-new vs accelerates an existing backlog item).

## 3. Rules

1. **Never fabricate quotes.** Verbatim + linked or omitted.
2. **Link every claim** — permalink, BBB page, or search-result URL.
3. **Consumer language verbatim is the gold.** Capture how they say it ("what it's worth", "ripped off", "lowball", "melt value") — their words become our headlines.
4. **Route page drafts through the `money-page` skill** when a brief gets built — this playbook produces briefs, not pages.
5. Respect the copy bans (§0.3) in every headline candidate you write.
6. **Commit + push the research folder** (and STATE.md line) same session: `git pull --rebase` first; author must be Michael Tanguma <michael@onrampbitcoin.com>.
7. Update `docs/STATE.md` with a one-line entry (date, run folder, brief count) before the commit.
