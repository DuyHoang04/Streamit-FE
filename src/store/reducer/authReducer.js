import { authTypes } from "../../utils/actionTypes";

const initialState = {
  isFetching: false,
  error: null,
  isAdmin: false,
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case authTypes.REGISTER_REQUEST:
    case authTypes.LOGIN_REQUEST:
      return {
        ...state,
        isFetching: true,
      };
    case authTypes.REGISTER_SUCCESS:
    case authTypes.LOGIN_SUCCESS:
      return {
        ...state,
        isFetching: false,
        isAdmin: action.payload,
      };

    case authTypes.REGISTER_FAILURE:
    case authTypes.LOGIN_FAILURE:
      return {
        ...state,
        isFetching: true,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default authReducer;
