import React, { useEffect } from "react";
import { useParams, useLocation, Link } from "react-router-dom";
import queryString from "query-string";
import useSeries from "../../hook/useSeries";
import useMovie from "../../hook/useMovie";
import { BASE_URL } from "../../utils/apiConfig";
import { Player } from "video-react";
import "./view-video.scss";
import Loader from "../../common/loader/Loader";
import { Rate } from "antd";
import { getRandomElements } from "../../utils";
import CardMovie from "../../components/card_movie/card_movie";
import { useState } from "react";

const ViewVideo = () => {
  const { movieId } = useParams();
  const queryParams = queryString.parse(useLocation().search);
  const isSeries = queryParams?.isSeries === "true";
  const { episodes } = queryParams;
  const { getDetailMovieRequest, getAllMovieRequest, movieInfo, movieList } =
    useMovie();
  const { getDetailSeriesRequest, seriesInfo } = useSeries();
  const dataMovie = isSeries ? seriesInfo : movieInfo;
  const moreMovie = getRandomElements(movieList, 10);
  const [keyMovie, setKeyMovie] = useState(0);

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
    const fetchData = async () => {
      if (isSeries) {
        await getDetailSeriesRequest({ paths: { seriesId: movieId } });
      } else {
        await getAllMovieRequest({});
        await getDetailMovieRequest({
          paths: { movieId },
        });
      }
    };
    fetchData();
    setKeyMovie(episodes);
  }, [isSeries, movieId, episodes]);

  const videoMovie = () => {
    if (isSeries && dataMovie) {
      const videoEpisodes = dataMovie.episodes.filter((episode) => {
        return episode.episodeNumber == episodes;
      });
      return `${BASE_URL}/${videoEpisodes[0]?.video}`;
    } else {
      return `${BASE_URL}/${dataMovie?.video}`;
    }
  };

  return (
    <>
      {!dataMovie ? (
        <Loader />
      ) : (
        <div className="view_video">
          <div className="video_movie">
            <Player
              key={keyMovie}
              autoPlay
              height={550}
              width={1050}
              fluid={false}
            >
              <source src={videoMovie()} />
            </Player>
            {isSeries ? (
              <div className="more_episode_container">
                <h1 className="title">{dataMovie.name}</h1>

                <div className="more_episode">
                  <h1 className="sub-title">
                    Choose 1-{seriesInfo.episodes.length} episode
                  </h1>
                  <div className="episode_item">
                    {seriesInfo.episodes.map((episode, index) => (
                      <Link
                        to={`/view_video/${movieId}?isSeries=true&episodes=${episode.episodeNumber}`}
                      >
                        <button
                          className={`btn_item ${
                            episode.episodeNumber == episodes && "active"
                          } `}
                        >
                          {episode.episodeNumber}
                        </button>
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            ) : (
              <div className="more_movie_container">
                <h1 className="title">{dataMovie.name}</h1>

                <div className="more_movie">
                  <h1 className="sub-title">More Movie</h1>
                  <div className="movie_item">
                    {moreMovie.map((movie, index) => (
                      <CardMovie movie={movie} key={index} index={index} />
                    ))}
                  </div>
                </div>
              </div>
            )}
          </div>

          <div className="info_movie">
            <h1 className="name">
              {!isSeries
                ? dataMovie.name
                : `${dataMovie.name} Episode ${episodes}`}
            </h1>

            <div className="rating">
              <Rate disabled value={Math.floor(dataMovie.rating) || 5} />
              <span className="review">({dataMovie.numReviews} reviews)</span>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ViewVideo;
