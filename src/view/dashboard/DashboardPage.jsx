import React from "react";
import "./dashboard.scss";
import {
  BarChartOutlined,
  AppstoreAddOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { Table } from "antd";

const DashboardPage = () => {
  const data = [
    {
      title: "Movie",
      count: 100,
      icon: <BarChartOutlined />,
    },
    {
      title: "Movie",
      count: 100,
      icon: <BarChartOutlined />,
    },
    {
      title: "Movie",
      count: 100,
      icon: <BarChartOutlined />,
    },
  ];

  const dataWidget = [
    {
      title: "Movie",
      href: "/admin/movies",
      listData: [
        {
          id: 1,
          name: "	I Dream in Another Language",
          category: "Movie",
          rating: "1",
        },
        {
          id: 1,
          name: "	I Dream in Another Language",
          category: "Movie",
          rating: "1",
        },
        {
          id: 1,
          name: "	I Dream in Another Language",
          category: "Movie",
          rating: "1",
        },
        {
          id: 1,
          name: "	I Dream in Another Language",
          category: "Movie",
          rating: "1",
        },
      ],
    },
    {
      title: "Movie",
      href: "/admin/movies",
      listData: [
        {
          id: 1,
          name: "	I Dream in Another Language",
          category: "Movie",
          rating: "1",
        },
        {
          id: 1,
          name: "	I Dream in Another Language",
          category: "Movie",
          rating: "1",
        },
        {
          id: 1,
          name: "	I Dream in Another Language",
          category: "Movie",
          rating: "1",
        },
        {
          id: 1,
          name: "	I Dream in Another Language",
          category: "Movie",
          rating: "1",
        },
      ],
    },
    {
      title: "Movie",
      href: "/admin/movies",
      listData: [
        {
          id: 1,
          name: "	I Dream in Another Language",
          category: "Movie",
          rating: "1",
        },
        {
          id: 1,
          name: "	I Dream in Another Language",
          category: "Movie",
          rating: "1",
        },
        {
          id: 1,
          name: "	I Dream in Another Language",
          category: "Movie",
          rating: "1",
        },
        {
          id: 1,
          name: "	I Dream in Another Language",
          category: "Movie",
          rating: "1",
        },
      ],
    },
    {
      title: "Movie",
      href: "/admin/movies",
      listData: [
        {
          id: 1,
          name: "	I Dream in Another Language",
          category: "Movie",
          rating: "1",
        },
        {
          id: 1,
          name: "	I Dream in Another Language",
          category: "Movie",
          rating: "1",
        },
        {
          id: 1,
          name: "	I Dream in Another Language",
          category: "Movie",
          rating: "1",
        },
        {
          id: 1,
          name: "	I Dream in Another Language",
          category: "Movie",
          rating: "1",
        },
      ],
    },
  ];

  const columns = [
    {
      title: "Id",
      key: "id",
      dataIndex: "id",
      width: 10,
    },
    {
      title: "Name",
      key: "name",
      dataIndex: "name",
      width: 100,
    },
    {
      title: "Category",
      key: "category",
      dataIndex: "category",
      width: 100,
    },
    {
      title: "Rating",
      key: "rating",
      dataIndex: "rating",
      width: 100,
    },
  ];
  return (
    <div className="dashboard-container">
      <div className="dashboard-title">
        <h1>DashBoard</h1>
      </div>
      <div className="dashboard-content">
        <div className="dashboard-stats">
          {data.map((item, index) => (
            <div key={index} className="dashboard-stats-item">
              <div className="dashboard-stats-icon">{item.icon}</div>
              <div className="dashboard-stats-content">
                <div className="dashboard-stats-title">{item.title}</div>
                <div className="dashboard-stats-count">{item.count}</div>
              </div>
            </div>
          ))}
        </div>
        <div className="dashboard-widget">
          {dataWidget.map((data, index) => (
            <div key={index} className="dashboard-widget-item">
              <div className="dashboard-widget-top">
                <h1 className="dashboard-widget-title">{data.title}</h1>
                <button className="dashboard-widget-view">View All</button>
              </div>
              <div className="dashboard-widget-content">
                <Table columns={columns} data={data.listData} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DashboardPage;
