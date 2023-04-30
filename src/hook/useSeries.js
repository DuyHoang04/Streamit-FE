import { useSelector, useDispatch } from "react-redux";
import { seriesActions } from "../action";

const useSeries = () => {
  const dispatch = useDispatch();

  const seriesMovieList = useSelector((state) => state.series.seriesList);

  const addSeriesMovieRequest = (req) => {
    dispatch(seriesActions.addSeriesRequest(req));
  };

  return {
    seriesMovieList,
    addSeriesMovieRequest,
  };
};

export default useSeries;
