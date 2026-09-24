/* =========================================================
   Ayinkx · Portfolio — interactions
   Edit the PROJECTS and EXPERIENCE arrays to update content.
   ========================================================= */

const REDUCE = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
const HOVER = window.matchMedia("(hover: hover) and (pointer: fine)").matches;
let PARTICLE_RGB = document.documentElement.getAttribute("data-theme") === "light" ? "14,117,182" : "0,247,255";

/* -------------------- EDITABLE CONTENT -------------------- */

const ROLES = [
  "Backend Developer",
  "API & Automation Builder",
  "Open Source Contributor",
  "Developer Tooling Builder",
];

const PROJECTS = [
  {
    title: "AI Code Assistant",
    desc: "An open-source AI coding assistant and developer tool focused on repository analysis, Stellar/Soroban development workflows, transaction and XDR inspection, RPC/Horizon tooling, contract scaffolding and extensible plugins.",
    icon: "fa-solid fa-robot",
    category: "AI",
    tags: ["Python", "AI", "Stellar", "Soroban"],
    github: "https://github.com/AyinkxLab/ai-code-assistant",
    demo: "",
  },
  {
    title: "Social Autopilot",
    desc: "A backend service for publishing and scheduling content across social platforms, built with FastAPI, SQL, APScheduler, OAuth integrations and Docker.",
    icon: "fa-solid fa-share-nodes",
    category: "Backend",
    tags: ["Python", "FastAPI", "SQL", "Automation"],
    github: "https://github.com/AyinkxLab/social-autopilot",
    demo: "",
  },
  {
    title: "Soroban Security Scanner",
    desc: "A developer and security tooling project for analyzing Stellar Soroban smart contracts and Rust projects — detecting risky patterns and surfacing issues before they ship.",
    icon: "fa-solid fa-shield-halved",
    category: "Security",
    tags: ["Rust", "Security", "Soroban", "Stellar"],
    github: "https://github.com/AyinkxLab/soroban-security-scanner",
    demo: "",
  },
  {
    title: "Stellar DevKit",
    desc: "Developer tooling for building and interacting with Stellar and Soroban applications — RPC, XDR/SCVal inspection, fixtures, analysis and a CLI.",
    icon: "fa-solid fa-toolbox",
    category: "Tooling",
    tags: ["Python", "Stellar", "Soroban", "CLI"],
    github: "https://github.com/StellarFoundry/stellar-devkit",
    demo: "",
  },
  {
    title: "Stellar Contract Platform",
    desc: "Contract intelligence for Stellar and Soroban development — inspection, interface analysis, compatibility checks and deployment verification.",
    icon: "fa-solid fa-cubes",
    category: "Tooling",
    tags: ["Rust", "Stellar", "Soroban", "Tooling"],
    github: "https://github.com/StellarFoundry/stellar-contract-platform",
    demo: "",
  },
  {
    title: "Flask REST API Boilerplate",
    desc: "A reusable backend and API starter project built with Flask — blueprints, configuration, error handling and pytest included.",
    icon: "fa-solid fa-pepper-hot",
    category: "Backend",
    tags: ["Python", "Flask", "REST API", "pytest"],
    github: "https://github.com/Ayinkx/flask-rest-api-boilerplate",
    demo: "",
  },
  {
    title: "Todo CLI",
    desc: "A Python command-line application that demonstrates practical software development fundamentals — clean structure, file persistence and a simple, extensible interface.",
    icon: "fa-solid fa-list-check",
    category: "CLI",
    tags: ["Python", "CLI", "Automation"],
    github: "https://github.com/Ayinkx/todo-cli",
    demo: "",
  },
  {
    title: "Open Source Contributions",
    desc: "Open source is a major part of how I learn and build. I work on practical developer tools, backend systems and blockchain-related tooling — writing useful code, improving documentation, testing features and contributing to real projects.",
    icon: "fa-solid fa-code-branch",
    category: "Open Source",
    tags: ["Open Source", "Collaboration", "Git"],
    github: "https://github.com/Ayinkx?tab=repositories",
    demo: "",
  },
  /* Add more projects here 👇
  {
    title: "Project Name",
    desc: "Short description of what it does and the value it adds.",
    icon: "fa-solid fa-rocket",
    category: "Backend",
    tags: ["Python", "FastAPI", "PostgreSQL"],
    github: "https://github.com/Ayinkx/repo-name",
    demo: "https://live-demo-link.com",
  },
  */
];

