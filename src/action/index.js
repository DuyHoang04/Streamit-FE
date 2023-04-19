import { createAction } from "@reduxjs/toolkit";
import { authTypes, userTypes } from "../utils/actionTypes/index";

export const authActions = {
  loginRequest: createAction(authTypes.LOGIN_REQUEST),
  loginSuccess: createAction(authTypes.LOGIN_SUCCESS),
  loginFailure: createAction(authTypes.LOGIN_FAILURE),
  logoutRequest: createAction(authTypes.LOGOUT_REQUEST),
  logoutSuccess: createAction(authTypes.LOGOUT_SUCCESS),
  logoutFailure: createAction(authTypes.LOGOUT_FAILURE),
};

export const itemActions = {
  fetchListRequest: createAction(userTypes),
  fetchListSuccess: createAction(userTypes),
  fetchListFailure: createAction(userTypes),
};


