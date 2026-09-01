/**
 * SUPABASE CONFIG
 * -----------------------------------------------------------------------
 * 1. Create a free project at https://supabase.com
 * 2. Run supabase/schema.sql in the SQL Editor to create the tables.
 * 3. Run supabase/seed.sql to load starter content (or write your own).
 * 4. Go to Project Settings -> API and copy the "Project URL" and the
 *    "anon public" key (NOT the service_role key — that one is secret
 *    and must never go in a file that's pushed to GitHub).
 * 5. Paste them below.
 *
 * The anon key is safe to publish. Row Level Security (enabled by
 * schema.sql) only lets it read rows, never write, edit, or delete them —
 * that's the point of the "public" key. You'll edit your content by
 * signing in to the Supabase dashboard yourself, not through the site.
 *
 * Until you fill these in, the site runs entirely on the fallback data
 * in js/data.js so it's never broken or blank for a visitor.
 * -----------------------------------------------------------------------
 */
const SUPABASE_CONFIG = {
  url: "https://mvhbtfelhbbvkwnegzhu.supabase.co",
  anonKey: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im12aGJ0ZmVsaGJidmt3bmVnemh1Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODcxOTAxNTAsImV4cCI6MjEwMjc2NjE1MH0.XY7S_11PoIiUe-CU3Kmy1t0pUZpT7zAFPpTVP5BQIJk"
};

const IS_SUPABASE_CONFIGURED =
  SUPABASE_CONFIG.url !== "YOUR_SUPABASE_URL" &&
  SUPABASE_CONFIG.anonKey !== "YOUR_SUPABASE_ANON_KEY" &&
  SUPABASE_CONFIG.url.length > 0 &&
  SUPABASE_CONFIG.anonKey.length > 0;
