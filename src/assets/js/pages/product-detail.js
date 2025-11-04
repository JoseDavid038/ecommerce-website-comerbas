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
              <button class="quantity-btn">-</button>
              <input type="number" value="1" min="1">
              <button class="quantity-btn">+</button>
            </div>

            
            <div class="product-actions">
              <a href="cart.html" class="button btn-primary"><button class="btn-primary">Comprar ahora</button></a>
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




document.querySelectorAll('.js-add-to-cart')
    .forEach((button) => {
      button.addEventListener('click', () => {
       const productId = button.dataset.productId;

       addToCart(productId);
       updateCartQuantity();

      });
    });

