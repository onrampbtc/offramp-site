-- 0004_gold_ledger.sql — The Gold Ledger V1 (auth linkage + photo storage)
--
-- RECONCILIATION DECISION (0001 vs 0002 tables):
-- 0001_init.sql (spec §12) owns users/vaults/items/item_photos — the full
-- M4 family-vault product (multi-member vaults, kits, assays, alerts).
-- The V1 Gold Ledger does NOT use those tables. Instead it links Supabase
-- auth.users directly to the 0002 Ask capture tables (leads/lead_items),
-- because the pieces a visitor wants to track already live in lead_items
-- with their estimate context (kind/karat/est_grams/provisional range/
-- spot_at_estimate/photo_url). Copying them into vaults+items would
-- duplicate rows and force vault-membership machinery the V1 loop doesn't
-- need. The 0001 tables stay untouched as the M4 target; when M4 arrives,
-- a promotion path (lead_items → items, ledger → vault) is one migration.
-- "Claim" = a signed-in user whose verified auth email matches leads.email
-- gets user_id stamped onto those leads and their lead_items (server-side,
-- service role, after the email match is checked against auth.users).
--
-- Applied via Supabase Management API on 2026-07-11.

-- ── auth linkage ─────────────────────────────────────────────────────────

alter table leads add column if not exists user_id uuid references auth.users(id);
alter table lead_items add column if not exists user_id uuid references auth.users(id);

create index if not exists leads_user_idx on leads (user_id);
create index if not exists lead_items_user_idx on lead_items (user_id);

-- ── widen ask_events for the ledger lifecycle ────────────────────────────

alter table ask_events drop constraint if exists ask_events_type_check;
alter table ask_events add constraint ask_events_type_check check (
  type in (
    'estimate', 'save_to_ledger', 'kit_request', 'consult_booked', 'sold',
    'ledger_created', 'pieces_claimed', 'ledger_viewed'
  )
);

-- ── RLS: signed-in users see ONLY their own rows ─────────────────────────
-- 0002 left leads/lead_items with RLS enabled and zero policies (anon and
-- authenticated both denied; service role bypasses). These policies open
-- read access to the owning user only. Writes stay server-side (service
-- role) so estimate math and claim checks can't be forged client-side;
-- delete is allowed so a user can remove a piece from their ledger.

create policy "ledger: own leads" on leads
  for select to authenticated using (user_id = auth.uid());

create policy "ledger: own lead items" on lead_items
  for select to authenticated using (user_id = auth.uid());

create policy "ledger: delete own lead items" on lead_items
  for delete to authenticated using (user_id = auth.uid());

-- ── private photo storage ────────────────────────────────────────────────
-- Bucket is PRIVATE; display always goes through short-expiry signed URLs.
-- Upload paths: {leadId}/{uuid}.jpg before auth exists (server-side upload,
-- service role, session-validated) — {userId}/{uuid}.jpg once signed in.

insert into storage.buckets (id, name, public)
values ('ask-photos', 'ask-photos', false)
on conflict (id) do nothing;

-- Own-folder access for signed-in users (first path segment = auth.uid()).
-- Service role bypasses these for the pre-auth {leadId}/ uploads.
create policy "ask-photos: own read" on storage.objects
  for select to authenticated
  using (bucket_id = 'ask-photos' and (storage.foldername(name))[1] = auth.uid()::text);

create policy "ask-photos: own write" on storage.objects
  for insert to authenticated
  with check (bucket_id = 'ask-photos' and (storage.foldername(name))[1] = auth.uid()::text);
