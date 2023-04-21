import React from "react";
import "./title-page-admin.scss";

const TitlePageAdmin = ({ title }) => {
  return (
    <div className="title-admin">
      <h1>{title}</h1>
    </div>
  );
};

export default TitlePageAdmin;
