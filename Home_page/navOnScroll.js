$(window).scroll(function() {
    if ($(document).scrollTop() > 0) {
        $('nav').addClass('nav-on-scroll');
    }
    else {
        $('nav').removeClass('nav-on-scroll');
    }
});


const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".navigation");
const links = document.querySelectorAll(".navigation a");

hamburger.addEventListener("click", () => {
  navLinks.classList.toggle("open");
  links.forEach(link => {
    link.classList.toggle("fade");
  });
});