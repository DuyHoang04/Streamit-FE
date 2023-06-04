import React, { useEffect } from "react";
import "./like-movie-page.scss";
import useUser from "../../hook/useUser";
import CardMovie from "../../components/card-movie/cart-movie";
import useAuth from "../../hook/useAuth";

const LikeMoviePage = () => {
  const { accessToken } = useAuth();
  const { getLikedMovie, likeMovies } = useUser();

  useEffect(() => {
    const req = {
      headers: {
        authorization: `Bearer ${accessToken}`,
      },
    };
    getLikedMovie(req);
  }, []);

  return (
    <div className="likeMovie_page">
      <div className="likeMovie_container">
        {likeMovies.length > 0 ? (
          likeMovies.map((data) => (
            <CardMovie
              movie={data}
              key={data.movieId}
              accessToken={accessToken}
            />
          ))
        ) : (
          <h1>No movie</h1>
        )}
      </div>
    </div>
  );
};

export default LikeMoviePage;
