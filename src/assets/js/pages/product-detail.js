import { products } from './data.js';
import { renderProducts } from './code.js';
import { cart, addToCart, updateCartQuantity } from './cart.js';

if (!Array.isArray(cart)) {
  localStorage.setItem('cart', JSON.stringify([]));
}

const params = new URLSearchParams(window.location.search);
const id = params.get("id");
const product = products.find(p => p.id === id);

// 🔹 CORRECCIÓN: Validar existencia y disponibilidad
if (product && product.isEnabled !== false) {
  const formatoCOP = new Intl.NumberFormat('es-CO', {
    style: 'currency',
    currency: 'COP',
    minimumFractionDigits: 0
  });

  const featuresHTML = product.features.map(f => `<li>${f}</li>`).join('');

  const productHTML = `
    <section class="product-detail">
      <section class="product-gallery">
        <img src="${product.image}" alt="${product.name}" class="product-main-image">
        <p class="product-note">*Imágen solo con fines ilustrativos.</p>
      </section>
      <section class="product-info">
        <h1 class="product-title">${product.name}</h1>
        <p class="product-price">${formatoCOP.format(product.price)}</p>
        <p class="product-short-desc">${product.shortdescription}</p>
        <div class="product-quantity">
          <button class="quantity-btn minus">-</button>
          <input type="number" value="1" min="1">
          <button class="quantity-btn plus">+</button>
        </div>
        <div class="product-actions">
          <button class="button btn-primary js-buy-now" data-product-id="${product.id}">Comprar ahora</button>
          <button class="button btn-outline js-add-to-cart" data-product-id="${product.id}">Añadir al carrito</button>
        </div>
      </section>
    </section>
    <section class="product-description">
      <h2>Descripción</h2>
      <p>${product.description}</p>
      <ul>${featuresHTML}</ul>
    </section>
  `;

  const container = document.getElementById('product-detail-general');
  container.innerHTML = productHTML;

  const quantityInput = container.querySelector('.product-quantity input');
  const plusBtn = container.querySelector('.quantity-btn.plus');
  const minusBtn = container.querySelector('.quantity-btn.minus');
  const addToCartBtn = container.querySelector('.js-add-to-cart');
  const buyNowBtn = container.querySelector('.js-buy-now');

  plusBtn.addEventListener('click', () => {
    quantityInput.value = Number(quantityInput.value) + 1;
  });

  minusBtn.addEventListener('click', () => {
    const newValue = Number(quantityInput.value) - 1;
    if (newValue >= 1) quantityInput.value = newValue;
  });

  addToCartBtn.addEventListener('click', () => {
    addToCart(product.id, Number(quantityInput.value) || 1);
    updateCartQuantity();
  });

  buyNowBtn.addEventListener('click', () => {
    addToCart(product.id, Number(quantityInput.value) || 1);
    window.location.href = `checkout.html`;
  });

} else {
  // 🔹 Redirigir si el producto no existe o no está disponible
  window.location.href = 'index.html';
}

const tePuedenInteresar = products.filter(p => p.tags.includes("te-puede-interesar") && p.isEnabled !== false);
renderProducts(tePuedenInteresar, '.js-productst-grid');