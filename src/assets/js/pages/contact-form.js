import { products } from './data.js';
import emailjs from '@emailjs/browser';

// ✅ Inicializar EmailJS con tu clave pública
emailjs.init('C6e2e5m5CWLeFl1hy');

document.addEventListener('DOMContentLoaded', function () {
  const form = document.getElementById('contact-form');
  if (!form) return;

  form.addEventListener('submit', function (e) {
    
    // ---------------------------------------------------------
    // 1. VALIDACIÓN: Verificar que los correos coincidan antes de nada
    // ---------------------------------------------------------
    const emailVal = document.getElementById('email').value.trim();
    // Asegúrate de que en tu HTML el segundo input tenga id="confirm_email"
    const confirmEmailInput = document.getElementById('confirm_email');
    const confirmEmailVal = confirmEmailInput ? confirmEmailInput.value.trim() : ''; 
    const emailError = document.getElementById('emailError'); 

    if (confirmEmailInput && emailVal !== confirmEmailVal) {
       e.preventDefault(); // Detiene el envío
       
       // Muestra el mensaje de error rojo si existe en el HTML
       if(emailError) emailError.style.display = 'block';
       
       alert("❌ Los correos electrónicos no coinciden. Por favor verifícalos.");
       return; // Sale de la función, no envía nada
    } else {
       if(emailError) emailError.style.display = 'none';
    }

    // Si pasa la validación, prevenimos el comportamiento por defecto para usar EmailJS
    e.preventDefault();

    // ---------------------------------------------------------
    // 2. Recopilación de Datos
    // ---------------------------------------------------------
    const name = document.getElementById('name').value.trim();
    const cedula = document.getElementById('cedula').value.trim();
    const ciudad = document.getElementById('ciudad') ? document.getElementById('ciudad').value.trim() : ''; 
    const email = document.getElementById('email').value.trim();
    const phone = document.getElementById('phone').value.trim();

    // ---------------------------------------------------------
    // 3. Lógica del Carrito
    // ---------------------------------------------------------
    const cart = JSON.parse(localStorage.getItem('cart')) || [];

    const cartDetails = cart.map(item => {
      const id = item.id || item.productId || item.codigo;
      const product = products.find(p => p.id == id);
      const price = product ? product.price : 0;
      const productName = product ? product.name : 'Producto desconocido';
      const total = price * item.quantity;

      return { id, name: productName, quantity: item.quantity, price, total };
    });

    // Texto para el cuerpo del correo
    const productListText = cartDetails.map((item, index) =>
      `${index + 1}. Código: ${item.id} — ${item.name} — Cant: ${item.quantity} — Precio: $${item.price.toLocaleString()} — Subtotal: $${item.total.toLocaleString()}`
    ).join('\n');

    // Total a financiar (Número puro para la URL)
    const totalFinanciar = cartDetails.reduce((acc, item) => acc + item.total, 0);

    // ---------------------------------------------------------
    // 4. Construcción de la URL de Redirección
    // ---------------------------------------------------------
    const baseUrl = "https://creditrequest.comerbas.com";

    // URL con parámetros codificados y seguros (Sin observations, como pediste)
    const redirectUrl = `${baseUrl}?PersonalID=${encodeURIComponent(cedula)}&Email=${encodeURIComponent(email)}&PhoneNumber=${encodeURIComponent(phone)}&CreditValue=${encodeURIComponent(totalFinanciar)}`;

    // ---------------------------------------------------------
    // 5. Envío con EmailJS
    // ---------------------------------------------------------
    const templateParams = {
      name,
      cedula,
      ciudad,
      email,
      phone,
      cart_items: productListText,
      total: `$${totalFinanciar.toLocaleString()}`
    };

    emailjs.send('service_l6nlo69', 'template_x8j0m3i', templateParams)
      .then(() => {
        
        // Limpiar formulario y carrito
        form.reset();
        localStorage.removeItem('cart'); 

        // MOSTRAR MODAL Y REDIRECCIONAR
        const modal = document.getElementById("procesoModal");
        
        if (modal) {
            modal.style.display = "flex";
            
            // A. Redirección Automática (Backup: 4 segundos)
            const autoRedirect = setTimeout(() => {
                window.location.href = redirectUrl;
            }, 4000); 

            // B. Redirección Manual (Botón Aceptar)
            const btnAceptar = document.getElementById('modalAcceptBtn');
            
            if(btnAceptar) {
                btnAceptar.onclick = function() {
                    clearTimeout(autoRedirect); // Evita doble redirección
                    window.location.href = redirectUrl;
                };
            }
        } else {
            // Si el modal falla, redirigir directo
            window.location.href = redirectUrl;
        }
      })
      .catch(error => {
        console.error('Error al enviar:', error);
        alert('❌ Hubo un error al enviar el formulario. Intenta nuevamente.');
      });
  });
});