import React, {Component} from 'react';

const DayItem = ({item}) => {
    return (
        <div className="ShowWeather__item">
            <div>
                <img src={`https://openweathermap.org/img/w/${weather.weather[0].icon}.png`}
                     alt={weather.weather[0].main}
                     title={weather.weather[0].main}
                />
            </div>
            <div><span className="ShowWeather__temp">{Math.round(weather.main.temp)}</span></div>
            <div><span className="ShowWeather__C">&#8451;</span></div>
        </div>
    );
};

export default DayItem;