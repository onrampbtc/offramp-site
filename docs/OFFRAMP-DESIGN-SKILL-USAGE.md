# Offramp Design Stack — usage guide

**The master file is `.claude/skills/offramp-design/SKILL.md`** ("offramp-design"). Claude Code auto-loads it in this repo — you never invoke it manually; it triggers on any design/brand/logo/aesthetic work and routes to the right specialist. Six audited skills are installed under `.claude/skills/` (audit log in the master file's appendix):

| Skill | What it's for |
|---|---|
| `offramp-design` | Orchestrator — precedence, gates, aesthetic-status ground truth |
| `impeccable` | Primary design driver + 23 commands + deterministic anti-slop detector |
| `brandkit` | Logo systems, brand-guideline boards, identity decks |
| `high-end-visual-design` | "Expensive/premium" register specialist |
| `redesign-existing-projects` | Audit-first upgrades of existing pages |
| `web-design-guidelines` / `react-best-practices` | Pre-ship a11y/UX and perf gates |

**Ground rule the orchestrator enforces:** Estate Paper is the incumbent, not locked. Skills propose; you pick. Nothing ships to a new direction until you choose it, and once you do, BUILD-SPEC §4 + CLAUDE.md get updated to the new canon.

## How to prompt Claude Code, by job

**Brand direction (start here):**
> "We're rethinking the Offramp brand aesthetic — Estate Paper is the incumbent but I'm not happy with it. Propose 3 distinct art directions for a premium, trustworthy consumer gold-buying brand. For each: 4–6 named hex colors, display/body/utility type pairing, one-sentence layout concept with ASCII wireframe, one signature element. Plans only, no code. Critique each for generic-AI-default tells before showing me."

**Logo & identity (uses brandkit):**
> "Using brandkit, develop 3 logo-system concepts for Offramp — wordmark + symbol, with rationale for the symbolism. Then lay out a brand-guidelines board for my favorite: logo variants, palette, type, one mockup."

**Try a direction on one real page:**
> "We're exploring Direction 2. Apply it to ONLY the homepage on a branch — preserve all routes, data fetching, and legal copy. Screenshot desktop + mobile and self-critique against the direction's tokens. Don't touch other pages."

**Upgrade an existing page without a direction change:**
> "Run redesign-existing-projects on /prices/14k-gold-price-per-gram — audit first, then upgrade to premium quality without breaking functionality."

**Push the premium register harder:**
> "Take another pass on this page with high-end-visual-design leading — calmer, more expensive, more whitespace."

**Live iteration in the browser:**
> "Start /impeccable live on the homepage so we can iterate on the hero together."

**Pre-ship gate (run on everything):**
> "Gate this page: run impeccable detect, the web-design-guidelines review (pinned rules), and react-best-practices. Fix findings, then build + screenshot proof."

**Content pages:** the existing `money-page` skill still owns content production (five content types, keywords, GEO). Prompt it as before ("ship the next page from the backlog"); the design stack gates the visuals of whatever it builds. Until a new direction is chosen, new money pages ship in the incumbent style.

## Maintenance

- **Updating any skill = re-audit.** `npx impeccable update` pulls a fresh bundle — re-skim `.claude/skills/impeccable/scripts/` after. The Vercel/taste-skill copies are pinned; refresh them deliberately from upstream and re-scan.
- impeccable's edit-time hook is installed but **off**; say "turn impeccable hooks on" when you want automatic slop-linting on every UI edit (audited clean).
- Keep `IMPECCABLE_LIVE_COPY_AGENT=off` unless you decide you want live mode's AI-apply (it spawns a bypass-permissions agent).
- Using this stack in the gold-domains satellites repo: copy `.claude/skills/` folders there, or install impeccable the same way.
