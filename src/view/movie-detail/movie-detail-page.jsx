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

const MovieDetailPage = () => {
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

  const accessToken =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0NmUxN2Y4MWM4NzYyMTQyZGRkYWMyNSIsImlzQWRtaW4iOmZhbHNlLCJpYXQiOjE2ODU0MTE1NTUsImV4cCI6MTY4NjAxNjM1NX0.gq7FMHy0tTBSkRhw_xZy4FF8twObB41xO1jk5PW-kek";

  const dataMovie = isSeries ? seriesInfo : movieInfo;

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
  };

  const handleLikeMovie = () => {
    const req = {
      paths: isSeries ? { seriesId: movieId } : { movieId },
      headers: {
        authorization: `Bearer ${accessToken}`,
      },
    };
    if (isSeries) {
      likeSeriesRequest(req);
    } else {
      likeMovieRequest(req);
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
                <div className="movie-title">{dataMovie.name}</div>
                <div className="movie-rate">
                  <Rate disabled value={Math.floor(dataMovie.rating) || 5} />
                </div>
                <div className="movie-genres">
                  {dataMovie?.genres?.map((item) => (
                    <span key={item._id}>{item.name}</span>
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
