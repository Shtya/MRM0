import React, { useEffect, useRef, useState } from 'react'
import {motion} from "framer-motion"
import BLOG_SLIDER from './Slider/BLOG_SLIDER';
import Slider_1_Img from './Slide/Slider_1_Img';
import { Pattern2, Pattern3 } from './patterns/Pattern1';

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
    {img:"./blog1.webp" , title:"Emoji" , date : "April 2,2000" , desc:"SketChing a love letter to nature Lorem . "},
    {img:"./blog4.jpeg" , title:"Emoji" , date : "April 2,2000" , desc:"SketChing a love letter to nature Lorem . "},
    {img:"./blog5.webp" , title:"Emoji" , date : "April 2,2000" , desc:"SketChing a love letter to nature Lorem . "},
    {img:"./blog6.jpeg" , title:"Emoji" , date : "April 2,2000" , desc:"SketChing a love letter to nature Lorem . "},
    {img:"./blog7.webp" , title:"Emoji" , date : "April 2,2000" , desc:"SketChing a love letter to nature Lorem . "},
    {img:"./blog6.jpeg" , title:"Emoji" , date : "April 2,2000" , desc:"SketChing a love letter to nature Lorem . "},
    {img:"./blog7.webp" , title:"Emoji" , date : "April 2,2000" , desc:"SketChing a love letter to nature Lorem . "},
  ]

  return (
    <section className='blog' id='Blog'>
      <Pattern2 />
      <div className="container"> <div className="h1 clip hidden-text">BLOGS</div> </div>
      <p className="p hidden-text" >Latest Insights and News to Keep Your Strategies Alive </p>

      {/* <BLOG_SLIDER data={blogs} /> */}
      <Slider_1_Img  data={blogs} settings={settings} />

    </section>
  )
}

export default Blog
