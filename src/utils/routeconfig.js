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
  like_movie: "/like_movie/:userId",
  movies: "/movies",
  series: "/tv_show",
};

export default routes;
