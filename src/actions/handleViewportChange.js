import { CHANGE_VIEWPORT } from "./types";

export default newViewport => dispatch => {
  dispatch({
    type: CHANGE_VIEWPORT,
    viewport: newViewport
  });
};
