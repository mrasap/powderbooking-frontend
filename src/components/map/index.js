import React from "react";
import './style.css';
import {Map as LeafletMap, Marker, Popup, TileLayer} from 'react-leaflet'

export default class extends React.Component {
    constructor(props) {
        super(props);

        // set initial state
        this.state = {
            mapConfig: {
                center: [31.00, 8.00],
                zoom: 3,
                minZoom: 2,
                maxZoom: 12,
                maxBounds: [
                    [85.00, -230.00], // bounds north east
                    [-85.00, 230.00]  // bounds south west
                ]
            },
            layerConfig: {
                url: 'https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}',
                id: 'mapbox.dark',
                accessToken: 'pk.eyJ1IjoibXJhc2FwIiwiYSI6ImNqazd6dHpxajI4YWozcG8yeWNpZXUybnEifQ.bp0IflatrzCyKPJDJwT74A',
                attribution: 'Map &copy; <a href="https://www.mapbox.com/">Mapbox</a> | ' +
                    'Weather &copy; <a href="http://www.weatherunlocked.com/">Weather Unlocked</a>'
            },
        };
    }

    render() {
        return (
            <LeafletMap {...this.state.mapConfig}>
                <TileLayer {...this.state.layerConfig}/>
            </LeafletMap>
        );
    }
}