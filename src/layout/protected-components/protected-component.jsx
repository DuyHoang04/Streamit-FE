import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { getPriorityRole } from "../../utils";
import { useSelector } from "react-redux";
import { privateRoutes } from "../../router";
import useAuth from "../../hook/useAuth";
import Loader from "../../common/loader/Loader";
import useUser from "../../hook/useUser";
import jwt_decode from "jwt-decode";

const PUBLIC_ROUTES = ["/login"];
const ADMIN_ROUTES = [
  "/admin/dashboard",
  "/admin/movies",
  "/admin/movies_genres",
  "/admin/add_movie",
  "/benefit",
  "/admin/users",
];
const ProtectedComponent = ({ children }) => {
  const { accessToken, refreshToken, refreshTokenRequest } = useAuth();
  const { userInfo } = useUser();
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const [isRender, setIsRender] = useState(false);

  useEffect(() => {
    if (accessToken) {
      if (pathname === "/login") {
        navigate("/");
      } else if (
        getPriorityRole(userInfo.isAdmin) !== "Admin" &&
        ADMIN_ROUTES.includes(pathname)
      ) {
        navigate("/");
      } else {
        setIsRender(true);
      }
    } else if (!accessToken && refreshToken) {
      refreshTokenRequest({ payload: { refreshToken } });
      setIsRender(true);
    } else {
      setIsRender(true);
    }
  }, [pathname, accessToken]);

  return <>{isRender ? children : <Loader />}</>;
};

export default ProtectedComponent;
