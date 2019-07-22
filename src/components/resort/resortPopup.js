import React from "react";
import './style.css';
import {Link} from "react-router-dom";
import ForecastDetails from '../forecast/forecastDetails'
import ResortDetails from './resortDetails'

function ResortPopupButton({url, title}) {
    return (
        <div id="div-btn" className="col-md-6">
            <Link to={url}>
                <div className="p-1 border border-primary rounded">
                    <h5 className="m-auto text-center">{title}</h5>
                </div>
            </Link>
        </div>
    );
}

function ResortPopupButtons({resort_id}) {
    return (
        <div className="row mt-2">
            <ResortPopupButton title={'Find the best offer'} url={'#'}/>
            <ResortPopupButton title={'Complete forecast'} url={'/resort/' + resort_id}/>
        </div>
    );
}

export default class ResortPopup extends React.Component {
    constructor(props) {
        super(props);

        // set initial state
        this.state = {
            // resort_id: props.resort_id
            resort_id: 1005,
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
                <div className="container-fluid">
                    <div className="row flex-column">
                        <h3> {resort.village} </h3>
                        <h5> {resort.continent} / {resort.country} </h5>
                    </div>
                    <div className="row">
                        <ResortDetails resort={resort}/>
                        <ForecastDetails resort_id={this.state.resort_id}/>
                    </div>
                    <div className="row">
                        <ResortPopupButtons resort_id={this.state.resort_id}/>
                    </div>
                </div>
            );
        }
    }
}

