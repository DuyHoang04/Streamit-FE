import React, { useEffect } from "react";
import "./movie-detail-page.scss";
import useMovie from "../../hook/useMovie";
import { BASE_URL } from "../../utils/apiConfig";
import { Rate } from "antd";
import {
  CaretRightOutlined,
  HeartFilled,
  ShareAltOutlined,
} from "@ant-design/icons";
import { useLocation, useParams } from "react-router-dom";
import queryString from "query-string";
import DetailReview from "../../components/DetailReview/detail-review";
import useSeries from "../../hook/useSeries";
import EpisodesList from "../../components/episodes-list/episodes-list";
import useAuth from "../../hook/useAuth";
import useMedia from "../../hook/useMedia";
import { motion } from "framer-motion";
import { toast } from "react-hot-toast";
import { toastError } from "../../utils";

const MovieDetailPage = () => {
  const { accessToken } = useAuth();
  const queryParams = queryString.parse(useLocation().search);
  const isSeries = queryParams?.isSeries === "true";
  const { movieId } = useParams();
  const {
    getDetailMovieRequest,
    movieInfo,
    commentMovieRequest,
    likeMovieRequest,
  } = useMovie();
  const {
    getDetailSeriesRequest,
    seriesInfo,
    commentSeriesRequest,
    likeSeriesRequest,
  } = useSeries();

  const { likeMovieAndSeries } = useMedia();

  const dataMovie = isSeries ? seriesInfo : movieInfo;

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      if (isSeries) {
        getDetailSeriesRequest({ paths: { seriesId: movieId } });
      } else {
        getDetailMovieRequest({
          paths: { movieId },
        });
      }
    };
    fetchData();
  }, [isSeries, movieId]);

  const handleAddComment = (dataComment) => {
    if (accessToken) {
      const request = {
        payload: dataComment,
        paths: isSeries ? { seriesId: movieId } : { movieId },
        headers: {
          authorization: `Bearer ${accessToken}`,
        },
      };
      if (isSeries) {
        commentSeriesRequest(request);
      } else {
        commentMovieRequest(request);
      }
    } else {
      toastError("Please Login");
    }
  };

  const handleLikeMovie = () => {
    if (accessToken) {
      const req = {
        payload: {
          movieId: dataMovie._id,
          name: dataMovie.name,
          genres: dataMovie.genres,
          image: dataMovie.image,
          isSeries: dataMovie?.isSeries || false,
        },
        headers: {
          authorization: `Bearer ${accessToken}`,
        },
      };
      likeMovieAndSeries(req);
    } else {
      toastError("Please Login");
    }
  };

  return (
    <>
      {dataMovie ? (
        <>
          <div className="movie_detail">
            <div className="movie_detail-container">
              <div className="movie_detail-wrapper">
                <div className="movie_banner">
                  <img src={`${BASE_URL}/${dataMovie.bannerImage}`} alt="" />
                </div>
              </div>
              <div className="movie_content">
                <motion.div
                  className="movie-title"
                  initial={{ x: -200 }}
                  animate={{ x: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  {dataMovie.name}
                </motion.div>
                <div className="movie-rate">
                  <Rate disabled value={Math.floor(dataMovie.rating) || 5} />
                  <span className="movie_numReview">
                    ( {dataMovie.numReviews || 0} reviews )
                  </span>
                </div>
                <div className="movie-genres">
                  {dataMovie?.genres?.map((item) => (
                    <span key={item._id}>{item.name}- </span>
                  ))}
                </div>
                <div className="movie-description">{dataMovie.description}</div>
                <div className="movie-play-video">
                  <CaretRightOutlined />
                </div>
                <div className="movie-list-more">
                  <div className="movie-list-item">
                    <ShareAltOutlined />
                  </div>
                  <div className="movie-list-item" onClick={handleLikeMovie}>
                    <HeartFilled />
                  </div>
                </div>
              </div>
            </div>

            {/* EpisodesList */}
            {isSeries && <EpisodesList episodesData={dataMovie?.episodes} />}

            <DetailReview
              data={dataMovie}
              handleAddComment={handleAddComment}
            />
          </div>
        </>
      ) : (
        <h1>notfound</h1>
      )}
    </>
  );
};

export default MovieDetailPage;
