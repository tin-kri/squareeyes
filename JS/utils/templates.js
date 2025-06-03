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

export const createLoadingHTML = (message = 'Loading...') => `
    <div class="movie-loading">
        <div class="loading-content">
            <p>${message}</p>
        </div>
    </div>
`;

export const createErrorHTML = (message) => `
    <div class="movie-error">
        <div class="error-content">
            <h3>Oops! Something went wrong</h3>
            <p>${message}</p>
        </div>
    </div>
`;