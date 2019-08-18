import { withLeaflet, MapLayer } from "react-leaflet";
import HeatmapOverlay from "leaflet-heatmap";
import { SNOW_OR_RAIN } from "../../config";

const staticConfig = {
  radius: 2,
  minOpacity: 0,
  maxOpacity: 0.5,
  scaleRadius: true,
  useLocalExtrema: false,
  gradient: {
    ".3": "darkblue",
    ".7": "slateblue",
    ".99": "ivory"
  },
  latField: "lat",
  lngField: "lng",
  valueField: SNOW_OR_RAIN + "_total_mm"
};

class HeatmapLayer extends MapLayer {
  createLeafletElement(props) {
    let heatmap = new HeatmapOverlay(staticConfig);
    heatmap.setData({ max: props.max, data: props.data });
    return heatmap;
  }

  updateLeafletElement(_fromProps, _toProps) {
    this.leafletElement.setData({ max: _toProps.max, data: _toProps.data });
  }
}

export default withLeaflet(HeatmapLayer);
