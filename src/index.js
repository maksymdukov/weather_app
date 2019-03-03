import React from 'react';
import ReactDOM from 'react-dom';
import WeatherApp from './Containers/App';


const Main = () => {
    return (
        <React.Fragment>
            <WeatherApp/>
        </React.Fragment>
    )
};

ReactDOM.render(<WeatherApp/>, document.getElementById('root'));