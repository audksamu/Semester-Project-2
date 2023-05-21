import { renderNav } from "./components/common/nav.js"
import { renderFooter } from "./components/common/footer.js";
import { listCart } from "./utils/listCart.js"


renderNav("cart");
listCart();
renderFooter();