import { useSelector, useDispatch } from "react-redux";

import { userActions } from "../action";

const useUser = () => {
  const dispatch = useDispatch();
  const userList = useSelector((state) => state.users.userList);

  const getAllUserRequest = () => {
    dispatch(userActions.getAllUserRequest());
  };
  const updateUserRequest = (req) => {
    dispatch(userActions.updateUserRequest(req));
  };
  const deleteUserRequest = (req) => {
    dispatch(userActions.deleteUserRequest(req));
  };

  return { userList, getAllUserRequest, updateUserRequest, deleteUserRequest };
};
export default useUser;
