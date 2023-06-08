import React from "react";
import "./search-move-page.scss";
import useMedia from "../../hook/useMedia";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import CardMovie from "../../components/card_movie/card_movie";

const SearchMoviePage = () => {
  const { movieName } = useParams();
  const { getMovieAndSeries, mediaList } = useMedia();

  useEffect(() => {
    const req = {
      queries: {
        movieName,
      },
    };
    const fetchData = async () => {
      await getMovieAndSeries(req);
    };
    fetchData();
  }, [movieName]);

  return (
    <div className="search_movie_page">
      <div className="search_movie_container">
        {mediaList.length > 0 ? (
          <>
            <div className="search_movie_title">
              <h1>
                {mediaList.length} result "{movieName}"
              </h1>
            </div>
            <div className="card_movie_container">
              {mediaList.map((movie) => (
                <CardMovie movie={movie} key={movie._id} />
              ))}
            </div>
          </>
        ) : (
          <div className="search_movie_title">
            <h1>0 result "{movieName}"</h1>
          </div>
        )}
      </div>
    </div>
  );
};

export default SearchMoviePage;
