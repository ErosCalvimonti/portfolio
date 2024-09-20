const skills = [
    { name: "Selenium", url: "https://www.selenium.dev/" },
    { name: "Cypress", url: "https://www.cypress.io/" },
    { name: "Cucumber", url: "https://cucumber.io/" },
    { name: "REST Assured", url: "https://rest-assured.io/" },
    { name: "Jenkins", url: "https://www.jenkins.io/" },
    { name: "JIRA", url: "https://www.atlassian.com/software/jira" },
    { name: "API Testing", url: "https://www.postman.com/api-platform/api-testing/" },
    { name: "Postman", url: "https://www.postman.com/" },
    { name: "Agile Methodologies", url: "https://agilemanifesto.org/" },
    { name: "TestNG", url: "https://testng.org/" },
    { name: "Test Planning", url: "https://www.istqb.org/" },
    { name: "Github Actions", url: "https://github.com/features/actions" },
    { name: "Postgresql", url: "https://www.postgresql.org/docs/" }
];

const projects = [
    {
        title: { en: "Selenium Project | Framework Test Automation with Java and BDD", es: "Selenium Project | Framework Automatización de pruebas con Java y BDD" },
        description: {
            en: "A suite for automated browser testing and BDD using Java and related tools",
            es: "Una suite para pruebas automatizadas en navegadores y BDD usando Java y herramientas relacionadas"
        },
        image: "https://i.postimg.cc/rF5RX63V/Screenshot-2024-09-04-at-3-31-42-PM.jpg",
        tags: ["Java", "Selenium WebDriver", "Cucumber", "Gradle"],
        link: "https://github.com/ErosCalvimonti/Java-Selenium-Automation"
    }, {
        title: { en: "Cypress Project | Framework Test Automation", es: "Proyecto Cypress | Framework Automatización de pruebas" },
        description: {
            en: "This project contains an end-to-end (E2E) testing framework for the Open Cart e-commerce provide by Abstracta using Cypress and Cucumber. It provides a robust solution for automating UI tests",
            es: "Este proyecto contiene un marco de pruebas de (E2E) para el comercio electrónico Open Cart proporcionado por Abstracta utilizando Cypress y Cucumber. Proporciona una solución robusta para automatizar las pruebas de interfaz de usuario"
        },
        image: "https://i.postimg.cc/WzPBwvmw/Screenshot-2024-09-20-at-12-05-41-PM-Large.jpg",
        tags: ["Cypress", "E2E Testing", "BDD", "Data Driven Testing"],
        link: "https://github.com/ErosCalvimonti/cypress-project"
    },
    {
        title: { en: "Book it!", es: "¡Book it!" },
        description: {
            en: "Responsive site for booking hotels with filter options and dynamic listings. Uses API for real-time data.",
            es: "Sitio responsivo para reservas de hoteles con opciones de filtro y listados dinámicos. Usa API para datos en tiempo real."
        },
        image: "https://i.postimg.cc/FRF707H1/1719364388864.jpg",
        tags: ["DOM Manipulation", "JavaScript", "CSS", "API request"],
        link: "https://eroscalvimonti.github.io/book-it/"
    },
    {
        title: { en: "Swipe Web Responsive", es: "Swipe Web Responsiva" },
        description: {
            en: "A fully responsive website design tailored for seamless user experience across various devices, ideal for showcasing products and services.",
            es: "Un diseño de sitio web completamente responsivo adaptado para una experiencia de usuario fluida en diversos dispositivos, ideal para la presentación de productos y servicios."
        },
        image: "https://i.postimg.cc/nrz9fMyN/1715082000625.jpg",
        tags: ["HTML", "JavaScript", "CSS", "Responsive Design"],
        link: "https://eroscalvimonti.github.io/swipe-web/"
    },
   
];

const translations = {
    en: {
        home: "HOME", about: "ABOUT", skills: "SKILLS", portfolio: "PORTFOLIO", contact: "CONTACT", resume: "RESUME",
        hello: "Hello! I am", role: "Software QA Engineer", subtitle: "QA Automation • Manual Testing • QA Analyst",
        getResume: "Get Resume", aboutMe: "About Me", aboutTitle: "About Me", aboutText: "Hi, I'm Calvimonti Eros, a Software QA Engineer dedicated to ensuring software quality. When I'm not working, you can find me:",
        hobby1: "Enjoying time with my family", hobby2: "Playing guitar and listening to music", hobby3: "Reading about the latest tech trends",
        skillsTitle: "Skills & Expertise", portfolioTitle: "Portfolio", viewProject: "View Project", contactTitle: "Contact Me",
        name: "Name", email: "Email", message: "Message", send: "Send Message", footerText: "Connect with me",
        webDesign: "Bug Reporting",
        webDesignDesc: "Providing precise and actionable bug reports to ensure efficient resolution and improved software quality.",
        webDevelopment: "QA Automation",
        webDevelopmentDesc: "Implementing automated testing solutions for web and mobile applications.",
        mobileApps: "API Testing",
        mobileAppsDesc: "Conducting thorough testing of APIs to ensure reliability and functionality.",
        qaAutomation: "Performance Testing",
        qaAutomationDesc: "Assessing application performance to identify and resolve potential bottlenecks."
    },
    es: {
        home: "INICIO", about: "SOBRE MÍ", skills: "HABILIDADES", portfolio: "PORTAFOLIO", contact: "CONTACTO", resume: "CURRÍCULUM",
        hello: "¡Hola! Soy", role: "Software QA Engineer", subtitle: "Automatización de Pruebas • Pruebas Manuales • Aseguramiento de Calidad",
        getResume: "Obtener CV", aboutMe: "Sobre Mí", aboutTitle: "Sobre Mí", aboutText: "Hola, soy Calvimonti Eros, un Software QA Engineer dedicado a asegurar la calidad del software. Cuando no estoy trabajando, puedes encontrarme:",
        hobby1: "Disfrutando con mi familia", hobby2: "Tocando la guitarra o escuchando música", hobby3: "Leyendo sobre las últimas tendencias tecnológicas",
        skillsTitle: "Habilidades y Experiencia", portfolioTitle: "Portafolio", viewProject: "Ver Proyecto", contactTitle: "Contáctame",
        name: "Nombre", email: "Correo Electrónico", message: "Mensaje", send: "Enviar Mensaje", footerText: "Conéctate conmigo",
        webDesign: "Reportes de Errores",
        webDesignDesc: "Proporcionando informes precisos y accionables para asegurar una resolución eficiente y mejorar la calidad del software.",
        webDevelopment: "Automatización de QA",
        webDevelopmentDesc: "Implementación de soluciones de pruebas automatizadas para aplicaciones web y móviles.",
        mobileApps: "Pruebas de API",
        mobileAppsDesc: "Realización de pruebas exhaustivas de APIs para asegurar su fiabilidad y funcionalidad.",
        qaAutomation: "Pruebas de Rendimiento",
        qaAutomationDesc: "Evaluación del rendimiento de la aplicación para identificar y resolver posibles cuellos de botella."
    }
};