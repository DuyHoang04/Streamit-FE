import { takeEvery } from "redux-saga/effects";
import * as types from '../utils/actionTypes/index'
import {authApi} from '../api/index'

function* handleGetLogin(action) {
  console.log(action, "221")
    try {
        const res = yield authApi.Login()
    } catch (error) {
        
    }
}




const Saga = [
  takeEvery(types.authTypes.LOGIN_REQUEST, handleGetLogin),
];
export default Saga;
