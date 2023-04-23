import { combineReducers } from "redux";
import userReducer from "./userReducer";
import genresReducer from "./genresReducer";

export default combineReducers({
  users: userReducer,
  genres: genresReducer,
});
