import React from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";


const Slider_1_Img = ({data , settings }) => {
  return (
    <div className="Slider_1_Img">
          <Slider {...settings} className='container' >
            {data.map((e,index)=>(
                  <div  key={index} className="coverImg ">
                      <img src={e.img} alt=""  />
                      <div className="date">Thursday, November 9, 2023</div>
                      <p className='p'>{e.desc}</p>
                  </div>
              ))}
          </Slider>
        </div>
  )
}

export default Slider_1_Img