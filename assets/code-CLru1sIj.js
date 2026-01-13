import{p as s}from"./main-Qp9JtSOi.js";const d=new Intl.NumberFormat("es-CO",{style:"currency",currency:"COP",minimumFractionDigits:0});function a(e,i){const c=document.querySelector(i);c&&(c.innerHTML=e.map(r=>`
    <article class="swiper-slide-card swiper-slide product-card">
      <div class="card-image-container">
        <a href="detalleproducto.html?id=${r.id}">
          <img src="${r.image}" alt="${r.name}" class="card-image">
        </a>
      </div>
      <div class="card-info-container">
        <h2 class="name__product-card">${r.name}</h2>
        <p class="price">${d.format(r.price)}</p>

       

      </div>
    </article>
  `).join(""))}const n=s.filter(e=>e.tags.includes("mas-vendido")),o=s.filter(e=>e.tags.includes("recomendado1")),t=s.filter(e=>e.tags.includes("recomendado2"));a(n,".js-productsMasV-grid");a(o,".js-productsR1-grid");a(t,".js-productsR2-grid");export{a as r};
