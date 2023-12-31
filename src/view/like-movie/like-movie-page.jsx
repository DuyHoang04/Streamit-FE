import React, { useEffect } from "react";
import "./like-movie-page.scss";
import useUser from "../../hook/useUser";
import useAuth from "../../hook/useAuth";
import CardMovie from "../../components/card_movie/card_movie";

const LikeMoviePage = () => {
  const { accessToken } = useAuth();
  const { getLikedMovie, likeMovies } = useUser();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
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
          likeMovies.map((data, index) => (
            <CardMovie
              movie={data}
              key={data._id}
              accessToken={accessToken}
              index={index}
            />
          ))
        ) : (
          <h1 style={{ color: "white" }}>No movie</h1>
        )}
      </div>
    </div>
  );
};

export default LikeMoviePage;
