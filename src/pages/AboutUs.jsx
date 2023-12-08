import React, { useLayoutEffect, useRef, useState } from 'react'
import ImgIntro from "../assets/about-us/intro.jpg"
import ImgBox1 from "../assets/about-us/mission.jpg"
import ImgBox2 from "../assets/about-us/vision.jpg"
import ImgBox3 from "../assets/about-us/vision.jpg"
import ImgContact from "../assets/about-us/contact.jpg"
import Navbar from '../components/Navbar'
import OneWhy from '../components/OneWhy'
import Footer from '../components/Footer'
import Animation from '../components/helpers/Animation'
import Pattern1, { Divider, Pattern3 } from '../components/patterns/Pattern1'


const AboutUs = () => {
  const [width , setwidth] = useState(0)
  const ref = useRef()
  useLayoutEffect(_=>{  setwidth(ref.current?.offsetWidth)} ,[])

  const vission_mission = [ 
    {title:"Our Vision" , img:ImgBox2 , desc :"Our goal is to become one of the leading figures in the industry, known for our excellence. We are dedicated to being the preferred choice for individuals and businesses aiming to elevate their work to the highest standards. Ultimately, we aim to be a primary source of original and creative ideas, providing a pathway to unlock creativity and achieve remarkable results."} ,
    {title:"Our Mission" , img:ImgBox1 , desc :"Our mission is to empower businesses and brands to succeed in the constantly evolving realms of marketing and digital solutions. We are committed to delivering outstanding outcomes by leveraging our knowledge in advertising, branding, and innovative strategies."} ,
  ]

  return (
    <div className='about-us'>
      <Animation />
      <div className="container"> <Navbar /> </div>
      <div className="coverIntro hidden-img"> <img src={ImgIntro}  /></div>

        <Divider classn="divider divider-top" />
        <div className="searching">
          <Pattern1 />
          <div className="container">
            <div className="coverImg hidden-img " data-aos="fade-right"> <img src={ImgContact} alt="" /> </div>
            <div className="boxs " data-aos="fade-left">
                <h3 className='box  hidden-text'>We are a global creative agency based in the UAE and a leading agency in advertising, marketing, and digital solutions. Our expertise is helping companies establish a strong and professional presence in physical and digital spaces using innovative and effective strategies.</h3>
                <h2 className='box  hidden-text'>We create exceptional visual identities and build robust online presences for brands. Our team is dedicated to delivering top-notch services, utilizing the latest technologies and top-notch solutions to achieve tangible results. We offer professional marketing services to help your brand shine, from visual identities to online experiences. </h2>
            </div>
          </div>
        </div>

        <Divider classn="divider-left" />
        <div className="WHY">
          <Pattern3 />
          <div className="container">
        {
          vission_mission.map((e,index)=> (
            <OneWhy key={index} img={e.img} title={e.title} desc={e.desc} />
          ))
        }
        </div>
        </div>


        {/* <Divider classn="divider" /> */}
      {/* <Contact onHere={true} /> */}
      <Footer />
    </div>
  )
}

export default AboutUs