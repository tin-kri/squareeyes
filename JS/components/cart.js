export function addToCart(movie) {
    const cart = getCart();
    const alreadyInCart = cart.find((item) => item.id === movie.id);

    if (!alreadyInCart) {
        cart.push(movie);
        localStorage.setItem("cart", JSON.stringify(cart));
    }
}

export function getCart() {
    return JSON.parse(localStorage.getItem("cart")) || [];
}

export function removeFromCart(movieId) {
    const cart = getCart().filter((item) => item.id !== movieId);
    localStorage.setItem("cart", JSON.stringify(cart));
}
