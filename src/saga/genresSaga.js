import { put, takeEvery } from "redux-saga/effects";
import * as types from "../utils/actionTypes/index";
import { genresApi } from "../api/index";
import { genresActions } from "../action/index";

function* handleGetAllGenres() {
  try {
    console.log("Vo");
    const { data } = yield genresApi.getAllGenres();
    yield put(genresActions.getAllGenresSuccess(data));
  } catch (error) {
    yield put(genresActions.getAllGenresFailure(error));
  }
}

const genresSaga = [
  takeEvery(types.genresTypes.GET_ALL_GENRES_REQUEST, handleGetAllGenres),
];
export default genresSaga;
