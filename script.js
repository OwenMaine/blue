document.addEventListener('DOMContentLoaded', function() {

    // Initialize AOS (Animate on Scroll)
    AOS.init({
        duration: 800, // values from 0 to 3000, with step 50ms
        once: true, // whether animation should happen only once - while scrolling down
        offset: 100, // offset (in px) from the original trigger point
    });

    // Initialize Lightbox2
    lightbox.option({
      'resizeDuration': 200,
      'wrapAround': true,
      'disableScrolling': true,
      'albumLabel': "Image %1 of %2"
    });
    
    // Note: The mobile menu functionality is handled by Alpine.js in the HTML.
    // No additional JS is needed for the hamburger menu.

});