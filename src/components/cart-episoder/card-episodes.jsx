import React from "react";
import "./card-episodes.scss";
import useSeries from "../../hook/useSeries";
import { BASE_URL } from "../../utils/apiConfig";
import { CaretRightOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";

const CardEpisodes = ({ data }) => {
  const { seriesInfo } = useSeries();
  return (
    <div className="cardEpisodes">
      <div className="episodes_image">
        <img src={`${BASE_URL}/${seriesInfo.bannerImage}`} alt="" />

        <div className="btn_play">
          <button>
            {" "}
            <CaretRightOutlined />
          </button>
        </div>
      </div>
      <div className="episodes_name">
        {" "}
        <h1>{data.episodeName}</h1>
      </div>
    </div>
  );
};

export default CardEpisodes;
