import { products } from './data.js';
import emailjs from '@emailjs/browser';

// ✅ Inicializar EmailJS
emailjs.init('AFzBD9_P32cSvOgdt');

document.addEventListener('DOMContentLoaded', function () {
  const form = document.getElementById('contact-form');
  if (!form) return;

  // Obtener referencia al botón de envío (ajusta la clase o ID si usas otro selector)
  const submitBtn = form.querySelector('button[type="submit"]') || form.querySelector('.btn-primary');

  form.addEventListener('submit', function (e) {
    e.preventDefault();

    // ---------------------------------------------------------
    // 1. VALIDACIÓN: Verificar que los correos coincidan
    // ---------------------------------------------------------
    const emailVal = document.getElementById('email').value.trim();
    const confirmEmailInput = document.getElementById('confirm_email');
    const confirmEmailVal = confirmEmailInput ? confirmEmailInput.value.trim() : ''; 
    const emailError = document.getElementById('emailError'); 

    if (confirmEmailInput && emailVal !== confirmEmailVal) {
       if(emailError) emailError.style.display = 'block';
       alert("❌ Los correos electrónicos no coinciden. Por favor verifícalos.");
       return; // Sale sin bloquear el botón
    } else {
       if(emailError) emailError.style.display = 'none';
    }

    // ---------------------------------------------------------
    // 2. BLOQUEO DEL BOTÓN (Evita doble clic)
    // ---------------------------------------------------------
    if (submitBtn) {
      submitBtn.disabled = true;
      submitBtn.dataset.originalText = submitBtn.innerHTML; // Guardar texto original
      submitBtn.innerHTML = 'Procesando... <i class="ri-loader-4-line spin"></i>';
    }

    // ---------------------------------------------------------
    // 3. Recopilación de Datos
    // ---------------------------------------------------------
    const name = document.getElementById('name').value.trim();
    const cedula = document.getElementById('cedula').value.trim();
    const ciudad = document.getElementById('ciudad') ? document.getElementById('ciudad').value.trim() : ''; 
    const email = document.getElementById('email').value.trim();
    const phone = document.getElementById('phone').value.trim();

    // ---------------------------------------------------------
    // 4. Lógica del Carrito
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

    const productListText = cartDetails.map((item, index) =>
      `${index + 1}. Código: ${item.id} — ${item.name} — Cant: ${item.quantity} — Precio: $${item.price.toLocaleString()} — Subtotal: $${item.total.toLocaleString()}`
    ).join('\n');

    const totalFinanciar = cartDetails.reduce((acc, item) => acc + item.total, 0);

    // ---------------------------------------------------------
    // 5. Construcción de URL
    // ---------------------------------------------------------
    const baseUrl = "https://creditrequest.comerbas.com";
    const redirectUrl = `${baseUrl}?PersonalID=${encodeURIComponent(cedula)}&Email=${encodeURIComponent(email)}&PhoneNumber=${encodeURIComponent(phone)}&CreditValue=${encodeURIComponent(totalFinanciar)}`;

    // ---------------------------------------------------------
    // 6. Envío con EmailJS
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

    emailjs.send('service_gatov8h', 'template_td6iz09', templateParams)
      .then(() => {
        // Limpiar formulario y carrito
        form.reset();
        localStorage.removeItem('cart'); 

        // MOSTRAR MODAL Y REDIRECCIONAR
        const modal = document.getElementById("procesoModal");
        
        if (modal) {
            modal.style.display = "flex";
            
            // A. Redirección Automática (4 segundos)
            const autoRedirect = setTimeout(() => {
                window.location.href = redirectUrl;
            }, 4000); 

            // B. Redirección Manual
            const btnAceptar = document.getElementById('modalAcceptBtn');
            if(btnAceptar) {
                btnAceptar.onclick = function() {
                    clearTimeout(autoRedirect);
                    window.location.href = redirectUrl;
                };
            }
        } else {
            window.location.href = redirectUrl;
        }
      })
      .catch(error => {
        console.error('Error al enviar:', error);
        alert('❌ Hubo un error al enviar el formulario. Intenta nuevamente.');

        // Reinstaurar el botón en caso de falla para que el usuario pueda reintentar
        if (submitBtn) {
          submitBtn.disabled = false;
          submitBtn.innerHTML = submitBtn.dataset.originalText;
        }
      });
  });
});