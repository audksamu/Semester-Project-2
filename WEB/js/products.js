
/*import { searchProducts } from "./utils/searchProducts.js";*/
import { getProducts } from "./utils/productUtils.js";
import { renderNav } from "./components/common/nav.js"
import { renderFooter } from "./components/common/footer.js";

renderNav("products");
getProducts(".ProductsList",true);
renderFooter();
