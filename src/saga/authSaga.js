import { put, takeEvery } from "redux-saga/effects";
import * as types from "../utils/actionTypes/index";
import { authApi, genresApi } from "../api/index";
import { authActions, genresActions } from "../action/index";
import { toastError, toastSuccess } from "../utils";
import Cookies from "js-cookie";

function* handleRegister({ payload }) {
  const { navigate, reqRegister } = payload;
  try {
    const { message } = yield authApi.Register(reqRegister);
    yield put(authActions.registerSuccess());
    yield toastSuccess(message);
    navigate("/login");
  } catch (error) {
    yield put(authActions.registerFailure(error));
    yield toastError("Trùng tài khoản");
  }
}

function* handleLogin({ payload }) {
  const { navigate, reqLogin } = payload;
  try {
    const { data } = yield authApi.Login(reqLogin);
    yield put(authActions.loginSuccess(data.isAdmin));
    yield Cookies.set("access_token", data.accessToken);
    navigate("/");
  } catch (error) {
    yield put(authActions.loginFailure(error));
    yield toastError("Sai tài khoản hoặc mật khẩu");
  }
}

const authSaga = [
  takeEvery(types.authTypes.LOGIN_REQUEST, handleLogin),
  takeEvery(types.authTypes.REGISTER_REQUEST, handleRegister),
];
export default authSaga;
