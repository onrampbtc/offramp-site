# Design skills — provenance & how to use here

**Source:** https://github.com/emilkowalski/skills (Emil Kowalski — Sonner/Vaul author, ex-Vercel/Linear). MIT licensed, LICENSE retained.
**Snapshot:** commit `f76bece`, vendored 2026-07-10 after a full security audit (5 Markdown files, no executable code, no prompt injection, no hidden Unicode — clean).

**Purpose in this repo:** reference material for UI polish and animation decisions when building content-marketing surfaces (calculators, price tables, worth pages, proof assets). Treat as taste guidance, not canon.

**Precedence:** BUILD-SPEC v1.1 hard laws always win. In particular:
- Estate Paper system (spec §4): **no shimmer, glow, or pulse** — the animation-vocabulary glossary lists Skeleton/Shimmer and Pulse as techniques; those are banned here.
- All numbers stay DM Mono `tabular-nums` (the skills agree — see "Tabular numbers").
- `prefers-reduced-motion` guidance here is compatible with spec and should be followed.

What transfers well: easing/duration tables, `ease-out` on entrances, sub-300ms UI motion, origin-aware popovers, GPU-only properties, the review-animations checklist for any animated component we ship.

A sibling copy for use outside this repo lives at `~/Desktop/design-skills-emilkowalski/`.
