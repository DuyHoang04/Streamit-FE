import { REST_API_METHOD as METHOD, BASE_URL } from "../utils/apiConfig";

const USER_SCHEMA = {
  GET_ALL_USER: {
    url: `${BASE_URL}/users`,
    method: METHOD.GET,
  },
  UPDATE_USER: {
    url: `${BASE_URL}/users/update/:userId`,
    method: METHOD.PUT,
  },
  DELETE_USER: {
    url: `${BASE_URL}/users/delete/:userId`,
    method: METHOD.DELETE,
  },
  GET_LIKED_MOVIE: {
    url: `${BASE_URL}/users/find/like_movie`,
    method: METHOD.GET,
  },
  GET_DETAIL_USER: {
    url: `${BASE_URL}/users/find`,
    method: METHOD.GET,
  },
};

export default USER_SCHEMA;
