import Blog from "../components/Blog";
import Footer from "../components/Footer";
import Clients from "../components/Clients";
import Contact from "../components/Contact";
import Landing from "../components/Landing";
import { Services } from "../components/Services";
import { useEffect, useState } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";


import Why from "../components/Why";
import Who from "../components/Who";
import Portfolio from "../components/Portfolio";
import SlideNav from "../components/SlideNav";
import { Divider, Pattern2 } from "../components/patterns/Pattern1";
var settings = {
  dots: false,
  infinite: true,
  speed: 800,
  slidesToShow: 1,
  slidesToScroll: 1 , 
  autoplay:true ,
  
};

function Home() {
  
  return (
    <div className="Home">
        <Landing />
        
        {/* <div className="slogan">
          <Pattern2 />
        <Slider {...settings} className='container' >
          <div className="box"> Lorem ipsum dolor sit, amet consectetur </div>
          <div className="box"> Lorem ipsum, dolor sit amet consectetur </div>
          <div className="box"> Lorem ipsum dolor sit amet, consectetur </div>
          </Slider>
        </div> */}
        <SlideNav />

        <Divider classn="divider" />
        <Who />

        <Divider classn="divider-left" />
        <Why />

        <Divider classn="divider" />
        <Services />

        <Divider classn="divider-left" />
        <Portfolio header={true} />

        {/* <Gallery_merge />  */}
        
        <Divider classn="divider" />
        <Clients />

        <Divider classn="divider-left" />
        <Contact />

        <Divider classn="divider" />
        <Blog />

        {/* <Divider classn="divider-left" /> */}
        <Footer />
        </div>
  );
}

export default Home;
