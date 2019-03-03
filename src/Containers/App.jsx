import React, {Component} from 'react';
import Select from './Select';
import './App.css';
import ShowWeather from './ShowWeather';
import Switcher from './Switcher';

// const CITIES = ["London", "Berlin", "Wuerzburg", "Paris", "Donetsk", "Prague", "Vienna", "Rome", "Krakow", "Minsk"];
// const CITIES = ["London", "Berlin", "Wuerzburg"];
const CITIES = [];

class App extends Component {
    constructor(props) {
        super(props);
    }

    state = {
        fetchingLocation: true,
        fetchingWeather: true,
        cities: [],
        location: null,
        selected: null,
        period: false
    };

    componentDidMount() {
        (async () => {
            let initCity = await this.fetchCurrentCity();
            this.fetchWeather(initCity, this.state.period);
        })();
    }

    fetchCurrentCity = async () => {
        let response = await fetch(`http://ip-api.com/json/`);
        let cityObj = await response.json();
        if (CITIES.includes(cityObj.city)) {
            this.setState({
                cities: CITIES,
                location: cityObj.city,
                selected: cityObj.city,
                fetchingLocation: false
            });
        } else {
            let cities = [cityObj.city, ...CITIES];
            this.setState({
                cities: cities,
                location: cityObj.city,
                selected: cityObj.city,
                fetchingLocation: false
            });
        }
        return cityObj.city;
    };

    fetchWeather = async (city) => {
        let urlCurrent = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&APPID=8afbf2b43774114901cdea52c9b4efa7`;
        this.setState({
            fetchingWeather: true
        });
        let responseCurrent = await fetch(urlCurrent);
        let dataCurrent = await responseCurrent.json();
        let coord = dataCurrent.coord;
        let urlForecast = `https://cors-anywhere.herokuapp.com/https://api.darksky.net/forecast/fbd2108ed6d3ac960db8fdadae007193/${coord.lat},${coord.lon}?units=si`;
        let responseForecast = await fetch(urlForecast);
        let dataForecast = await responseForecast.json();
        this.setState({
            fetchingWeather: false,
            weather: dataCurrent,
            forecast: dataForecast
        });
    };

    selectCity = (city) => {
        this.setState({selected: city});
        this.fetchWeather(city);
    };

    selectPeriod = () => {
        this.setState({period: !this.state.period});
    };

    deleteCity = (city) => {
        if (city !== this.state.location) {
            let ind = this.state.cities.indexOf(city);
            let cities = [...this.state.cities];
            cities.splice(ind, 1);
            this.setState({cities: cities});
        }
    };
    addCity = (city) => {
        if (this.state.cities.indexOf(city) === -1) {
            this.setState({cities: [...this.state.cities, city]});
        }
    };

    render() {
        const {fetchingLocation, fetchingWeather, cities, location, selected} = this.state;
        return (
            <div className="WeatherApp">
                <Select
                    cities={cities}
                    location={location}
                    selected={selected}
                    selectCity={this.selectCity}
                    deleteCity={this.deleteCity}
                    addCity={this.addCity}
                />
                <ShowWeather
                    isActive={!this.state.fetchingWeather}
                    weather={this.state.weather}
                    period={this.state.period}
                    forecast={this.state.forecast}
                />
                <Switcher period={this.state.period} selectPeriod={this.selectPeriod}/>
            </div>
        );
    }
}

export default App;