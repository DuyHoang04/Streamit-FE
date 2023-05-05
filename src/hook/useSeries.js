import { useSelector, useDispatch } from "react-redux";
import { seriesActions } from "../action";

const useSeries = () => {
  const dispatch = useDispatch();

  const seriesMovieList = useSelector((state) => state.series.seriesList);

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

  return {
    seriesMovieList,
    addSeriesMovieRequest,
    updateEpisodeRequest,
    deleteEpisodeRequest,
    deleteSeriesRequest,
    updateSeriesRequest,
  };
};

export default useSeries;
