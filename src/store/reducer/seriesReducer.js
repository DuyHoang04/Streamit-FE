import { seriesTypes } from "../../utils/actionTypes";

const initialState = {
  isFetching: false,
  seriesList: [],
  seriesInfo: {},
  error: null,
};

const seriesReducer = (state = initialState, action) => {
  switch (action.type) {
    case seriesTypes.ADD_SERIES_REQUEST:
    case seriesTypes.DELETE_EPISODE_SERIES_REQUEST:
    case seriesTypes.UPDATE_EPISODE_SERIES_REQUEST:
    case seriesTypes.DELETE_SERIES_REQUEST:
    case seriesTypes.UPDATE_SERIES_REQUEST:
    case seriesTypes.GET_ALL_SERIES_REQUEST:
    case seriesTypes.GET_DETAIL_SERIES_REQUEST:
    case seriesTypes.COMMENT_SERIES_REQUEST:
      return {
        ...state,
        isFetching: true,
      };
    case seriesTypes.ADD_SERIES_SUCCESS:
    case seriesTypes.DELETE_EPISODE_SERIES_SUCCESS:
    case seriesTypes.UPDATE_EPISODE_SERIES_SUCCESS:
    case seriesTypes.DELETE_SERIES_SUCCESS:
    case seriesTypes.UPDATE_SERIES_SUCCESS:
    case seriesTypes.COMMENT_SERIES_SUCCESS:
      return {
        ...state,
        isFetching: false,
      };
    case seriesTypes.GET_ALL_SERIES_SUCCESS:
      return {
        ...state,
        isFetching: false,
        seriesList: action.payload,
      };
    case seriesTypes.GET_DETAIL_SERIES_SUCCESS:
      return {
        ...state,
        isFetching: false,
        seriesInfo: action.payload,
      };

    case seriesTypes.ADD_SERIES_FAILURE:
    case seriesTypes.DELETE_EPISODE_SERIES_FAILURE:
    case seriesTypes.UPDATE_EPISODE_SERIES_FAILURE:
    case seriesTypes.DELETE_SERIES_FAILURE:
    case seriesTypes.UPDATE_SERIES_FAILURE:
    case seriesTypes.GET_ALL_SERIES_FAILURE:
    case seriesTypes.GET_DETAIL_SERIES_FAILURE:
    case seriesTypes.COMMENT_SERIES_FAILURE:
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
