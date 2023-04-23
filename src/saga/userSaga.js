import { put, takeEvery } from "redux-saga/effects";
import * as types from "../utils/actionTypes/index";
import { authApi } from "../api/index";
import { authActions } from "../action/index";
import { redirect } from "react-router-dom";
function* handleGetLogin({ payload }) {
  try {
    const res = yield authApi.Login({ payload });

    yield authActions.loginSuccess({
      token: res.data,
      success: res.success,
    });
    navigate("/admin/dashboard")
  } catch (error) {
    yield authActions.loginFailure(error);
  }
}

function* handleRegister({ payload }) {
  try {
    const res = yield authApi.Register({ payload });
    yield put(
      authActions.registerSuccess({
        success: res.success,
        message: res.message
      }))

  } catch (error) {
    yield put(authActions.registerFailure(error));
  }
}

const Saga = [
  takeEvery(types.authTypes.LOGIN_REQUEST, handleGetLogin),
  takeEvery(types.authTypes.REGISTER_REQUEST, handleRegister),
];
export default Saga;
