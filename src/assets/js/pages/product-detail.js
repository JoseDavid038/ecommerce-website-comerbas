import { products } from './data.js';
import { renderProducts } from './code.js';
import { cart, addToCart, updateCartQuantity } from './cart.js';

// 🧠 Asegurar que cart sea un arreglo, incluso si es null
if (!Array.isArray(cart)) {
  localStorage.setItem('cart', JSON.stringify([]));
}

// --- Obtener el ID del producto desde la URL ---
const params = new URLSearchParams(window.location.search);
const id = params.get("id");
const product = products.find(p => p.id === id);

// --- Renderizar el producto ---
if (product) {
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
      </section>

      <section class="product-info">
        <h1 class="product-title">${product.name}</h1>
        <p class="product-price">${formatoCOP.format(product.price)}</p>
        <p class="product-short-desc">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam cursus tellus eget fringilla sagittis.</p>

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

  // Inserta el HTML del producto
  const container = document.getElementById('product-detail-general');
  container.innerHTML = productHTML;

  // --- Eventos después de insertar el HTML ---
  const quantityInput = container.querySelector('.product-quantity input');
  const plusBtn = container.querySelector('.quantity-btn.plus');
  const minusBtn = container.querySelector('.quantity-btn.minus');
  const addToCartBtn = container.querySelector('.js-add-to-cart');
  const buyNowBtn = container.querySelector('.js-buy-now');

  // Controles de cantidad
  plusBtn.addEventListener('click', () => {
    quantityInput.value = Number(quantityInput.value) + 1;
  });

  minusBtn.addEventListener('click', () => {
    const newValue = Number(quantityInput.value) - 1;
    if (newValue >= 1) quantityInput.value = newValue;
  });

  // Añadir al carrito
  addToCartBtn.addEventListener('click', () => {
    const quantity = Number(quantityInput.value) || 1;
    
    addToCart(product.id, quantity);
    updateCartQuantity();
  });

  // Comprar ahora
  buyNowBtn.addEventListener('click', () => {
    const productId = product.id;
    const quantity = Number(quantityInput.value) || 1;
    
    // Verifica si el producto ya está en el carrito
  const existingItem = cart.find(item => item.productId === productId);

  if (existingItem) {
    console.log(`✅ El producto ${productId} ya está en el carrito. No se agregan más unidades.`);
  } else {
    console.log(`🛒 El producto ${productId} no estaba en el carrito. Agregando ${quantity} unidad(es).`);
    addToCart(productId, quantity);
    updateCartQuantity();
  };

    // 🔗 Redirección compatible con local y producción
    const checkoutURL = `${import.meta.env.BASE_URL}checkout.html`;
    window.location.href = checkoutURL;
  });

} else {
  document.getElementById('product-detail-general').innerHTML = "<p>Producto no encontrado.</p>";
}

// --- Productos relacionados ---
const tePuedenInteresar = products.filter(p => p.tags.includes("te-puede-interesar"));
renderProducts(tePuedenInteresar, '.js-productst-grid');
