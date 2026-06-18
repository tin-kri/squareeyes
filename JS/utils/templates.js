import {
  getMovieInfo,
  getDisplayPrice,
  formatPrice,
  isOnSale,
  getCartTotal,
} from "./movieHelpers.js";

// small shared price-markup helper so the on-sale layout isn't repeated
const priceMarkup = (movie) =>
  isOnSale(movie)
    ? `<span class="original-price">${formatPrice(movie.price)}</span>
       <span class="discount-price">${formatPrice(movie.discountedPrice)}</span>`
    : `<span class="regular-price">${formatPrice(getDisplayPrice(movie))}</span>`;

export const createMovieCard = (movie) => `
    <div class="product">
        <a href="selected-movie.html?id=${movie.id}">
            <img src="${movie.image.url}" alt="${movie.image.alt || movie.title}">
              <div class="product-info">
                <h3 class="product-title">${movie.title}</h3>
                <span class="product-year">${movie.released}</span>
            </div>
        </a>
    </div>
`;

export const createGenreSection = (genre, movies) => {
  const moviesHTML = movies.map(createMovieCard).join("");
  return `
        <div class="genre-section">
            <h2 class="genre">${genre}</h2>
        </div>
        <div class="genre-container">
            ${moviesHTML}
        </div>
    `;
};

export const createMovieDetailsPage = (movie) => {
  const info = getMovieInfo(movie);
  const price = getDisplayPrice(movie);
  return `
        <h1 class="page-title movie-page-title">${movie.title}</h1>

        <div class="movie-grid">
            <!-- Col 1: details -->
            <div class="movie-details-col">
                <h2 class="movie-title">${movie.title} (${movie.released})</h2>
                <span class="movie-genre">${info.genre}</span>
                <div class="price-col">${priceMarkup(movie)}</div>

                <p class="movie-p">${movie.description}</p>

                <span class="movie-rating">${info.rating}</span>
            </div>

            <!-- Col 2: poster -->
            <div class="movie-img-col">
                <img class="movie-image" src="${movie.image.url}" alt="${movie.image.alt || movie.title}">
            </div>
        </div>

        <div class="movie-actions">
            <button class="cartbutton" type="button" data-id="${movie.id}">
                Add to Cart for ${formatPrice(price)}
            </button>
            <a class="trailerbutton" href="#">Play Trailer</a>
        </div>
    `;
};

export const createMovieListLandingPage = (movies) => {
  return `
      <a href="selected-movie.html?id=${movies[0].id}">
        <img src="${movies[0].image.url}" alt="${movies[0].image.alt || movies[0].title}">
      </a>
      <a href="selected-movie.html?id=${movies[1].id}">
        <img src="${movies[1].image.url}" alt="${movies[1].image.alt || movies[1].title}">
      </a>
      <a href="selected-movie.html?id=${movies[2].id}">
        <img src="${movies[2].image.url}" alt="${movies[2].image.alt || movies[2].title}">
      </a>
    `;
};

// cart
export const createCartItem = (movie) => `
    <div class="cart-item" data-id="${movie.id}">
        <img class="cart-item-img" src="${movie.image.url}" alt="${movie.image.alt || movie.title}">
        <div class="cart-item-info">
            <h3 class="cart-item-title">${movie.title}</h3>
            <span class="cart-item-year">${movie.released}</span>
            <div class="cart-item-price">${priceMarkup(movie)}</div>
        </div>
        <button class="cart-remove-btn" data-id="${movie.id}">Remove</button>
    </div>
`;

export const createCartPage = (cart) => {
  if (cart.length === 0) {
    return `
            <div class="cart-empty">
                <p>Your cart is empty.</p>
                <a href="explore.html" class="cartbutton">Browse Movies</a>
            </div>
        `;
  }

  const total = getCartTotal(cart);
  const itemsHTML = cart.map(createCartItem).join("");

  return `
        <div class="cart-grid">
            <div class="cart-items">
                ${itemsHTML}
            </div>
            <div class="cart-summary">
                <h2>Order Summary</h2>
                <div class="cart-summary-row">
                    <span>${cart.length} ${cart.length === 1 ? "film" : "films"}</span>
                    <span>${formatPrice(total)}</span>
                </div>
                <div class="cart-summary-divider"></div>
                <div class="cart-summary-row cart-summary-total">
                    <span>Total</span>
                    <span>${formatPrice(total)}</span>
                </div>
                <a href="paynow.html" class="cartbutton">Proceed to Checkout</a>
                <a href="explore.html" class="trailerbutton">Continue Browsing</a>
            </div>
        </div>
    `;
};