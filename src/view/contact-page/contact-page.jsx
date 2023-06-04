import React, { useEffect } from "react";
import "./contact-page.scss";
import Background from "../../assets/map.jpg";

const ContactPage = () => {
  const myBackGround = {
    backgroundImage: `url(${Background})`,
    height: "80vh",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
  };

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  }, []);

  return (
    <div className="contact">
      <div className="contact_Bg" style={myBackGround}></div>
      <div className="contact_content">
        <div className="contact_content-left">
          <div className="contact_content-leftTitle">
            <h1> -GET IN TOUCH</h1>
          </div>
          <div className="contact_content-leftForm">
            <div className="nameInput">
              <h1>Name *</h1>
              <input type="text" />
            </div>
            <div className="emailInput">
              <h1>Email *</h1>
              <input type="text" />
            </div>
            <div className="messInput">
              <h1>MESSAGE *</h1>
              <textarea name="" id="" rows="10"></textarea>
            </div>
            <button className="contact_content-leftForm-btn">Send Mess</button>
          </div>
        </div>
        <div className="contact_content-right"></div>
      </div>
    </div>
  );
};

export default ContactPage;
