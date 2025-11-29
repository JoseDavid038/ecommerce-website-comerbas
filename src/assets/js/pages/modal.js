// Cargar modal desde /components/modal.html
fetch("/components/modal.html")
  .then(res => res.text())
  .then(html => {
    document.body.insertAdjacentHTML("beforeend", html);

    // Activar listeners una vez cargado
    initModalEvents();
  });


function initModalEvents() {

  const closeBtn = document.getElementById("closeModalBtn");
  const acceptBtn = document.getElementById("modalAcceptBtn");
  const modal = document.getElementById("procesoModal");

  closeBtn.addEventListener("click", () => {
    modal.style.display = "none";
  });

  acceptBtn.addEventListener("click", () => {
    window.location.href = "https://creditrequest.comerbas.com"; // Cambia la ruta
  });
}
