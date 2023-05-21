import { baseUrl } from "../../settings/api.js";
import { updateCartIcon } from "../../utils/cartUtils.js"
import { spinner,displayMessage } from "../common/displayMessage.js";

let products = "";

export async function adminList() {
    const productContainer = document.querySelector(".productsList");
    const url=baseUrl+"/products";
    let innerHTMLtemp=`   
        <div class="table-responsive">   
            <table class="table">
            <thead>
                <tr>
                    <th scope="col">img</th>
                    <th scope="col">Title</th>
                    <th scope="col">featured</th>
                    <th scope="col">Price</th>
                    <th scope="col">Edit</th>
                </tr>
            </thead>
            <tbody>
    `

    productContainer.innerHTML = spinner();
    
    try {
        const response = await fetch(url);
        products = await response.json();

        products.forEach(function (product) {
            innerHTMLtemp +=`
            <tr>
                <th scope="row"><img class="cart_list_height cart_list_img" src="${baseUrl+product.image.formats.thumbnail.url}"></img></th>
                <td>${product.title}</td>
                <td>${product.featured}</td>
                <td>${product.price}</td>
                <td><a href="manage.html?id=${product.id}&title=${product.title}&price=${product.price}&description=${product.description}&featured=${product.featured}" class="btn btn-primary" data-id="${product.id}" role="button">Edit</a></td>                
            </tr>
            `
         });

         innerHTMLtemp +=`
                    <tr>
                    <th scope="row"></th>
                    <td></td>
                    <td>-----</td>
                    <td>----</td>
                </tr>

                </tbody>
            </table>
        </div>
         `
        updateCartIcon();

        productContainer.innerHTML = innerHTMLtemp;

    } catch (error) {
        displayMessage("error", error,".productsList");
    }

}
