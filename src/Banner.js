import React from "react";
import Slider from "react-slick";
const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1
};
const Banner = () => {
  return (
    <div>
      <h2> Single Item</h2>
      <Slider {...settings}>
        <div className="w-100">
          <img src="https://source.unsplash.com/weekly?water" alt="" />
        </div>
        <div className="w-100">
          <img src="https://source.unsplash.com/weekly?water" alt="" />
        </div>
        <div className="w-100">
          <img src="https://source.unsplash.com/weekly?water" alt="" />
        </div>
      </Slider>
    </div>
  );
};
export default Banner;
