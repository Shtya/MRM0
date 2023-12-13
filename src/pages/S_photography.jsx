import React, { useEffect, useState } from "react";

import Grid1 from "../assets/S_photography/Why.jpg" ;

import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import ImgIntro from "../assets/S_photography/intro.jpg"
import ImgSection from "../assets/S_photography/cover.jpg"


import Photography_1 from "../assets/gallery/photography/(1).jpg" ;
import Photography_2 from "../assets/gallery/photography/(2).jpg" ;
import Photography_3 from "../assets/gallery/photography/(3).jpg" ;
import Photography_4 from "../assets/gallery/photography/(4).jpg" ;
import Photography_5 from "../assets/gallery/photography/(5).jpg" ;
import Photography_6 from "../assets/gallery/photography/(6).jpg" ;
import Photography_7 from "../assets/gallery/photography/(7).jpg" ;
import Photography_8 from "../assets/gallery/photography/(8).jpg" ;
import Photography_9 from "../assets/gallery/photography/(9).jpg" ;

import Videography1 from "../assets/gallery/videography/(1).jpg" ;
import Videography2 from "../assets/gallery/videography/(2).jpg" ;
import Videography3 from "../assets/gallery/videography/(3).jpg" ;
import Videography4 from "../assets/gallery/videography/(4).jpg" ;
import Videography5 from "../assets/gallery/videography/(5).jpg" ;
import Videography6 from "../assets/gallery/videography/(6).jpg" ;
import Videography7 from "../assets/gallery/videography/(7).jpg" ;
import Videography8 from "../assets/gallery/videography/(8).jpg" ;
import Videography9 from "../assets/gallery/videography/(9).jpg" ;


import Animation from "../components/helpers/Animation";
import Pattern1, { Divider, Pattern2, Pattern3 } from "../components/patterns/Pattern1";
const images = [
{img : Videography1},
{img : Videography2},
{img : Videography3},
{img : Videography4},
{img : Videography5},
{img : Videography6},
{img : Videography7},
{img : Videography8},
{img : Videography9},
]
const SERVICES = [
  { animate:"fade-up", img:Photography_2 , title:"Events" , desc:"From corporate gatherings to unique celebrations, we capture the essence of your events, ensuring that every moment is preserved."},
  { animate:"fade-up", img:Photography_4 , title:"Exhibitions and Trade Shows" , desc:"Our photography services are tailored to showcase your presence at exhibitions, conferences, and trade shows, highlighting your brand's participation."},
  { animate:"fade-up", img:Photography_5 , title:"Fashion" , desc:"Our fashion photography services offer high-quality images that showcase your products or the latest trends. We use advanced techniques to emphasize the style and elegance of your clothing, accessories, or lifestyle shots."},
  { animate:"fade-up", img:Photography_6 , title:"Business Portraits & Headshots" , desc:"Make a lasting impression with professional headshots and portraits that reflect the essence of your business."},
  { animate:"fade-up", img:Photography_7 , title:"Food" , desc:"Showcase your culinary creations with mouthwatering food photography that entices your audience."},
  { animate:"fade-up", img:Photography_8 , title:"Product" , desc:"Highlight the details and features of your products with our product photography services."},
  { animate:"fade-up", img:Photography_9 , title:"Automotive" , desc:"From sleek cars to rugged vehicles, our automotive photography captures the beauty and power of automobiles."},
  { animate:"fade-up", img:Photography_1 , title:"Hospitality" , desc:"Create an inviting atmosphere with hospitality photography that showcases your venue's charm."},
  { animate:"fade-up", img:Photography_3 , title:"Real Estate" , desc:"Document the progress of construction projects, showcase real estate listings, and capture the essence of the lifestyle your brand represents."},
]
const SERVICES2 = [
  { animate:"fade-up", img:Videography5 , title:"Exhibitions, Conference & Trade Show Filming" , desc:"Showcase your participation in industry events with professionally filmed videos."},
  { animate:"fade-up", img:Videography3 , title:"Corporate Films" , desc:"Tell your brand's story with compelling corporate videos that resonate with your audience."},
  { animate:"fade-up", img:Videography6 , title:"Event Filming" , desc:"Preserve the memories of your events with event filming that captures every significant moment."},
  { animate:"fade-up", img:Videography2 , title:"Behind-the-Scene Videos" , desc:"Offer your audience an exclusive look at your brand's inner workings with behind-the-scenes videos."},
  { animate:"fade-up", img:Videography9 , title:"Fashion Videography" , desc:" Our high-quality videos capture the essence of your clothing, accessories, or lifestyle shots with advanced cinematic techniques. Let us create a visual story that sets your brand apart."},
  { animate:"fade-up", img:Videography8 , title:"Promotional Videos for Product & Brand" , desc:"Promote your products and brand with videos that leave a lasting impact."},
  { animate:"fade-up", img:Videography7 , title:"YouTube/Facebook/Instagram Short Ads" , desc:"Create short, impactful social media ads that engage your audience."},
  { animate:"fade-up", img:Videography4 , title:"Real Estate Product Demo" , desc:"Showcase real estate properties with product demonstration videos that provide a virtual tour."} ,
  // { animate:"fade-up", img:Videography1 , title:"Real Estate Product Demo" , desc:"Showcase real estate properties with product demonstration videos that provide a virtual tour."}
]

