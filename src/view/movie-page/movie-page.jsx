import React, { useEffect } from "react";
import useMovie from "../../hook/useMovie";
import Loader from "../../common/loader/Loader";
import CardMovie from "../../components/card-movie/cart-movie";

const MoviePage = () => {
  const { getAllMovieRequest, movieList } = useMovie();

  useEffect(() => {
    const fetchData = async () => {
      getAllMovieRequest();
    };
    fetchData();
  }, []);

  const getMovieByGenres = () => {
    const uniqueGenres = {};

    movieList.forEach((movie) => {
      movie.genres.forEach((genre) => {
        const genreName = genre.name;
        if (!uniqueGenres[genreName]) {
          uniqueGenres[genreName] = [];
        }
        uniqueGenres[genreName].push(movie);
      });
    });

    const listMovieByGenres = Object.entries(uniqueGenres).map(
      ([name, movies]) => ({
        name,
        movies,
      })
    );

    return listMovieByGenres;
  };

  return (
    <div>
      {movieList.length > 0 ? (
        movieList.map((item) => <CardMovie movie={item} />)
      ) : (
        <Loader />
      )}
    </div>
  );
};

export default MoviePage;
