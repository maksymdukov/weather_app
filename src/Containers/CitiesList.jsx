import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faMapMarker} from "@fortawesome/free-solid-svg-icons";
import React from "react";
import CityItem from "./CityItem";
import SearchList from "./SearchList";

class CitiesList extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const {cities, location, selected, selectCity, closeDropDown, deleteCity, isActive, addCity} = this.props;

        return (
            <ul className={isActive ? "CitiesList animatedListOut" : "CitiesList animatedListIn"}>
                <li className="searchSection"><SearchList cities={cities} addCity={addCity}/></li>

                {cities.map((city) => {

                    return (city === selected) ? null : (
                        <li key={city}>
                            <button className="selectButton" onClick={(event) => {
                                if (event.target.className !== "selectButton") return;
                                selectCity(city);
                                closeDropDown();
                            }}>
                                <CityItem city={city} location={location}/>
                                {city !== location ? (<div className="selectDelete" onClick={() => deleteCity(city)}>
                                    x
                                </div>) : (
                                    <div className="selectDelete" style={{backgroundColor: "grey"}} onClick={() => {
                                    }}>
                                        x
                                    </div>)}
                            </button>
                        </li>
                    )
                })}
            </ul>
        );
    }
}

export default CitiesList;