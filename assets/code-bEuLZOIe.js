import{p as d}from"./main-BUhonsnN.js";const n=new Intl.NumberFormat("es-CO",{style:"currency",currency:"COP",minimumFractionDigits:0});function s(e,i){const c=document.querySelector(i);c&&(c.innerHTML=e.map(r=>`
    <article class="swiper-slide-card swiper-slide product-card">
      <div class="card-image-container">
        <a href="detalleproducto.html?id=${r.id}">
          <img src="${r.image}" alt="${r.name}" class="card-image">
        </a>
      </div>
      <div class="card-info-container">
        <h2 class="name__product-card">${r.name}</h2>
        <p class="price">${n.format(r.price)}</p>
      </div>
    </article>
  `).join(""))}const a=d.filter(e=>e.isEnabled!==!1),t=a.filter(e=>e.tags.includes("mas-vendido")),o=a.filter(e=>e.tags.includes("recomendado1")),l=a.filter(e=>e.tags.includes("recomendado2"));s(t,".js-productsMasV-grid");s(o,".js-productsR1-grid");s(l,".js-productsR2-grid");export{s as r};
