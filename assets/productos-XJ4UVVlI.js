import{p as c}from"./main-BwJpb2Ss.js";const t=new Intl.NumberFormat("es-CO",{style:"currency",currency:"COP",minimumFractionDigits:0});function i(e,r){const o=document.querySelector(r);o&&(o.innerHTML=e.map(a=>`
    <article class="product-card">
      <div class="card-image-container">
        <a href="detalleproducto.html?id=${a.id}">
          <img src="${a.image}" alt="${a.name}" class="card-image">
        </a>
      </div>

      <div class="card-info-container">
        <h2 class="name__product-card">${a.name}</h2>
        <p class="price">${t.format(a.price)}</p>
      </div>
    </article>
  `).join(""))}const n=["audio_video","celulares","computadores","electromenores","linea_blanca"];n.forEach(e=>{const r=c.filter(o=>o.category===e);i(r,`.js-${e}-grid`)});window.addEventListener("DOMContentLoaded",()=>{const e=window.location.hash;if(e){const r=document.querySelector(e);r&&r.scrollIntoView({behavior:"smooth",block:"start"})}});
