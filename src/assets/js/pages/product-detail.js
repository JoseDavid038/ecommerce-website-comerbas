import { productsMasVendidos } from './data.js'; // importa datos

// Obtiene el ID del producto desde la URL
// const params = new URLSearchParams(window.location.search);
// const id = parseInt(params.get('id'));

//  Busca el producto
// const product = productsMasVendidos[id];

// Selecciona el contenedor
// const container = document.getElementById('detalle-producto');

//  Verifica que exista
// if (product) {
//   const precioFormateado = new Intl.NumberFormat('es-CO', {
//     style: 'currency',
//     currency: 'COP',
//     minimumFractionDigits: 0
//   }).format(product.price);

//   container.innerHTML = `
//     <div class="detalle-card">
//       <img src="${product.image}" alt="${product.name}" class="detalle-img">
//       <div class="detalle-info">
//         <h1>${product.name}</h1>
//         <p class="detalle-precio">${precioFormateado}</p>
//         <p class="detalle-descripcion">${product.descripcion}</p>
//         <div class="product-actions">
//           <a href="cart.html" class="button btn-primary">Comprar ahora</a>
//           <button class="button btn-outline">Añadir al carrito</button>
//         </div>
//       </div>
//     </div>
//   `;
// } else {
//   container.innerHTML = `<p>Producto no encontrado</p>`;
// }


const params = new URLSearchParams(window.location.search);
const id = parseInt(params.get("id"));

const product = productsMasVendidos.find(p => p.id === id);

if (product) {
  const formatoCOP = new Intl.NumberFormat('es-CO', {
    style: 'currency',
    currency: 'COP',
    minimumFractionDigits: 0
  });

  // Crear lista de características
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
              <button class="button btn-outline js-add-to-cart">Añadir al carrito</button>
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