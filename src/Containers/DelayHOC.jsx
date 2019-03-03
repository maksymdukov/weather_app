import {Component} from "react";
import React from "react";

const DelayUnmounting = (Component) => {
    return class DelayHOC extends React.Component {
        constructor(props) {
            super(props);
        }

        state = {
            shouldRender: this.props.isActive,
        };

        componentDidUpdate(prevProps) {
            if (!this.props.isActive && prevProps.isActive) {
                setTimeout(() => {
                    this.setState({shouldRender: false})
                }, this.props.delay);
            } else if (this.props.isActive && !prevProps.isActive) {
                this.setState({shouldRender: true});
            }
        }

        render() {
            if (this.state.shouldRender) {
                return (
                    <Component {...this.props} />
                );

            } else return null;

        }
    }
};

export default DelayUnmounting;