import React, {Fragment} from "react";
import '../resort/style.css';
import {Link} from "react-router-dom";
import ForecastDetails from '../forecast/forecastDetails'
import ResortDetails from '../resort/ResortDetails'
import {Popup} from "react-leaflet";

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

export default class extends React.Component {
    constructor(props) {
        super(props);

        // set initial state
        this.state = {
            resort_id: props.resort_id,
            // resort_id: 1005,
            error: null,
            isLoaded: false,
            payload: {}
        };

        this.handleOnPopupOpen = this.handleOnPopupOpen.bind(this);
    }

    handleOnPopupOpen() {
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
            )
    }

    render() {
        const {error, isLoaded, payload} = this.state,
            resort = payload;
        return (
            <Popup minWidth={800} onOpen={this.handleOnPopupOpen}>
                {isLoaded && !error &&
                <Fragment>
                    <div className="row flex-column">
                        <h3> {resort.village} </h3>
                        <h5> {resort.continent} / {resort.country} </h5>
                    </div>
                    <div className="row">
                        <div className="col-md-6">
                            <ResortDetails resort={resort}/>
                        </div>
                        <ForecastDetails resort_id={this.state.resort_id}/>
                    </div>
                    <ResortPopupButtons resort_id={this.state.resort_id}/>
                </Fragment>
                }
                {isLoaded && error &&
                <div>Error: {error.message}</div>
                }
                {!isLoaded &&
                <div>Loading...</div>
                }
            </Popup>
        );
    }
}

