const tokenKey = "token";
const userKey = "user";

export function saveToken(token) {
    saveToStorage(tokenKey, token);
}

export function getToken() {
    return getFromStorage(tokenKey);
}

export function saveUser(user) {
    saveToStorage(userKey, user);
}

export function getUserName() {
    const user = getFromStorage(userKey);
    if (user) {
        return user.username;
    }
    return null;
}

export function clearLogin() {
    localStorage.removeItem(tokenKey);
    localStorage.removeItem(userKey);
}

export function saveToStorage(key, value) {
    localStorage.setItem(key, JSON.stringify(value));
}

export function emptyCart() {
    localStorage.removeItem("cart");
    localStorage.removeItem("cartCount");
}

export function saveCartLocal (productsToSave) {
    localStorage.setItem("cart", JSON.stringify(productsToSave));
    localStorage.setItem("cartCount",productsToSave.length);
}

export function getCartLocal () {
    let cart=getFromStorage("cart");
    if (cart==null) {cart=[]};
    return cart;
}

export function getCartCount() {
    return getFromStorage("cartCount");
}

function getFromStorage(key) {
    const value = localStorage.getItem(key);
    if (!value) {
        return null;
    }
    return JSON.parse(value);
}