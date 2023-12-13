import React, { useEffect, useState } from 'react'
import Navbar from '../components/Navbar'
import IntroImg from "../assets/blog/intro.jpg"
import OneBlog from '../components/helpers/OneBlog';
import Footer from '../components/Footer';
import Pattern1, { Divider } from '../components/patterns/Pattern1';

// import { blogs } from '../components/docs_blogs';

import Animation from '../components/helpers/Animation';
import baseURL from '../API/API';

const Blogs = () => {
  const [blogs , setblogs] = useState([])
  const [customTitle , setcustomTitle] = useState([])
  useEffect(_=>{ baseURL.get("").then(res => { setblogs(res.data.data) } )} ,[])
  
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1 , 
    autoplay:true ,
    responsive: [
      {
        breakpoint: 1100,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 1,
          dots: true,
        }
      },
      {
        breakpoint: 680,
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

      <Footer />
    </div>
  )
}

export default Blogs