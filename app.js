document.addEventListener('DOMContentLoaded', function() {
    const scrollToSection = function(selector) {
        const section = document.querySelector(selector);
        const sectionHeight = section.offsetHeight;

        // Calculate the vertical center of the viewport
        const viewportCenter = window.innerHeight / 2;

        // Calculate the scroll position to align the section center with the viewport center
        const scrollToPosition = section.offsetTop - viewportCenter + sectionHeight / 2;

        // Scroll to the calculated position
        window.scrollTo({ top: scrollToPosition, behavior: 'smooth' });
    };

    // Adding event listener for the about and scroll buttons
    document.querySelectorAll('.header-buttons .about-button, .scroll-button').forEach(function(button) {
        button.addEventListener('click', function(event) {
            event.preventDefault();
            scrollToSection('#about-box');
        });
    });

    // Adding event listener for the resume button
    document.querySelector('.resume-button').addEventListener('click', function(event) {
        event.preventDefault();
        scrollToSection('#skills-box');
    });
});

