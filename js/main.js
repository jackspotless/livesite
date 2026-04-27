/* Spotless House Cleaning — main.js
 * Mobile nav toggle + dropdown handling.
 * No dependencies. Vanilla JS.
 */
(function () {
  'use strict';

  document.addEventListener('DOMContentLoaded', function () {
    var toggle = document.querySelector('.nav-toggle');
    var nav = document.querySelector('.primary-nav');
    var dropdownTriggers = document.querySelectorAll('.nav-item.has-dropdown > a');
    var dropdownItems = document.querySelectorAll('.nav-item.has-dropdown');

    // ---- Mobile nav open/close ----
    if (toggle && nav) {
      toggle.addEventListener('click', function (e) {
        e.preventDefault();
        var isOpen = nav.classList.toggle('is-open');
        toggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
      });
    }

    // ---- Dropdown behavior ----
    // On mobile (narrow viewport), tapping the trigger toggles the dropdown
    // instead of navigating. On desktop, hover handles it via CSS — but we
    // still need this for keyboard / touch users.
    dropdownTriggers.forEach(function (trigger) {
      trigger.setAttribute('aria-haspopup', 'true');
      trigger.setAttribute('aria-expanded', 'false');

      trigger.addEventListener('click', function (e) {
        // Only intercept on mobile (narrow viewport)
        var isMobile = window.matchMedia('(max-width: 860px)').matches;
        if (!isMobile) return; // let desktop click navigate normally

        e.preventDefault();
        var item = trigger.closest('.nav-item');
        var willOpen = !item.classList.contains('is-open');

        // Close all other dropdowns first
        dropdownItems.forEach(function (i) {
          if (i !== item) {
            i.classList.remove('is-open');
            var t = i.querySelector('a');
            if (t) t.setAttribute('aria-expanded', 'false');
          }
        });

        item.classList.toggle('is-open', willOpen);
        trigger.setAttribute('aria-expanded', willOpen ? 'true' : 'false');
      });
    });

    // ---- Close dropdowns on outside click ----
    document.addEventListener('click', function (e) {
      if (!e.target.closest('.nav-item.has-dropdown')) {
        dropdownItems.forEach(function (item) {
          item.classList.remove('is-open');
          var trigger = item.querySelector('a');
          if (trigger) trigger.setAttribute('aria-expanded', 'false');
        });
      }
    });

    // ---- Esc key closes any open dropdown ----
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape') {
        dropdownItems.forEach(function (item) {
          item.classList.remove('is-open');
          var trigger = item.querySelector('a');
          if (trigger) trigger.setAttribute('aria-expanded', 'false');
        });
        if (nav && nav.classList.contains('is-open')) {
          nav.classList.remove('is-open');
          if (toggle) toggle.setAttribute('aria-expanded', 'false');
        }
      }
    });

    // ---- Close mobile nav when a non-dropdown link is clicked ----
    var navLinks = document.querySelectorAll('.primary-nav > a, .nav-dropdown a');
    navLinks.forEach(function (link) {
      link.addEventListener('click', function () {
        if (nav && nav.classList.contains('is-open') && !link.closest('.nav-item.has-dropdown')) {
          nav.classList.remove('is-open');
          if (toggle) toggle.setAttribute('aria-expanded', 'false');
        }
        // Dropdown links — close the mobile nav after a short delay so the navigation happens
        if (link.closest('.nav-dropdown')) {
          setTimeout(function () {
            if (nav && nav.classList.contains('is-open')) {
              nav.classList.remove('is-open');
              if (toggle) toggle.setAttribute('aria-expanded', 'false');
            }
          }, 50);
        }
      });
    });
  });
})();
