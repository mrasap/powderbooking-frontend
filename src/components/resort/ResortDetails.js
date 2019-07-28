import React from "react";
import './style.css';

export default class extends React.Component {
    constructor(props) {
        super(props);

        // set initial state
        this.state = {
            resort: props.resort
        };
    }

    render() {
        const resort = this.state.resort;

        return (
            <div className="row flex-column">
                <h6><b>Resort overview</b></h6>
                <p><b>Altitude:</b> {resort.altitude_min_m} - {resort.altitude_max_m} m</p>
                <p><b>Total size:</b>
                    <span className="p-1"> {resort.slopes_total_km} km </span>
                </p>
                <p><b>Slopes:</b>
                    <span className="p-1 bg-primary text-white"> {resort.slopes_blue_km} km </span>
                    <span className="p-1 bg-danger text-white"> {resort.slopes_red_km} km </span>
                    <span className="p-1 bg-dark text-white"> {resort.slopes_black_km} km </span>
                </p>
                <p><b>Amount of lifts:</b> {resort.lifts}</p>
            </div>
        )
    }
}