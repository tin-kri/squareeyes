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

  return ` <section class="movie-container">
  <div class="movie-col>
        <h1 class="page-title selected-movie">Selected movie</h1>
        <h2 class="movie-title">${movie.title} (${movie.released})</h2>
            <div class="price-col">
            ${
              movie.onSale && movie.discountedPrice < movie.price
                ? `
              <span class="original-price">${formatPrice(movie.price)}</span>
             <span class="discount-price">${formatPrice(movie.discountedPrice)}</span>
             `
                : `
            <span class="regular-price">${formatPrice(movie.price)}</span> `
            }
       </div>
        <p class="movie-p">${movie.description}</p>
        <h6 class="info one">${info.rating}</h6>
        </div>
        <div class="movie-img-col">
            
        <img class="movie-image" src="${movie.image.url}" alt="${movie.image.alt || movie.title}">
        </div>
           </section>         

        <div class="movie-action-col">
            <a class="cartbutton" href="cart.html?add=${movie.id}">Add to Cart for ${formatPrice(price)}</a>
            <a class="trailerbutton" href="#" style="pointer-events: none; opacity: 0.5;">Play Trailer</a>
        </div>
    `;
};

export const createMovieListLandingPage = (movies) => {
  return `
     
      <a href="selected-movie.html?id=${movies[0].id}">
        <img src="${movies[0].image.url}" class="photostill-frontpage" alt="${movies[0].image.alt || movies[0].title}">
      </a>
      <a href="selected-movie.html?id=${movies[1].id}">
        <img src="${movies[1].image.url}" class="photostill-frontpage" alt="${movies[1].image.alt || movies[1].title}">
      </a>
      <a href="selected-movie.html?id=${movies[2].id}">
        <img src="${movies[2].image.url}" class="photostill-frontpage" alt="${movies[2].image.alt || movies[2].title}">
      </a>
       
    `;
};
