import { createApi } from "../utils/helper";
import authSchema from "./authSchema";
import genresSchema from "./genresSchema";
import movieSchema from "./movieSchema";
import seriesSchema from "./seriesSchema";
import mediaSchema from "./mediaSchema";
import userSchema from "./userSchema";

export const authApi = {
  Login: createApi(authSchema.LOGIN),
  Register: createApi(authSchema.REGISTER),
  LogOut: createApi(authSchema.LOGOUT),
  RefreshToken: createApi(authSchema.REFRESH_TOKEN),
};

export const genresApi = {
  getAllGenres: createApi(genresSchema.GET_ALL_GENRES),
  updateGenres: createApi(genresSchema.UPDATE_GENRES),
  addGenres: createApi(genresSchema.ADD_GENRES),
  deleteGenres: createApi(genresSchema.DELETE_GENRES),
};

export const movieApi = {
  addMovie: createApi(movieSchema.ADD_MOVIE),
  updateMovie: createApi(movieSchema.UPDATE_MOVIE),
  deleteMovie: createApi(movieSchema.DELETE_MOVIE),
  getAllMovie: createApi(movieSchema.GET_ALL_MOVIE),
  getDetailMovie: createApi(movieSchema.GET_DETAIL_MOVIE),
  commentMovie: createApi(movieSchema.COMMENT_MOVIE),
};

export const seriesApi = {
  addSeries: createApi(seriesSchema.ADD_SERIES),
  deleteEpisodeSeries: createApi(seriesSchema.DELETE_EPISODE),
  updateEpisodeSeries: createApi(seriesSchema.UPDATE_EPISODE),
  deleteSeries: createApi(seriesSchema.DELETE_SERIES),
  updateSeries: createApi(seriesSchema.UPDATE_SERIES),
  getAllSeries: createApi(seriesSchema.GET_ALL_SERIES),
  getDetailSeries: createApi(seriesSchema.GET_DETAIL_SERIES),
  commentSeries: createApi(seriesSchema.COMMENT_SERIES),
};

export const userApi = {
  getAllUser: createApi(userSchema.GET_ALL_USER),
  deleteUser: createApi(userSchema.DELETE_USER),
  updateUser: createApi(userSchema.UPDATE_USER),
};

export const mediaApi = {
  getMovieAndSeries: createApi(mediaSchema.GET_MOVIE_SERIES),
};
