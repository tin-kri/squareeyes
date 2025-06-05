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

