 // Initialize Scroll Animations with optimal presets
        AOS.init({
            once: true,        // Animation triggers only once when scrolling down
            mirror: false,     // Keeps layout processing low by omitting reverse animations
            anchorPlacement: 'top-bottom'
        });

          window.addEventListener('scroll', function() {
    const header = document.querySelector('.header');
    
    if (window.scrollY > 20) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});