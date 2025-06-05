export const getElement = (selector) => document.querySelector(selector);

export const updateHTML = (selector, html) => {
    const element = getElement(selector);
    
    if (element) element.innerHTML = html;
};


