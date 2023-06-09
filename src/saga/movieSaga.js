import { put, takeEvery } from "redux-saga/effects";
import * as types from "../utils/actionTypes/index";
import { movieApi } from "../api/index";
import { movieActions, mediaActions } from "../action/index";
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

function* handleUpdateMovie({ payload }) {
  try {
    const { message } = yield movieApi.updateMovie(payload);
    yield put(movieActions.updateMovieSuccess());
    yield put(mediaActions.getMovieAndSeriesRequest({}));
    toastSuccess(message);
  } catch (error) {
    yield put(movieActions.updateMovieFailure(error));
    toastError("Something went wrong");
  }
}

function* handleDeleteMovie({ payload }) {
  try {
    const { message } = yield movieApi.deleteMovie(payload);
    yield put(movieActions.deleteMovieSuccess());
    yield put(mediaActions.getMovieAndSeriesRequest({}));
    toastSuccess(message);
  } catch (error) {
    yield put(movieActions.deleteMovieFailure(error));
    toastError("Something went wrong");
  }
}

function* handleGetAllMovie({ payload }) {
  try {
    const { data } = yield movieApi.getAllMovie(payload);
    yield put(movieActions.getAllMovieSuccess(data));
  } catch (error) {
    yield put(movieActions.getAllMovieFailure(error));
    toastError("Something went wrong");
  }
}
function* handleGetDetailMovie({ payload }) {
  try {
    const { data } = yield movieApi.getDetailMovie(payload);
    yield put(movieActions.getDetailMovieSuccess(data));
  } catch (error) {
    yield put(movieActions.getDetailMovieFailure(error));
    toastError("Something went wrong");
  }
}
function* handleCommentMovie({ payload }) {
  try {
    const movieId = payload.paths.movieId;
    const { message } = yield movieApi.commentMovie(payload);
    yield put(movieActions.commentMovieSuccess());
    yield toastSuccess(message);
    yield put(movieActions.getDetailMovieRequest({ paths: { movieId } }));
  } catch (error) {
    yield put(movieActions.getDetailMovieFailure(error));
    toastError("Something went wrong");
  }
}

function* handleLikeMovie({ payload }) {
  try {
    const { message } = yield movieApi.likeMovie(payload);
    yield put(movieActions.likeMovieSuccess());
    yield toastSuccess(message);
  } catch (error) {
    yield put(movieActions.likeMovieFailure(error));
    toastError("Movie already like");
  }
}

const movieSaga = [
  takeEvery(types.movieTypes.ADD_MOVIE_REQUEST, handleAddMovie),
  takeEvery(types.movieTypes.UPDATE_MOVIE_REQUEST, handleUpdateMovie),
  takeEvery(types.movieTypes.DELETE_MOVIE_REQUEST, handleDeleteMovie),
  takeEvery(types.movieTypes.GET_ALL_MOVIE_REQUEST, handleGetAllMovie),
  takeEvery(types.movieTypes.GET_DETAIL_MOVIE_REQUEST, handleGetDetailMovie),
  takeEvery(types.movieTypes.COMMENT_MOVIE_REQUEST, handleCommentMovie),
  takeEvery(types.movieTypes.LIKE_MOVIE_REQUEST, handleLikeMovie),
];
export default movieSaga;
