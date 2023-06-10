import React from "react";
import "./footer.scss";
import {
  YoutubeOutlined,
  FacebookOutlined,
  InstagramOutlined,
  TwitterOutlined,
} from "@ant-design/icons";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="row">
        <YoutubeOutlined />
        <FacebookOutlined />
        <InstagramOutlined />
        <TwitterOutlined />
      </div>
      <div class="row">
        <ul>
          <li>
            <a href="#">Contact us</a>
          </li>
          <li>
            <a href="#">Our Services</a>
          </li>
          <li>
            <a href="#">Privacy Policy</a>
          </li>
          <li>
            <a href="#">Terms & Conditions</a>
          </li>
          <li>
            <a href="#">Career</a>
          </li>
        </ul>
      </div>
      <div class="row">THANK YOU FOR WATCHING</div>
    </footer>
  );
};

export default Footer;
