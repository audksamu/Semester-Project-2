import { renderNav } from "./components/common/nav.js"
import { renderFooter } from "./components/common/footer.js";
import { getUserName,emptyCart  } from "./utils/localStorage.js"
import { GetLoginStatus, login,logout } from "./components/admin/login.js"
import { adminList } from "./components/admin/adminUtils.js";



function admin() {
    const adminContainer = document.querySelector(".adminPlaceholder");
    let loggetInUser=getUserName();
    let loggetIn = GetLoginStatus();
    if (loggetIn) {
        adminContainer.innerHTML = `<h3>Welcome to the admin page</h3>
        <p class="h5 text-left">You are logget in as: ${loggetInUser}</p>
        <button id="logout" class="btn btn-primary">Logout</button>
        <button id="addProduct" class="btn btn-primary">Add product</button>
        <div class="productsList"></div>

        `
        document.getElementById("logout").addEventListener("click", function(){
            logout();
         });
         document.getElementById("addProduct").addEventListener("click", function(){
            window.location.replace("manage.html?id=add");
         });
        adminList();
    }
    else {
        login();
    }
}

renderNav("admin");
admin();
renderFooter();