const productsMasVendidos =[{
  image: './src/assets/images/products/TV CHALLENGER 50 Pulgadas 126.png',
  name: 'TV CHALLENGER 50" Pulgadas 126',
  price: 1449900
},{
  image: './src/assets/images/products/Nevera No Frost CHALLENGER 231 Litros.png',
  name: 'Nevera No Frost CHALLENGER 231 Litros',
  price: 1636900
},{
  image: './src/assets/images/products/TV CHALLENGER 40 Pulgadas 101 cm.png',
  name: 'TV CHALLENGER 40" Pulgadas 101 cm',
  price: 899900
},{
  image: './src/assets/images/products/Lavadora CHALLENGER.png',
  name: 'Lavadora CHALLENGER Carga Superior 13 Kilos',
  price: 1419900
},{
  image: './src/assets/images/products/TV CHALLENGER 40 Pulgadas 101 cm.png',
  name: 'TV CHALLENGER 40" Pulgadas 101 cm',
  price: 899900
},{
  image: './src/assets/images/products/Lavadora CHALLENGER.png',
  name: 'Lavadora CHALLENGER Carga Superior 13 Kilos',
  price: 1449900
}];

const productsRecomedados1 =[{
  image: './src/assets/images/products/Nevera No Frost CHALLENGER 231 Litros.png',
  name: 'Nevera No Frost CHALLENGER 231 Litros',
  price: 1636900
},{
  image: './src/assets/images/products/TV CHALLENGER 50 Pulgadas 126.png',
  name: 'TV CHALLENGER 50" Pulgadas 126',
  price: 1449900
},{
  image: './src/assets/images/products/TV CHALLENGER 40 Pulgadas 101 cm.png',
  name: 'TV CHALLENGER 40" Pulgadas 101 cm',
  price: 899900
},{
  image: './src/assets/images/products/Lavadora CHALLENGER.png',
  name: 'Lavadora CHALLENGER Carga Superior 13 Kilos',
  price: 1419900
}];

const productsRecomedados2 =[{
  image: './src/assets/images/products/Nevera No Frost CHALLENGER 231 Litros.png',
  name: 'Nevera No Frost CHALLENGER 231 Litros',
  price: 1636900
},{
  image: './src/assets/images/products/TV CHALLENGER 50 Pulgadas 126.png',
  name: 'TV CHALLENGER 50" Pulgadas 126',
  price: 1449900
},{
  image: './src/assets/images/products/TV CHALLENGER 40 Pulgadas 101 cm.png',
  name: 'TV CHALLENGER 40" Pulgadas 101 cm',
  price: 899900
},{
  image: './src/assets/images/products/Lavadora CHALLENGER.png',
  name: 'Lavadora CHALLENGER Carga Superior 13 Kilos',
  price: 1419900
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

renderProducts(productsMasVendidos, '.js-productsMasV-grid');
renderProducts(productsRecomedados1, '.js-productsR1-grid');
renderProducts(productsRecomedados2, '.js-productsR2-grid');



