import { REST_API_METHOD as METHOD, BASE_URL } from "../utils/apiConfig";

const SERIES_SCHEMA = {
  ADD_SERIES: {
    url: `${BASE_URL}/series/add`,
    method: METHOD.POST,
  },
};

export default SERIES_SCHEMA;
