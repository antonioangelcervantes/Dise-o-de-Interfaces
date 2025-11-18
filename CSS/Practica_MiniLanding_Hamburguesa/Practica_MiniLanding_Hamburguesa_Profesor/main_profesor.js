// Menú hamburguesa: mostrar / ocultar navegación en móviles

const botonMenu = document.querySelector(".btn-menu");
const nav = document.querySelector("nav");

botonMenu.addEventListener("click", function () {
    nav.classList.toggle("activo");
});