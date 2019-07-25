import React from "react";
import './style.css';
import {Map as LeafletMap, TileLayer} from 'react-leaflet';
import _ from "lodash";
import {HeatmapLayer} from "./HeatmapLayer";
import Markers from './Markers';

export default class extends React.Component {
    constructor(props) {
        super(props);

        // set initial state
        this.state = {
            mapConfig: {
                viewport: {
                    center: [31.00, 8.00],
                    zoom: 3
                },
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
            heatmapConfig: {
                "radius": 2,
                "minOpacity": 0,
                "maxOpacity": .5,
                "scaleRadius": true,
                "useLocalExtrema": false,
                gradient: {
                    '.3': 'darkblue',
                    '.7': 'slateblue',
                    '.99': 'ivory'
                },
                latField: 'lat',
                lngField: 'lng',
                valueField: 'rain_total_mm'
            },
            payload: {
                max: 30,
                data: []
            }
        };

        // this.onViewportChanged = this.onViewportChanged.bind(this);
    }

    componentDidMount() {
        fetch("http://127.0.0.1:5000/overview/")
            .then(res => res.json())
            .then(result => {
                    this.setState({payload: {max: 10, data: result}});
                },
                (error) => {
                    console.log('unable to fetch overview data');
                }
            )
    }

    // onViewportChanged = (viewport) => {
    //     // This method would be an ideal vantage point if I ever want to cluster resorts to send small bites of data
    //     // On every viewport change, I would AJAX the resorts that are in sight and update the map.
    //     this.setState({viewport});
    // };

    render() {
        return (
            <LeafletMap {...this.state.mapConfig}
                        // onViewportChanged={this.onViewportChanged}
            >
                <TileLayer {...this.state.layerConfig}/>
                <HeatmapLayer cfg={this.state.heatmapConfig} data={this.state.payload}/>
                <Markers/>
            </LeafletMap>
        );
    }
}