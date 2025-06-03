// API URLs, configuration// API Configuration - All your API settings in one place

export const API_CONFIG = {
    BASE_URL: 'https://v2.api.noroff.dev',
    ENDPOINTS: {
        ALL_MOVIES: '/square-eyes',
        SINGLE_MOVIE: (id) => `/square-eyes/${id}`
    }
};

// DOM Selectors - HTML elements we'll work with
export const SELECTORS = {
    MOVIES_CONTAINER: '#movies-container',
    LOADING: '#loading', 
    ERROR: '#error'
};

// Export so other files can use these
window.API_CONFIG = API_CONFIG;
window.SELECTORS = SELECTORS;