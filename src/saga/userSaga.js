import { put, takeLatest } from "redux-saga/effects";
import * as types from "../utils/actionTypes/index";
import { authApi } from "../api/index";
import * as loginActions from '../store/reducer/loginReducer'
import * as registerActions from '../store/reducer/registerReducer'
import { redirect } from "react-router-dom";
import { notification } from "antd";
function* handleGetLogin({ payload }) {
  try {
    const res = yield authApi.Login({ payload });
    console.log(res, "555")
    if (res.data.success) {
      yield put(loginActions.getLoginSuccess({
        accessToken: res.data.accessToken,
        accountRole: res.data.isAdmin
      }))
    }
    redirect = "/admin/dashboard"
  } catch (error) {
    yield put(loginActions.getLoginFailure(
      notification.error({
        message: 'Sai tài khoản hoặc mật khẩu',
        placement: 'topRight'
      })))
  }
}

function* handleRegister({ payload }) {
  try {
    const res = yield authApi.Register({ payload })
    if (res.success) {
      yield put(registerActions.getRegisterSuccess({
        message: res.message
      }))
    }
    redirect = "/login"
  } catch (error) {
    yield put(loginActions.getLoginFailure(
      notification.error({
        message: 'tài khoản đã được sử dụng',
        placement: 'topRight'
      })))
  }

}

const Saga = [
  takeLatest(types.authTypes.LOGIN_REQUEST, handleGetLogin),
  takeLatest(types.authTypes.REGISTER_REQUEST, handleRegister),
];
export default Saga;
