import React from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";


const Slider_2_Imgs = ({data , settings }) => {
  const len = Math.ceil(data?.length/2)
  return (
    <div className="Slider_2_Imgs">
          <Slider {...settings} className='container' >
            {Array(len).fill(1).map((e,index)=>(
                  <div className="box" key={index} > 
                    <div className="cover"> <img src={data[index]?.img} /> </div>
                    <div className="cover"> {data[index + len]?.img && <img src={data[index + len]?.img} />} </div>
              </div>
              ))}

          </Slider>
        </div>
  )
}

export default Slider_2_Imgs