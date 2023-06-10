import { Carousel, Rate, Button } from "antd";
import "./banner.scss";
import { useRef } from "react";
import { RightOutlined, LeftOutlined } from "@ant-design/icons";
import { BASE_URL } from "../../../utils/apiConfig";
const banner = ({ data }) => {
  const ref = useRef();
  const contentStyle = {
    width: "100%",
    height: "100vh",
    color: "#fff",
    lineHeight: "160px",
    textAlign: "center",
    background: "#364d79",
  };
  const column = [
    {
      MovieName: "BUSHLAND",
      imgMovie:
        "https://templates.iqonic.design/streamit/frontend/react/build/static/media/slider1.0160d581.jpg",
      rate: 4.5,
      age: 18,
      time: "1h30",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
      starring: "Karen Gilchrist, James Earl Jones",
      genres: "Action",
      tag: "Action, Adventure, Horror",
    },
    {
      MovieName: "SAIL COASTER",
      imgMovie:
        "https://templates.iqonic.design/streamit/frontend/react/build/static/media/slider2.5b31073d.jpg",
      rate: 4.7,
      age: 18,
      time: "1h30",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
      starring: "Karen Gilchrist, James Earl Jones",
      genres: "Action",
      tag: "Action, Adventure, Horror",
    },
    {
      MovieName: "THE ARMY",
      imgMovie:
        "https://templates.iqonic.design/streamit/frontend/react/build/static/media/slider3.e8b90612.jpg",
      rate: 4.7,
      age: 18,
      time: "1h30",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
      starring: "Karen Gilchrist, James Earl Jones",
      genres: "Action",
      tag: "Action, Adventure, Horror",
    },
  ];
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
                    <p>
                      <span>Tag:</span>{" "}
                      {item.genres.map((item) => item.name + " ")}
                    </p>
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
