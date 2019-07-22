import React from "react";
import './style.css';
import ChartTemp from './ChartTemp';
import ChartSnow from "./ChartSnow";
import _ from "lodash";

export default class extends React.Component {
    constructor(props) {
        super(props);

        // set initial state
        this.state = {
            resort_id: props.resort_id,
            error: null,
            isLoaded: false,
            payload: {},
            tempMin: [],
            tempMax: [],
            dates: [],
            snow: [],
            rain: [],
        };
    }

    componentDidMount() {
        fetch("http://127.0.0.1:5000/forecast/current/" + this.state.resort_id)
            .then(res => res.json())
            .then(result => {
                    this.setState({
                        isLoaded: true,
                        payload: result,
                        tempMin: result.map(row => parseFloat(_.get(row, 'temperature_min_c'))),
                        tempMax: result.map(row => parseFloat(_.get(row, 'temperature_max_c'))),
                        snow: result.map(row => parseFloat(_.get(row, 'snow_week_mm'))),
                        rain: result.map(row => parseFloat(_.get(row, 'rain_week_mm'))),
                        dates: result.map(row => _.get(row, 'date'))
                    });
                },
                (error) => {
                    this.setState({
                        isLoaded: true,
                        error: error
                    });
                }
            )
    }

    render() {
        const {error, isLoaded, dates, tempMin, tempMax, snow, rain} = this.state;
        if (error) {
            return <div>Error: {error.message}</div>;
        } else if (!isLoaded) {
            return <div>Loading...</div>;
        } else {
            return (
                <div id="forecast" className="row flex-column">
                    <h1>Weather forecast </h1>
                    <p><i>Last updated on {_.get(dates, '[0]') }</i></p>

                    <h4>Temperature (&deg;C)</h4>
                    <ChartTemp labels={dates} tempMin={tempMin} tempMax={tempMax}/>

                    <h4>Snow and rain fall (in mm)</h4>
                    <ChartSnow labels={dates} snow={snow} rain={rain}/>
                </div>
            );
        }
    }
}