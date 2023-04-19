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

const publicRoutes = [
  {
    path: config.routes.login,
    element: <pages.loginPage />,
  },
  {
    path: config.routes.home,
    element: <pages.HomePage />,
  },
  {
    path: config.routes.errorpage,
    element: <pages.ErrorPage />,
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
        const Layout = route.needShowSideMenu ? PageLayout : Fragment;
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
