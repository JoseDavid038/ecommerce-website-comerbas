import {cart} from './cart.js';
import { getProduct } from './data.js';

// formateador de moneda
const formatoCOP = new Intl.NumberFormat('es-CO', {
  style: 'currency',
  currency: 'COP',
  minimumFractionDigits: 0
});

/**
 * Renderiza el resumen de pago.
 * - Maneja cart vacío.
 * - Ignora items cuyo producto no exista.
 */
export function renderOrderSummary(){
  if (!cart || cart.length === 0) {
    // Si el carrito está vacío mostramos cero y/o un mensaje compacto
    const emptyHTML = `
      <p class="detalle__subtotal">Total productos: <span>${formatoCOP.format(0)}</span></p>
      <p>Envío: <span>$0.00</span></p>
      <div class="subtotal-line">
        <p class="detalle__total">Total a financiar: <span>${formatoCOP.format(0)}</span></p>
      </div>
    `;
    const target = document.querySelector('.js-payment-summary');
    if (target) target.innerHTML = emptyHTML;
    return;
  }

  let productPrice = 0;

  cart.forEach((cartItem) => {
    const product = getProduct(cartItem.productId);

    // seguridad: ignorar si getProduct devuelve undefined
    if (!product) {
      console.warn(`Producto con id ${cartItem.productId} no encontrado en data.js — se omite.`);
      return;
    }

    productPrice += product.price * cartItem.quantity;
  });

  const paymentSummaryHTML = `
    <p class="detalle__subtotal">Total productos: <span>${formatoCOP.format(productPrice)}</span></p>
    
    <div class="subtotal-line">
      <p class="detalle__total">Total a financiar: <span>${formatoCOP.format(productPrice)}</span></p>
    </div>
  `;

  const target = document.querySelector('.js-payment-summary');
  if (target) target.innerHTML = paymentSummaryHTML;
}

// <p>Envío: <span>$0.00</span></p>
// **NO** llamar renderOrderSummary() aquí — lo llamamos desde checkout.js