const EXPERIENCE = [
  {
    date: "2023 — Present",
    role: "Independent Backend Developer",
    org: "Self-taught · Independent projects",
    desc: "Self-taught developer focused on Python, backend engineering, APIs, automation and open source. Designing and building backend systems, REST APIs and developer tooling with a focus on clean, reliable code.",
    tags: ["Python", "FastAPI", "Flask", "REST API", "SQL"],
  },
  {
    date: "2024 — Present",
    role: "Open Source Contributor",
    org: "GitHub · Remote",
    desc: "Actively contributing to open-source Python and Stellar/Soroban projects — fixing bugs, adding features, improving documentation and collaborating with other developers.",
    tags: ["Open Source", "Git", "Collaboration"],
  },
  {
    date: "2022 — Present",
    role: "Learning Journey",
    org: "Self-taught",
    desc: "Started with Python fundamentals and grew into backend development, APIs, automation, version control, Docker and Linux by building real projects.",
    tags: ["Python", "Docker", "Linux", "Git"],
  },
  {
    date: "2023 — Present",
    role: "Recording Artist & Producer",
    org: "Independent · Ayinkx",
    desc: "Nigerian artist blending love songs, chill vibes and real stories. Released singles like “No Hard Feelings”, “Give It All” and “Suffering” on all major streaming platforms.",
    tags: ["Music", "Songwriting", "Production"],
  },
  {
    date: "2022 — Present",
    role: "Content Creator (Reactions & Streams)",
    org: "@ayinkxreacts",
    desc: "Built an audience around viral reaction videos and live streams — growing a community across Instagram, YouTube, TikTok, Facebook and X.",
    tags: ["Content Creation", "Video", "Community"],
  },
];

/* -------------------- PROJECTS -------------------- */

function renderProjects() {
  const grid = document.getElementById("projectsGrid");
  const filterBar = document.getElementById("filters");
  if (!grid) return;

  const categories = ["All", ...new Set(PROJECTS.map((p) => p.category))];

  filterBar.innerHTML = categories
    .map(
      (c, i) =>
        `<button class="filter${i === 0 ? " active" : ""}" data-filter="${c}">${c}</button>`
    )
    .join("");

  const card = (p, i) => `
    <article class="project reveal" data-category="${p.category}" style="transition-delay:${(i % 3) * 90}ms">
      <div class="project__top">
        <span class="project__icon"><i class="${p.icon}"></i></span>
        <div class="project__links">
          ${p.github ? `<a href="${p.github}" target="_blank" rel="noopener" aria-label="Source code on GitHub"><i class="fa-brands fa-github"></i></a>` : ""}
          ${p.demo ? `<a href="${p.demo}" target="_blank" rel="noopener" aria-label="Live demo"><i class="fa-solid fa-arrow-up-right-from-square"></i></a>` : ""}
        </div>
      </div>
      <span class="project__cat">${escapeHtml(p.category)}</span>
      <h3>${escapeHtml(p.title)}</h3>
      <p>${escapeHtml(p.desc)}</p>
      <div class="project__tags">${p.tags.map((t) => `<span>${escapeHtml(t)}</span>`).join("")}</div>
      <div class="project__cta">
        ${p.github ? `<a href="${p.github}" target="_blank" rel="noopener" class="project__cta-link"><i class="fa-brands fa-github"></i> View Source</a>` : ""}
        ${p.demo ? `<a href="${p.demo}" target="_blank" rel="noopener" class="project__cta-link"><i class="fa-solid fa-arrow-up-right-from-square"></i> Live Demo</a>` : ""}
      </div>
    </article>`;

  grid.innerHTML = PROJECTS.map(card).join("");

  filterBar.addEventListener("click", (e) => {
    const btn = e.target.closest(".filter");
    if (!btn) return;
    filterBar.querySelectorAll(".filter").forEach((b) => b.classList.remove("active"));
    btn.classList.add("active");
    const active = btn.dataset.filter;
    grid.querySelectorAll(".project").forEach((el) => {
      const show = active === "All" || el.dataset.category === active;
      el.style.display = show ? "" : "none";
      if (show) el.classList.add("visible");
    });
  });

  // Pointer glow on cards
  grid.querySelectorAll(".project").forEach((el) => {
    el.addEventListener("pointermove", (e) => {
      const r = el.getBoundingClientRect();
      el.style.setProperty("--mx", `${e.clientX - r.left}px`);
      el.style.setProperty("--my", `${e.clientY - r.top}px`);
    });
  });
}

/* -------------------- TIMELINE -------------------- */

function renderTimeline() {
  const el = document.getElementById("timeline");
  if (!el) return;
  el.innerHTML = EXPERIENCE.map(
    (x) => `
    <div class="tl-item reveal">
      <p class="tl-item__date">${x.date}</p>
      <h3 class="tl-item__role">${x.role}</h3>
      <p class="tl-item__org">${x.org}</p>
      <p>${x.desc}</p>
      <div class="tl-item__tags">${x.tags.map((t) => `<span>${t}</span>`).join("")}</div>
    </div>`
  ).join("");
}

