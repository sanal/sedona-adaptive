var menuButton = document.querySelector(".main-header__menu-toggle");
var menuModal = document.querySelector(".main-nav");

menuModal.classList.add("main-nav--hide");
menuButton.classList.add("main-header__menu-toggle--show");
menuButton.classList.add("main-header__menu-toggle--open");

menuButton.addEventListener("click", function (evt) {
  evt.preventDefault();
  menuModal.classList.toggle("main-nav--hide");
  menuButton.classList.toggle("main-header__menu-toggle--open");
});
