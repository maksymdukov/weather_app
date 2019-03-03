import React from 'react';
import './ShowWeather.css';
import TodayWeather from "./TodayWeather";
import WeekWeather from "./WeekWeather";
import Loading from './Loading';

const ShowWeather = ({isActive, weather, period, forecast}) => {
    return (
        <div className="ShowWeather">
            {isActive ?
                period ?
                    <WeekWeather forecast={forecast}/>
                    : <TodayWeather weather={weather}/>
                : <Loading/>}
        </div>
    );
};

export default ShowWeather;