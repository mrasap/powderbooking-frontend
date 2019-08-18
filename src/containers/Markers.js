import { connect } from "react-redux";
import selectResort from "../actions/selectResort";
import Component from "../components/map/Markers";

const mapStateToProps = state => ({
  resort_id: state.resort.resort_id,
  data: state.overview.data,
  dynamicConfig: state.map.dynamicMarkerConfig
});

const mapDispatchToProps = {
  selectResort
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Component);
