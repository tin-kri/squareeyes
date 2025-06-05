import { fetchMovieById } from '../api/movies.js';
import { SELECTORS } from '../utils/constants.js';
import { getMovieIdFromUrl } from '../utils/movieHelpers.js';
import { updateHTML } from '../utils/dom.js';
import { showLoader } from '../ui/loader.js';
import { showError } from '../ui/error.js';
import { createMovieDetailsPage } from '../utils/templates.js';
import { MESSAGES } from '../utils/messages.js';

export const loadMovieDetails = async () => {
    try {
        const movieId = getMovieIdFromUrl();
        
        if (!movieId) {
            showError(SELECTORS.MOVIE_DETAILS_CONTAINER, MESSAGES.ERRORS.NO_MOVIE_ID);
            return;
        }
        
        showLoader(SELECTORS.MOVIE_DETAILS_CONTAINER, MESSAGES.LOADING.MOVIE_DETAILS);
        const movie = await fetchMovieById(movieId);
        displayMovie(movie);
        
    } catch (error) {
        showError(SELECTORS.MOVIE_DETAILS_CONTAINER, MESSAGES.ERRORS.MOVIES_LOAD_FAILED);
    }
};

const displayMovie = (movie) => {
    document.title = `SquareEyes - ${movie.title}`;
    const html = createMovieDetailsPage(movie);
    updateHTML(SELECTORS.MOVIE_DETAILS_CONTAINER, html);
};