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

// ✅ Inicializar EmailJS con tu clave pública
emailjs.init('C6e2e5m5CWLeFl1hy');

document.addEventListener('DOMContentLoaded', function () {
  const form = document.getElementById('contact-form');
  if (!form) return;

  form.addEventListener('submit', function (e) {
    e.preventDefault();

    // Datos del formulario
    const name = document.getElementById('name').value.trim();
    const cedula = document.getElementById('cedula').value.trim();
    const email = document.getElementById('email').value.trim();
    const phone = document.getElementById('phone').value.trim();

    // Obtener carrito desde localStorage
    const cart = JSON.parse(localStorage.getItem('cart')) || [];

    // Vincular productos con data.js
    const cartDetails = cart.map(item => {
      // Detectar propiedad id (puede ser id, productId o codigo)
      const id = item.id || item.productId || item.codigo;

      // Buscar en data.js
      const product = products.find(p => p.id == id);

      const price = product ? product.price : 0;
      const name = product ? product.name : 'Producto desconocido';
      const total = price * item.quantity;

      return {
        id,
        name,
        quantity: item.quantity,
        price,
        total
      };
    });

    // Texto del correo
    const productListText = cartDetails.map((item, index) =>
      `${index + 1}. Código: ${item.id} — ${item.name} — Cant: ${item.quantity} — Precio: $${item.price.toLocaleString()} — Subtotal: $${item.total.toLocaleString()}`
    ).join('\n');

    // Total a financiar
    const totalFinanciar = cartDetails.reduce((acc, item) => acc + item.total, 0);

    // Parámetros EmailJS
    const templateParams = {
      name,
      cedula,
      email,
      phone,
      cart_items: productListText,
      total: `$${totalFinanciar.toLocaleString()}`
    };

    // Enviar con EmailJS
    emailjs.send('service_l6nlo69', 'template_x8j0m3i', templateParams)
      .then(() => {
        // alert("✅ Solicitud enviada con éxito.\n" +
        //       "👉 Continúa para completar el último paso.");
        form.reset();

        // setTimeout(() => {
          document.getElementById("procesoModal").style.display = "flex";
          // }, 200);
      })
      .catch(error => {
        console.error('Error al enviar:', error);
        alert('❌ Hubo un error al enviar el formulario.');
      });
  });
});