const WHY = [
  { animate:"fade-up" , title:"Brilliant, Powerful, Creative Images and Professional Photographers" , desc:"We are committed to delivering stunning and creative visuals through the expertise of our professional photographers."},
  { animate:"fade-up" , title:"Master Photographers for Personal & Corporate Events in the UAE" , desc:"Our photographers excel in capturing the essence of both personal and corporate events across the UAE."},
  { animate:"fade-up" , title:"Bespoke Fashion Photography and Videography in the UAE" , desc:"Our services are tailored for fashion brands to meet your unique needs and capture the essence of your designs."},
  { animate:"fade-up" , title:"Fantastic Photoshoot Consultation & Preparation" , desc:"We believe in meticulous preparation to ensure every photoshoot succeeds."},
  { animate:"fade-up" , title:"Comprehensive Services, from Headshots to Commercial" , desc:"Whether you need headshots for your team or commercial photography and videography, we offer a full range of services to meet your needs."},
]

const S_photography = () => {
  const [Img , setImg] = useState()

  return (
    <div className="S_photography landing">
      <Animation />
      <div className="container"> <Navbar /> </div>
      <div className="coverIntro"> <img src={ImgIntro}  /></div>

      <div className="home">
          <div className="container">
              <div className="boxImg hidden-img"  >  <img  src={ImgSection} alt="" /> </div>
              <div className="boxs" data-aos="fade-left" >
                  <h2 className='h1 hidden-text'>Capture your brand's story with our professional visual storytelling.</h2>
                  <h2 className='h2 hidden-text'>We turn moments into memories and transform your brand's essence into a compelling narrative. </h2>
                  {/* <p className='p hidden-text'>   </p> */}
            </div>
        </div>
      </div>

      <Divider classn="divider" />
      <div className="quotation">
        <Pattern1 />
            <div className="container">
            <p className='h3'> We specialize in capturing moments that tell a compelling story and creating visually engaging content. At MRM, we offer a wide range of high-quality photography and videography services to enhance your brand and narrative. Whether you need product photography, event coverage, or promotional videos, we have the expertise to deliver content that captivates and communicates. Our core belief is that every brand, product, and event has a unique story that deserves to be told. We use a delicate balance of light and shadow, the subtleties of expression, and the seamless integration of creativity and technology to bring to life the enchanting essence of your narrative.  </p>
            </div>
        </div>

      <Divider classn="divider-left" />
      <div className="photography-services">
      <Pattern3 />
        <div className="h1 clip hidden-text">Our Photography Services</div> 
        <div className="container">
          {
            SERVICES.map((e,index)=> (
              <div className="box" key={index} data-aos={e.animate}>
                <div className="innerbox">
                <div className="coverImg hidden-img"> <img src={e.img} alt="" />  </div>
                <div className="h2 clip hidden-text"> {e.title} </div>
                <div className="p hidden-text">{e.desc} </div>
                </div>
              </div>
            ))
          }
        </div>
      </div>
      
      <Divider classn="divider" />
      <div className="Videography-services">
        <Pattern2 />
        <div className="h1 clip hidden-text">Types of Videography Services</div> 
        <div className="container">
          {
            SERVICES2.map((e,index)=> (
              <div className="box" key={index} data-aos={e.animate} data-aos-delay={`${100 * (index + 1) }`} >
                <div className="innerbox">
                <div className="coverImg hidden-img"> <img src={e.img} alt="" />  </div>
                <div className="h2 hidden-text"> {e.title} </div>
                <div className="p hidden-text">{e.desc} </div>
                </div>
              </div>
            ))
          }
        </div>
      </div>


      <Divider classn="divider-left" />
      <div className="exhibition-stands">
      <Pattern3 />
        <div className="header1">
            <li className="active">Videography</li>
            <li> Events </li>
            <li> Fashion  </li>
            <li> Food </li>
            <li> Product </li>
            <li> Automotive </li>
            <li> Real Estate </li>
        </div>
          
        <div className="container">
          <div className="boxs">
            {images.map((e,index)=> ( <div key={index} data-aos="fade-up"  className="coverImg"> <i onClick={_=> setImg(e.img)} className="fa-solid fa-compress"></i> <img src={e.img} /> </div> ))}
            {Img && <div className="show-img"> 
              <img src={Img} alt="" /> 
              <i onClick={_=>setImg("")} className="fa-regular fa-circle-xmark"></i>
            </div>}
          </div>
        </div>
      </div>


<Divider classn="divider-left" />
        <div className="searching2">
        <Pattern3 />
            <div className="container">
              <div className="coverImg "> <img src={Grid1} alt="" /> </div>

              <div className="boxs">
              <div className="h1 clip hidden-text">Why Choose Us?</div>
              {WHY.map((e,index)=>(
                <div key={index}>
                  <h3 className='h2 hidden-text'>{e.title}</h3>
                  <h2 className='p hidden-text'>{e.desc}</h2>
                </div>
                  ))}
              </div>
          </div>
      </div>



    <Footer />
      </div>
  )
}

export default S_photography





