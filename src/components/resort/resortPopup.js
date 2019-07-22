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
            resort_id: 1005
        };
    }

    render() {
        return (
            <div>
                <div className="row">
                    <ResortDetails resort_id={this.state.resort_id}/>
                    <ForecastDetails resort_id={this.state.resort_id}/>
                </div>
                <ResortPopupButtons resort_id={this.state.resort_id}/>
            </div>
        );
    }
}

