
import { listCart } from "./listCart.js";
import { saveCartLocal,getCartLocal, getCartCount, emptyCart } from "./localStorage.js";

export function clearCart() {
    emptyCart();
    listCart();
} 

export function toggleCart(product) {

    let cartTemp=getCartLocal();
    let basketCount=cartTemp.length;
    product = product;

    var productIndex=productInCart(cartTemp,product);
    if (productIndex !== null) {

        cartTemp.splice(productIndex,1);
    }
    else {

        cartTemp.push(product);
    }

    basketCount=cartTemp.length;
    saveCartLocal(cartTemp);
    updateCartIcon();

    if (window.location.pathname=="/cart.html") { listCart() };
}

export function productInCart(productTable,product) {
    var found=false;
    if (productTable != undefined) {
        for (var i=0;i<productTable.length;i++) {
            if (productTable[i].id==product.id) { 
                found=true;
                break 
            } 
        }
    }
    if (found) { return i } else { return null };
 };

 export function updateCartIcon() {
    var cartCount=getCartCount();
    const cartIcon = document.getElementById("cartCounter");
    if (cartCount > 0) {
        cartIcon.innerHTML=`<span id="cartCounter">${cartCount}</span>`;
    } 
    else {
        cartIcon.innerHTML=`<span id="cartCounter"></span>`;
    }
 }