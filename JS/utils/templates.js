import { getMovieInfo, getDisplayPrice, formatPrice } from './movieHelpers.js';
export const createMovieCard = (movie) => `
    <div class="product">
        <a href="selected-movie.html?id=${movie.id}">
            <img src="${movie.image.url}" alt="${movie.image.alt || movie.title}">
            <h3>${movie.title}</h3>
        </a>
    </div>
`;

export const createGenreSection = (genre, movies) => {
    const moviesHTML = movies.map(createMovieCard).join('');
    return `
        <div>
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
        <h1 class="page-title selected-movie">Selected movie</h1>
        
        <section class="movie-about">
            <h2 class="movie-title">${movie.title}</h2>
            <h5 class="movie-director">Released: ${movie.released}</h5>
            <img class="movie-image" src="${movie.image.url}" alt="${movie.image.alt || movie.title}">
        </section>
        
        <div class="movie-summary">
            <p class="movie-p">${movie.description}</p>
        </div>
        
        <div class="movie-info">
            <h6 class="info one">${info.rating}</h6>
            <h6 class="info two">${info.price}</h6>
            <h6 class="info three" style="color: ${movie.onSale ? '#d32f2f' : '#373736'}">${info.onSale}</h6>
            <h6 class="info four" style="color: ${movie.onSale ? '#d32f2f' : '#999'}">${info.discountPrice}</h6>
        </div>
        
        <div class="movie-buy-trailer">
            <a class="cartbutton" href="cart.html?add=${movie.id}">Add to Cart for ${formatPrice(price)}</a>
            <a class="trailerbutton" href="#" style="pointer-events: none; opacity: 0.5;">Play Trailer</a>
        </div>
    `;
};

// Landing page work
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
       <h1 class="intro">Hand-picked independent films from all over the world</h1>
      <div class="cta-container">
        <div>
          <a href="explore.html" class="cta-button">Explore content</a>
        </div>
      </div>
    `;
  };