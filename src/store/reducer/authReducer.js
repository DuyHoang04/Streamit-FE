import { authTypes } from "../../utils/actionTypes";

const initialState = {
  isFetching: false,
  keyResetPass: null,
  error: null,
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case authTypes.REGISTER_REQUEST:
    case authTypes.LOGIN_REQUEST:
    case authTypes.LOGOUT_REQUEST:
    case authTypes.REFRESH_TOKEN_REQUEST:
    case authTypes.FORGOT_PASSWORD_REQUEST:
    case authTypes.RESET_PASSWORD_REQUEST:
      return {
        ...state,
        isFetching: true,
      };
    case authTypes.REGISTER_SUCCESS:
    case authTypes.LOGIN_SUCCESS:
    case authTypes.LOGOUT_REQUEST:
    case authTypes.REFRESH_TOKEN_SUCCESS:
    case authTypes.RESET_PASSWORD_SUCCESS:
      return {
        ...state,
        isFetching: false,
      };

    case authTypes.FORGOT_PASSWORD_SUCCESS:
      return {
        ...state,
        isFetching: false,
        keyResetPass: action.payload,
      };
    case authTypes.REGISTER_FAILURE:
    case authTypes.LOGIN_FAILURE:
    case authTypes.REFRESH_TOKEN_FAILURE:
    case authTypes.FORGOT_PASSWORD_FAILURE:
    case authTypes.RESET_PASSWORD_FAILURE:
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
