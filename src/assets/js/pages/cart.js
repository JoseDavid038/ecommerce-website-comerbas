import { products } from './data.js';

let storedCart = localStorage.getItem('cart');
export let cart = [];

try {
  cart = storedCart ? JSON.parse(storedCart) : [];
  if (!Array.isArray(cart)) cart = [];
} catch (e) {
  console.warn("⚠️ Error al leer el carrito, se reinicia:", e);
  cart = [];
  localStorage.setItem('cart', JSON.stringify([]));
}

// 🔹 NUEVO: Elimina del carrito productos inexistentes o inhabilitados
export function cleanDisabledProducts() {
  const initialCount = cart.length;
  cart = cart.filter(item => {
    const product = products.find(p => p.id === item.productId);
    return product && product.isEnabled !== false;
  });
  
  if (cart.length !== initialCount) {
    saveToStorage();
    updateCartQuantity();
  }
}

function saveToStorage() {
  localStorage.setItem('cart', JSON.stringify(cart));
}

export function addToCart(productId, quantity = 1) {
  let matchingItem = cart.find(item => item.productId === productId);
  if (matchingItem) {
    matchingItem.quantity += quantity;
  } else {
    cart.push({ productId, quantity });
  }
  saveToStorage();
}

export function updateCartQuantity() {
  let cartQuantity = 0;
  cart.forEach((cartItem) => {
    cartQuantity += cartItem.quantity;
  });
  const quantityElement = document.querySelector('.js-cart-quantity');
  if (quantityElement) {
    quantityElement.textContent = cartQuantity;
  }
}

export function decreaseQuantity(productId) {
  let updatedCart = [];
  cart.forEach((cartItem) => {
    if (cartItem.productId === productId) {
      if (cartItem.quantity > 1) {
        updatedCart.push({ ...cartItem, quantity: cartItem.quantity - 1 });
      }
    } else {
      updatedCart.push(cartItem);
    }
  });
  cart = updatedCart;
  saveToStorage();
}

export function increaseQuantity(productId) {
  cart = cart.map(cartItem =>
    cartItem.productId === productId
      ? { ...cartItem, quantity: cartItem.quantity + 1 }
      : cartItem
  );
  saveToStorage();
}

export function removeFromCart(productId) {
  cart = cart.filter(cartItem => cartItem.productId !== productId);
  saveToStorage();
}