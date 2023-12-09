import React, { useEffect, useState } from 'react'
import Navbar from '../components/Navbar'
import { ImgsClients } from '../components/Images';
import IntroImg from "../assets/blog/intro.jpg"
import OneBlog from '../components/helpers/OneBlog';
import Footer from '../components/Footer';
import Pattern1, { Divider } from '../components/patterns/Pattern1';

let blogs = [
  {img:"./blog1.webp" , title:"Emoji" , date : "April 2,2000" , desc:"SketChing a love letter to nature Lorem, ipsum dolor. "},
  {img:"./blog4.jpeg" , title:"Emoji" , date : "April 2,2000" , desc:"SketChing a love letter to nature Lorem, ipsum dolor. "},
  {img:"./blog5.webp" , title:"Emoji" , date : "April 2,2000" , desc:"SketChing a love letter to nature Lorem, ipsum dolor. "},
  {img:"./blog6.jpeg" , title:"Emoji" , date : "April 2,2000" , desc:"SketChing a love letter to nature Lorem, ipsum dolor. "},
  {img:"./blog7.webp" , title:"Emoji" , date : "April 2,2000" , desc:"SketChing a love letter to nature Lorem, ipsum dolor. "},
  {img:"./blog6.jpeg" , title:"Emoji" , date : "April 2,2000" , desc:"SketChing a love letter to nature Lorem, ipsum dolor. "},
  {img:"./blog7.webp" , title:"Emoji" , date : "April 2,2000" , desc:"SketChing a love letter to nature Lorem, ipsum dolor. "},
]


const Blogs = () => {
  let imgs = ImgsClients() ;


  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1 , 
    autoplay:true ,
    responsive: [
      {
        breakpoint: 1000,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 1,
          dots: true,
        }
      },
      {
        breakpoint: 580,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1 ,
        }
      }
    ]
  };

  return (
    <div className='blog-page'>
      <div className="container"> <Navbar /></div>

        <div className="coverImg"> <img src={IntroImg} alt="" /></div>

        <Divider classn="divider divider-top" />
        <OneBlog onHere={true} classn="blog-1" name="Digital Marketing News" settings={settings}  blogs={blogs} />
        <Divider classn="divider-left" />
        <OneBlog onHere={false} classn="blog-2" name="Latest Updates & Insights" settings={settings}  blogs={blogs} />
        <Divider classn="divider" />
        <OneBlog onHere={true} classn="blog-3" name="Tips & Strategies" settings={settings}  blogs={blogs} />
        
        {/* <div className="subscribe">
        <div className="container">
          <div className="h1">Subscribe to Our Newsletter</div>
          <p> for Exclusive Updates, Insights, and Offers</p>
          <div className="subscribe-box">
            <input type="email" name="" placeholder='Type your email address' id="" />
            <button className='bt'>Subscribe</button>
          </div>
        </div>
        </div> */}

      <Footer />
    </div>
  )
}

export default Blogs