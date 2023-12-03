import Blog from "../components/Blog";
import Footer from "../components/Footer";
import Clients from "../components/Clients";
import Contact from "../components/Contact";
import Landing from "../components/Landing";
import { Services } from "../components/Services";
import { useEffect, useState } from "react";

import Why from "../components/Why";
import Who from "../components/Who";
import Portfolio from "../components/Portfolio";
import SlideNav from "../components/SlideNav";

import Img1 from  "../assets/about-us/mission.jpg" ;
import Gallery_merge from "../components/Slide/Gallery_merge";


function Home() {
  
  return (
    <div className="Home">
        <Landing />
        <SlideNav />
        <Who />
        <Why />
        <Services />
        <Portfolio header={true} />

        {/* <Gallery_merge />  */}
        
        <Clients />
        <Contact />
        <Blog />
        <Footer />
        </div>
  );
}

export default Home;
