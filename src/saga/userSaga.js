import { put, takeEvery } from "redux-saga/effects";
import { userApi } from "../api/index";
import { toastSuccess, toastError } from "../utils";
import { userTypes } from "../utils/actionTypes";
import { userActions } from "../action";

function* handelGetAllUser({}) {
  try {
    const { data } = yield userApi.getAllUser({});
    yield put(userActions.getAllUserSuccess(data));
  } catch (error) {
    yield put(userActions.getAllUserFailure(error));
    yield toastError("Something went wrong");
  }
}

function* handleUpdateUser({ payload }) {
  try {
    const { message } = yield userApi.updateUser(payload);
    yield put(userActions.updateUserSuccess());
    yield toastSuccess(message);
    yield put(userActions.getAllUserRequest());
  } catch (error) {
    yield put(userActions.updateUserFailure(error));
    yield toastError("Something went wrong");
  }
}
function* handleDeleteUser({ payload }) {
  try {
    const { message } = yield userApi.deleteUser(payload);
    yield put(userActions.deleteUserSuccess());
    yield toastSuccess(message);
    yield put(userActions.getAllUserRequest());
  } catch (error) {
    yield put(userActions.deleteUserFailure(error));
    yield toastError("Something went wrong");
  }
}
function* handleGetLikedMovie({ payload }) {
  try {
    const { data } = yield userApi.getLikedMovies(payload);
    yield put(userActions.getLikedMovieUserSuccess(data));
  } catch (error) {
    yield put(userActions.getLikedMovieUserFailure(error));
    yield toastError("Something went wrong");
  }
}

const userSaga = [
  takeEvery(userTypes.GET_ALL_USER_REQUEST, handelGetAllUser),
  takeEvery(userTypes.UPDATE_USER_REQUEST, handleUpdateUser),
  takeEvery(userTypes.DELETE_USER_REQUEST, handleDeleteUser),
  takeEvery(userTypes.GET_LIKED_MOVIE_TO_USER_REQUEST, handleGetLikedMovie),
];
export default userSaga;
