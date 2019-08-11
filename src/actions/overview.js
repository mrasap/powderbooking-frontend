import { GET_OVERVIEW } from "./types";
const SNOW_OR_RAIN = "snow";

export const getOverview = () => dispatch => {
  fetch(process.env.REACT_APP_BACKEND_API + "/overview/")
    .then(res => res.json())
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
//   fetch(process.env.REACT_APP_BACKEND_API + "/overview/max/" + SNOW_OR_RAIN)
//     .then(res => res.json())
//     .then(
//       result => {
//         this.setState({ payload_max: result });
//       },
//       error => {
//         console.log("unable to fetch max_overview data");
//       }
//     );

  fetch("https://jsonplaceholder.typicode.com/posts")
    .then(res => res.json())
    .then(posts =>
      dispatch({
        type: GET_OVERVIEW,
        payload: posts
      })
    );
};
