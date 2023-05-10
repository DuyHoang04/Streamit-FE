import { REST_API_METHOD as METHOD, BASE_URL } from "../utils/apiConfig";

const MOVIE_SCHEMA = {
  ADD_MOVIE: {
    url: `${BASE_URL}/movies/add`,
    method: METHOD.POST,
  },
  UPDATE_MOVIE: {
    url: `${BASE_URL}/movies/update/:movieId`,
    method: METHOD.PUT,
  },
  DELETE_MOVIE: {
    url: `${BASE_URL}/movies/delete/:movieId`,
    method: METHOD.DELETE,
  },
  GET_ALL_MOVIE: {
    url: `${BASE_URL}/movies`,
    method: METHOD.GET,
  },
};

export default MOVIE_SCHEMA;
