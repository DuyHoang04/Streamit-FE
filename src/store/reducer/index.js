import { combineReducers } from "redux";
import userReducer from "./userReducer";
import genresReducer from "./genresReducer";
import movieReducer from "./movieReducer";
import seriesReducer from "./seriesReducer";
import mediaReducer from "./mediaReducer";

export default combineReducers({
  users: userReducer,
  genres: genresReducer,
  movies: movieReducer,
  series: seriesReducer,
  media: mediaReducer,
});
