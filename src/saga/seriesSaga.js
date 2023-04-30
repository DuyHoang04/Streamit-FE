import { put, takeEvery } from "redux-saga/effects";
import * as types from "../utils/actionTypes/index";
import { seriesApi } from "../api/index";
import { seriesActions } from "../action/index";
import { toastError, toastSuccess } from "../utils";

function* handleAddSeriesMovie({ payload }) {
  try {
    const { message } = yield seriesApi.addSeries(payload);
    yield put(seriesActions.addSeriesSuccess());
    toastSuccess(message);
  } catch (error) {
    yield put(seriesActions.addSeriesFailure(error));
    toastError("Something went wrong");
  }
}

const seriesSaga = [
  takeEvery(types.seriesTypes.ADD_SERIES_REQUEST, handleAddSeriesMovie),
];
export default seriesSaga;
