import { put, takeEvery } from "redux-saga/effects";
import * as types from "../utils/actionTypes/index";
import { authApi, genresApi } from "../api/index";
import { authActions, genresActions, userActions } from "../action/index";
import {
  generateAccessToken,
  generateRefreshToken,
  toastError,
  toastSuccess,
} from "../utils";
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
  console.log("vo");
  const { navigate, reqLogin } = payload;
  try {
    const { data } = yield authApi.Login(reqLogin);
    yield put(authActions.loginSuccess(data.isAdmin));
    yield generateAccessToken(data.accessToken);
    yield generateRefreshToken(data.refreshToken);
    navigate("/");
  } catch (error) {
    yield put(authActions.loginFailure(error));
    yield toastError("Sai tài khoản hoặc mật khẩu");
  }
}

function* handleLogOut({ payload }) {
  const { navigate } = payload;
  try {
    const { message } = yield authApi.LogOut({});
    yield put(authActions.logoutSuccess());
    Cookies.remove("access_token");
    Cookies.remove("refresh_token");
    navigate("/");
  } catch (error) {
    yield put(authActions.logoutFailure(error));
    yield toastError("Sai tài khoản hoặc mật khẩu");
  }
}

function* handleRefreshToken({ payload }) {
  console.log(payload);
  try {
    const { data } = yield authApi.RefreshToken(payload);
    yield put(authActions.refreshTokenSuccess());
    yield generateAccessToken(data.accessToken);
    yield generateRefreshToken(data.refreshToken);

    toastSuccess("SUCCESS");
    // navigate("/");
  } catch (error) {
    yield put(authActions.refreshTokenFailure(error));
    yield toastError("SOMETHING WENT WRONG");
  }
}

function* handleForgotPassword({ payload }) {
  try {
    const { message, key } = yield authApi.forgotPassword(payload);
    yield put(authActions.forgotPasswordSuccess(key));
    toastSuccess(message);
  } catch (err) {
    yield put(authActions.forgotPasswordFailure(err));
  }
}
function* handleResetPassword({ payload }) {
  const { req, navigate } = payload;
  try {
    const { message } = yield authApi.resetPassword(req);
    yield put(authActions.resetPasswordSuccess());
    yield toastSuccess(message);
    yield navigate("/login");
  } catch (err) {
    yield put(authActions.refreshTokenFailure(err));
  }
}

const authSaga = [
  takeEvery(types.authTypes.LOGIN_REQUEST, handleLogin),
  takeEvery(types.authTypes.REGISTER_REQUEST, handleRegister),
  takeEvery(types.authTypes.LOGOUT_REQUEST, handleLogOut),
  takeEvery(types.authTypes.REFRESH_TOKEN_REQUEST, handleRefreshToken),
  takeEvery(types.authTypes.FORGOT_PASSWORD_REQUEST, handleForgotPassword),
  takeEvery(types.authTypes.RESET_PASSWORD_REQUEST, handleResetPassword),
];
export default authSaga;
