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
        {likeMovies.map((data) => (
          <CardMovie movie={data} key={data.id} />
        ))}
      </div>
    </div>
  );
};

export default LikeMoviePage;
