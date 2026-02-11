import { products } from './data.js';

// Formateador de moneda
const formatoCOP = new Intl.NumberFormat('es-CO', {
  style: 'currency',
  currency: 'COP',
  minimumFractionDigits: 0
});

// Función de ordenamiento
const sortBySize = (a, b) => {
  const valA = a.specs?.size_value || 0;
  const valB = b.specs?.size_value || 0;
  return valA - valB;
};

// Función genérica para renderizar productos
function renderProducts(array, targetClass) {
  const container = document.querySelector(targetClass);
  if (!container) return;

  container.innerHTML = array.map(product => `
    <article class="product-card">
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

// 🔹 1. FILTRO DE SEGURIDAD
const activeProducts = products.filter(p => p.isEnabled !== false);

// 🔹 2. Filtrar por categoría y ORDENAR
const categorias = ["audio_video", "celulares", "computadores", "electromenores", "linea_blanca", "bicicletas"];

categorias.forEach(categoria => {
  // Filtramos y aplicamos el ordenamiento antes de renderizar
  const productosFiltrados = activeProducts
    .filter(p => p.category === categoria)
    .sort(sortBySize);
    
  renderProducts(productosFiltrados, `.js-${categoria}-grid`);
});

// Esperar a que la página cargue completamente para el scroll
window.addEventListener('DOMContentLoaded', () => {
  const hash = window.location.hash;
  if (hash) {
    const target = document.querySelector(hash);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }
});