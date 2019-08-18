import { CHANGE_VIEWPORT } from "../actions/types";

const initialState = {
  viewport: {
    center: [31.0, 8.0],
    zoom: 3
  },
  dynamicMarkerConfig: convertZoomToMarkerConfig(3)
};

export function convertZoomToMarkerConfig(zoom) {
  let opacity, radius;
  
  if (zoom < 8) {
    opacity = 0.0;
    radius = 10;
  } else if (zoom < 10) {
    opacity = 0.15;
    radius = 10;
  } else {
    opacity = 0.5;
    radius = 10;
  }

  return {
    radius,
    opacity,
    fillOpacity: opacity * 0.6
  };
}

function updateDynamicMarkerConfig(oldDynamicMarkersConfig, newZoom) {
  const newDynamicMarkersConfig = convertZoomToMarkerConfig(newZoom);
  return newDynamicMarkersConfig.opacity !== oldDynamicMarkersConfig.opacity
    ? newDynamicMarkersConfig
    : oldDynamicMarkersConfig;
}

export default (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_VIEWPORT:
      return {
        ...state,
        viewport: action.viewport,
        dynamicMarkerConfig: updateDynamicMarkerConfig(
          state.dynamicMarkerConfig,
          action.viewport.zoom
        )
      };
    default:
      return state;
  }
};
