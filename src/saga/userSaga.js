import { put, takeEvery } from "redux-saga/effects";
import * as types from '../utils/actionTypes/index'
import { authApi } from '../api/index'
import { authActions } from '../action/index'

function* handleGetLogin(action) {
  try {
    const res = yield authApi.Login(action.payload)
    console.log(res, "222")
    yield authActions.loginSuccess({
      res
    })

  } catch (error) {
    yield authActions.loginFailure(error)
  }
}

function* handleRegister(action) {
    try {
    const res = yield authApi.Register(action.payload)
    console.log(res, "222244")
    yield put(authActions.registerSuccess({
      res
    }))
  } catch (error) {
    yield put(authActions.registerFailure(error))

  }
}




const Saga = [
  takeEvery(types.authTypes.LOGIN_REQUEST, handleGetLogin),
  takeEvery(types.authTypes.REGISTER_REQUEST, handleRegister)
];
export default Saga;
