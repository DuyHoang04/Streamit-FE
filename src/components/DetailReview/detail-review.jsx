import React, { useRef, useState } from "react";
import "./detail-review.scss";
import InputCustom from "../../common/input/InputCustom";
import ButtonCustom from "../../common/button/buttonCustom";
import { Rate, Avatar, Pagination } from "antd";
import { UserOutlined } from "@ant-design/icons";
import { validateData } from "../../utils";
import { toast } from "react-hot-toast";
import { format } from "timeago.js";
import { BASE_URL } from "../../utils/apiConfig";

const DetailReview = ({ data, handleAddComment }) => {
  const detailTabs = ["Description", "Reviews"];
  const [indexTab, setIndexTab] = useState(0);
  const [changeContent, setChangeContent] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const nameReviewRef = useRef();
  const emailReviewRef = useRef();
  const ratingReviewRef = useRef();
  const commentRef = useRef();

  // limit va total page review
  const totalReview = data?.reviews?.length;
  const limitReview = 5;

  const handleChange = (index, title) => {
    setIndexTab(index);
    title === "Description" ? setChangeContent(false) : setChangeContent(true);
  };

  const handleCommentMovie = () => {
    const dataComment = {
      name: nameReviewRef.current.input.value,
      rating: ratingReviewRef.current.value,
      comment: commentRef.current.resizableTextArea.textArea.value,
    };
    if (validateData(dataComment)) {
      handleAddComment(dataComment);
    } else {
      toast.error("Ghi day du");
    }
  };

  const handlePageChange = (page, pageSize) => {
    setCurrentPage(page);
  };

  const getDataReview = () => {
    const startIndex = (currentPage - 1) * limitReview;
    const endIndex = startIndex + limitReview;
    return data?.reviews?.slice(startIndex, endIndex);
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
              <h1> {item}</h1>
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
                <select name="rating" ref={ratingReviewRef}>
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
                  <InputCustom label="Name" large ref={nameReviewRef} />
                </div>
                <div className="detailTabs_reviewCreate-email">
                  <InputCustom label="Email" large ref={emailReviewRef} />
                </div>
              </div>
              <div className="detailTabs_reviewCreate-comment">
                <InputCustom
                  label="Comment"
                  isTextarea
                  large
                  ref={commentRef}
                />
              </div>
              <div className="detailTabs_reviewCreate-btn">
                <ButtonCustom large onClick={handleCommentMovie}>
                  Submit
                </ButtonCustom>
              </div>
            </div>
            {getDataReview().length > 0 ? (
              <div className="detailTabs_reviewCmt">
                <div className="detailTabs_reviewCmtContainer">
                  {getDataReview()?.map((item, index) => (
                    <div key={index} className="detailTabs_reviewCmt">
                      <div className="detailTabs_reviewCmt-infoUser">
                        <Avatar
                          size={50}
                          src={
                            item?.userImage
                              ? `${BASE_URL}/${item?.userImage}`
                              : "https://png.pngitem.com/pimgs/s/649-6490124_katie-notopoulos-katienotopoulos-i-write-about-tech-round.png"
                          }
                          // icon={<UserOutlined />}
                        />
                        <div className="detailTabs_reviewCmt-name">
                          {item?.name}
                        </div>
                      </div>
                      <div className="detailTabs_reviewCmt-rating">
                        <Rate disabled value={item?.rating} />
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
                <div className="comment_pagination">
                  <Pagination
                    current={currentPage}
                    pageSize={limitReview} // số lượng review trong 1 trang
                    total={totalReview} // tổng số review
                    onChange={handlePageChange}
                  />
                </div>
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
