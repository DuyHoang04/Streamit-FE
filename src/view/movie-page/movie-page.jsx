import React, { useEffect, useState } from "react";
import useMovie from "../../hook/useMovie";
import Loader from "../../common/loader/Loader";
import { getMovieByGenres } from "../../utils";
import { RightOutlined, LeftOutlined } from "@ant-design/icons";
import CardMovie from "../../components/card_movie/card_movie";
import "./movie-page.scss";
import Banner from "../../assets/banner.jpg";
import { Link } from "react-router-dom";

const MoviePage = () => {
  const { getAllMovieRequest, movieList } = useMovie();
  const newMovieList = getMovieByGenres(movieList);
  const [isMobile, setIsMobile] = useState(window.innerWidth);
  const [currentPositions, setCurrentPositions] = useState({});

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
    const fetchData = async () => {
      getAllMovieRequest({});
    };
    fetchData();
  }, []);

  useEffect(() => {
    // Kiểm tra xem movieList đã được tải về chưa
    if (movieList.length > 0) {
      const initialPositions = newMovieList.reduce((acc, item) => {
        return { ...acc, [item.genres]: 0 };
      }, {});
      setCurrentPositions(initialPositions);
    }
  }, [movieList]);

  const handleNext = (genres, movieListLength) => {
    const currentPosition = currentPositions[genres];
    if (currentPosition < movieListLength - 4) {
      setCurrentPositions((prevPositions) => ({
        ...prevPositions,
        [genres]: currentPosition + 1,
      }));
    }
  };
  const handlePrev = (genres) => {
    const currentPosition = currentPositions[genres];
    if (currentPosition > 0) {
      setCurrentPositions((prevPositions) => ({
        ...prevPositions,
        [genres]: currentPosition - 1,
      }));
    }
  };

  return (
    <div className="movies">
      {newMovieList.length > 0 ? (
        <>
          <div className="movieList_banner">
            <img src={Banner} alt="Banner" />
            <h1 className="title">Movie</h1>
          </div>
          <div className="movieList_container">
            {newMovieList.map((item, index) => (
              <div className="movie_item" key={index}>
                <div className="genres_title">
                  <h1>{item.genres}</h1>
                  <Link to={`/view_movie_by_genres/${item.genres}`}>
                    <h2 className="genres_view">View All</h2>
                  </Link>
                </div>
                <div className="cardMovie_container">
                  {currentPositions[item.genres] > 0 && (
                    <div
                      className="btn_prev"
                      onClick={() => handlePrev(item.genres)}
                    >
                      <div className="icon">
                        <LeftOutlined />
                      </div>
                    </div>
                  )}
                  <div
                    className="slider-track"
                    style={{
                      transform: `translateX(-${
                        currentPositions[item.genres] * 360
                      }px)`,
                    }}
                  >
                    {item.movies.map((movie, index) => (
                      <div className="card_movie">
                        <CardMovie
                          movie={movie}
                          key={movie._id}
                          index={index}
                        />
                      </div>
                    ))}
                  </div>
                  {currentPositions[item.genres] < item.movies.length - 4 && (
                    <div
                      className="btn_next"
                      onClick={() =>
                        handleNext(item.genres, item.movies.length)
                      }
                    >
                      <div className="icon">
                        <RightOutlined />
                      </div>
                    </div>
                  )}
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

export default MoviePage;
