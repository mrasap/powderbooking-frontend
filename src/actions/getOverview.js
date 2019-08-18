import { GET_OVERVIEW, GET_OVERVIEW_MAX } from "./types";
const SNOW_OR_RAIN = "snow";

export default () => dispatch => {
  fetch(process.env.REACT_APP_BACKEND_API + "/overview/")
    .then(result => result.json())
    .then(
      result =>
        dispatch({
          type: GET_OVERVIEW,
          payload: result
        }),
      error => {
        console.log("unable to fetch overview data");
      }
    );
  fetch(process.env.REACT_APP_BACKEND_API + "/overview/max/" + SNOW_OR_RAIN)
    .then(result => result.json())
    .then(
      result =>
        dispatch({
          type: GET_OVERVIEW_MAX,
          payload: result.max
        }),
      error => {
        console.log("unable to fetch overview_max data");
      }
    );
};
