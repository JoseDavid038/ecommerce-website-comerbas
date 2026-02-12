import{c as m,p as a,b as r,u as b}from"./main-BUhonsnN.js";import{r as y}from"./code-bEuLZOIe.js";Array.isArray(m)||localStorage.setItem("cart",JSON.stringify([]));const f=new URLSearchParams(window.location.search),v=f.get("id"),t=a.find(e=>e.id===v);if(t&&t.isEnabled!==!1){const e=new Intl.NumberFormat("es-CO",{style:"currency",currency:"COP",minimumFractionDigits:0}),c=t.features.map(o=>`<li>${o}</li>`).join(""),i=`
    <section class="product-detail">
      <section class="product-gallery">
        <img src="${t.image}" alt="${t.name}" class="product-main-image">
        <p class="product-note">*Imágen solo con fines ilustrativos.</p>
      </section>
      <section class="product-info">
        <h1 class="product-title">${t.name}</h1>
        <p class="product-price">${e.format(t.price)}</p>
        <p class="product-short-desc">${t.shortdescription}</p>
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
      <ul>${c}</ul>
    </section>
  `,n=document.getElementById("product-detail-general");n.innerHTML=i;const s=n.querySelector(".product-quantity input"),u=n.querySelector(".quantity-btn.plus"),d=n.querySelector(".quantity-btn.minus"),l=n.querySelector(".js-add-to-cart"),p=n.querySelector(".js-buy-now");u.addEventListener("click",()=>{s.value=Number(s.value)+1}),d.addEventListener("click",()=>{const o=Number(s.value)-1;o>=1&&(s.value=o)}),l.addEventListener("click",()=>{r(t.id,Number(s.value)||1),b()}),p.addEventListener("click",()=>{r(t.id,Number(s.value)||1),window.location.href="checkout.html"})}else window.location.href="index.html";const h=a.filter(e=>e.tags.includes("te-puede-interesar")&&e.isEnabled!==!1);y(h,".js-productst-grid");
