import { authTypes } from "../../utils/actionTypes";

const initialState = {
  isFetching: false,
  error: null,
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case authTypes.REGISTER_REQUEST:
    case authTypes.LOGIN_REQUEST:
    case authTypes.LOGOUT_REQUEST:
      return {
        ...state,
        isFetching: true,
      };
    case authTypes.REGISTER_SUCCESS:
    case authTypes.LOGIN_SUCCESS:
    case authTypes.LOGOUT_REQUEST:
      return {
        ...state,
        isFetching: false,
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
