import { fetchAllMovies } from '../api/movies.js';
import { SELECTORS } from '../utils/constants.js';
import { groupByGenre } from '../utils/movieHelpers.js';
import { createGenreSection } from '../utils/templates.js';
import { updateHTML, showElement, hideElement } from '../utils/dom.js';

// EXPORTS
export const loadMovies = async () => {
    try {
        showLoading();
        const movies = await fetchAllMovies();
        displayMovies(movies);
    } catch (error) {
        showError('Sorry, we could not load the movies. Please try again later.');
    }
};

// INTERNAL FUNCTIONS (not exported)
const displayMovies = (movies) => {
    const groupedMovies = groupByGenre(movies);
    
    let html = '';
    for (const [genre, genreMovies] of Object.entries(groupedMovies)) {
        html += createGenreSection(genre, genreMovies);
    }
    
    updateHTML(SELECTORS.MOVIES_CONTAINER, html);
    hideLoading();
};

const showLoading = () => {
    showElement(SELECTORS.LOADING);
    hideElement(SELECTORS.ERROR);
};

const hideLoading = () => hideElement(SELECTORS.LOADING);

const showError = (message) => {
    hideLoading();
    const errorElement = document.querySelector(SELECTORS.ERROR);
    if (errorElement) {
        errorElement.textContent = message;
        showElement(SELECTORS.ERROR);
    }
};