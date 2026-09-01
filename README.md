# Bowale Olufiade — Portfolio

A static portfolio site (plain HTML/CSS/JS, no build step, no Node required)
that pulls its content from Supabase. Anyone can view it at your GitHub
Pages URL — they don't need Claude, an account, or anything installed.

```
portfolio/
├── index.html            # page shell + nav tabs
├── css/styles.css        # all styling (design tokens at the top)
├── js/
│   ├── config.js         # your Supabase URL + anon key go here
│   ├── data.js            # fallback content, used if Supabase isn't set up
│   └── app.js             # fetch + render + tab-switching logic
├── assets/resume.pdf      # the résumé shown/downloaded on the Résumé tab
└── supabase/
    ├── schema.sql          # run once to create the tables
    └── seed.sql            # run once to load the starter content
```

## 1. Try it locally first

You don't need Supabase to see the site — it already works out of the box
using `js/data.js`. Just open `index.html` in a browser, or, for the most
reliable behavior, serve it locally:

```bash
cd portfolio
python3 -m http.server 8000
# visit http://localhost:8000
```

## 2. Set up Supabase (so you can edit content without touching code)

1. Create a free project at [supabase.com](https://supabase.com).
2. Open **SQL Editor** → New query → paste the contents of
   `supabase/schema.sql` → **Run**. This creates the tables and locks
   them to public **read-only** access.
3. New query again → paste `supabase/seed.sql` → **Run**. This loads
   the same content that's already in `js/data.js`.
4. Go to **Project Settings → API**. Copy the **Project URL** and the
   **`anon` `public`** key.
5. Paste both into `js/config.js`:
   ```js
   const SUPABASE_CONFIG = {
     url: "https://your-project.supabase.co",
     anonKey: "eyJhbGciOi..."
   };
   ```
6. Reload the site — it's now pulling live from Supabase.

**Is it safe to put that key in a public GitHub repo?** Yes. The `anon`
key can only ever `SELECT` — `schema.sql` doesn't grant it insert, update,
or delete permissions on anything. To change your content, you sign in
to supabase.com with your own account, which is a completely separate,
private login.

## 3. How to add or edit content going forward

No code, no redeploy — just:

1. Go to your project on supabase.com → **Table Editor**.
2. Pick the table (`experience`, `projects`, `research`, `awards`, etc.)
3. Click **Insert row** to add something new, or click a cell to edit it.
4. Refresh your live site. That's it.

Notes on the field formats:
- **`bullets`** and **`bio`**: type each line/paragraph on its own line
  in the cell — the site splits on line breaks automatically.
- **`tags`**: comma-separated, e.g. `Web app, CSV export`.
- **`order_index`**: controls display order, lowest first. The seed data
  uses 10, 20, 30... so you can insert a `15` between two rows later
  without renumbering everything.
- **`category`** on `projects`: `work` → shows on the Projects tab,
  `personal` → shows on the Personal tab.
- Adding a brand-new *tab* (a 7th category) means editing `index.html`,
  `app.js`, and `styles.css` — that part does need a code change. Say
  the word next time we're in a chat and I'll wire it up.

## 4. Updating your résumé

- **Quick swap**: replace `assets/resume.pdf` with your new file, keeping
  the same filename, and push. The Résumé tab updates automatically.
- Optionally update `resume_updated` in the `profile` table (Supabase)
  so the "current as of" line on the Résumé tab reflects the new date.

## 5. Deploy on GitHub Pages

1. Create a new GitHub repo and push everything in this `portfolio/`
   folder to it (as the repo root).
2. On GitHub: **Settings → Pages → Build and deployment → Source**:
   choose **Deploy from a branch**, branch `main`, folder `/ (root)`.
3. Save. Your site goes live at `https://<your-username>.github.io/<repo-name>/`
   within a minute or two.
4. Every time you `git push` a change to `index.html`/`css`/`js`, the
   live site updates. Content changes through Supabase update instantly
   with **no push needed**.

## 6. Customizing the look

Everything visual is driven by CSS custom properties at the top of
`css/styles.css` under `:root`. Key ones:

| Variable | What it controls |
|---|---|
| `--void` | page background (near-black blue) |
| `--harbor` | panel backgrounds |
| `--signal` / `--signal-brt` | structural blue accents |
| `--brass` / `--brass-soft` | the warm gold accent (buttons, active tab, IDs) |
| `--font-display` | headings (Fraunces) |
| `--font-body` | body text (Inter) |
| `--font-mono` | labels/dates/record IDs (IBM Plex Mono) |

Change a value once, it updates everywhere it's used.

---

Built with a dark navy/black base and a warm brass accent, structured
around "records" (experience, projects, research, awards) styled like
rows in a well-kept spreadsheet — a nod to the Excel/SQL side of things.
