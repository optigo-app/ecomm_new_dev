import React from 'react';
import './index.scss';
import { AlbumData } from '../../../json/data/album';
import { NoImage } from '../../../../assets/images/index';
import Carousel from '../../common/Carousel/Carousel';

const Album = ({ isAlbumView = 2 }) => {

  return (
    <div className='main_album_container'>
      <div className="main_album">
        <div className="main_header">
          <h1>Album</h1>
        </div>

        {/* View 1: Grid-based Album display */}
        {isAlbumView === 1 && (
          <div className="main_carousel_row">
            {AlbumData?.slice(0, 4)?.map((data, i) => (
              <div className="main_carousel" key={i}>
                <img
                  src={`http://zen/R50B3/UFS/demostoreQI9S5BDATC0M1KYJH/AlbumImages/${data?.AlbumImageFol}/${data?.AlbumImageName}`}
                  alt=""
                  onError={(e) => {
                    e.target.src = NoImage;
                  }}
                />
                <div className="main_carousel_text"></div>
                <h2>{data?.AlbumName}</h2>
              </div>
            ))}
          </div>
        )}

        {/* View 2: Swiper-based Album display */}
        {isAlbumView === 2 && (
          <div className="main_carousel_row_swiper">
            <Carousel
              slidesPerView={4}
              spaceBetween={20}
              loop={true}
              navigation={true}
              pagination={false}
              autoplay={true}
              items={AlbumData}
            />
          </div>
        )}

      </div>
    </div>
  );
};

export default Album;
