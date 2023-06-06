import { Avatar, Space } from "antd";
import { SearchOutlined, HeartFilled } from "@ant-design/icons";
import { Tooltip } from "antd";
import "./navbar.scss";
import { Link, useNavigate } from "react-router-dom";
import useUser from "../../../hook/useUser";
import useAuth from "../../../hook/useAuth";
import { useEffect } from "react";
import { BASE_URL } from "../../../utils/apiConfig";

const Navbar = () => {
  const navigate = useNavigate();
  const { logOutRequest } = useAuth();
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

  const handleLogOut = async () => {
    if (accessToken) {
      await logOutRequest({ navigate });
    }
  };

  const AvatarUser = () => {
    return (
      <Tooltip
        title={
          <div>
            {accessToken ? (
              <>
                {userInfo.isAdmin && (
                  <Link to="/admin/dashboard">
                    <div style={{ cursor: "pointer" }}>Admin</div>
                  </Link>
                )}
                <Link to={`/profile_user/${userInfo._id}`}>
                  <div style={{ cursor: "pointer" }}>Profile</div>
                </Link>
                <div style={{ cursor: "pointer" }} onClick={handleLogOut}>
                  Log Out
                </div>
              </>
            ) : (
              <Link to="/login">
                <div>Login</div>
              </Link>
            )}
          </div>
        }
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
                <li key={index}>
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
