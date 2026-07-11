// Server-side Supabase access. Env-gated: returns null until
// NEXT_PUBLIC_SUPABASE_URL + SUPABASE_SERVICE_ROLE_KEY exist, so every
// consumer must handle the not-configured case gracefully.
//
// Uses the REST endpoint directly (no SDK dependency) — sufficient for
// M1's needs (spot_prices inserts/reads). Swap to @supabase/supabase-js
// in M2 when auth + storage arrive.

const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
const serviceKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

export function isSupabaseConfigured(): boolean {
  return Boolean(url && serviceKey);
}

type Row = Record<string, unknown>;

async function rest(
  path: string,
  init: RequestInit
): Promise<{ ok: boolean; status: number; data: Row[] | null }> {
  if (!url || !serviceKey) return { ok: false, status: 0, data: null };
  const res = await fetch(`${url}/rest/v1/${path}`, {
    ...init,
    headers: {
      apikey: serviceKey,
      Authorization: `Bearer ${serviceKey}`,
      "Content-Type": "application/json",
      Prefer: "return=representation",
      ...init.headers,
    },
  });
  // Void RPCs and Prefer:return=minimal responses have empty bodies.
  const text = res.ok ? await res.text() : "";
  const data = res.ok && text ? (JSON.parse(text) as Row[]) : null;
  return { ok: res.ok, status: res.status, data };
}

export async function insertRow(table: string, row: Row) {
  return rest(table, { method: "POST", body: JSON.stringify(row) });
}

export async function selectRows(table: string, query: string) {
  return rest(`${table}?${query}`, { method: "GET" });
}

/** PATCH rows matching a PostgREST filter query, e.g. `id=eq.<uuid>`. */
export async function updateRows(table: string, query: string, patch: Row) {
  return rest(`${table}?${query}`, { method: "PATCH", body: JSON.stringify(patch) });
}

/** Call a Postgres function via PostgREST, e.g. rpc("search_ask_corpus", { q, n }). */
export async function rpc(fn: string, args: Row) {
  return rest(`rpc/${fn}`, { method: "POST", body: JSON.stringify(args) });
}
