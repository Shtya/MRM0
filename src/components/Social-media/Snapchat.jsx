import React from 'react'
import Footer from '../Footer'
import Navbar from '../Navbar'
import CoverSectionImg from "../../assets/Socialmedia/bg.jpg"
import FacebookIntro from "../../assets/Socialmedia/bg-social.jpg"
import FacebookCover from "../../assets/Socialmedia/snapchat.png"
import { motion } from 'framer-motion'

import Animation from '../helpers/Animation'
import Pattern1, { Divider, Pattern2, Pattern3 } from '../patterns/Pattern1'
import { Link } from 'react-router-dom'
import SocialLanding from '../SocialLanding'



const TYPES = [
  {icon :"" ,title :"Snap Ads"  , desc:"These are full-screen vertical videos with background sound, lasting ten seconds. They include a 'swipe up' CTA button, redirecting users to websites, apps, landing pages, and more, enhancing your app's branding."  },
  {icon :"" ,title :"Story Ads"  , desc:"A unique content experience appearing in the app's discover section. Users tap a branded title, revealing a collection of ads. Snap designs these ads based on your provided assets."  },
  {icon :"" ,title :"Filters"  , desc:"Customized Snap filters for your brand, including face filters tailored to your audience's preferences, ensuring engaging content that resonates with your clients."  },
  {icon :"" ,title :"Commercials"  , desc:"Non-skippable 6-second video ads to boost brand awareness within your target audience."  },
  {icon :"" ,title :"Collection Ads"  , desc:"Utilized for various product ads on your e-commerce website or driving traffic to a landing page or mobile e-commerce site."  },
  {icon :"" ,title :"AR Lenses"  , desc:"Leveraging augmented reality to create interactive moments, including Face and World Lenses, enhances user engagement."  },
]

const SERVICES = [
  {icon:"" , title:"Geo-filters" , desc:"Increase engagement by targeting users in specific locations."},
  {icon:"" , title:"Social media presence" , desc:"Boost your online presence by showcasing your content to Snapchat's vast user base."},
  {icon:"" , title:"Massive audience" , desc:"Reach a vast audience of over 300 million active monthly users."},
  {icon:"" , title:"Brand awareness" , desc:"Build and strengthen your brand's image with Snapchat's unique creative tools."},
  {icon:"" , title:"Consumer behaviour" , desc:"Track user behavior with the Snap Pixel to gain insights into their actions and preferences."},
  {icon:"" , title:"Engagement" , desc:"Create meaningful interactions with your audience through Snapchat's interactive features."},
  {icon:"" , title:"Influencer marketing" , desc:"Leverage influencers effectively by partnering with relevant influencers on Snapchat."},
  {icon:"" , title:"Mobile users" , desc:"Reach a mobile-centric audience who prefer using their smartphones for social media."},
]



