import { GET_RESORT, SELECT_RESORT } from "../actions/types";

const initialState = {
  resort_id: null,
  error: null,
  isLoaded: false,
  payload: {}
};

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_RESORT:
      const result = action.payload
        ? { payload: action.payload }
        : { error: action.error };
      return {
        ...state,
        isLoaded: true,
        ...result
      };
    case SELECT_RESORT:
      return {
        ...initialState, // reset state because we are looking for a new resort
        resort_id: action.resort_id
      };
    default:
      return state;
  }
};
