import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { NoImage } from "../../../../assets/images";
import { IconChevronLeft, IconChevronRight } from '@tabler/icons-react'
import './index.scss';

const Carousel = ({
  slidesPerView = 3,
  spaceBetween = 10,
  loop = true,
  navigation = true,
  pagination = true,
  autoplay = false,
  items = [],
  showButton = true,
  className = ""
}) => {
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  return (
    <div className={`${className}`}>
    <div className="carousel-container">
      {showButton && <button ref={prevRef} className="custom-nav-button left">
        <IconChevronLeft size={32} />
      </button>}

      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        slidesPerView={slidesPerView}
        spaceBetween={spaceBetween}
        loop={loop}
        navigation={{
          prevEl: prevRef.current,
          nextEl: nextRef.current,
        }}
        pagination={pagination ? { clickable: true } : false}
        autoplay={autoplay ? { delay: 3000, disableOnInteraction: false } : false}
        onSwiper={(swiper) => {
          setTimeout(() => {
            swiper.params.navigation.prevEl = prevRef.current;
            swiper.params.navigation.nextEl = nextRef.current;
            swiper.navigation.init();
            swiper.navigation.update();
          });
        }}
        style={{ width: "100%" }}
      >
        {items?.map((data, index) => (
          <SwiperSlide key={index}>
            <div className="main_carousel">
              <div className="main_img">
                <img
                  src={`http://zen/R50B3/UFS/demostoreQI9S5BDATC0M1KYJH/AlbumImages/${data?.AlbumImageFol}/${data?.AlbumImageName}`}
                  alt=""
                  onError={(e) => {
                    e.target.src = NoImage;
                  }}
                />
              </div>
              <div className="main_carousel_text"></div>
              <span>{data?.AlbumName}</span>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      {showButton && <button ref={nextRef} className="custom-nav-button right">
        <IconChevronRight size={32} />
      </button>}
    </div>
    </div>
  );
};

export default Carousel;
