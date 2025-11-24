// Activar / desactivar el menú hamburguesa usando Tailwind
const btnMenu = document.querySelector(".btn-menu");
const nav = document.getElementById("nav");

if (btnMenu && nav) {
  btnMenu.addEventListener("click", function () {
    // La clase "hidden" es de Tailwind y pone display: none;
    // al quitarla, el menú móvil se muestra.
    nav.classList.toggle("hidden");
  });
}