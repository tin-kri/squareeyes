import { fetchMovieById } from '../api/movies.js';
import { SELECTORS } from '../utils/constants.js';
import { getMovieIdFromUrl } from '../utils/movieHelpers.js';
import { updateHTML } from '../utils/dom.js';
import { showLoader } from '../ui/loader.js';
import { showError } from '../ui/error.js';
import { createMovieDetailsPage } from '../utils/templates.js';

export const loadMovieDetails = async () => {
    try {
        const movieId = getMovieIdFromUrl();
        
        if (!movieId) {
            showError(SELECTORS.MOVIE_DETAILS_CONTAINER, 'No movie ID found in URL. Please select a movie from the explore page.');
            return;
        }
        
        showLoader(SELECTORS.MOVIE_DETAILS_CONTAINER, 'Loading movie details...');
        const movie = await fetchMovieById(movieId);
        displayMovie(movie);
        
    } catch (error) {
        showError(SELECTORS.MOVIE_DETAILS_CONTAINER, 'Sorry, we could not load this movie. Please try again later.');
    }
};

const displayMovie = (movie) => {
    document.title = `SquareEyes - ${movie.title}`;
    const html = createMovieDetailsPage(movie);
    updateHTML(SELECTORS.MOVIE_DETAILS_CONTAINER, html);
};