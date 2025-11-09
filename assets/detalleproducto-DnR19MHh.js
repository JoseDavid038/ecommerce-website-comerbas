import{c as b,p as a,a as o,u as s}from"./main-B7aerJk-.js";import{r as g}from"./code-rKZc_Vsd.js";Array.isArray(b)||localStorage.setItem("cart",JSON.stringify([]));const f=new URLSearchParams(window.location.search),v=f.get("id"),t=a.find(r=>r.id===v);if(t){const r=new Intl.NumberFormat("es-CO",{style:"currency",currency:"COP",minimumFractionDigits:0}),i=t.features.map(e=>`<li>${e}</li>`).join(""),u=`
    <section class="product-detail">
      <section class="product-gallery">
        <img src="${t.image}" alt="${t.name}" class="product-main-image">
      </section>

      <section class="product-info">
        <h1 class="product-title">${t.name}</h1>
        <p class="product-price">${r.format(t.price)}</p>
        <p class="product-short-desc">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam cursus tellus eget fringilla sagittis.</p>

        <div class="product-quantity">
          <button class="quantity-btn minus">-</button>
          <input type="number" value="1" min="1">
          <button class="quantity-btn plus">+</button>
        </div>

        <div class="product-actions">
          <button class="button btn-primary js-buy-now" data-product-id="${t.id}">Comprar ahora</button>
          <button class="button btn-outline js-add-to-cart" data-product-id="${t.id}">Añadir al carrito</button>
        </div>
      </section>
    </section>

    <section class="product-description">
      <h2>Descripción</h2>
      <p>${t.description}</p>
      <ul>${i}</ul>
    </section>
  `,n=document.getElementById("product-detail-general");n.innerHTML=u;const c=n.querySelector(".product-quantity input"),d=n.querySelector(".quantity-btn.plus"),l=n.querySelector(".quantity-btn.minus"),p=n.querySelector(".js-add-to-cart"),m=n.querySelector(".js-buy-now");d.addEventListener("click",()=>{c.value=Number(c.value)+1}),l.addEventListener("click",()=>{const e=Number(c.value)-1;e>=1&&(c.value=e)}),p.addEventListener("click",()=>{const e=Number(c.value)||1;o(t.id,e),s()}),m.addEventListener("click",()=>{const e=Number(c.value)||1;o(t.id,e),s();const y="/ecommerce-website-comerbas/checkout.html";window.location.href=y})}else document.getElementById("product-detail-general").innerHTML="<p>Producto no encontrado.</p>";const q=a.filter(r=>r.tags.includes("te-puede-interesar"));g(q,".js-productst-grid");
