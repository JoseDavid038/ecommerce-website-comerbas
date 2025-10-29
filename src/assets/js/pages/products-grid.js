
const audio =[{
  image: './src/assets/images/products/mini componente Lg.png',
  name: 'Minicomponente LG XBOOM RNC9 1800 Watts Negro Torre de Sonido',
  price: 1349900
},{
  image: './src/assets/images/products/mini componente samsung.png',
  name: 'Minicomponente SAMSUNG MX-T70 1500 Watts Negro Torre de Sonido',
  price: 1636900
}];

const celulares =[{
  image: './src/assets/images/products/celular motorola.png',
  name: 'Celular MOTOROLA Edge 60 Fusion 256GB 5G Verde',
  price: 1349900
},{
  image: './src/assets/images/products/iphone.png',
  name: 'iPhone 13 128GB Blanco Estrella',
  price: 1636900
}];

const lavadoras =[{
  image: './src/assets/images/products/lavadora whirpool.png',
  name: 'Lavadora WHIRLPOOL Carga Superior 20 Kilos WW20LTAHLA Smart Action Gris',
  price: 1349900
},{
  image: './src/assets/images/products/Lavadora CHALLENGER.png',
  name: 'Lavadora CHALLENGER Carga Superior 13 Kilos',
  price: 1636900
}];

const cocina =[{
  image: './src/assets/images/products/estufa haceb.png',
  name: 'Estufa de Piso HACEB 4 Puestos Con Horno Gas Natural Romero 50-Torre Negro',
  price: 1349900
},{
  image: './src/assets/images/products/estufa abba.png',
  name: 'Estufa de Piso HACEB 4 Puestos Con Horno Gas Natural Romero 50-Torre Negro',
  price: 1636900
}];

const televisores =[{
  image: './src/assets/images/products/TV CHALLENGER 40 Pulgadas 101 cm.png',
  name: 'TV CHALLENGER 40" Pulgadas 101 cm',
  price: 1349900
},{
  image: './src/assets/images/products/TV CHALLENGER 50 Pulgadas 126.png',
  name: 'TV CHALLENGER 50" Pulgadas 126',
  price: 1636900
}];

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
        <a href=""><img src="${product.image}" alt="${product.name}" class="card-image"></a>
      </div>
      <div class="card-info-container card-personas">
        <h2 class="name__product-card">${product.name}</h2>
        <p class="price">${formatoCOP.format(product.price)}</p>
      </div>
    </article>
  `).join('');
}

renderProducts(audio, '.js-audio-grid');
renderProducts(celulares, '.js-celulares-grid');
renderProducts(lavadoras, '.js-lavadoras-grid');
renderProducts(cocina, '.js-cocina-grid');
renderProducts(televisores, '.js-televisores-grid');