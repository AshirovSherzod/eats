let menu = document.querySelector(".header__hamburger");
let navbar = document.querySelector(".header__list");

menu.addEventListener("click", function () {
    navbar.classList.toggle("header__show-list")
})