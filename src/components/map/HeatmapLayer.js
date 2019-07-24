import React from "react";
import {withLeaflet, MapLayer} from "react-leaflet";

import HeatmapOverlay from "leaflet-heatmap";

class _HeatmapLayer extends MapLayer {
    createLeafletElement(props) {
        let heatmap = new HeatmapOverlay(props.cfg);
        heatmap.setData(props.data);
        return heatmap;
    }

    updateLeafletElement(_fromProps, _toProps) {
        this.leafletElement.setData(_toProps.data);
    }
}

export const HeatmapLayer = withLeaflet(props => {
    return <_HeatmapLayer {...props} />;
});