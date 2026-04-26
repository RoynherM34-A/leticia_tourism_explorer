/* CAMBIO DE IDIOMA */
function setLanguage(lang) {

    const es = document.querySelectorAll(".lang-es");
    const en = document.querySelectorAll(".lang-en");

    if (lang === "es") {
        es.forEach(e => e.style.display = "block");
        en.forEach(e => e.style.display = "none");
    }

    if (lang === "en") {
        es.forEach(e => e.style.display = "none");
        en.forEach(e => e.style.display = "block");
    }

    setPageTitle(lang);
}


/* CAMBIO DEL TITLE */
function setPageTitle(lang) {
    const title = document.getElementById("page-title");

    if (!title) return;

    title.textContent = (lang === "es")
        ? "Explorador Turístico de Leticia"
        : "Leticia Tourism Explorer";
}


/* ANIMACIÓN SCROLL */
function revealOnScroll() {

    const cards = document.querySelectorAll(".card");

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("show");
            }
        });
    });

    cards.forEach(card => observer.observe(card));
}


/* MENÚ ACTIVO */
function activeMenu() {

    const sections = document.querySelectorAll("section");
    const links = document.querySelectorAll("nav a");

    window.addEventListener("scroll", () => {

        let current = "";

        sections.forEach(section => {
            const sectionTop = section.offsetTop - 120;

            if (scrollY >= sectionTop) {
                current = section.getAttribute("id");
            }
        });

        links.forEach(link => {
            link.classList.remove("active");

            if (link.getAttribute("href").includes(current)) {
                link.classList.add("active");
            }
        });

    });
}


/* INICIO */
document.addEventListener("DOMContentLoaded", () => {

    setLanguage("es");
    revealOnScroll();
    activeMenu();

});
