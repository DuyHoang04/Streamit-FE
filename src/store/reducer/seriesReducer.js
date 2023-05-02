import { seriesTypes } from "../../utils/actionTypes";

const initialState = {
  isFetching: false,
  seriesList: [],
  error: null,
};

const seriesReducer = (state = initialState, action) => {
  switch (action.type) {
    case seriesTypes.ADD_SERIES_REQUEST:
    case seriesTypes.DELETE_EPISODE_SERIES_REQUEST:
    case seriesTypes.UPDATE_EPISODE_SERIES_REQUEST:
      return {
        ...state,
        isFetching: true,
      };
    case seriesTypes.ADD_SERIES_SUCCESS:
    case seriesTypes.DELETE_EPISODE_SERIES_SUCCESS:
    case seriesTypes.UPDATE_EPISODE_SERIES_SUCCESS:
      return {
        ...state,
        isFetching: false,
      };
    case seriesTypes.ADD_SERIES_FAILURE:
    case seriesTypes.DELETE_EPISODE_SERIES_FAILURE:
    case seriesTypes.UPDATE_EPISODE_SERIES_FAILURE:
      return {
        ...state,
        isFetching: true,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default seriesReducer;