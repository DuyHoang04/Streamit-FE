import { all } from "redux-saga/effects";
import Saga from "./userSaga";
import genresSaga from "./genresSaga";

export default function* rootSaga() {
  yield all([...Saga, ...genresSaga]);
}
