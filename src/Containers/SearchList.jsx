import React, {Component} from 'react';
import {faSearch} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import './SearchList.css';

const citiesDB = [
    "London",
    "Berlin",
    "Birmingham",
    "Brussels",
    "Wuerzburg",
    "Paris",
    "Donetsk",
    "Prague",
    "Vienna",
    "Rome",
    "Krakow",
    "Minsk",
    "Boryspil",
    "Berdychiv",
    "Chongqing",
    "Shanghai",
    "Beijing",
    "Istanbul",
    "Dhaka",
    "Shenzhen",
    "Mumbai",
    "Delhi",
    "Baghdad",
    "Baku",
    "Bangalore",
    "Bangkok",
    "Kyiv"
];

class SearchList extends Component {
    constructor(props) {
        super(props);
        this.SearchInput = React.createRef();
    }

    state = {
        value: ""
    };

    handleOnChange = (event) => {
        this.setState({value: event.target.value});
    };

    render() {
        return (
            <ul>
                <li key={"textinput"} className="cityInput">
                    <input type="text"
                           onChange={this.handleOnChange}
                           value={this.state.value}
                    />
                    <FontAwesomeIcon
                        className="searchIcon"
                        icon={faSearch}
                    /></li>
                <li>
                    <ul ref={this.SearchInput} className="SearchList">
                        {citiesDB.filter((cityItem) => {
                            if (this.state.value && !this.props.cities.includes(cityItem)) {
                                return cityItem.toLowerCase().startsWith(this.state.value.toLowerCase());
                            } else return false;
                        }).map(item => (<li key={item}>
                            <button className="SearchList__item" onClick={() => {
                                this.props.addCity(item);
                                this.SearchInput.current.focus();
                            }}>
                                {item}
                                {/*<div className="SearchList__plus" >+</div>*/}
                            </button>
                        </li>))}
                    </ul>
                </li>
            </ul>
        );
    }
}

export default SearchList;