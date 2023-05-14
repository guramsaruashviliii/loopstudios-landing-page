const burger = document.querySelector(".hamburger");
const close = document.querySelector(".close__icon");
const mobileMenu = document.querySelector("#menu");

function OpenTheMobileMenu() {
  mobileMenu.classList.add("mobile__menu__active");
}

function closeTheMobileMenu() {
  mobileMenu.classList.remove("mobile__menu__active");
}

burger.addEventListener("click", OpenTheMobileMenu);
close.addEventListener("click", closeTheMobileMenu);
document.addEventListener("keydown", function (e) {
  if (e.key === "Escape") {
    if (mobileMenu.classList.contains("mobile__menu__active"))
      closeTheMobileMenu();
  }
});
