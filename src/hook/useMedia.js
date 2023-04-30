import { useSelector, useDispatch } from "react-redux";
import { mediaActions } from "../action/index";

const useMedia = () => {
  const dispatch = useDispatch();
  const mediaList = useSelector((state) => state.media.mediaList);

  const getMovieAndSeries = () => {
    dispatch(mediaActions.getMovieAndSeriesRequest());
  };

  return {
    mediaList,
    getMovieAndSeries,
  };
};

export default useMedia;
