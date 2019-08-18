import { connect } from "react-redux";
import getResort from "../actions/getResort";
import Component from "../components/map/ResortPopup";

// TODO: fix ownProps?
const mapStateToProps = (state, ownProps) => ({
  // ...state.resort  should work as well?
  ...ownProps,
  isLoaded: state.resort.isLoaded,
  error: state.resort.error,
  payload: state.resort.payload
});

const mapDispatchToProps = {
    getResort
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Component);
