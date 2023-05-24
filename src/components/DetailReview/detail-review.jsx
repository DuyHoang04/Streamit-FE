import React, { useState } from "react";
import "./detail-review.scss";
import InputCustom from "../../common/input/InputCustom";
import ButtonCustom from "../../common/button/buttonCustom";

const DetailReview = ({ data }) => {
  const detailTabs = ["Description", "Reviews"];
  const [indexTab, setIndexTab] = useState(0);
  const [changeContent, setChangeContent] = useState(false);

  const handleChange = (index, title) => {
    setIndexTab(index);
    title === "Description" ? setChangeContent(false) : setChangeContent(true);
  };

  return (
    <>
      <div className="detailTabs">
        <div className="detailTabs_nav">
          {detailTabs.map((item, index) => (
            <div
              key={index}
              className={`detailTabs_nav-item ${
                indexTab === index ? "active" : ""
              } `}
              onClick={(e) => handleChange(index, item)}
            >
              {item}
            </div>
          ))}
        </div>
        {!changeContent ? (
          <div className="detailTabs_decs">{data?.description}</div>
        ) : (
          <div className="detailTabs_review">
            {/* CMT */}

            {/* CREATE CMT */}
            <div className="detailTabs_reviewCreate">
              <div className="detailTabs_reviewCreate-title">
                <p>WRITE A CUSTOMER REVIEW</p>
              </div>
              <div className="detailTabs_reviewCreate-rating">
                <h1>Rating</h1>
                <select name="rating" onChange={() => {}}>
                  <option value="">Select...</option>
                  <option value="1">1 - Poor</option>
                  <option value="2">2 - Fair</option>
                  <option value="3">3 - Good</option>
                  <option value="4">4 - Very Good</option>
                  <option value="5">5 - Excellent</option>
                </select>
              </div>
              <div className="detailTabs_review-info">
                <div className="detailTabs_reviewCreate-name">
                  <InputCustom label="Name" large />
                </div>
                <div className="detailTabs_reviewCreate-email">
                  <InputCustom label="Email" large />
                </div>
              </div>
              <div className="detailTabs_reviewCreate-comment">
                <InputCustom label="Comment" isTextarea large />
              </div>
              <div className="detailTabs_reviewCreate-btn">
                <ButtonCustom large>Submit</ButtonCustom>
              </div>
            </div>
            {data?.reviews.length > 0 ? (
              <div className="detailTabs_reviewCmtContainer">
                {data?.reviews?.map((item, index) => (
                  <div key={index} className="detailTabs_reviewCmt">
                    <div className="detailTabs_reviewCmt-name">
                      {item?.username}
                    </div>
                    <div className="detailTabs_reviewCmt-rating">
                      <Rating
                        name="half-rating-read"
                        defaultValue={Number(item?.rating)}
                        readOnly
                      />
                    </div>
                    <div className="detailTabs_reviewCmt-time">
                      {format(item?.createdAt)}
                    </div>
                    <div className="detailTabs_reviewCmt-decs">
                      <p>{item?.comment}</p>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <h1 className="empty">There are no comment yet.</h1>
            )}
          </div>
        )}
      </div>
    </>
  );
};

export default DetailReview;
