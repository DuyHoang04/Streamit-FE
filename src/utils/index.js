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

export const getRandomElements = (arr, count) => {
  // Tạo một bản sao của mảng để không làm thay đổi mảng gốc
  const copyArray = [...arr];
  const result = [];

  // Kiểm tra nếu số phần tử yêu cầu (n) lớn hơn số phần tử trong mảng (arr)
  // Thì chỉ lấy ngẫu nhiên các phần tử trong mảng (arr)
  const length = Math.min(count, arr.length);

  for (let i = 0; i < length; i++) {
    // Tạo một số ngẫu nhiên trong khoảng từ 0 đến độ dài của mảng còn lại
    const randomIndex = Math.floor(Math.random() * copyArray.length);

    // Lấy phần tử ngẫu nhiên từ mảng và đẩy vào mảng kết quả
    const randomElement = copyArray.splice(randomIndex, 1)[0];
    result.push(randomElement);
  }

  return result;
};
