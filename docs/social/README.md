# Social — how this works

1. **Queue:** `docs/social/queue/` holds ready-to-paste drafts, one file per fortnight (`2026-W29.md` = Jul 13–26). Each entry: platform · day · pillar · text · link · image brief. Status flow: `draft` → Michael flips to `approved` → `posted (date)`. Nothing posts from draft.
2. **Playbook:** `docs/playbooks/SOCIAL-MEDIA-PLAYBOOK.md` — voice laws, platform strategy, weekly cadence, rules, and the weekly drafting ritual for a scheduled agent.
3. **Unblock auto-posting:** register **@offrampgold** on X, Instagram, Facebook (Page), and LinkedIn (Company Page) — still open on Michael's checklist in STATE.md.
4. **Then add credentials** (`.env.local` + Vercel, never this repo): X Basic-tier API keys (`X_API_KEY/SECRET`, `X_ACCESS_TOKEN/SECRET`); Meta Graph (`META_PAGE_ID`, `META_IG_USER_ID`, long-lived `META_PAGE_ACCESS_TOKEN` w/ `pages_manage_posts` + `instagram_content_publish`); LinkedIn Community Management API (`LINKEDIN_CLIENT_ID/SECRET`, token w/ `w_organization_social`, `LINKEDIN_ORG_URN`) — or one `BUFFER_ACCESS_TOKEN` covering all. Full detail: playbook §8.
5. **Until then:** weekly agent drafts the queue, Michael approves and copy-pastes manually on the suggested days.
