import{p as o}from"./main-D5GTDcMq.js";const c=new Intl.NumberFormat("es-CO",{style:"currency",currency:"COP",minimumFractionDigits:0});function s(e,r){const i=document.querySelector(r);i&&(i.innerHTML=e.map(a=>`
    <article class="swiper-slide-card swiper-slide">
      <div class="card-image-container">
        <a href="detalleproducto.html?id=${a.id}">
          <img src="${a.image}" alt="${a.name}" class="card-image">
        </a>
      </div>
      <div class="card-info-container card-personas">
        <h2 class="name__product-card">${a.name}</h2>
        <p class="price">${c.format(a.price)}</p>
      </div>
    </article>
  `).join(""))}const t=["audio","celulares","lavadoras","cocina","televisores"];t.forEach(e=>{const r=o.filter(i=>i.category===e);s(r,`.js-${e}-grid`)});window.addEventListener("DOMContentLoaded",()=>{const e=window.location.hash;if(e){const r=document.querySelector(e);r&&r.scrollIntoView({behavior:"smooth",block:"start"})}});
