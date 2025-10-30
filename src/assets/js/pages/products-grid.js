
import { products } from './data.js';

// Formateador de moneda
const formatoCOP = new Intl.NumberFormat('es-CO', {
  style: 'currency',
  currency: 'COP',
  minimumFractionDigits: 0
});

// Función genérica para renderizar productos
function renderProducts(array, targetClass) {
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

// 🔹 Filtrar por categoría
const categorias = ["audio", "celulares", "lavadoras", "cocina", "televisores"];

categorias.forEach(categoria => {
  const productosFiltrados = products.filter(p => p.category === categoria);
  renderProducts(productosFiltrados, `.js-${categoria}-grid`);
});
