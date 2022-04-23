import React from "react";
import "./Banner.css";
import logo from "../images/banner.jpg";
function Banner() {
  return (
    <div className="banner-container">
      <div className="banner-img">
        <img src={logo} alt="banner" />
      </div>
    </div>
  );
}

export default Banner;
