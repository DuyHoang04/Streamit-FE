const routes = {
  home: "/",
  login: "/login",
  register: "/register",
  errorpage: "/*",

  // ADMIN
  dashboard: "/admin/dashboard",
  movies: "/admin/movies",
  movies_genres: "/admin/movies_genres",
  add_movie: "/admin/add_movie",
  users: "/admin/users",

  // USER
  detail_movie: "/detail_movie/:movieId",
  like_movie: "/like_movie",
  movies_user: "/movies",
  tv_show: "/tv_show",
  about: "/about",
  contact: "/contact",
  view_movie_by_genres: "/view_movie_by_genres/:genres_name",
  view_video: "/view_video/:movieId",
  profile_user: "/profile_user/:userId",
};

export default routes;
