/* Spotless House Cleaning — main.js
 * Minimal, no dependencies. Mobile nav toggle only.
 */
(function () {
  'use strict';

  document.addEventListener('DOMContentLoaded', function () {
    var toggle = document.querySelector('.nav-toggle');
    var nav = document.querySelector('.primary-nav');

    if (toggle && nav) {
      toggle.addEventListener('click', function () {
        var isOpen = nav.classList.toggle('is-open');
        toggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
      });
    }

    // Close mobile nav when a link is clicked
    var navLinks = document.querySelectorAll('.primary-nav a');
    navLinks.forEach(function (link) {
      link.addEventListener('click', function () {
        if (nav && nav.classList.contains('is-open')) {
          nav.classList.remove('is-open');
          if (toggle) toggle.setAttribute('aria-expanded', 'false');
        }
      });
    });
  });
})();
