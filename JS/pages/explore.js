import { fetchAllMovies } from "../api/movies.js";
import { SELECTORS } from "../utils/constants.js";
import { groupByGenre } from "../utils/movieHelpers.js";
import { createGenreSection } from "../utils/templates.js";
import { updateHTML } from "../utils/dom.js";
import { showLoader } from "../ui/loader.js";
import { showError } from "../ui/error.js";
import { MESSAGES } from "../utils/messages.js";

export const loadMovies = async () => {
  try {
    showLoader(SELECTORS.MOVIES_CONTAINER, MESSAGES.LOADING.MOVIES);
    const movies = await fetchAllMovies();
    displayMovies(movies);
  } catch (error) {
    showError(SELECTORS.MOVIES_CONTAINER, MESSAGES.ERRORS.MOVIES_LOAD_FAILED);
  }
};

const displayMovies = (movies) => {
  const groupedMovies = groupByGenre(movies);

  let html = "";
  for (const [genre, genreMovies] of Object.entries(groupedMovies)) {
    html += createGenreSection(genre, genreMovies);
  }

  updateHTML(SELECTORS.MOVIES_CONTAINER, html);
};
