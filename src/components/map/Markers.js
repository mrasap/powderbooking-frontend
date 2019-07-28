import React from "react";
import './style.css';
import {CircleMarker, FeatureGroup, Tooltip} from 'react-leaflet';
import ResortPopup from './ResortPopup';

export default class extends React.Component {
    constructor(props) {
        super(props);

        // set initial state
        this.state = {
            data: [  {
                "id": 1,
                "village": "string",
                "lat": 0,
                "lng": 0,
                "rain_total_mm": 0,
                "snow_total_mm": 0
            }],
            olddata: [
                {id: 1, center: {lat: 31.00, lng: 8.00}},
                {id: 2, center: {lat: 31.00, lng: 40.00}},
            ],
            circleStaticConfig: {
                weight: 1,
                color: 'wheat'
            }
        };
    }

    render() {
        // TODO: Change backend API to add max value
        // TODO: Docker hub
        // TODO: Find out how to deploy a react app
        // TODO: Helm charts
        // TODO: Terraform google
        return (
            <FeatureGroup>
                {this.props.data.map(point =>
                    <CircleMarker key={point.id}
                                  center={[point.lat, point.lng]}
                                  {...this.props.circleDynamicConfig}
                                  {...this.state.circleStaticConfig}>
                        <ResortPopup resort_id={point.id}/>
                        <Tooltip> <h6><b>{point.snow_total_mm} mm</b> snow in {point.village}</h6></Tooltip>
                    </CircleMarker>
                )}
            </FeatureGroup>
        );

    }
}