// Gamburger

const iconMenu = document.querySelector(".menu__icon");
const nojsIconMenu = document.querySelector(".menu__icon--nojs");     /* progressive enhancement */
const nojsHeader = document.querySelector(".main-header--nojs"); /* progressive enhancement */


if (iconMenu) {
  const menuNav = document.querySelector(".navigation-menu");
  menuNav.classList.remove("navigation-menu--nojs");  /* progressive enhancement */
  iconMenu.classList.remove("menu__icon--nojs");    /* progressive enhancement */
  nojsHeader.classList.remove("main-header--nojs");    /* progressive enhancement */
  iconMenu.addEventListener("click", function (e) {
    document.body.classList.toggle("page--lock");
    iconMenu.classList.toggle("menu__icon--active");
    menuNav.classList.toggle("navigation-menu--active");
  })
}
