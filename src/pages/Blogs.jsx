import React, { useEffect, useState } from 'react'
import Navbar from '../components/Navbar'
import IntroImg from "../assets/blog/intro.jpg"
import OneBlog from '../components/helpers/OneBlog';
import Footer from '../components/Footer';
import Pattern1, { Divider } from '../components/patterns/Pattern1';

import BlogImg1 from "../assets/blog/blog1.jpg"
import BlogImg2 from "../assets/blog/blog2.jpg"
import BlogImg3 from "../assets/blog/blog3.jpg"
import BlogImg4 from "../assets/blog/blog4.jpg"
import BlogImg5 from "../assets/blog/blog5.jpg"
import Animation from '../components/helpers/Animation';

let blogs = [
  {img:BlogImg1 , type:"1" , title:"10 Proven Strategies to Boost Your Online Business Growth" , date : " November 9, 2023" },
  {img:BlogImg2 , type:"2" , title:"15 Key Local SEO Statistics to Boost Your Local Business" , date : " November 9, 2023" },
  {img:BlogImg3 , type:"3" , title:"Guide to Branding: Crafting Your Business Identity" , date : " November 9, 2023" },
  {img:BlogImg4 , type:"4" , title:"Emoji Title For test" , date : " November 9, 2023" },
  {img:BlogImg5 , type:"5" , title:"How to Use SEO in E-commerce to Drive Traffic and Boost Sales" , date : " November 9, 2023" },
]






const Blogs = () => {

  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1 , 
    // autoplay:true ,
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
      <Animation />
      <div className="container"> <Navbar /></div>
        <div className="coverImg"> <img src={IntroImg} alt="" /></div>
        <Divider classn="divider divider-top" />
        <div className="quotation">
          <Pattern1 />
          <div className="container">
                <p className="h3 " data-aos="fade-up">Stay updated with our latest news, strategies, and tactics to succeed in your business.</p>
          </div>
          </div>

        <Divider classn="divider " />
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