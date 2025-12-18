import{p as o}from"./main-rIXKCsdn.js";const t=new Intl.NumberFormat("es-CO",{style:"currency",currency:"COP",minimumFractionDigits:0});function i(e,a){const c=document.querySelector(a);c&&(c.innerHTML=e.map(r=>`
    <article class="product-card">
      <div class="card-image-container">
        <a href="detalleproducto.html?id=${r.id}">
          <img src="${r.image}" alt="${r.name}" class="card-image">
        </a>
      </div>

      <div class="card-info-container">
        <h2 class="name__product-card">${r.name}</h2>
        <p class="price">${t.format(r.price)}</p>
      </div>
    </article>
  `).join(""))}const n=["audio_video","celulares","computadores","electromenores","linea_blanca","bicicletas"];n.forEach(e=>{const a=o.filter(c=>c.category===e);i(a,`.js-${e}-grid`)});window.addEventListener("DOMContentLoaded",()=>{const e=window.location.hash;if(e){const a=document.querySelector(e);a&&a.scrollIntoView({behavior:"smooth",block:"start"})}});
