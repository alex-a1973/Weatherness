import { elements } from './base.js';

export const getInput = () => elements.cityInput.value;

export const clearInput = () => elements.cityInput.value = '';

export const clearOutput = () => {
    elements.cityTitleContainer.innerHTML = '';
    elements.weatherIconContainer.innerHTML = '';
    elements.weatherInfoContainer.innerHTML = '';
};