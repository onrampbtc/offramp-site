-- 0003_ask_learn.sql — Ask Offramp Phase B (Learn skill)
-- Answer cache + full-text retrieval over ask_corpus + upsert/search RPCs.
--
-- RETRIEVAL NOTE: Phase B ships on Postgres full-text search (tsvector +
-- GIN), not embeddings — no embeddings provider is wired up yet.
-- ask_corpus.embedding stays null for every row; the upgrade path is a
-- Voyage/OpenAI embedding pass that backfills the column and swaps
-- search_ask_corpus() to a pgvector cosine query. Nothing else changes.

-- ── answer cache: the top questions served from DB at $0 ────────────────

create table answer_cache (
  id uuid primary key default gen_random_uuid(),
  normalized_q text unique,
  question text,
  answer text,
  sources jsonb,
  created_at timestamptz not null default now()
);

alter table answer_cache enable row level security;
-- no policies = deny anon/authenticated; service role bypasses.

-- ── full-text search over the corpus ────────────────────────────────────

alter table ask_corpus
  add column chunk_tsv tsvector
  generated always as (
    to_tsvector('english', coalesce(title, '') || ' ' || coalesce(chunk, ''))
  ) stored;

create index ask_corpus_chunk_tsv_idx on ask_corpus using gin (chunk_tsv);

-- Ranked retrieval (PostgREST can't order by ts_rank, so it's an RPC).
create or replace function search_ask_corpus(q text, n int default 6)
returns table (title text, url text, chunk text, source text, rank real)
language sql stable as $$
  select c.title, c.url, c.chunk, c.source,
         ts_rank(c.chunk_tsv, websearch_to_tsquery('english', q)) as rank
  from ask_corpus c
  where c.chunk_tsv @@ websearch_to_tsquery('english', q)
  order by rank desc
  limit n
$$;

-- question_log flywheel upsert: new question inserts, repeat increments.
create or replace function log_question(nq text, answered text, gap boolean)
returns void language sql as $$
  insert into question_log (normalized_q, answered_from, content_gap)
  values (nq, answered, gap)
  on conflict (normalized_q) do update set
    times_asked = question_log.times_asked + 1,
    answered_from = excluded.answered_from,
    content_gap = excluded.content_gap
$$;

-- ── buyer_directory: the researched corpus uses 'dedicated-buyer' ───────

alter table buyer_directory drop constraint buyer_directory_kind_check;
alter table buyer_directory add constraint buyer_directory_kind_check
  check (kind in ('pawn', 'jeweler', 'refiner', 'mail-in', 'dedicated-buyer'));
