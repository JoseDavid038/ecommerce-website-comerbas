
import { productsMasVendidos,productsRecomedados1,productsRecomedados2 } from './data.js';

// formateador de moneda
const formatoCOP = new Intl.NumberFormat('es-CO', {
  style: 'currency',
  currency: 'COP',
  minimumFractionDigits: 0
});


function renderProducts(array, targetClass) {
  const container = document.querySelector(targetClass);
  if (!container) return;

  container.innerHTML = array.map(product => `
    <article class="swiper-slide-card swiper-slide">
      <div class="card-image-container">
        <a href="detalleproducto.html?id=${product.id}"><img src="${product.image}" alt="${product.name}" class="card-image"></a>
      </div>
      <div class="card-info-container card-personas">
        <h2 class="name__product-card">${product.name}</h2>
        <p class="price">${formatoCOP.format(product.price)}</p>
      </div>
    </article>
  `).join('');
}

renderProducts(productsMasVendidos, '.js-productsMasV-grid');
renderProducts(productsRecomedados1, '.js-productsR1-grid');
renderProducts(productsRecomedados2, '.js-productsR2-grid');



