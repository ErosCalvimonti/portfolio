// Generates the static pages (index.html and es/index.html) from content.mjs.
// No framework, no runtime JS needed to read the site; main.js only adds the
// theme toggle.
import { mkdirSync, writeFileSync } from "node:fs";
import { site, en, es } from "./content.mjs";

const md = (s) => s.replace(/\*\*(.+?)\*\*/g, "<strong>$1</strong>");
const ext = 'target="_blank" rel="noopener noreferrer"';

const icon = {
  sun: '<svg class="icon-sun" viewBox="0 0 24 24" aria-hidden="true"><g fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"><circle cx="12" cy="12" r="4"/><path d="M12 2v2m0 16v2M4.93 4.93l1.41 1.41m11.32 11.32 1.41 1.41M2 12h2m16 0h2M4.93 19.07l1.41-1.41m11.32-11.32 1.41-1.41"/></g></svg>',
  moon: '<svg class="icon-moon" viewBox="0 0 24 24" aria-hidden="true"><path fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" d="M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8Z"/></svg>',
};

function page(t) {
  const base = t.path ? "../" : "";
  const canonical = site.url + t.path;
  const altLang = t.lang === "en" ? "es" : "en";
  const cv = `${base}${site.cv}`;
  const qp = t.projects.quickpizza;
  const or = t.projects.ordenars;

  return `<!doctype html>
<html lang="${t.lang}">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>${t.title}</title>
<meta name="description" content="${t.description}">
<link rel="canonical" href="${canonical}">
<link rel="alternate" hreflang="${t.lang}" href="${canonical}">
<link rel="alternate" hreflang="${altLang}" href="${site.url + t.altPath}">
<meta property="og:type" content="profile">
<meta property="og:title" content="${t.title}">
<meta property="og:description" content="${t.description}">
<meta property="og:url" content="${canonical}">
<meta property="og:image" content="${site.url}assets/og-dark.png">
<meta name="twitter:card" content="summary_large_image">
<meta name="theme-color" content="#161513">
<link rel="icon" href="${base}assets/favicon.svg" type="image/svg+xml">
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;700&family=Space+Mono:wght@400;700&display=swap" rel="stylesheet">
<link rel="stylesheet" href="${base}styles.css">
<script>try{var s=localStorage.getItem("theme");if(s)document.documentElement.dataset.theme=s}catch(e){}</script>
<script src="${base}main.js" defer></script>
</head>
<body>
<a class="skip" href="#main">${t.lang === "en" ? "Skip to content" : "Ir al contenido"}</a>
<div class="wrap">
<header class="top">
  <a class="logo" href="#top" aria-label="EC/ ${site.name}">EC/</a>
  <nav aria-label="${t.lang === "en" ? "Sections" : "Secciones"}">
    <a href="#experience">${t.nav.experience}</a>
    <a href="#projects">${t.nav.projects}</a>
    <a href="#contact">${t.nav.contact}</a>
  </nav>
  <div class="actions">
    <a class="sq" href="${base}${t.altPath}" hreflang="${altLang}" aria-label="${t.altLabel} · ${t.altName}">${t.altLabel}</a>
    <button class="sq theme" type="button" aria-label="${t.themeLabel}" hidden>${icon.sun}${icon.moon}</button>
  </div>
</header>

<main id="main">
<section class="hero" id="top">
  <p class="where">${t.hero.eyebrow}</p>
  <h1>${site.name}</h1>
  <div class="hero-body">
    <div class="hero-main">
      <p class="role">${t.hero.role}</p>
      <p class="intro">${md(t.hero.lead)}</p>
      <div class="hero-row">
        <a class="btn" href="${cv}" download>${t.cvButton} ↓</a>
        <a class="btn btn-alt" href="mailto:${site.email}">${t.contact.emailLabel}</a>
      </div>
      <ul class="stickers">${t.stickers.map((s) => `<li>${s}</li>`).join("")}</ul>
    </div>
    <img class="me" src="${base}assets/eros.webp" width="480" height="480" alt="${site.name}">
  </div>
</section>

<section id="experience">
  <p class="kicker">${t.experience.kicker}</p>
  <h2 class="sec">${t.experience.title}</h2>
  <ol class="jobs">
${t.experience.items.map((j, i) => `    <li class="box job${i === 0 ? " job-now" : ""}">
      <p class="dates">${j.dates}</p>
      <h3>${j.company}</h3>
      <p class="jrole">${j.role}</p>
      <ul>${j.bullets.map((b) => `<li>${md(b)}</li>`).join("")}</ul>
    </li>`).join("\n")}
  </ol>
</section>

<section id="projects">
  <p class="kicker">${t.projects.kicker}</p>
  <h2 class="sec">${t.projects.title}</h2>
  <article class="box proj proj-pink">
    <p class="tag">${qp.tagline}</p>
    <h3><a href="${qp.repo}" ${ext}>${qp.name}&nbsp;↗</a></h3>
    <p>${md(qp.body)}</p>
    <ul class="chips">${qp.stack.map((s) => `<li>${s}</li>`).join("")}</ul>
    <figure class="shot">
      <figcaption class="shot-bar"><span></span><span></span><span></span>${qp.shotTitle}</figcaption>
      <img src="${base}assets/quickpizza-report.webp" width="1200" height="522" loading="lazy" alt="${qp.shotAlt}">
    </figure>
    <h4>${qp.findingsTitle}</h4>
    <ol class="finds">
${qp.findings.map((f) => `      <li><b>${f.id}</b><span class="sev">${f.sev}</span><p>${f.text}</p></li>`).join("\n")}
    </ol>
    <p class="note">${qp.note}</p>
    <p class="links"><a href="${qp.repo}" ${ext}>${t.projects.code} ↗</a><a href="${qp.repo}/actions" ${ext}>${t.projects.ci} ↗</a></p>
  </article>
  <article class="box proj proj-blue">
    <div>
      <p class="tag">${or.tagline}</p>
      <h3><a href="${or.repo}" ${ext}>${or.name}&nbsp;↗</a></h3>
      <p>${or.body}</p>
      <ul class="nums">${or.stats.map(([n, d]) => `<li><b>${n}</b>${d}</li>`).join("")}</ul>
      <ul class="chips">${or.stack.map((s) => `<li>${s}</li>`).join("")}</ul>
      <p class="links"><a href="${or.repo}" ${ext}>${t.projects.code} ↗</a><a href="${or.repo}/actions" ${ext}>${t.projects.ci} ↗</a></p>
    </div>
    <img src="${base}assets/ordenars.webp" width="360" height="800" loading="lazy" alt="${or.imgAlt}">
  </article>
  <div class="more">
${t.projects.more.map((p) => `    <a class="box" href="${p.url}" ${ext}><b>${p.name}&nbsp;↗</b><span>${p.body}</span></a>`).join("\n")}
  </div>
</section>

<section id="skills">
  <p class="kicker">${t.skills.kicker}</p>
  <h2 class="sec">${t.skills.title}</h2>
  <div class="skills">
${t.skills.groups.map((g) => `    <div><h3>${g.label}</h3><ul class="chips">${g.items.map((x) => `<li>${x}</li>`).join("")}</ul></div>`).join("\n")}
  </div>
  <div class="edu">
    <div class="box">
      <h3>${t.education.title}</h3>
      <ul class="certs">
${t.education.certs.map((c) => `        <li>${c.url ? `<a href="${c.url}" ${ext}>${c.name}</a>` : c.name}<span>${c.issuer}</span></li>`).join("\n")}
      </ul>
    </div>
    <div class="box">
      <h3>${t.education.languagesTitle}</h3>
      <ul class="certs">
${t.education.languages.map(([a, b]) => `        <li>${a}<span>${b}</span></li>`).join("\n")}
      </ul>
    </div>
  </div>
</section>

<section class="box contact" id="contact">
  <p class="kicker">${t.contact.kicker}</p>
  <h2>${t.contact.title}</h2>
  <p>${t.contact.body}</p>
  <p class="hero-row"><a class="btn" href="mailto:${site.email}">${site.email}</a><a class="btn btn-alt" href="${site.linkedin}" ${ext}>LinkedIn</a><a class="btn btn-alt" href="${site.github}" ${ext}>GitHub</a><a class="btn btn-alt" href="${cv}" download>${t.cvButton} ↓</a></p>
</section>
</main>

<footer class="foot">
  <p>© ${site.name}</p>
  <p><a href="${site.repo}/actions" ${ext}>${t.footer.tested}</a> · <a href="${site.repo}" ${ext}>${t.footer.source}</a></p>
</footer>
</div>
</body>
</html>
`;
}

writeFileSync("index.html", page(en));
mkdirSync("es", { recursive: true });
writeFileSync("es/index.html", page(es));
console.log("Built index.html and es/index.html");
