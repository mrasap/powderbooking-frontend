import React, { Fragment } from "react";
import "./style.css";
import { Map as LeafletMap, TileLayer } from "react-leaflet";
import HeatmapLayer from "./HeatmapLayer";
import Markers from "../../containers/Markers";


const staticConfig = {
  map: {
    viewport: {
      center: [31.0, 8.0],
      zoom: 3
    },
    minZoom: 2,
    maxZoom: 12,
    maxBounds: [
      [85.0, -230.0], // bounds north east
      [-85.0, 230.0] // bounds south west
    ]
  },
  tileLayer: {
    url:
      "https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}",
    id: "mapbox.dark",
    accessToken:
      "pk.eyJ1IjoibXJhc2FwIiwiYSI6ImNqazd6dHpxajI4YWozcG8yeWNpZXUybnEifQ.bp0IflatrzCyKPJDJwT74A",
    attribution:
      'Map &copy; <a href="https://www.mapbox.com/">Mapbox</a> | ' +
      'Weather &copy; <a href="http://www.weatherunlocked.com/">Weather Unlocked</a>'
  }
};

export default class extends React.Component {

  // TODO: switch to componentWillMount?
  componentDidMount() {
    this.props.getOverview();
    window.scrollTo(0, 0);
  }

  render() {
    const { data, max, handleViewportChange } = this.props;
    return (
      <LeafletMap
        {...staticConfig.map}
        onViewportChanged={handleViewportChange}
      >
        <TileLayer {...staticConfig.tileLayer} />
        {data && max && (
          <Fragment>
            <HeatmapLayer max={max} data={data} />
            <Markers/>
          </Fragment>
        )}
      </LeafletMap>
    );
  }
}