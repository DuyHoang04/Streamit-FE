import { put, takeEvery } from "redux-saga/effects";
import * as types from "../utils/actionTypes/index";
import { seriesApi } from "../api/index";
import { mediaActions, seriesActions } from "../action/index";
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

function* handleDeleteEpisodeSeriesMovie({ payload }) {
  try {
    const { message } = yield seriesApi.deleteEpisodeSeries(payload);
    yield put(seriesActions.deleteEpisodeSeriesSuccess());
    yield put(mediaActions.getMovieAndSeriesRequest());
    toastSuccess(message);
  } catch (error) {
    yield put(seriesActions.deleteEpisodeSeriesFailure(error));
    toastError("Something went wrong");
  }
}

function* handleUpdateEpisodeSeriesMovie({ payload }) {
  try {
    const { message } = yield seriesApi.updateEpisodeSeries(payload);
    yield put(seriesActions.updateEpisodeSeriesSuccess());
    yield put(mediaActions.getMovieAndSeriesRequest({}));
    toastSuccess(message);
  } catch (error) {
    yield put(seriesActions.updateEpisodeSeriesFailure(error));
    toastError("Something went wrong");
  }
}

function* handleDeleteSeriesMovie({ payload }) {
  try {
    const { message } = yield seriesApi.deleteSeries(payload);
    yield put(seriesActions.deleteSeriesSuccess());
    yield put(mediaActions.getMovieAndSeriesRequest({}));
    toastSuccess(message);
  } catch (error) {
    yield put(seriesActions.deleteSeriesFailure(error));
    toastError("Something went wrong");
  }
}
function* handleUpdateSeriesMovie({ payload }) {
  try {
    const { message } = yield seriesApi.updateSeries(payload);
    yield put(seriesActions.updateSeriesSuccess());
    yield put(mediaActions.getMovieAndSeriesRequest({}));
    toastSuccess(message);
  } catch (error) {
    yield put(seriesActions.updateSeriesFailure(error));
    toastError("Something went wrong");
  }
}
function* handleGetAllSeriesMovie({ payload }) {
  try {
    const { data } = yield seriesApi.getAllSeries(payload);
    yield put(seriesActions.getAllSeriesSuccess(data));
  } catch (error) {
    yield put(seriesActions.getAllSeriesFailure(error));
    toastError("Something went wrong");
  }
}

function* handleGetDetailSeriesMovie({ payload }) {
  try {
    const { data } = yield seriesApi.getDetailSeries(payload);
    yield put(seriesActions.getDetailSeriesSuccess(data));
  } catch (error) {
    yield put(seriesActions.getDetailSeriesFailure(error));
    toastError("Something went wrong");
  }
}

function* handleCommentSeriesMovie({ payload }) {
  try {
    const seriesId = payload.paths.seriesId;
    const { message } = yield seriesApi.commentSeries(payload);
    yield put(seriesActions.commentSeriesSuccess());
    toastSuccess(message);
    yield put(seriesActions.getDetailSeriesRequest({ paths: { seriesId } }));
  } catch (error) {
    yield put(seriesActions.commentSeriesFailure(error));
    toastError("Something went wrong");
  }
}
function* handleLikeMovieSeriesMovie({ payload }) {
  try {
    const { message } = yield seriesApi.likeSeries(payload);
    yield put(seriesActions.likeSeriesSuccess());
    toastSuccess(message);
  } catch (error) {
    yield put(seriesActions.likeSeriesFailure(error));
    toastError("Something went wrong");
  }
}

const seriesSaga = [
  takeEvery(types.seriesTypes.ADD_SERIES_REQUEST, handleAddSeriesMovie),
  takeEvery(
    types.seriesTypes.DELETE_EPISODE_SERIES_REQUEST,
    handleDeleteEpisodeSeriesMovie
  ),
  takeEvery(
    types.seriesTypes.UPDATE_EPISODE_SERIES_REQUEST,
    handleUpdateEpisodeSeriesMovie
  ),
  takeEvery(types.seriesTypes.DELETE_SERIES_REQUEST, handleDeleteSeriesMovie),
  takeEvery(types.seriesTypes.UPDATE_SERIES_REQUEST, handleUpdateSeriesMovie),
  takeEvery(types.seriesTypes.GET_ALL_SERIES_REQUEST, handleGetAllSeriesMovie),
  takeEvery(
    types.seriesTypes.GET_DETAIL_SERIES_REQUEST,
    handleGetDetailSeriesMovie
  ),
  takeEvery(types.seriesTypes.COMMENT_SERIES_REQUEST, handleCommentSeriesMovie),
  takeEvery(types.seriesTypes.LIKE_SERIES_REQUEST, handleLikeMovieSeriesMovie),
];
export default seriesSaga;
