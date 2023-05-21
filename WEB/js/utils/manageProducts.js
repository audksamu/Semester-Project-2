import { baseUrl } from "../settings/api.js";
import { getToken,saveToStorage } from "./localStorage.js"


export async function deleteProduct(id) {
    const token=getToken();
    const url=baseUrl+"/products/"+id;
    const options = {
        method: "DELETE",
        headers: {
            Authorization: `Bearer ${token}`,
        },
    }
    try {
        const response = await fetch(url,options);
        const json = await response.json();
        return true;
    } catch(error) {
        return false;
    };
}

export async function updateProduct(product,id) {

    const productObj=JSON.stringify(product);
    const token=getToken();
    const url=baseUrl+"/products/"+id;
    const options = {
        method: "PUT",
        body: productObj,
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`
        }
    };

    try {
        const response = await fetch(url,options);
        const json = await response.json();
        if (json.updatet_at); {
            return true;
        }
        if (json.error) {
            return false;
        }
    } catch(error) {
        return false;
    };

}


export async function addProduct(product) {
   event.preventDefault();
	const formData = new FormData();
    const file = imagePicker.files[0];
    product=JSON.stringify(product);
    formData.append("files.image",file,file.name);
    formData.append("data",product);
    const token=getToken();
    const url=baseUrl+"/products";
    const options = {
        method: "POST",
        body: formData,
        headers: {
            Authorization: `Bearer ${token}`,
        }
    };
    try {
        const response = await fetch(url,options);
        const json = await response.json();
        if (json.updatet_at); {
            return true;
        }
        if (json.error) {
            return true;
        }     
    } catch(error) {
        return false;
    };
}