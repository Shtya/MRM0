import React, { useEffect, useState } from 'react'

import { ImgsPortfolio } from './Images';
import Slider_2_Imgs from './Slide/Slider_2_Imgs';
import { Pattern2, Pattern3, Pattern4 } from './patterns/Pattern1';

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
      }
    },
    {
      breakpoint: 900,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        initialSlide: 1 ,
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1 ,
      }
    }
  ]
};



const Portfolio = ({header  , typeGallery  }) => {
  const headers = [ "all" , "Signages", "Stands", "Exhibition", "branding", "photography", "Web design",]

  const Imgs = ImgsPortfolio(headers)
  const [data , setdata ] = useState(Imgs)
  const [type , settype ] =useState( "all") ;
  useEffect(_=>{ setdata(Imgs.filter(e => e.type.includes("all"))) } ,[])

  const handleHeaders = (ele)=>{
    setdata( Imgs.filter(e =>{
      settype(ele)
      return e.type.includes(ele)
    }) ) 
  }


  return (
    <section className='portfolio' id="Portfolio">
      <Pattern3 />
      <h2 className='h1 clip' > OUR WORKS</h2>
      {!header == false && <div className="header1">{
          headers.map((e,index)=> (
          <li className={type == e ? "active p" : "p"} key={index} onClick={_=> handleHeaders(e)} > {e} </li>
        ))}</div>}


      <Slider_2_Imgs data={data } settings={settings} />
    </section>
  )
}

export default Portfolio