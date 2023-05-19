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
};

export default USER_SCHEMA;
