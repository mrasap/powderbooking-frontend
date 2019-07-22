import React from "react";
import './style.css';

export default class ResortDetails extends React.Component {
    constructor(props) {
        super(props);

        // set initial state
        this.state = {
            // id: props.match.params.id,
            resort_id: props.resort_id,
            error: null,
            isLoaded: false,
            payload: {}
        };
    }

    componentDidMount() {
        fetch("http://127.0.0.1:5000/resort/" + this.state.resort_id)
            .then(res => res.json())
            .then(result => {
                    this.setState({
                        isLoaded: true,
                        payload: result
                    });
                },
                (error) => {
                    this.setState({
                        isLoaded: true,
                        payload: error
                    });
                }
            )
    }

    render() {
        const {error, isLoaded, payload} = this.state,
            resort = payload;
        if (error) {
            return <div>Error: {error.message}</div>;
        } else if (!isLoaded) {
            return <div>Loading...</div>;
        } else {
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
}