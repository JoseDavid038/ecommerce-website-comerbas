import{p as s,a,u as r,c as u}from"./main-D5GTDcMq.js";import{r as d}from"./code-BEDItq3N.js";const l=new URLSearchParams(window.location.search),p=l.get("id"),n=s.find(t=>t.id===p);if(n){const t=new Intl.NumberFormat("es-CO",{style:"currency",currency:"COP",minimumFractionDigits:0}),e=n.features.map(c=>`<li>${c}</li>`).join(""),o=`
    <section class="product-detail">

          
          <section class="product-gallery">
            <img src="${n.image}" alt="${n.name}" class="product-main-image">
          </section>

        
          <section class="product-info">
            <h1 class="product-title">${n.name}</h1>
            <p class="product-price">${t.format(n.price)}</p>
            <p class="product-short-desc">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam cursus tellus eget fringilla sagittis.</p>


           
            <div class="product-quantity">
              <button class="quantity-btn minus">-</button>
              <input type="number" value="1" min="1">
              <button class="quantity-btn plus">+</button>
            </div>

            
            <div class="product-actions">
              <button class="button btn-primary js-buy-now" data-product-id="${n.id}">Comprar ahora</button>
              <button class="button btn-outline js-add-to-cart" data-product-id="${n.id}">Añadir al carrito</button>
            </div>
          </section>

        </section>

        
        <section class="product-description ">
          <h2>Descripción</h2>
          <p>
            ${n.description}
          </p>
          <ul>
            ${e}
          </ul>
        </section>
  `;document.getElementById("product-detail-general").innerHTML=o}else document.getElementById("product-detail-general").innerHTML="<p>Producto no encontrado.</p>";document.addEventListener("click",t=>{const e=document.querySelector(".product-quantity input");if(t.target.classList.contains("plus")&&(e.value=Number(e.value)+1),t.target.classList.contains("minus")){const o=Number(e.value)-1;o>=1&&(e.value=o)}});document.querySelectorAll(".js-add-to-cart").forEach(t=>{t.addEventListener("click",()=>{const e=t.dataset.productId,o=document.querySelector(".product-quantity input"),c=Number(o.value)||1;a(e,c),r()})});document.addEventListener("click",t=>{if(t.target.closest(".js-buy-now")){const e=t.target.dataset.productId,o=document.querySelector(".product-quantity input"),c=Number(o.value)||1;u.find(i=>i.productId===e)?console.log(`✅ El producto ${e} ya está en el carrito. No se agregan más unidades.`):(console.log(`🛒 El producto ${e} no estaba en el carrito. Agregando ${c} unidad(es).`),a(e,c),r()),window.location.href="checkout.html"}});const m=s.filter(t=>t.tags.includes("te-puede-interesar"));d(m,".js-productst-grid");
