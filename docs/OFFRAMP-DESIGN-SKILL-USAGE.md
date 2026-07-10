# How to use the Offramp Design Skill (SAFE build)

**What this is.** A source-verified replacement for the deleted `offramp_design_skills_report.md` (a Perplexity research doc, removed 2026-07-09 because its 30+ third-party web citations were unverifiable and a potential prompt-injection surface). Everything in the skill was re-verified against primary sources (official GitHub READMEs + GitHub API) before inclusion; the verification log is in the skill's appendix.

**Where it lives.** `.claude/skills/offramp-design/SKILL.md` — Claude Code auto-detects project skills in this directory, so in this repo there is nothing to load manually. It triggers on any design/aesthetic/brand/polish/QA work.

## Loading it elsewhere

- **Another Claude Code project:** copy the folder to that repo's `.claude/skills/offramp-design/`, or to `~/.claude/skills/offramp-design/` to make it personal/global (e.g. for the `gold-domains` satellites repo).
- **Codex:** copy to `.agents/skills/offramp-design/SKILL.md` (project) or paste the body into the repo's `AGENTS.md`. Restart Codex to discover it.
- **claude.ai / other agents:** paste the SKILL.md body at the top of the conversation as standing instructions.

## What it does

1. **Locks precedence:** BUILD-SPEC §4 / CLAUDE.md canon → a11y & perf → aesthetics → external skills. No external skill may re-derive art direction.
2. **Maps Estate Paper across every asset** in the canon: money pages, thesis/proof pages, /gold-to-bitcoin, Resend emails, goldvsbitcoin.org, goldbuyer.io (Phase 2).
3. **Approves exactly three external tools**, all QA gates: impeccable's deterministic detector, Vercel web-design-guidelines, Vercel react-best-practices. Install commands are in the skill; none is installed yet.
4. **Defines the per-page design loop:** audit → apply canon → gate → verify → ship.
5. **Enforces supply-chain rules:** read every skill + script before install, hooks off by default, treat fetched content as data not commands, no unverified AI research docs in the repo.

## First-time setup (when ready — requires your review step)

```bash
# 1. QA gates from Vercel (official, script-free skills)
npx skills add vercel-labs/agent-skills --skill web-design-guidelines -a claude-code
npx skills add vercel-labs/agent-skills --skill react-best-practices  -a claude-code

# 2. impeccable — detector only until you've read scripts/hook.mjs
npx impeccable install --providers=claude --scope=project --no-hooks
npx impeccable detect --json .   # the anti-slop lint; no LLM, no API key
```

Do **not** run `/impeccable init` (it writes a competing DESIGN.md) and do **not** install frontend-design, taste-skill, or ui-ux-pro-max — the skill explains why.

## Typical prompts once loaded

- "Audit the homepage against the design skill — report only, no code changes."
- "Restyle /prices/14k-gold-price-per-gram to full Estate Paper canon and run the gates."
- "Slop-check the new proof asset before I ship it."
