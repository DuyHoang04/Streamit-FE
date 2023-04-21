import { takeEvery } from "redux-saga/effects";
import * as types from '../utils/actionTypes/index'
import { authApi } from '../api/index'
import { authActions } from '../action/index'

function* handleGetLogin(action) {
  try {
    const res = yield authApi.Login(action.payload)
    console.log(res, "222")
    yield authActions.loginSuccess()

  } catch (error) {
    yield authActions.loginFailure(error)
  }
}




const Saga = [
  takeEvery(types.authTypes.LOGIN_REQUEST, handleGetLogin),
];
export default Saga;
