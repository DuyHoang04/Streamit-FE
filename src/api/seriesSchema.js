import { REST_API_METHOD as METHOD, BASE_URL } from "../utils/apiConfig";

const SERIES_SCHEMA = {
  ADD_SERIES: {
    url: `${BASE_URL}/series/add`,
    method: METHOD.POST,
  },
  UPDATE_EPISODE: {
    url: `${BASE_URL}/series/update-episode/:seriesId`,
    method: METHOD.PUT,
  },
  DELETE_EPISODE: {
    url: `${BASE_URL}/series/delete-episode/:seriesId`,
    method: METHOD.PUT,
  },
};

export default SERIES_SCHEMA;
