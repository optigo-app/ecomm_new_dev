import React from 'react'
import { NoImage } from '../../../../assets/images';
import './index.scss';

const Gridblock = ({items}) => {
  return (
    <div className="main_carousel_row">
    {items?.slice(0, 4)?.map((data, i) => (
      <div className="main_carousel" key={i}>
        <img
          src={`http://zen/R50B3/UFS/demostoreQI9S5BDATC0M1KYJH/AlbumImages/${data?.AlbumImageFol}/${data?.AlbumImageName}`}
          alt=""
          onError={(e) => {
            e.target.src = NoImage;
          }}
        />
        <span>{data?.AlbumName}</span>
      </div>
    ))}
  </div>
  )
}

export default Gridblock