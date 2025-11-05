
import { products } from './data.js';

// formateador de moneda
const formatoCOP = new Intl.NumberFormat('es-CO', {
  style: 'currency',
  currency: 'COP',
  minimumFractionDigits: 0
});


export function renderProducts(array, targetClass) {
  const container = document.querySelector(targetClass);
  if (!container) return;

  container.innerHTML = array.map(product => `
    <article class="swiper-slide-card swiper-slide">
      <div class="card-image-container">
        <a href="detalleproducto.html?id=${product.id}">
          <img src="${product.image}" alt="${product.name}" class="card-image">
        </a>
      </div>
      <div class="card-info-container card-personas">
        <h2 class="name__product-card">${product.name}</h2>
        <p class="price">${formatoCOP.format(product.price)}</p>

       

      </div>
    </article>
  `).join('');
}

// --- Filtramos los productos según su tag ---
const masVendidos = products.filter(p => p.tags.includes("mas-vendido"));
const recomendados = products.filter(p => p.tags.includes("recomendado1"));
const recomendados2 = products.filter(p => p.tags.includes("recomendado2"));

// --- Renderizamos en sus secciones ---
renderProducts(masVendidos, '.js-productsMasV-grid');
renderProducts(recomendados, '.js-productsR1-grid');
renderProducts(recomendados2, '.js-productsR2-grid');



// agregar features a la card 
 /* ${product.features && product.features.length > 0 ? `
        //   <ul class="product-features">
        //     ${product.features.map(f => `<li>${f}</li>`).join('')}
        //   </ul>
        // ` : ""}*/
