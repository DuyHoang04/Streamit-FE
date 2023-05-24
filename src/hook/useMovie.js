import { useSelector, useDispatch } from "react-redux";
import { movieActions } from "../action";

const useMovie = () => {
  const dispatch = useDispatch();

  const movieList = useSelector((state) => state?.movies?.movieList);
  const movieInfo = useSelector((state) => state?.movies?.movieInfo);
  const isFetching = useSelector((state) => state?.movies?.isFetching);

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
  const getDetailMovieRequest = (req) => {
    dispatch(movieActions.getDetailMovieRequest(req));
  };

  return {
    movieList,
    movieInfo,
    addMovieRequest,
    updateMovieRequest,
    deleteMovieRequest,
    getAllMovieRequest,
    getDetailMovieRequest,
  };
};

export default useMovie;
