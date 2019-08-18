import { GET_OVERVIEW, GET_OVERVIEW_MAX } from '../actions/types';

export const initialState = {
    data: [],
    max: 0
  };
  
  export default (state = initialState, action) => {
    switch (action.type) {
      case GET_OVERVIEW:
        return {
          ...state,
          data: action.payload
        };
        case GET_OVERVIEW_MAX:
          return {
            ...state,
            max: action.payload
          };
      default:
        return state;
    }
  }