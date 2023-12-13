import React from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { useNavigate } from 'react-router-dom';


const Related = ({data , settings }) => {
  const navigate = useNavigate()

  return (
    <div className="Related">
          <Slider {...settings} className='container' >
            {data?.map((e,index)=>(
                  <div  key={index} className="coverImg ">
                      <img src={e.img} alt=""  />
                      <div className="content">
                      <div className="date" onClick={_=> navigate(`/blog/${e.type}`)} >{e.date} </div>
                      <p className='h2' onClick={_=> navigate(`/blog/${e.type}`)} >{e?.title?.length > 60 ? e?.title?.slice(0,60) + ".." : e?.title }</p>
                      <button className='bt' onClick={_=> navigate(`/blog/${e.type}`)}> <i className="fa-solid fa-angle-right"></i> </button>
                      </div>
                  </div>
              ))}
          </Slider>
        </div>
  )
}

export default Related