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
    <article class="swiper-slide-card swiper-slide product-card">
      <div class="card-image-container">
        <a href="detalleproducto.html?id=${product.id}">
          <img src="${product.image}" alt="${product.name}" class="card-image">
        </a>
      </div>
      <div class="card-info-container">
        <h2 class="name__product-card">${product.name}</h2>
        <p class="price">${formatoCOP.format(product.price)}</p>
      </div>
    </article>
  `).join('');
}

// 🔹 1. FILTRO DE SEGURIDAD: Solo productos habilitados
// Creamos una lista limpia que solo contiene lo que está disponible
const availableProducts = products.filter(p => p.isEnabled !== false);

// 🔹 2. Filtramos usando la lista de productos DISPONIBLES
const masVendidos = availableProducts.filter(p => p.tags.includes("mas-vendido"));
const recomendados = availableProducts.filter(p => p.tags.includes("recomendado1"));
const recomendados2 = availableProducts.filter(p => p.tags.includes("recomendado2"));

// --- Renderizamos en sus secciones ---
renderProducts(masVendidos, '.js-productsMasV-grid');
renderProducts(recomendados, '.js-productsR1-grid');
renderProducts(recomendados2, '.js-productsR2-grid');