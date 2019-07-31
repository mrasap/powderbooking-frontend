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
            resort_id: props.match.params.resort_id,
            error: null,
            isLoaded: false,
            payload: {}
        };
    }

    componentDidMount() {
        fetch(process.env.REACT_APP_BACKEND_API + "/resort/" + this.state.resort_id)
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
            );

        window.scrollTo(0, 0);
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
                <div className="container">
                    <div id="current_resort" className="row flex-column">
                        <h1>{resort.village}</h1>
                        <h5>{resort.continent} / {resort.country}</h5>
                        &nbsp;
                        <ResortDetails resort={resort}/>
                    </div>
                    <Weather resort_id={resort_id}/>
                    <Forecast resort_id={resort_id} />
                </div>
            );
        }
    }
}