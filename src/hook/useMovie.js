import { useSelector, useDispatch } from "react-redux";
import { movieActions } from "../action";

const useMovie = () => {
  const dispatch = useDispatch();

  const movieList = useSelector((state) => state?.movies?.movieList);

  const addMovieRequest = (req) => {
    dispatch(movieActions.addMovieRequest(req));
  };
  const getAllMovieRequest = () => {
    dispatch(movieActions.getAllMovieRequest());
  };

  const updateMovieRequest = (req) => {
    dispatch(movieActions.updateMovieRequest(req));
  };
  const deleteMovieRequest = (req) => {
    dispatch(movieActions.deleteMovieRequest(req));
  };

  return {
    movieList,
    addMovieRequest,
    updateMovieRequest,
    deleteMovieRequest,
    getAllMovieRequest,
  };
};

export default useMovie;
