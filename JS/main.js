import { loadMovies } from "./pages/explore.js";
import { loadMovieDetails } from "./pages/movieDetails.js";
import { loadLandingPage } from "./pages/landingPage.js";
import  formSubmit  from "./components/form.js"
import { loadCartPage } from "./pages/cartPage.js";
import { orderSummary, confirmPayment } from "./pages/paymentPage.js";

const initApp = () => {
  const currentPage = getCurrentPageName();
  switch (currentPage) {
    case "index.html":
    case "index":
      loadLandingPage();
      break;
    case "explore.html":
    case "explore":
      loadMovies();
      break;
    case "selected-movie.html":
    case "selected-movie":
      loadMovieDetails();
      break;
      case "contact.html":
      case "contact":
      formSubmit();
      break
    case "cart.html":
    case "cart":
    loadCartPage();
    break
    case "paynow.html":
      case "paynow":
        orderSummary();
        confirmPayment();
        break
  }
};

const getCurrentPageName = () => {
  const path = window.location.pathname;
  const filename = path.split("/").pop();
  return filename.replace(".html", "") || "index";
};

document.addEventListener("DOMContentLoaded", initApp);
