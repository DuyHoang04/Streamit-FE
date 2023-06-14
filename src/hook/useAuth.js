import { useDispatch, useSelector } from "react-redux";
import { authActions } from "../action";
import Cookies from "js-cookie";

const useAuth = () => {
  const dispatch = useDispatch();
  const accessToken = Cookies.get("access_token") || "";
  const refreshToken = Cookies.get("refresh_token") || "";
  const keyResetPass = useSelector((state) => state.auth.keyResetPass);

  const registerRequest = (req) => {
    dispatch(authActions.registerRequest(req));
  };
  const loginRequest = (req) => {
    dispatch(authActions.loginRequest(req));
  };
  const logOutRequest = (req) => {
    dispatch(authActions.logoutRequest(req));
  };
  const refreshTokenRequest = (req) => {
    dispatch(authActions.refreshTokenRequest(req));
  };
  const forgotPasswordRequest = (req) => {
    dispatch(authActions.forgotPasswordRequest(req));
  };
  const resetPasswordRequest = (req) => {
    dispatch(authActions.resetPasswordRequest(req));
  };

  return {
    accessToken,
    refreshToken,
    keyResetPass,
    registerRequest,
    loginRequest,
    logOutRequest,
    refreshTokenRequest,
    forgotPasswordRequest,
    resetPasswordRequest,
  };
};

export default useAuth;
