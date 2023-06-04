import { put, takeEvery } from "redux-saga/effects";
import * as types from "../utils/actionTypes/index";
import { mediaApi } from "../api/index";
import { mediaActions, userActions } from "../action/index";
import { toastError, toastSuccess } from "../utils";

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
  try {
    const { message } = yield mediaApi.likeMovieAndSeries(payload);
    yield put(mediaActions.likeMovieAndSeriesSuccess());
    toastSuccess(message);
  } catch (error) {
    yield put(mediaActions.likeMovieAndSeriesFailure(error));
    toastError("Movie already like");
  }
}
function* handleDeleteLikeMovieAndSeries({ payload }) {
  const { req, accessToken } = payload;
  try {
    const { message } = yield mediaApi.deleteLikeMovieAndSeries(req);
    yield put(mediaActions.deleteLikeMovieAndSeriesSuccess());
    toastSuccess(message);
    yield put(
      userActions.getLikedMovieUserRequest({
        headers: {
          authorization: `Bearer ${accessToken}`,
        },
      })
    );
  } catch (error) {
    yield put(mediaActions.deleteLikeMovieAndSeriesFailure(error));
    toastError("Movie already like");
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
