import {cart, decreaseQuantity,addToCart, updateCartQuantity, increaseQuantity} from './cart.js';
import { products } from './data.js';

// Formateador de moneda en pesos colombianos
const formatoCOP = new Intl.NumberFormat('es-CO', {
  style: 'currency',
  currency: 'COP',
  minimumFractionDigits: 0
});


let cartSummaryHTML = '';



cart.forEach((cartItem) => {

  const productId = cartItem.productId;
  let matchingProduct;

  products.forEach((product) => {
    if (product.id === productId){
      matchingProduct = product;
    };

  })


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
      }

      updateCartQuantity();
      console.log(cart);
      
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
    });
  });







