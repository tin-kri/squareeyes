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

export const createMovieDetailsStructure = () => `
    <h1 class="page-title selected-movie">Selected movie</h1>
    
    <section class="movie-about">
        <h2 class="movie-title"></h2>
        <h5 class="movie-director"></h5>
        <img class="movie-image" alt="">
    </section>
    
    <div class="movie-summary">
        <p class="movie-p"></p>
    </div>
    
    <div class="movie-info">
        <h6 class="info one"></h6>
        <h6 class="info two"></h6>
        <h6 class="info three"></h6>
        <h6 class="info four"></h6>
    </div>
    
    <div class="movie-buy-trailer">
        <a class="cartbutton" href="#">Add to Cart</a>
        <a class="trailerbutton" href="#" style="pointer-events: none; opacity: 0.5;">Play Trailer</a>
    </div>
`;