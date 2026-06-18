import { getCart, clearCart } from "/JS/components/cart.js";
import {
  formatPrice,
  getDisplayPrice,
  getCartTotal,
} from "/JS/utils/movieHelpers.js";

export function orderSummary() {
  const cart = getCart();
  const container = document.getElementById("payment-cart-summary");
  if (!container) return;

  const total = getCartTotal(cart);

  const items = cart
    .map(
      (movie) => `<div class="payment-summary-item">
        <span>${movie.title}</span>
        <span>${formatPrice(getDisplayPrice(movie))}</span>
      </div>`,
    )
    .join("");

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
