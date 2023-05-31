import animation from "../storage/animation.js";
animation.show();
let navbarToggler = document.querySelector('.navbar-toggler');
let navbarNav = document.querySelector('.navbar-nav');

navbarToggler.addEventListener('click', () => {
  navbarToggler.classList.toggle('open');
  navbarNav.classList.toggle('open');
});



