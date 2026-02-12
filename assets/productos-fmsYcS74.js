import{p as s}from"./main-BUhonsnN.js";const i=new Intl.NumberFormat("es-CO",{style:"currency",currency:"COP",minimumFractionDigits:0}),n=(e,a)=>{var r,o;const c=((r=e.specs)==null?void 0:r.size_value)||0,t=((o=a.specs)==null?void 0:o.size_value)||0;return c-t};function l(e,a){const c=document.querySelector(a);c&&(c.innerHTML=e.map(t=>`
    <article class="product-card">
      <div class="card-image-container">
        <a href="detalleproducto.html?id=${t.id}">
          <img src="${t.image}" alt="${t.name}" class="card-image">
        </a>
      </div>

      <div class="card-info-container">
        <h2 class="name__product-card">${t.name}</h2>
        <p class="price">${i.format(t.price)}</p>
      </div>
    </article>
  `).join(""))}const d=s.filter(e=>e.isEnabled!==!1),m=["audio_video","celulares","computadores","electromenores","linea_blanca","bicicletas"];m.forEach(e=>{const a=d.filter(c=>c.category===e).sort(n);l(a,`.js-${e}-grid`)});window.addEventListener("DOMContentLoaded",()=>{const e=window.location.hash;if(e){const a=document.querySelector(e);a&&a.scrollIntoView({behavior:"smooth",block:"start"})}});
