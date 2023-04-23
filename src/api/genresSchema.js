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
    url: `${BASE_URL}/genres/update/:id`,
    method: METHOD.PUT,
  },
};

export default GENRES_SCHEMA;
