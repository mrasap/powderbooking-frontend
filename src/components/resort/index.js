import React from "react";
import './style.css';
import ResortDetails from "./ResortDetails";
import Forecast from "../forecast";
import Weather from "../weather";

export default class extends React.Component {
    constructor(props) {
        super(props);

        // set initial state
        this.state = {
            // resort_id: props.resort_id
            resort_id: 932,
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
                        error: error
                    });
                }
            )
    }


    render() {
        const {resort_id, error, isLoaded, payload} = this.state,
            resort = payload;
        if (error) {
            return <div>Error: {error.message}</div>;
        } else if (!isLoaded) {
            return <div>Loading...</div>;
        } else {
            return (
                <div>
                    <div id="current_resort" className="row flex-column">
                        <h1>{resort.village}</h1>
                        <h5>{resort.continent} / {resort.country}</h5>

                        <ResortDetails resort={resort}/>
                    </div>
                    <Weather resort_id={resort_id}/>
                    <Forecast resort_id={resort_id} />
                </div>
            );
        }
    }
}