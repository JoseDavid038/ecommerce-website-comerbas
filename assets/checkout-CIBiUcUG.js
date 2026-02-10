import{c as s,g as f,a as I,d as $,i as q,e as g,p as T}from"./main-DHRHiSsT.js";const d=new Intl.NumberFormat("es-CO",{style:"currency",currency:"COP",minimumFractionDigits:0});function y(){if(!s||s.length===0){const e=`
      <p class="detalle__subtotal">Total productos: <span>${d.format(0)}</span></p>
      <p>Envío: <span>$0.00</span></p>
      <div class="subtotal-line">
        <p class="detalle__total">Total a financiar: <span>${d.format(0)}</span></p>
      </div>
    `,c=document.querySelector(".js-payment-summary");c&&(c.innerHTML=e);return}let t=0;s.forEach(e=>{const c=f(e.productId);if(!c){console.warn(`Producto con id ${e.productId} no encontrado en data.js — se omite.`);return}t+=c.price*e.quantity});const a=`
    <p class="detalle__subtotal">Total productos: <span>${d.format(t)}</span></p>
    
    <div class="subtotal-line">
      <p class="detalle__total">Total a financiar: <span>${d.format(t)}</span></p>
    </div>
  `,o=document.querySelector(".js-payment-summary");o&&(o.innerHTML=a)}I();const L=new Intl.NumberFormat("es-CO",{style:"currency",currency:"COP",minimumFractionDigits:0});function P(){const t=document.querySelector("main");t&&(t.innerHTML=`
      <section class="empty-cart container">
        <h2>Tu carrito está vacío 🛒</h2>
        <p>Agrega productos desde nuestra tienda para continuar con tu compra.</p>
        <a href="productos.html" class="button btn-primary">Ver productos</a>
      </section>
    `)}if(!s||s.length===0)P(),y();else{let t="";s.forEach(a=>{const o=a.productId;let e=f(o);e&&(t+=`
      <div class="detalle__producto js-cart-item-container-${e.id}">
        <img src="${e.image}" alt="" class="cart-item__image">
        <div class="cart-item__details">
          <p class="detalle__nombre">${e.name}</p>
          <p class="detalle__precio">${L.format(e.price)}</p>
        </div>
        <div class="cart-item__actions">
          <span class="btn-qty minus js-delete-quantity" data-product-id="${e.id}">-</span>
          <p class="cart-item__quantity js-cart-item__quantity">${a.quantity}</p>
          <span class="btn-qty plus js-increase-to-cart">+</span>
        </div>
      </div>
    `)}),document.querySelector(".js-order-summary").innerHTML=t,y(),document.querySelectorAll(".js-delete-quantity").forEach(a=>{a.addEventListener("click",()=>{const o=a.dataset.productId;$(o),window.location.reload()})}),document.querySelectorAll(".js-increase-to-cart").forEach(a=>{a.addEventListener("click",()=>{const o=a.closest(".detalle__producto").querySelector(".js-delete-quantity").dataset.productId;q(o),window.location.reload()})})}g.init("C6e2e5m5CWLeFl1hy");fetch("./components/modal-cash.html").then(t=>t.text()).then(t=>{document.body.insertAdjacentHTML("beforeend",t),B()});function B(){const t=document.getElementById("btnPayCash"),a=document.getElementById("cashModal"),o=document.getElementById("closeCashBtn"),e=document.getElementById("cancelCashBtn"),c=document.getElementById("confirmCashBtn"),i=document.getElementById("contact-form");if(!t)return;t.addEventListener("click",()=>{i.reportValidity()&&(a.style.display="flex")});const u=()=>a.style.display="none";o.addEventListener("click",u),e.addEventListener("click",u),c.addEventListener("click",()=>{c.innerText="Procesando...",c.disabled=!0,O()})}function O(t){const a=document.getElementById("name").value,o=document.getElementById("cedula").value,e=document.getElementById("email").value,c=document.getElementById("phone").value,i=document.getElementById("ciudad").value,m=(JSON.parse(localStorage.getItem("cart"))||[]).map(n=>{const r=n.id||n.productId||n.codigo,l=T.find(C=>C.id==r),p=l?l.price:0,_=l?l.name:"Producto desconocido",b=p*n.quantity;return{name:_,quantity:n.quantity,price:p,total:b}}),h=m.map((n,r)=>`${r+1}. ${n.name} (x${n.quantity}) - $${n.total.toLocaleString()}`).join(`
`),v=m.reduce((n,r)=>n+r.total,0),E={name:a,cedula:o,email:e,phone:c,cart_items:`METODO DE PAGO: CONTADO
CIUDAD: ${i}

PRODUCTOS:
${h}`,total:`$${v.toLocaleString()}`};g.send("service_l6nlo69","template_x8j0m3i",E).then(()=>{window.location.href="https://www.avalpaycenter.com/wps/portal/portal-de-pagos/web/pagos-aval/resultado-busqueda/realizar-pago?idConv=00020971&origen=buscar&login=temporal&bancaEmpresarial=false"}).catch(n=>{console.error("Error al enviar email:",n),alert("Hubo un error al procesar la solicitud. Por favor intenta nuevamente.");const r=document.getElementById("confirmCashBtn");r.innerText="Aceptar y Pagar",r.disabled=!1})}
