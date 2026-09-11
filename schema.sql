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
  resume_updated    text,          -- e.g. "September 10, 2026"
  photo_url         text,          -- e.g. "assets/photo.jpg" — shown on the Home tab
  bio               text,          -- paragraphs separated by a blank line
  constraint single_row check (id = 1)
);

-- ---- education -------------------------------------------------------------
drop table if exists public.education cascade;
create table public.education (
  id           bigint generated always as identity primary key,
  institution  text not null,
  degree       text,
  note         text,               -- e.g. "GPA 3.9"
  start_date   text,               -- free text: "Aug 2023" (leave blank to show end_date alone)
  end_date     text,               -- free text: "Expected Dec 2027" or "Earned"
  order_index  int not null default 0
);

-- ---- skills -----------------------------------------------------------------
drop table if exists public.skills cascade;
create table public.skills (
  id           bigint generated always as identity primary key,
  category     text not null,      -- "Language" | "Data & Analytics" | "Tools" | "Professional"
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

-- ---- projects (capstone + technical, split by subgroup) -----------------
drop table if exists public.projects cascade;
create table public.projects (
  id           bigint generated always as identity primary key,
  title        text not null,
  org          text,               -- optional: institution or client
  date_range   text,               -- optional: e.g. "Sept 2025 – Nov 2025"
  description  text,
  link_url     text,
  link_label   text,
  tags         text,               -- comma-separated: "Web app, CSV export"
  image_urls   text,               -- comma-separated paths: "assets/a.jpg, assets/b.jpg"
  subgroup     text not null default 'technical',  -- 'capstone' | 'technical'
  category     text not null default 'work',
  order_index  int not null default 0
);

-- ---- research -------------------------------------------------------------
drop table if exists public.research cascade;
create table public.research (
  id           bigint generated always as identity primary key,
  title        text not null,
  course       text,               -- e.g. "HISTH 1302: U.S. History II Honors"
  semester     text,               -- e.g. "Fall 2023"
  org          text,               -- e.g. "Lone Star College-CyFair, Honors College"
  date_range   text,               -- optional, unused by default
  description  text,               -- the paper's abstract
  bullets      text,               -- one per line: conference presentations, selections
  paper_url    text,               -- e.g. "assets/research/my-paper.pdf"
  order_index  int not null default 0
);

-- ---- awards -----------------------------------------------------------------
drop table if exists public.awards cascade;
create table public.awards (
  id           bigint generated always as identity primary key,
  title        text not null,
  org          text,
  term         text,               -- e.g. "Spring 2026"
  group_label  text not null default 'College',  -- 'College' | 'High School'
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
