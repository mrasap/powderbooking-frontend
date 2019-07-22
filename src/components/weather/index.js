import React from "react";
import './style.css';
import _ from "lodash";
import TableBody from "./TableBody";

export default class extends React.Component {
    constructor(props) {
        super(props);

        // set initial state
        this.state = {
            resort_id: props.resort_id,
            error: null,
            weatherIsLoaded: false,
            weather: {},
            forecastPastIsLoaded: false,
            forecastPast: {},
        };
    }

    componentDidMount() {
        fetch("http://127.0.0.1:5000/forecast/past/" + this.state.resort_id)
            .then(res => res.json())
            .then(result => {
                    this.setState({
                        forecastPastIsLoaded: true,
                        forecastPast: result
                    });
                },
                (error) => {
                    this.setState({
                        forecastPastIsLoaded: true,
                        error: error
                    });
                }
            )

        fetch("http://127.0.0.1:5000/weather/" + this.state.resort_id)
            .then(res => res.json())
            .then(result => {
                    this.setState({
                        weatherIsLoaded: true,
                        weather: result
                    });
                },
                (error) => {
                    this.setState({
                        weatherIsLoaded: true,
                        error: error
                    });
                }
            )
    }

    render() {
        const {error, forecastPastIsLoaded, weatherIsLoaded, weather, forecastPast} = this.state;
        if (error) {
            return <div>Error: {error.message}</div>;
        } else if (!forecastPastIsLoaded && !weatherIsLoaded) {
            return <div>Loading...</div>;
        } else {
            return (
                <div id="current_temp" className="row flex-column">
                    <h1>Current weather report</h1>
                    <p><i>Last updated on {_.get(weather, 'date_request') }</i></p>
                    <table className="table table-borderless">
                        <thead>
                        <tr>
                            <th scope="col"> </th>
                            <th scope="col" className="curr"><h5><b>Current</b></h5></th>
                            <th scope="col"> </th>
                            <th scope="col" colSpan="3"><h5><b>Previous predictions</b></h5></th>
                        </tr>
                        <tr>
                            <th scope="col"> </th>
                            <th scope="col" className="curr"><h5><b>Weather Report</b></h5></th>
                            <th scope="col"> </th>
                            <th scope="col" className="prev-1"><h5><b>-1</b></h5></th>
                            <th scope="col" className="prev-3"><h5><b>-3</b></h5></th>
                            <th scope="col" className="prev-7"><h5><b>-7</b></h5></th>
                        </tr>
                        </thead>
                        <TableBody weather={weather} forecastPast={forecastPast}/>
                    </table>
                </div>
            );
        }
    }
}