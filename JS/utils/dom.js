export const getElement = (selector) => document.querySelector(selector);

export const updateText = (selector, content) => {
    const element = getElement(selector);
    if (element) element.textContent = content;
};

export const updateHTML = (selector, html) => {
    const element = getElement(selector);
    if (element) element.innerHTML = html;
};

export const updateImage = (selector, src, alt) => {
    const element = getElement(selector);
    if (element) {
        element.src = src;
        element.alt = alt;
    }
};

export const showElement = (selector) => {
    const element = getElement(selector);
    if (element) element.style.display = 'block';
};

export const hideElement = (selector) => {
    const element = getElement(selector);
    if (element) element.style.display = 'none';
};

export const setOpacity = (selector, opacity) => {
    const element = getElement(selector);
    if (element) element.style.opacity = opacity;
};