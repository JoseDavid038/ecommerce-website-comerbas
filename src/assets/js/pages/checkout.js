import {cart, decreaseQuantity, addToCart, updateCartQuantity, increaseQuantity, cleanDisabledProducts} from './cart.js';
import { products, getProduct} from './data.js';
import { renderOrderSummary } from './order-summary.js';

// 🔹 Limpiar carrito antes de mostrar nada
cleanDisabledProducts();

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
}

if (!cart || cart.length === 0) {
  showEmptyCartMessage();
  renderOrderSummary();
} else {
  let cartSummaryHTML = '';

  cart.forEach((cartItem) => {
    const productId = cartItem.productId;
    let matchingProduct = getProduct(productId);

    if (!matchingProduct) return;

    cartSummaryHTML += `
      <div class="detalle__producto js-cart-item-container-${matchingProduct.id}">
        <img src="${matchingProduct.image}" alt="" class="cart-item__image">
        <div class="cart-item__details">
          <p class="detalle__nombre">${matchingProduct.name}</p>
          <p class="detalle__precio">${formatoCOP.format(matchingProduct.price)}</p>
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

  document.querySelectorAll('.js-delete-quantity').forEach((link) => {
    link.addEventListener('click', () => {
      const productId = link.dataset.productId;
      decreaseQuantity(productId);
      window.location.reload(); // Recarga para re-validar todo
    });
  });

  document.querySelectorAll('.js-increase-to-cart').forEach((button) => {
    button.addEventListener('click', () => {
      const productId = button.closest('.detalle__producto').querySelector('.js-delete-quantity').dataset.productId;
      increaseQuantity(productId);
      window.location.reload();
    });
  });
}