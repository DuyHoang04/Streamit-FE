import { put, takeEvery } from "redux-saga/effects";
import * as types from "../utils/actionTypes/index";
import { mediaApi } from "../api/index";
import { mediaActions, userActions } from "../action/index";
import { toastError, toastSuccess } from "../utils";
import useUser from "../hook/useUser";

function* handleGetMovieAndSeries() {
  try {
    const { data, message } = yield mediaApi.getMovieAndSeries({});
    yield put(mediaActions.getMovieAndSeriesSuccess(data));
  } catch (error) {
    yield put(mediaActions.getMovieAndSeriesFailure(error));
    toastError("Something went wrong");
  }
}
function* handleLikeMovieAndSeries({ payload }) {
  const { headers } = payload;
  try {
    const { message } = yield mediaApi.likeMovieAndSeries(payload);
    yield put(mediaActions.likeMovieAndSeriesSuccess());
    yield put(userActions.getDetailUserRequest({ headers }));
    toastSuccess(message);
  } catch (error) {
    yield put(mediaActions.likeMovieAndSeriesFailure(error));
    toastError("Movie already like");
  }
}
function* handleDeleteLikeMovieAndSeries({ payload }) {
  const { headers } = payload;
  try {
    const { message } = yield mediaApi.deleteLikeMovieAndSeries(payload);
    yield put(mediaActions.deleteLikeMovieAndSeriesSuccess());
    toastSuccess(message);
    yield put(userActions.getLikedMovieUserRequest({ headers }));
    yield put(userActions.getDetailUserRequest({ headers }));
  } catch (error) {
    yield put(mediaActions.deleteLikeMovieAndSeriesFailure(error));
    toastError("Something went wrong");
  }
}

const mediaSaga = [
  takeEvery(
    types.mediaTypes.GET_MOVIE_AND_SERIES_REQUEST,
    handleGetMovieAndSeries
  ),
  takeEvery(
    types.mediaTypes.LIKE_MOVIE_AND_SERIES_REQUEST,
    handleLikeMovieAndSeries
  ),
  takeEvery(
    types.mediaTypes.DELETE_LIKE_MOVIE_AND_SERIES_REQUEST,
    handleDeleteLikeMovieAndSeries
  ),
];
export default mediaSaga;
