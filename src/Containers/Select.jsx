import React, {Component} from 'react';
import CitiesList from './CitiesList';
import './Select.css';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faChevronCircleDown} from "@fortawesome/free-solid-svg-icons";
import CityItem from "./CityItem";
import DelayUnmounting from './DelayHOC';

const DelayedCitiesList = DelayUnmounting(CitiesList);

class Select extends Component {
    constructor(props) {
        super(props);
    }

    timeOutId = null;
    blockRef = React.createRef();

    state = {
        isActive: false
    };

    componentDidMount() {
        window.addEventListener('mousedown', this.outsideHandler);
    }

    componentWillUnmount() {
        window.removeEventListener('mousedown', this.outsideHandler);
    }

    outsideHandler = (event) => {
        if (this.state.isActive && !this.blockRef.current.contains(event.target)) {
            this.setState({isActive: false});
        }
    };

    onClickHandler = () => {
        this.setState({isActive: !this.state.isActive});
    };

    onBlurHandle = () => {
        this.timeOutId = setTimeout(() => this.setState({isActive: false}));
    };
    closeDropDown = () => {
        this.setState({isActive: false});
    };

    onFocusHandle = () => {
        clearTimeout(this.timeOutId);
    };

    render() {
        const {cities, location, selected} = this.props;
        return (
            <div
                className="select"
                onBlur={this.onBlurHandle}
                onFocus={this.onFocusHandle}
                ref={this.blockRef}
            >
                <button onClick={this.onClickHandler}>
                    {cities.length
                        ? <CityItem city={selected} location={location}/>
                        : 'Loading...'
                    }
                    <span className="select__arrow">
                        <FontAwesomeIcon
                            className={this.state.isActive ? "select__arrow-rotate arrow-active" : 'select__arrow-rotate'}
                            icon={faChevronCircleDown}
                            color="white"
                        />
                    </span>
                </button>
                <DelayedCitiesList
                    {...this.props}
                    isActive={this.state.isActive}
                    closeDropDown={this.closeDropDown}
                    delay={200}
                />

            </div>
        );
    }
}

export default Select;