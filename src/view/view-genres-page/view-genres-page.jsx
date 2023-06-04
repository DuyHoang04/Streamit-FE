import React, { useEffect } from "react";
import "./view-genres-page.scss";
import queryString from "query-string";
import { useLocation, useParams } from "react-router-dom";
import useMovie from "../../hook/useMovie";
import Loader from "../../common/loader/Loader";
import Banner from "../../assets/banner.jpg";
import CardMovie from "../../components/card_movie/card_movie";
import useSeries from "../../hook/useSeries";

const ViewGenresPage = () => {
  const { genres_name } = useParams();
  const queryParams = queryString.parse(useLocation().search);
  const isSeries = queryParams?.isSeries === "true";
  const { getAllMovieRequest, movieList } = useMovie();
  const { getAllSeriesRequest, seriesMovieList } = useSeries();
  const dataMovie = isSeries ? seriesMovieList : movieList;

  useEffect(() => {
    const fetchData = async () => {
      const req = {
        queries: {
          genres: genres_name,
        },
      };
      if (isSeries) {
        await getAllSeriesRequest(req);
      } else {
        await getAllMovieRequest(req);
      }
    };
    fetchData();
  }, []);

  return (
    <div className="view-genres-page">
      {dataMovie.length > 0 ? (
        <>
          <div className="view_banner">
            <img src={Banner} alt="Banner" />
            <h1 className="title">{genres_name}</h1>
          </div>
          <div className="countMovie">
            {" "}
            <span>{dataMovie.length}</span> Result:
          </div>
          <div className="viewMovie_container">
            {dataMovie.map((movie) => (
              <CardMovie movie={movie} key={movie._id} />
            ))}
          </div>
        </>
      ) : (
        <Loader />
      )}
    </div>
  );
};

export default ViewGenresPage;
