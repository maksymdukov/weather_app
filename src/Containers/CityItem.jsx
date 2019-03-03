import React from 'react';
import {Fragment} from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faMapMarkerAlt} from "@fortawesome/free-solid-svg-icons";

const CityItem = ({city, location}) => {
    return (
        <Fragment>
            {city}
            {city === location ?
                <span className="select__location"><FontAwesomeIcon color="#e6005c" icon={faMapMarkerAlt}/></span>
                : null}
        </Fragment>
    );
};

export default CityItem;