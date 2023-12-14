import React from 'react'
import Footer from '../Footer'
import Navbar from '../Navbar'

import FacebookIntro from "../../assets/Socialmedia/bg-social.jpg"
import FacebookCover from "../../assets/Socialmedia/tiktok.png"

import { motion } from 'framer-motion'

import Animation from '../helpers/Animation'
import Pattern1, { Divider, Pattern2, Pattern3 } from '../patterns/Pattern1'
import SocialLanding from '../SocialLanding'



const TYPES = [
  {icon :"" ,title:"In-Feed Ads" , desc:"Seamlessly integrated into users' For You Page (FYP), In-Feed Ads capture high in-app engagement. With durations spanning from 5 to 60 seconds, these ads feature compelling call-to-action buttons that lead users to external landing pages. It's the perfect way to blend into users' content feeds while driving them toward your brand's offerings."},
  {icon :"" ,title:"Top View Ads" , desc:"TopView Ads are the first in-feed videos users encounter upon opening the app, guaranteeing a precious three seconds of undivided attention. Crafting impactful content is paramount here, as these initial moments can make or break the user's interest. Our creative team excels at creating content that grabs attention from the get-go."},
  {icon :"" ,title:"Brand Takeover Ads" , desc:"Imagine users opening the app to an eye-catching, full-screen ad. That's precisely what Brand Takeover Ads offer. These ads allow for creative presentations through videos, GIFs, or screenshots. They provide a powerful platform for making a memorable first impression and creating lasting brand recall."},
  {icon :"" ,title:"Branded Effects" , desc:"Filters are integral to any social media platform, and TikTok is no exception. With Branded Effects, brands can craft their shareable stickers, AR filters, and lenses.  This presents an ideal opportunity to encourage user-generated content and raise awareness for campaigns, especially those with a meaningful cause."},
  {icon :"" ,title:"Branded Hashtag Challenge" , desc:"The Branded Hashtag Challenge ad format thrives when presented alongside other challenges. It encourages users to showcase their creativity and engage with your brand by introducing a custom hashtag challenge. This user-generated content can spread like wildfire, amplifying your brand's reach."},
 ]

const SERVICES = [
  {icon :"" ,title:"You Can Significantly Increase Your Brand Awareness" , desc:"TikTok's massive user base offers an unparalleled opportunity to increase your brand's visibility and recognition among a diverse audience."},
  {icon :"" ,title:"TikTok Is An All-In-One Platform For Making The Best Video Marketing Campaigns" , desc:"Short-form videos are the reigning champions of content consumption, and TikTok provides the ideal platform to create captivating video campaigns."},
  {icon :"" ,title:"Short-Form Videos Are Still The Most Trending Form Of Content" , desc:"In an era of short attention spans, TikTok's short-form videos are ideally suited.to capture and retain audience interest. "},
  {icon :"" ,title:"TikTok Makes It Easy To Hook Your Audience" , desc:"The platform's user-friendly features and interactive elements make engaging and connecting with your target audience easy."},
  {icon :"" ,title:"TikTok Allows You To Find Your Niche" , desc:"With advanced targeting options, TikTok enables you to reach a specific audience that aligns with your brand's values and goals."},
  {icon :"" ,title:"TikTok Has The Largest Engagement Rate On Social Media Trends Early" , desc:"Being an early adopter of TikTok can give your brand a significant advantage in riding the wave of emerging trends."},
  {icon :"" ,title:"TikTok Has Less Competition Amongst Businesses" , desc:"TikTok's advertising space is less crowded than other social media platforms, giving your brand more visibility."},
  {icon :"" ,title:"TikTok Social Media Marketing Is Cheap And Easy To Start" , desc:"TikTok offers cost-effective advertising options, making it accessible to businesses of all sizes."},
]





const Divvariant = {
  hidden:{opacity:0 },
  visible:{
    opacity:1,
    transition : {duration : 1 ,staggerChildren : 0.005},
    y:5
  },
}
const Pvariant = {
  hidden:{opacity:0, y:100 },
  visible:{
    opacity:1, y:10
  },
}




