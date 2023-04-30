import { put, takeEvery } from "redux-saga/effects";
import * as types from "../utils/actionTypes/index";
import { mediaApi } from "../api/index";
import { mediaActions } from "../action/index";
import { toastError } from "../utils";

function* handleGetMovieAndSeries() {
  try {
    const { data, message } = yield mediaApi.getMovieAndSeries({});
    yield put(mediaActions.getMovieAndSeriesSuccess(data));
  } catch (error) {
    yield put(mediaActions.getMovieAndSeriesFailure(error));
    toastError("Something went wrong");
  }
}

const mediaSaga = [
  takeEvery(
    types.mediaTypes.GET_MOVIE_AND_SERIES_REQUEST,
    handleGetMovieAndSeries
  ),
];
export default mediaSaga;
