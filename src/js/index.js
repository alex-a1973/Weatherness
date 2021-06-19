// Global App Controller
import Search from './models/Search.js';
import * as searchView from './views/searchView.js';
import * as cityView from './views/cityView.js';
import * as weatherIconView from './views/weatherIconView.js';
import * as weatherInfoView from './views/weatherInfoView.js';
import { elements } from './views/base.js';

/** Global state of the app 
 * 1. Search object
 */
const state = {};

/** Search Controller */
const controlSearch = async () => {
    /*
     * 1. Get input from search bar
     * 2. Create new Search object and add to state
     * 3. Prepare UI for results
     * 4. Render results
     * 5. Reset some UI
     */
    const inputCity = searchView.getInput();
    if (inputCity) {
        state.search = new Search(inputCity);
        searchView.clearInput();
        searchView.clearOutput();

        try {
            await state.search.getResults();
            // Render weather display
            console.log(state.search);
            cityView.renderCity(state.search.city);
            weatherIconView.renderWeatherIcon(state.search.weatherState, state.search.weatherStateDescription);
            weatherInfoView.renderWeatherInfo(state.search.maxTemp, state.search.minTemp, state.search.temp);
        } catch (error) {
            alert('Something went wrong with the search!');
            console.log(error);
        }
    }
}

elements.inputForm.addEventListener('submit', e => {
    e.preventDefault(); // Prevent page from reloading
    controlSearch();
});