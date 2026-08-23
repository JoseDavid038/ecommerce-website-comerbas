// Cargar modal informativo desde /components/modal-info.html
fetch("./components/modal-info.html")
  .then(res => res.text())
  .then(html => {
    document.body.insertAdjacentHTML("beforeend", html);

    // Activar eventos de cierre una vez que el HTML está en el DOM
    initGuideModalEvents();
  })
  .catch(err => console.error("Error cargando modal-info.html:", err));

function initGuideModalEvents() {
  const guideModal = document.getElementById("guideModal");
  const closeBtn = document.getElementById("closeGuideModalBtn");

  if (!guideModal) return;

  // 1. Clic en el botón "X" de cerrar
  if (closeBtn) {
    closeBtn.addEventListener("click", () => {
      guideModal.style.display = "none";
    });
  }

  // 2. Clic por fuera del contenedor blanco (Overlay)
  window.addEventListener("click", (e) => {
    if (e.target === guideModal) {
      guideModal.style.display = "none";
    }
  });
}