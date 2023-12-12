const hamb = document.querySelector(".hamburger"); //Se almacena en una constante el elemento con la clase .hamburger
const navLinks = document.querySelector(".nav-links"); //Se almacena en una constante el elemento con la clase .nav-links

hamb.addEventListener("click", () => {
  //Para el elemento .hamburger, cuando se realice un evento "click", se activará la clase .active al elemento almacenado en la constante navLinks(.nav-links)
  navLinks.classList.toggle("active");
});

/* hamb.addEventListener("click", function () {
  navLinks.classList.toggle("active");
});
 */
/* hamb.addEventListener("click", function toggleNav() {
  navLinks.classList.toggle("active");
});
 */
