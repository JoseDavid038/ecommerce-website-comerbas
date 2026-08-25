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
      <!-- Enlace superior para imagen, marca, título y precio -->
      <a href="detalleproducto.html?id=${product.id}" class="product-card__link">
        <div class="card-image-container">
          <img src="${product.image}" alt="${product.name}" class="card-image" loading="lazy">
        </div>
        
        <div class="card-info-container">
          <span class="product-brand">${product.brand || ''}</span> <!-- O la propiedad de marca que tengas -->
          <h3 class="name__product-card">${product.name}</h3>
          <div class="price">${formatoCOP.format(product.price)}</div>
        </div>
      </a>

      
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