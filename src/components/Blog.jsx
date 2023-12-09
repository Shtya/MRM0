import React, { useEffect, useRef, useState } from 'react'
import Slider_1_Img from './Slide/Slider_1_Img';
import { Pattern2, Pattern3 } from './patterns/Pattern1';

import BlogImg1 from "../assets/blog/blog1.webp"
import BlogImg2 from "../assets/blog/blog4.jpeg"
import BlogImg3 from "../assets/blog/blog5.webp"
import BlogImg4 from "../assets/blog/blog6.jpeg"
import BlogImg5 from "../assets/blog/blog7.webp"

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
      breakpoint: 1000,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        initialSlide: 1 ,
        dots: false,
      }
    },
    {
      breakpoint: 700,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1 ,
        dots: false,
      }
    }
  ]
};


const Blog = () => {
  let blogs = [
    {img:BlogImg1 , title:"Emoji" , date : "April 2,2000" , desc:"SketChing a love letter to nature Lorem . "},
    {img:BlogImg5 , title:"Emoji" , date : "April 2,2000" , desc:"SketChing a love letter to nature Lorem . "},
    {img:BlogImg2 , title:"Emoji" , date : "April 2,2000" , desc:"SketChing a love letter to nature Lorem . "},
    {img:BlogImg3 , title:"Emoji" , date : "April 2,2000" , desc:"SketChing a love letter to nature Lorem . "},
    {img:BlogImg4 , title:"Emoji" , date : "April 2,2000" , desc:"SketChing a love letter to nature Lorem . "},
    {img:BlogImg5 , title:"Emoji" , date : "April 2,2000" , desc:"SketChing a love letter to nature Lorem . "},
    {img:BlogImg1 , title:"Emoji" , date : "April 2,2000" , desc:"SketChing a love letter to nature Lorem . "},
  ]

  return (
    <section className='blog' id='Blog'>
      <Pattern2 />
      <div className="container"> <div className="h1 clip hidden-text">BLOGS</div> </div>
      <p className="phead hidden-text" >Latest Insights and News to Keep Your Strategies Alive </p>

      {/* <BLOG_SLIDER data={blogs} /> */}
      <Slider_1_Img  data={blogs} settings={settings} />

    </section>
  )
}

export default Blog
