
import { getCartLocal, getCartCount } from "./localStorage.js";
import { updateCartIcon } from "./cartUtils.js";
import { renderProducts } from "../components/products/renderProducts.js"



export function listCart() {
    updateCartIcon();
    let cartCount=getCartCount();
    const cartContainer=document.querySelector(".ShoppingCart");
    if (cartCount > 0) {
        const cartList=getCartLocal();
        renderProducts(cartList,".ShoppingCart","cartlist");
    }
    else {
        cartContainer.innerHTML = `
        <h4>Your shopping cart is empty.</h4>
        <a href="products.html" class="btn btn-primary" role="button">Continue shopping</a>

        `
    }
}