-- =========================================================================
-- MIGRATION — adds the new columns for this portfolio update.
-- Run this ONCE in Supabase: SQL Editor -> New query -> paste -> Run.
--
-- This is additive and safe. It does NOT drop tables or delete any rows.
-- Run this INSTEAD of schema.sql if you already have content in Supabase.
-- =========================================================================

-- Home page portrait
alter table public.profile add column if not exists photo_url text;

-- Projects: capstone/technical grouping, images, and optional org + dates
alter table public.projects add column if not exists subgroup   text default 'technical';
alter table public.projects add column if not exists image_urls text;
alter table public.projects add column if not exists org        text;
alter table public.projects add column if not exists date_range text;

-- Awards: College / High School grouping
alter table public.awards add column if not exists group_label text default 'College';

-- Research: course, semester, and the previewable paper
alter table public.research add column if not exists course    text;
alter table public.research add column if not exists semester  text;
alter table public.research add column if not exists paper_url text;

-- Backfill defaults on any rows that existed before this migration
update public.projects set subgroup    = 'technical' where subgroup is null;
update public.awards   set group_label = 'College'   where group_label is null;
