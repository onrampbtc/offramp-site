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

// ── Storage (service role — bypasses RLS; bucket stays private) ──────────

/** Upload bytes to a private bucket. Path convention: {leadId|userId}/{uuid}.jpg */
export async function uploadObject(
  bucket: string,
  path: string,
  bytes: Uint8Array,
  contentType: string
): Promise<boolean> {
  if (!url || !serviceKey) return false;
  const res = await fetch(`${url}/storage/v1/object/${bucket}/${path}`, {
    method: "POST",
    headers: {
      apikey: serviceKey,
      Authorization: `Bearer ${serviceKey}`,
      "Content-Type": contentType,
      "x-upsert": "false",
    },
    body: new Blob([bytes as BlobPart]),
  });
  return res.ok;
}

/** Short-expiry signed URL for a private object (display only, never stored). */
export async function signObjectUrl(
  bucket: string,
  path: string,
  expiresInSeconds = 600
): Promise<string | null> {
  if (!url || !serviceKey) return null;
  const res = await fetch(`${url}/storage/v1/object/sign/${bucket}/${path}`, {
    method: "POST",
    headers: {
      apikey: serviceKey,
      Authorization: `Bearer ${serviceKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ expiresIn: expiresInSeconds }),
  });
  if (!res.ok) return null;
  const data = (await res.json()) as { signedURL?: string };
  return data.signedURL ? `${url}/storage/v1${data.signedURL}` : null;
}

// ── Auth (server-side verification of a browser session token) ───────────

export interface AuthUser {
  id: string;
  email: string;
  emailConfirmedAt: string | null;
}

/**
 * Resolve the signed-in user from a route handler's Authorization header.
 * Validates the JWT against GoTrue — never trusts client-supplied ids.
 */
export async function getAuthUser(request: Request): Promise<AuthUser | null> {
  const anonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;
  const bearer = request.headers.get("authorization");
  if (!url || !anonKey || !bearer?.startsWith("Bearer ")) return null;
  const res = await fetch(`${url}/auth/v1/user`, {
    headers: { apikey: anonKey, Authorization: bearer },
    cache: "no-store",
  });
  if (!res.ok) return null;
  const u = (await res.json()) as {
    id?: string;
    email?: string;
    email_confirmed_at?: string;
  };
  if (!u.id || !u.email) return null;
  return {
    id: u.id,
    email: u.email.toLowerCase(),
    emailConfirmedAt: u.email_confirmed_at ?? null,
  };
}
