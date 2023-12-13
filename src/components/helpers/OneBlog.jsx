import React from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { Pattern2, Pattern3 } from '../patterns/Pattern1';
import { Link , useNavigate, useParams } from 'react-router-dom';
import { baseImg } from '../../API/API';
import Moment from 'react-moment';

const OneBlog = ({classn ,blogs , settings , name , onHere }) => {
  const navigate = useNavigate() 

  return (
    <div className={`Slider_1_Img ${classn}`}>
      {onHere ? <Pattern2 /> : <Pattern3 />}
      <div className="h1 clip"> {name} </div>
          <Slider {...settings} className='container' >

            {blogs.map((e,index)=>(
                  <div  key={index} className="coverImg">
                      <img src={baseImg + e.thumbnail} alt=""  />
                      <div className="date" onClick={_=> navigate(`/blog/${e._id}`)} > <Moment format="dddd - YYYY/MM/DD" date={e.createdAt} /> </div>
                      <p className='h2' onClick={_=> navigate(`/blog/${e._id}`)} >{e?.title?.length > 60 ? e?.title?.slice(0,60) + ".." : e?.title }</p>
                      <button className='bt' onClick={_=> navigate(`/blog/${e._id}`)}> <i className="fa-solid fa-angle-right"></i> </button>
                  </div>
              ))}

          </Slider>
        </div>
  )
}

export default OneBlog