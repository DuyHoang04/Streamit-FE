import React, { Fragment } from "react";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  Routes,
} from "react-router-dom";
import { config } from "./utils/index";
import * as pages from "./view/index";
import { AppstoreOutlined } from "@ant-design/icons";
import PageLayout from "./layout";
import ProtectedComponent from "./layout/protected-components/protected-component";
import Navbar from "./view/homePage/navbar/navbar";
import LayoutNavBar from "./layout/layout-navbar/layout_navbar";

const publicRoutes = [
  {
    path: config.routes.login,
    element: <pages.loginPage />,
  },
  {
    path: config.routes.register,
    element: <pages.registerPage />,
  },
  {
    path: config.routes.home,
    element: <pages.HomePage />,
  },
  {
    path: config.routes.errorpage,
    element: <pages.ErrorPage />,
  },
  {
    path: config.routes.detail_movie,
    element: <pages.MovieDetailPage />,
  },
  {
    path: config.routes.like_movie,
    element: <pages.LikeMoviePage />,
  },
  {
    path: config.routes.movies_user,
    element: <pages.MoviePage />,
  },
  {
    path: config.routes.tv_show,
    element: <pages.TvShowPage />,
  },
  {
    path: config.routes.about,
    element: <pages.AboutPage />,
  },
  {
    path: config.routes.contact,
    element: <pages.ContactPage />,
  },
  {
    path: config.routes.view_movie_by_genres,
    element: <pages.ViewGenresPage />,
  },
  {
    path: config.routes.view_video,
    element: <pages.ViewVideo />,
  },
  {
    path: config.routes.profile_user,
    element: <pages.ProfileUser />,
  },
  {
    path: config.routes.search_movie,
    element: <pages.SearchMoviePage />,
  },
  {
    path: config.routes.forgot_password,
    element: <pages.ForgotPasswordPage />,
  },
  {
    path: config.routes.reset_password,
    element: <pages.ResetPasswordPage />,
  },

  // ADMIN
  {
    path: config.routes.dashboard,
    element: <pages.DashboardPage />,
    label: "Dashboard",
    needShowSideMenu: true,
    pageIcon: <AppstoreOutlined />,
  },
  {
    path: config.routes.movies,
    element: <pages.AdminMoviesPage />,
    label: "Movies",
    needShowSideMenu: true,
    pageIcon: <AppstoreOutlined />,
  },
  {
    path: config.routes.movies_genres,
    element: <pages.AdminGenresPage />,
    label: "Genres",
    needShowSideMenu: true,
    pageIcon: <AppstoreOutlined />,
  },
  {
    path: config.routes.add_movie,
    element: <pages.AdminAddMoviePage />,
    label: "Add Movie",
    needShowSideMenu: true,
    pageIcon: <AppstoreOutlined />,
  },
  {
    path: config.routes.users,
    element: <pages.AdminUserPage />,
    label: "Users",
    needShowSideMenu: true,
    pageIcon: <AppstoreOutlined />,
  },
];
const privateRoutes = [];

const Router = () => {
  return (
    <Routes>
      {publicRoutes.map((route, idx) => {
        const Layout = route.needShowSideMenu ? PageLayout : LayoutNavBar;

        return (
          <Route
            key={idx}
            path={route.path}
            element={<Layout>{route.element}</Layout>}
          />
        );
      })}
    </Routes>
  );
};

export default Router;
export { publicRoutes, privateRoutes };
