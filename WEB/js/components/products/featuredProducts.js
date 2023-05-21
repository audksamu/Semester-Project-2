import { renderProducts } from "./renderProducts.js";

export function featuredProducts(products,htmlClass) {
    const featuredProducts = []; 
    let isThereFeaturedPruducts = false;
    products.forEach(function (product) { 
       if (product.featured) {
           featuredProducts.push(product);
           isThereFeaturedPruducts = true;
           
       }
    });
    if (isThereFeaturedPruducts) {
        renderProducts(featuredProducts,htmlClass,"products");
    }
    else {
        const productContainer = document.querySelector(htmlClass);
        productContainer.innerHTML = `
        <a href="products.html" class="btn btn-primary" role="button">Click here to see our product catalog</a>
        `;
    }
}