import{c as r,g as u,d as i,u as l,i as m}from"./main-C2efNdrI.js";const s=new Intl.NumberFormat("es-CO",{style:"currency",currency:"COP",minimumFractionDigits:0});function c(){if(!r||r.length===0){const t=`
      <p class="detalle__subtotal">Total productos: <span>${s.format(0)}</span></p>
      <p>Envío: <span>$0.00</span></p>
      <div class="subtotal-line">
        <p class="detalle__total">Total a financiar: <span>${s.format(0)}</span></p>
      </div>
    `,e=document.querySelector(".js-payment-summary");e&&(e.innerHTML=t);return}let o=0;r.forEach(t=>{const e=u(t.productId);if(!e){console.warn(`Producto con id ${t.productId} no encontrado en data.js — se omite.`);return}o+=e.price*t.quantity});const a=`
    <p class="detalle__subtotal">Total productos: <span>${s.format(o)}</span></p>
    <p>Envío: <span>$0.00</span></p>
    <div class="subtotal-line">
      <p class="detalle__total">Total a financiar: <span>${s.format(o)}</span></p>
    </div>
  `,n=document.querySelector(".js-payment-summary");n&&(n.innerHTML=a)}const y=new Intl.NumberFormat("es-CO",{style:"currency",currency:"COP",minimumFractionDigits:0});function d(){const o=document.querySelector("main");o&&(o.innerHTML=`
      <section class="empty-cart container">
        <h2>Tu carrito está vacío 🛒</h2>
        <p>Agrega productos desde nuestra tienda para continuar con tu compra.</p>
        <a href="productos.html" class="button btn-primary">Ver productos</a>
      </section>
    `);const a=document.querySelector(".js-payment-summary");a&&(a.innerHTML=`
      <p class="detalle__subtotal">Total productos: <span>$0</span></p>
      <p>Envío: <span>$0.00</span></p>
      <div class="subtotal-line">
        <p class="detalle__total">Total a financiar: <span>$0</span></p>
      </div>
    `)}if(!r||r.length===0)d();else{let o="";r.forEach(a=>{const n=a.productId;let t=u(n);if(!t){console.warn(`⚠️ Producto con ID ${n} no encontrado en data.js`);return}const e=y.format(t.price);o+=`
  <div class="detalle__producto js-cart-item-container-${t.id}">
    <img src="${t.image}" alt="" class="cart-item__image">
    <div class="cart-item__details">
      <p class="detalle__nombre">${t.name}</p>
      <p class="detalle__precio">${e}</p>
    </div>

    <div class="cart-item__actions">
      <span class="btn-qty minus js-delete-quantity" data-product-id="${t.id}">-</span>
      <p class="cart-item__quantity js-cart-item__quantity">${a.quantity}</p>
      <span class="btn-qty plus js-increase-to-cart">+</span>
    </div>
  </div>
  `}),document.querySelector(".js-order-summary").innerHTML=o,c(),document.querySelectorAll(".js-delete-quantity").forEach(a=>{a.addEventListener("click",()=>{const n=a.dataset.productId,t=r.find(e=>e.productId===n);if(t&&t.quantity>1){i(n);const e=a.parentElement.querySelector(".js-cart-item__quantity");e.textContent=t.quantity-1}else{i(n);const e=document.querySelector(`.js-cart-item-container-${n}`);e&&e.remove(),r.length===0&&d()}l(),console.log(r),c()})}),document.querySelectorAll(".js-increase-to-cart").forEach(a=>{a.addEventListener("click",()=>{const n=a.closest(".detalle__producto").querySelector(".js-delete-quantity").dataset.productId;m(n);const t=r.find(p=>p.productId===n),e=a.parentElement.querySelector(".js-cart-item__quantity");e.textContent=t.quantity,l(),console.log(r),c()})})}
