let isDarkMode = true;
let language = "en";
let showSocial = true;

function toggleDarkMode() {
    isDarkMode = !isDarkMode;
    render();
}

function toggleLanguage() {
    language = language === "en" ? "es" : "en";
    render();
}

function handleScroll() {
    const homeSection = document.getElementById("home");
    if (homeSection) {
        const homeSectionBottom = homeSection.offsetTop + homeSection.offsetHeight;
        showSocial = window.pageYOffset < homeSectionBottom;
        renderSocialLinks();
    }
    const scrollBg = document.querySelector('.scroll-bg');
    const scrollY = window.scrollY;
    scrollBg.style.transform = `translateY(${scrollY * 0.5}px)`;
}

function renderSocialLinks() {
    const socialLinksContainer = document.getElementById("social-links");
    if (socialLinksContainer) {
        socialLinksContainer.style.display = showSocial ? "flex" : "none";
    }
}

function sendEmail(e) {
    e.preventDefault();
    const name = encodeURIComponent(document.getElementById("name").value);
    const email = encodeURIComponent(document.getElementById("email").value);
    const message = encodeURIComponent(document.getElementById("message").value);
    const subject = `Contact from Portfolio: ${name}`;
    const body = `Name: ${name}%0D%0AEmail: ${email}%0D%0AMessage: ${message}`;
    window.location.href = `mailto:karielcode@gmail.com?subject=${encodeURIComponent(subject)}&body=${body}`;
}

function generateNavLinks() {
    const t = translations[language];
    const links = [
        { href: "#home", text: t.home },
        { href: "#about", text: t.about },
        { href: "#skills", text: t.skills },
        { href: "#portfolio", text: t.portfolio },
        { href: "#contact", text: t.contact },
    ];
    return links.map(link => 
        `<a href="${link.href}" class="hover:text-green-400">
            ${link.text}
        </a>`
    ).join("");
}

function generateProjectCards() {
    const t = translations[language];
    return projects.map(project => `
        <div class="project-card bg-opacity-20 backdrop-filter backdrop-blur-lg rounded-lg overflow-hidden shadow-lg ${isDarkMode ? "bg-gray-800" : "bg-white"}">
            <img src="${project.image}" alt="${project.title[language]}" class="w-full h-48 object-cover" />
            <div class="p-6 relative">
                <h3 class="text-xl font-semibold mb-2">${project.title[language]}</h3>
                <div class="project-details absolute inset-x-0 bottom-0 p-6 bg-green-400 text-gray-900">
                    <p class="mb-4">${project.description[language]}</p>
                    <div class="flex flex-wrap gap-2 mb-4">
                        ${project.tags.map(tag => `<span class="bg-gray-900 text-green-400 px-2 py-1 rounded text-xs">${tag}</span>`).join("")}
                    </div>
                    <a href="${project.link}" target="_blank" rel="noopener noreferrer">
                        <button class="bg-gray-900 text-green-400 px-4 py-2 rounded hover:bg-gray-700 transition duration-300">${t.viewProject}</button>
                    </a>
                </div>
            </div>
        </div>
    `).join("");
}

function generateSkills() {
    const t = translations[language];
    const skillsAndExpertise = [
        {
            title: t.webDesign,
            description: t.webDesignDesc,
            icon: "ri-bug-line"
        },
        {
            title: t.webDevelopment,
            description: t.webDevelopmentDesc,
            icon: "ri-code-s-slash-line"
        },
        {
            title: t.mobileApps,
            description: t.mobileAppsDesc,
            icon: "ri-api-fill"
        },
        {
            title: t.qaAutomation,
            description: t.qaAutomationDesc,
            icon: "ri-speed-line"
        }
    ];

    const skillsHtml = skills.map(skill => 
        `<a href="${skill.url}" target="_blank" rel="noopener noreferrer" class="bg-green-400 text-gray-900 px-3 py-1 rounded-full text-sm font-semibold hover:bg-green-500 transition duration-300">${skill.name}</a>`
    ).join("");

    const expertiseHtml = skillsAndExpertise.map(item => `
        <div class="bg-gray-800 bg-opacity-50 backdrop-filter backdrop-blur-lg rounded-lg p-6 shadow-lg">
            <div class="flex items-center mb-4">
                <div class="text-green-400 mr-4">
                    <i class="${item.icon} w-6 h-6"></i>
                </div>
                <h3 class="text-xl font-semibold">${item.title}</h3>
            </div>
            <p class="text-gray-300">${item.description}</p>
        </div>
    `).join("");

    return `
        <div class="mb-8">
            <h3 class="text-2xl font-bold mb-4">Technical Skills</h3>
            <div class="flex flex-wrap justify-center gap-4">
                ${skillsHtml}
            </div>
        </div>
        <div>
            <h3 class="text-2xl font-bold mb-4">Areas of Expertise</h3>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                ${expertiseHtml}
            </div>
        </div>
    `;
}

