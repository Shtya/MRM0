import React, { useEffect, useState } from 'react'

import gallery1 from "../../assets/web-design/gallery1.jpg"
import gallery2 from "../../assets/web-design/gallery2.jpg"
import gallery3 from "../../assets/web-design/gallery3.jpg"
import gallery4 from "../../assets/web-design/gallery4.jpg"
import gallery5 from "../../assets/web-design/gallery5.jpg"
import gallery6 from "../../assets/web-design/gallery6.jpg"
import gallery7 from "../../assets/web-design/gallery7.jpg"


import Slider_2_Imgs from './Slider_2_Imgs';

var settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 1 , 
  autoplay:true ,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 900,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        initialSlide: 1 ,
        dots: false,
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1 ,
        dots: false,
      }
    }
  ]
};



const WebDesign = () => {
  const headers = [ "all" , "Signages", "Display Stands", "Exhibition Stand", "branding", "photography", "Web design",]
  const data = [ {img:gallery1},  {img:gallery2},  {img:gallery3},  {img:gallery4},  {img:gallery5},  {img:gallery6},  {img:gallery7},]


  return (
    <section className='portfolio' id="Portfolio">
      <h2 className='h1' >WORK OF ART</h2>

      <Slider_2_Imgs data={ data } settings={settings} />
    </section>
  )
}

export default WebDesign