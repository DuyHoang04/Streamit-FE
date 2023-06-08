import { Avatar, Space } from "antd";
import { SearchOutlined, HeartFilled } from "@ant-design/icons";
import { Tooltip } from "antd";
import "./navbar.scss";
import { Link, useLocation, useNavigate } from "react-router-dom";
import useUser from "../../../hook/useUser";
import useAuth from "../../../hook/useAuth";
import { useEffect } from "react";
import { BASE_URL } from "../../../utils/apiConfig";
import { toastError } from "../../../utils";

const Navbar = () => {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const { logOutRequest } = useAuth();
  const { getDetailUser, userInfo } = useUser();
  const { accessToken } = useAuth();
  const { likedMovies } = userInfo;

  const navItem = [
    { title: "Home", link: "/" },
    { title: "Movies", link: "/movies" },
    { title: "TV Shows", link: "/tv_show" },
    { title: "About", link: "/about" },
    { title: "Contact", link: "/contact" },
  ];

  const active = navItem.findIndex((e) => e.link === pathname);

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
                <Link>
                  <div style={{ cursor: "pointer" }} onClick={handleLogOut}>
                    Log Out
                  </div>
                </Link>
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

  const navigateLikeMoviePage = () => {
    if (accessToken) {
      navigate("/like_movie");
    } else {
      toastError("Please Login");
    }
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
                  <Link
                    to={item.link}
                    className={` navbar_item ${
                      index === active ? "active" : ""
                    }`}
                  >
                    {item.title}
                  </Link>
                </li>
              ))}
            </div>
            <div className="navbar_menuRight">
              <div className="search_input">
                <input
                  type="text"
                  name="text"
                  className="input"
                  placeholder="Search"
                />
                <div class="border"></div>
                <label for="input" className="labelforsearch">
                  <SearchOutlined
                    style={{ fontSize: "2rem" }}
                    className="searchIcon "
                  />
                </label>
                <button class="micButton">
                  <svg viewBox="0 0 384 512" class="micIcon">
                    <path d="M192 0C139 0 96 43 96 96V256c0 53 43 96 96 96s96-43 96-96V96c0-53-43-96-96-96zM64 216c0-13.3-10.7-24-24-24s-24 10.7-24 24v40c0 89.1 66.2 162.7 152 174.4V464H120c-13.3 0-24 10.7-24 24s10.7 24 24 24h72 72c13.3 0 24-10.7 24-24s-10.7-24-24-24H216V430.4c85.8-11.7 152-85.3 152-174.4V216c0-13.3-10.7-24-24-24s-24 10.7-24 24v40c0 70.7-57.3 128-128 128s-128-57.3-128-128V216z"></path>
                  </svg>
                </button>
              </div>

              <div className="favorites" onClick={navigateLikeMoviePage}>
                <HeartFilled style={{ fontSize: "2rem" }} />
                <span className="count">{likedMovies?.length || 0}</span>
              </div>
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
