import React from "react";
import _ from "lodash";
import './style.css';

const celsius = String.fromCharCode(0x2103),
    lte = "    " + String.fromCharCode(0x2264),
    gte = "    " + String.fromCharCode(0x2265);

function annotateAfter(value, symbol) {
    return (value || value === 0) ? value + " " + symbol : null;
}

function annotateBefore(value, symbol) {
    return (value || value === 0) ? symbol + " " + value : null;
}

export default class extends React.Component {
    constructor(props) {
        super(props);

        // set initial state
        this.state = {};
    }

    render() {
        const {weather, forecastPast} = this.props;

        return (
            <tbody>
            <tr className="table-row">
                <td rowSpan="2" className="title-row"><h5>max</h5><h4><b>Temperature</b></h4><h5>min</h5></td>
                <td rowSpan="2" className="curr"><h4><b>{annotateAfter(_.get(weather, 'temperature_c'), celsius)}</b></h4></td>
                <td rowSpan="2"> </td>
                <td className="prev-1">{annotateBefore(_.get(forecastPast, '[0].temperature_max_c'), lte)}</td>
                <td className="prev-3">{annotateBefore(_.get(forecastPast, '[2].temperature_max_c'), lte)}</td>
                <td className="prev-7">{annotateBefore(_.get(forecastPast, '[6].temperature_max_c'), lte)}</td>
            </tr>
            <tr className="table-row">
                <td className="prev-1">{annotateBefore(_.get(forecastPast, '[0].temperature_min_c'), gte)}</td>
                <td className="prev-3">{annotateBefore(_.get(forecastPast, '[2].temperature_min_c'), gte)}</td>
                <td className="prev-7">{annotateBefore(_.get(forecastPast, '[6].temperature_min_c'), gte)}</td>
            </tr>
            <tr className="table-row"><td colSpan="6"> </td></tr>
            <tr className="table-row">
                <td className="title-row" title="Amount of snow fallen in the last 24 hours"><h4><b>Snowfall</b></h4></td>
                <td className="curr"><h4><b>{annotateAfter(_.get(forecastPast, '[0].snow_total_mm', 0), "mm")}</b></h4></td>
                <td> </td>
                <td className="prev-1">{_.get(forecastPast, '[0].snow_week_mm', 0)}</td>
                <td className="prev-3">{_.get(forecastPast, '[2].snow_week_mm', 0)}</td>
                <td className="prev-7">{_.get(forecastPast, '[6].snow_week_mm', 0)}</td>
            </tr>
            <tr className="table-row">
                <td className="title-row"><h5>last 3h</h5></td>
                <td className="curr">{annotateAfter(_.get(forecastPast, 'snow_3h_mm', 0), "mm")}</td>
                <td colSpan="4"> </td>
            </tr>
            <tr className="table-row"><td colSpan="6"> </td></tr>
            <tr className="table-row">
                <td className="title-row" title="Amount of rain fallen in the last 24 hours"><h4><b>Rainfall</b></h4></td>
                <td className="curr"><h4><b>{annotateAfter(_.get(forecastPast, '[0].rain_total_mm', 0), "mm")}</b></h4></td>
                <td> </td>
                <td className="prev-1">{_.get(forecastPast, '[0].rain_total_mm', 0)}</td>
                <td className="prev-3">{_.get(forecastPast, '[2].rain_total_mm', 0)}</td>
                <td className="prev-7">{_.get(forecastPast, '[6].rain_total_mm', 0)}</td>
            </tr>
            <tr className="table-row">
                <td className="title-row"><h5>last 3h</h5></td>
                <td className="curr">{annotateAfter(_.get(forecastPast, 'rain_3h_mm', 0), "mm")}</td>
                <td colSpan="4"> </td>
            </tr>
            <tr className="table-row"><td colSpan="6"> </td></tr>
            <tr className="table-row">
                <td className="title-row"><h4><b>Windspeed</b></h4></td>
                <td className="curr"><h4><b>{annotateAfter(_.get(forecastPast, '[0].wind_speed_kmh', 0), "km/h")}</b></h4></td>
                <td> </td>
                <td className="prev-1">{annotateBefore(_.get(forecastPast, '[0].wind_speed_max_kmh', 0), lte)}</td>
                <td className="prev-3">{annotateBefore(_.get(forecastPast, '[2].wind_speed_max_kmh', 0), lte)}</td>
                <td className="prev-7">{annotateBefore(_.get(forecastPast, '[6].wind_speed_max_kmh', 0), lte)}</td>
            </tr>
            {/*TODO: add compass*/}
            </tbody>
        )
    }
}

