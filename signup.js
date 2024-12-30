/***********************************
 * Social Media Sign-up Handlers
 ***********************************/

/**
 * Redirects user to Facebook login page.
 */
function facebookSignUp() {
    window.location.href = "https://www.facebook.com/login/";
  }
  
  /**
   * Redirects user to Twitter (X) login page.
   */
  function twitterSignUp() {
    window.location.href = "https://twitter.com/i/flow/login";
  }
  
  /**
   * Redirects user to Google login page.
   */
  function googleSignUp() {
    window.location.href = "https://accounts.google.com/login";
  }
  
  /***********************************
   * Progress Bar Animation
   ***********************************/
  /**
   * Animates numeric values (e.g., percentages) from 0 to final.
   * Utilizes jQuery for easy DOM selection and animations.
   */
  $(document).ready(function () {
    $(".progress-value > span").each(function () {
      $(this).prop("Counter", 0).animate(
        {
          Counter: $(this).text(),
        },
        {
          duration: 1500,
          easing: "swing",
          step: function (now) {
            $(this).text(Math.ceil(now));
          },
        }
      );
    });
  });
  
  /***********************************
   * Prevent Right-Click (Optional)
   ***********************************/
  // document.addEventListener('contextmenu', event => event.preventDefault());
  
  /***********************************
   * Check for Element Wrapping
   * Adds or removes a "wrapped" class
   ***********************************/
  /**
   * Checks whether certain elements in the .hero-section are wrapping
   * (i.e., overflowing parent container) and adds a .wrapped class if so.
   */
  function checkForWrapping() {
    const heroSection = document.querySelector(".hero-section");
    if (!heroSection) return; // If there's no hero-section on the page, skip
  
    // Select elements to watch for wrapping
    const elements = heroSection.querySelectorAll(".fw-bold, .lead, .btn");
    elements.forEach((element) => {
      if (isElementWrapping(element)) {
        element.classList.add("wrapped");
      } else {
        element.classList.remove("wrapped");
      }
    });
  }
  
  /**
   * Helper function to detect if an element is overflowing its parent container.
   */
  function isElementWrapping(element) {
    const elementRect = element.getBoundingClientRect();
    const parentRect = element.parentElement.getBoundingClientRect();
    return elementRect.right > parentRect.right;
  }
  
  // Initial check on page load
  checkForWrapping();
  
  // Debounce for better performance on resize
  let resizeTimer;
  window.addEventListener("resize", () => {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(() => {
      checkForWrapping();
    }, 150);
  });
  function animateHeading() {
    const heading = document.querySelector(".hero-section h1");
    if (heading) {
      heading.classList.add("animate__animated", "animate__fadeInUp", "animate__slow"); 
    }
  }
  
  /***********************************
   * Heading Animation on Page Load
   ***********************************/
  /**
   * Adds CSS animation classes to the main hero heading.
   * If you use Animate.css, this triggers a fadeInUp effect.
   */
 
  
  // Trigger the animation once the entire page (images, etc.) is loaded
  window.addEventListener("load", animateHeading);
  
  /***********************************
   * Scroll-Based Reveal (Optional)
   ***********************************/
  /**
   * Reveal elements when scrolled into view. 
   * Add a .reveal class to elements in your HTML, 
   * and define the .fade-in or similar in your CSS/Animate.css.
   */
  function scrollReveal() {
    const revealElements = document.querySelectorAll(".reveal");
    const windowHeight = window.innerHeight;
    const revealPoint = 100; // Adjust for earlier or later reveal
  
    revealElements.forEach((el) => {
      const elementTop = el.getBoundingClientRect().top;
      if (elementTop < windowHeight - revealPoint) {
        el.classList.add("fade-in"); 
        // e.g., "fade-in" could be an Animate.css class or your custom transition.
      }
    });
  }
  
  // Run on scroll
  window.addEventListener("scroll", scrollReveal);
  // Initial check
  scrollReveal();
  
  /***********************************
   * Device/Browser Detection (Optional)
   ***********************************/
  /**
   * Example function to detect mobile vs. desktop.
   * Adjust logic as needed (e.g., check user-agent).
   */
  function detectDevice() {
    const userAgent = navigator.userAgent.toLowerCase();
    if (
      /android|webos|iphone|ipad|ipod|blackberry|iemobile|opera mini/.test(
        userAgent
      )
    ) {
      console.log("Mobile device detected.");
      // Potentially adjust layout, show mobile-specific messages, etc.
    } else {
      console.log("Desktop device detected.");
    }
  }
  
  // Call on load
  window.addEventListener("load", detectDevice);
  
  /***********************************
   * Additional Utility Functions
   ***********************************/
  /**
   * Logs a custom message for debugging or analytics.
   * Replace console.log with your analytics endpoint if needed.
   */
  function logMessage(message) {
    console.log(`[ProfileCradle Log] ${message}`);
  }
  