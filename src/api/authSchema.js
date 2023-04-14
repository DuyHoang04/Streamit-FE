import { REST_API_METHOD as METHOD, BASE_URL } from "../utils/apiConfig";

const AUTH_SCHEMA = {
  LOGIN: {
    url: `${BASE_URL}/auth/login`,
    method: METHOD.POST,
  },
  REGISTER: {
    url: `${BASE_URL}/auth/register`,
    method: METHOD.POST,
  },
  LOGOUT: {
    url: `${BASE_URL}/auth/logOut`,
    method: METHOD.POST,
  },
  REFRESH_TOKEN: {
    url: `${BASE_URL}/auth/refreshToken`,
    method: METHOD.POST,
  },
};

export default AUTH_SCHEMA;
