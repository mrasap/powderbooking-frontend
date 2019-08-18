import { SELECT_RESORT } from "./types";

export default (resort_id) => dispatch => {
  dispatch({
    type: SELECT_RESORT,
    resort_id
  })
};
