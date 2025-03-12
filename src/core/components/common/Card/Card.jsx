import React, { useEffect, useState } from 'react'
import './index.scss'
import { NoImage } from '../../../../assets/images';

const Card = ({ data, imageUrlPath, Cardlayout }) => {
  console.log('Cardlayout: ', Cardlayout);
  return (
    <div className='main_Card'>
      <div className='main_Card_div'>

        {Cardlayout === 1 && (
          <>
            {data?.slice(0, 4)?.map((item, index) => {
              return (
                <div className='main_Card_Container' key={index}>
                  <div className='main_Card_image_div'>
                    <img
                      className='main_Card_image'
                      src={`${imageUrlPath}${item?.designno}~1.${item?.ImageExtension}`}
                      alt=""
                      onError={(e) => e.target.src = NoImage}
                    />
                  </div>
                  <div className="main_Card_details_div">
                    <div className='main_Card_designno'>
                      <span>{item?.designno}</span>
                    </div>
                    <div className='main_Card_weights_div'>
                      <span>GWT: {(item?.Gwt).toFixed(3)} </span>&nbsp;|&nbsp;
                      <span>NWT: {(item?.Nwt).toFixed(3)}</span>&nbsp;|&nbsp;
                      <span>DWT: {(item?.Dwt).toFixed(3)} / {item?.Dpcs}</span>&nbsp;|&nbsp;
                      <span>CWT: {(item?.CSwt).toFixed(3)} / {item?.CSpcs}</span>
                    </div>
                    <div className='main_Card_price_div'>
                      <span>INR {item?.UnitCostWithMarkUpIncTax}</span>
                    </div>
                  </div>
                </div>
              )
            })}
          </>
        )}
      </div>
      {Cardlayout === 2 && (
        <div className="main_Card_layout2_container">
          {data?.slice(0, 4)?.map((item, index) => {
            return (
              <div className="main_Card_Container_layout2" key={index}>
                <div className="main_Card_image_div_l2">
                  <img
                    className="main_Card_image_l2"
                    src={`${imageUrlPath}${item?.designno}~1.${item?.ImageExtension}`}
                    alt=""
                    onError={(e) => e.target.src = NoImage}
                  />
                </div>
                <div className="main_Card_details_div_l2">
                  <div className="main_Card_designno_l2">
                    <span>{item?.designno}</span>
                  </div>
                  <div className="main_Card_weights_div_l2">
                    <span>GWT: {(item?.Gwt).toFixed(3)} </span>&nbsp;|&nbsp;
                    <span>NWT: {(item?.Nwt).toFixed(3)}</span>&nbsp;|&nbsp;
                    <span>DWT: {(item?.Dwt).toFixed(3)} / {item?.Dpcs}</span>&nbsp;|&nbsp;
                    <span>CWT: {(item?.CSwt).toFixed(3)} / {item?.CSpcs}</span>
                  </div>
                  <div className="main_Card_price_div_l2">
                    <span>INR {item?.UnitCostWithMarkUpIncTax}</span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      )}

    </div>
  )
}

export default Card;