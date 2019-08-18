import { connect } from "react-redux";
import getOverview from "../actions/getOverview";
import Component from "../components/map";

const mapStateToProps = state => ({
  data: state.overview.data,
  max: state.overview.max
});

const mapDispatchToProps = {
  getOverview
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Component);
