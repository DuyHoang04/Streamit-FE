import { useDispatch } from "react-redux";
import { authActions } from "../action";
import Cookies from "js-cookie";
import useSelection from "antd/es/table/hooks/useSelection";

const useAuth = () => {
  const dispatch = useDispatch();
  const accessToken = Cookies.get("access_token") || "";

  const registerRequest = (req) => {
    dispatch(authActions.registerRequest(req));
  };
  const loginRequest = (req) => {
    dispatch(authActions.loginRequest(req));
  };
  const logOutRequest = (req) => {
    dispatch(authActions.logoutRequest(req));
  };

  return {
    accessToken,
    registerRequest,
    loginRequest,
    logOutRequest,
  };
};

export default useAuth;
