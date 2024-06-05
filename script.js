const scroll = new LocomotiveScroll({
  el: document.querySelector("#main"),
  smooth: true,
});

var a = document.querySelector("#elem-container");
var fixed = document.querySelector("#fixed-image");
a.addEventListener("mouseenter", function () {
  fixed.style.display = "block";
});
a.addEventListener("mouseleave", function () {
  fixed.style.display = "none";
});

var elems = document.querySelectorAll(".elem");

elems.forEach((element) => {
  element.addEventListener("mouseenter", () => {
    var imageAdd = element.getAttribute("data-image");
    fixed.style.backgroundImage = `url(${imageAdd})`;
  });
});

var swiper = new Swiper(".mySwiper", {
  slidesPerView: "auto",
  centeredSlides: true,
  spaceBetween: 30,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});

var flag = 0;
var body = document.querySelector("body");
var menu = document.querySelector("nav h3");
var full = document.querySelector("#full-scr");
var navImage = document.querySelector("nav img");
var menuline1 = document.querySelector("#menu-div #menuline1");
var menuline2 = document.querySelector("#menu-div #menuline2");
menu.addEventListener("click", () => {
  if (flag === 0) {
    full.style.top = "0";
    navImage.style.opacity = "0";
    menuline1.style.animation = "rotate 0.6s forwards";
    menuline2.style.animation = "rotateRight 0.6s forwards";
    document.body.style.overflow = "hidden";

    flag = 1;
  } else {
    full.style.top = "-100%";
    navImage.style.opacity = "100";
    menuline1.style.animation = "rotateback 0.6s forwards";
    menuline2.style.animation = "rotateRightback 0.6s forwards";
    document.body.style.overflow = "visible";
    flag = 0;
  }
});

var loader = document.querySelector("#loader");
setTimeout(() => {
  loader.style.top = "-100%";
}, 4000);
