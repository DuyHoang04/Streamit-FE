import React from "react";
import Map from "../../assets/map.jpg";
import "./about-contact.scss";

const AboutContact = () => {
  const myBackGround = {
    backgroundImage: `url(${Map})`,
    height: "80vh",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
  };

  return (
    <div className="homeContact" style={myBackGround}>
      <div className="homeContact_container">
        <div className="homeContact_container-title">Contact Us</div>
        <div className="homeContact_container-decs">
          Learn about our company profile, communityimpact, sustainable
          motivation, and more.
        </div>
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
        <button className="homeContact_container-btn">Send Mess</button>
      </div>
    </div>
  );
};

export default AboutContact;
