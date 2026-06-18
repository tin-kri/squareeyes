
    import { getCart, clearCart } from "/JS/components/cart.js";
    import { formatPrice } from "/JS/utils/movieHelpers.js";

    export function orderSummary(){
    const cart = getCart();
    const container = document.getElementById("payment-cart-summary");


        const total = cart.reduce((sum, movie) => {
            const price = movie.onSale && movie.discountedPrice < movie.price
                ? movie.discountedPrice : movie.price;
            return sum + price;
        }, 0);

        const items = cart.map(movie => {
            const price = movie.onSale && movie.discountedPrice < movie.price
                ? movie.discountedPrice : movie.price;
            return `<div class="payment-summary-item">
                <span>${movie.title}</span>
                <span>${formatPrice(price)}</span>
            </div>`;
        }).join("");

        container.innerHTML = `
            ${items}
            <div class="payment-summary-total">
                <span>Total</span>
                <span>${formatPrice(total)}</span>
            </div>
        `;
    }
  export function confirmPayment() {
    const button = document.querySelector(".paymentbutton");
    if (!button) return;

    button.addEventListener("click", () => {
        clearCart();
        window.location.href = "/purchaseconfirmation.html";
    });
}
