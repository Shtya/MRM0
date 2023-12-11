import React, { useEffect } from 'react'
import Intro from '../components/Intro'
import ImgIntro from "../assets/web-design/intro.jpg"
import ImgSection from "../assets/web-design/section.jpg"
import OneSocial from '../components/OneSocial'

import Social_1 from   "../assets/web-design/I1.png"
import Social_2 from "../assets/web-design/I2.png"
import Social_3 from "../assets/web-design/I3.png"
import Social_4 from "../assets/web-design/I4.png"

import Icon_1 from "../assets/web-design/icon-1.png" ;
import Icon_2 from "../assets/web-design/icon-2.png" ;
import Icon_3 from "../assets/web-design/icon-3.png" ;
import Icon_4 from "../assets/web-design/icon-4.png" ;
import Icon_5 from "../assets/web-design/icon-5.png" ;
import Icon_6 from "../assets/web-design/icon-6.png" ;
import Icon_7 from "../assets/web-design/icon-7.png" ;
import Icon_8 from "../assets/web-design/icon-8.png" ;


import Portfolio from '../components/Portfolio'
import Animation from '../components/helpers/Animation'
import Pattern1, { Divider, Pattern2, Pattern3 } from '../components/patterns/Pattern1'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'


const SocialMedia = [
  {classn :"hidden hidden-left" , img:Social_4 , title:"E-commerce Development Services   " , desc:"In today's fast-paced digital landscape, having a user-friendly and robust online store is an advantage and a necessity for e-commerce businesses. At MRM Agency, we offer top-notch E-commerce Development Services that can transform your online business and enhance your brand's presence. Whether you're starting a new e-commerce venture or want to improve an existing one, our team is here to turn your e-commerce aspirations into reality."},
  {classn :"hidden hidden-left" , img:Social_1 , title:"UI & UX Design"                     , desc:"Our team is highly proficient in delivering exceptional User Experience (UX) and User Interface (UI) designs. We take pride in crafting captivating and user-centric digital experiences that set us apart in web design and development. Whether you need an engaging website, a user-friendly app, or a seamless digital platform, we are confident in our ability to turn your vision into a reality. Trust us to create a digital experience that exceeds your expectations."},
  {classn :"hidden hidden-left" , img:Social_2 , title:"PHP Development"                    , desc:"Our team of skilled PHP developers harnesses the versatility of this scripting language to craft dynamic and interactive websites. Whether it involves customizing existing PHP frameworks or developing bespoke solutions, we ensure optimal performance and scalability."},
  {classn :"hidden hidden-left" , img:Social_3 , title:"WordPress Development"              , desc:"As experts in WordPress, we leverage this popular content management system to create intuitive, user-friendly, and visually appealing websites. From theme customization to plugin development, we have the expertise to make your WordPress site stand out."},
  ]

const Approach = [
    { img:Icon_1 , title:"Understanding Your Business" , desc:"We begin by getting to know your business, industry, and target audience. This knowledge forms the foundation of our web development strategy."},
    { img:Icon_2 , title:"Custom Design"               , desc:"Every business is unique, and your website should reflect that. Our design team creates custom website layouts tailored to your brand identity and goals."},
    { img:Icon_3 , title:"Responsive Design"           , desc:"With the increasing use of mobile devices, having a responsive website is non-negotiable. We ensure your site looks and functions flawlessly on all screen sizes."},
    { img:Icon_4 , title:"SEO Integration"             , desc:"Our web development team collaborates closely with our SEO specialists to ensure your site is optimized for search engines from the ground up. This includes keyword research, on-page SEO, and technical SEO enhancements."},
    { img:Icon_5 , title:"Content Management"          , desc:"We empower you to manage your website easily. Our content management systems (CMS) make it simple to update content, add new pages, and keep your site fresh."},
    { img:Icon_6 , title:"E-commerce Solutions"        , desc:"If you're in the business of selling products online, we can create a secure and efficient e-commerce platform tailored to your needs."},
    { img:Icon_7 , title:"Testing and Quality Assurance", desc:"Before launch, we rigorously test your website to ensure  it functions flawlessly and is free of any bugs or issues."},
    { img:Icon_8 , title:"Launch and Beyond"            , desc:" Once your website is live, our support doesn't end. We provide ongoing maintenance, updates, and support to ensure your site continues to perform optimally."},
]


const S_WebDesign = () => {


  return (

<div className="WEB_DESIGN landing" >
      <Animation />
      <div className="container"> <Navbar /> </div>

      <div className="coverIntro"> <img src={ImgIntro} alt="" /></div>
      <div className="home">
        <div className="container">
          <div className="boxImg hidden-img" >  <img src={ImgSection} alt="" /> </div>
          <div className="boxs" >
            <h2 className='h1 hidden-text' data-aos="fade-left">Boost the Effectiveness of Your Website's Online Presence. </h2>
            <p className='h3 hidden-text' data-aos="fade-left"> Transforming Visions into Seamless Experiences with Our Cutting-Edge Web Design and Development. </p>
            <div className="inner-boxs" >

              <ul className="box">
                <li className='li hidden-text' data-aos="fade-left">UI & UX Design </li>
                <li className='li hidden-text' data-aos="fade-left">PHP Development </li>
              </ul>

              <ul className="box box-2">
                <li className='li hidden-text' data-aos="fade-left">WordPress Development </li>
                <li className='li hidden-text' data-aos="fade-left">E-commerce Development </li>
              </ul>

            </div>
          </div>
        </div>
      </div>

      <Divider classn="divider" />
      <div className="quotation">
        <Pattern1 />
            <div className="container" data-aos="fade-rigth">
            <p className='h2 hidden-text'>MRM is Your Partner in Web Development <br/> and Design in Dubai, UAE</p>
            <p className='h3 '>MRM Agency is committed to delivering outstanding web design and development services in Dubai, UAE. Our services are carefully customized to meet the specific requirements of businesses. Whether you're a startup seeking to make a strong online impression or an established business looking to revitalize your digital presence, we're here to turn your vision into a captivating reality.</p>
            </div>
        </div>

        <Divider classn="divider-left" />
        <div className="social-media">
          <Pattern3 />
        <div className="container">
            <h3 className='h1 hidden-text clip'>Our Specializations</h3>
            <div className="phead hidden-text">We specialize in the following web design and development services</div> 
            <div className="boxs">
            { SocialMedia.map((e,index)=> ( <OneSocial key={index} Img={e.img} title={e.title} desc={e.desc} classn={e.classn} /> ))}
            </div>
        </div>
        </div>
        {/* <RoadMap /> */}


        <Divider classn="divider divider-rsize" />
        <div className="our_Approach">
          <Pattern2 />
            <div className="container">
                <div className="circle">
                    <div className='text'>
                        <div className="container1">
                            <div className="h1 clip">Our Approach </div>
                            <div className="p">Our web development and design process is rooted in creativity, functionality, and strategic thinking </div>
                        </div>
                    </div>
                    {
                    Approach.map((e,index)=>(
                        <span key={index}  className={`span-${index+1}`}>
                            <div className="coverImg"> <img src={e.img} alt="" /> </div>
                            <div className={`content content-${index+1}`}>
                                <div className="h2 clip"> {e.title} </div>
                                <div className="p"> {e.desc} </div>
                            </div>
                        </span>
                    ))
                    }
                </div>
            </div>
        </div>
      
        <Divider classn="divider-left" />
      <Portfolio header={false} typeGallery="Web design" />

      <Footer />
      </div>
  )
}

export default S_WebDesign