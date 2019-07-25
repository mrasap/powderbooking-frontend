import React from "react";
import './style.css';
import {CircleMarker, Marker, Popup, FeatureGroup} from 'react-leaflet';
import ResortPopup from '../resort/resortPopup';

export default class extends React.Component {
    constructor(props) {
        super(props);

        // set initial state
        this.state = {
            data: [
                {id: 1, center: {lat: 31.00, lng: 8.00}},
                {id: 2, center: {lat: 31.00, lng: 40.00}},
            ],
            circleConfig: {
                radius: 20,
                weight: 1,
                opacity: 1.0,
                fillOpacity: 0.0,
                color: 'wheat'
            }
        };
    }

    render() {
        // TODO: Move ResortPopup to map
        // TODO: Incorporate leaflet Popup into ResortPopup
        // TODO: Find out how to set the global marker config in the featureGroup
        // TODO: Create function to update marker config based on zoom level
        // TODO: Do I want a tooltip?
        // TODO: Change backend API to add max value
        // TODO: Docker hub
        // TODO: Find out how to deploy a react app
        // TODO: Helm charts
        // TODO: Terraform google
        return (
            <FeatureGroup>
                {this.state.data.map(point =>
                    <CircleMarker {...point} {...this.state.circleConfig}>
                        <Popup minWidth={800} ><ResortPopup resort_id={point.id}/></Popup>
                    </CircleMarker>
                )}
            </FeatureGroup>
        );

    }
}