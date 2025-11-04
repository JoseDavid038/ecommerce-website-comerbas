
export let cart = JSON.parse(localStorage.getItem('cart'));

if (!cart){
  cart = [{
  productId: '101',
  quantity: 2
},{
  productId: '102',
  quantity: 1
},{
  productId: '103',
  quantity: 2
},{
  productId: '104',
  quantity: 2
}];
}



function saveToStorage(){
    localStorage.setItem('cart', JSON.stringify(cart));
}



export function addToCart(productId){

    let matchingItem;
       cart.forEach((cartItem) =>{
        if (productId === cartItem.productId){
          matchingItem = cartItem;
        }
       });

       if (matchingItem){
          matchingItem.quantity += 1;
       }else{
          cart.push({
          productId: productId,
          quantity: 1
          });
       }

    saveToStorage();

};


export function updateCartQuantity(){

    let cartQuantity = 0;

       cart.forEach((cartItem) => {
          cartQuantity += cartItem.quantity;
       });

       document.querySelector('.js-cart-quantity').innerHTML = cartQuantity;
};

console.log(cart);
saveToStorage();




// export function removeFromCart(productId){

//    const newCart = [];

//    cart.forEach((cartItem) => {
//       if (cartItem.productId !== productId){
//          newCart.push(cartItem);
//       };
//    });

//    cart = newCart;
// };


export function decreaseQuantity(productId) {
  let updatedCart = [];

  cart.forEach((cartItem) => {
    if (cartItem.productId === productId) {
      if (cartItem.quantity > 1) {
        // Resta una unidad
        updatedCart.push({
          ...cartItem,
          quantity: cartItem.quantity - 1
        });
      }
      // Si la cantidad es 1, no se agrega al nuevo carrito (se elimina)
    } else {
      updatedCart.push(cartItem);
      
    }
  });

  cart = updatedCart;

  saveToStorage();
}

