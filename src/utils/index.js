import { toast } from "react-hot-toast";
import * as actionTypes from "./actionTypes";
import routes from "./routeconfig";

export const config = {
  routes,
};

export const getPriorityRole = (admin) => {
  return admin ? "Admin" : "User";
};

export const validateData = (data) => {
  for (let key in data) {
    const dataItem = data[key];
    if (!dataItem) {
      return false;
    }
  }
  return true;
};

export const toastSuccess = (message) => {
  return toast.success(message, {
    style: {
      border: "1px solid #713200",
      padding: "10px 40px",
    },
  });
};

export const toastError = (message) => {
  return toast.error(message, {
    style: {
      border: "1px solid #713200",
      padding: "10px 40px",
    },
  });
};

export const getMovieByGenres = (movieList) => {
  const uniqueGenres = {};

  movieList.forEach((movie) => {
    movie.genres.forEach((genre) => {
      const genreName = genre.name;
      if (!uniqueGenres[genreName]) {
        uniqueGenres[genreName] = [];
      }
      uniqueGenres[genreName].push(movie);
    });
  });

  const listMovieByGenres = Object.entries(uniqueGenres).map(
    ([name, movies]) => ({
      genres: name,
      movies,
    })
  );

  return listMovieByGenres;
};
