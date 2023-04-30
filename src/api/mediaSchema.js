import { REST_API_METHOD as METHOD, BASE_URL } from "../utils/apiConfig";

const MEDIA_SCHEMA = {
  GET_MOVIE_SERIES: {
    url: `${BASE_URL}/media`,
    method: METHOD.GET,
  },
};

export default MEDIA_SCHEMA;
