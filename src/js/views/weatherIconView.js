import { elements } from './base.js';

export const renderWeatherIcon = (weatherState, weatherStateDescription) => {
    const markup = `
        <h2 class="weather-state">${weatherState}</h2>
        <p class="weather-state-description">${weatherStateDescription}</p>
    `;
    elements.weatherIconContainer.insertAdjacentHTML('afterbegin', markup);
};