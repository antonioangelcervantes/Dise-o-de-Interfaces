const openBtn = document.getElementById("abrirModal");
const closeBtn = document.getElementById("cerrarModal");
const overlay = document.getElementById("overlay");
const modal = document.getElementById("modal");

function abrirModal() {
  // 1) Mostrar overlay
  overlay.classList.remove("hidden");

  // 2) Animar modal (de invisible y pequeño a visible y normal)
  modal.classList.remove("opacity-0");
  modal.classList.remove("scale-95");
  modal.classList.add("opacity-100");
  modal.classList.add("scale-100");
}

function cerrarModal() {
  // 1) Animar modal (de visible a invisible)
  modal.classList.remove("opacity-100");
  modal.classList.remove("scale-100");
  modal.classList.add("opacity-0");
  modal.classList.add("scale-95");

  // 2) Esperar a que acabe la transición para ocultar overlay
  setTimeout(function () {
    overlay.classList.add("hidden");
  }, 300);
}

openBtn.addEventListener("click", function () {
  abrirModal();
});

closeBtn.addEventListener("click", function () {
  cerrarModal();
});

// Cerrar al hacer click fuera del modal (en el overlay)
overlay.addEventListener("click", function (event) {
  // Si el click es exactamente sobre el overlay, se cierra.
  // Si el click ocurre dentro del modal, NO se cierra.
  if (event.target === overlay) {
    cerrarModal();
  }
});
