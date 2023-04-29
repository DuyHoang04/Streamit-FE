import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { getPriorityRole } from "../../utils";
import { useSelector } from "react-redux";
import { privateRoutes } from "../../router";
const PUBLIC_ROUTES = ["/login"];
const ProtectedComponent = ({ children }) => {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const [isRender, setIsRender] = useState(false);
  const accessToken = useSelector(state => state?.reducer?.loginReducer?.accessToken)
  const isAdmin = useSelector(state => state.reducer?.loginReducer?.accountRole)
  useEffect(() => {
    if (accessToken) {
      if (pathname !== "/login") {
        setIsRender(true);
      } else if (getPriorityRole(isAdmin) === 'Admin' && privateRoutes.includes(pathname)) {
        navigate('/');
      }
      else {
        setIsRender(false);
        navigate("/");
      }
    } else {
      if (!PUBLIC_ROUTES.includes(pathname)) {
        navigate('/login');
      } else {
        setIsRender(true);
      }
    }

  }, [pathname, accessToken]);

  return <>{isRender ? children : null}</>;
};

export default ProtectedComponent;
