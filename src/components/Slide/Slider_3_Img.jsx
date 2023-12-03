import React from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";




const Slider_3_Img =  ({ settings , data }) => {
  const len = Math.ceil(data?.length/2)
  return (
    <div className="Slider_2_Imgs">
          <Slider {...settings} className='container' >
            {Array(len).fill(1).map((e,index)=>(
                  <div className="box" key={index} > 
                    <div className="cover"> <img src={data[index]} /> </div>
                    <div className="cover"> {data[index + len] && <img src={data[index + len]} />} </div>
              </div>
              ))}

          </Slider>
        </div>
  )

  return (
    <div className="Slider_3_Img">
          {/* <Slider {...settings} className='container' >
          <div className="coverImg"> {data?.slice(0 , 2).map((e,index) => ( <img key={index} src={e} alt="" /> ))}</div>
            <div className="coverImg"> {data?.slice(2 , 5).map((e,index) => ( <img key={index} src={e} alt="" /> ))}</div>
            <div className="coverImg"> {data?.slice(5 , 9).map((e,index) => ( <img key={index} src={e} alt="" /> ))}</div>
            <div className="coverImg"> {data?.slice(9 , 13).map((e,index) => ( <img key={index} src={e} alt="" /> ))}</div>
            <div className="coverImg"> {data?.slice(13 , 16).map((e,index) => ( <img key={index} src={e} alt="" /> ))}</div>
            <div className="coverImg"> {data?.slice(16 , 18).map((e,index) => ( <img key={index} src={e} alt="" /> ))}</div>
            <div className="coverImg"> {data?.slice(19 , 21).map((e,index) => ( <img key={index} src={e} alt="" /> ))}</div>
            <div className="coverImg"> {data?.slice(21 , 24).map((e,index) => ( <img key={index} src={e} alt="" /> ))}</div>
            <div className="coverImg"> {data?.slice(24 , 28).map((e,index) => ( <img key={index} src={e} alt="" /> ))}</div>
            <div className="coverImg"> {data?.slice(28 , 32).map((e,index) => ( <img key={index} src={e} alt="" /> ))}</div>
          </Slider> */}
        </div>
  )
}

export default Slider_3_Img