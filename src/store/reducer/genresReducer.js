import { genresTypes } from "../../utils/actionTypes";

const initialState = {
  isFetching: false,
  genresList: [],
  error: null,
};

const genresReducer = (state = initialState, action) => {
  switch (action.type) {
    case genresTypes.GET_ALL_GENRES_REQUEST:
      return {
        ...state,
        isFetching: true,
      };
    case genresTypes.GET_ALL_GENRES_SUCCESS:
      return {
        ...state,
        isFetching: false,
        genresList: action.payload,
      };
    case genresTypes.GET_ALL_GENRES_FAILURE:
      return {
        ...state,
        isFetching: true,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default genresReducer;
