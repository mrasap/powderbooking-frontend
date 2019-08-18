import React from "react";
import "./style.css";
import { CircleMarker, FeatureGroup, Tooltip } from "react-leaflet";
import ResortPopup from "../../containers/ResortPopup";

const staticConfig = {
  weight: 1,
  color: "wheat"
};

export default ({ data, circleDynamicConfig, selectResort, resort_id }) => {
  // The Markers with the tooltip are always rendered
  // The Popup is only shown when one of the markers is clicked
  return (
    <FeatureGroup >
      {data.map(resort => (
        <CircleMarker
          key={resort.id}
          center={[resort.lat, resort.lng]}
          onclick={() => {selectResort(resort.id)}}
          {...circleDynamicConfig}
          {...staticConfig}
        >
          <Tooltip>
            <h6>
              <b>{resort.snow_week_mm} mm</b> snow in {resort.village} with id {resort.id}
            </h6>
          </Tooltip>
        </CircleMarker>
      ))}
      {resort_id && <ResortPopup resort_id={resort_id} />}
    </FeatureGroup>
  );
};