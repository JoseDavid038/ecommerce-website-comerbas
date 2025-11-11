import{c as i,p as u,a as r,u as a}from"./main-B_eNzSGQ.js";import{r as v}from"./code-CzJPWgjN.js";Array.isArray(i)||localStorage.setItem("cart",JSON.stringify([]));const q=new URLSearchParams(window.location.search),$=q.get("id"),e=u.find(c=>c.id===$);if(e){const c=new Intl.NumberFormat("es-CO",{style:"currency",currency:"COP",minimumFractionDigits:0}),d=e.features.map(t=>`<li>${t}</li>`).join(""),l=`
    <section class="product-detail">
      <section class="product-gallery">
        <img src="${e.image}" alt="${e.name}" class="product-main-image">
      </section>

      <section class="product-info">
        <h1 class="product-title">${e.name}</h1>
        <p class="product-price">${c.format(e.price)}</p>
        <p class="product-short-desc">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam cursus tellus eget fringilla sagittis.</p>

        <div class="product-quantity">
          <button class="quantity-btn minus">-</button>
          <input type="number" value="1" min="1">
          <button class="quantity-btn plus">+</button>
        </div>

        <div class="product-actions">
          <button class="button btn-primary js-buy-now" data-product-id="${e.id}">Comprar ahora</button>
          <button class="button btn-outline js-add-to-cart" data-product-id="${e.id}">Añadir al carrito</button>
        </div>
      </section>
    </section>

    <section class="product-description">
      <h2>Descripción</h2>
      <p>${e.description}</p>
      <ul>${d}</ul>
    </section>
  `,n=document.getElementById("product-detail-general");n.innerHTML=l;const o=n.querySelector(".product-quantity input"),p=n.querySelector(".quantity-btn.plus"),m=n.querySelector(".quantity-btn.minus"),y=n.querySelector(".js-add-to-cart"),b=n.querySelector(".js-buy-now");p.addEventListener("click",()=>{o.value=Number(o.value)+1}),m.addEventListener("click",()=>{const t=Number(o.value)-1;t>=1&&(o.value=t)}),y.addEventListener("click",()=>{const t=Number(o.value)||1;r(e.id,t),a()}),b.addEventListener("click",()=>{const t=e.id,s=Number(o.value)||1;i.find(f=>f.productId===t)?console.log(`✅ El producto ${t} ya está en el carrito. No se agregan más unidades.`):(console.log(`🛒 El producto ${t} no estaba en el carrito. Agregando ${s} unidad(es).`),r(t,s),a());const g="/ecommerce-website-comerbas/checkout.html";window.location.href=g})}else document.getElementById("product-detail-general").innerHTML="<p>Producto no encontrado.</p>";const h=u.filter(c=>c.tags.includes("te-puede-interesar"));v(h,".js-productst-grid");
