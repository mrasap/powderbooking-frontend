import React from "react";
import './style.css';
import {Map as LeafletMap, Marker, Popup, TileLayer} from 'react-leaflet'

const attribution = 'Map &copy; <a href="https://www.mapbox.com/">Mapbox</a> | ' +
    'Weather &copy; <a href="http://www.weatherunlocked.com/">Weather Unlocked</a>',
    boundsNE= [85.00, -230.00],
    boundsSW = [-85.00, 230.00];

export default class extends React.Component {
    constructor(props) {
        super(props);

        // set initial state
        this.state = {
            url: 'https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}',
            id: 'mapbox.dark',
            accessToken: 'pk.eyJ1IjoibXJhc2FwIiwiYSI6ImNqazd6dHpxajI4YWozcG8yeWNpZXUybnEifQ.bp0IflatrzCyKPJDJwT74A'
        };

    }

    render() {
        const position = this.state.position;
        return (
            <LeafletMap center={[31.00, 8.00]} zoom={3} minZoom={2} maxZoom={12} maxBounds={[boundsNE, boundsSW]}>
                <TileLayer
                    url={this.state.url}
                    id={this.state.id}
                    accessToken={this.state.accessToken}
                    attribution={attribution}
                />
            </LeafletMap>
        );
    }
}


{/*<LeafletMap center={position} zoom={this.state.zoom}>*/}
{/*    <TileLayer*/}
{/*        url={this.state.url}*/}
{/*        attribution={this.state.attribution}*/}
{/*    />*/}
{/*    <Marker position={position}>*/}
{/*        <Popup>A pretty CSS3 popup.<br />Easily customizable.</Popup>*/}
{/*    </Marker>*/}
{/*</LeafletMap>*/}
