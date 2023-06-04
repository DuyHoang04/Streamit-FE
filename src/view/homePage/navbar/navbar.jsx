import { Avatar, Space } from "antd";
import { SearchOutlined, BellOutlined, UserOutlined } from "@ant-design/icons";
import "./navbar.scss";
import { Link } from "react-router-dom";
const Navbar = () => {
  const navItem = [
    { title: "Home", link: "/" },
    { title: "Movies", link: "/movies" },
    { title: "TV Shows", link: "/tv_show" },
    { title: "About", link: "/about" },
    { title: "Contact", link: "/contact" },
  ];

  return (
    <div className="homePage_background">
      <header id="navbar">
        <div className="navbar_container">
          <div className="navbar_wrap">
            <div className="navbar_logo">
              <img
                src="../../src/assets/logo.png"
                style={{ width: "150px" }}
                alt=""
              />
            </div>
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
              <div>
                <BellOutlined style={{ fontSize: "2rem" }} />
              </div>
              <div>
                <Space wrap size={16}>
                  <Avatar size={50} icon={<UserOutlined />} />
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
