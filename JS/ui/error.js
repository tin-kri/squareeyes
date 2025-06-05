export const showError = (containerSelector, message, options = {}) => {
    const container = document.querySelector(containerSelector);
    if (container) {
        container.innerHTML = createErrorHTML(message, options);
    }
};

export const showErrorAfter = (afterElementSelector, message, options = {}) => {
    const element = document.querySelector(afterElementSelector);
    if (element && !document.querySelector('.error-container')) {
        element.insertAdjacentHTML('afterend', createErrorHTML(message, options));
    }
};

export const clearError = (containerSelector) => {
    const container = document.querySelector(containerSelector);
    if (container) {
        const errorElement = container.querySelector('.error-container');
        if (errorElement) {
            errorElement.remove();
        }
    }
};

export const isErrorVisible = (containerSelector) => {
    const container = document.querySelector(containerSelector);
    return container && container.querySelector('.error-container') !== null;
};

const createErrorHTML = (message, options = {}) => {
    const { title = 'Oops! Something went wrong' } = options;
    
    return `
        <div class="error-container">
            <div class="error-content">
                <h3>${title}</h3>
                <p>${message}</p>
            </div>
        </div>
    `;
};