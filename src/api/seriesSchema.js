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
  DELETE_SERIES: {
    url: `${BASE_URL}/series/delete/:seriesId`,
    method: METHOD.DELETE,
  },
  UPDATE_SERIES: {
    url: `${BASE_URL}/series/update/:seriesId`,
    method: METHOD.PUT,
  },
  GET_ALL_SERIES: {
    url: `${BASE_URL}/series`,
    method: METHOD.GET,
  },
  GET_DETAIL_SERIES: {
    url: `${BASE_URL}/series/find/:seriesId`,
    method: METHOD.GET,
  },

  COMMENT_SERIES: {
    url: `${BASE_URL}/series/review/:seriesId`,
    method: METHOD.POST,
  },
};

export default SERIES_SCHEMA;
