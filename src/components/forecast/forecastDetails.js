import React from "react";
import './style.css';
import _ from 'lodash';

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
        fetch(process.env.REACT_APP_BACKEND_API + "/forecast/current/" + this.state.resort_id)
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
                        <p><b>Snow:</b> {_.get(forecast, 'snow_total_mm')} mm</p>
                        <p><b>Rain:</b> {_.get(forecast, 'rain_total_mm')} mm</p>
                        <p><b>Temperature:</b> {_.get(forecast, 'temperature_min_c')} - {_.get(forecast, 'temperature_max_c')} &deg;C</p>
                        <p><b>wind (max):</b> {_.get(forecast, 'wind_speed_max_kmh')} km/h</p>
                    </div>
                </div>
            )
        }
    }
}