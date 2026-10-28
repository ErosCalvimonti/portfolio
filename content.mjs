// All site copy lives here. Edit this file and run `npm run build`.
// **text** renders as <strong>.

export const site = {
  name: "Eros Calvimonti",
  email: "karielcode@gmail.com",
  url: "https://eroscalvimonti.github.io/portfolio/",
  github: "https://github.com/ErosCalvimonti",
  linkedin: "https://www.linkedin.com/in/eroscalvimonti/",
  cv: "assets/Eros-Calvimonti-CV.pdf",
  repo: "https://github.com/ErosCalvimonti/portfolio",
};

const quickpizzaRepo = "https://github.com/ErosCalvimonti/playwright-k6-quickpizza";
const ordenarsRepo = "https://github.com/ErosCalvimonti/OrdenARS";

const skillGroups = (labels) => [
  { label: labels[0], items: ["Playwright", "Cypress", "Selenium", "Appium", "WebdriverIO", "Cucumber / BDD"] },
  { label: labels[1], items: ["TypeScript", "JavaScript / Node.js", "Java", "Python", "Kotlin", "SQL"] },
  { label: labels[2], items: ["Postman", "RestAssured", "k6", "JMeter"] },
  { label: labels[3], items: ["GitHub Actions", "Jenkins", "Azure DevOps", "Docker", "BrowserStack"] },
  { label: labels[4], items: ["Jira / Xray / TestRail", "Scrum", "Agentic AI workflows"] },
];

const certs = [
  { name: "Technical Degree in Programming", issuer: "Teclab Institute", url: "https://www.linkedin.com/in/eroscalvimonti/overlay/Education/1139714162/treasury/?profileId=ACoAAEhCjTMBSrVZSUoJAyjoOcZQOPCvygjpPWM" },
  { name: "GitHub Foundations", issuer: "GitHub", url: "https://www.credly.com/badges/4b50c7f8-48bb-42df-abca-7dec54aed6fc/linked_in?t=sixng6" },
  { name: "Accredited Scrum Fundamentals Certification (ASFC)", issuer: "AICS" },
  { name: "Playwright: Web Automation Testing From Zero to Hero", issuer: "Udemy" },
  { name: "Cypress: Web Automation Testing", issuer: "Udemy", url: "https://www.udemy.com/certificate/UC-c8265aba-43d4-447e-b202-c30c587cc4a7/" },
  { name: "Selenium with Java", issuer: "Udemy", url: "https://udemy-certificate.s3.amazonaws.com/pdf/UC-7f9780b4-225b-41c4-a728-53146dfbaeba.pdf" },
  { name: "Software Testing with Jira & Agile", issuer: "Udemy", url: "https://www.udemy.com/certificate/UC-a6785e3e-7173-4480-b6dd-eee126af2ffa/" },
  { name: "SQL", issuer: "Udemy", url: "https://www.udemy.com/certificate/UC-e2798cd6-caa3-402b-9edb-c84950d46d27/" },
  { name: "Programación para Testers", issuer: "Udemy", url: "https://www.udemy.com/certificate/UC-da967bd0-3a87-4215-a6a2-8fab6b22e9f6/" },
  { name: "Python", issuer: "Universidad Blas Pascal" },
  { name: "Java Course", issuer: "Udemy", url: "https://www.udemy.com/certificate/UC-3147930b-ba3c-4cf7-8f4c-6560e197b5f2/" },
  { name: "20 días de QA en Apps Descentralizadas", issuer: "AcademiaQA" },
];

