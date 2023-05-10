import { useSelector, useDispatch } from "react-redux";
import { genresActions } from "../action/index";

const useGenres = () => {
  const dispatch = useDispatch();
  const genresList = useSelector((state) => state?.genres?.genresList);

  const getAllGenresRequest = () => {
    dispatch(genresActions.getAllGenresRequest());
  };
  const addGenresRequest = (req) => {
    dispatch(genresActions.addGenresRequest(req));
  };
  const updateGenresRequest = (req) => {
    dispatch(genresActions.updateGenresRequest(req));
  };
  const deleteGenresRequest = (req) => {
    dispatch(genresActions.deleteGenresRequest(req));
  };

  return {
    genresList,
    getAllGenresRequest,
    addGenresRequest,
    updateGenresRequest,
    deleteGenresRequest,
  };
};

export default useGenres;
