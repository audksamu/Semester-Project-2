
import { baseUrl } from "../../settings/api.js";
import { displayMessage,spinner } from "../common/displayMessage.js";

const url = baseUrl+"/home"

export async function getBanner() {
   const HeroContainer = document.querySelector(".HeroBanner");
   HeroContainer.innerHTML = spinner();

    try {
        const response = await fetch(url);
        const banner = await response.json();
        const imgUrl = baseUrl + banner.hero_banner.url;
        const imgAltTxt = baseUrl + banner.hero_banner_alt_text;
        HeroContainer.innerHTML = `
        <img class="d-block mx-auto mb-4v w-100 h-100" src="${imgUrl}" alt="${imgAltTxt}">
        `
    } catch (error) {
        displayMessage("error", error, ".HeroBanner");
    }
}
