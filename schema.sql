-- =========================================================================
-- PORTFOLIO SCHEMA
-- Run this once in Supabase: Project -> SQL Editor -> New query -> paste
-- -> Run. Safe to re-run (drops and recreates these specific tables only).
--
-- Design notes:
-- - Multi-line fields (bio, bullets, personal_intro) are stored as plain
--   TEXT with real line breaks, not Postgres arrays. That's on purpose:
--   editing a text box with line breaks in the Supabase Table Editor is
--   far easier than editing an array/jsonb cell. The site splits these
--   into lists automatically (js/app.js).
-- - "tags" on projects is a comma-separated TEXT for the same reason.
-- - order_index controls display order within each table — lower shows
--   first. Leave gaps (10, 20, 30...) if you want room to insert between
--   rows later without renumbering everything.
-- =========================================================================

-- ---- profile (single row) ------------------------------------------------
drop table if exists public.profile cascade;
create table public.profile (
  id                int primary key default 1,
  name              text not null,
  tagline           text,
  location          text,
  email             text,
  linkedin_url      text,
  github_url        text,
  resume_updated    text,          -- e.g. "2026" or "August 2026"
  bio               text,          -- paragraphs separated by a blank line
  personal_intro    text,          -- shown at the top of the Personal tab
  constraint single_row check (id = 1)
);

-- ---- education -------------------------------------------------------------
drop table if exists public.education cascade;
create table public.education (
  id           bigint generated always as identity primary key,
  institution  text not null,
  degree       text,
  note         text,               -- e.g. "GPA 4.0" or "Full-ride scholarship"
  start_date   text,               -- free text: "Aug 2023"
  end_date     text,               -- free text: "May 2025" or "Expected May 2027"
  order_index  int not null default 0
);

-- ---- skills -----------------------------------------------------------------
drop table if exists public.skills cascade;
create table public.skills (
  id           bigint generated always as identity primary key,
  category     text not null,      -- "Technical" | "Language" | "Professional" | your own
  item         text not null,
  order_index  int not null default 0
);

-- ---- experience ---------------------------------------------------------
drop table if exists public.experience cascade;
create table public.experience (
  id           bigint generated always as identity primary key,
  title        text not null,
  org          text,
  location     text,
  start_date   text,
  end_date     text,
  current      boolean default false,   -- true shows "Present" instead of end_date
  bullets      text,               -- one bullet per line
  order_index  int not null default 0
);

-- ---- projects (work + personal, split by category) ----------------------
drop table if exists public.projects cascade;
create table public.projects (
  id           bigint generated always as identity primary key,
  title        text not null,
  description  text,
  link_url     text,
  link_label   text,
  tags         text,               -- comma-separated: "Web app, CSV export"
  category     text not null default 'work',  -- 'work' -> Projects tab, 'personal' -> Personal tab
  order_index  int not null default 0
);

-- ---- research -------------------------------------------------------------
drop table if exists public.research cascade;
create table public.research (
  id           bigint generated always as identity primary key,
  title        text not null,
  org          text,
  date_range   text,
  description  text,
  bullets      text,               -- one bullet per line, optional
  order_index  int not null default 0
);

-- ---- awards -----------------------------------------------------------------
drop table if exists public.awards cascade;
create table public.awards (
  id           bigint generated always as identity primary key,
  title        text not null,
  org          text,
  term         text,               -- e.g. "Spring 2026"
  order_index  int not null default 0
);

-- =========================================================================
-- ROW LEVEL SECURITY
-- Public (anon) can only ever SELECT. There are no insert/update/delete
-- policies below, so the anon key embedded in js/config.js can never be
-- used to change your content — even though it's visible in your public
-- GitHub repo. You edit content by signing in to supabase.com yourself
-- and using the Table Editor (or the SQL Editor), which uses your own
-- authenticated session, not the anon key.
-- =========================================================================
alter table public.profile    enable row level security;
alter table public.education  enable row level security;
alter table public.skills     enable row level security;
alter table public.experience enable row level security;
alter table public.projects   enable row level security;
alter table public.research   enable row level security;
alter table public.awards     enable row level security;

create policy "Public read access" on public.profile    for select using (true);
create policy "Public read access" on public.education  for select using (true);
create policy "Public read access" on public.skills     for select using (true);
create policy "Public read access" on public.experience for select using (true);
create policy "Public read access" on public.projects   for select using (true);
create policy "Public read access" on public.research   for select using (true);
create policy "Public read access" on public.awards     for select using (true);
