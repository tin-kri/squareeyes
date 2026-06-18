export const showError = (containerSelector, message) => {
    const container = document.querySelector(containerSelector);
    if (container) {
        container.innerHTML = createErrorHTML(message);
    }
};

const createErrorHTML = (message) => {
    return `
      <div class="error-container">
        <div class="error-content">
          <h3>Oops! Something went wrong</h3>
          <p>${message}</p>
        </div>
      </div>
    `;
  };
  