import React from "react";
import './style.css';
import {Map as LeafletMap, TileLayer} from 'react-leaflet';
import HeatmapLayer from "./HeatmapLayer";
import Markers from './Markers';

const SNOW_OR_RAIN = 'snow';

function convertZoomToMarkerConfig(zoom) {
    let newOpacity, newRadius;

    if (zoom < 5) {
        newOpacity = 0.0;
        newRadius = 10;
    } else if (zoom < 8) {
        newOpacity = 0.05;
        newRadius = 15;
    } else if (zoom < 10) {
        newOpacity = 0.15;
        newRadius = 20;
    } else {
        newOpacity = 0.50;
        newRadius = 10;
    }

    return {
        radius: newRadius,
        opacity: newOpacity,
        fillOpacity: newOpacity * .6,
    };
}

export default class extends React.Component {
    staticConfig = {
        map: {
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
        tileLayer: {
            url: 'https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}',
            id: 'mapbox.dark',
            accessToken: 'pk.eyJ1IjoibXJhc2FwIiwiYSI6ImNqazd6dHpxajI4YWozcG8yeWNpZXUybnEifQ.bp0IflatrzCyKPJDJwT74A',
            attribution: 'Map &copy; <a href="https://www.mapbox.com/">Mapbox</a> | ' +
                'Weather &copy; <a href="http://www.weatherunlocked.com/">Weather Unlocked</a>'
        },
        heatMap: {
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
            valueField: SNOW_OR_RAIN + '_total_mm'
        },
        payload: {
            max: 30,
            data: []
        }
    };

    constructor(props) {
        super(props);

        // set initial state
        this.state = {
            currentViewport: {
                center: [31.00, 8.00],
                zoom: 3
            },
            markers: convertZoomToMarkerConfig(3),
            payload_data: [],
            payload_max: 1,
        };

        this.handleZoomChange = this.handleZoomChange.bind(this);
        this.handleOnViewportChange = this.handleOnViewportChange.bind(this);
    }

    componentDidMount() {
        fetch("http://127.0.0.1:5000/overview/")
            .then(res => res.json())
            .then(result => {
                    console.log(result);
                    this.setState({payload_data: result})
                },
                (error) => {
                    console.log('unable to fetch overview data')
                }
            );
        fetch("http://127.0.0.1:5000/overview/max/" + SNOW_OR_RAIN)
            .then(res => res.json())
            .then(result => {
                    this.setState({payload_max: result});
                },
                (error) => {
                    console.log('unable to fetch max_overview data');
                }
            );

        window.scrollTo(0, 0);
    }

    handleOnViewportChange = (newViewport) => {
        // This method would be an ideal vantage point if I ever want to cluster resorts to send small bites of data
        // On every viewport change, I would AJAX the resorts that are in sight and update the map.
        if (newViewport.zoom !== this.state.currentViewport.zoom) {
            this.handleZoomChange(newViewport.zoom)
        }
        this.setState({currentViewport: newViewport});
    };

    handleZoomChange = (newZoom) => {
        const newMarkersConfig = convertZoomToMarkerConfig(newZoom);
        if (newMarkersConfig.opacity !== this.state.markers.opacity) {
            this.setState({markers: newMarkersConfig});
        }
    };

    render() {
        return (
            <LeafletMap {...this.staticConfig.map}
                        onViewportChanged={this.handleOnViewportChange}>
                <TileLayer {...this.staticConfig.tileLayer}/>
                <HeatmapLayer cfg={this.staticConfig.heatMap}
                              max={this.state.payload_max}
                              data={this.state.payload_data}/>
                <Markers circleDynamicConfig={this.state.markers}
                         data={this.state.payload_data}/>
            </LeafletMap>
        );
    }
}