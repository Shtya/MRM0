import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";


import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import ImgIntro from "../assets/S_branding/intro.jpg"
import ImgSection from "../assets/S_branding/cover.png"
import Contact from '../components/Contact'
import Clients from '../components/Clients'


import Icon_1 from "../assets/S_gifts/offer1.png" ;
import Icon_2 from "../assets/S_gifts/offer2.png" ;
import Icon_3 from "../assets/S_gifts/offer3.png" ;
import Icon_4 from "../assets/S_gifts/offer4.png" ;


import gifts_1 from "../assets/S_gifts/gifts1.png" ;
import gifts_2 from "../assets/S_gifts/gifts2.png" ;
import gifts_3 from "../assets/S_gifts/gifts3.png" ;

import Outdoor_1 from "../assets/signages/outdoor/1.jpg" ;
import Outdoor_2 from "../assets/signages/outdoor/2.jpg" ;
import Outdoor_3 from "../assets/signages/outdoor/3.jpg" ;
import Outdoor_4 from "../assets/signages/outdoor/4.jpg" ;
import Outdoor_5 from "../assets/signages/outdoor/5.jpg" ;
import Outdoor_6 from "../assets/signages/outdoor/6.jpg" ;
import Outdoor_7 from "../assets/signages/outdoor/7.jpg" ;
import Outdoor_8 from "../assets/signages/outdoor/8.jpg" ;
import Animation from "../components/helpers/Animation";
import Pattern1, { Divider, Pattern2, Pattern3 } from "../components/patterns/Pattern1";



const BRANDING_SERVICES = [
  { img:Icon_1 , title:"Full Customization",                     desc:"Unique, on-brand gifts that stand out. Our complimentary in-house design services will help bring your vision to life."},
  { img:Icon_2 , title:"We consider every budget", desc:"We understand that every client has different needs. We offer multiple gifting options to fit any budget and deadline."},
  { img:Icon_3 , title:"Satisfaction Guaranteed"               , desc:"You're our top priority! We guarantee a smooth and enjoyable experience, no matter the size of your order. If you're not happy, we'll make it right!"},
  { img:Icon_4 , title:"Quality Craftsmanship"                , desc:"Our gifts and trophies are created with great care, using only top-quality materials and paying close attention to every detail. We take pride in meeting the highest standards to ensure that each piece is of the utmost quality."},
  ]

const S_Exhibition = () => {
  const images = [
    {img:Outdoor_1, animate:"fade-up" } ,
    {img:Outdoor_2, animate:"fade-up" } ,
    {img:Outdoor_3, animate:"fade-up" } ,
    {img:Outdoor_4, animate:"fade-up" } ,
    {img:Outdoor_5, animate:"fade-up" } ,
    {img:Outdoor_6, animate:"fade-up" } ,
    {img:Outdoor_7, animate:"fade-up" } ,
    {img:Outdoor_8, animate:"fade-up" } ,
    {img:Outdoor_5 , animate:"fade-up" } ,
  ]

  const [Img , setImg] = useState()


  return (
    <div className="S_Exhibition">
      <div className="container"> <Navbar /> </div>
      <Animation />
      <div className="coverIntro"> <img src={ImgIntro} alt="" /></div>

      <div className="home">
          <div className="container">
              <div className="boxImg hidden-img" data-aos="fade-right">  <img src={ImgSection} alt="" /> </div>
              <div className="boxs" data-aos="fade-left" >
                  <h2 className='h1 hidden-text'> The Best Exhibition stands & display stand designing services in Dubai.</h2>
                  <h2 className='h2 hidden-text'> Our exhibition and display stands are masterpieces that create lasting impressions. </h2>
                  <p className='p hidden-text'> With our exclusive exhibition stands in Dubai, we can help you stand out from the crowd at trade shows and events. We customize our exhibition stands according to our customers' specifications to ensure they excel at their intended purpose. Our team can design your order from scratch, maximizing the available space in any given environment.</p>
            </div>

        </div>
      </div>

      <Divider classn="divider" />
      <div className="quotation">
        <Pattern1 />
            <div className="container">
                <div className="h3 " data-aos="fade-up">We offer high-quality stands for businesses in Dubai to appear more professional and convey their brand's message.  You can customize your free-standing display with options that align perfectly with your brand identity and marketing objectives.  Add your logo, informative panels, and eye-catching graphics to leave a powerful impression on your target audience.
                </div>
            </div>
        </div>
        

        <Divider classn="divider-left" />
      <div className="exhibition-stands">
        <Pattern3 />
        <div className="container"> <div className="h1">Take a look at our designs for exhibition stands. </div></div>
        <div className="container">
          <div className="boxs">
            {images.map((e,index)=> ( <div key={index} data-aos={e.animate}  className="coverImg"> <i onClick={_=> setImg(e.img)} className="fa-solid fa-compress"></i> <img src={e.img} /> </div> ))}
            {Img && <div className="show-img"> 
              <img src={Img} alt="" /> 
              <i onClick={_=>setImg("")} className="fa-regular fa-circle-xmark"></i>
            </div>}
          </div>
        </div>
      </div>
      
      <Divider classn="divider" />
      <div className="Display-stands">
        <Pattern2 />
      <div className="container"><div className="h1">Take a look at our designs for Display stands.</div></div>
        <div className="container">
            <div className="boxs">
                {images.map((e,index)=> ( <div key={index} data-aos={e.animate} className="coverImg"> <i onClick={_=> setImg(e.img)} className="fa-solid fa-compress"></i> <img src={e.img} /> </div> ))}
                {Img && <div className="show-img"> 
                  <img src={Img} alt="" /> 
                  <i onClick={_=>setImg("")} className="fa-regular fa-circle-xmark"></i>
                </div>}
            </div>
        </div>
      </div>

      
      <Divider classn="divider-left" />
      <div className="impact">
        <Pattern3 />
            <div className="container">
            <div className="container"><div className="h1">Why Choose Us for Your Corporate Gifting Needs?</div></div>
                <div className="boxs">
                  {
                    BRANDING_SERVICES.map((e,index)=> (
                      <div className="box" data-aos="fade-right" key={index}>
                          <div className="coverImg hidden-img"> <img src={e.img} alt="" /> </div>
                          <div className="text" >
                              <div className="h3  hidden-text">{e.title} </div>
                              <div className="p hidden-text">{e.desc} </div>
                          </div>
                      </div>
                    ))
                  }
                </div>
            </div>
        </div>
      {/* <Contact title="Ready to Boost Your Gifting Experience? " desc="Contact us to create unforgettable memories together!" /> */}
      <Footer />
      </div>
  )
}

export default S_Exhibition





