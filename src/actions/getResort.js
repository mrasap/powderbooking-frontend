import { GET_RESORT } from "./types";

export default (id) => dispatch => {
  fetch(process.env.REACT_APP_BACKEND_API + "/resort/" + id)
    .then(result => result.json())
    .then(
      result =>
        dispatch({
          type: GET_RESORT,
          payload: result
        }),
      error => {
        console.log("unable to fetch overview data");
        dispatch({
          type: GET_RESORT,
          error: error
        });
      }
    );
};
