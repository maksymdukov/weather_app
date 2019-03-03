import React, {Component} from 'react';
import moment from 'moment';
import './WeekWeather.css';

const WeekWeather = ({forecast}) => {
    return (
        <div className="animatedShowOut">
            <div className="WeekBlock">
                {forecast.daily.data.map((item, i) => {
                    let day = !i ? "Today" : moment.unix(item.time).format("dddd");

                    return (

                        <div key={item.time} className="WeekWeather">
                            <div className="WeekWeather__title">{day}</div>
                            <div className="WeekWeather__item">
                                <div>
                                    <span className="WeekWeather__temp">
                                        {Math.round(item.temperatureMax)} / {Math.round(item.temperatureMin)}
                                        </span>
                                </div>
                                <div>
                                    <span className="WeekWeather__C">
                                        &#8451;
                                    </span>
                                </div>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    );
};

export default WeekWeather;