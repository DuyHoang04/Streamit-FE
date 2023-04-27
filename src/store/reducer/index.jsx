import { combineReducers } from "redux";
import userReducer from "./userReducer";
import genresReducer from "./genresReducer";
import movieReducer from "./movieReducer";

export default combineReducers({
  users: userReducer,
  genres: genresReducer,
  movies: movieReducer,
});
