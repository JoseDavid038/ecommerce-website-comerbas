import {cart, decreaseQuantity,addToCart, updateCartQuantity, increaseQuantity} from './cart.js';
import { products, getProduct} from './data.js';
import { renderOrderSummary } from './order-summary.js';


// Formateador de moneda en pesos colombianos
const formatoCOP = new Intl.NumberFormat('es-CO', {
  style: 'currency',
  currency: 'COP',
  minimumFractionDigits: 0
});


function showEmptyCartMessage() {
  const mainContainer = document.querySelector('main');
  if (mainContainer) {
    mainContainer.innerHTML = `
      <section class="empty-cart container">
        <h2>Tu carrito está vacío 🛒</h2>
        <p>Agrega productos desde nuestra tienda para continuar con tu compra.</p>
        <a href="productos.html" class="button btn-primary">Ver productos</a>
      </section>
    `;
  }

  // Limpia también el resumen de pago
  const summaryContainer = document.querySelector('.js-payment-summary');
  if (summaryContainer) {
    summaryContainer.innerHTML = `
      <p class="detalle__subtotal">Total productos: <span>$0</span></p>
      <p>Envío: <span>$0.00</span></p>
      <div class="subtotal-line">
        <p class="detalle__total">Total a financiar: <span>$0</span></p>
      </div>
    `;
  }
}



// Si el carrito está vacío mostramos un mensaje y llamamos al render del resumen (vacío)
if (!cart || cart.length === 0) {
  showEmptyCartMessage();
  
  
}else {



let cartSummaryHTML = '';



cart.forEach((cartItem) => {

  const productId = cartItem.productId;
  let matchingProduct = getProduct(productId);


  // Formatea el precio antes de mostrarlo
    if (!matchingProduct) {
    console.warn(`⚠️ Producto con ID ${productId} no encontrado en data.js`);
    return; // salta al siguiente item del carrito
  }

  const formattedPrice = formatoCOP.format(matchingProduct.price);


  cartSummaryHTML += `
  <div class="detalle__producto js-cart-item-container-${matchingProduct.id}">
    <img src="${matchingProduct.image}" alt="" class="cart-item__image">
    <div class="cart-item__details">
      <p class="detalle__nombre">${matchingProduct.name}</p>
      <p class="detalle__precio">${formattedPrice}</p>
    </div>

    <div class="cart-item__actions">
      <span class="btn-qty minus js-delete-quantity" data-product-id="${matchingProduct.id}">-</span>
      <p class="cart-item__quantity js-cart-item__quantity">${cartItem.quantity}</p>
      <span class="btn-qty plus js-increase-to-cart">+</span>
    </div>
  </div>
  `;
});

document.querySelector('.js-order-summary').innerHTML = cartSummaryHTML;
renderOrderSummary();

// document.querySelectorAll('.js-delete-quantity')
//   .forEach((link) => {
//     link.addEventListener('click', () => {
//       const productId = Number(link.dataset.productId);
//       removeFromCart(productId);
//       console.log(cart);
//     });

// });


document.querySelectorAll('.js-delete-quantity')
  .forEach((link) => {
    link.addEventListener('click', () => {
      const productId = link.dataset.productId;
      // Buscamos el producto en el carrito
      const matchingItem = cart.find(item => item.productId === productId);

      if (matchingItem && matchingItem.quantity > 1) {
        // Solo disminuye cantidad si hay más de una unidad
        decreaseQuantity(productId);

        // Actualiza solo el número en pantalla sin recargar
        const quantityElement = link.parentElement.querySelector('.js-cart-item__quantity');
        quantityElement.textContent = matchingItem.quantity - 1;

      } else {
        // Si es 1, elimina del carrito y del HTML
        decreaseQuantity(productId);
        const container = document.querySelector(`.js-cart-item-container-${productId}`);
        if (container) container.remove();

        //  Nuevo: si el carrito queda vacío, mostramos el mensaje
        if (cart.length === 0) {
          showEmptyCartMessage();
        }
      }

      updateCartQuantity();
      console.log(cart);
      renderOrderSummary();
      
    });
  });


  document.querySelectorAll('.js-increase-to-cart')
  .forEach((button) => {
    button.addEventListener('click', () => {
      const productId = button.closest('.detalle__producto').querySelector('.js-delete-quantity').dataset.productId;

      // Aumenta la cantidad en el carrito
      increaseQuantity(productId);

      // Busca el producto actualizado
      const matchingItem = cart.find(item => item.productId === productId);

      // Actualiza la cantidad mostrada en pantalla
      const quantityElement = button.parentElement.querySelector('.js-cart-item__quantity');
      quantityElement.textContent = matchingItem.quantity;

      // Actualiza el contador del ícono del carrito
      updateCartQuantity();

      console.log(cart);
      renderOrderSummary();
    });
  });
}


  





