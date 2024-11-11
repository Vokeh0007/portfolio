var typed = new Typed(".multiple-text", {
  strings: ["Frontend developer.", "Youtuber.", "Freelancer.", "Designer.", "Developer.", "Photographer.", "Traveller."],
  typeSpeed: 30,
  backSpeed: 30,
  backDelay: 1000,
  startDelay: 1000,
  loop: true
});

// Get the menu button and close icon
const menuButton = document.querySelector('.bx-menu');
const closeButton = document.querySelector('.bx-x');
const mobileNavbar = document.querySelector('.mobile-navbar');

// Toggle the menu when clicking the menu button
menuButton.addEventListener('click', () => {
    mobileNavbar.style.top = '0'; // Slide in the menu
});

// Close the menu when clicking the close button
closeButton.addEventListener('click', () => {
    mobileNavbar.style.top = '-100%'; // Slide the menu out
});
