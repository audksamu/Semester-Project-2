import { baseUrl } from "../../settings/api.js";
import { getCartLocal } from "../../utils/localStorage.js";
import { toggleCart, productInCart } from "../../utils/cartUtils.js";


export function resetProductdetails() {
    sessionStorage.productId = null;
}

export function productModal(products,id) {

    let SelectedProduct = products.filter(function (product) {
        if (product.id==id) {
            return true;
        }});

    SelectedProduct = SelectedProduct[0];


    var addToCartTemp = `btn-success" data-dismiss="modal">Add to `;
    var buttonCloseTemp = `btn-secondary`;

    if (productInCart(getCartLocal(),SelectedProduct) !== null ) {
        addToCartTemp = `btn-secondary" data-dismiss="modal">Remove from `;
        var buttonCloseTemp = `btn-primary`;
    }

    const productContainer = document.querySelector(".modal-content");

    productContainer.innerHTML=`
        <div class="modal-header">            
            <h4 class="modal-title">${SelectedProduct.title}</h4>
        </div>
        <div class="modal-body overflow-auto">
            <img class="product_img" src="${baseUrl+SelectedProduct.image.url}">
            <p class="">${SelectedProduct.description}</p>
        </div>
        <div class="modal-footer">
            <h3>Price: ${SelectedProduct.price}</h3>
            <button type="button" id="cartButton" class="btn ${addToCartTemp}<i class="fa-solid fa-cart-arrow-down"></i></button>
            <button type="button" class="btn ${buttonCloseTemp}" data-dismiss="modal">Close</button>
        </div>

    `

    document.getElementById("cartButton").addEventListener("click", function(){
        toggleCart(SelectedProduct)
     });
    
};


