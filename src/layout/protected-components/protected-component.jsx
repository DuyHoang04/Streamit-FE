import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { getPriorityRole } from "../../utils";

const PUBLIC_ROUTES = ["/login"];
const ProtectedComponent = ({ children }) => {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const [isRender, setIsRender] = useState(false);

  // const accessToken = true;
  // const isAdmin = true;

  useEffect(() => {
    if (pathname !== "/login") {
      setIsRender(true);
    } else {
      setIsRender(false);
      navigate("/");
    }
  }, [pathname]);

  return <>{isRender ? children : null}</>;
};

export default ProtectedComponent;
