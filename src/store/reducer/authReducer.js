import { authTypes } from "../../utils/actionTypes";

const initialState = {
  isFetching: false,
  error: null,
  isAdmin: false,
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case authTypes.REGISTER_REQUEST:
      return {
        ...state,
        isFetching: true,
      };
    case authTypes.REGISTER_SUCCESS:
      return {
        ...state,
        isFetching: false,
        isAdmin: action.payload,
      };

    case authTypes.REGISTER_FAILURE:
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
