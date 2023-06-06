import { put, takeEvery } from "redux-saga/effects";
import { userApi } from "../api/index";
import { toastSuccess, toastError } from "../utils";
import { userTypes } from "../utils/actionTypes";
import { userActions } from "../action";
import { toast } from "react-hot-toast";

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
  const { req, accessToken } = payload;

  // nếu có access là đang cập nhật bên user
  try {
    const { message } = yield userApi.updateUser(req);
    yield put(userActions.updateUserSuccess());
    yield toastSuccess(message);
    if (!accessToken) {
      yield put(userActions.getAllUserRequest());
    } else {
      yield put(
        userActions.getDetailUserRequest({
          headers: {
            authorization: `Bearer ${accessToken}`,
          },
        })
      );
    }
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
function* handleGetDetailUser({ payload }) {
  try {
    const { data } = yield userApi.getDetailUser(payload);
    yield put(userActions.getDetailUserSuccess(data));
  } catch (error) {
    yield put(userActions.getDetailUserFailure(error));
    yield toastError("Something went wrong");
  }
}
function* handleChangePassUser({ payload }) {
  try {
    const { message } = yield userApi.changePassUser(payload);
    yield put(userActions.changePassUserSuccess());
    toastSuccess(message);
  } catch (error) {
    yield put(userActions.changePassUserFailure(error));
    yield toastError("Something went wrong");
  }
}

const userSaga = [
  takeEvery(userTypes.GET_ALL_USER_REQUEST, handelGetAllUser),
  takeEvery(userTypes.UPDATE_USER_REQUEST, handleUpdateUser),
  takeEvery(userTypes.DELETE_USER_REQUEST, handleDeleteUser),
  takeEvery(userTypes.GET_LIKED_MOVIE_TO_USER_REQUEST, handleGetLikedMovie),
  takeEvery(userTypes.DETAIL_USER_REQUEST, handleGetDetailUser),
  takeEvery(userTypes.CHANGE_PASS_USER_REQUEST, handleChangePassUser),
];
export default userSaga;
