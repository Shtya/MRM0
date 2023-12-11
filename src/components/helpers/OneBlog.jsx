import React from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { Pattern2, Pattern3 } from '../patterns/Pattern1';
import { Link , useNavigate } from 'react-router-dom';


const OneBlog = ({classn ,blogs , settings , name , onHere}) => {
  const navigate = useNavigate() 

  return (
    <div className={`Slider_1_Img ${classn}`}>
      {onHere ? <Pattern2 /> : <Pattern3 />}
      <div className="h1 clip"> {name} </div>
          <Slider {...settings} className='container' >

            {blogs.map((e,index)=>(
                  <div  key={index} className="coverImg">
                      <img src={e.img} alt=""  />
                      <div className="date">{e.date} </div>
                      <p className='h2'>{e.title}</p>
                      <button className='bt' onClick={_=> navigate(`/blog/${e.type}`)}> <i className="fa-solid fa-angle-right"></i> </button>
                  </div>
              ))}

          </Slider>
        </div>
  )
}

export default OneBlog