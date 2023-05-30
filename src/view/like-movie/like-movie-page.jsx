import React, { useEffect } from "react";
import "./like-movie-page.scss";
import useUser from "../../hook/useUser";
import CardMovie from "../../components/card-movie/cart-movie";

const LikeMoviePage = () => {
  const { getLikedMovie, likeMovies } = useUser();
  const accessToken =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0NmUxN2Y4MWM4NzYyMTQyZGRkYWMyNSIsImlzQWRtaW4iOmZhbHNlLCJpYXQiOjE2ODU0MTE1NTUsImV4cCI6MTY4NjAxNjM1NX0.gq7FMHy0tTBSkRhw_xZy4FF8twObB41xO1jk5PW-kek";

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
