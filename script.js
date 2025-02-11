document.addEventListener("DOMContentLoaded", function () {
    const presentationMenu = document.getElementById("presentation-menu");
    const sousMenu = document.getElementById("sous-menu");
    const menuToggle = document.getElementById("menu-toggle");
    const nav = document.querySelector("nav ul");

    // Gestion du menu déroulant "Présentation"
    presentationMenu.addEventListener("click", function (e) {
        e.preventDefault(); // Empêcher le lien de rediriger
        sousMenu.classList.toggle("active"); // Basculer la classe "active"
    });

    // Fermer le sous-menu si on clique ailleurs
    document.addEventListener("click", function (e) {
        if (!e.target.closest("#presentation-menu") && !e.target.closest("#sous-menu")) {
            sousMenu.classList.remove("active");
        }
    });

    // Gestion du menu responsive
    menuToggle.addEventListener("click", function () {
        nav.classList.toggle("active");
    });

    // Fermer le menu si on clique ailleurs (pour mobile)
    document.addEventListener("click", function (e) {
        if (!e.target.closest("nav") && !e.target.closest("#menu-toggle")) {
            nav.classList.remove("active");
        }
    });
});