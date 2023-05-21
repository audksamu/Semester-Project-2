import { renderNav } from "./components/common/nav.js"
import { renderFooter } from "./components/common/footer.js";
import { GetLoginStatus } from "./components/admin/login.js";
import { getUserName } from "./utils/localStorage.js";


import { addProduct, deleteProduct,updateProduct } from "./utils/manageProducts.js"
import { displayMessage } from "./components/common/displayMessage.js";
import { checkLength } from "./utils/utils.js";



let titleTemp="";
let priceTemp=0;
let descTemp="";
let adminContainer="";

function imageValid(file) {
    if (imagePicker.files.length>0) {
        let validSize = (file.size/1024 <= 200);
        return validSize;
    }
    else {return false}
    }

function validateForm(event,validateFile,file) {
    let formOK=true;
    if (checkLength (titleTemp.value,3) === true) {
        titleError.style.display = "none";
    } else {
        titleError.style.display = "block";
        formOK=false;
    }
    if (checkLength(descTemp.value, 3) === true) {
        descrError.style.display = "none";
    } else {
        descrError.style.display = "block";
        formOK=false;
    }
    if (price.value>0)  {
        priceError.style.display = "none";
    } else {
        priceError.style.display = "block";
        formOK=false;
    }
    if (validateFile) {
        if (imageValid(file))   {
            fileError.style.display = "none";
        } else {
            fileError.style.display = "block";
            formOK=false;
        }
    }
    event.preventDefault();
    event.stopPropagation();
    return formOK;
}

function informUpdate(user,message) {
    adminContainer.innerHTML=`
    <h3>Welcome to the admin page</h3>
        <span class="h5 text-left">You are logget in as: ${user}</span>
        <div class="card border border-dark rounded mb-3">
            <div class="card-header bg-warning" >
                <p h3>${message}</h3>
                <div>
                    <button type="button" id="close" class="btn btn-primary">Close</button>
                </div>
            </div>
        </div>
        `
    document.getElementById("close").addEventListener("click", function(){
        window.location.replace("admin.html");
    });
};

function chekIfLoggetin(){
    if (!GetLoginStatus()) {
                /* user not logget in. redirect to login page */
                window.location.replace("admin.html");
    }
}


export function prepareProduct(title,description,price,featured,userName,newProduct) {
    let imgHTML="";
    let deleteHTML="";
    let checkedTemp="";
    let headHTML="";
    if (!newProduct && featured) {checkedTemp="checked"}
    if (newProduct) {
        headHTML="Add new product";
        imgHTML=`
            <div>
                <input type="file" id="imagePicker"/>
                <img class="product_img " src="./img/img_placeholder.png" alt="Photo placeholder">
                <div class="text-warning" id="fileError" style="display:none">Please select a valid file</div>     
            </div>`
    }
    else {
        headHTML="Edit product";
        imgHTML=`<img class="product_img" src="./img/img_placeholder.png"></img>`
        deleteHTML=`<button type="button" id="deleteButton" class="btn btn-danger">Delete</button>`;
    };

    const innerHTMLtemp=`
    <h3>Welcome to the admin page</h3>
    <span class="h5 text-left">You are logget in as: ${userName}</span>
    <form id="editForm">
        <div class="card border border-dark rounded mb-3">
            <div class="card-header">
                <h4 class="card-title">${headHTML}</h4>
            </div>
            <div class="card-body overflow-auto">
                ${imgHTML}
                <div>
                    <label for="title">Title:</label>
                    <input id="title" type="text" name="title" value="${title}"/>
                    <div class="text-warning" id="titleError" style="display:none">Please enter a product title</div>                   
                </div>
                <div>
                    <label for="price">Price:</label>
                    <input id="price" type="number" name="price" step="any" min="0" value="${price}"/>
                    <div class="text-warning" id="priceError" style="display:none">Please enter a valid price</div>                     
                </div>
                <div>
                    <label for="featured">featured:</label>
                    <input id="featured" type="checkbox" name="featured" value="true" ${checkedTemp}/>
                </div>
                <div>
                    <label for="description">Description:</label>
                    <input id="description" type="text" name="description" value="${description}"/>
                    <div class="text-warning" id="descrError" style="display:none">Please enter a description</div>  
                </div>
            </div>
            <div id="cardFooter" class="card-footer">             
                <button type="submit" form="editForm" id="updateButton" class="btn btn-success" >Update</button>
                ${deleteHTML}
                <button type="button" id="close" class="btn btn-primary">Close</button>
            </div>
        </div>
    </form>
    `;
    
    return innerHTMLtemp;
}

