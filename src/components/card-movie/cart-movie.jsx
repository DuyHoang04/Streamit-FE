import React from "react";
import "./card-movie.scss";
import { BASE_URL } from "../../utils/apiConfig";
import { CaretRightOutlined, DeleteOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";
import useMedia from "../../hook/useMedia";

const CardMovie = ({ movie, accessToken }) => {
  const { deleteLikeMovieAndSeries } = useMedia();

  const handleDeleteMovieHasLike = async () => {
    const req = {
      paths: {
        movieId: movie.movieId,
      },
      headers: {
        authorization: `Bearer ${accessToken}`,
      },
    };
    await deleteLikeMovieAndSeries({ req, accessToken });
  };
  return (
    <div className="card_movie-container">
      <div className="background_movie">
        <img src={`${BASE_URL}/${movie.image}`} alt="" />
        <Link
          to={`/detail_movie/${movie.movieId}?isSeries=${
            movie?.isSeries || false
          }`}
          state={{ isSeries: movie?.isSeries || false }}
        >
          <div className="icon_play">
            <CaretRightOutlined />
          </div>
        </Link>
      </div>
      <div className="info_movie">
        <div className="movie_name">{movie?.name}</div>
        <div className="movie_delete-icon" onClick={handleDeleteMovieHasLike}>
          <DeleteOutlined />
        </div>
      </div>
    </div>
  );
};

export default CardMovie;