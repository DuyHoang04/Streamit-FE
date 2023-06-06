import { useSelector, useDispatch } from "react-redux";

import { userActions } from "../action";

const useUser = () => {
  const dispatch = useDispatch();
  const userList = useSelector((state) => state.users.userList);
  const likeMovies = useSelector((state) => state.users.likeMovies);
  const userInfo = useSelector((state) => state.users.userInfo);

  const getAllUserRequest = () => {
    dispatch(userActions.getAllUserRequest());
  };
  const updateUserRequest = (req) => {
    dispatch(userActions.updateUserRequest(req));
  };
  const deleteUserRequest = (req) => {
    dispatch(userActions.deleteUserRequest(req));
  };

  const getLikedMovie = (req) => {
    dispatch(userActions.getLikedMovieUserRequest(req));
  };
  const getDetailUser = (req) => {
    dispatch(userActions.getDetailUserRequest(req));
  };
  const changePassUser = (req) => {
    dispatch(userActions.changePassUserRequest(req));
  };

  return {
    userList,
    likeMovies,
    userInfo,
    getAllUserRequest,
    updateUserRequest,
    deleteUserRequest,
    getLikedMovie,
    getDetailUser,
    changePassUser,
  };
};
export default useUser;