function render() {
    const root = document.getElementById("root");
    const t = translations[language];

    root.innerHTML = `
        <div class="${isDarkMode ? "gradient-dark text-gray-100" : "gradient-light text-gray-800"} min-h-screen">
            <!-- Navigation -->
            <nav class="flex justify-between items-center p-4 sticky top-0 bg-opacity-90 backdrop-filter backdrop-blur-lg z-50">
                <div class="text-3xl font-bold">CE</div>
                <div class="flex space-x-4 items-center">
                    ${generateNavLinks()}
                    <button onclick="toggleLanguage()" class="px-2 py-1 rounded border border-current" aria-label="Change language">
                        ${language === "en" ? "🇪🇸" : "🇺🇸"}
                    </button>
                    <button onclick="toggleDarkMode()" class="p-2 rounded-full hover:bg-gray-700" aria-label="${isDarkMode ? "Switch to light mode" : "Switch to dark mode"}">
                        <i class="${isDarkMode ? "ri-sun-line" : "ri-moon-line"} w-5 h-5"></i>
                    </button>
                </div>
            </nav>

            <!-- Hero Section -->
            <section id="home" class="flex flex-col justify-center min-h-screen max-w-4xl mx-auto px-4 fade-in relative overflow-hidden">
                <div class="testing-background">
                   <!-- SVG content here -->
                   <svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
 viewBox="0 0 460 460" style="enable-background:new 0 0 460 460;" xml:space="preserve">
<g id="XMLID_536_">
<path id="XMLID_866_" d="M256.488,76.939c-49.492-49.491-130.02-49.491-179.51,0c-49.491,49.491-49.491,130.019,0,179.51
c23.974,23.975,55.85,37.178,89.755,37.178c33.905,0,65.78-13.203,89.755-37.178C305.979,206.958,305.979,126.43,256.488,76.939z
 M245.835,245.796c-21.128,21.129-49.221,32.765-79.102,32.765c-29.881,0-57.973-11.637-79.102-32.765
c-43.617-43.617-43.617-114.587,0-158.204c21.811-21.811,50.452-32.713,79.102-32.713c28.643,0,57.296,10.907,79.102,32.713
C289.452,131.209,289.452,202.179,245.835,245.796z"/>
<path id="XMLID_1679_" d="M449.468,398.571L307.289,256.393c41.167-64.486,33.622-151.317-22.658-207.597
c-65.011-65.01-170.788-65.009-235.796,0C17.343,80.288,0,122.158,0,166.694C0,211.23,17.343,253.1,48.835,284.591
c31.491,31.492,73.361,48.835,117.898,48.835c32.293,0,63.181-9.126,89.73-26.145L398.61,449.428
c6.792,6.792,15.823,10.533,25.429,10.533c9.605,0,18.636-3.741,25.427-10.533C456.259,442.636,460,433.605,460,424
C460,414.394,456.26,405.364,449.468,398.571z M59.488,273.939c-28.646-28.646-44.423-66.733-44.423-107.245
c0-40.512,15.777-78.598,44.423-107.245c29.567-29.567,68.406-44.351,107.245-44.351c38.838,0,77.677,14.783,107.244,44.351
c59.135,59.135,59.135,155.354,0,214.49c-28.646,28.646-66.733,44.422-107.244,44.422
C126.221,318.361,88.134,302.585,59.488,273.939z M438.813,438.775c-3.946,3.947-9.193,6.12-14.774,6.12
c-5.582,0-10.828-2.174-14.775-6.12L268.943,298.454c5.468-4.259,10.709-8.883,15.689-13.862
c5.003-5.003,9.618-10.25,13.851-15.699l140.332,140.332c3.947,3.947,6.12,9.194,6.12,14.776S442.761,434.828,438.813,438.775z"/>
<path id="XMLID_1697_" d="M257.203,180.554l-16.223-16.223c-1.413-1.413-3.329-2.206-5.327-2.206h-13.513
c-0.343-5.429-1.197-10.685-2.504-15.7l4.446-6.669l13.399-3.35c4.036-1.009,6.489-5.098,5.481-9.134
c-1.009-4.037-5.101-6.489-9.135-5.481l-16.223,4.056c-1.818,0.454-3.402,1.57-4.441,3.129l-0.214,0.321
c-2.468-4.584-5.37-8.791-8.628-12.546c0.002-0.143,0.012-0.284,0.012-0.428c0-9.576-5.336-20.012-13.893-27.398l6.258-9.387
c2.308-3.461,1.373-8.138-2.089-10.446c-3.461-2.308-8.138-1.373-10.446,2.089l-6.734,10.101
c-3.939-1.409-8.168-2.215-12.601-2.215c-4.433,0-8.662,0.806-12.601,2.215l-6.734-10.101c-2.307-3.462-6.984-4.396-10.446-2.089
c-3.462,2.307-4.397,6.984-2.089,10.446l6.258,9.387c-8.556,7.386-13.893,17.822-13.893,27.398c0,0.144,0.01,0.285,0.012,0.428
c-3.258,3.754-6.159,7.961-8.628,12.546l-0.214-0.321c-1.039-1.56-2.623-2.675-4.441-3.129l-16.223-4.056
c-4.035-1.008-8.126,1.445-9.134,5.481c-1.009,4.036,1.445,8.126,5.481,9.134l13.398,3.35l4.446,6.668
c-1.307,5.014-2.161,10.27-2.504,15.7H94.004c-1.998,0-3.914,0.793-5.326,2.206l-16.223,16.223c-2.942,2.942-2.942,7.711,0,10.653
c1.471,1.471,3.399,2.206,5.326,2.206s3.856-0.736,5.326-2.206l14.016-14.017h10.777c0.829,7.267,2.565,14.185,5.085,20.564
l-13.668,5.467c-1.713,0.685-3.115,1.975-3.94,3.625l-8.112,16.223c-1.861,3.721-0.353,8.245,3.369,10.106
c1.081,0.541,2.23,0.797,3.363,0.797c2.763,0,5.423-1.526,6.743-4.166l6.831-13.661l12.381-4.953
c10.544,16.023,26.737,26.312,44.875,26.312c18.139,0,34.331-10.289,44.875-26.312l12.381,4.953l6.831,13.661
c1.32,2.64,3.98,4.166,6.743,4.166c1.132,0,2.281-0.256,3.363-0.796c3.72-1.861,5.229-6.385,3.368-10.106l-8.111-16.223
c-0.825-1.65-2.226-2.94-3.94-3.625l-13.668-5.467c2.521-6.38,4.257-13.298,5.085-20.564h10.777l14.016,14.017
c1.471,1.471,3.399,2.206,5.327,2.206c1.927,0,3.856-0.736,5.326-2.206C260.145,188.265,260.145,183.496,257.203,180.554z
 M189.268,116.323c0,12.325-20.358,12.949-24.439,12.949c-4.081,0-24.439-0.624-24.439-12.949c0-9.989,11.278-22.191,24.439-22.191
C177.991,94.133,189.268,106.334,189.268,116.323z M122.406,167.528c0-13.056,3.542-25.059,9.443-34.493
c5.516,5.879,14.299,9.727,25.448,10.909v77.611C137.487,216.939,122.406,194.478,122.406,167.528z M172.362,221.555v-77.611
c11.148-1.182,19.931-5.031,25.447-10.909c5.901,9.434,9.443,21.437,9.443,34.493C207.252,194.478,192.171,216.939,172.362,221.555
z"/>
</g>
</svg>
                </div>
                <div class="space-y-4 relative z-10">
                    <h2 class="text-green-400 text-xl">${t.hello}</h2>
                    <h1 class="text-6xl font-bold">Calvimonti Eros</h1>
                    <h3 class="text-4xl text-green-400">${t.role}</h3>
                    <p class="text-xl">${t.subtitle}</p>
                    <div class="flex space-x-4 pt-4">
                        <a href="https://drive.google.com/uc?export=download&id=1YZPo7qQ-R-acvLar2qrvBU2DT8jOR_bD" class="bg-green-400 text-gray-900 px-6 py-2 rounded hover:bg-green-500 transition duration-300">${t.getResume}</a>
                        <a href="#about" class="border border-green-400 text-green-400 px-6 py-2 rounded hover:bg-green-400 hover:text-gray-900 transition duration-300">${t.aboutMe}</a>
                    </div> 
                </div>
            </section>

            <!-- About Section -->
            <section id="about" class="py-16 max-w-4xl mx-auto px-4 fade-in">
                <h2 class="text-3xl font-bold mb-8 text-center">${t.aboutTitle}</h2>
                <div class="bg-gray-800 bg-opacity-50 backdrop-filter backdrop-blur-lg rounded-lg p-8 shadow-lg">
                    <div class="flex flex-col md:flex-row items-center gap-8">
                        <div class="md:w-1/2 relative group">
                            <img
                                src="https://i.postimg.cc/gkFgdWSr/eros-picture.jpg"
                                alt="Calvimonti Eros"
                                class="rounded-full w-64 h-64 object-cover mx-auto blur-effect"
                            />
                            <div class="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                <div class="flex space-x-4">
                                    <a
                                        href="https://drive.google.com/uc?export=download&id=1Yy_gyyoUqvvhqN40c6N9Y2LvUmhGH0ru"
                                        class="bg-green-400 text-gray-900 px-4 py-2 rounded-full hover:bg-green-500 transition duration-300"
                                    >
                                        CV
                                    </a>
                                    <a
                                        href="https://www.linkedin.com/in/eroscalvimonti/"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        class="bg-blue-600 text-white px-4 py-2 rounded-full hover:bg-blue-700 transition duration-300"
                                    >
                                        LinkedIn
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div class="md:w-1/2">
                            <p class="text-lg mb-4">${t.aboutText}</p>
                            <div class="space-y-2">
                                <div class="hover:bg-gray-700 p-2 rounded transition duration-300">
                                    <i class="ri-music-2-line mr-2"></i>
                                    ${t.hobby1}
                                </div>
                                <div class="hover:bg-gray-700 p-2 rounded transition duration-300">
                                    <i class="ri-heart-line mr-2"></i>
                                    ${t.hobby2}
                                </div>
                                <div class="hover:bg-gray-700 p-2 rounded transition duration-300">
                                    <i class="ri-book-read-line mr-2"></i>
                                    ${t.hobby3}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <!-- Skills Section -->
            <section id="skills" class="py-16 max-w-6xl mx-auto px-4 fade-in">
                <h2 class="text-3xl font-bold mb-8 text-center">${t.skillsTitle}</h2>
                ${generateSkills()}
            </section>

            <!-- Portfolio Section -->
            <section id="portfolio" class="py-16 max-w-6xl mx-auto px-4 fade-in">
                <h2 class="text-3xl font-bold mb-8 text-center">${t.portfolioTitle}</h2>
                <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    ${generateProjectCards()}
                </div>
            </section>

            <!-- Contact Section -->
            <section id="contact" class="py-16 max-w-4xl mx-auto px-4 fade-in">
                <h2 class="text-3xl font-bold mb-8 text-center">${t.contactTitle}</h2>
                <div class="bg-gray-800 bg-opacity-50 backdrop-filter backdrop-blur-lg rounded-lg p-8 shadow-lg">
                    <form class="space-y-4" onsubmit="sendEmail(event)">
                        <div>
                            <label for="name" class="block mb-2">${t.name}</label>
                            <input type="text" id="name" name="name" class="w-full p-2 rounded ${isDarkMode ? "bg-gray-700 text-white" : "bg-white text-gray-900"}" required />
                        </div>
                        <div>
                            <label for="email" class="block mb-2">${t.email}</label>
                            <input type="email" id="email" name="email" class="w-full p-2 rounded ${isDarkMode ? "bg-gray-700 text-white" : "bg-white text-gray-900"}" required />
                        </div>
                        <div>
                            <label for="message" class="block mb-2">${t.message}</label>
                            <textarea id="message" name="message" rows="5" class="w-full p-2 rounded ${isDarkMode ? "bg-gray-700 text-white" : "bg-white text-gray-900"}" required></textarea>
                        </div>
                        <button type="submit" class="bg-green-400 text-gray-900 px-6 py-2 rounded hover:bg-green-500 transition duration-300">${t.send}</button>
                    </form>
                </div>
            </section>

            <!-- Footer -->
            <footer class="py-8 text-center fade-in">
                <p class="mb-4">${t.footerText}</p>
                <div class="flex justify-center space-x-4">
                    <a href="https://github.com/ErosCalvimonti" target="_blank" class="text-green-400 hover:text-green-300"><i class="ri-github-fill w-6 h-6"></i></a>
                    <a href="https://www.linkedin.com/in/eroscalvimonti/" target="_blank" class="text-green-400 hover:text-green-300"><i class="ri-linkedin-box-fill w-6 h-6"></i></a>
                    <a href="mailto:karielcode@gmail.com" class="text-green-400 hover:text-green-300"><i class="ri-mail-fill w-6 h-6"></i></a>
                </div>
            </footer>

            <!-- Social Links -->
            <div id="social-links" class="fixed left-4 top-1/2 transform -translate-y-1/2 flex flex-col space-y-4 fade-in">
                <a href="https://github.com/ErosCalvimonti" target="_blank" class="text-green-400 hover:text-green-300"><i class="ri-github-fill w-6 h-6"></i></a>
                <a href="https://www.linkedin.com/in/eroscalvimonti/" target="_blank" class="text-green-400 hover:text-green-300"><i class="ri-linkedin-box-fill w-6 h-6"></i></a>
                <a href="mailto:karielcode@gmail.com" class="text-green-400 hover:text-green-300"><i class="ri-mail-fill w-6 h-6"></i></a>
            </div>
        </div>
    `;
    renderSocialLinks();
}

window.addEventListener("scroll", handleScroll);
window.addEventListener("DOMContentLoaded", render);