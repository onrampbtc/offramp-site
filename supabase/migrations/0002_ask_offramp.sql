-- 0002_ask_offramp.sql — Ask Offramp Phase A capture schema
-- Implements docs/ask-offramp/DATA-CORPUS.md §5 (capture schema) + §3
-- (buyer_directory) + ask_corpus (RAG substrate, Phase B).
--
-- NOTE: §5 names its last table `events`, but 0001_init.sql already owns
-- `events` as the generic product-analytics spine (user_id/name/props).
-- The §5 lead-lifecycle table therefore lands as `ask_events` — same
-- columns as the corpus doc, different name to avoid the collision.

create extension if not exists vector;

-- ── leads first (assistant_sessions.email_id references it) ─────────────

create table leads (
  id uuid primary key default gen_random_uuid(),
  email text not null,
  consent_marketing boolean not null default false,
  consent_at timestamptz,
  source_property text not null default 'offramp',
  zip text,
  persona_hints jsonb
);

create index leads_email_idx on leads (email);

-- ── assistant capture spine (DATA-CORPUS §5) ────────────────────────────

create table assistant_sessions (
  id uuid primary key default gen_random_uuid(),
  source_property text not null default 'offramp',
  referrer text,
  zip text,
  started_at timestamptz not null default now(),
  email_id uuid references leads(id)
);

create table assistant_messages (
  id uuid primary key default gen_random_uuid(),
  session_id uuid references assistant_sessions(id),
  role text not null check (role in ('user', 'assistant', 'system')),
  skill text check (skill in ('value', 'learn', 'match')),
  text text,
  confidence numeric,
  cost_cents numeric,
  created_at timestamptz not null default now()
);

create index assistant_messages_session_idx on assistant_messages (session_id);

-- the flywheel table: content_gap drives the weekly /learn ritual
create table question_log (
  id uuid primary key default gen_random_uuid(),
  normalized_q text not null unique,
  first_asked timestamptz not null default now(),
  times_asked int not null default 1,
  answered_from text check (answered_from in ('corpus', 'cache', 'model', 'refused')),
  content_gap boolean not null default false
);

create table lead_items (
  id uuid primary key default gen_random_uuid(),
  lead_id uuid references leads(id),
  kind text,
  karat text,
  est_grams numeric,
  photo_url text,
  provisional_low numeric,
  provisional_high numeric,
  spot_at_estimate numeric,
  created_at timestamptz not null default now()
);

create index lead_items_lead_idx on lead_items (lead_id);

-- §5 `events` (lead lifecycle) — renamed ask_events, see header note
create table ask_events (
  id uuid primary key default gen_random_uuid(),
  lead_id uuid references leads(id),
  type text not null check (type in ('estimate', 'save_to_ledger', 'kit_request', 'consult_booked', 'sold')),
  meta jsonb,
  created_at timestamptz not null default now()
);

create index ask_events_lead_idx on ask_events (lead_id);

-- ── buyer directory (DATA-CORPUS §3, Phase C Match skill) ───────────────

create table buyer_directory (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  kind text check (kind in ('pawn', 'jeweler', 'refiner', 'mail-in')),
  lat double precision,
  lng double precision,
  metro text,
  state text,
  address text,
  phone text,
  hours text,
  google_rating numeric,
  google_reviews_n int,
  site_url text,
  payout_claims jsonb,
  gbs_score numeric,        -- null = "not yet scored by our methodology"
  last_verified timestamptz
);

create index buyer_directory_metro_idx on buyer_directory (metro);
create index buyer_directory_state_idx on buyer_directory (state);

-- ── RAG corpus (DATA-CORPUS §1, Phase B Learn skill) ────────────────────

create table ask_corpus (
  id uuid primary key default gen_random_uuid(),
  source text,
  title text,
  url text,
  chunk text,
  embedding vector(1536),
  updated_at timestamptz not null default now()
);

-- ── Row Level Security: deny anon by default; service role bypasses ─────
-- (RLS enabled with no policies = no anon/authenticated access. All writes
-- go through server route handlers using the service-role key.)

alter table leads enable row level security;
alter table assistant_sessions enable row level security;
alter table assistant_messages enable row level security;
alter table question_log enable row level security;
alter table lead_items enable row level security;
alter table ask_events enable row level security;
alter table ask_corpus enable row level security;

alter table buyer_directory enable row level security;
-- the directory is public content (Match skill reads it client-side later)
create policy "buyer directory is public" on buyer_directory
  for select using (true);
