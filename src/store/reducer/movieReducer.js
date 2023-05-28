import { movieTypes } from "../../utils/actionTypes";

const initialState = {
  isFetching: false,
  movieList: [],
  error: null,
  movieInfo: {},
};

const movieReducer = (state = initialState, action) => {
  switch (action.type) {
    case movieTypes.ADD_MOVIE_REQUEST:
    case movieTypes.GET_ALL_MOVIE_REQUEST:
    case movieTypes.UPDATE_MOVIE_REQUEST:
    case movieTypes.DELETE_MOVIE_REQUEST:
    case movieTypes.GET_DETAIL_MOVIE_REQUEST:
    case movieTypes.COMMENT_MOVIE_REQUEST:
      return {
        ...state,
        isFetching: true,
      };
    case movieTypes.ADD_MOVIE_SUCCESS:
    case movieTypes.UPDATE_MOVIE_SUCCESS:
    case movieTypes.DELETE_MOVIE_SUCCESS:
    case movieTypes.COMMENT_MOVIE_SUCCESS:
      return {
        ...state,
        isFetching: false,
      };
    case movieTypes.GET_ALL_MOVIE_SUCCESS:
      return {
        ...state,
        isFetching: false,
        movieList: action.payload,
      };
    case movieTypes.GET_DETAIL_MOVIE_SUCCESS:
      return {
        ...state,
        isFetching: false,
        movieInfo: action.payload,
      };
    case movieTypes.ADD_MOVIE_FAILURE:
    case movieTypes.UPDATE_MOVIE_FAILURE:
    case movieTypes.DELETE_MOVIE_FAILURE:
    case movieTypes.GET_ALL_MOVIE_REQUEST:
    case movieTypes.GET_DETAIL_MOVIE_FAILURE:
    case movieTypes.COMMENT_MOVIE_FAILURE:
      return {
        ...state,
        isFetching: true,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default movieReducer;
