import React from 'react';
import './Switcher.css';

const Switcher = ({period, selectPeriod}) => {
    return (
        <div className="Switcher">
            <div className="onoffswitch">
                <input
                    type="checkbox"
                    name="onoffswitch"
                    className="onoffswitch-checkbox"
                    id="myonoffswitch"
                    defaultChecked
                    onChange={selectPeriod}
                />
                <label className="onoffswitch-label" htmlFor="myonoffswitch">
                    <span className="onoffswitch-inner"></span>
                    <span className="onoffswitch-switch"></span>
                </label>
            </div>
        </div>
    );
};

export default Switcher;