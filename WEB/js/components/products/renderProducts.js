
import { baseUrl } from "../../settings/api.js";
import { productModal } from "./productModal.js";
import { clearCart } from "../../utils/cartUtils.js";

export function renderProducts(products,htmlClass,renderType) {
    const productContainer = document.querySelector(htmlClass);
    productContainer.innerHTML = "";
    let carouselContentTemp = "";
    let carouselCounter = 0;
    let carousel = false;
    let cartSum = 0;

    let innerHTMLTemp = `
        <div id="productModal" class="modal fade " role="dialog">
            <div class="modal-dialog modal-dialog-centered modal-dialog-scrollable">              
                <!-- Modal content-->
                <div class="modal-content">
                </div>              
            </div>
        </div>        
        `
    if (renderType=="carousel") {
        carousel=true;
    }
    else
    if (renderType=="cartlist") {
        innerHTMLTemp +=`  
        <table class="table">
            <thead>
                <tr>
                    <th scope="col">img</th>
                    <th scope="col">Title</th>
                    <th scope="col">Details</th>
                    <th scope="col">Price</th>
                </tr>
            </thead>
            <tbody>
    `
    }        
    else {}


    products.forEach(function (product) {
    
        if (carousel) {
            if (carouselCounter === 0 ) {
                carouselContentTemp += `
                <div class="carousel-item active">
                `;
            }
            else {
                carouselContentTemp += `
                <div class="carousel-item">
                `;             
            }
            carouselContentTemp +=`
                    <img src="${baseUrl+product.image.url}" class="d-block w-100">
                    <div class="carousel-caption">
                    <a class="btn btn-primary" data-id="${product.id}" data-toggle="modal" data-target="#productModal" role="button">Details</a>
                    </div>
                </div>
            `
            carouselCounter ++;

        }
        else 
        if (renderType=="products") {
            innerHTMLTemp += `    
                                        <div class="col-md-6 col-lg-4">
                                            <div class="card border border-dark rounded mb-3">
                                            <h3 class="card-title">${product.title}</h3>
                                            <div>
                                                <div class="card-body text-center w-100">
                                                    <img src="${baseUrl+product.image.url}" class="product_img">
                                                </div>
                                                <div class="card-footer">
                                                    <span>Price: ${product.price}</span>
                                                    <a class="btn btn-primary" data-id="${product.id}" data-toggle="modal" data-target="#productModal" role="button">Details</a>
                                                </div>
                                            </div>
                                            </div>
                                        </div>
                                    `;
        }
        else 
        if (renderType=="cartlist") {
            cartSum=cartSum+product.price;
            innerHTMLTemp += `
            <tr>
                <th scope="row"><img class="cart_list_height cart_list_img" src="${baseUrl+product.image.url}"></img></th>
                <td>${product.title}</td>
                <td><a class="btn btn-primary" data-id="${product.id}" data-toggle="modal" data-target="#productModal" role="button">Details</a></td>
                <td>${product.price}</td>
            </tr>
            `;
        }
    });

    if (carousel) {
        innerHTMLTemp+=`
        <H2>See our featured products</H2>

            <div class="carousel-inner">
               ${carouselContentTemp}
            </div>
            <button class="carousel-control-prev" type="button" data-bs-target="#featuredCarousel" data-bs-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Previous</span>
            </button>
            <button class="carousel-control-next" type="button" data-bs-target="#featuredCarousel" data-bs-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Next</span>
            </button>            
        </div>
        `; 
    } 
    else
    if (renderType=="cartlist") {
        innerHTMLTemp += `
            <tr>
                <th scope="row"></th>
                <td></td>
                <td>Total :</td>
                <td>${cartSum}</td>
            </tr>

            </tbody>
        </table>
        <a href="products.html" class="btn btn-primary" role="button">Continue shopping</a>
        <button id="clearCart" class="btn btn-secondary" role="button">Clear cart</button>
    `
    }

    productContainer.innerHTML = innerHTMLTemp;

    if (document.getElementById("clearCart")!=null) {    
        document.getElementById("clearCart").addEventListener("click", function(){
                clearCart()
            });
    }


    const detailsButtons = document.querySelectorAll(htmlClass+" a");
    detailsButtons.forEach((button) => {
            button.addEventListener("click", handlClick);
        });
    
    function handlClick() {
        productModal(products,this.dataset.id);
    };

}
