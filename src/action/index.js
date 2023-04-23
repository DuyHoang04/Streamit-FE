import { createAction } from "@reduxjs/toolkit";
import { authTypes, userTypes, genresTypes } from "../utils/actionTypes/index";

export const authActions = {
  loginRequest: createAction(authTypes.LOGIN_REQUEST),
  loginSuccess: createAction(authTypes.LOGIN_SUCCESS),
  loginFailure: createAction(authTypes.LOGIN_FAILURE),
  logoutRequest: createAction(authTypes.LOGOUT_REQUEST),
  logoutSuccess: createAction(authTypes.LOGOUT_SUCCESS),
  logoutFailure: createAction(authTypes.LOGOUT_FAILURE),
  registerRequest: createAction(authTypes.REGISTER_REQUEST),
  registerSuccess: createAction(authTypes.REGISTER_SUCCESS),
  registerFailure: createAction(authTypes.REGISTER_FAILURE),
};

export const itemActions = {
  fetchListRequest: createAction(userTypes),
  fetchListSuccess: createAction(userTypes),
  fetchListFailure: createAction(userTypes),
};

export const genresActions = {
  getAllGenresRequest: createAction(genresTypes.GET_ALL_GENRES_REQUEST),
  getAllGenresSuccess: createAction(genresTypes.GET_ALL_GENRES_SUCCESS),
  getAllGenresFailure: createAction(genresTypes.GET_ALL_GENRES_FAILURE),
  addGenresRequest: createAction(genresTypes.ADD_GENRES_REQUEST),
  addGenresSuccess: createAction(genresTypes.ADD_GENRES_SUCCESS),
  addGenresFailure: createAction(genresTypes.ADD_GENRES_FAILURE),
  updateGenresRequest: createAction(genresTypes.UPDATE_GENRES_REQUEST),
  updateGenresSuccess: createAction(genresTypes.UPDATE_GENRES_SUCCESS),
  updateGenresFailure: createAction(genresTypes.UPDATE_GENRES_FAILURE),
};
