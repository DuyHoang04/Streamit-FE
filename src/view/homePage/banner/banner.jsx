import { Carousel, Rate, Button } from "antd";
import "./banner.scss";
import { useRef } from "react";
import {
  RightOutlined,
  LeftOutlined,
  CaretRightOutlined,
} from "@ant-design/icons";
import { BASE_URL } from "../../../utils/apiConfig";
import { useNavigate } from "react-router-dom";

const banner = ({ data }) => {
  const ref = useRef();
  const navigate = useNavigate();

  const navigateVideoPage = (isSeries, movieId) => {
    if (isSeries) {
      navigate(`/view_video/${movieId}?isSeries=true&episodes=1`);
    } else {
      navigate(`/view_video/${movieId}`);
    }
  };

  return (
    <div>
      <Carousel autoplay ref={ref} className="banner_img">
        {data.map((item, idx) => {
          return (
            <div key={idx}>
              <div
                className="Bannercontainer"
                style={{
                  backgroundImage: `url(${BASE_URL}/${item.bannerImage.replace(
                    /\\/g,
                    "/"
                  )})`,
                  backgroundPosition: "50% 100%",
                  backgroundSize: "cover",
                  height: "100vh",
                }}
              >
                <div className="Bannercontent">
                  <div className="content_ left">
                    <h1 className="big_title">{item.name}</h1>
                    <div className="content_rate">
                      <Rate disabled value={Math.floor(item.rating) || 5} />
                      <div className="content_age">{`${18}+`}</div>
                      <p>{item.time}hr</p>
                    </div>
                    <div className="description">
                      <p>{item.description}</p>
                    </div>
                    <p>
                      <span>Starring:</span>{" "}
                      {item?.isSeries ? "Tv Show" : "Movie"}
                    </p>
                    <p>
                      {" "}
                      <span>Genres:</span> {item.genres[0].name}
                    </p>
                    <p className="tag">
                      <span>Tag:</span>{" "}
                      {item.genres.map((item) => item.name + " ")}
                    </p>
                    <button
                      className="btn-play"
                      onClick={(e) =>
                        navigateVideoPage(item?.isSeries, item._id)
                      }
                    >
                      <span class="button__text">Watch Now</span>
                      <span className="button__icon">
                        <CaretRightOutlined />
                      </span>
                    </button>
                  </div>
                  <div className="content_right"></div>
                </div>
                <div className="button">
                  <Button
                    className="leftBannerButton"
                    onClick={() => {
                      ref.current.prev();
                    }}
                    icon={<LeftOutlined />}
                  ></Button>
                  <Button
                    className="rightBannerButton"
                    onClick={() => {
                      ref.current.next();
                    }}
                    icon={<RightOutlined />}
                  ></Button>
                </div>
              </div>
            </div>
          );
        })}
      </Carousel>
    </div>
  );
};
export default banner;