/* -------------------- TYPING EFFECT -------------------- */

function initTyping() {
  const target = document.getElementById("typed");
  if (!target) return;
  let roleIndex = 0;
  let charIndex = 0;
  let deleting = false;

  const tick = () => {
    const current = ROLES[roleIndex];
    target.textContent = current.slice(0, charIndex);

    if (!deleting && charIndex < current.length) {
      charIndex++;
      setTimeout(tick, 80);
    } else if (!deleting) {
      deleting = true;
      setTimeout(tick, 1600);
    } else if (charIndex > 0) {
      charIndex--;
      setTimeout(tick, 40);
    } else {
      deleting = false;
      roleIndex = (roleIndex + 1) % ROLES.length;
      setTimeout(tick, 350);
    }
  };
  tick();
}

/* -------------------- NAV -------------------- */

function initNav() {
  const nav = document.getElementById("nav");
  const toggle = document.getElementById("navToggle");
  const links = document.querySelectorAll(".nav__link");

  const onScroll = () => nav.classList.toggle("scrolled", window.scrollY > 30);
  onScroll();
  window.addEventListener("scroll", onScroll, { passive: true });

  toggle?.addEventListener("click", () => {
    const open = nav.classList.toggle("open");
    toggle.setAttribute("aria-expanded", String(open));
  });

  links.forEach((l) =>
    l.addEventListener("click", () => {
      nav.classList.remove("open");
      toggle?.setAttribute("aria-expanded", "false");
    })
  );

  // Active link on scroll
  const sections = [...document.querySelectorAll("section[id]")];
  const spy = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          links.forEach((l) =>
            l.classList.toggle("active", l.getAttribute("href") === `#${entry.target.id}`)
          );
        }
      });
    },
    { rootMargin: "-45% 0px -50% 0px" }
  );
  sections.forEach((s) => spy.observe(s));
}

/* -------------------- REVEAL + BARS -------------------- */

function initReveal() {
  const items = document.querySelectorAll(".reveal");
  const io = new IntersectionObserver(
    (entries, obs) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        const delay = entry.target.dataset.delay || 0;
        setTimeout(() => entry.target.classList.add("visible"), delay);
        obs.unobserve(entry.target);
      });
    },
    { threshold: 0.15 }
  );
  items.forEach((i) => io.observe(i));
}

/* -------------------- CONTACT FORM -------------------- */

const FORMSPREE_ID = ""; // ✏️ paste your Formspree form ID (e.g. "mqkrwxyz") to enable email delivery

function initForm() {
  const form = document.getElementById("contactForm");
  const note = document.getElementById("formNote");
  if (!form) return;

  form.addEventListener("submit", async (e) => {
    e.preventDefault();
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();

    if (!name || !email || !message) {
      note.textContent = "Please fill in every field.";
      note.classList.add("error");
      return;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      note.textContent = "Please enter a valid email address.";
      note.classList.add("error");
      return;
    }

    note.classList.remove("error");

    if (FORMSPREE_ID) {
      note.textContent = "Sending…";
      try {
        const res = await fetch(`https://formspree.io/f/${FORMSPREE_ID}`, {
          method: "POST",
          headers: { Accept: "application/json", "Content-Type": "application/json" },
          body: JSON.stringify({ name, email, message, _subject: "New message from your portfolio" }),
        });
        if (res.ok) {
          note.textContent = "Thanks! Your message was sent. 🚀";
          form.reset();
        } else {
          note.textContent = "Oops — something went wrong. Please email me directly.";
          note.classList.add("error");
        }
      } catch (err) {
        note.textContent = "Network error. Please email me directly.";
        note.classList.add("error");
      }
      return;
    }

    const subject = encodeURIComponent(`Portfolio contact from ${name}`);
    const body = encodeURIComponent(`${message}\n\n— ${name} (${email})`);
    window.location.href = `mailto:olayinkaawal00@gmail.com?subject=${subject}&body=${body}`;
    note.textContent = "Opening your email app…";
    form.reset();
  });
}

/* -------------------- MISC -------------------- */

function initMisc() {
  const toTop = document.getElementById("toTop");
  window.addEventListener(
    "scroll",
    () => toTop.classList.toggle("show", window.scrollY > 600),
    { passive: true }
  );

  const year = document.getElementById("year");
  if (year) year.textContent = new Date().getFullYear();
}

/* -------------------- MOTION FX -------------------- */

