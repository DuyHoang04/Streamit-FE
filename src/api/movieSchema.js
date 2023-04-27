import { REST_API_METHOD as METHOD, BASE_URL } from "../utils/apiConfig";

const MOVIE_SCHEMA = {
  ADD_MOVIE: {
    url: `${BASE_URL}/movies/add`,
    method: METHOD.POST,
  },
};

export default MOVIE_SCHEMA;