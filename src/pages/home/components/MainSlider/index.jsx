import PropTypes from "prop-types";
import { useState } from "react";
import { LeftOutlined, RightOutlined } from "@ant-design/icons";
import Carousel from "antd/lib/carousel";
import Image from "@components/Image";
import "./style.scss";

const Sliders = ({ slides }) => {
  const Arrow = (item) => {
    let { onClick } = item;
    return (
      <div
        className={`main-lk-slider ph-arrow-${item.sideArrow}`}
        onClick={onClick}
      >
        {item.iconArrow}
      </div>
    );
  };

  const [isSettings] = useState({
    autoplay: true,
    pauseOnHover: false,
    dots: false,
    arrows: true,
    effect: "fade",
    nextArrow: <Arrow sideArrow="right" iconArrow={<RightOutlined />} />,
    prevArrow: <Arrow sideArrow="left" iconArrow={<LeftOutlined />} />,
  });

  return (
    <>
      <Carousel className="main-lk-slider-container" {...isSettings}>
        {slides.map(function (item, index) {
          return (
            <div key={index}>
              <h1 className="main-lk-slider-title">{item.title}</h1>
              <div className="main-lk-slider-pre-bg"></div>
              <Image
                container={""}
                classImg={"main-lk-slider-image"}
                image={item.image}
                alt={"Laniakea Slider"}
                title={"Laniakea Slider"}
              />
            </div>
          );
        })}
      </Carousel>
    </>
  );
};

export default Sliders;

Sliders.propTypes = {
  slides: PropTypes.array.isRequired,
};
