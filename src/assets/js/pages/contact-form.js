// import emailjs from '@emailjs/browser';

// document.addEventListener('DOMContentLoaded', function () {
//   const form = document.getElementById('contact-form');

//   form.addEventListener('submit', function (e) {
//     e.preventDefault();

//     emailjs.sendForm(
//       'service_l6nlo69',
//       'template_x8j0m3i',
//       this,
//       'C6e2e5m5CWLeFl1hy'
//     )
//     .then(() => {
//       alert('Message sent successfully!');
//       form.reset();
//     }, (error) => {
//       alert('Failed to send message: ' + error.text);
//     });
//   });
// });

import { products } from './data.js';
import emailjs from '@emailjs/browser';

// ✅ Inicializar EmailJS
emailjs.init('C6e2e5m5CWLeFl1hy');

document.addEventListener('DOMContentLoaded', function () {
  const form = document.getElementById('contact-form');
  if (!form) return;

  form.addEventListener('submit', function (e) {
    e.preventDefault();

    // 1. Datos del formulario
    const name = document.getElementById('name').value.trim();
    const cedula = document.getElementById('cedula').value.trim();
    
    const ciudad = document.getElementById('ciudad') ? document.getElementById('ciudad').value.trim() : ''; 
    const email = document.getElementById('email').value.trim();
    const phone = document.getElementById('phone').value.trim();

    // 2. Obtener carrito
    const cart = JSON.parse(localStorage.getItem('cart')) || [];

    // 3. Vincular productos con data.js
    const cartDetails = cart.map(item => {
      const id = item.id || item.productId || item.codigo;
      const product = products.find(p => p.id == id);
      const price = product ? product.price : 0;
      const productName = product ? product.name : 'Producto desconocido';
      const total = price * item.quantity;

      return { id, name: productName, quantity: item.quantity, price, total };
    });

    // Texto para el correo
    const productListText = cartDetails.map((item, index) =>
      `${index + 1}. Código: ${item.id} — ${item.name} — Cant: ${item.quantity} — Precio: $${item.price.toLocaleString()} — Subtotal: $${item.total.toLocaleString()}`
    ).join('\n');

    // Total a financiar (Número puro para la URL)
    const totalFinanciar = cartDetails.reduce((acc, item) => acc + item.total, 0);

    // 🚀 NUEVO: Preparamos los datos para la URL de redirección
    // Unimos los nombres de los productos con comas
    const productNames = cartDetails.map(item => item.name).join(', ');
    
    // URL Base
    const baseUrl = "https://creditrequest.comerbas.com";

    // Construimos la URL con encodeURIComponent (Método seguro GET)
    // Parámetros: PersonalID, Email, PhoneNumber, CreditValue, Observations
    const redirectUrl = `${baseUrl}?PersonalID=${encodeURIComponent(cedula)}&Email=${encodeURIComponent(email)}&PhoneNumber=${encodeURIComponent(phone)}&CreditValue=${encodeURIComponent(totalFinanciar)}&Observations=${encodeURIComponent(productNames)}`;

    // Parámetros EmailJS
    const templateParams = {
      name,
      cedula,
      ciudad,
      email,
      phone,
      cart_items: productListText,
      total: `$${totalFinanciar.toLocaleString()}`
    };

    // Enviar con EmailJS
    emailjs.send('service_l6nlo69', 'template_x8j0m3i', templateParams)
      .then(() => {
        
        // Limpiar
        form.reset();
        localStorage.removeItem('cart'); 

        // 1. Mostrar el Modal
        const modal = document.getElementById("procesoModal");
        if (modal) {
            modal.style.display = "flex";
            
            // Log para verificar en consola que la URL se creó bien (opcional para ti)
            console.log("URL de Redirección generada:", redirectUrl); 

            // 2. Redirección Automática (Backup por si el usuario no da click)
            const autoRedirect = setTimeout(() => {
                window.location.href = redirectUrl;
            }, 4000); 

            // 3. ✅ CORRECCIÓN AQUÍ: Usamos getElementById
            const btnAceptar = document.getElementById('modalAcceptBtn');
            
            if(btnAceptar) {
                btnAceptar.onclick = function() {
                    // Cancelamos el temporizador automático para que no intente redirigir dos veces
                    clearTimeout(autoRedirect);
                    // Redirigimos manualmente
                    window.location.href = redirectUrl;
                };
            }
        } else {
            // Si por alguna razón el modal falla, redirigir directo
            window.location.href = redirectUrl;
        }
      })
      .catch(error => {
        console.error('Error al enviar:', error);
        alert('❌ Hubo un error al enviar el formulario.');
      });
  });
});

