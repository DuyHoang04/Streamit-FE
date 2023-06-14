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
  refreshTokenRequest: createAction(authTypes.REFRESH_TOKEN_REQUEST),
  refreshTokenSuccess: createAction(authTypes.REFRESH_TOKEN_SUCCESS),
  refreshTokenFailure: createAction(authTypes.REFRESH_TOKEN_FAILURE),
  forgotPasswordRequest: createAction(authTypes.FORGOT_PASSWORD_REQUEST),
  forgotPasswordSuccess: createAction(authTypes.FORGOT_PASSWORD_SUCCESS),
  forgotPasswordFailure: createAction(authTypes.FORGOT_PASSWORD_FAILURE),
  resetPasswordRequest: createAction(authTypes.RESET_PASSWORD_REQUEST),
  resetPasswordSuccess: createAction(authTypes.RESET_PASSWORD_SUCCESS),
  resetPasswordFailure: createAction(authTypes.RESET_PASSWORD_FAILURE),
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

  deleteGenresRequest: createAction(genresTypes.DELETE_GENRES_REQUEST),
  deleteGenresSuccess: createAction(genresTypes.DELETE_GENRES_SUCCESS),
  deleteGenresFailure: createAction(genresTypes.DELETE_GENRES_FAILURE),
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
  commentMovieRequest: createAction(movieTypes.COMMENT_MOVIE_REQUEST),
  commentMovieSuccess: createAction(movieTypes.COMMENT_MOVIE_SUCCESS),
  commentMovieFailure: createAction(movieTypes.COMMENT_MOVIE_FAILURE),
  likeMovieRequest: createAction(movieTypes.LIKE_MOVIE_REQUEST),
  likeMovieSuccess: createAction(movieTypes.LIKE_MOVIE_SUCCESS),
  likeMovieFailure: createAction(movieTypes.LIKE_MOVIE_FAILURE),
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

  commentSeriesRequest: createAction(seriesTypes.COMMENT_SERIES_REQUEST),
  commentSeriesSuccess: createAction(seriesTypes.COMMENT_SERIES_SUCCESS),
  commentSeriesFailure: createAction(seriesTypes.COMMENT_SERIES_FAILURE),

  likeSeriesRequest: createAction(seriesTypes.LIKE_SERIES_REQUEST),
  likeSeriesSuccess: createAction(seriesTypes.LIKE_SERIES_SUCCESS),
  likeSeriesFailure: createAction(seriesTypes.LIKE_SERIES_FAILURE),
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
  likeMovieAndSeriesRequest: createAction(
    mediaTypes.LIKE_MOVIE_AND_SERIES_REQUEST
  ),
  likeMovieAndSeriesSuccess: createAction(
    mediaTypes.LIKE_MOVIE_AND_SERIES_SUCCESS
  ),
  likeMovieAndSeriesFailure: createAction(
    mediaTypes.LIKE_MOVIE_AND_SERIES_FAILURE
  ),
  deleteLikeMovieAndSeriesRequest: createAction(
    mediaTypes.DELETE_LIKE_MOVIE_AND_SERIES_REQUEST
  ),
  deleteLikeMovieAndSeriesSuccess: createAction(
    mediaTypes.DELETE_LIKE_MOVIE_AND_SERIES_SUCCESS
  ),
  deleteLikeMovieAndSeriesFailure: createAction(
    mediaTypes.DELETE_LIKE_MOVIE_AND_SERIES_FAILURE
  ),
};

export const userActions = {
  getAllUserRequest: createAction(userTypes.GET_ALL_USER_REQUEST),
  getAllUserSuccess: createAction(userTypes.GET_ALL_USER_SUCCESS),
  getAllUserFailure: createAction(userTypes.GET_ALL_USER_FAILURE),
  updateUserRequest: createAction(userTypes.UPDATE_USER_REQUEST),
  updateUserSuccess: createAction(userTypes.UPDATE_USER_SUCCESS),
  updateUserFailure: createAction(userTypes.UPDATE_USER_FAILURE),
  deleteUserRequest: createAction(userTypes.DELETE_USER_REQUEST),
  deleteUserSuccess: createAction(userTypes.DELETE_USER_SUCCESS),
  deleteUserFailure: createAction(userTypes.DELETE_USER_FAILURE),
  getLikedMovieUserRequest: createAction(
    userTypes.GET_LIKED_MOVIE_TO_USER_REQUEST
  ),
  getLikedMovieUserSuccess: createAction(
    userTypes.GET_LIKED_MOVIE_TO_USER_SUCCESS
  ),
  getLikedMovieUserFailure: createAction(
    userTypes.GET_LIKED_MOVIE_TO_USER_FAILURE
  ),
  getDetailUserRequest: createAction(userTypes.DETAIL_USER_REQUEST),
  getDetailUserSuccess: createAction(userTypes.DETAIL_USER_SUCCESS),
  getDetailUserFailure: createAction(userTypes.DETAIL_USER_FAILURE),
  changePassUserRequest: createAction(userTypes.CHANGE_PASS_USER_REQUEST),
  changePassUserSuccess: createAction(userTypes.CHANGE_PASS_USER_SUCCESS),
  changePassUserFailure: createAction(userTypes.CHANGE_PASS_USER_FAILURE),
};
