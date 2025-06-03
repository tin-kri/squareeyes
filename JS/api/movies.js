//  All API-related functions
import { API_CONFIG } from './utils/constants.js';
import { SELECTORS } from './utils/constants.js';

async function fetchAllMovies() {
    try {
        // Build the full URL
        const url = API_CONFIG.BASE_URL + API_CONFIG.ENDPOINTS.ALL_MOVIES;
        console.log('Fetching movies from:', url);
        
        // Make the API call
        const response = await fetch(url);
        
        // Check if the request was successful
        if (!response.ok) {
            throw new Error(`Failed to fetch movies. Status: ${response.status}`);
        }
        
        // Convert response to JSON
        const data = await response.json();
        console.log('API Response:', data);
        
        // Return just the movies array (API returns movies in data.data)
        return data.data;
        
    } catch (error) {
        console.error('Error in fetchAllMovies:', error);
        throw error; // Re-throw so the calling function can handle it
    }
}

async function fetchMovieById(id) {
    try {
        const url = API_CONFIG.BASE_URL + API_CONFIG.ENDPOINTS.SINGLE_MOVIE(id);
        console.log('Fetching movie from:', url);
        
        const response = await fetch(url);
        
        if (!response.ok) {
            throw new Error(`Failed to fetch movie with ID ${id}. Status: ${response.status}`);
        }
        
        const data = await response.json();
        console.log('Single movie response:', data);
        
        return data.data;
        
    } catch (error) {
        console.error('Error in fetchMovieById:', error);
        throw error;
    }
}

// Make functions available to other files
window.MovieAPI = {
    fetchAllMovies,
    fetchMovieById
};

con