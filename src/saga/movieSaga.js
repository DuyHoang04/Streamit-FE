import { put, takeEvery } from "redux-saga/effects";
import * as types from "../utils/actionTypes/index";
import { movieApi } from "../api/index";
import { movieActions } from "../action/index";
import { toastError, toastSuccess } from "../utils";

function* handleAddMovie({ payload }) {
  try {
    const { message } = yield movieApi.addMovie(payload);
    yield put(movieActions.addMovieSuccess());
    toastSuccess(message);
  } catch (error) {
    yield put(movieActions.addMovieFailure(error));
    toastError("Something went wrong");
  }
}

const movieSaga = [
  takeEvery(types.movieTypes.ADD_MOVIE_REQUEST, handleAddMovie),
];
export default movieSaga;
