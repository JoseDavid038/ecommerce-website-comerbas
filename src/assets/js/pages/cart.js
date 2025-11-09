// --- Inicialización segura del carrito ---
// Intentamos obtener el carrito guardado, o inicializamos uno vacío
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

// --- Guardar en localStorage ---
function saveToStorage() {
  localStorage.setItem('cart', JSON.stringify(cart));
}

// --- Añadir producto ---
export function addToCart(productId, quantity = 1) {
  let matchingItem = cart.find(item => item.productId === productId);

  if (matchingItem) {
    matchingItem.quantity += quantity;
  } else {
    cart.push({ productId, quantity });
  }

  saveToStorage();
}

// --- Actualizar cantidad total del ícono ---
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

// --- Disminuir cantidad ---
export function decreaseQuantity(productId) {
  let updatedCart = [];

  cart.forEach((cartItem) => {
    if (cartItem.productId === productId) {
      if (cartItem.quantity > 1) {
        updatedCart.push({
          ...cartItem,
          quantity: cartItem.quantity - 1
        });
      }
      // Si la cantidad es 1, no se agrega (se elimina)
    } else {
      updatedCart.push(cartItem);
    }
  });

  cart = updatedCart;
  saveToStorage();
}

// --- Aumentar cantidad ---
export function increaseQuantity(productId) {
  cart = cart.map(cartItem =>
    cartItem.productId === productId
      ? { ...cartItem, quantity: cartItem.quantity + 1 }
      : cartItem
  );

  saveToStorage();
}

// --- (opcional) Eliminar producto completamente ---
export function removeFromCart(productId) {
  cart = cart.filter(cartItem => cartItem.productId !== productId);
  saveToStorage();
}

console.log("🛍️ Carrito inicial:", cart);
