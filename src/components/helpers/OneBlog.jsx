import React from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";


const OneBlog = ({classn ,blogs , settings , name}) => {
  return (
    <div className={`Slider_1_Img ${classn}`}>
      <div className="h1"> {name} </div>
          <Slider {...settings} className='container' >
            {blogs.map((e,index)=>(
                  <div  key={index} className="coverImg">
                      <img src={e.img} alt=""  />
                      <div className="date">Thursday, November 9, 2023</div>
                      <p className='p'>{e.desc}</p>
                      <button className='bt'>More</button>
                  </div>
              ))}
          </Slider>
        </div>
  )
}

export default OneBlog