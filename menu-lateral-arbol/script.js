const flechas = document.querySelectorAll(".arrow"); //Declaramos una constante que almacena todos los elementos de la clase .arrow

flechas.forEach((flecha) => {
  //Para cada uno de los elementos de la clase .arrow, cuando se realice un evento de click, se le asignará a dicho elemento la clase .rotate-arrow (gira la flecha) y al hermano de su elemento padre (.sub-menu) se le asignará la clase .show
  flecha.addEventListener("click", function () {
    const subMenu = this.parentElement.nextElementSibling; //En esta variable se almacena el hermano del padre de .arrow, que es .sub-menu
    subMenu.classList.toggle("show"); //Con esta sentencia se activa la clase .show de .sub-menu
    this.classList.toggle("rotate-arrow"); //Con esta sentencia se activa la clase .rotate-arrow de .arrow
  });
});