function initScrollProgress() {
  const bar = document.getElementById("scrollProgress");
  if (!bar) return;
  const update = () => {
    const max = document.documentElement.scrollHeight - window.innerHeight;
    bar.style.width = `${max > 0 ? (window.scrollY / max) * 100 : 0}%`;
  };
  update();
  window.addEventListener("scroll", update, { passive: true });
  window.addEventListener("resize", update);
}

function initCursorGlow() {
  const glow = document.getElementById("cursorGlow");
  if (!glow || REDUCE || !HOVER) return;
  window.addEventListener(
    "pointermove",
    (e) => {
      glow.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;
    },
    { passive: true }
  );
}

function initParticles() {
  const canvas = document.getElementById("particles");
  if (!canvas) return;
  const ctx = canvas.getContext("2d");
  let w = 0, h = 0, pts = [], raf = 0, running = false;

  const resize = () => {
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    w = canvas.clientWidth;
    h = canvas.clientHeight;
    canvas.width = w * dpr;
    canvas.height = h * dpr;
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    const count = Math.max(24, Math.min(64, Math.round((w * h) / 24000)));
    pts = Array.from({ length: count }, () => ({
      x: Math.random() * w,
      y: Math.random() * h,
      vx: (Math.random() - 0.5) * 0.35,
      vy: (Math.random() - 0.5) * 0.35,
      r: Math.random() * 1.5 + 0.6,
    }));
  };

  const frame = () => {
    ctx.clearRect(0, 0, w, h);
    for (let i = 0; i < pts.length; i++) {
      const p = pts[i];
      p.x += p.vx;
      p.y += p.vy;
      if (p.x < 0 || p.x > w) p.vx *= -1;
      if (p.y < 0 || p.y > h) p.vy *= -1;
      ctx.beginPath();
      ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(${PARTICLE_RGB},0.6)`;
      ctx.fill();
      for (let j = i + 1; j < pts.length; j++) {
        const q = pts[j];
        const dx = p.x - q.x, dy = p.y - q.y, d2 = dx * dx + dy * dy;
        if (d2 < 16900) {
          ctx.strokeStyle = `rgba(${PARTICLE_RGB},${(1 - d2 / 16900) * 0.22})`;
          ctx.lineWidth = 1;
          ctx.beginPath();
          ctx.moveTo(p.x, p.y);
          ctx.lineTo(q.x, q.y);
          ctx.stroke();
        }
      }
    }
    raf = requestAnimationFrame(frame);
  };

  const start = () => { if (!running) { running = true; frame(); } };
  const stop = () => { running = false; cancelAnimationFrame(raf); };

  resize();
  window.addEventListener("resize", resize);

  if (REDUCE) {
    ctx.clearRect(0, 0, w, h);
    pts.forEach((p) => {
      ctx.beginPath();
      ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(${PARTICLE_RGB},0.5)`;
      ctx.fill();
    });
    return;
  }

  const io = new IntersectionObserver(
    (entries) => entries.forEach((e) => (e.isIntersecting ? start() : stop())),
    { threshold: 0 }
  );
  io.observe(canvas);
  document.addEventListener("visibilitychange", () => (document.hidden ? stop() : start()));
}

function initParallax() {
  if (REDUCE) return;
  const grid = document.querySelector(".hero__grid");
  const canvas = document.getElementById("particles");
  const orbs = document.querySelector(".bg-orbs");
  let ticking = false;
  const update = () => {
    const s = window.scrollY;
    if (s <= window.innerHeight + 200) {
      const t = `translateY(${s * 0.25}px)`;
      if (grid) grid.style.transform = t;
      if (canvas) canvas.style.transform = t;
      if (orbs) orbs.style.transform = `translateY(${s * 0.12}px)`;
    }
    ticking = false;
  };
  window.addEventListener(
    "scroll",
    () => { if (!ticking) { ticking = true; requestAnimationFrame(update); } },
    { passive: true }
  );
}

function initTilt() {
  if (REDUCE || !HOVER) return;
  document.querySelectorAll(".project, .creative__card, .mini-card, .build-card, .building-card").forEach((el) => {
    el.addEventListener("pointermove", (e) => {
      const r = el.getBoundingClientRect();
      el.style.setProperty("--mx", `${e.clientX - r.left}px`);
      el.style.setProperty("--my", `${e.clientY - r.top}px`);
      const px = (e.clientX - r.left) / r.width - 0.5;
      const py = (e.clientY - r.top) / r.height - 0.5;
      el.classList.add("is-tilting");
      el.style.transform = `perspective(900px) rotateX(${(-py * 7).toFixed(2)}deg) rotateY(${(px * 9).toFixed(2)}deg) translateY(-6px)`;
    });
    el.addEventListener("pointerleave", () => {
      el.classList.remove("is-tilting");
      el.style.transform = "";
    });
  });
}