export const en = {
  lang: "en",
  path: "",
  altPath: "es/",
  altLabel: "ES",
  altName: "Ver en español",
  title: "Eros Calvimonti | QA Automation Engineer / SDET",
  description: "QA Automation Engineer / SDET with 5+ years testing web, mobile and API products. Playwright + TypeScript, CI/CD, performance testing with k6.",
  nav: { experience: "Experience", projects: "Projects", skills: "Skills", contact: "Contact" },
  themeLabel: "Toggle dark mode",
  cvButton: "Download CV",
  hero: {
    eyebrow: "Argentina · Remote",
    role: "QA Automation Engineer / SDET",
    lead: "I build test automation that teams can trust. 5+ years testing web, mobile and API products in fintech, digital health and e-commerce, mostly with **Playwright and TypeScript** running in **CI/CD**.",
    primary: "Download CV",
    secondary: "See my work",
    terminal: {
      command: "npx playwright test profile.spec.ts",
      running: "Running 5 tests using 1 worker",
      checks: [
        "5+ years testing web, mobile & APIs",
        "Playwright + TypeScript, day to day",
        "Flaky tests cut by ~40% at Fintexa",
        "3 real defects found in QuickPizza",
        "Agentic AI in testing, human-reviewed",
      ],
      result: "5 passed",
    },
  },
  experience: {
    title: "Experience",
    kicker: "Where I've worked",
    items: [
      {
        company: "Coredio", role: "QA Engineer | SDET", dates: "Nov 2025 – Present",
        bullets: [
          "Write end-to-end tests for web dashboards with **Playwright** and run them across browsers.",
          "Build and maintain automated test suites for the **iOS and Android** apps.",
          "Test **REST APIs**: JSON schemas, authentication flows and data integrity.",
          "Integrated **agentic AI workflows** into test development (scaffolding, test data, edge cases, failure triage), with human review before every merge.",
          "Test the product's **AI-powered features**, validating response consistency and edge-case handling.",
        ],
      },
      {
        company: "Fintexa", role: "SDET | QA Engineer", dates: "Oct 2024 – Nov 2025",
        bullets: [
          "Built and maintained **Playwright + TypeScript** frameworks for the main fintech flows (payments, credit approvals); reworked waits and synchronization and **cut flaky tests by about 40%**.",
          "Tested **digital wallet and onboarding** features on web and mobile (iOS via TestFlight, Android).",
          "Ran the regression suites in the **CI/CD pipeline** before every release.",
          "Tested APIs and validated data with **SQL**; used **JMeter** to check API behavior under load.",
          "Worked with backend developers to track down integration bugs around retries and **payment data consistency**.",
        ],
      },
      {
        company: "UPEX", role: "SDET | QA Automation", dates: "Oct 2022 – Oct 2024",
        bullets: [
          "Built test automation frameworks with **Playwright, Selenium and Mocha** for UI and API tests.",
          "Tested **Web3** projects: dApps, wallets and blockchain transactions.",
          "Validated backend logic with **SQL** and helped improve CI/CD and the QA process in a Scrum team.",
        ],
      },
      {
        company: "uTest", role: "QA Tester (Freelance)", dates: "Feb 2023 – Jul 2024",
        bullets: [
          "Ran test cycles for **e-commerce** sites (Shopify, Magento) and other apps on Windows, iOS and Android across browsers.",
          "Reported functional, content, performance and visual bugs with clear reproduction steps.",
        ],
      },
      {
        company: "With Ela Studio", role: "Web Developer", dates: "Jan 2021 – Feb 2022",
        bullets: [
          "Built responsive websites with **HTML, CSS and JavaScript** and wrote **Cypress** tests for front-end logic.",
          "Tested every release (functional, exploratory, performance) and **improved performance by about 30%**.",
        ],
      },
    ],
  },
  projects: {
    title: "Projects",
    kicker: "Things I built and tested",
    code: "Code",
    ci: "CI runs",
    featured: "Featured",
    quickpizza: {
      name: "QuickPizza test suite",
      tagline: "Playwright + k6 against Grafana's demo app",
      body: "API, UI and performance suite for QuickPizza. Playwright + TypeScript with Page Objects and fixtures on Chromium and Firefox; k6 smoke and load tests with per-endpoint p95/p99 thresholds. Everything runs on **GitHub Actions** against a disposable container, so results never depend on a shared host.",
      stack: ["Playwright", "TypeScript", "k6", "GitHub Actions", "Docker"],
      findingsTitle: "Bugs I found, confirmed in the source code",
      headers: ["ID", "Severity", "Finding"],
      findings: [
        { id: "F-01", sev: "Medium", sevKey: "med", text: "“Calories per slice” ignores the dough, so a stuffed-crust pizza looks 300 kcal lighter than it is." },
        { id: "F-02", sev: "High", sevKey: "high", text: "<code>maxCaloriesPerSlice</code> is not enforced: after 10 retries the API returns a pizza that breaks the limit, with <code>200 OK</code>." },
        { id: "F-03", sev: "Low · a11y", sevKey: "low", text: "Three inputs share one <code>id</code>, so every <code>&lt;label for&gt;</code> points to the first. Screen readers can't tell them apart." },
      ],
      note: "Known bugs are marked <code>test.fail()</code> instead of skipped: they stay visible in every run and turn red the day they're fixed.",
      shotTitle: "Playwright report · latest CI run",
      shotAlt: "Playwright HTML report from the QuickPizza CI run: 24 tests passed, 0 failed, 0 flaky, in 11.3 seconds",
      repo: quickpizzaRepo,
    },
    ordenars: {
      name: "OrdenARS",
      tagline: "Android expense tracker in Kotlin",
      body: "Offline Android app that records expenses automatically from the notifications of 24 Argentine banks and wallets, categorizes them and sends budget alerts. Jetpack Compose, MVVM + Clean Architecture, Room, Hilt and Flow.",
      stats: [["50", "unit tests on CI"], ["3", "bugs caught by tests"], ["24", "banks & wallets parsed"]],
      stack: ["Kotlin", "Jetpack Compose", "Room", "Hilt", "JUnit + MockK"],
      imgAlt: "OrdenARS home screen showing monthly spending by category",
      repo: ordenarsRepo,
    },
    more: [
      { name: "Cypress + GitHub Actions", body: "Cypress suite with Page Object Model for a calendar app, running on every push and PR with failure alerts.", stack: ["Cypress", "POM", "GitHub Actions"], url: "https://github.com/ErosCalvimonti/challenge-qa" },
      { name: "E2E with Cypress & Cucumber", body: "E2E framework for the OpenCart e-commerce platform written in Gherkin, covering the critical UI flows.", stack: ["Cypress", "Cucumber", "BDD"], url: "https://github.com/ErosCalvimonti/cypress-project" },
      { name: "Mobile automation", body: "Key app flows automated with WebdriverIO and Appium, running across several Android devices on BrowserStack.", stack: ["Appium", "WebdriverIO", "BrowserStack"], url: "https://github.com/ErosCalvimonti/automatizacion-bs-appium" },
    ],
  },
  stickers: ["5+ years", "Playwright + TypeScript", "Web · Mobile · API"],
  game: {
    kicker: "Play #2",
    title: "Can you find the bugs?",
    noscript: "This little game needs JavaScript. Everything else on the page works without it.",
  },
  skills: {
    title: "Skills",
    kicker: "Tools I use",
    groups: skillGroups(["Test automation", "Programming languages", "API & performance", "CI/CD & tooling", "Process"]),
  },
  education: {
    title: "Education & certifications",
    certs,
    languagesTitle: "Spoken languages",
    languages: [["English", "Upper-intermediate"], ["Spanish", "Native"]],
  },
  contact: {
    title: "Let's talk",
    kicker: "Contact",
    body: "Open to QA Automation / SDET roles, remote. The fastest way to reach me is email.",
    emailLabel: "Email me",
  },
  footer: {
    tested: "This site is tested with Playwright and axe on every push.",
    source: "Source",
  },
};

