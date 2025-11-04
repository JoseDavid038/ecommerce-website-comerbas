import {cart} from './cart.js';
import { getProduct } from './data.js';

// formateador de moneda
const formatoCOP = new Intl.NumberFormat('es-CO', {
  style: 'currency',
  currency: 'COP',
  minimumFractionDigits: 0
});

export function renderOrderSummary(){

  let productPrice = 0;

  cart.forEach((cartItem) => {
    const product = getProduct(cartItem.productId);
    productPrice += product.price * cartItem.quantity;
  });

  const paymentSummaryHTML = `<p class="detalle__subtotal">Total productos: <span>${formatoCOP.format(productPrice)}</span></p>
            <p>Envío: <span>$0.00</span></p>
            <div class="subtotal-line">
            <p class="detalle__total">Total a financiar: <span>${formatoCOP.format(productPrice)}</span></p>
            </div>
    `;


  document.querySelector('.js-payment-summary').innerHTML = paymentSummaryHTML;

};

renderOrderSummary();

