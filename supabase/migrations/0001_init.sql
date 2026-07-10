-- Offramp schema v1 — verbatim from docs/BUILD-SPEC.md §12.
-- Apply via Supabase SQL editor or `supabase db push`.

create type vault_role as enum ('owner','member','viewer');
create type item_category as enum ('ring','chain','bracelet','coin','bar','dental','watch','earrings','scrap','other');
create type item_status as enum ('tracked','in_kit','assayed','sold','kept');
create type kit_status as enum ('requested','shipped','delivered','received','assaying','offered','accepted','returned','paid');
create type payout_method as enum ('wire','btc_onramp');
create type alert_rule as enum ('threshold','pct_move','weekly');

create table users (
  id uuid primary key default gen_random_uuid(),
  auth_id uuid unique,              -- supabase auth.users
  email text unique, phone text, full_name text,
  marketing_opt_in boolean default false,
  created_at timestamptz default now());

create table vaults (
  id uuid primary key default gen_random_uuid(),
  name text not null, owner_id uuid references users(id),
  family_signoff boolean default false,
  created_at timestamptz default now());

create table vault_members (
  vault_id uuid references vaults(id), user_id uuid references users(id),
  role vault_role not null, invited_by uuid references users(id),
  joined_at timestamptz default now(), primary key (vault_id, user_id));

create table invites (
  id uuid primary key default gen_random_uuid(),
  vault_id uuid references vaults(id), contact text not null,
  role vault_role default 'member', token text unique not null,
  status text default 'pending', expires_at timestamptz);

create table items (
  id uuid primary key default gen_random_uuid(),
  vault_id uuid references vaults(id), added_by uuid references users(id),
  story_name text, category item_category, status item_status default 'tracked',
  karat_claimed int, weight_g_low numeric, weight_g_high numeric,
  numismatic boolean default false, notes text,
  created_at timestamptz default now());

create table item_photos (
  id uuid primary key default gen_random_uuid(),
  item_id uuid references items(id), storage_path text not null,
  kind text default 'main');

create table spot_prices (
  id bigserial primary key, ts timestamptz default now(),
  gold_usd_oz numeric not null, silver_usd_oz numeric,
  platinum_usd_oz numeric, btc_usd numeric);

create table estimates (
  id uuid primary key default gen_random_uuid(),
  item_id uuid references items(id),
  serial text unique not null,                 -- EST-2026-07341
  model_version text, hallmark_text text, karat_estimate int,
  karat_evidence text, weight_g_low numeric, weight_g_high numeric,
  numismatic_flag boolean, confidence numeric,
  spot_price_id bigint references spot_prices(id),
  payout_rate numeric, usd_low numeric, usd_high numeric,
  raw_response jsonb, created_at timestamptz default now());

create table item_valuations (                 -- nightly job: trends + statements
  item_id uuid references items(id), date date,
  usd_low numeric, usd_high numeric, primary key (item_id, date));

create table alerts (
  id uuid primary key default gen_random_uuid(),
  user_id uuid references users(id), vault_id uuid references vaults(id),
  rule alert_rule not null, value numeric, channel text default 'email',
  active boolean default true);

create table alert_events (
  id bigserial primary key, alert_id uuid references alerts(id),
  fired_at timestamptz default now(), payload jsonb,
  converted_kit_id uuid);

create table kits (
  id uuid primary key default gen_random_uuid(),
  vault_id uuid references vaults(id), user_id uuid references users(id),
  status kit_status default 'requested',
  price_lock_low numeric, price_lock_high numeric, lock_expires_at timestamptz,
  ship_name text, ship_address jsonb, tracking_no text,
  insurance_usd numeric default 25000, created_at timestamptz default now());

create table kit_items ( kit_id uuid references kits(id), item_id uuid references items(id), primary key (kit_id, item_id));

create table assays (
  id uuid primary key default gen_random_uuid(),
  kit_id uuid references kits(id), item_id uuid references items(id),
  video_url text, live_stream_url text,
  xrf_karat numeric, weight_g numeric, melt_usd numeric,
  created_at timestamptz default now());

create table offers (
  id uuid primary key default gen_random_uuid(),
  kit_id uuid references kits(id), total_usd numeric,
  breakdown jsonb, expires_at timestamptz, accepted_at timestamptz);

create table payouts (
  id uuid primary key default gen_random_uuid(),
  offer_id uuid references offers(id), method payout_method,
  usd_amount numeric, btc_bonus_pct numeric default 1.5,
  onramp_ref text, id_verified_at timestamptz, paid_at timestamptz,
  public_ledger boolean default false, ledger_label text);  -- "Class ring, 16.2g 10k"

create table referrals (
  id uuid primary key default gen_random_uuid(),
  referrer_user_id uuid references users(id), kind text,
  converted_user_id uuid references users(id), created_at timestamptz default now());

create table reviews (
  id uuid primary key default gen_random_uuid(),
  payout_id uuid references payouts(id), rating int, body text,
  gbp_synced boolean default false, created_at timestamptz default now());

create table events (                          -- product analytics spine
  id bigserial primary key, user_id uuid, name text, props jsonb,
  ts timestamptz default now());

create table newsletter_subs (
  email text primary key, source text,
  stream text default 'both', status text default 'active',
  created_at timestamptz default now());


-- ── Row Level Security (spec §12 RLS notes) ─────────────────────────────
alter table users enable row level security;
alter table vaults enable row level security;
alter table vault_members enable row level security;
alter table invites enable row level security;
alter table items enable row level security;
alter table item_photos enable row level security;
alter table estimates enable row level security;
alter table kits enable row level security;
alter table kit_items enable row level security;
alter table assays enable row level security;
alter table offers enable row level security;
alter table payouts enable row level security;

create policy "own user row" on users
  for select using (auth_id = auth.uid());

create policy "vault members read vaults" on vaults for select using (
  exists (select 1 from vault_members vm join users u on u.id = vm.user_id
          where vm.vault_id = vaults.id and u.auth_id = auth.uid()));

create policy "vault members read membership" on vault_members for select using (
  exists (select 1 from vault_members vm join users u on u.id = vm.user_id
          where vm.vault_id = vault_members.vault_id and u.auth_id = auth.uid()));

create policy "vault members read items" on items for select using (
  exists (select 1 from vault_members vm join users u on u.id = vm.user_id
          where vm.vault_id = items.vault_id and u.auth_id = auth.uid()));

create policy "vault members read photos" on item_photos for select using (
  exists (select 1 from items i join vault_members vm on vm.vault_id = i.vault_id
          join users u on u.id = vm.user_id
          where i.id = item_photos.item_id and u.auth_id = auth.uid()));

-- Public estimate lookup by serial, PII-stripped (spec §12)
create or replace function public_estimate_by_serial(p_serial text)
returns table (serial text, karat_estimate int, weight_g_low numeric,
               weight_g_high numeric, usd_low numeric, usd_high numeric,
               numismatic_flag boolean, created_at timestamptz)
language sql security definer set search_path = public as $$
  select serial, karat_estimate, weight_g_low, weight_g_high,
         usd_low, usd_high, numismatic_flag, created_at
  from estimates where serial = p_serial;
$$;

-- spot_prices is public read (feeds price pages), service-role write
alter table spot_prices enable row level security;
create policy "spot prices are public" on spot_prices for select using (true);
