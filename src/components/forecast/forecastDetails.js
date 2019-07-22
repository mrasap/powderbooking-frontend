import React from "react";
import './style.css';

export default class extends React.Component {
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
        fetch("http://127.0.0.1:5000/forecast/current/" + this.state.resort_id)
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
            forecast = payload[0];
        if (error) {
            return <div>Error: {error.message}</div>;
        } else if (!isLoaded) {
            return <div>Loading...</div>;
        } else {
            return (
                <div className="col-md-6">
                    <div className="row flex-column">
                        <h6><b>Weather forecast summary</b></h6>
                        <p><b>Snow:</b> {forecast.snow_total_mm} mm</p>
                        <p><b>Rain:</b> {forecast.rain_total_mm} mm</p>
                        <p><b>Temperature:</b> {forecast.temperature_min_c} - {forecast.temperature_max_c} &deg;C</p>
                        <p><b>wind (max):</b> {forecast.wind_speed_max_kmh} km/h</p>
                    </div>
                </div>
            )
        }
    }
}