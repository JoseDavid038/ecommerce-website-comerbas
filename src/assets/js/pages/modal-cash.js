import { products } from './data.js'; 
import emailjs from '@emailjs/browser';

// Inicializar EmailJS (Asegúrate que esta sea tu KEY pública correcta)
emailjs.init('C6e2e5m5CWLeFl1hy'); 

// Cargar el HTML del modal
fetch("./components/modal-cash.html")
  .then(res => res.text())
  .then(html => {
    document.body.insertAdjacentHTML("beforeend", html);
    initCashEvents();
  });

function initCashEvents() {
  const btnOpen = document.getElementById("btnPayCash");
  const modal = document.getElementById("cashModal");
  const btnClose = document.getElementById("closeCashBtn");
  const btnCancel = document.getElementById("cancelCashBtn");
  const btnConfirm = document.getElementById("confirmCashBtn");
  const form = document.getElementById("contact-form");

  if (!btnOpen) return;

  // 1. ABRIR MODAL (CON VALIDACIÓN)
  btnOpen.addEventListener("click", () => {
    // Truco: Usamos reportValidity() del navegador para verificar campos vacíos
    if (form.reportValidity()) {
      modal.style.display = "flex";
    }
  });

  // 2. CERRAR MODAL
  const closeModal = () => modal.style.display = "none";
  btnClose.addEventListener("click", closeModal);
  btnCancel.addEventListener("click", closeModal);

  // 3. CONFIRMAR Y PAGAR
  btnConfirm.addEventListener("click", () => {
    btnConfirm.innerText = "Procesando...";
    btnConfirm.disabled = true;

    sendCashEmail(form);
  });
}

function sendCashEmail(form) {
  // Recopilar datos del formulario
  const name = document.getElementById('name').value;
  const cedula = document.getElementById('cedula').value;
  const email = document.getElementById('email').value;
  const phone = document.getElementById('phone').value;
  const city = document.getElementById('ciudad').value;

  // Obtener carrito
  const cart = JSON.parse(localStorage.getItem('cart')) || [];
  
  // Procesar productos
  const cartDetails = cart.map(item => {
    const id = item.id || item.productId || item.codigo;
    const product = products.find(p => p.id == id);
    const price = product ? product.price : 0;
    const prodName = product ? product.name : 'Producto desconocido';
    const total = price * item.quantity;
    return { name: prodName, quantity: item.quantity, price, total };
  });

  // Crear texto para el email
  const productListText = cartDetails.map((item, index) => 
    `${index + 1}. ${item.name} (x${item.quantity}) - $${item.total.toLocaleString()}`
  ).join('\n');

  const totalPagar = cartDetails.reduce((acc, item) => acc + item.total, 0);

  // Parámetros para EmailJS
  const templateParams = {
    name: name,
    cedula: cedula,
    email: email,
    phone: phone,
    // Agregamos la ciudad y método de pago al mensaje
    cart_items: `METODO DE PAGO: CONTADO\nCIUDAD: ${city}\n\nPRODUCTOS:\n${productListText}`,
    total: `$${totalPagar.toLocaleString()}`
  };

  // Enviar correo
  emailjs.send('service_l6nlo69', 'template_x8j0m3i', templateParams)
    .then(() => {
        // REDIRECCIÓN A AVALPAY
        window.location.href = "https://www.avalpaycenter.com/wps/portal/portal-de-pagos/web/pagos-aval/resultado-busqueda/realizar-pago?idConv=00020971&origen=buscar&login=temporal&bancaEmpresarial=false";
    })
    .catch((error) => {
        console.error("Error al enviar email:", error);
        alert("Hubo un error al procesar la solicitud. Por favor intenta nuevamente.");
        const btnConfirm = document.getElementById("confirmCashBtn");
        btnConfirm.innerText = "Aceptar y Pagar";
        btnConfirm.disabled = false;
    });
}