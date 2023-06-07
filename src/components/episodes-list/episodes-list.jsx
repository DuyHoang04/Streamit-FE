import React, { useState } from "react";
import "./episodes-list.scss";
import { LeftOutlined, RightOutlined } from "@ant-design/icons";
import CardEpisodes from "../cart-episoder/card-episodes";

const EpisodesList = ({ episodesData, movieId }) => {
  const [isMobile, setIsMobile] = useState(window.innerWidth);
  const [currentPosition, setCurrentPosition] = useState(0);

  const handlePrev = () => {
    if (currentPosition > 0) {
      setCurrentPosition(currentPosition - 1);
    }
  };

  const handleNext = () => {
    console.log("vo");
    if (isMobile < 768) {
      if (currentPosition < episodesData.length - 2) {
        setCurrentPosition(currentPosition + 1);
      }
    } else {
      if (currentPosition < episodesData.length - 4) {
        setCurrentPosition(currentPosition + 1);
      }
    }
  };

  return (
    <div className="episodes_list">
      <div className="title">
        <h1>Episodes</h1>
        <div className="buttonContainer">
          <button onClick={handlePrev}>
            <LeftOutlined /> Prev
          </button>
          <button onClick={handleNext}>
            Next <RightOutlined />
          </button>
        </div>
      </div>
      <div className="slider">
        <div className="slider-container">
          <div
            className="slider-track"
            style={{ transform: `translateX(-${currentPosition * 360}px)` }}
          >
            {episodesData?.map((episode, index) => (
              <div className="cart-episode" key={index}>
                <CardEpisodes data={episode} movieId={movieId} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default EpisodesList;
