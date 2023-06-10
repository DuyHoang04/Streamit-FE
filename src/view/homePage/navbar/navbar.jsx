import { Avatar, Space } from "antd";
import { SearchOutlined, HeartFilled } from "@ant-design/icons";
import { Tooltip } from "antd";
import "./navbar.scss";
import { Link, useLocation, useNavigate } from "react-router-dom";
import useUser from "../../../hook/useUser";
import useAuth from "../../../hook/useAuth";
import { useEffect, useRef } from "react";
import { BASE_URL } from "../../../utils/apiConfig";
import { toastError } from "../../../utils";

const Navbar = () => {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const { logOutRequest } = useAuth();
  const { getDetailUser, userInfo } = useUser();
  const { accessToken } = useAuth();
  const { likedMovies } = userInfo;
  const textMovieRef = useRef("");

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
                    Sign Out
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

  const handleSearchMovie = async (e) => {
    const textMovie = textMovieRef.current.value;
    console.log(e.key);
    if (e.key === "Enter" && textMovie) {
      await navigate(`/search_movie/${textMovie}`);
      textMovieRef.current.value = "";
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
                  ref={textMovieRef}
                  type="text"
                  name="text"
                  className="input"
                  placeholder="Search"
                  onKeyPress={(e) => handleSearchMovie(e)}
                />
                <div class="border"></div>
                <label for="input" className="labelforsearch">
                  <SearchOutlined
                    style={{ fontSize: "2rem" }}
                    className="searchIcon "
                  />
                </label>
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
