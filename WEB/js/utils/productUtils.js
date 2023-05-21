import { baseUrl } from "../settings/api.js";
import { displayMessage, spinner } from "../components/common/displayMessage.js";
import { renderProducts } from "../components/products/renderProducts.js";
import { searchProducts } from "./searchProducts.js";
import { featuredProducts } from "../components/products/featuredProducts.js"
import { updateCartIcon } from "./cartUtils.js";

const url = baseUrl+"/products"

export async function productById(id) {

    const prodUrl = url +"/"+id;

    try {
        const response = await fetch(prodUrl);
        const product = await response.json();
        return product;
    } catch (error) {
        return "error";
    }

}

export async function getProducts(htmlClass,renderAndSearch) {
    const productContainer = document.querySelector(htmlClass);
    productContainer.innerHTML = spinner();
    try {
        const response = await fetch(url);
        const products = await response.json();
        if (renderAndSearch ) {
           renderProducts(products,htmlClass,"products");
           searchProducts(products,htmlClass);
        } 
        else {
            featuredProducts(products,htmlClass,"carousel");
        } 

        updateCartIcon();

    } catch (error) {
        displayMessage("error", error, htmlClass);
    }
}

