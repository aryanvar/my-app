import React, { useState } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import image1 from "../../assets/image1.jpg";
import "./caraousal.css";

const Caraousal = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <div className="slider-container">
      <Slider {...settings}>
        <div>
          <img
            src={image1}
            alt=""
            style={{ width: "50%", justifyContent: "center" }}
          />
        </div>
        <div>
          <img src={image1} alt="" />
        </div>
        <div>
          <img src={image1} alt="" />
        </div>
        <div>
          <img src={image1} alt="" />
        </div>
      </Slider>
    </div>
  );
};

export default Caraousal;
