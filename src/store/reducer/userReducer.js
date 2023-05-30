import { userTypes } from "../../utils/actionTypes";

const initialState = {
  isFetching: false,
  userList: [],
  likeMovies: [],
  error: null,
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case userTypes.GET_ALL_USER_REQUEST:
    case userTypes.UPDATE_USER_REQUEST:
    case userTypes.DELETE_USER_REQUEST:
    case userTypes.GET_LIKED_MOVIE_TO_USER_REQUEST:
      return {
        ...state,
        isFetching: true,
      };
    case userTypes.GET_ALL_USER_SUCCESS:
      return {
        ...state,
        isFetching: false,
        userList: action.payload,
      };
    case userTypes.GET_LIKED_MOVIE_TO_USER_SUCCESS:
      return {
        ...state,
        isFetching: false,
        likeMovies: action.payload,
      };
    case userTypes.UPDATE_USER_SUCCESS:
    case userTypes.DELETE_USER_SUCCESS:
      return {
        ...state,
        isFetching: false,
      };
    case userTypes.GET_ALL_USER_FAILURE:
    case userTypes.UPDATE_USER_FAILURE:
    case userTypes.DELETE_USER_FAILURE:
    case userTypes.GET_LIKED_MOVIE_TO_USER_FAILURE:
      return {
        ...state,
        isFetching: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default userReducer;
