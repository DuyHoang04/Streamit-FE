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

  return {
    registerRequest,
    loginRequest,
    accessToken,
  };
};

export default useAuth;
