import React, { useEffect, useState } from "react";
import useSeries from "../../hook/useSeries";
import "./tv_show.scss";
import { getMovieByGenres } from "../../utils";
import Loader from "../../common/loader/Loader";
import Banner from "../../assets/banner.jpg";
import CardMovie from "../../components/card_movie/card_movie";
import { RightOutlined, LeftOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";

const TvShowPage = () => {
  const { getAllSeriesRequest, seriesMovieList } = useSeries();
  const newSeriesMovieList = getMovieByGenres(seriesMovieList);
  const [currentPositions, setCurrentPositions] = useState({});

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
    const fetchData = async () => {
      await getAllSeriesRequest({});
    };
    fetchData();
  }, []);

  useEffect(() => {
    // Kiểm tra xem movieList đã được tải về chưa
    if (seriesMovieList.length > 0) {
      const initialPositions = newSeriesMovieList.reduce((acc, item) => {
        return { ...acc, [item.genres]: 0 };
      }, {});
      setCurrentPositions(initialPositions);
    }
  }, [seriesMovieList]);

  const handlePrev = (genres) => {
    const currentPosition = currentPositions[genres];
    if (currentPosition > 0) {
      setCurrentPositions((prevPositions) => ({
        ...prevPositions,
        [genres]: currentPosition - 1,
      }));
    }
  };

  const handleNext = (genres, movieListLength) => {
    const currentPosition = currentPositions[genres];
    if (currentPosition < movieListLength - 4) {
      setCurrentPositions((prevPositions) => ({
        ...prevPositions,
        [genres]: currentPosition + 1,
      }));
    }
  };

  return (
    <div className="tvShow_page">
      {newSeriesMovieList.length > 0 ? (
        <>
          <div className="tvShow_banner">
            <img src={Banner} alt="" />
            <h1 className="title">Tv-Show</h1>
          </div>
          <div className="tvShow_list_container">
            {newSeriesMovieList.map((item, index) => (
              <div className="tvShow_item">
                <div className="genres_title">
                  <h1>{item.genres}</h1>
                  <Link
                    to={`/view_movie_by_genres/${item.genres}?isSeries=true`}
                  >
                    <h2 className="genres_view">View All</h2>
                  </Link>
                </div>
                <div className="cardTvShow_container">
                  <div
                    className="btn_prev"
                    onClick={() => handlePrev(item.genres)}
                  >
                    <div className="icon">
                      <LeftOutlined />
                    </div>
                  </div>
                  <div
                    className="slider-track"
                    style={{
                      transform: `translateX(-${
                        currentPositions[item.genres] * 360
                      }px)`,
                    }}
                  >
                    {item.movies.map((movie) => (
                      <div className="card_tvShow" key={movie._id}>
                        <CardMovie movie={movie} />
                      </div>
                    ))}
                  </div>
                  <div
                    className="btn_next"
                    onClick={() => handleNext(item.genres, item.movies.length)}
                  >
                    <div className="icon">
                      <RightOutlined />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </>
      ) : (
        <Loader />
      )}
    </div>
  );
};

export default TvShowPage;
