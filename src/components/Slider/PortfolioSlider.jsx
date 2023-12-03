import React from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 4,
  slidesToScroll: 1
};


const PortfolioSlider = ({data}) => {
  return (
    <Slider {...settings} className="slider-1">
      {data.slice(0 , (data.length/2)).map((e,index) => ( 
        <div className="CoverImgs" key={index}> 
          <img  src={data[index].img} alt="" />  
          <img src={data[(data.length -1 )- index].img} alt="" />  
        </div>
        ))
        }
      </Slider>
  )
}

export default React.memo(PortfolioSlider)