function editProduct() {
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    let id = urlParams.get(`id`);
    let title = urlParams.get(`title`);
    let price = urlParams.get(`price`);
    let description = urlParams.get(`description`);
    let featured = urlParams.get(`featured`);
    adminContainer = document.querySelector(".EditProduct");

    const loggetInUser=getUserName();
    
    adminContainer.innerHTML=prepareProduct(title,description,price,featured,loggetInUser,false);

    document.getElementById("deleteButton").addEventListener("click", function(){
        if (confirm(`Are you sure you wish to delete the produkt ${product.title} ?`)) {
                /* User confirme delete. Do delete*/
                if (deleteProduct(id)) { 
                    informUpdate(loggetInUser,`Successfully deleted ${titleTemp.VALUE}`)
                }                        
                else {
                    /* delete failed */
                    displayMessage("error","Sorry, deletion failet.","EditProduct");
                } 
            }
            else {
                /* User did decline delete. Return to product management */
                window.location.replace("admin.html");
            }
        });

        document.getElementById("close").addEventListener("click", function(){
            window.location.replace("admin.html");
        });

    window.onload=(event) => {
        
        const form = document.getElementById("editForm");
        titleTemp = document.querySelector("#title");
        priceTemp = document.querySelector("#price");
        featured = document.querySelector("#featured");
        descTemp = document.querySelector("#description");
        form.onsubmit = function(event) {            
            if (validateForm(event)) {
                    let featuredBoolean=false;
                    if (featured.checked) {featuredBoolean=true};
                    const productToAdd = {
                        title: titleTemp.value,
                        price: priceTemp.value,
                        featured: featuredBoolean,
                        description: descTemp.value
                    };                      
                    if (updateProduct(productToAdd,id) ) {
                        informUpdate(loggetInUser,`Successfully updated ${titleTemp.value}`);
                    }
                    else {
                        displayMessage("error","Something went wrong","container");
                    }
                }
            }
        }
    }

function addNewProduct() {
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
/*    let id = urlParams.get(`id`); */
    let title = "";
    let price = 0;
    let description = ""
    let featured = false;
    adminContainer = document.querySelector(".EditProduct");

    const loggetInUser=getUserName();
    
    adminContainer.innerHTML=prepareProduct(title,description,price,featured,loggetInUser,true);

    document.getElementById("close").addEventListener("click", function(){
        window.location.replace("admin.html");
    });

    window.onload=(event) => {
        
        const form = document.getElementById("editForm");
        titleTemp = document.querySelector("#title");
        priceTemp = document.querySelector("#price");
        featured = document.querySelector("#featured");
        descTemp = document.querySelector("#description");
        const imagePicker = document.querySelector("#imagePicker");

        form.onsubmit = function(event) {      
            if (validateForm(event,true,imagePicker)) {
                    let featuredBoolean=false;
                    if (featured.checked) {featuredBoolean=true};
                    const productToAdd = {
                        title: titleTemp.value,
                        price: priceTemp.value,
                        featured: featuredBoolean,
                        description: descTemp.value
                    };        
                    
                    if (addProduct(productToAdd) ) {  
                        informUpdate(loggetInUser,`Successfully added ${titleTemp.value}`);
                        addNewProduct();
                    }
                    else {
                        displayMessage("error","Something went wrong","container");
                    }
                }
            }
        }
    }


function checkIfNew() {
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    let id = urlParams.get(`id`);
    if (id=="add") 
    {
        addNewProduct();
    } 
    else {
        editProduct();
    }
}
    


chekIfLoggetin();
renderNav("admin");
checkIfNew()
renderFooter();