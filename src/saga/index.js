import { all } from "redux-saga/effects";
import genresSaga from "./genresSaga";
import movieSaga from "./movieSaga";
import seriesSaga from "./seriesSaga";
import mediaSaga from "./mediaSaga";
import userSaga from "./userSaga";

export default function* rootSaga() {
  yield all([
    ...userSaga,
    ...genresSaga,
    ...movieSaga,
    ...seriesSaga,
    ...mediaSaga,
  ]);
}
