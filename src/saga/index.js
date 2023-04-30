import { all } from "redux-saga/effects";
import Saga from "./userSaga";
import genresSaga from "./genresSaga";
import movieSaga from "./movieSaga";
import seriesSaga from "./seriesSaga";
import mediaSaga from "./mediaSaga";

export default function* rootSaga() {
  yield all([
    ...Saga,
    ...genresSaga,
    ...movieSaga,
    ...seriesSaga,
    ...mediaSaga,
  ]);
}
