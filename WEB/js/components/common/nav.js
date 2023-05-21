export function renderNav(location) {
    const navContainer = document.querySelector(".navPlaceHolder");
    let cl1,cl2,cl3,cl4 = "";
    switch (location) {
       case "home":
           cl1="active";
           break;
        case "products":
            cl2="active";
            break;
        case "cart":
            cl3="active";
            break;
        case "admin":
            cl4="active";
            break;
    }

    navContainer.innerHTML = `
    
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
        <div class="container">
            <a class="navbar-brand text-primary" href="/">
                <img src="./img/icon-steps-1991839_640.png" width="30" height="30" class="d-inline-block align-top" alt="">
                <span class="h3 text-heading">Mountain Diva Shoes</span>
            </a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
            </button>
                <div class="collapse navbar-collapse h4" id="navbarSupportedContent">
                    <ul class="navbar-nav ml-auto">
                        <li class="nav-item">
                            <a class="nav-link ${cl1}" href="/">Home <span class="sr-only">(current)</span></a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link ${cl2}" href="products.html">Products</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link ${cl3}" href="cart.html">Shopping cart</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link ${cl4}" href="admin.html">Login</a>
                        </li>                    
                    </ul>
                    
                </div>
                <div>
                    <a class="cart-wrapper" href="cart.html">
                    <i class="display-6 fas fa-shopping-cart"></i>
                    <span id="cartCounter">3</span></a>
                </div>
            </a>
        </div>
     </nav>  

    `;
}