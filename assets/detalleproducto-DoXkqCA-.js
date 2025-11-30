import{c as i,p as u,a as s,u as a}from"./main-ByXpxSWa.js";import{r as v}from"./code-jQoJwqdv.js";Array.isArray(i)||localStorage.setItem("cart",JSON.stringify([]));const q=new URLSearchParams(window.location.search),$=q.get("id"),t=u.find(c=>c.id===$);if(t){const c=new Intl.NumberFormat("es-CO",{style:"currency",currency:"COP",minimumFractionDigits:0}),d=t.features.map(e=>`<li>${e}</li>`).join(""),l=`
    <section class="product-detail">
      <section class="product-gallery">
        <img src="${t.image}" alt="${t.name}" class="product-main-image">
        <p class="product-note">*Imágen solo con fines ilustrativos y puede no ser una representación exacta del producto.</p>
      </section>

      <section class="product-info">
        <h1 class="product-title">${t.name}</h1>
        <p class="product-price">${c.format(t.price)}</p>
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
      <ul>${d}</ul>
    </section>
  `,n=document.getElementById("product-detail-general");n.innerHTML=l;const o=n.querySelector(".product-quantity input"),p=n.querySelector(".quantity-btn.plus"),m=n.querySelector(".quantity-btn.minus"),y=n.querySelector(".js-add-to-cart"),b=n.querySelector(".js-buy-now");p.addEventListener("click",()=>{o.value=Number(o.value)+1}),m.addEventListener("click",()=>{const e=Number(o.value)-1;e>=1&&(o.value=e)}),y.addEventListener("click",()=>{const e=Number(o.value)||1;s(t.id,e),a()}),b.addEventListener("click",()=>{const e=t.id,r=Number(o.value)||1;i.find(f=>f.productId===e)?console.log(`✅ El producto ${e} ya está en el carrito. No se agregan más unidades.`):(console.log(`🛒 El producto ${e} no estaba en el carrito. Agregando ${r} unidad(es).`),s(e,r),a());const g="/ecommerce-website-comerbas/checkout.html";window.location.href=g})}else document.getElementById("product-detail-general").innerHTML="<p>Producto no encontrado.</p>";const h=u.filter(c=>c.tags.includes("te-puede-interesar"));v(h,".js-productst-grid");
