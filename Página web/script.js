document.addEventListener("DOMContentLoaded", function() {
    // Animación de scroll en las secciones
    const sections = document.querySelectorAll("section");
    window.addEventListener("scroll", function() {
        sections.forEach(section => {
            const sectionPos = section.getBoundingClientRect().top;
            const screenPos = window.innerHeight / 1.3;
            if (sectionPos < screenPos) {
                section.style.transform = "translateY(0)";
                section.style.opacity = "1";
                section.style.transition = "all 0.6s ease-out";
            }
        });
    });

    // Botón de contacto con alerta
    const contactBtn = document.getElementById("contactBtn");
    contactBtn.addEventListener("click", function() {
        alert("¡Gracias por contactarnos! Te responderemos pronto.");
    });
});
