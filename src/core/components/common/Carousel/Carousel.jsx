import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const Carousel = ({
  slidesPerView = 3, // Default slides per view
  spaceBetween = 10, // Default space between slides
  loop = true,
  navigation = true,
  pagination = true,
  autoplay = false,
  items = [],
}) => {
  return (
    <Swiper
      modules={[Navigation, Pagination, Autoplay]}
      slidesPerView={slidesPerView}
      spaceBetween={spaceBetween}
      loop={loop}
      navigation={navigation}
      pagination={pagination ? { clickable: true } : false}
      autoplay={autoplay ? { delay: 3000, disableOnInteraction: false } : false}
      style={{
        width:"100%"
      }}
    >
      {items.map((item, index) => (
        <SwiperSlide  key={index}>
          <div className="slide-content">{item}</div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default Carousel;
