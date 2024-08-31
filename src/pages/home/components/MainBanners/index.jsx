import PropTypes from "prop-types";
import { useState } from "react";
import AwesomeSwiper from "react-awesome-swiper";
import CardItems from "@components/CardItems";

const MainBanners = ({ carouselItems, banners }) => {
  const [isConfig] = useState({
    spaceBetween: 0,
    loop: false,
    autoplay: false,
    preloadImages: false,
    lazy: true,
    speed: 500,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    breakpoints: {
      1024: {
        slidesPerView: carouselItems[0],
        spaceBetween: 0,
      },
      992: {
        slidesPerView: carouselItems[1],
        spaceBetween: 0,
      },
      768: {
        slidesPerView: carouselItems[2],
        spaceBetween: 0,
      },
      640: {
        slidesPerView: carouselItems[3],
        spaceBetween: 0,
      },
    },
  });
  return (
    <>
      <AwesomeSwiper ref={(ref) => ref} config={isConfig}>
        <div className="swiper-wrapper">
          {banners.map((item, index) => (
            <div className="swiper-slide" key={index}>
              <CardItems item={item} />
            </div>
          ))}
        </div>
        <div className="swiper-button-prev ph-carousel-prev"></div>
        <div className="swiper-button-next ph-carousel-next"></div>
      </AwesomeSwiper>
    </>
  );
};
export default MainBanners;

MainBanners.propTypes = {
  carouselItems: PropTypes.array.isRequired,
  banners: PropTypes.array.isRequired,
};
