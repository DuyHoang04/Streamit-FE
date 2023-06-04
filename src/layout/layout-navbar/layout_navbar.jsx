import React from "react";
import Navbar from "../../view/homePage/navbar/navbar";
import Footer from "../../components/footer/Footer";

const LayoutNavBar = ({ children }) => {
  return (
    <div className="default__layout_navbar-container">
      <div className="navbar">
        <Navbar />
      </div>
      <div className="page__content">{children}</div>
      <div className="footer">
        <Footer />
      </div>
    </div>
  );
};

export default LayoutNavBar;