function initMagnetic() {
  if (REDUCE || !HOVER) return;
  document.querySelectorAll(".btn").forEach((btn) => {
    btn.addEventListener("pointermove", (e) => {
      const r = btn.getBoundingClientRect();
      const x = (e.clientX - r.left) / r.width - 0.5;
      const y = (e.clientY - r.top) / r.height - 0.5;
      btn.style.transform = `translate(${x * 10}px, ${y * 8}px)`;
    });
    btn.addEventListener("pointerleave", () => { btn.style.transform = ""; });
  });
}

function initRipple() {
  if (REDUCE) return;
  document.addEventListener("click", (e) => {
    const btn = e.target.closest(".btn");
    if (!btn) return;
    const r = btn.getBoundingClientRect();
    const size = Math.max(r.width, r.height);
    const span = document.createElement("span");
    span.className = "ripple";
    span.style.width = span.style.height = `${size}px`;
    span.style.left = `${e.clientX - r.left - size / 2}px`;
    span.style.top = `${e.clientY - r.top - size / 2}px`;
    btn.appendChild(span);
    setTimeout(() => span.remove(), 620);
  });
}

function animateCount(el, target, suffix = "") {
  if (REDUCE || !target) {
    el.textContent = `${target}${suffix}`;
    return;
  }
  const dur = 1400, t0 = performance.now();
  const step = (t) => {
    const p = Math.min((t - t0) / dur, 1);
    const eased = 1 - Math.pow(1 - p, 3);
    el.textContent = `${Math.round(eased * target)}${suffix}`;
    if (p < 1) requestAnimationFrame(step);
  };
  requestAnimationFrame(step);
}

function observeCounts(selector) {
  const els = [...document.querySelectorAll(selector)].filter((el) => !el.dataset.noCount);
  if (!els.length) return;
  const io = new IntersectionObserver(
    (entries, obs) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        const el = entry.target;
        const target = Number(el.dataset.target ?? el.dataset.count) || 0;
        animateCount(el, target, el.dataset.suffix || "");
        obs.unobserve(el);
      });
    },
    { threshold: 0.5 }
  );
  els.forEach((el) => io.observe(el));
}

function initCounters() {
  observeCounts(".count");
}

function escapeHtml(value) {
  return String(value == null ? "" : value).replace(/[&<>"']/g, (c) => (
    { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]
  ));
}

let ghCache = null;
function loadGitHub() {
  if (!ghCache) {
    ghCache = (async () => {
      const result = { user: null, repos: null };
      const headers = { Accept: "application/vnd.github+json" };
      try {
        const user = await fetch("https://api.github.com/users/Ayinkx", { headers }).then((r) => r.json());
        if (user && !user.message && typeof user.followers === "number") result.user = user;
      } catch (e) { /* offline or rate-limited */ }
      try {
        const repos = await fetch("https://api.github.com/users/Ayinkx/repos?per_page=100&sort=updated", { headers }).then((r) => r.json());
        if (Array.isArray(repos)) result.repos = repos;
      } catch (e) { /* offline or rate-limited */ }
      return result;
    })();
  }
  return ghCache;
}

async function initStats() {
  // A verifiable statistic computed from the project data in this file.
  const projectCount = PROJECTS.filter((p) => p.category !== "Open Source").length;
  const projectsEl = document.getElementById("statProjects");
  if (projectsEl) projectsEl.dataset.target = projectCount;

  const ok = {};
  const set = (id, val) => {
    const el = document.getElementById(id);
    if (el && typeof val === "number" && !Number.isNaN(val)) {
      el.dataset.target = val;
      ok[id] = true;
    }
  };
  const { user, repos } = await loadGitHub();
  if (user) {
    set("statFollowers", user.followers);
    set("statRepos", user.public_repos);
  }
  if (repos) set("statStars", repos.reduce((s, r) => s + (r.stargazers_count || 0), 0));

  ["statFollowers", "statStars", "statRepos"].forEach((id) => {
    if (ok[id]) return;
    const el = document.getElementById(id);
    if (el) {
      el.textContent = "—";
      el.dataset.noCount = "1";
    }
  });
  observeCounts(".stat__val");
}

