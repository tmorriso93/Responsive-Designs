// Javascript for ttthe toggle

let mainNav = document.getElementById("menu");
let navToggle = document.getElementById("js-navbar");
navToggle.addEventListener("click", function () {
  mainNav.classList.toggle("active");
});
