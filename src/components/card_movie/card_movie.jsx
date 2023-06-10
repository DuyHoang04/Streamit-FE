import React from "react";
import "./card_movie.scss";
import { BASE_URL } from "../../utils/apiConfig";
import { CaretRightOutlined, DeleteOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import useMedia from "../../hook/useMedia";
import { animate, motion } from "framer-motion";

const LIKE_MOVIE_ROUTE = "like_movie";
const CardMovie = ({ movie, accessToken, index }) => {
  const { deleteLikeMovieAndSeries } = useMedia();
  const { pathname } = useLocation();

  const handleDeleteMovieLikeToUser = async () => {
    const req = {
      paths: {
        movieId: movie._id,
      },
      headers: {
        authorization: `Bearer ${accessToken}`,
      },
    };
    await deleteLikeMovieAndSeries(req);
  };

  return (
    <motion.div
      className="cardMovie"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 20 }}
      transition={{ delay: 0.15 * index }}
    >
      <div className="background_movie">
        <img
          className="cardMovie_image"
          src={`${BASE_URL}/${movie.bannerImage}`}
          alt=""
        />
        <Link
          to={`/detail_movie/${movie?._id || movie?.movieId}?isSeries=${
            movie?.isSeries || false
          }`}
          state={{ isSeries: movie?.isSeries || false }}
        >
          <div className="btn_play">
            <button>
              {" "}
              <CaretRightOutlined />
            </button>
          </div>
        </Link>
      </div>
      <div className="cardMovie_info">
        <h1 className="name">{movie.name}</h1>
        {pathname.includes(LIKE_MOVIE_ROUTE) ? (
          <div className="delete_icon" onClick={handleDeleteMovieLikeToUser}>
            <DeleteOutlined />
          </div>
        ) : (
          <div className="time">{/* <h2>18 +</h2> */}</div>
        )}
      </div>
    </motion.div>
  );
};

export default CardMovie;