function repoCard(r) {
  const lang = r.language
    ? `<span><span class="repo-card__lang"></span>${escapeHtml(r.language)}</span>`
    : "";
  return `
    <a class="repo-card" href="${r.html_url}" target="_blank" rel="noopener">
      <div class="repo-card__top"><i class="fa-solid fa-book-bookmark"></i><h3>${escapeHtml(r.name)}</h3></div>
      <p>${escapeHtml(r.description || "No description provided.")}</p>
      <div class="repo-card__meta">
        ${lang}
        <span><i class="fa-solid fa-star"></i> ${Number(r.stargazers_count) || 0}</span>
        <span><i class="fa-solid fa-code-fork"></i> ${Number(r.forks_count) || 0}</span>
      </div>
    </a>`;
}

async function initOpenSource() {
  const grid = document.getElementById("repoGrid");
  if (!grid) return;
  const { user, repos } = await loadGitHub();

  const setStat = (id, val) => {
    const el = document.getElementById(id);
    if (!el) return;
    if (typeof val === "number" && !Number.isNaN(val)) el.dataset.target = val;
    else {
      el.textContent = "—";
      el.dataset.noCount = "1";
    }
  };
  if (user) {
    setStat("osFollowers", user.followers);
    setStat("osRepos", user.public_repos);
  } else {
    setStat("osRepos", null);
    setStat("osFollowers", null);
  }
  if (repos) setStat("osStars", repos.reduce((s, r) => s + (r.stargazers_count || 0), 0));
  else setStat("osStars", null);

  if (repos && repos.length) {
    const selected = repos
      .filter((r) => !r.fork)
      .sort((a, b) => (b.stargazers_count || 0) - (a.stargazers_count || 0))
      .slice(0, 6);
    grid.innerHTML = selected.length
      ? selected.map(repoCard).join("")
      : `<p class="repo-fallback">No public repositories to show yet. <a href="https://github.com/Ayinkx?tab=repositories" target="_blank" rel="noopener">View them on GitHub</a>.</p>`;
  } else {
    grid.innerHTML = `<p class="repo-fallback">Repositories are temporarily unavailable. <a href="https://github.com/Ayinkx?tab=repositories" target="_blank" rel="noopener">View them on GitHub</a>.</p>`;
  }
  observeCounts(".gh-stat__num");
}

function initMarquee() {
  const track = document.getElementById("marqueeTrack");
  if (track) track.innerHTML += track.innerHTML;
}

/* -------------------- TERMINAL -------------------- */

function initTerminal() {
  const term = document.getElementById("terminal");
  if (!term || REDUCE) return;
  const cmdLines = [...term.querySelectorAll(".terminal__line")].filter((n) => n.querySelector(".terminal__cmd"));
  if (!cmdLines.length) return;
  term.classList.add("terminal--anim");

  const revealOutsAfter = (line) => {
    let node = line.nextElementSibling;
    const outs = [];
    while (node && node.classList.contains("terminal__out")) { outs.push(node); node = node.nextElementSibling; }
    return outs;
  };

  let index = 0;
  const next = () => {
    if (index >= cmdLines.length) return;
    const line = cmdLines[index++];
    const cmd = line.querySelector(".terminal__cmd");
    const text = cmd.dataset.line || cmd.textContent;
    cmd.textContent = "";
    let k = 0;
    const type = () => {
      cmd.textContent = text.slice(0, ++k);
      if (k < text.length) { setTimeout(type, 55); return; }
      setTimeout(() => {
        revealOutsAfter(line).forEach((o) => o.classList.add("is-shown"));
        setTimeout(next, 320);
      }, 180);
    };
    type();
  };
  setTimeout(next, 500);
}

/* -------------------- TECH STACK ORBIT -------------------- */

function initStackOrbit() {
  const orbit = document.getElementById("stackOrbit");
  if (!orbit) return;
  const info = document.getElementById("stackInfo");
  const nodes = [...orbit.querySelectorAll(".stack__node")];
  if (!nodes.length) return;
  const defaultHTML = info ? info.innerHTML : "";
  const show = (node) => {
    nodes.forEach((n) => n.classList.toggle("is-active", n === node));
    if (info) info.innerHTML = `<h3>${escapeHtml(node.dataset.tech)}</h3><p>${escapeHtml(node.dataset.desc)}</p>`;
  };
  const reset = () => {
    nodes.forEach((n) => n.classList.remove("is-active"));
    if (info) info.innerHTML = defaultHTML;
  };
  nodes.forEach((node) => {
    node.addEventListener("mouseenter", () => show(node));
    node.addEventListener("focus", () => show(node));
    node.addEventListener("mouseleave", reset);
    node.addEventListener("blur", reset);
    node.addEventListener("click", () => show(node));
  });
}

function initTimelineDraw() {
  const tl = document.getElementById("timeline");
  if (!tl) return;
  const io = new IntersectionObserver(
    (entries, obs) => {
      entries.forEach((e) => {
        if (e.isIntersecting) { tl.classList.add("in-view"); obs.unobserve(tl); }
      });
    },
    { threshold: 0.2 }
  );
  io.observe(tl);
}

