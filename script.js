// Exemple simple de script.js pour des fonctionnalités interactives
document.addEventListener("DOMContentLoaded", function() {
    // Animation de la section héro
    const hero = document.querySelector('.hero');
    hero.style.opacity = '0';
    setTimeout(() => {
        hero.style.transition = 'opacity 2s ease-in-out';
        hero.style.opacity = '1';
    }, 500);

    // Ajouter une fonction d'animation sur le scroll
    const aboutSection = document.querySelector('.about');
    window.addEventListener('scroll', function() {
        const sectionPosition = aboutSection.getBoundingClientRect().top;
        if (sectionPosition < window.innerHeight) {
            aboutSection.classList.add('animate');
        }
    });
});
