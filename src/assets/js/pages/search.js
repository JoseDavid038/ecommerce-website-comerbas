import { products } from './data.js';

// Debounce simple
function debounce(fn, wait = 300) {
  let t;
  return (...args) => {
    clearTimeout(t);
    t = setTimeout(() => fn(...args), wait);
  };
}

// Formateador COP
const formatoCOP = new Intl.NumberFormat('es-CO', {
  style: 'currency',
  currency: 'COP',
  minimumFractionDigits: 0
});

// Render de una lista de sugerencias (max 10)
function renderSuggestions(container, matches) {
  if (!container) return;
  if (!matches.length) {
    container.innerHTML = `<div class="search-empty">No se encontraron productos.</div>`;
    return;
  }

  const html = matches.slice(0, 10).map(p => `
    <a class="search-suggestion" href="detalleproducto.html?id=${p.id}">
      <div class="search-suggestion__img">
        <img src="${p.image}" alt="${p.name}">
      </div>
      <div class="search-suggestion__info">
        <div class="search-suggestion__name">${p.name}</div>
        <div class="search-suggestion__price">${formatoCOP.format(p.price)}</div>
      </div>
    </a>
  `).join('');

  container.innerHTML = html;
}

// 🔹 Función de filtrado actualizada con validación de disponibilidad
function findMatches(q) {
  const term = q.trim().toLowerCase();
  if (!term) return [];
  
  // Primero filtramos solo los productos activos para que la búsqueda sea segura
  const activeProducts = products.filter(p => p.isEnabled !== false);

  return activeProducts.filter(p => {
    // 1. Buscamos coincidencia en el nombre
    const nameMatch = p.name.toLowerCase().includes(term);
    
    // 2. Buscamos coincidencia en la categoría 
    const categoryMatch = p.category && p.category.toLowerCase().includes(term);

    // 3. Retornamos true si cumple CUALQUIERA de las dos
    return nameMatch || categoryMatch;
  });
}

// 

// Crea el contenedor de sugerencias y lo inserta después del input
function ensureSuggestionsContainer(input) {
  let container = input.parentElement.querySelector('.js-search-suggestions');
  if (container) return container;

  container = document.createElement('div');
  container.className = 'js-search-suggestions search-suggestions';
  input.parentElement.appendChild(container);
  return container;
}

// Inicializa la búsqueda en un input concreto
function initInputSearch(input) {
  if (!input) return;
  if (input.dataset.searchInit === '1') return;
  input.dataset.searchInit = '1';

  const suggestions = ensureSuggestionsContainer(input);

  const onInput = debounce((e) => {
    const q = e.target.value || '';
    if (!q.trim()) {
      suggestions.innerHTML = ''; 
      suggestions.classList.remove('visible');
      return;
    }
    const matches = findMatches(q);
    renderSuggestions(suggestions, matches);
    suggestions.classList.add('visible');
  }, 300);

  input.addEventListener('input', onInput);

  document.addEventListener('click', (ev) => {
    if (!input.contains(ev.target) && !suggestions.contains(ev.target)) {
      suggestions.classList.remove('visible');
    }
  });

  input.addEventListener('keydown', (ev) => {
    if (ev.key === 'Enter') {
      const first = suggestions.querySelector('a.search-suggestion');
      if (first) {
        ev.preventDefault();
        window.location.href = first.href;
      }
    }
  });
}

function initSearchOnExisting() {
  const desktop = document.querySelector('.nav__search-desktop input') || document.querySelector('.nav__search-desktop .search__input');
  const mobile = document.querySelector('.nav__search-mobile input') || document.querySelector('.nav__search-mobile .search__input');

  if (desktop) initInputSearch(desktop);
  if (mobile) initInputSearch(mobile);
}

function watchForSearchInputs() {
  initSearchOnExisting();
  const headerNode = document.getElementById('header') || document.body;
  const observer = new MutationObserver(() => {
    initSearchOnExisting();
  });
  observer.observe(headerNode, { childList: true, subtree: true });
}

watchForSearchInputs();

export function initSearch() {
  watchForSearchInputs();
}