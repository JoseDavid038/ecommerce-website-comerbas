import {cart} from './cart.js';
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
    }
  })


  // Formatea el precio antes de mostrarlo
  const formattedPrice = formatoCOP.format(matchingProduct.price);

  cartSummaryHTML += `
  <div class="detalle__producto">
    <img src="${matchingProduct.image}" alt="" class="cart-item__image">
    <div class="cart-item__details">
      <p class="detalle__nombre">${matchingProduct.name}</p>
      <p class="detalle__precio">${formattedPrice}</p>
    </div>

    <div class="cart-item__actions">
      <button class="btn-qty minus">-</button>
      <p class="cart-item__quantity">${cartItem.quantity}</p>
      <button class="btn-qty plus">+</button>
    </div>
  </div>
  `;
});

document.querySelector('.js-order-summary').innerHTML = cartSummaryHTML;