const Tiktok = () => {
   return (
    <div className="Tiktok shared">
      <div className="container"> <Navbar /> </div>
      <Animation />
      <div className="coverIntro "> <img src={FacebookIntro} alt="" /></div>

      <div className="home">
          <div className="container">
              <div className="boxImg hidden-img"  >  <img src={FacebookCover} alt="" /> </div>
              <div className="boxs" data-aos="fade-left" >
              <motion.p  className="h2 hidden-text" variants={Divvariant} initial="hidden" whileInView="visible" >{ Array.from("Maximize Engagement and Build Your Brand with Our TikTok Marketing Strategies").map((e,index)=>(<motion.span variants={Pvariant}   key={index}>{e}</motion.span>))} </motion.p>
              <SocialLanding />
            </div>
        </div>
      </div>
      
      

      <Divider classn="divider" />
      <div className="quotation">
        <Pattern3 />
        <div className="container" >
          <div className="box-style" data-aos="fade-up">
            <motion.p  className="h2 " variants={Divvariant} initial="hidden" whileInView="visible" >{ Array.from("Get Ahead of the Competition with MRM's Effective TikTok Marketing Services").map((e,index)=>(<motion.span variants={Pvariant}   key={index}>{e}</motion.span>))}</motion.p>
            <motion.p  className="h3 div" variants={Divvariant} initial="hidden" whileInView="visible" >{ Array.from("At MRM Agency, we are dedicated to providing you with tangible results through innovative problem-solving and a relentless focus on your success. Our commitment sets us apart, and we invite you to join us on a journey of digital growth and triumph where your brand's story is not only heard but celebrated globally.").map((e,index)=>(<motion.span variants={Pvariant}   key={index}>{e}</motion.span>))}</motion.p>
          </div>
          <div className="box-style-2" data-aos="fade-up">
            <motion.p  className="h2" variants={Divvariant} initial="hidden" whileInView="visible" >{ Array.from("The Power of TikTok Marketing for Businesses").map((e,index)=>(<motion.span variants={Pvariant}   key={index}>{e}</motion.span>))}</motion.p>
            <motion.p  className="h3 " variants={Divvariant} initial="hidden" whileInView="visible" >{ Array.from("TikTok is a social media platform designed for sharing short videos and music.  Originally created as a creative outlet for young adults and teenagers to showcase their talents in acting, singing, dancing, and comedy,  TikTok has expanded its impact beyond generational boundaries. It has become a hub for entertaining, informative, and engaging videos.  For businesses, TikTok presents a unique opportunity to connect with a younger audience and use demographics as a potent marketing tool. TikTok marketing is a dynamic force in the ever-evolving landscape of digital advertising. If you're interested, let's dive deeper.").map((e,index)=>(<motion.span variants={Pvariant}   key={index}>{e}</motion.span>))}</motion.p>
          </div>
          </div>
        </div>


        <Divider classn="divider-left" />
      <div className="impact">
        <Pattern2 />
            <div className="container">
                <div className="h2 clip"> Types of TikTok Ads we offer</div>
                <div className="phead">TikTok's advertising landscape offers diverse options tailored to your unique marketing objectives. MRM agency specializes in executing these TikTok ad types to elevate your brand's visibility and engagement. </div>
                <div className="boxs" >
                  {
                    TYPES.map((e,index)=> (
                      <div className="box" key={index} data-aos="fade-up" >
                          <div className="text">
                              <div className="h3 clip hidden-text" >{e.title} </div>
                              <div className="p hidden-text" >{e.desc} </div>
                          </div>
                      </div>
                    ))
                  }
                </div>
            </div>
        </div>



        <Divider classn="divider" />
        <div className="box-style-4">
          <Pattern3 />
          <div className="container">
            <div className="h1" style={{marginBottom:""}}>Why Choose TikTok Marketing?</div>
            <div className="phead" style={{marginBottom:"40px"}}>Still trying to convince you about the power of TikTok for your marketing strategy? Let's explore eight key benefits</div>
            <div className="boxs">
            {
              SERVICES.map((e,index)=> (
                <div class="card">
                <div class="box">
                  <div class="content">
                    <h2>{index+1 >= 10 ?"":"0"}{index+1}</h2>
                    <h3 className='h2'>{e.title}</h3>
                    <p className='p'>{e.desc}</p>
                  </div>
                </div>
              </div>            
              ))
            }
            </div>
          </div>
        </div>

        {/* <Divider classn="divider" />
        <div className="process2">
        <div className="h2 clip">Why Choose TikTok Marketing?</div>
        <div className="phead">Still trying to convince you about the power of TikTok for your marketing strategy? Let's explore eight key benefits</div>
          <Pattern1 />
          <ul class="timeline">
            {
              SERVICES.map((e,index)=> (
                <li data-aos="fade-up"> <div class={`${index % 2 == 0 ? "direction-l" : "direction-r"}`}>
                  <div class="flag-wrapper ">
                    <span class="flag  "> <span className='h2 clip hidden-text'>{e.title}</span></span>
                  </div>
                  <div class="desc p hidden-text ">{e.desc}</div>
                </div> </li>
              ))
            }

          </ul>
        </div> */}


      <Footer />
      </div>
  )
}

export default Tiktok