/* -------------------- THEME -------------------- */

function currentTheme() {
  return document.documentElement.getAttribute("data-theme") || "dark";
}

function setTheme(t) {
  document.documentElement.setAttribute("data-theme", t);
  try { localStorage.setItem("theme", t); } catch (e) {}
  const meta = document.querySelector('meta[name="theme-color"]');
  if (meta) meta.setAttribute("content", t === "light" ? "#f6f8fb" : "#0D1117");
  const btn = document.getElementById("themeToggle");
  if (btn) btn.innerHTML = t === "light" ? '<i class="fa-solid fa-sun"></i>' : '<i class="fa-solid fa-moon"></i>';
  PARTICLE_RGB = t === "light" ? "14,117,182" : "0,247,255";
}

function initTheme() {
  setTheme(currentTheme());
  const btn = document.getElementById("themeToggle");
  btn?.addEventListener("click", () => setTheme(currentTheme() === "light" ? "dark" : "light"));
}

/* -------------------- LOADER -------------------- */

function initLoader() {
  const loader = document.getElementById("loader");
  if (!loader) return;
  const finish = () => {
    loader.classList.add("done");
    setTimeout(() => loader.remove(), 700);
  };
  if (REDUCE) { finish(); return; }
  setTimeout(finish, 900);
}

/* -------------------- CUSTOM CURSOR -------------------- */

function initCustomCursor() {
  if (REDUCE || !HOVER) return;
  const dot = document.getElementById("cursorDot");
  const ring = document.getElementById("cursorRing");
  if (!dot || !ring) return;
  document.documentElement.classList.add("has-custom-cursor");
  let rx = window.innerWidth / 2, ry = window.innerHeight / 2, tx = rx, ty = ry;
  window.addEventListener(
    "pointermove",
    (e) => {
      tx = e.clientX;
      ty = e.clientY;
      dot.style.transform = `translate(${tx}px, ${ty}px)`;
    },
    { passive: true }
  );
  const loop = () => {
    rx += (tx - rx) * 0.18;
    ry += (ty - ry) * 0.18;
    ring.style.transform = `translate(${rx}px, ${ry}px)`;
    requestAnimationFrame(loop);
  };
  loop();
  document.addEventListener("pointerover", (e) => {
    const t = e.target;
    const interactive = t.closest("a, button, .btn, .cmdk__item, .filter, .stack__node, .repo-card, .project, .build-card, .building-card");
    ring.classList.toggle("is-hover", !!interactive);

    let label = "";
    if (t.closest(".project, .build-card, .building-card")) label = "VIEW";
    else if (t.closest("a[href*='github.com'], .repo-card")) label = "GITHUB";
    else if (t.closest(".btn, button, .filter, .stack__node, .cmdk__item")) label = "OPEN";

    ring.classList.toggle("is-label", !!label);
    if (label) ring.dataset.label = label;
    else ring.removeAttribute("data-label");
  });
}

/* -------------------- COMMAND PALETTE -------------------- */

const goto = (sel) => document.querySelector(sel)?.scrollIntoView({ behavior: "smooth" });
const ext = (url) => window.open(url, "_blank", "noopener");

