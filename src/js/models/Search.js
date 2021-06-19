export default class Search {
    #APIKey = '1b238ee9d0bb0d3c895ef0cf7401a8ae';

    constructor(inputCity) {
        this.inputCity = inputCity;
    }

    async getResults() {
        try {
            const res = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${this.inputCity}&APPID=${this.#APIKey}&units=metric`);
            const data = await res.json();
            // console.log(data);
            this.weatherState = data.weather[0].main;
            this.weatherStateDescription = data.weather[0].description;
            this.weatherStateIcon = data.weather[0].icon;
            this.temp = data.main.temp;
            this.minTemp = data.main.temp_min;
            this.maxTemp = data.main.temp_max;
            this.city = data.name;
        } catch (error) {
            alert(`Oooopsies, ${error}`);
        }
    }
}