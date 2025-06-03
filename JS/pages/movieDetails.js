import { fetchMovieById } from '../api/movies.js';
import { getMovieIdFromUrl, getDisplayPrice, formatPrice, getMovieInfo } from '../utils/movieHelpers.js';
import { updateText, updateImage, getElement, setOpacity } from '../utils/dom.js';
import { createLoadingHTML, createErrorHTML } from '../utils/templates.js';

export const loadMovieDetails = async () => {
    try {
        const movieId = getMovieIdFromUrl();
        
        if (!movieId) {
            showError('No movie ID found in URL. Please select a movie from the explore page.');
            return;
        }
        
        showLoading();
        const movie = await fetchMovieById(movieId);
        displayMovie(movie);
        
    } catch (error) {
        showError('Sorry, we could not load this movie. Please try again later.');
    }
};

// INTERNAL FUNCTIONS (not exported)
const displayMovie = (movie) => {
    document.title = `SquareEyes - ${movie.title}`;
    
    updateMovieBasics(movie);
    updateMovieInfo(movie);
    updateBuyButton(movie);
    hideLoading();
};

const updateMovieBasics = (movie) => {
    updateText('.movie-title', movie.title);
    updateText('.movie-director', `Released: ${movie.released}`);
    updateImage('.movie-image', movie.image.url, movie.image.alt || movie.title);
    updateText('.movie-p', movie.description);
};

const updateMovieInfo = (movie) => {
    const info = getMovieInfo(movie);
    
    updateText('.info.one', info.rating);
    updateText('.info.two', info.price);
    updateText('.info.three', info.onSale);
    updateText('.info.four', info.discountPrice);
    
    const saleElement = getElement('.info.three');
    const discountElement = getElement('.info.four');
    
    if (saleElement) saleElement.style.color = movie.onSale ? '#d32f2f' : '#373736';
    if (discountElement) discountElement.style.color = movie.onSale ? '#d32f2f' : '#999';
};

const updateBuyButton = (movie) => {
    const buyButton = getElement('.cartbutton');
    if (buyButton) {
        const price = getDisplayPrice(movie);
        buyButton.textContent = `Add to Cart for ${formatPrice(price)}`;
        buyButton.href = `cart.html?add=${movie.id}`;
    }
};

const showLoading = () => {
    const pageTitle = getElement('.page-title');
    if (pageTitle && !getElement('.movie-loading')) {
        pageTitle.insertAdjacentHTML('afterend', createLoadingHTML('Loading movie details...'));
    }
    setOpacity('.movie-about', '0.3');
};

const hideLoading = () => {
    const loadingElement = getElement('.movie-loading');
    if (loadingElement) loadingElement.remove();
    setOpacity('.movie-about', '1');
};

const showError = (message) => {
    hideLoading();
    
    const pageTitle = getElement('.page-title');
    if (pageTitle && !getElement('.movie-error')) {
        pageTitle.insertAdjacentHTML('afterend', createErrorHTML(message));
    }
    
    const movieContent = getElement('.movie-about');
    if (movieContent) movieContent.style.display = 'none';
};