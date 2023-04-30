import { useSelector, useDispatch } from "react-redux";
import { movieActions } from "../action";

const useMovie = () => {
  const dispatch = useDispatch();

  const movieList = useSelector((state) => state?.movies?.movieList);

  const addMovieRequest = (req) => {
    dispatch(movieActions.addMovieRequest(req));
  };

  const updateMovieRequest = (req) => {
    dispatch(movieActions.updateMovieRequest(req));
  };

  return {
    movieList,
    addMovieRequest,
    updateMovieRequest,
  };
};

export default useMovie;
