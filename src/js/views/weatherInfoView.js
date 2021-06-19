import { elements } from './base.js';

export const renderWeatherInfo = (maxTemp, minTemp, curTemp) => {
    const markup = `
        <div class="max-temp-container">
            <div>
                <h2>Max Temperature</h2>
                <p>${maxTemp.toFixed(2)}&deg;C</p>
            </div>
        </div>
        <div class="min-temp-container">
            <div>
                <h2>Min Temperature</h2>
                <p>${minTemp.toFixed(2)}&deg;C</p>
            </div>
        </div>
        <div class="temp-container">
            <div>
                <h2>Current Temperature</h2>
                <p>${curTemp.toFixed(2)}&deg;C</p>
            </div>
        </div>
    `;
    elements.weatherInfoContainer.insertAdjacentHTML('afterbegin', markup);
}