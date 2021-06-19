import { elements } from './base.js';

export const renderCity = (city) => {
    const markup = `
        <h2 id="city-name">${city}</h2>
    `;
    elements.cityTitleContainer.insertAdjacentHTML('afterbegin', markup);
};