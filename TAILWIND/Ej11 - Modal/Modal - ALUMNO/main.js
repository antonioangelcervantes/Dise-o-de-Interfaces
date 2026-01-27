const openBtn = document.getElementById("openModal");
const closeBtn = document.getElementById("closeModal");
const overlay = document.getElementById("overlay");
const modal = document.getElementById("modal");

openBtn.addEventListener("click", function () {
  overlay.classList.remove("hidden");
  modal.classList.remove("opacity-0", "scale-95");
  modal.classList.add("opacity-100", "scale-100");
});

closeBtn.addEventListener("click", function () {
  modal.classList.remove("opacity-100", "scale-100");
  modal.classList.add("opacity-0", "scale-95");

  setTimeout(function () {
    overlay.classList.add("hidden");
  }, 300);
});

overlay.addEventListener("click", function (event) {
  if (event.target === overlay) {
    modal.classList.remove("opacity-100", "scale-100");
    modal.classList.add("opacity-0", "scale-95");

    setTimeout(function () {
      overlay.classList.add("hidden");
    }, 300);
  }
});
