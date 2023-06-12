import React, { useEffect, useState } from "react";
import Navbar from "./navbar/navbar";
import Banner from "./banner/banner";
import Loader from "../../common/loader/Loader";
import useMedia from "../../hook/useMedia";
import { getMovieByGenres, getRandomElements } from "../../utils";
import { RightOutlined, LeftOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";
import CardMovie from "../../components/card_movie/card_movie";
import "./homePage.scss";

export default function HomePage() {
  const { getMovieAndSeries, mediaList } = useMedia();
  const newMovieList = getMovieByGenres(mediaList);
  const dataBanner = getRandomElements(mediaList, 5);
  const [currentPositions, setCurrentPositions] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      await getMovieAndSeries({});
    };
    fetchData();
  }, []);

  useEffect(() => {
    // Kiểm tra xem movieList đã được tải về chưa
    if (mediaList.length > 0) {
      const initialPositions = newMovieList.reduce((acc, item) => {
        return { ...acc, [item.genres]: 0 };
      }, {});
      setCurrentPositions(initialPositions);
    }
  }, [mediaList]);

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
    <>
      {mediaList.length > 0 ? (
        <div className="home_page">
          <Banner data={dataBanner} />
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
        </div>
      ) : (
        <Loader />
      )}
    </>
  );
}
