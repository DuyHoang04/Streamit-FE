import React from "react";
import "./card_movie.scss";
import { BASE_URL } from "../../utils/apiConfig";
import { CaretRightOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";

const CardMovie = ({ movie }) => {
  return (
    <div className="cardMovie">
      <div className="background_movie">
        <img
          className="cardMovie_image"
          src={`${BASE_URL}/${movie.bannerImage}`}
          alt=""
        />
        <Link
          to={`/detail_movie/${movie._id}?isSeries=${movie?.isSeries || false}`}
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
        <div className="time">
          <h2>{movie.time} hr</h2>
        </div>
      </div>
    </div>
  );
};

export default CardMovie;
