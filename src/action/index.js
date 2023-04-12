import { createAction } from "@reduxjs/toolkit";
import { actionTypes } from "../constants";

export const authActions = {
  loginRequest: createAction(actionTypes.authTypes.LOGIN_REQUEST),
  loginSuccess: createAction(actionTypes.authTypes.LOGIN_SUCCESS),
  loginFailure: createAction(actionTypes.authTypes.LOGIN_FAILURE),
  logoutRequest: createAction(actionTypes.authTypes.LOGOUT_REQUEST),
  logoutSuccess: createAction(actionTypes.authTypes.LOGOUT_SUCCESS),
  logoutFailure: createAction(actionTypes.authTypes.LOGOUT_FAILURE),
};

export const itemActions = {
  fetchListRequest: createAction(actionTypes.itemTypes.FETCH_ITEMS_REQUEST),
  fetchListSuccess: createAction(actionTypes.itemTypes.FETCH_ITEMS_SUCCESS),
  fetchListFailure: createAction(actionTypes.itemTypes.FETCH_ITEMS_FAILURE),
};
