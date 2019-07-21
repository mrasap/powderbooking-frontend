import React from "react";
import './style.css';

export default class Map extends React.Component {
    constructor(props) {
        super(props);

        // set initial state
        this.state = {isToggleOn: true};

        // This binding is necessary to make `this` work in the callback
        this.handleClick = this.handleClick.bind(this);
    }

    //
    handleClick() {
        this.setState(state => ({
            isToggleOn: !state.isToggleOn
        }));
    }

    render() {
        return (
            <h3>Map</h3>
        );
    }
}