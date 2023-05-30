import { useDispatch } from "react-redux";
import { authActions } from "../action";

const useAuth = () => {
  const dispatch = useDispatch();

  const registerRequest = (req) => {
    dispatch(authActions.registerRequest(req));
  };
  const loginRequest = (req) => {
    dispatch(authActions.loginRequest(req));
  };

  return {
    registerRequest,
    loginRequest,
  };
};

export default useAuth;
