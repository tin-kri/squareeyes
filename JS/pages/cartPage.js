import { getCart, removeFromCart } from "../components/cart.js";
import { createCartPage } from "../utils/templates.js";

export const loadCartPage = () => {
    const container = document.getElementById("cart-container");
    if (!container) return;

    showCart();

   
    container.addEventListener("click", (e) => {
        if (e.target.classList.contains("cart-remove-btn")) {
            removeFromCart(e.target.dataset.id);
            showCart();
        }
    });
};

function showCart() {
    const container = document.getElementById("cart-container");
    const cart = getCart();
    container.innerHTML = createCartPage(cart);
}
