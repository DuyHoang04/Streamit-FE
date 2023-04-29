import { put, takeLatest } from "redux-saga/effects";
import * as types from "../utils/actionTypes/index";
import { authApi } from "../api/index";
import * as loginActions from '../store/reducer/loginReducer'
import * as registerActions from '../store/reducer/registerReducer'
import { toastSuccess, toastError } from "../utils";
function* handleGetLogin({ payload }) {
  const { navigate } = payload
  try {
    const res = yield authApi.Login({ payload });
    yield put(loginActions.getLoginSuccess({
      accessToken: res.data.accessToken,
      accountRole: res.data.isAdmin
    }))
    navigate("/")
  } catch (error) {
    yield put(loginActions.getLoginFailure(toastError({
      message: "Sai tài khoản hoặc mật khẩu"
    })))
  }
}

function* handleRegister({ payload }) {
  const { navigate } = payload
  try {
    const res = yield authApi.Register({ payload })
    yield put(registerActions.getRegisterSuccess(toastSuccess({
      message: res.message
    })))
    navigate("/login")
  } catch (error) {
    yield put(registerActions.getRegisterFailure(toastError({
      message: "Trùng tài khoản"
    })))
  }

}

const Saga = [
  takeLatest(types.authTypes.LOGIN_REQUEST, handleGetLogin),
  takeLatest(types.authTypes.REGISTER_REQUEST, handleRegister),
];
export default Saga;
