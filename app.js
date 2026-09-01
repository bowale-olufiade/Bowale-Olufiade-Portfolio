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
      bio: lines(profileRow.bio),
      personal_intro: lines(profileRow.personal_intro),
    } : DEFAULT_DATA.profile,

    education: education || DEFAULT_DATA.education,

    skills: skills
      ? groupSkills(skills)
      : DEFAULT_DATA.skills,

    experience: experience
      ? experience.map(r => ({ ...r, bullets: lines(r.bullets) }))
      : DEFAULT_DATA.experience,

    projects: projects
      ? projects.map(r => ({ ...r, tags: commaList(r.tags) }))
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

/* ==========================================================================
   RENDERERS
   ========================================================================== */

function renderHome(data) {
  document.getElementById("hero-tagline").textContent = data.profile.tagline;

  const bioEl = document.getElementById("bio-content");
  bioEl.innerHTML = data.profile.bio.map(p => `<p>${p}</p>`).join("");

  const emailCta = document.getElementById("email-cta");
  if (data.profile.email) emailCta.href = `mailto:${data.profile.email}`;

  const railLinks = document.getElementById("rail-links");
  railLinks.innerHTML = [
    data.profile.email ? `<a href="mailto:${data.profile.email}">${data.profile.email}</a>` : "",
    data.profile.linkedin_url ? `<a href="${data.profile.linkedin_url}" target="_blank" rel="noopener">LinkedIn ↗</a>` : "",
    data.profile.github_url ? `<a href="${data.profile.github_url}" target="_blank" rel="noopener">GitHub ↗</a>` : "",
  ].join("");

  const eduEl = document.getElementById("education-list");
  eduEl.innerHTML = data.education.map(e => `
    <div class="edu-item">
      <div class="edu-main">
        <div class="edu-inst">${e.institution}</div>
        <div class="edu-deg">${e.degree}${e.note ? " · " + e.note : ""}</div>
      </div>
      <div class="edu-meta">${e.start_date} — ${e.end_date}</div>
    </div>
  `).join("");

  const skillsEl = document.getElementById("skills-list");
  skillsEl.innerHTML = data.skills.map(g => `
    <div class="skill-group">
      <div class="skill-cat">${g.category}</div>
      <div class="skill-tags">${g.items.map(i => `<span class="skill-tag">${i}</span>`).join("")}</div>
    </div>
  `).join("");
}

function recordMeta(r) {
  const end = r.current ? "Present" : r.end_date;
  return `${r.start_date} — ${end}${r.location ? " · " + r.location : ""}`;
}

function renderExperience(data) {
  const el = document.getElementById("experience-list");
  el.innerHTML = data.experience.map((r, i) => `
    <article class="record">
      <div class="record-id">EXP-${String(i + 1).padStart(2, "0")}</div>
      <div>
        <div class="record-head">
          <div>
            <div class="record-title">${r.title}</div>
            <div class="record-org">${r.org}</div>
          </div>
          <div class="record-meta">${recordMeta(r)}</div>
        </div>
        ${r.bullets && r.bullets.length ? `<ul class="record-bullets">${r.bullets.map(b => `<li>${b}</li>`).join("")}</ul>` : ""}
      </div>
    </article>
  `).join("");
}

function projectCard(r, tag) {
  return `
    <article class="record">
      <div class="record-id">${tag}</div>
      <div>
        <div class="record-head">
          <div class="record-title">${r.title}</div>
        </div>
        <p class="record-desc">${r.description}</p>
        ${r.tags && r.tags.length ? `<div class="record-tags">${r.tags.map(t => `<span class="record-tag">${t}</span>`).join("")}</div>` : ""}
        ${r.link_url ? `<a class="record-link" href="${r.link_url}" target="_blank" rel="noopener">${r.link_label || "View"} ↗</a>` : ""}
      </div>
    </article>
  `;
}

function renderProjects(data) {
  const work = data.projects.filter(p => p.category !== "personal");
  document.getElementById("projects-list").innerHTML =
    work.map((r, i) => projectCard(r, `PRJ-${String(i + 1).padStart(2, "0")}`)).join("");
}

function renderPersonal(data) {
  const introEl = document.getElementById("personal-intro");
  introEl.innerHTML = (data.profile.personal_intro || []).map(p => `<p>${p}</p>`).join("");

  const personal = data.projects.filter(p => p.category === "personal");
  document.getElementById("personal-list").innerHTML =
    personal.map((r, i) => projectCard(r, `PER-${String(i + 1).padStart(2, "0")}`)).join("");
}

function renderResearch(data) {
  const el = document.getElementById("research-list");
  el.innerHTML = data.research.map((r, i) => `
    <article class="record">
      <div class="record-id">RES-${String(i + 1).padStart(2, "0")}</div>
      <div>
        <div class="record-head">
          <div>
            <div class="record-title">${r.title}</div>
            <div class="record-org">${r.org}</div>
          </div>
          <div class="record-meta">${r.date_range}</div>
        </div>
        ${r.description ? `<p class="record-desc">${r.description}</p>` : ""}
        ${r.bullets && r.bullets.length ? `<ul class="record-bullets">${r.bullets.map(b => `<li>${b}</li>`).join("")}</ul>` : ""}
      </div>
    </article>
  `).join("");
}

function renderAwards(data) {
  const el = document.getElementById("awards-list");
  el.innerHTML = data.awards.map((r, i) => `
    <article class="record">
      <div class="record-id">AWD-${String(i + 1).padStart(2, "0")}</div>
      <div>
        <div class="record-head">
          <div>
            <div class="record-title">${r.title}</div>
            <div class="record-org">${r.org}</div>
          </div>
          <div class="record-meta">${r.term}</div>
        </div>
      </div>
    </article>
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

  const initial = window.location.hash.replace("#", "");
  const valid = Array.from(views).some(v => v.id === initial);
  activate(valid ? initial : "home", false);
}

/* ==========================================================================
   BOOT
   ========================================================================== */
(async function boot() {
  initNav();
  const data = await loadAllData();
  renderHome(data);
  renderExperience(data);
  renderProjects(data);
  renderPersonal(data);
  renderResearch(data);
  renderAwards(data);
  renderResume(data);
})();