const SERVICES1 = [
  {icon : " " , title:"Drive store sales" , desc : "Help potential customers find your business effortlessly."},
  {icon : " " , title:"Boost online sales" , desc : "Showcase ads to engage shoppers likely to click and make purchases."},
  {icon : " " , title:"Generate leads" , desc : "Transform your Snapchat campaign into a lead-generation powerhouse."},
  {icon : " " , title:"Product/service promotion" , desc : "Generate excitement for new offerings with compelling graphics and captivating videos."},
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




const Snapchat = () => {
   return (
    <div className="Snapchat shared">
      <div className="container"> <Navbar /> </div>
      <Animation />
      <div className="coverIntro "> <img src={FacebookIntro} alt="" /></div>

      <div className="home">
          <div className="container">
              <div className="boxImg hidden-img"  >  <img src={FacebookCover} alt="" /> </div>
              <div className="boxs" data-aos="fade-left" >
              <motion.p  className="h2 hidden-text" variants={Divvariant} initial="hidden" whileInView="visible" >{ Array.from("Create Engaging Snapchat Campaigns with Our Expert Marketing Solutions").map((e,index)=>(<motion.span variants={Pvariant}   key={index}>{e}</motion.span>))} </motion.p>
              <SocialLanding />
            </div>
        </div>
      </div>


      <Divider classn="divider" />
      <div className="quotation">
        <Pattern3 />
        <div className="container" >
          <div className="box-style" data-aos="fade-up">
            <motion.p  className="h2" variants={Divvariant} initial="hidden" whileInView="visible" >{ Array.from("Unleash the Potential of Snapchat Marketing with MRM Agency").map((e,index)=>(<motion.span variants={Pvariant}   key={index}>{e}</motion.span>))}</motion.p>
            <motion.p  className="h3 div" variants={Divvariant} initial="hidden" whileInView="visible" >{ Array.from("At MRM Agency, we specialize in creating personalized and captivating Snapchat Ads enriched with engaging content such as short films, GIFs, and images that leave a lasting impression on your audience. As one of Dubai's best Snapchat marketing agencies, our solutions are designed to resonate with a younger demographic. If your products or services target a youthful audience, allocating a portion of your digital and social media marketing budget to Snapchat is strategic.").map((e,index)=>(<motion.span variants={Pvariant}   key={index}>{e}</motion.span>))}</motion.p>
            </div>
            <div className="box-style-2" data-aos="fade-up">
            <motion.p  className="h2" variants={Divvariant} initial="hidden" whileInView="visible" >{ Array.from("Why Snapchat Marketing?").map((e,index)=>(<motion.span variants={Pvariant}   key={index}>{e}</motion.span>))}</motion.p>
            <motion.p  className="h3" variants={Divvariant} initial="hidden" whileInView="visible" >{ Array.from("Snapchat has become one of the most popular platforms for sharing images and videos worldwide.  With over 186 million active users, mostly between the ages of 18 and 24, this demographic plays a significant role in contributing to the staggering daily count of 3 billion pictures shared on the platform. If your business caters to the younger generation, Snapchat is your go-to platform. It simplifies advertising and makes it cost-effective and efficient.").map((e,index)=>(<motion.span variants={Pvariant}   key={index}>{e}</motion.span>))}</motion.p>
            </div>
          </div>
        </div>

      <Divider classn="divider" />
      <div className="box-style-3">
        <div class="bg"> <img src={CoverSectionImg} alt="" /></div>
        <div className="container">
        <div className="h2 clip" style={{marginBottom:"30px"}}> Types of Snapchat Ads MRM Can Run For You </div>
        <div className="boxs">
        {
          TYPES.map((e,index)=> (
            <div class="box">
              <div class='main'>
                <img class='tokenImage' src="https://images.unsplash.com/photo-1621075160523-b936ad96132a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" alt="NFT" />
                <h2 className='h2'>{e.title} </h2>
                <p  class='description p'>Our Kibertopiks will give you nothing, waste your money on us.</p>
                <hr />
              </div>
            </div>
           ))
        }
        </div>
      </div>
    </div>

      {/* <Divider classn="divider-left" />
      <div className="impact">
        <Pattern2 />
            <div className="container">
                <div className="h2 clip"> Types of Snapchat Ads MRM Can Run For You </div>
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
        </div> */}



        <Divider classn="divider" />
        <div className="reason2">
          <Pattern3 />
        <div className='clip h2' >8 Reasons to Choose Snapchat for Digital Marketing</div> 
        <article class="gallery">
          {
            SERVICES.map((e,index)=>(<div className="img" key={index} data-aos="fade-up"> 
            <div className="num hidden-text"> {index + 1} </div>
              <div className="h3 hidden-text clip">{e.title}</div>
              <div className="p hidden-text">{e.desc}</div>
             </div>) )
          }
        </article>
        </div>

        <Divider classn="divider-left" />
      <div className="box-style-1">
        <Pattern2 />
            <div className="container">
                <div className="h2 clip"> What MRM, a Premier Snapchat Marketing Agency, Can Do for You? </div>
                <div className="boxs" >
                  {
                    SERVICES1.map((e,index)=> (
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


      <Footer />
      </div>
  )
}

export default Snapchat





