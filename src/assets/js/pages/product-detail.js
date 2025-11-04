import { products } from './data.js';
import {addToCart, updateCartQuantity} from './cart.js'; // importa datos


const params = new URLSearchParams(window.location.search);
const id = params.get("id");

const product = products.find(p => p.id === id);

if (product) {
  const formatoCOP = new Intl.NumberFormat('es-CO', {
    style: 'currency',
    currency: 'COP',
    minimumFractionDigits: 0
  });

  // Crea lista de características
  const featuresHTML = product.features
    .map(feature => `<li>${feature}</li>`)
    .join('');

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

        
        <section class="product-description ">
          <h2>Descripción</h2>
          <p>
            ${product.description}
          </p>
          <ul>
            ${featuresHTML}
          </ul>
        </section>
  `;

  document.getElementById('product-detail-general').innerHTML = productHTML;
} else {
  document.getElementById('product-detail-general').innerHTML = "<p>Producto no encontrado.</p>";
}


// --- Controlar botones + y - ---
document.addEventListener('click', (event) => {
  const quantityInput = document.querySelector('.product-quantity input');

  if (event.target.classList.contains('plus')) {
    quantityInput.value = Number(quantityInput.value) + 1;
  }

  if (event.target.classList.contains('minus')) {
    const newValue = Number(quantityInput.value) - 1;
    if (newValue >= 1) {
      quantityInput.value = newValue;
    }
  }
});




document.querySelectorAll('.js-add-to-cart').forEach((button) => {
  button.addEventListener('click', () => {
    const productId = button.dataset.productId;
    const quantityInput = document.querySelector('.product-quantity input');
    const quantity = Number(quantityInput.value) || 1;

    addToCart(productId, quantity);

    updateCartQuantity();
  });
});


// Botón "Comprar ahora"
document.addEventListener('click', (e) => {
  if (e.target.closest('.btn-primary')) {
    const productId = document.querySelector('.js-add-to-cart').dataset.productId;
    const quantityInput = document.querySelector('.product-quantity input');
    const quantity = Number(quantityInput.value) || 1;

    addToCart(productId, quantity);
    updateCartQuantity();

    // Redirige al checkout
    window.location.href = 'checkout.html';
  }
});



