import React, { useEffect } from "react";
import "./view-genres-page.scss";
import queryString from "query-string";
import { useLocation, useParams } from "react-router-dom";
import useMovie from "../../hook/useMovie";
import Loader from "../../common/loader/Loader";
import Banner from "../../assets/banner.jpg";
import CardMovie from "../../components/card_movie/card_movie";
import useSeries from "../../hook/useSeries";
import useMedia from "../../hook/useMedia";

const ViewGenresPage = () => {
  const { genres_name } = useParams();
  const queryParams = queryString.parse(useLocation().search);
  const isSeries = queryParams?.isSeries === "true";
  const allMovie = queryParams.all === "true";
  const { getAllMovieRequest, movieList } = useMovie();
  const { getAllSeriesRequest, seriesMovieList } = useSeries();
  const { getMovieAndSeries, mediaList } = useMedia();

  const dataMovie = isSeries
    ? seriesMovieList
    : allMovie
    ? mediaList
    : movieList;

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
    const fetchData = async () => {
      const req = {
        queries: {
          genres: genres_name,
        },
      };
      if (isSeries) {
        await getAllSeriesRequest(req);
      } else {
        if (allMovie) {
          await getMovieAndSeries(req);
        } else {
          await getAllMovieRequest(req);
        }
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
            {dataMovie.map((movie, index) => (
              <CardMovie movie={movie} key={movie._id} index={index} />
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
