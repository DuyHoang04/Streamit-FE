import { Avatar, Space } from 'antd'
import { SearchOutlined, BellOutlined, UserOutlined } from "@ant-design/icons"
import "./navbar.scss"
const Navbar = () => {
    return (
        <div className="homePage_background">
            <header id="navbar">
                <div className="navbar_container">
                    <div className="navbar_wrap">
                        <div className="navbar_logo">
                            <img src="../../src/assets/logo.png" style={{ width: "150px" }} alt="" />
                        </div>
                        <div className="navbar_menuItem">
                            <li ><a className="navbar_item" href="">Home
                            </a></li>
                            <li ><a className="navbar_item" href="">Movies
                            </a></li>
                            <li ><a className="navbar_item" href="">TV Shows
                            </a></li>
                            <li ><a className="navbar_item" href=""> Video
                            </a></li>
                            <li ><a className="navbar_item" href="">Blog
                            </a></li>
                        </div>
                        <div className="navbar_menuRight">
                            <div><SearchOutlined style={{ fontSize: "2rem" }} /></div>
                            <div><BellOutlined style={{ fontSize: "2rem" }} /></div>
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
    )
}
export default Navbar