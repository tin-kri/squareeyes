export const showLoader = (containerSelector, message = 'Loading...') => {
    const container = document.querySelector(containerSelector);
    if (container) {
        container.innerHTML = createLoaderHTML(message);
    }
};

export const hideLoader = (containerSelector) => {
    const container = document.querySelector(containerSelector);
    if (container) {
        const loader = container.querySelector('.loader-container');
        if (loader) {
            loader.remove();
        }
    }
};

export const updateLoaderMessage = (containerSelector, newMessage) => {
    const container = document.querySelector(containerSelector);
    if (container) {
        const loaderText = container.querySelector('.loader-text');
        if (loaderText) {
            loaderText.textContent = newMessage;
        }
    }
};

export const isLoaderVisible = (containerSelector) => {
    const container = document.querySelector(containerSelector);
    return container && container.querySelector('.loader-container') !== null;
};

const createLoaderHTML = (message) => `
    <div class="loader-container">
        <div class="loader"></div>
        <p class="loader-text">${message}</p>
    </div>
`;