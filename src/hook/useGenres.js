import { useSelector, useDispatch } from "react-redux";
import { genresActions } from "../action/index";

const useGenres = () => {
  const dispatch = useDispatch();
  const genresList = useSelector((state) => state.genres.genresList);

  const getAllGenresRequest = () => {
    dispatch(genresActions.getAllGenresRequest());
  };

  return {
    genresList,
    getAllGenresRequest,
  };
};

export default useGenres;
