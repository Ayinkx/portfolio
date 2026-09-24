/* =========================================================
   Ayinkx · Portfolio — interactions
   Edit the PROJECTS and EXPERIENCE arrays to update content.
   ========================================================= */

/* -------------------- EDITABLE CONTENT -------------------- */

const ROLES = [
  "Python Developer",
  "Backend Developer",
  "Open Source Contributor",
  "Flask & REST API Enthusiast",
  "Automation Builder",
];

const PROJECTS = [
  {
    title: "Flask REST API Boilerplate",
    desc: "A minimal, clean and tested starting point for building production-ready REST APIs with Flask and pytest.",
    icon: "fa-solid fa-pepper-hot",
    category: "Backend",
    tags: ["Python", "Flask", "REST API", "pytest"],
    github: "https://github.com/Ayinkx/flask-rest-api-boilerplate",
    demo: "",
  },
  {
    title: "Todo CLI",
    desc: "A simple, dependency-free command-line todo list written in pure Python — fast, portable and easy to extend.",
    icon: "fa-solid fa-list-check",
    category: "CLI",
    tags: ["Python", "CLI", "Automation"],
    github: "https://github.com/Ayinkx/todo-cli",
    demo: "",
  },
  {
    title: "Open Source Contributions",
    desc: "Contributing to open-source Python and Stellar/Soroban projects — bug fixes, new features and collaboration.",
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
    date: "2024 — Present",
    role: "Open Source Contributor",
    org: "GitHub · Remote",
    desc: "Contributing to open-source Python and Stellar/Soroban projects — fixing bugs, adding features and collaborating with other developers.",
    tags: ["Open Source", "Git", "Collaboration"],
  },
  {
    date: "2023 — Present",
    role: "Backend Developer (Self-taught)",
    org: "Freelance / Personal projects",
    desc: "Designing and building Flask REST APIs, automation scripts and backend services with a focus on clean, reliable code.",
    tags: ["Python", "Flask", "REST API", "SQL"],
  },
  {
    date: "2022 — Present",
    role: "Learning Journey",
    org: "Self-taught",
    desc: "Started with Python fundamentals and grew into backend development, version control, Docker and Linux.",
    tags: ["Python", "Docker", "Linux", "Git"],
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

  const card = (p) => `
    <article class="project reveal" data-category="${p.category}">
      <div class="project__top">
        <span class="project__icon"><i class="${p.icon}"></i></span>
        <div class="project__links">
          ${p.github ? `<a href="${p.github}" target="_blank" rel="noopener" aria-label="Source code"><i class="fa-brands fa-github"></i></a>` : ""}
          ${p.demo ? `<a href="${p.demo}" target="_blank" rel="noopener" aria-label="Live demo"><i class="fa-solid fa-arrow-up-right-from-square"></i></a>` : ""}
        </div>
      </div>
      <h3>${p.title}</h3>
      <p>${p.desc}</p>
      <div class="project__tags">${p.tags.map((t) => `<span>${t}</span>`).join("")}</div>
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

  // Skill bars
  const bars = document.querySelectorAll(".bar");
  if (!bars.length) return;
  const barIo = new IntersectionObserver(
    (entries, obs) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        const bar = entry.target;
        const level = bar.dataset.level || 0;
        bar.querySelector(".bar__fill").style.width = `${level}%`;
        obs.unobserve(bar);
      });
    },
    { threshold: 0.4 }
  );
  bars.forEach((b) => barIo.observe(b));
}

/* -------------------- CONTACT FORM -------------------- */

function initForm() {
  const form = document.getElementById("contactForm");
  const note = document.getElementById("formNote");
  if (!form) return;

  form.addEventListener("submit", (e) => {
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

    const subject = encodeURIComponent(`Portfolio contact from ${name}`);
    const body = encodeURIComponent(`${message}\n\n— ${name} (${email})`);
    window.location.href = `mailto:olayinkaawal00@gmail.com?subject=${subject}&body=${body}`;

    note.classList.remove("error");
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

/* -------------------- INIT -------------------- */

document.addEventListener("DOMContentLoaded", () => {
  renderProjects();
  renderTimeline();
  initTyping();
  initNav();
  initReveal();
  initForm();
  initMisc();
});
