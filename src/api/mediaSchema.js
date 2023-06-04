import { REST_API_METHOD as METHOD, BASE_URL } from "../utils/apiConfig";

const MEDIA_SCHEMA = {
  GET_MOVIE_SERIES: {
    url: `${BASE_URL}/media`,
    method: METHOD.GET,
  },
  LIKE_MOVIE_AND_SERIES: {
    url: `${BASE_URL}/media/like_movie`,
    method: METHOD.POST,
  },
  DELETE_LIKE_MOVIE_AND_SERIES: {
    url: `${BASE_URL}/media/delete_like_movie/movieId`,
    method: METHOD.POST,
  },
};

export default MEDIA_SCHEMA;
