import { movieTypes } from "../../utils/actionTypes";

const initialState = {
  isFetching: false,
  movieList: [],
  error: null,
};

const movieReducer = (state = initialState, action) => {
  switch (action.type) {
    case movieTypes.ADD_MOVIE_REQUEST:
    case movieTypes.UPDATE_MOVIE_REQUEST:
      return {
        ...state,
        isFetching: true,
      };
    case movieTypes.ADD_MOVIE_SUCCESS:
    case movieTypes.UPDATE_MOVIE_SUCCESS:
      return {
        ...state,
        isFetching: false,
      };
    case movieTypes.ADD_MOVIE_FAILURE:
    case movieTypes.UPDATE_MOVIE_FAILURE:
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
