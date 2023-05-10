import { put, takeEvery } from "redux-saga/effects";
import * as types from "../utils/actionTypes/index";
import { genresApi } from "../api/index";
import { genresActions } from "../action/index";
import { toastError, toastSuccess } from "../utils";

function* handleGetAllGenres() {
  try {
    const { data } = yield genresApi.getAllGenres({});
    yield put(genresActions.getAllGenresSuccess(data));
  } catch (error) {
    yield put(genresActions.getAllGenresFailure(error));
    toastError("Something went wrong");
  }
}

function* handleAddGenres({ payload }) {
  try {
    const { message } = yield genresApi.addGenres(payload);
    yield put(genresActions.addGenresSuccess(message));
    yield put(genresActions.getAllGenresRequest());
    toastSuccess(message);
  } catch (error) {
    yield put(genresActions.addGenresFailure(error));
    toastError("Something went wrong");
  }
}

function* handleUpdateGenres({ payload }) {
  try {
    const { message } = yield genresApi.updateGenres(payload);
    yield put(genresActions.updateGenresSuccess(message));
    yield put(genresActions.getAllGenresRequest());
    toastSuccess(message);
  } catch (error) {
    yield put(genresActions.updateGenresFailure(error));
    toastError("Something went wrong");
  }
}

function* handleDeleteGenres({ payload }) {
  try {
    const { message } = yield genresApi.deleteGenres(payload);
    yield put(genresActions.deleteGenresSuccess(message));
    yield put(genresActions.getAllGenresRequest());
    toastSuccess(message);
  } catch (error) {
    yield put(genresActions.deleteGenresFailure(error));
    toastError("Something went wrong");
  }
}

const genresSaga = [
  takeEvery(types.genresTypes.GET_ALL_GENRES_REQUEST, handleGetAllGenres),
  takeEvery(types.genresTypes.ADD_GENRES_REQUEST, handleAddGenres),
  takeEvery(types.genresTypes.UPDATE_GENRES_REQUEST, handleUpdateGenres),
  takeEvery(types.genresTypes.DELETE_GENRES_REQUEST, handleDeleteGenres),
];
export default genresSaga;
