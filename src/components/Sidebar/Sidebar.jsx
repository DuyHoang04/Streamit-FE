import React from "react";
import "./sidebar.scss";
import { Menu } from "antd";
import { useMemo, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { ExportOutlined } from "@ant-design/icons";
import {
  AppstoreOutlined,
  ContainerOutlined,
  DesktopOutlined,
  MailOutlined,
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  PieChartOutlined,
} from "@ant-design/icons";
import { publicRoutes } from "../../router";
import { getPriorityRole } from "../../utils";
const Sidebar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { pathname } = location;

  const isAdmin = true;

  const getDefaultMenuItems = useMemo(() => {
    let ROUTES_NEED_TO_SHOW = [
      "/admin/dashboard",
      "/admin/movies",
      "/admin/movies_genres",
      "/admin/add_movie",
      "/benefit",
      "/admin/users",
    ];
    if (getPriorityRole(isAdmin) === "Admin") {
      ROUTES_NEED_TO_SHOW = [...ROUTES_NEED_TO_SHOW];
    }
    return publicRoutes
      .filter((route) => ROUTES_NEED_TO_SHOW.includes(route.path))
      .map((filteredRoute) => ({
        key: filteredRoute.path,
        icon: filteredRoute.pageIcon,
        label: filteredRoute.label,
      }));
  }, []);

  const defaultActiveMenu = useMemo(() => {
    return pathname ? pathname : "/admin/dashboard";
  }, [pathname]);

  const handleNavigateToAnotherPage = (e) => {
    const redirectURL = `${e.key}`;

    navigate(redirectURL);
  };

  return (
    <div className="sidebar-container">
      <Menu
        defaultSelectedKeys={[defaultActiveMenu]}
        mode="inline"
        theme="dark"
        items={getDefaultMenuItems}
        onClick={handleNavigateToAnotherPage}
      />
    </div>
  );
};

export default Sidebar;
