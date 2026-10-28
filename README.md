# Eros Calvimonti · Portfolio

[![CI](https://github.com/ErosCalvimonti/portfolio/actions/workflows/ci.yml/badge.svg)](https://github.com/ErosCalvimonti/portfolio/actions/workflows/ci.yml)

Personal site of a QA Automation Engineer / SDET: **https://eroscalvimonti.github.io/portfolio/** ([español](https://eroscalvimonti.github.io/portfolio/es/)).

Static HTML and CSS, no framework. The content of both languages lives in `content.mjs`; `build.mjs` generates `index.html` and `es/index.html`, which GitHub Pages serves as they are. JavaScript only adds the theme toggle; without it the site still renders completely.

## Tested like a product

Every push runs a Playwright suite (desktop and mobile) on GitHub Actions:

- **Accessibility**: axe-core, WCAG 2.1 AA, in light and dark mode
- **Broken links**: in-page anchors, local assets, the CV download and every external link (it also runs weekly so links that die get caught)
- **Layout**: no horizontal scroll on mobile
- **Progressive enhancement**: all content is present with JavaScript disabled
- **Behavior**: language switch, persistent theme toggle, no console errors
- **Consistency**: CI fails if the committed HTML doesn't match `content.mjs`

## Editing

```bash
npm ci
npx playwright install chromium
# edit content.mjs, then:
npm run build
npm test
```

To update the CV, replace `assets/Eros-Calvimonti-CV.pdf`.

The 2024 version of the site is kept in the `legacy-2024` branch and tag `v1-legacy-2024`.
