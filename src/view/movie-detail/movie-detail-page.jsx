import React, { useEffect } from "react";
import "./movie-detail-page.scss";
import useMovie from "../../hook/useMovie";
import { BASE_URL } from "../../utils/apiConfig";
import { Rate } from "antd";
import {
  PlayCircleOutlined,
  HeartFilled,
  ShareAltOutlined,
} from "@ant-design/icons";
import DetailReview from "../../components/DetailReview/detail-review";

const MovieDetailPage = () => {
  const { getDetailMovieRequest, movieInfo } = useMovie();

  useEffect(() => {
    const fetchData = async () => {
      getDetailMovieRequest({
        paths: { movieId: "646863a033b7e1c380ed3c1c" },
      });
    };
    fetchData();
  }, []);

  return (
    <>
      {movieInfo ? (
        <>
          <div className="movie_detail">
            <div className="movie_detail-container">
              <div className="movie_detail-wrapper">
                <div className="movie_banner">
                  <img src={`${BASE_URL}/${movieInfo.bannerImage}`} alt="" />
                </div>
              </div>
              <div className="movie_content">
                <div className="movie-title">{movieInfo.name}</div>
                <div className="movie-rate">
                  <Rate disabled value={Math.floor(movieInfo.rating) || 5} />
                </div>
                <div className="movie-genres">
                  {movieInfo?.genres?.map((item) => (
                    <span key={item._id}>{item.name}</span>
                  ))}
                </div>
                <div className="movie-description">{movieInfo.description}</div>
                <div className="movie-play-video">
                  <PlayCircleOutlined />
                  WATCH NOW
                </div>
                <div className="movie-list-more">
                  <div className="movie-list-item">
                    <ShareAltOutlined />
                  </div>
                  <div className="movie-list-item">
                    <HeartFilled />
                  </div>
                </div>
              </div>
            </div>

            <DetailReview data={movieInfo} />
          </div>
        </>
      ) : (
        <h1>notfound</h1>
      )}
    </>
  );
};

export default MovieDetailPage;
