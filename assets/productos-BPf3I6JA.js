import{p as c}from"./main-B_eNzSGQ.js";const i=new Intl.NumberFormat("es-CO",{style:"currency",currency:"COP",minimumFractionDigits:0});function t(e,r){const o=document.querySelector(r);o&&(o.innerHTML=e.map(a=>`
    <article class="swiper-slide-card swiper-slide">
      <div class="card-image-container">
        <a href="detalleproducto.html?id=${a.id}">
          <img src="${a.image}" alt="${a.name}" class="card-image">
        </a>
      </div>
      <div class="card-info-container card-personas">
        <h2 class="name__product-card">${a.name}</h2>
        <p class="price">${i.format(a.price)}</p>
      </div>
    </article>
  `).join(""))}const s=["audio_video","celulares","computadores","electromenores","linea_blanca"];s.forEach(e=>{const r=c.filter(o=>o.category===e);t(r,`.js-${e}-grid`)});window.addEventListener("DOMContentLoaded",()=>{const e=window.location.hash;if(e){const r=document.querySelector(e);r&&r.scrollIntoView({behavior:"smooth",block:"start"})}});
