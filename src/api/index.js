import { createApi } from "../utils/helper";
import authSchema from "./authSchema";
import genresSchema from "./genresSchema";
import movieSchema from "./movieSchema";
import seriesSchema from "./seriesSchema";
import mediaSchema from "./mediaSchema";

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
};

export const seriesApi = {
  addSeries: createApi(seriesSchema.ADD_SERIES),
  deleteEpisodeSeries: createApi(seriesSchema.DELETE_EPISODE),
  updateEpisodeSeries: createApi(seriesSchema.UPDATE_EPISODE),
  deleteSeries: createApi(seriesSchema.DELETE_SERIES),
  updateSeries: createApi(seriesSchema.UPDATE_SERIES),
  getAllSeries: createApi(seriesSchema.GET_ALL_SERIES),
};

export const mediaApi = {
  getMovieAndSeries: createApi(mediaSchema.GET_MOVIE_SERIES),
};
