import { Avatar, Space } from "antd";
import {
  SearchOutlined,
  BellOutlined,
  UserOutlined,
  HeartFilled,
} from "@ant-design/icons";
import { Tooltip } from "antd";
import "./navbar.scss";
import { Link } from "react-router-dom";
import useUser from "../../../hook/useUser";
import useAuth from "../../../hook/useAuth";
import { useEffect } from "react";
import { BASE_URL } from "../../../utils/apiConfig";

const Navbar = () => {
  const { getDetailUser, userInfo } = useUser();
  const { accessToken } = useAuth();
  const { likedMovies } = userInfo;

  useEffect(() => {
    if (accessToken) {
      const req = {
        headers: {
          authorization: `Bearer ${accessToken}`,
        },
      };
      const fetchData = async () => {
        await getDetailUser(req);
      };
      fetchData();
    }
  }, [accessToken]);

  const navItem = [
    { title: "Home", link: "/" },
    { title: "Movies", link: "/movies" },
    { title: "TV Shows", link: "/tv_show" },
    { title: "About", link: "/about" },
    { title: "Contact", link: "/contact" },
  ];

  const AvatarUser = () => {
    return (
      <Tooltip
        title={
          <div>
            {userInfo.isAdmin && <div style={{ cursor: "pointer" }}>Admin</div>}
            <Link to={`/profile_user/${userInfo._id}`}>
              <div style={{ cursor: "pointer" }}>Profile</div>
            </Link>
            <div style={{ cursor: "pointer" }}>Log Out</div>
          </div>
        }
        mouseEnterDelay={0.5} // Đặt thời gian trễ khi hover vào tooltip
      >
        <Avatar
          src={
            userInfo?.picturePath
              ? `${BASE_URL}/${userInfo?.picturePath}`
              : "https://png.pngitem.com/pimgs/s/649-6490124_katie-notopoulos-katienotopoulos-i-write-about-tech-round.png"
          }
        />
      </Tooltip>
    );
  };

  return (
    <div className="homePage_background">
      <header id="navbar">
        <div className="navbar_container">
          <div className="navbar_wrap">
            <Link to="/">
              <div className="navbar_logo">
                <img
                  src="../../src/assets/logo.png"
                  style={{ width: "150px" }}
                  alt=""
                />
              </div>
            </Link>
            <div className="navbar_menuItem">
              {navItem.map((item, index) => (
                <li>
                  <Link className="navbar_item" to={item.link}>
                    {item.title}
                  </Link>
                </li>
              ))}
            </div>
            <div className="navbar_menuRight">
              <div>
                <SearchOutlined style={{ fontSize: "2rem" }} />
              </div>
              <Link to="/like_movie">
                <div className="favorites">
                  <HeartFilled style={{ fontSize: "2rem" }} />
                  <span className="count">{likedMovies?.length || 0}</span>
                </div>
              </Link>
              <div className="user_icon">
                <Space wrap size={16}>
                  <AvatarUser />
                </Space>
              </div>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
};
export default Navbar;
