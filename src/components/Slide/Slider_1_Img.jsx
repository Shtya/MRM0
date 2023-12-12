import React from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { useNavigate } from 'react-router-dom';


const Slider_1_Img = ({data , settings }) => {
  const navigate = useNavigate()

  return (
    <div className="Slider_1_Img">
          <Slider {...settings} className='container' >
            {data.map((e,index)=>(
                  <div  key={index} className="coverImg ">
                      <img src={e.img} alt=""  />
                      <div className="date" style={{cursor:"pointer"}} onClick={_=> navigate(`/blog/${e.type}`)} >{e.date}</div>
                      <p className='h2' style={{cursor:"pointer"}} onClick={_=> navigate(`/blog/${e.type}`)}     >{e.title}</p>
                      <button className='bt' onClick={_=> navigate(`/blog/${e.type}`)}> <i className="fa-solid fa-angle-right"></i> </button>
                  </div>
              ))}
          </Slider>
        </div>
  )
}

export default Slider_1_Img