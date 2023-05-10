import { REST_API_METHOD as METHOD, BASE_URL } from "../utils/apiConfig";

const GENRES_SCHEMA = {
  GET_ALL_GENRES: {
    url: `${BASE_URL}/genres`,
    method: METHOD.GET,
  },
  ADD_GENRES: {
    url: `${BASE_URL}/genres/add`,
    method: METHOD.POST,
  },
  UPDATE_GENRES: {
    url: `${BASE_URL}/genres/update/:genresId`,
    method: METHOD.PUT,
  },
  DELETE_GENRES: {
    url: `${BASE_URL}/genres/delete/:genresId`,
    method: METHOD.DELETE,
  },
};

export default GENRES_SCHEMA;
