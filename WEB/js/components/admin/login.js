import { displayMessage } from "../common/displayMessage.js";
import { clearLogin, getToken, getUserName, saveToken, saveUser } from "../../utils/localstorage.js";
import { baseUrl } from "../../settings/api.js";


export function GetLoginStatus() {
    let status=false;
    let user=getUserName();
    let tkn=getToken();
    if (user!=null && tkn!=null) {
        status=true;
    }
    return status;
}

function submitForm(event) {
    event.preventDefault();

    const userid = document.querySelector("#userid");
    const password = document.querySelector("#password");
    const message = document.querySelector(".login-container");

    message.innerHTML = "";

    const useridValue = userid.value.trim();
    const passwordValue = password.value.trim();

    if (useridValue.length === 0 || passwordValue.length === 0) {
        return displayMessage("warning", "Invalid values", ".login-container");
    }
    doLogin(useridValue, passwordValue);
}

async function doLogin(userid, password) {
    const url = baseUrl + "/auth/local";
    const data = JSON.stringify({ identifier: userid, password: password });
    const options = {
        method: "POST",
        body: data,
        headers: {
            "Content-Type": "application/json",
        },
    };

    try {
        const response = await fetch(url, options);
        const json = await response.json();

        if (json.user) {
            saveToken(json.jwt);
            saveUser(json.user);
            location.href = "/admin.html";
        }

        if (json.error) {
            displayMessage("warning", "Invalid login details", ".login-container");
        }
    } catch (error) {
        displayMessage("error", "API call failed", ".login-container");
    }
}

export function login() {

    const adminContainer = document.querySelector(".adminPlaceholder");
    let innerHTMLtemp="";
    
    innerHTMLtemp = `
    <div class="container">
        <div class="head-container">
            <h1>Login</h1>
            <p>Pleace enter your userid and password to login</p>
        </div>
        <form>
            <div class="login-container"></div>

            <div>
                <label for="userid"> userid(email)</label>
                <input id="userid" />
            </div>
            <div>
                <label for="password"> Password</label>
                <input type="password" id="password" />
            </div>
            <button class="btn btn-primary">Login</button>
        </form>
    </div>
    `
adminContainer.innerHTML = innerHTMLtemp;
const form = document.querySelector("form");        
form.addEventListener("submit", submitForm);

}

export function logout() {
   clearLogin();
   login();
}
