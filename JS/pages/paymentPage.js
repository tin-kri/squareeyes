import { getCart, removeFromCart } from "../components/cart.js";
import { createPaymentPage } from "../utils/templates.js";

export const loadPaymentPage = () => {
    const container = document.getElementById("cart-container");
    if (!container) return;

    showPayment();

   
    container.addEventListener("click", (e) => {
        if (e.target.classList.contains("cart-remove-btn")) {
            removeFromCart(e.target.dataset.id);
            showCart();
        }
    });
};

function showPayment() {
    const container = document.getElementById("payment-container");
    const payment = getPayment();
    container.innerHTML = createPaymentPage(payment);
}
