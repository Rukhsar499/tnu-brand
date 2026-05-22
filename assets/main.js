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

document.addEventListener('DOMContentLoaded', () => {
            
            // --- VIDEO CORE PROGRAMMATIC PLAYBACK CONTROLLER ENGINE ---
            const videoTheater = document.getElementById('videoTheater');
            const nativeVideo = document.getElementById('institutionVideo');
            const playButton = document.getElementById('playTriggerButton');

            function performPlaySequence() {
                nativeVideo.muted = false; // Ensures audio plays alongside execution
                nativeVideo.play();
                videoTheater.classList.add('is-playing');
            }

            function performPauseSequence() {
                nativeVideo.pause();
                videoTheater.classList.remove('is-playing');
            }

            // Play Trigger execution bindings
            playButton.addEventListener('click', (e) => {
                e.stopPropagation(); // Stops the event from instantly bubbling and triggering a pause sequence
                performPlaySequence();
            });

            // Toggle pause/play sequence directly by interacting with video surface area
            nativeVideo.addEventListener('click', () => {
                if (!nativeVideo.paused) {
                    performPauseSequence();
                } else {
                    performPlaySequence();
                }
            });


            // --- NATIVE VANILLA INTERSECTION OBSERVER SCROLL REVEAL ENGINE ---
            const scrollIntersectionOptions = {
                root: null, // Scans relative to standard client viewport window layers
                threshold: 0.15, // Triggers visual activation when 15% of target object layout card hits viewport lines
                rootMargin: "0px 0px -20px 0px"
            };

            const scrollObserver = new IntersectionObserver((entries, observer) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('active');
                        observer.unobserve(entry.target); // Memory management optimization: unobserves elements after they animate in
                    }
                });
            }, scrollIntersectionOptions);

            // Fetch and map structural transition elements
            const elementsToAnimate = document.querySelectorAll('.reveal-element');
            elementsToAnimate.forEach(element => scrollObserver.observe(element));
        });