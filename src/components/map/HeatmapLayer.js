import {withLeaflet, MapLayer} from "react-leaflet";
import HeatmapOverlay from "leaflet-heatmap";

class HeatmapLayer extends MapLayer {
    createLeafletElement(props) {
        let heatmap = new HeatmapOverlay(props.cfg);
        heatmap.setData({max: props.max, data: props.data});
        return heatmap;
    }

    updateLeafletElement(_fromProps, _toProps) {
        this.leafletElement.setData({max: _toProps.max, data: _toProps.data});
    }
}

export default withLeaflet(HeatmapLayer);