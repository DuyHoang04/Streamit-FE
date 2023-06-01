import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { getPriorityRole } from "../../utils";
import { useSelector } from "react-redux";
import { privateRoutes } from "../../router";
import useAuth from "../../hook/useAuth";
import Loader from "../../common/loader/Loader";

const PUBLIC_ROUTES = ["/login"];
const ProtectedComponent = ({ children }) => {
  const { accessToken, isAdmin } = useAuth();
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const [isRender, setIsRender] = useState(false);

  useEffect(() => {
    if (accessToken) {
      if (pathname === "/login") {
        navigate("/");
      } else if (
        getPriorityRole(isAdmin) !== "Admin" &&
        privateRoutes.includes(pathname)
      ) {
        navigate("/");
      } else {
        setIsRender(true);
      }
    } else {
      // if (!PUBLIC_ROUTES.includes(pathname)) {
      //   navigate("/login");
      // } else {
      //   setIsRender(true);
      // }
      setIsRender(true);
    }
  }, [pathname, accessToken]);

  return <>{isRender ? children : <Loader />}</>;
};

export default ProtectedComponent;