export const es = {
  lang: "es",
  path: "es/",
  altPath: "",
  altLabel: "EN",
  altName: "View in English",
  title: "Eros Calvimonti | QA Automation Engineer / SDET",
  description: "QA Automation Engineer / SDET con más de 5 años testeando productos web, mobile y APIs. Playwright + TypeScript, CI/CD y performance con k6.",
  nav: { experience: "Experiencia", projects: "Proyectos", skills: "Skills", contact: "Contacto" },
  themeLabel: "Cambiar modo oscuro",
  cvButton: "Descargar CV",
  hero: {
    eyebrow: "Argentina · Remoto",
    role: "QA Automation Engineer / SDET",
    lead: "Construyo automatización de tests en la que los equipos pueden confiar. Más de 5 años testeando productos web, mobile y APIs en fintech, salud digital y e-commerce, principalmente con **Playwright y TypeScript** corriendo en **CI/CD**.",
    primary: "Descargar CV (inglés)",
    secondary: "Ver mi trabajo",
    terminal: {
      command: "npx playwright test perfil.spec.ts",
      running: "Running 5 tests using 1 worker",
      checks: [
        "+5 años testeando web, mobile y APIs",
        "Playwright + TypeScript en el día a día",
        "~40% menos tests flaky en Fintexa",
        "3 defectos reales encontrados en QuickPizza",
        "IA agéntica en testing, con revisión humana",
      ],
      result: "5 passed",
    },
  },
  experience: {
    title: "Experiencia",
    kicker: "Dónde trabajé",
    items: [
      {
        company: "Coredio", role: "QA Engineer | SDET", dates: "nov 2025 – actualidad",
        bullets: [
          "Escribo tests end-to-end de dashboards web con **Playwright** y los corro en distintos navegadores.",
          "Construyo y mantengo las suites automatizadas de las apps de **iOS y Android**.",
          "Testeo **APIs REST**: JSON schemas, flujos de autenticación e integridad de datos.",
          "Integré **workflows de IA agéntica** al desarrollo de tests (estructura, datos de prueba, casos borde, triage de fallas), con revisión humana antes de cada merge.",
          "Testeo las **funcionalidades con IA** del producto, validando consistencia de respuestas y casos borde.",
        ],
      },
      {
        company: "Fintexa", role: "SDET | QA Engineer", dates: "oct 2024 – nov 2025",
        bullets: [
          "Construí y mantuve frameworks de **Playwright + TypeScript** para los flujos fintech principales (pagos, aprobación de créditos); rehice esperas y sincronización y **bajé los tests flaky cerca de un 40%**.",
          "Testeé funcionalidades de **billetera digital y onboarding** en web y mobile (iOS con TestFlight, Android).",
          "Corrí las suites de regresión en el **pipeline de CI/CD** antes de cada release.",
          "Testeé APIs y validé datos con **SQL**; usé **JMeter** para ver cómo se comportaban las APIs bajo carga.",
          "Trabajé con backend para encontrar bugs de integración en reintentos y **consistencia de datos de pagos**.",
        ],
      },
      {
        company: "UPEX", role: "SDET | QA Automation", dates: "oct 2022 – oct 2024",
        bullets: [
          "Construí frameworks de automatización con **Playwright, Selenium y Mocha** para tests de UI y API.",
          "Testeé proyectos **Web3**: dApps, wallets y transacciones en blockchain.",
          "Validé lógica de backend con **SQL** y ayudé a mejorar el CI/CD y el proceso de QA en un equipo Scrum.",
        ],
      },
      {
        company: "uTest", role: "QA Tester (Freelance)", dates: "feb 2023 – jul 2024",
        bullets: [
          "Ejecuté ciclos de prueba en sitios de **e-commerce** (Shopify, Magento) y otras apps en Windows, iOS y Android, en varios navegadores.",
          "Reporté bugs funcionales, de contenido, performance y visuales con pasos claros para reproducirlos.",
        ],
      },
      {
        company: "With Ela Studio", role: "Web Developer", dates: "ene 2021 – feb 2022",
        bullets: [
          "Desarrollé sitios responsive con **HTML, CSS y JavaScript** y escribí tests con **Cypress** para la lógica de front-end.",
          "Testeé cada release (funcional, exploratorio, performance) y **mejoré la performance cerca de un 30%**.",
        ],
      },
    ],
  },
  projects: {
    title: "Proyectos",
    kicker: "Cosas que construí y testeé",
    code: "Código",
    ci: "Ejecuciones de CI",
    featured: "Destacado",
    quickpizza: {
      name: "Suite de tests de QuickPizza",
      tagline: "Playwright + k6 contra la app demo de Grafana",
      body: "Suite de API, UI y performance para QuickPizza. Playwright + TypeScript con Page Objects y fixtures en Chromium y Firefox; tests de smoke y carga en k6 con umbrales p95/p99 por endpoint. Todo corre en **GitHub Actions** contra un contenedor descartable, así los resultados nunca dependen de un servidor compartido.",
      stack: ["Playwright", "TypeScript", "k6", "GitHub Actions", "Docker"],
      findingsTitle: "Bugs que encontré, confirmados en el código fuente",
      headers: ["ID", "Severidad", "Hallazgo"],
      findings: [
        { id: "F-01", sev: "Media", sevKey: "med", text: "Las “calorías por porción” ignoran la masa: una pizza de borde relleno parece tener 300 kcal menos de las reales." },
        { id: "F-02", sev: "Alta", sevKey: "high", text: "<code>maxCaloriesPerSlice</code> no se respeta: tras 10 reintentos la API devuelve una pizza que supera el límite, con <code>200 OK</code>." },
        { id: "F-03", sev: "Baja · a11y", sevKey: "low", text: "Tres inputs comparten el mismo <code>id</code>, así que cada <code>&lt;label for&gt;</code> apunta al primero. Los lectores de pantalla no los distinguen." },
      ],
      note: "Los bugs conocidos se marcan con <code>test.fail()</code> en vez de saltearlos: siguen visibles en cada ejecución y se ponen en rojo el día que se arreglan.",
      shotTitle: "Reporte de Playwright · último CI",
      shotAlt: "Reporte HTML de Playwright de la ejecución de CI de QuickPizza: 24 tests pasaron, 0 fallaron, 0 flaky, en 11,3 segundos",
      repo: quickpizzaRepo,
    },
    ordenars: {
      name: "OrdenARS",
      tagline: "App Android de gastos en Kotlin",
      body: "App Android offline que registra gastos automáticamente desde las notificaciones de 24 bancos y billeteras argentinas, los categoriza y avisa cuando te acercás al presupuesto. Jetpack Compose, MVVM + Clean Architecture, Room, Hilt y Flow.",
      stats: [["50", "tests unitarios en CI"], ["3", "bugs detectados por tests"], ["24", "bancos y billeteras"]],
      stack: ["Kotlin", "Jetpack Compose", "Room", "Hilt", "JUnit + MockK"],
      imgAlt: "Pantalla de inicio de OrdenARS con el gasto del mes por categoría",
      repo: ordenarsRepo,
    },
    more: [
      { name: "Cypress + GitHub Actions", body: "Suite de Cypress con Page Object Model para una app de calendario, corriendo en cada push y PR con alertas si falla.", stack: ["Cypress", "POM", "GitHub Actions"], url: "https://github.com/ErosCalvimonti/challenge-qa" },
      { name: "E2E con Cypress y Cucumber", body: "Framework E2E para el e-commerce OpenCart escrito en Gherkin, cubriendo los flujos críticos de la UI.", stack: ["Cypress", "Cucumber", "BDD"], url: "https://github.com/ErosCalvimonti/cypress-project" },
      { name: "Automatización mobile", body: "Flujos clave de una app automatizados con WebdriverIO y Appium, corriendo en varios dispositivos Android en BrowserStack.", stack: ["Appium", "WebdriverIO", "BrowserStack"], url: "https://github.com/ErosCalvimonti/automatizacion-bs-appium" },
    ],
  },
  stickers: ["+5 años", "Playwright + TypeScript", "Web · Mobile · API"],
  game: {
    kicker: "Jugá #2",
    title: "¿Encontrás los bugs?",
    noscript: "Este jueguito necesita JavaScript. Todo lo demás de la página funciona sin él.",
  },
  skills: {
    title: "Skills",
    kicker: "Herramientas que uso",
    groups: skillGroups(["Automatización", "Lenguajes", "API y performance", "CI/CD y herramientas", "Proceso"]),
  },
  education: {
    title: "Formación y certificaciones",
    certs,
    languagesTitle: "Idiomas",
    languages: [["Inglés", "Intermedio-avanzado"], ["Español", "Nativo"]],
  },
  contact: {
    title: "Hablemos",
    kicker: "Contacto",
    body: "Abierto a posiciones de QA Automation / SDET, remoto. La forma más rápida de contactarme es por email.",
    emailLabel: "Escribime",
  },
  footer: {
    tested: "Este sitio se testea con Playwright y axe en cada push.",
    source: "Código fuente",
  },
};
