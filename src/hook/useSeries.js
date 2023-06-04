import { useSelector, useDispatch } from "react-redux";
import { seriesActions } from "../action";

const useSeries = () => {
  const dispatch = useDispatch();

  const seriesMovieList = useSelector((state) => state.series.seriesList);
  const seriesInfo = useSelector((state) => state.series.seriesInfo);

  const addSeriesMovieRequest = (req) => {
    dispatch(seriesActions.addSeriesRequest(req));
  };
  const updateEpisodeRequest = (req) => {
    dispatch(seriesActions.updateEpisodeSeriesRequest(req));
  };
  const deleteEpisodeRequest = (req) => {
    dispatch(seriesActions.deleteEpisodeSeriesRequest(req));
  };
  const deleteSeriesRequest = (req) => {
    dispatch(seriesActions.deleteSeriesRequest(req));
  };
  const updateSeriesRequest = (req) => {
    dispatch(seriesActions.updateSeriesRequest(req));
  };
  const getAllSeriesRequest = (req) => {
    dispatch(seriesActions.getAllSeriesRequest(req));
  };
  const getDetailSeriesRequest = (req) => {
    dispatch(seriesActions.getDetailSeriesRequest(req));
  };
  const commentSeriesRequest = (req) => {
    dispatch(seriesActions.commentSeriesRequest(req));
  };
  const likeSeriesRequest = (req) => {
    dispatch(seriesActions.likeSeriesRequest(req));
  };

  return {
    seriesMovieList,
    seriesInfo,
    addSeriesMovieRequest,
    updateEpisodeRequest,
    deleteEpisodeRequest,
    deleteSeriesRequest,
    updateSeriesRequest,
    getAllSeriesRequest,
    getDetailSeriesRequest,
    commentSeriesRequest,
    likeSeriesRequest,
  };
};

export default useSeries;
