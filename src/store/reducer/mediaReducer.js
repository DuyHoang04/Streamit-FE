import { mediaTypes } from "../../utils/actionTypes";

const initialState = {
  isFetching: false,
  mediaList: [],
  error: null,
};

const mediaReducer = (state = initialState, action) => {
  switch (action.type) {
    case mediaTypes.GET_MOVIE_AND_SERIES_REQUEST:
      return {
        ...state,
        isFetching: true,
      };
    case mediaTypes.GET_MOVIE_AND_SERIES_SUCCESS:
      return {
        ...state,
        isFetching: false,
        mediaList: action.payload,
      };
    case mediaTypes.GET_MOVIE_AND_SERIES_FAILURE:
      return {
        ...state,
        isFetching: true,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default mediaReducer;
