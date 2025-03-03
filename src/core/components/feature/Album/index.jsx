import React from "react";
import "./index.scss";
import { Carousel, Header, Gridblock } from "../../common";

const Album = ({
  isAlbumView = 1,
  data,
  slidesPerView = 3,
  autoplay = false,
  navigation = false,
  headerConfig, // Receiving header configurations as a prop
}) => {
  return (
    <div className="main_album_container">
      <div className="main_album">
        {/* Header Section */}
        <Header {...headerConfig} CurrentView={isAlbumView} />

        {/* View 1: Grid-based Album display */}
        {isAlbumView === 1 && <Gridblock items={data} />}

        {/* View 2: Swiper-based Album */}
        {isAlbumView === 2 && (
          <Carousel
            slidesPerView={slidesPerView}
            spaceBetween={20}
            loop={true}
            navigation={navigation}
            pagination={false}
            autoplay={autoplay}
            items={data}
            className="main_carousel_row_swiper"
          />
        )}

        {/* View 3: Full Screen Carousel */}
        {isAlbumView === 3 && (
          <Carousel
            slidesPerView={slidesPerView}
            spaceBetween={20}
            loop={true}
            navigation={navigation}
            pagination={false}
            autoplay={autoplay}
            items={data}
            showButton={true}
            className="main_carousel_row_swiper_fullscreen"
          />
        )}
      </div>
    </div>
  );
};

export default Album;
