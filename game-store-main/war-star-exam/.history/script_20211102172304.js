const hamburger = document.querySelector(".hamburger");
const nav = document.querySelector(".nav");
const navLink = document.querySelectorAll(".nav-link");

hamburger.addEventListener("click", mobileMenu);
navLink.forEach(n => n.addEventListener("click", closeMenu));

function mobileMenu() {
    hamburger.classList.toggle("active");
    nav.classList.toggle("active");
}

function closeMenu() {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
}
// кінець гамбургер меню
const swiper = new Swiper('.swiper', {
    speed: 400,
    spaceBetween: 100,
  });const swiper = document.querySelector('.swiper').swiper;

// Now you can use all slider methods like
swiper.slideNext();