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

// 🔹 1. FILTRO DE SEGURIDAD: Solo productos habilitados
// Esto asegura que si isEnabled es false, el producto no exista para el resto del script
const activeProducts = products.filter(p => p.isEnabled !== false);

// 🔹 2. Filtrar por categoría (usando ahora activeProducts)
const categorias = ["audio_video", "celulares", "computadores", "electromenores", "linea_blanca", "bicicletas"];

categorias.forEach(categoria => {
  // Filtramos sobre la lista de productos ya validados como activos
  const productosFiltrados = activeProducts.filter(p => p.category === categoria);
  renderProducts(productosFiltrados, `.js-${categoria}-grid`);
});

// 

// Esperar a que la página cargue completamente
window.addEventListener('DOMContentLoaded', () => {
  const hash = window.location.hash; // ejemplo: #celulares
  if (hash) {
    const target = document.querySelector(hash);
    if (target) {
      // desplazamiento suave hacia la categoría
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }
});