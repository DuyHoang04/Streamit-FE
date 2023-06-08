import React from "react";
import "./loader.scss";

const Loader = () => {
  return (
    <div className="loader_container">
      <div class="loading-wave">
        <div class="loading-bar"></div>
        <div class="loading-bar"></div>
        <div class="loading-bar"></div>
        <div class="loading-bar"></div>
      </div>
    </div>
  );
};

export default Loader;
