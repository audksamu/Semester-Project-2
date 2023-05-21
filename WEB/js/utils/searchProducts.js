import { renderProducts } from "../components/products/renderProducts.js";
import { displayMessage } from "../components/common/displayMessage.js";

export function searchProducts(products,htmlClass) {
    const search = document.querySelector(".search");
    let filteredProducts=products;
    search.onkeyup = function (event) {
        const searchValue = event.target.value.toLowerCase();
        if (searchValue.length>0 ) {
            filteredProducts = products.filter(function (product) {
                if (product.title.toLowerCase().includes(searchValue) || product.description.toLowerCase().includes(searchValue)) {
                    return true;
                }
            })
        } else
        {
            filteredProducts = products;
        }
        if (filteredProducts.length === 0){
            displayMessage("h2","no results",htmlClass);
        }
        else {
            renderProducts(filteredProducts,htmlClass,"products");            
        }
    };
}