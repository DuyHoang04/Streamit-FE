import React, { useEffect, useState } from "react";
import useMovie from "../../hook/useMovie";
import Loader from "../../common/loader/Loader";
import CardMovie from "../../components/card-movie/cart-movie";
import { getMovieByGenres } from "../../utils";
import { RightOutlined, LeftOutlined } from "@ant-design/icons";
import CardMovies from "../../components/card_movie/card_movie";
import "./movie-page.scss";
import Banner from "../../assets/banner.jpg";

const MoviePage = () => {
  const { getAllMovieRequest, movieList } = useMovie();
  const newMovieList = getMovieByGenres(movieList);
  const [isMobile, setIsMobile] = useState(window.innerWidth);
  const [currentPositions, setCurrentPositions] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      getAllMovieRequest();
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

  console.log(currentPositions);

  const handleNext = (genres, movieListLength) => {
    const currentPosition = currentPositions[genres];
    if (currentPosition < movieListLength - 1) {
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
              <div key={index}>
                <div className="movie_item">
                  <div className="genres_title">
                    <h1>{item.genres}</h1>
                    <h2 className="genres_view">View All</h2>
                  </div>
                  <div className="cardMovie_container">
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
                        <div className="card_movie">
                          <CardMovies movie={movie} key={movie._id} />
                        </div>
                      ))}
                    </div>
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

export default MoviePage;
