"use client";

// Browser-side Supabase client — the Gold Ledger's auth surface.
// Env-gated like the server helper: returns null until
// NEXT_PUBLIC_SUPABASE_URL + NEXT_PUBLIC_SUPABASE_ANON_KEY exist, so the
// ledger UI can render an honest "not configured" state instead of crashing.
//
// Session lives in localStorage (supabase-js default); magic-link tokens in
// the URL fragment are picked up by detectSessionInUrl on /ledger.
//
// KNOWN LIMIT (V1 beta): the project is on Supabase's built-in SMTP, which
// rate-limits auth emails to ~2/hour — fine for the friendlies beta only.
// Production volume unblocks when RESEND_API_KEY exists: in the Supabase
// dashboard → Authentication → Emails → SMTP Settings, point custom SMTP at
// Resend (host smtp.resend.com, user "resend", password = the API key),
// then re-add the 6-digit {{ .Token }} to the magic-link + confirmation
// templates (template edits are blocked on built-in SMTP).

import { createClient, type SupabaseClient } from "@supabase/supabase-js";

let client: SupabaseClient | null | undefined;

export function supabaseBrowser(): SupabaseClient | null {
  if (client !== undefined) return client;
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const anonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;
  client = url && anonKey ? createClient(url, anonKey) : null;
  return client;
}
