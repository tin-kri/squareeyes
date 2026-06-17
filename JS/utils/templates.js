import { getMovieInfo, getDisplayPrice, formatPrice } from "./movieHelpers.js";
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
                <div class="price-col">
                    ${movie.onSale && movie.discountedPrice < movie.price
                        ? `<span class="original-price">${formatPrice(movie.price)}</span>
                           <span class="discount-price">${formatPrice(movie.discountedPrice)}</span>`
                        : `<span class="regular-price">${formatPrice(movie.price)}</span>`
                    }
                </div>

                <p class="movie-p">${movie.description}</p>

                <span class="movie-rating">${info.rating}</span>
            
            </div>

            <!-- Col 2: poster -->
            <div class="movie-img-col">
                <img class="movie-image" src="${movie.image.url}" alt="${movie.image.alt || movie.title}">
            </div>

        </div>

        <!-- Actions: full width under grid -->
        <div class="movie-actions">
            <a class="cartbutton" href="cart.html?add=${movie.id}">Add to Cart — ${formatPrice(price)}</a>
            <a class="trailerbutton" href="#" >Play Trailer</a>
        </div>
    `;
};


export const createMovieListLandingPage = (movies) => {
  return `
     
      <a href="selected-movie.html?id=${movies[0].id}">
        <img src="${movies[0].image.url}"  alt="${movies[0].image.alt || movies[0].title}">
      </a>
      <a href="selected-movie.html?id=${movies[1].id}">
        <img src="${movies[1].image.url}" alt="${movies[1].image.alt || movies[1].title}">
      </a>
      <a href="selected-movie.html?id=${movies[2].id}">
        <img src="${movies[2].image.url}"  alt="${movies[2].image.alt || movies[2].title}">
      </a>
       
    `;
};
