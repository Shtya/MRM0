import React from 'react'
import Footer from '../Footer'
import Navbar from '../Navbar'

import FacebookIntro from "../../assets/Socialmedia/snapchat-intro.webp"
import FacebookCover from "../../assets/Socialmedia/snapchat-cover1.webp"

import { motion } from 'framer-motion'

import Animation from '../helpers/Animation'
import Pattern1, { Divider, Pattern2, Pattern3 } from '../patterns/Pattern1'



const TYPES = [
  {icon :"" ,title :"Snap Ads"  , desc:"These are full-screen vertical videos with background sound, lasting ten seconds. They include a 'swipe up' CTA button, redirecting users to websites, apps, landing pages, and more, enhancing your app's branding."  },
  {icon :"" ,title :"Story Ads"  , desc:"A unique content experience appearing in the app's discover section. Users tap a branded title, revealing a collection of ads. Snap designs these ads based on your provided assets."  },
  {icon :"" ,title :"Filters"  , desc:"Customized Snap filters for your brand, including face filters tailored to your audience's preferences, ensuring engaging content that resonates with your clients."  },
  {icon :"" ,title :"Commercials"  , desc:"Non-skippable 6-second video ads to boost brand awareness within your target audience."  },
  {icon :"" ,title :"Collection Ads"  , desc:"Utilized for various product ads on your e-commerce website or driving traffic to a landing page or mobile e-commerce site."  },
  {icon :"" ,title :"AR Lenses"  , desc:"Leveraging augmented reality to create interactive moments, including Face and World Lenses, enhances user engagement."  },
]

const SERVICES = [
  {icon:"" , title:"Geo-filters" , desc:"Increase engagement."},
  {icon:"" , title:"Social media presence" , desc:"Boost your online presence."},
  {icon:"" , title:"Massive audience" , desc:"Reach a vast audience."},
  {icon:"" , title:"Brand awareness" , desc:"Build and strengthen your brand's image."},
  {icon:"" , title:"Consumer behaviour" , desc:"Track user behaviour with the Snap Pixel."},
  {icon:"" , title:"Engagement" , desc:"Create meaningful interactions."},
  {icon:"" , title:"Influencer marketing" , desc:"Leverage influencers effectively."},
  {icon:"" , title:"Mobile users" , desc:"Reach a mobile-centric audience."},
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
              <motion.p  className="h2 hidden-text" variants={Divvariant} initial="hidden" whileInView="visible" >{
                Array.from("Unlock the Power of Snapchat Marketing with MRM Agency At MRM Agency, we craft personalized and captivating Snap ads enriched with engaging content such as short films, GIFs, and images that will leave a lasting impression on your audience. As an award-winning Snapchat marketing agency in Dubai, our Snapchat Marketing Solutions are designed to resonate with a younger demographic. If your products or services target a youthful audience, allocating a portion of your digital and social media marketing budget to Snapchat is strategic").map((e,index)=>(<motion.span variants={Pvariant}   key={index}>{e}</motion.span>))
              } </motion.p>
            </div>

        </div>
      </div>

      <Divider classn="divider" />
      <div className="quotation">
        <Pattern3 />
            <div className="container" >
            <motion.p  className="h3" variants={Divvariant} initial="hidden" whileInView="visible" >{
                Array.from("Why Snapchat?  Snapchat has emerged as the latest sensation in image and video sharing worldwide, with over 186 million active users, primarily between 18 and 24. This demographic continues contributing to the staggering daily count of 3 billion pictures shared on the platform. Snapchat is your go-to platform if your business caters to the younger generation. It not only simplifies advertising but also makes it cost-effective and efficient.").map((e,index)=>(<motion.span variants={Pvariant}   key={index}>{e}</motion.span>))
              }</motion.p>
            </div>
        </div>


      <Divider classn="divider-left" />
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
        </div>



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
                <div className="h2 clip"> What MRM, a Premier Snapchat Marketing Agency, Can Do for You</div>
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





