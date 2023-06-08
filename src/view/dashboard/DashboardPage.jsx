import React, { useEffect } from "react";
import "./dashboard.scss";
import {
  BarChartOutlined,
  AppstoreAddOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { Table } from "antd";
import { BASE_URL } from "../../utils/apiConfig";
import TitlePageAdmin from "../../common/title-page-admin/title-page-admin";
import useGenres from "../../hook/useGenres";
import useMedia from "../../hook/useMedia";
import useUser from "../../hook/useUser";
import { Link } from "react-router-dom";

const DashboardPage = () => {
  const { genresList, getAllGenresRequest } = useGenres();
  const { mediaList, getMovieAndSeries } = useMedia();
  const { userList, getAllUserRequest } = useUser();

  useEffect(() => {
    Promise.all([
      getAllGenresRequest(),
      getMovieAndSeries({ queries: {} }),
      getAllUserRequest(),
    ]);
  }, []);

  const seriesList = mediaList.filter((item) => item.isSeries);
  const moviesList = mediaList.filter((item) => !item.isSeries);

  const data = [
    {
      title: "Movie",
      count: moviesList?.length,
      icon: <BarChartOutlined />,
    },
    {
      title: "Series",
      count: seriesList?.length,
      icon: <BarChartOutlined />,
    },
    {
      title: "Genres",
      count: genresList?.length,
      icon: <BarChartOutlined />,
    },
  ];

  const dataWidget = [
    //media
    {
      link: "/admin/movies",
      title: "Movie",
      columns: [
        {
          title: "Image",
          key: "image",
          dataIndex: "image",
          width: 100,
          render: (image) => (
            <img src={`${BASE_URL}/${image}`} alt="" className="image_movie" />
          ),
        },
        {
          title: "Name",
          dataIndex: "name",
          key: "name",
          width: 10,
          render: (name) => <span className="movie_name">{name}</span>,
        },
        {
          title: "Category",
          dataIndex: "isSeries",
          key: "isSeries",
          width: 10,
          render: (isSeries) => (
            <span className="category_movie">
              {isSeries ? "Tv Show" : "Movie"}
            </span>
          ),
        },
        {
          title: "Rating",
          dataIndex: "rating",
          key: "rating",
          width: 10,
          render: (rating) => (
            <span className="rating_movie">
              <span className="icon">&#x2605;</span>
              {rating}
            </span>
          ),
        },
      ],
      listData: mediaList,
    },

    // user
    {
      link: "/admin/users",
      title: "User",
      columns: [
        {
          title: "Image",
          key: "picturePath",
          dataIndex: "picturePath",
          width: 100,
          render: (picturePath) => (
            <img
              src={
                picturePath
                  ? `${BASE_URL}/${picturePath}`
                  : "https://png.pngitem.com/pimgs/s/649-6490124_katie-notopoulos-katienotopoulos-i-write-about-tech-round.png"
              }
              alt=""
              className="image_user"
            />
          ),
        },
        {
          title: "Username",
          dataIndex: "username",
          key: "username",

          render: (username) => <span className="name_user">{username}</span>,
        },
        {
          title: "Email",
          dataIndex: "email",
          key: "email",

          render: (email) => <span className="email_user">{email}</span>,
        },
        {
          title: "Role",
          dataIndex: "isAdmin",
          key: "isAdmin",

          render: (isAdmin) => (
            <span className="role_user">{isAdmin ? "ADMIN" : "USER"}</span>
          ),
        },
      ],
      listData: userList,
    },
  ];

  return (
    <div className="dashboard-container">
      <TitlePageAdmin title="DashBoard" />
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
                <Link to={data.link}>
                  <button className="dashboard-widget-view">View All</button>
                </Link>
              </div>
              <div className="dashboard-widget-content">
                <Table
                  className="ant-table-content"
                  columns={data.columns}
                  dataSource={data.listData}
                  scroll={{ x: "max-content", y: 400 }}
                  rowKey={(record) => record._id}
                  pagination={false}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DashboardPage;
