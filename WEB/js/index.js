import { getBanner } from "./components/products/HeroBanner.js";
import { getProducts } from "./utils/productUtils.js"
import { renderNav } from "./components/common/nav.js"
import { renderFooter } from "./components/common/footer.js";

renderNav("home");
getBanner();
getProducts(".FeaturedList",false);
renderFooter();