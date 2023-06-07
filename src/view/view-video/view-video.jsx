import React, { useEffect } from "react";
import { useParams, useLocation } from "react-router-dom";
import queryString from "query-string";
import useSeries from "../../hook/useSeries";
import useMovie from "../../hook/useMovie";
import { BASE_URL } from "../../utils/apiConfig";
import { Player } from "video-react";
import "./view-video.scss";

const ViewVideo = () => {
  const { movieId } = useParams();
  const queryParams = queryString.parse(useLocation().search);
  const isSeries = queryParams?.isSeries === "true";
  const { episodes } = queryParams;
  const { getDetailMovieRequest, movieInfo } = useMovie();
  const { getDetailSeriesRequest, seriesInfo } = useSeries();
  const dataMovie = isSeries ? seriesInfo : movieInfo;

  console.log(dataMovie);

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

  const videoMovie = () => {
    if (isSeries) {
      const videoEpisodes = dataMovie.episodes.filter((episode) => {
        return episode.episodeNumber == episodes;
      });
      return `${BASE_URL}/${videoEpisodes[0]?.video}`;
    } else {
      return `${BASE_URL}/${dataMovie?.video}`;
    }
  };

  return (
    <div className="view_video">
      <Player autoPlay>
        <source src={videoMovie()} />
      </Player>
    </div>
  );
};

export default ViewVideo;