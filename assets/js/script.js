'use sctrict';

/**
 * Mobile navbar toggle
 */

const navbar = document.querySelector("[data-navbar]")
const navToggler = document.querySelector("[data-nav-toggler]")

navToggler.addEventListener("click", function() {
    navbar.classList.toggle("active");
});


/**
 * Header active
 */

const header = document.querySelector("[data-header]")

window.addEventListener("scroll", function() {
    header.classList[this.scrollY > 50 ? "add" : "remove"]("active");
});

/**
 * SWIPER   
 */

let swiper = new Swiper(".portfolio__container", {
    cssMode: true,
    lopp: true,
    
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
});