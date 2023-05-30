import { combineReducers } from "redux";
import userReducer from "./userReducer";
import genresReducer from "./genresReducer";
import movieReducer from "./movieReducer";
import seriesReducer from "./seriesReducer";
import mediaReducer from "./mediaReducer";
import authReducer from "./authReducer";

export default combineReducers({
  users: userReducer,
  auth: authReducer,
  genres: genresReducer,
  movies: movieReducer,
  series: seriesReducer,
  media: mediaReducer,
});
