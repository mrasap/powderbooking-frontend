import React from "react";
import './style.css';
import {CircleMarker, FeatureGroup, Tooltip} from 'react-leaflet';
import ResortPopup from './ResortPopup';

export default class extends React.Component {
    staticConfig = {
        weight: 1,
        color: 'wheat'
    };

    constructor(props) {
        super(props);

        // set initial state
        this.state = {};
    }

    render() {
        // TODO: Terraform google
        return (
            <FeatureGroup>
                {this.props.data.map(point =>
                    <CircleMarker key={point.id}
                                  center={[point.lat, point.lng]}
                                  {...this.props.circleDynamicConfig}
                                  {...this.staticConfig}>
                        <ResortPopup resort_id={point.id}/>
                        <Tooltip> <h6><b>{point.snow_week_mm} mm</b> snow in {point.village}</h6></Tooltip>
                    </CircleMarker>
                )}
            </FeatureGroup>
        );

    }
}