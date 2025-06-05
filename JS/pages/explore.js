// explore.js - Controls the explore page functionality
import { fetchAllMovies } from '../api/movies.js';
import { SELECTORS } from '../utils/constants.js';
import { groupByGenre } from '../utils/movieHelpers.js';
import { createGenreSection } from '../utils/templates.js';
import { updateHTML } from '../utils/dom.js';
import { showLoader } from '../ui/loader.js';
import { showError } from '../ui/error.js';

export const loadMovies = async () => {
    try {
        showLoader(SELECTORS.MOVIES_CONTAINER, 'Loading movies...');
        const movies = await fetchAllMovies();
        displayMovies(movies);
    } catch (error) {
        showError(SELECTORS.MOVIES_CONTAINER, 'Sorry, we could not load the movies. Please try again later.');
    }
};

const displayMovies = (movies) => {
    const groupedMovies = groupByGenre(movies);
    
    let html = '';
    for (const [genre, genreMovies] of Object.entries(groupedMovies)) {
        html += createGenreSection(genre, genreMovies);
    }
    
    updateHTML(SELECTORS.MOVIES_CONTAINER, html);
};