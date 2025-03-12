import React, { useEffect, useState } from 'react'
import './index.scss';
import Card from '../../common/Card/Card';
import Carousel from '../../common/Carousel/Carousel';
import Header from '../../common/Header/Header';
import { NoImage } from '../../../../assets/images';

const Bestseller = ({
  isBestSellerView = 1,
  Cardlayout = 1,
  data,
  slidesPerView = 3,
  autoplay = false,
  navigation = false,
  headerConfig,
}) => {
  const imageUrlPath = `http://zen/R50B3/UFSImage/demostoreQI9S5BDATC0M1KYJH_uKey/Design_Image/`;
  return (
    <div className="main_Bestseller_container">

      {/* Header Section */}
      <Header {...headerConfig} CurrentView={isBestSellerView} />

      <div className="main_Bestseller_div">

        {/* View 1: Grid with banner */}
        {isBestSellerView === 1 && (
          <div className='main_Bestseller_layout1'>
            <div className='main_Bestseller_cards_div'>
              <Card data={data} imageUrlPath={imageUrlPath} Cardlayout={Cardlayout} />
            </div>
            <div className='main_Bestseller_banner_div'>
              <img src="http://fgstore.web/WebSiteStaticImage/Banner/bestsellerbanner1.png" alt="" onError={(e) => {
                e.target.src = NoImage;
              }} />
            </div>
          </div>
        )}

        {/* View 2: Full Screen Carousel */}
        {isBestSellerView === 2 && (
          <Carousel
            isAlbum={false}
            imageUrlPath={imageUrlPath}
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

        {/* View 3: Grid view  */}
        {(isBestSellerView === 3) && (
          <Card data={data} imageUrlPath={imageUrlPath} Cardlayout={Cardlayout} />
        )}

      </div>
    </div>
  )
}

export default Bestseller