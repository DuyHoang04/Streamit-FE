import React, { useEffect } from "react";
import "./about-page.scss";
import Section from "../../assets/banner.jpg";
import { aboutTeam, aboutView } from "../../utils/myData";
import AboutContact from "../../components/about-contact/about-contact";

const AboutPage = () => {
  const myBackGround = {
    backgroundImage: `url(${Section})`,
    height: "70vh",
    width: "100vw",
    backgroundPosition: "center",
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
    <div className="about">
      <div className="aboutSection" style={myBackGround}>
        <div className="aboutSection_content">
          <h1 className="aboutSection_content-title">OUR MISSION</h1>
          <p className="aboutSection_content-decs">
            YOUR SUCCESS IS OUR AMBITION.
          </p>
          <p className="aboutSection_content-decs">
            YOUR DEFEAT SPURS US ON TO BE BETTER.
          </p>
        </div>
      </div>
      <div className="aboutTeam">
        <div className="aboutTeam_title">
          <h1 className="title"> -OUR TEAM</h1>
          <div className="aboutTeam_content">
            {aboutTeam.map((item, index) => (
              <div key={index} className="aboutTeam_content-info">
                <img src={item.img} alt="" />
                <h1 className="aboutTeam_content-name">{item.name}</h1>
                <p className="aboutTeam_content-duty">{item.duty}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="aboutView">
        <div className="aboutView_content">
          {aboutView.map((item, index) => (
            <div key={index} className="aboutView_content-item">
              <h1 className="aboutView_content-title">{item.title}</h1>
              {item.decs?.map((decs, index) => (
                <p key={index} className="aboutView_content-decs">
                  {decs}
                </p>
              ))}
            </div>
          ))}
        </div>
        <div className="aboutView_join">
          <div className="aboutView_join-title">
            Would you like to join team & build your dream NOW?
          </div>
          <button className="aboutView_join-btn">JOIN OUR TEAM</button>
        </div>
      </div>
      <AboutContact />
    </div>
  );
};

export default AboutPage;
