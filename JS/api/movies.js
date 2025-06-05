import { API_CONFIG } from "../utils/constants.js";

export const fetchAllMovies = async () => {
  try {
    const url = API_CONFIG.BASE_URL + API_CONFIG.ENDPOINTS.ALL_MOVIES;
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error(`Failed to fetch movies. Status: ${response.status}`);
    }

    const data = await response.json();
    return data.data;
  } catch (error) {
    console.error("Error in fetchAllMovies:", error);
    throw error;
  }
};

export const fetchMovieById = async (id) => {
  try {
    const url = API_CONFIG.BASE_URL + API_CONFIG.ENDPOINTS.SINGLE_MOVIE(id);
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error(
        `Failed to fetch movie with ID ${id}. Status: ${response.status}`
      );
    }

    const data = await response.json();
    return data.data;
  } catch (error) {
    console.error("Error in fetchMovieById:", error);
    throw error;
  }
};
