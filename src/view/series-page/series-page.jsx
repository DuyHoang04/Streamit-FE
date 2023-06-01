import React, { useEffect } from "react";
import useSeries from "../../hook/useSeries";
import CardMovie from "../../components/card-movie/cart-movie";
import Loader from "../../common/loader/Loader";

const SeriesPage = () => {
  const { getAllSeriesRequest, seriesMovieList } = useSeries();

  useEffect(() => {
    const fetchData = async () => {
      getAllSeriesRequest();
    };
    fetchData();
  }, []);

  const getSeriesByGenres = () => {
    const uniqueGenres = {};

    seriesMovieList.forEach((series) => {
      series.genres.forEach((genre) => {
        const genreName = genre.name;
        if (!uniqueGenres[genreName]) {
          uniqueGenres[genreName] = [];
        }
        uniqueGenres[genreName].push(series);
      });
    });

    const listSeriesByGenres = Object.entries(uniqueGenres).map(
      ([name, movies]) => ({
        name,
        movies,
      })
    );

    return listSeriesByGenres;
  };

  return (
    <div>
      {" "}
      <div>
        {seriesMovieList.length > 0 ? (
          seriesMovieList.map((item) => <CardMovie movie={item} />)
        ) : (
          <Loader />
        )}
      </div>
    </div>
  );
};

export default SeriesPage;
