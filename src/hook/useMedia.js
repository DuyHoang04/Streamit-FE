import { useSelector, useDispatch } from "react-redux";
import { mediaActions } from "../action/index";

const useMedia = () => {
  const dispatch = useDispatch();
  const mediaList = useSelector((state) => state.media.mediaList);

  const getMovieAndSeries = () => {
    dispatch(mediaActions.getMovieAndSeriesRequest());
  };
  const likeMovieAndSeries = (req) => {
    dispatch(mediaActions.likeMovieAndSeriesRequest(req));
  };
  const deleteLikeMovieAndSeries = (req) => {
    dispatch(mediaActions.deleteLikeMovieAndSeriesRequest(req));
  };

  return {
    mediaList,
    getMovieAndSeries,
    likeMovieAndSeries,
    deleteLikeMovieAndSeries,
  };
};

export default useMedia;
