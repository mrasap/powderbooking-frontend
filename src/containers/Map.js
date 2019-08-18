import { connect } from "react-redux";
import getOverview from "../actions/getOverview";
import handleViewportChange from "../actions/handleViewportChange";
import Component from "../components/map";

const mapStateToProps = state => ({
  data: state.overview.data,
  max: state.overview.max
});

const mapDispatchToProps = {
  getOverview,
  handleViewportChange
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Component);
