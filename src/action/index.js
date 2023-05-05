import { createAction } from "@reduxjs/toolkit";
import {
  authTypes,
  userTypes,
  genresTypes,
  movieTypes,
  seriesTypes,
  mediaTypes,
} from "../utils/actionTypes/index";

export const authActions = {
  loginRequest: createAction(authTypes.LOGIN_REQUEST),
  loginSuccess: createAction(authTypes.LOGIN_SUCCESS),
  loginFailure: createAction(authTypes.LOGIN_FAILURE),
  logoutRequest: createAction(authTypes.LOGOUT_REQUEST),
  logoutSuccess: createAction(authTypes.LOGOUT_SUCCESS),
  logoutFailure: createAction(authTypes.LOGOUT_FAILURE),
  registerRequest: createAction(authTypes.REGISTER_REQUEST),
  registerSuccess: createAction(authTypes.REGISTER_SUCCESS),
  registerFailure: createAction(authTypes.REGISTER_FAILURE),
};

export const itemActions = {
  fetchListRequest: createAction(userTypes),
  fetchListSuccess: createAction(userTypes),
  fetchListFailure: createAction(userTypes),
};

export const genresActions = {
  getAllGenresRequest: createAction(genresTypes.GET_ALL_GENRES_REQUEST),
  getAllGenresSuccess: createAction(genresTypes.GET_ALL_GENRES_SUCCESS),
  getAllGenresFailure: createAction(genresTypes.GET_ALL_GENRES_FAILURE),
  addGenresRequest: createAction(genresTypes.ADD_GENRES_REQUEST),
  addGenresSuccess: createAction(genresTypes.ADD_GENRES_SUCCESS),
  addGenresFailure: createAction(genresTypes.ADD_GENRES_FAILURE),
  updateGenresRequest: createAction(genresTypes.UPDATE_GENRES_REQUEST),
  updateGenresSuccess: createAction(genresTypes.UPDATE_GENRES_SUCCESS),
  updateGenresFailure: createAction(genresTypes.UPDATE_GENRES_FAILURE),
};

export const movieActions = {
  getAllMovieRequest: createAction(movieTypes.GET_ALL_MOVIE_REQUEST),
  getAllMovieSuccess: createAction(movieTypes.GET_ALL_MOVIE_SUCCESS),
  getAllMovieFailure: createAction(movieTypes.GET_ALL_MOVIE_FAILURE),
  addMovieRequest: createAction(movieTypes.ADD_MOVIE_REQUEST),
  addMovieSuccess: createAction(movieTypes.ADD_MOVIE_SUCCESS),
  addMovieFailure: createAction(movieTypes.ADD_MOVIE_FAILURE),
  updateMovieRequest: createAction(movieTypes.UPDATE_MOVIE_REQUEST),
  updateMovieSuccess: createAction(movieTypes.UPDATE_MOVIE_SUCCESS),
  updateMovieFailure: createAction(movieTypes.UPDATE_MOVIE_FAILURE),
  getDetailMovieRequest: createAction(movieTypes.GET_DETAIL_MOVIE_REQUEST),
  getDetailMovieSuccess: createAction(movieTypes.GET_DETAIL_MOVIE_SUCCESS),
  getDetailMovieFailure: createAction(movieTypes.GET_ALL_MOVIE_FAILURE),
  deleteMovieRequest: createAction(movieTypes.DELETE_MOVIE_REQUEST),
  deleteMovieSuccess: createAction(movieTypes.DELETE_MOVIE_SUCCESS),
  deleteMovieFailure: createAction(movieTypes.DELETE_MOVIE_FAILURE),
};

export const seriesActions = {
  // get
  getAllSeriesRequest: createAction(seriesTypes.GET_ALL_SERIES_REQUEST),
  getAllSeriesSuccess: createAction(seriesTypes.GET_ALL_SERIES_SUCCESS),
  getAllSeriesFailure: createAction(seriesTypes.GET_ALL_SERIES_FAILURE),
  // add
  addSeriesRequest: createAction(seriesTypes.ADD_SERIES_REQUEST),
  addSeriesSuccess: createAction(seriesTypes.ADD_SERIES_SUCCESS),
  addSeriesFailure: createAction(seriesTypes.ADD_SERIES_FAILURE),
  //update
  updateSeriesRequest: createAction(seriesTypes.UPDATE_SERIES_REQUEST),
  updateSeriesSuccess: createAction(seriesTypes.UPDATE_SERIES_SUCCESS),
  updateSeriesFailure: createAction(seriesTypes.UPDATE_SERIES_FAILURE),
  // get detail
  getDetailSeriesRequest: createAction(seriesTypes.GET_DETAIL_SERIES_REQUEST),
  getDetailSeriesSuccess: createAction(seriesTypes.GET_DETAIL_SERIES_SUCCESS),
  getDetailSeriesFailure: createAction(seriesTypes.GET_DETAIL_SERIES_FAILURE),
  //delete
  deleteSeriesRequest: createAction(seriesTypes.DELETE_SERIES_REQUEST),
  deleteSeriesSuccess: createAction(seriesTypes.DELETE_SERIES_SUCCESS),
  deleteSeriesFailure: createAction(seriesTypes.DELETE_SERIES_FAILURE),
  //delete episode
  deleteEpisodeSeriesRequest: createAction(
    seriesTypes.DELETE_EPISODE_SERIES_REQUEST
  ),
  deleteEpisodeSeriesSuccess: createAction(
    seriesTypes.DELETE_EPISODE_SERIES_SUCCESS
  ),
  deleteEpisodeSeriesFailure: createAction(
    seriesTypes.DELETE_EPISODE_SERIES_FAILURE
  ),
  //update episode
  updateEpisodeSeriesRequest: createAction(
    seriesTypes.UPDATE_EPISODE_SERIES_REQUEST
  ),
  updateEpisodeSeriesSuccess: createAction(
    seriesTypes.UPDATE_EPISODE_SERIES_SUCCESS
  ),
  updateEpisodeSeriesFailure: createAction(
    seriesTypes.UPDATE_EPISODE_SERIES_FAILURE
  ),
  updateSeriesRequest: createAction(seriesTypes.UPDATE_SERIES_REQUEST),
  updateSeriesSuccess: createAction(seriesTypes.UPDATE_SERIES_SUCCESS),
  updateSeriesFailure: createAction(seriesTypes.UPDATE_SERIES_FAILURE),
};

export const mediaActions = {
  getMovieAndSeriesRequest: createAction(
    mediaTypes.GET_MOVIE_AND_SERIES_REQUEST
  ),
  getMovieAndSeriesSuccess: createAction(
    mediaTypes.GET_MOVIE_AND_SERIES_SUCCESS
  ),
  getMovieAndSeriesFailure: createAction(
    mediaTypes.GET_MOVIE_AND_SERIES_FAILURE
  ),
};