const CMD_ACTIONS = [
  { icon: "fa-solid fa-house", label: "Home", run: () => goto("#home") },
  { icon: "fa-solid fa-layer-group", label: "What I Build", keywords: "services backend automation tools", run: () => goto("#build") },
  { icon: "fa-solid fa-star", label: "Featured Project", keywords: "ai code assistant", run: () => goto("#featured") },
  { icon: "fa-solid fa-diagram-project", label: "Projects", run: () => goto("#projects") },
  { icon: "fa-solid fa-microchip", label: "Tech Stack", keywords: "skills tools python", run: () => goto("#skills") },
  { icon: "fa-solid fa-code-branch", label: "Open Source", keywords: "github repositories", run: () => goto("#opensource") },
  { icon: "fa-solid fa-user", label: "About", keywords: "bio", run: () => goto("#about") },
  { icon: "fa-solid fa-music", label: "Beyond Code", keywords: "music content spotify creative", run: () => goto("#creative") },
  { icon: "fa-solid fa-comment-dots", label: "Testimonials", keywords: "quotes", run: () => goto("#testimonials") },
  { icon: "fa-solid fa-timeline", label: "Experience", keywords: "journey timeline", run: () => goto("#experience") },
  { icon: "fa-solid fa-satellite-dish", label: "Currently Building", keywords: "progress status active", run: () => goto("#building") },
  { icon: "fa-solid fa-pen-nib", label: "Notes", keywords: "blog articles writing", run: () => goto("#notes") },
  { icon: "fa-solid fa-envelope", label: "Contact", keywords: "email message", run: () => goto("#contact") },
  { icon: "fa-solid fa-file-arrow-down", label: "Download CV", keywords: "resume", run: () => ext("assets/resume.pdf") },
  { icon: "fa-brands fa-spotify", label: "Listen on Spotify", keywords: "music", run: () => ext("https://open.spotify.com/artist/0O1tHOJHa5rUDSIEovYDWK") },
  { icon: "fa-brands fa-youtube", label: "YouTube", run: () => ext("https://youtube.com/@Ayinkx") },
  { icon: "fa-brands fa-github", label: "GitHub", run: () => ext("https://github.com/Ayinkx") },
  { icon: "fa-brands fa-linkedin-in", label: "LinkedIn", run: () => ext("https://www.linkedin.com/in/ayinkx") },
  { icon: "fa-brands fa-instagram", label: "Instagram", keywords: "reactions", run: () => ext("https://www.instagram.com/ayinkxreacts") },
  { icon: "fa-solid fa-circle-half-stroke", label: "Toggle theme", keywords: "dark light mode", run: () => setTheme(currentTheme() === "light" ? "dark" : "light") },
  { icon: "fa-solid fa-copy", label: "Copy email", keywords: "contact", hint: "olayinkaawal00@gmail.com", run: () => navigator.clipboard?.writeText("olayinkaawal00@gmail.com") },
];

function initCommandPalette() {
  const modal = document.getElementById("cmdk");
  const input = document.getElementById("cmdkInput");
  const list = document.getElementById("cmdkList");
  const openBtn = document.getElementById("cmdBtn");
  if (!modal || !input || !list) return;

  let filtered = CMD_ACTIONS.slice();
  let activeIndex = 0;

  const render = () => {
    if (!filtered.length) {
      list.innerHTML = '<li class="cmdk__empty">No results</li>';
      return;
    }
    list.innerHTML = filtered
      .map(
        (a, i) =>
          `<li class="cmdk__item${i === activeIndex ? " active" : ""}" data-index="${i}" role="option"><i class="${a.icon}"></i><span>${a.label}</span>${a.hint ? `<span class="cmdk__hint">${a.hint}</span>` : ""}</li>`
      )
      .join("");
  };
  const open = () => {
    modal.hidden = false;
    input.value = "";
    filtered = CMD_ACTIONS.slice();
    activeIndex = 0;
    render();
    requestAnimationFrame(() => input.focus());
  };
  const close = () => { modal.hidden = true; };
  const run = (i) => { const a = filtered[i]; if (!a) return; close(); a.run(); };

  input.addEventListener("input", () => {
    const q = input.value.toLowerCase().trim();
    filtered = CMD_ACTIONS.filter((a) => `${a.label} ${a.keywords || ""}`.toLowerCase().includes(q));
    activeIndex = 0;
    render();
  });
  input.addEventListener("keydown", (e) => {
    if (e.key === "ArrowDown") { e.preventDefault(); activeIndex = Math.min(activeIndex + 1, filtered.length - 1); render(); }
    else if (e.key === "ArrowUp") { e.preventDefault(); activeIndex = Math.max(activeIndex - 1, 0); render(); }
    else if (e.key === "Enter") { e.preventDefault(); run(activeIndex); }
    else if (e.key === "Escape") close();
  });
  list.addEventListener("click", (e) => {
    const item = e.target.closest(".cmdk__item");
    if (item) run(Number(item.dataset.index));
  });
  modal.querySelectorAll("[data-cmd-close]").forEach((el) => el.addEventListener("click", close));
  openBtn?.addEventListener("click", open);
  document.addEventListener("keydown", (e) => {
    if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === "k") {
      e.preventDefault();
      modal.hidden ? open() : close();
    } else if (e.key === "Escape" && !modal.hidden) {
      close();
    }
  });
}

/* -------------------- INIT -------------------- */

document.addEventListener("DOMContentLoaded", () => {
  renderProjects();
  renderTimeline();
  initTyping();
  initNav();
  initReveal();
  initForm();
  initMisc();
  initScrollProgress();
  initCursorGlow();
  initParticles();
  initParallax();
  initTilt();
  initMagnetic();
  initRipple();
  initCounters();
  initMarquee();
  initTerminal();
  initStackOrbit();
  initTimelineDraw();
  initTheme();
  initLoader();
  initCustomCursor();
  initCommandPalette();
  initStats();
  initOpenSource();
});
