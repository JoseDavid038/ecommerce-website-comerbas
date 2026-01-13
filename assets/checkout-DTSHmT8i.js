import{c as r,g as h,d as f,u as g,i as T,e as v,p as j}from"./main-Qp9JtSOi.js";const d=new Intl.NumberFormat("es-CO",{style:"currency",currency:"COP",minimumFractionDigits:0});function m(){if(!r||r.length===0){const t=`
      <p class="detalle__subtotal">Total productos: <span>${d.format(0)}</span></p>
      <p>Envío: <span>$0.00</span></p>
      <div class="subtotal-line">
        <p class="detalle__total">Total a financiar: <span>${d.format(0)}</span></p>
      </div>
    `,e=document.querySelector(".js-payment-summary");e&&(e.innerHTML=t);return}let a=0;r.forEach(t=>{const e=h(t.productId);if(!e){console.warn(`Producto con id ${t.productId} no encontrado en data.js — se omite.`);return}a+=e.price*t.quantity});const n=`
    <p class="detalle__subtotal">Total productos: <span>${d.format(a)}</span></p>
    
    <div class="subtotal-line">
      <p class="detalle__total">Total a financiar: <span>${d.format(a)}</span></p>
    </div>
  `,o=document.querySelector(".js-payment-summary");o&&(o.innerHTML=n)}const L=new Intl.NumberFormat("es-CO",{style:"currency",currency:"COP",minimumFractionDigits:0});function _(){const a=document.querySelector("main");a&&(a.innerHTML=`
      <section class="empty-cart container">
        <h2>Tu carrito está vacío 🛒</h2>
        <p>Agrega productos desde nuestra tienda para continuar con tu compra.</p>
        <a href="productos.html" class="button btn-primary">Ver productos</a>
      </section>
    `);const n=document.querySelector(".js-payment-summary");n&&(n.innerHTML=`
      <p class="detalle__subtotal">Total productos: <span>$0</span></p>
      <p>Envío: <span>$0.00</span></p>
      <div class="subtotal-line">
        <p class="detalle__total">Total a financiar: <span>$0</span></p>
      </div>
    `)}if(!r||r.length===0)_();else{let a="";r.forEach(n=>{const o=n.productId;let t=h(o);if(!t){console.warn(`⚠️ Producto con ID ${o} no encontrado en data.js`);return}const e=L.format(t.price);a+=`
  <div class="detalle__producto js-cart-item-container-${t.id}">
    <img src="${t.image}" alt="" class="cart-item__image">
    <div class="cart-item__details">
      <p class="detalle__nombre">${t.name}</p>
      <p class="detalle__precio">${e}</p>
    </div>

    <div class="cart-item__actions">
      <span class="btn-qty minus js-delete-quantity" data-product-id="${t.id}">-</span>
      <p class="cart-item__quantity js-cart-item__quantity">${n.quantity}</p>
      <span class="btn-qty plus js-increase-to-cart">+</span>
    </div>
  </div>
  `}),document.querySelector(".js-order-summary").innerHTML=a,m(),document.querySelectorAll(".js-delete-quantity").forEach(n=>{n.addEventListener("click",()=>{const o=n.dataset.productId,t=r.find(e=>e.productId===o);if(t&&t.quantity>1){f(o);const e=n.parentElement.querySelector(".js-cart-item__quantity");e.textContent=t.quantity-1}else{f(o);const e=document.querySelector(`.js-cart-item-container-${o}`);e&&e.remove(),r.length===0&&_()}g(),console.log(r),m()})}),document.querySelectorAll(".js-increase-to-cart").forEach(n=>{n.addEventListener("click",()=>{const o=n.closest(".detalle__producto").querySelector(".js-delete-quantity").dataset.productId;T(o);const t=r.find(l=>l.productId===o),e=n.parentElement.querySelector(".js-cart-item__quantity");e.textContent=t.quantity,g(),console.log(r),m()})})}v.init("C6e2e5m5CWLeFl1hy");fetch("./components/modal-cash.html").then(a=>a.text()).then(a=>{document.body.insertAdjacentHTML("beforeend",a),P()});function P(){const a=document.getElementById("btnPayCash"),n=document.getElementById("cashModal"),o=document.getElementById("closeCashBtn"),t=document.getElementById("cancelCashBtn"),e=document.getElementById("confirmCashBtn"),l=document.getElementById("contact-form");if(!a)return;a.addEventListener("click",()=>{l.reportValidity()&&(n.style.display="flex")});const u=()=>n.style.display="none";o.addEventListener("click",u),t.addEventListener("click",u),e.addEventListener("click",()=>{e.innerText="Procesando...",e.disabled=!0,S()})}function S(a){const n=document.getElementById("name").value,o=document.getElementById("cedula").value,t=document.getElementById("email").value,e=document.getElementById("phone").value,l=document.getElementById("ciudad").value,p=(JSON.parse(localStorage.getItem("cart"))||[]).map(c=>{const s=c.id||c.productId||c.codigo,i=j.find(b=>b.id==s),y=i?i.price:0,I=i?i.name:"Producto desconocido",$=y*c.quantity;return{name:I,quantity:c.quantity,price:y,total:$}}),E=p.map((c,s)=>`${s+1}. ${c.name} (x${c.quantity}) - $${c.total.toLocaleString()}`).join(`
`),q=p.reduce((c,s)=>c+s.total,0),C={name:n,cedula:o,email:t,phone:e,cart_items:`METODO DE PAGO: CONTADO
CIUDAD: ${l}

PRODUCTOS:
${E}`,total:`$${q.toLocaleString()}`};v.send("service_l6nlo69","template_x8j0m3i",C).then(()=>{window.location.href="https://www.avalpaycenter.com/wps/portal/portal-de-pagos/web/pagos-aval/resultado-busqueda/realizar-pago?idConv=00020971&origen=buscar&login=temporal&bancaEmpresarial=false"}).catch(c=>{console.error("Error al enviar email:",c),alert("Hubo un error al procesar la solicitud. Por favor intenta nuevamente.");const s=document.getElementById("confirmCashBtn");s.innerText="Aceptar y Pagar",s.disabled=!1})}
