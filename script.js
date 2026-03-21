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

    // Cambiar título de la pestaña
    setPageTitle(lang);
}


/* CAMBIO DEL TITLE (PESTAÑA) */
function setPageTitle(lang) {
    const title = document.getElementById("page-title");

    if (!title) return;

    if (lang === "es") {
        title.textContent = "Explorador Turístico de Leticia";
    }

    if (lang === "en") {
        title.textContent = "Leticia Tourism Explorer";
    }
}


/* ANIMACIÓN AL HACER SCROLL */
function revealOnScroll() {

    const cards = document.querySelectorAll(".card");

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("show");
            }
        });
    });

    cards.forEach(card => {
        observer.observe(card);
    });
}


/* INICIO AUTOMÁTICO */
document.addEventListener("DOMContentLoaded", () => {

    // Idioma por defecto
    setLanguage("es");

    // Activar animaciones
    revealOnScroll();

});