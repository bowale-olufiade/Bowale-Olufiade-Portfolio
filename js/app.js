/**
 * APP
 * -----------------------------------------------------------------------
 * Loads content from Supabase if configured, otherwise renders the
 * fallback data in js/data.js so the site is never blank. Every render
 * function takes plain objects, so it doesn't matter which source they
 * came from.
 * -----------------------------------------------------------------------
 */

let sb = null;
if (typeof window.supabase !== "undefined" && IS_SUPABASE_CONFIGURED) {
  sb = window.supabase.createClient(SUPABASE_CONFIG.url, SUPABASE_CONFIG.anonKey);
}

/** Fetch a table, ordered by order_index. Returns null on any failure so callers can fall back. */
async function fetchTable(name) {
  if (!sb) return null;
  try {
    const { data, error } = await sb.from(name).select("*").order("order_index", { ascending: true });
    if (error || !data || data.length === 0) return null;
    return data;
  } catch (e) {
    return null;
  }
}

async function fetchProfile() {
  if (!sb) return null;
  try {
    const { data, error } = await sb.from("profile").select("*").limit(1).single();
    if (error || !data) return null;
    return data;
  } catch (e) {
    return null;
  }
}

/** Splits a newline-separated text field into a clean array (used for bullets/paragraphs coming from Supabase text columns). */
function lines(text) {
  if (!text) return [];
  if (Array.isArray(text)) return text;
  return text.split("\n").map(s => s.trim()).filter(Boolean);
}
function commaList(text) {
  if (!text) return [];
  if (Array.isArray(text)) return text;
  return text.split(",").map(s => s.trim()).filter(Boolean);
}
/** Escape text that gets injected into HTML, so an apostrophe or & in a title can't break markup. */
function esc(s) {
  if (s === null || s === undefined) return "";
  return String(s)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

async function loadAllData() {
  const [profileRow, education, skills, experience, projects, research, awards] = await Promise.all([
    fetchProfile(),
    fetchTable("education"),
    fetchTable("skills"),
    fetchTable("experience"),
    fetchTable("projects"),
    fetchTable("research"),
    fetchTable("awards"),
  ]);

  const data = {
    profile: profileRow ? {
      name: profileRow.name,
      tagline: profileRow.tagline,
      location: profileRow.location,
      email: profileRow.email,
      linkedin_url: profileRow.linkedin_url,
      github_url: profileRow.github_url,
      resume_updated: profileRow.resume_updated,
      photo_url: profileRow.photo_url,
      bio: lines(profileRow.bio),
    } : DEFAULT_DATA.profile,

    education: education || DEFAULT_DATA.education,

    skills: skills
      ? groupSkills(skills)
      : DEFAULT_DATA.skills,

    experience: experience
      ? experience.map(r => ({ ...r, bullets: lines(r.bullets) }))
      : DEFAULT_DATA.experience,

    projects: projects
      ? projects.map(r => ({ ...r, tags: commaList(r.tags), image_urls: commaList(r.image_urls) }))
      : DEFAULT_DATA.projects,

    research: research
      ? research.map(r => ({ ...r, bullets: lines(r.bullets) }))
      : DEFAULT_DATA.research,

    awards: awards || DEFAULT_DATA.awards,
  };

  return data;
}

function groupSkills(rows) {
  const groups = {};
  const order = [];
  rows.forEach(r => {
    if (!groups[r.category]) { groups[r.category] = []; order.push(r.category); }
    groups[r.category].push(r.item);
  });
  return order.map(cat => ({ category: cat, items: groups[cat] }));
}

/** Generic "group rows by a field, preserving first-seen order" helper. */
function groupBy(rows, field, fallback) {
  const groups = {};
  const order = [];
  rows.forEach(r => {
    const key = (r[field] && String(r[field]).trim()) || fallback;
    if (!groups[key]) { groups[key] = []; order.push(key); }
    groups[key].push(r);
  });
  return order.map(key => ({ key: key, rows: groups[key] }));
}

/* ==========================================================================
   RENDERERS
   ========================================================================== */

function renderHome(data) {
  document.getElementById("hero-tagline").textContent = data.profile.tagline;

  const bioEl = document.getElementById("bio-content");
  bioEl.innerHTML = data.profile.bio.map(p => `<p>${esc(p)}</p>`).join("");

  const photoEl = document.getElementById("hero-photo");
  if (data.profile.photo_url) {
    photoEl.innerHTML = `<img src="${esc(data.profile.photo_url)}" alt="${esc(data.profile.name || "Portrait")}">`;
  } else {
    photoEl.style.display = "none";
  }

  const emailCta = document.getElementById("email-cta");
  if (data.profile.email) emailCta.href = `mailto:${data.profile.email}`;

  const railLinks = document.getElementById("rail-links");
  railLinks.innerHTML = [
    data.profile.email ? `<a href="mailto:${esc(data.profile.email)}">${esc(data.profile.email)}</a>` : "",
    data.profile.linkedin_url ? `<a href="${esc(data.profile.linkedin_url)}" target="_blank" rel="noopener">LinkedIn ↗</a>` : "",
    data.profile.github_url ? `<a href="${esc(data.profile.github_url)}" target="_blank" rel="noopener">GitHub ↗</a>` : "",
  ].join("");

  const eduEl = document.getElementById("education-list");
  eduEl.innerHTML = data.education.map(e => `
    <div class="edu-item">
      <div class="edu-main">
        <div class="edu-inst">${esc(e.institution)}</div>
        <div class="edu-deg">${esc(e.degree)}${e.note ? " · " + esc(e.note) : ""}</div>
      </div>
      <div class="edu-meta">${esc(dateRange(e.start_date, e.end_date))}</div>
    </div>
  `).join("");

  const skillsEl = document.getElementById("skills-list");
  skillsEl.innerHTML = data.skills.map(g => `
    <div class="skill-group">
      <div class="skill-cat">${esc(g.category)}</div>
      <div class="skill-tags">${g.items.map(i => `<span class="skill-tag">${esc(i)}</span>`).join("")}</div>
    </div>
  `).join("");
}

/**
 * Joins a start and end date with an em dash — but shows just one of them
 * when the other is blank, so Lone Star's "Earned" doesn't render as "— Earned".
 */
function dateRange(start, end) {
  const s = (start || "").trim();
  const e = (end || "").trim();
  if (s && e) return `${s} — ${e}`;
  return s || e || "";
}

function recordMeta(r) {
  const end = r.current ? "Present" : r.end_date;
  const range = dateRange(r.start_date, end);
  return `${range}${r.location ? (range ? " · " : "") + r.location : ""}`;
}

function renderExperience(data) {
  const el = document.getElementById("experience-list");
  el.innerHTML = data.experience.map((r, i) => `
    <article class="record">
      <div class="record-id">EXP-${String(i + 1).padStart(2, "0")}</div>
      <div>
        <div class="record-head">
          <div>
            <div class="record-title">${esc(r.title)}</div>
            <div class="record-org">${esc(r.org)}</div>
          </div>
          <div class="record-meta">${esc(recordMeta(r))}</div>
        </div>
        ${r.bullets && r.bullets.length ? `<ul class="record-bullets">${r.bullets.map(b => `<li>${esc(b)}</li>`).join("")}</ul>` : ""}
      </div>
    </article>
  `).join("");
}

function shotsMarkup(images, title) {
  if (!images || !images.length) return "";
  const cls = images.length === 1 ? "record-shots record-shots--single" : "record-shots";
  return `<div class="${cls}">${images.map((src, n) => `
    <button class="shot" data-full="${esc(src)}" aria-label="Enlarge image ${n + 1} for ${esc(title)}">
      <img src="${esc(src)}" alt="${esc(title)} — image ${n + 1}" loading="lazy">
    </button>
  `).join("")}</div>`;
}

function projectCard(r, tag) {
  return `
    <article class="record">
      <div class="record-id">${esc(tag)}</div>
      <div>
        <div class="record-head">
          <div>
            <div class="record-title">${esc(r.title)}</div>
            ${r.org ? `<div class="record-org">${esc(r.org)}</div>` : ""}
          </div>
          ${r.date_range ? `<div class="record-meta">${esc(r.date_range)}</div>` : ""}
        </div>
        ${r.description ? `<p class="record-desc">${esc(r.description)}</p>` : ""}
        ${r.tags && r.tags.length ? `<div class="record-tags">${r.tags.map(t => `<span class="record-tag">${esc(t)}</span>`).join("")}</div>` : ""}
        ${shotsMarkup(r.image_urls, r.title)}
        ${r.link_url ? `<a class="record-link" href="${esc(r.link_url)}" target="_blank" rel="noopener">${esc(r.link_label || "View")} ↗</a>` : ""}
      </div>
    </article>
  `;
}

/** Friendly heading for each projects subgroup. Unknown values get title-cased. */
const PROJECT_GROUP_LABELS = {
  capstone: "Capstone Projects",
  technical: "Technical Projects",
};
const PROJECT_GROUP_PREFIX = {
  capstone: "CAP",
  technical: "PRJ",
};
const PROJECT_GROUP_ORDER = ["capstone", "technical"];

function renderProjects(data) {
  const rows = data.projects.filter(p => p.category !== "personal");
  const grouped = groupBy(rows, "subgroup", "technical");

  grouped.sort((a, b) => {
    const ai = PROJECT_GROUP_ORDER.indexOf(a.key);
    const bi = PROJECT_GROUP_ORDER.indexOf(b.key);
    return (ai === -1 ? 99 : ai) - (bi === -1 ? 99 : bi);
  });

  document.getElementById("projects-groups").innerHTML = grouped.map(g => {
    const label = PROJECT_GROUP_LABELS[g.key] || g.key;
    const prefix = PROJECT_GROUP_PREFIX[g.key] || "PRJ";
    return `
      <section class="group">
        <p class="group-head">${esc(label)}</p>
        <div class="record-list">
          ${g.rows.map((r, i) => projectCard(r, `${prefix}-${String(i + 1).padStart(2, "0")}`)).join("")}
        </div>
      </section>
    `;
  }).join("");
}

function renderResearch(data) {
  const el = document.getElementById("research-list");
  el.innerHTML = data.research.map((r, i) => {
    const sub = [r.course, r.semester].filter(Boolean).join(" · ");
    const id = `paper-${i}`;
    return `
    <article class="record">
      <div class="record-id">RES-${String(i + 1).padStart(2, "0")}</div>
      <div>
        <div class="record-head">
          <div>
            <div class="record-title">${esc(r.title)}</div>
            ${sub ? `<div class="research-sub">${esc(sub)}</div>` : ""}
            ${r.org ? `<div class="record-org">${esc(r.org)}</div>` : ""}
          </div>
        </div>
        ${r.description ? `
          <p class="research-abstract-label">Abstract</p>
          <p class="research-abstract">${esc(r.description)}</p>
        ` : ""}
        ${r.bullets && r.bullets.length ? `<ul class="research-presented">${r.bullets.map(b => `<li>${esc(b)}</li>`).join("")}</ul>` : ""}
        ${r.paper_url ? `
          <button class="paper-toggle" data-paper="${esc(r.paper_url)}" data-viewer="${id}" aria-expanded="false">
            <span class="chev">+</span><span class="paper-toggle-text">Read the paper</span>
          </button>
          <div class="paper-viewer" id="${id}" hidden></div>
        ` : ""}
      </div>
    </article>
  `;
  }).join("");

  const foot = document.getElementById("research-footnote");
  const email = data.profile.email;
  foot.innerHTML = email
    ? `Papers are available to read here in full. Downloads aren't enabled — if you'd like a copy of any of them, <a href="mailto:${esc(email)}?subject=Request%20for%20a%20copy%20of%20a%20research%20paper">email me</a> and I'll gladly send it over.`
    : `Papers are available to read here in full. Downloads aren't enabled — reach out if you'd like a copy of any of them.`;
}

function renderAwards(data) {
  const grouped = groupBy(data.awards, "group_label", "College");

  document.getElementById("awards-groups").innerHTML = grouped.map(g => `
    <section class="group">
      <p class="group-head">${esc(g.key)}</p>
      <div class="record-list record-list--compact">
        ${g.rows.map((r, i) => `
          <article class="record">
            <div class="record-id">AWD-${String(i + 1).padStart(2, "0")}</div>
            <div>
              <div class="record-head">
                <div>
                  <div class="record-title">${esc(r.title)}</div>
                  <div class="record-org">${esc(r.org)}</div>
                </div>
                <div class="record-meta">${esc(r.term)}</div>
              </div>
            </div>
          </article>
        `).join("")}
      </div>
    </section>
  `).join("");
}

function renderResume(data) {
  const updated = document.getElementById("resume-updated");
  if (data.profile.resume_updated) {
    updated.textContent = `Current as of ${data.profile.resume_updated} — one click to download.`;
  }
  const embed = document.querySelector(".resume-embed");
  const fallback = document.querySelector(".resume-fallback");
  if (embed) {
    embed.addEventListener("error", () => {
      embed.style.display = "none";
      fallback.style.display = "block";
    });
  }
}

/* ==========================================================================
   INTERACTIONS — paper viewers + image lightbox
   ========================================================================== */

/**
 * Paper previews load only when opened. Eight embedded PDFs loading at once
 * would make the Research tab crawl, so each iframe is created on first click.
 * #toolbar=0 hides the built-in download/print buttons in Chrome and Edge.
 */
function initPaperViewers() {
  document.addEventListener("click", e => {
    const btn = e.target.closest(".paper-toggle");
    if (!btn) return;

    const viewer = document.getElementById(btn.dataset.viewer);
    if (!viewer) return;

    const opening = viewer.hasAttribute("hidden");

    if (opening && !viewer.dataset.loaded) {
      const url = btn.dataset.paper + "#toolbar=0&navpanes=0&scrollbar=1&view=FitH";
      viewer.innerHTML = `<iframe src="${url}" title="Paper preview" loading="lazy"></iframe>`;
      viewer.dataset.loaded = "1";
    }

    if (opening) {
      viewer.removeAttribute("hidden");
    } else {
      viewer.setAttribute("hidden", "");
    }

    btn.setAttribute("aria-expanded", String(opening));
    btn.querySelector(".chev").textContent = opening ? "−" : "+";
    btn.querySelector(".paper-toggle-text").textContent = opening ? "Close paper" : "Read the paper";
  });
}

function initLightbox() {
  const box = document.getElementById("lightbox");
  const img = document.getElementById("lightbox-img");
  const close = document.getElementById("lightbox-close");
  if (!box || !img) return;

  function shut() {
    box.setAttribute("hidden", "");
    img.src = "";
    document.body.style.overflow = "";
  }

  document.addEventListener("click", e => {
    const shot = e.target.closest(".shot");
    if (shot) {
      img.src = shot.dataset.full;
      img.alt = shot.querySelector("img") ? shot.querySelector("img").alt : "";
      box.removeAttribute("hidden");
      document.body.style.overflow = "hidden";
      return;
    }
    if (e.target === box || e.target === close) shut();
  });

  document.addEventListener("keydown", e => {
    if (e.key === "Escape" && !box.hasAttribute("hidden")) shut();
  });
}

/* ==========================================================================
   NAV / TABS
   ========================================================================== */
function initNav() {
  const tabs = document.querySelectorAll(".tab");
  const views = document.querySelectorAll(".view");

  function activate(target, updateHash = true) {
    tabs.forEach(t => t.classList.toggle("is-active", t.dataset.target === target));
    views.forEach(v => v.classList.toggle("is-active", v.id === target));
    window.scrollTo({ top: 0, behavior: "auto" });
    if (updateHash) history.replaceState(null, "", `#${target}`);
  }

  tabs.forEach(tab => {
    tab.addEventListener("click", () => activate(tab.dataset.target));
  });

  const wordmark = document.querySelector(".wordmark");
  if (wordmark) {
    wordmark.addEventListener("click", e => { e.preventDefault(); activate("home"); });
  }

  const initial = window.location.hash.replace("#", "");
  const valid = Array.from(views).some(v => v.id === initial);
  activate(valid ? initial : "home", false);
}

/* ==========================================================================
   BOOT
   ========================================================================== */
(async function boot() {
  initNav();
  initPaperViewers();
  initLightbox();
  const data = await loadAllData();
  renderHome(data);
  renderExperience(data);
  renderProjects(data);
  renderResearch(data);
  renderAwards(data);
  renderResume(data);
})();
