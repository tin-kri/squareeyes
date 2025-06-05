// movieDetails.js - Controls the single movie details page
import { fetchMovieById } from "../api/movies.js";
import {
  getMovieIdFromUrl,
  getDisplayPrice,
  formatPrice,
  getMovieInfo,
} from "../utils/movieHelpers.js";
import { updateText, updateImage, getElement } from "../utils/dom.js";
import { showLoader } from "../ui/loader.js";
import { showErrorAfter } from "../ui/error.js";
import { createMovieDetailsStructure } from "../utils/templates.js";

export const loadMovieDetails = async () => {
  try {
    const movieId = getMovieIdFromUrl();

    if (!movieId) {
      showErrorAfter(
        ".page-title",
        "No movie ID found in URL. Please select a movie from the explore page."
      );
      return;
    }

    showLoader(".main-movie-selected", "Loading movie details...");
    const movie = await fetchMovieById(movieId);
    displayMovie(movie);
  } catch (error) {
    showErrorAfter(
      ".page-title",
      "Sorry, we could not load this movie. Please try again later."
    );
  }
};

const displayMovie = (movie) => {
  restoreMovieStructure();

  document.title = `SquareEyes - ${movie.title}`;
  updateMovieBasics(movie);
  updateMovieInfo(movie);
  updateBuyButton(movie);
};

const restoreMovieStructure = () => {
  const mainContainer = getElement(".main-movie-selected");
  if (mainContainer) {
    mainContainer.innerHTML = createMovieDetailsStructure();
  }
};

const updateMovieBasics = (movie) => {
  updateText(".movie-title", movie.title);
  updateText(".movie-director", `Released: ${movie.released}`);
  updateImage(".movie-image", movie.image.url, movie.image.alt || movie.title);
  updateText(".movie-p", movie.description);
};

const updateMovieInfo = (movie) => {
  const info = getMovieInfo(movie);

  updateText(".info.one", info.rating);
  updateText(".info.two", info.price);
  updateText(".info.three", info.onSale);
  updateText(".info.four", info.discountPrice);

  const saleElement = getElement(".info.three");
  const discountElement = getElement(".info.four");

  if (saleElement)
    saleElement.style.color = movie.onSale ? "#d32f2f" : "#373736";
  if (discountElement)
    discountElement.style.color = movie.onSale ? "#d32f2f" : "#999";
};

const updateBuyButton = (movie) => {
  const buyButton = getElement(".cartbutton");
  if (buyButton) {
    const price = getDisplayPrice(movie);
    buyButton.textContent = `Add to Cart for ${formatPrice(price)}`;
    buyButton.href = `cart.html?add=${movie.id}`;
  }
};
