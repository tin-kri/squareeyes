import { fetchAllMovies } from '../api/movies.js';
import { SELECTORS } from '../utils/constants.js';
import { MESSAGES } from '../utils/messages.js';
import { getRandomMovies } from '../utils/movieHelpers.js';
import { updateHTML } from '../utils/dom.js';
import { showLoader } from '../ui/loader.js';
import { showError } from '../ui/error.js';
import { createMovieListLandingPage } from '../utils/templates.js';

export const loadLandingPage = async () => {
    try {
        showLoader(SELECTORS.LANDING_CONTAINER, MESSAGES.LOADING.LANDING_PAGE);
        const allMovies = await fetchAllMovies();
        displayLandingPage(allMovies);
    } catch (error) {
        showError(SELECTORS.LANDING_CONTAINER, MESSAGES.ERRORS.LANDING_LOAD_FAILED);
    }
};

//  export const displayLandingPage = (allMovies) => {
//     const randomMovies = getRandomMovies(allMovies, 3);
    
//     const html = createMovieListLandingPage(randomMovies);
//     updateHTML(SELECTORS.LANDING_CONTAINER, html);
// };
export const displayLandingPage = (allMovies) => {
    console.log('All movies:', allMovies); // Add this
    const randomMovies = getRandomMovies(allMovies, 3);
    console.log('Random movies:', randomMovies); // Add this
    const html = createMovieListLandingPage(randomMovies);
    console.log('Generated HTML:', html); // Add this
    updateHTML(SELECTORS.LANDING_CONTAINER, html);
  };