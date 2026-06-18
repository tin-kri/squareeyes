export const showLoader = (containerSelector, message = 'Loading...') => {
    const container = document.querySelector(containerSelector);
    if (container) {
        container.innerHTML = createLoaderHTML(message);
    }
};

const createLoaderHTML = (message) => `
    <div class="loader-container">
        <div class="loader"></div>
        <p class="loader-text">${message}</p>
    </div>
`;