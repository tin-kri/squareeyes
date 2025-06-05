export const API_CONFIG = {
    BASE_URL: 'https://v2.api.noroff.dev',
    ENDPOINTS: {
        ALL_MOVIES: '/square-eyes',
        SINGLE_MOVIE: (id) => `/square-eyes/${id}`
    }
};

export const SELECTORS = {
    MOVIES_CONTAINER: '#movies-container',
    MOVIE_DETAILS_CONTAINER: '.main-movie-selected',
    LANDING_CONTAINER: '.container-movies-frontpage'
};