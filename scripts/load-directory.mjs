// Load docs/ask-offramp/corpus/directory/*.json into buyer_directory.
// Re-runnable: deletes each metro's rows before reinserting, so new metro
// files just land in the same run when they arrive.
//
// Usage: node scripts/load-directory.mjs

import { readFileSync, readdirSync } from "node:fs";
import { join } from "node:path";
import { loadEnv, makeRest } from "./lib-ask.mjs";

const db = makeRest(loadEnv());
const DIR = "docs/ask-offramp/corpus/directory";

let total = 0;
for (const file of readdirSync(DIR).filter((f) => f.endsWith(".json")).sort()) {
  const metro = JSON.parse(readFileSync(join(DIR, file), "utf8"));
  const rows = metro.buyers.map((b) => ({
    name: b.name,
    kind: b.kind ?? null,
    metro: metro.metro,
    state: metro.state,
    address: b.address ?? null,
    phone: b.phone ?? null,
    hours: b.hours ?? null,
    google_rating: b.google_rating ?? null,
    site_url: b.site_url ?? null,
    // Everything evidence-shaped rides in payout_claims jsonb — the honesty
    // overlay (fee disclosure, testing transparency) lives with the claims.
    payout_claims: {
      claims: b.payout_claims ?? null,
      fee_disclosure: b.fee_disclosure ?? null,
      posts_rates: b.posts_rates ?? null,
      testing_transparency: b.testing_transparency ?? null,
      insurance_mentioned: b.insurance_mentioned ?? null,
      evidence_notes: b.evidence_notes ?? null,
      tier: b.tier ?? null,
    },
    gbs_score: null, // "not yet scored by our methodology" until the rubric runs
    last_verified: metro.generated ? `${metro.generated}T00:00:00Z` : null,
  }));
  await db.deleteWhere("buyer_directory", `metro=eq.${encodeURIComponent(metro.metro)}`);
  await db.insertBatch("buyer_directory", rows);
  console.log(`${metro.metro}: ${rows.length} buyers`);
  total += rows.length;
}
console.log(`total: ${total}`);
