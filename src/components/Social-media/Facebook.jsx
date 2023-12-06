import React from 'react'
import Footer from '../../components/Footer'
import Navbar from '../../components/Navbar'

import FacebookIntro from "../../assets/Socialmedia/facebook-intro.jpg"
import FacebookCover from "../../assets/Socialmedia/facebook-cover.jpg"


import Icon_1 from "../../assets/S_gifts/offer1.png" ;
import Icon_2 from "../../assets/S_gifts/offer2.png" ;
import Icon_3 from "../../assets/S_gifts/offer3.png" ;
import Icon_4 from "../../assets/S_gifts/offer4.png" ;

import { motion } from 'framer-motion'

import gifts_1 from "../../assets/S_gifts/gifts1.png" ;
import gifts_2 from "../../assets/S_gifts/gifts2.png" ;
import gifts_3 from "../../assets/S_gifts/gifts3.png" ;
import Animation from '../../components/helpers/Animation'
import Pattern1, { Divider, Pattern2, Pattern3 } from '../../components/patterns/Pattern1'



const TYPES = [
  {icon :"" ,title :"Facebook Lead Generation" , desc:" Collect valuable information from interested individuals through lead ads on Facebook and Instagram, streamlining the process with image, video, or carousel format followed by a lead form."  },
  {icon :"" ,title :"Facebook Carousel Ads" , desc:" Ideal for restaurants and e-commerce businesses, these ads enable you to showcase up to ten photos and videos in a single ad, each with its unique link and description."  },
  {icon :"" ,title :"Image Ads" , desc:" Utilize stunning visuals to attract visitors to your website and landing pages, with the flexibility to use multiple images in a single advertisement."  },
  {icon :"" ,title :"Facebook Collection Ads" , desc:" Boost product sales for e-commerce websites by displaying items from your product catalog, allowing for personalized ads for each product."  },
  {icon :"" ,title :"Facebook Page Likes" , desc:" Encourage users to like your business profile page, using videos or images tailored to an 8:3 ratio for an effective page likes campaign."  },
  {icon :"" ,title :"Facebook Slideshow Ads" , desc:" These dynamic ads utilize motion, sound, and text to tell your brand's story, ensuring engagement regardless of internet speed."  },
  {icon :"" ,title :"Facebook Post Boosting" , desc:" Amplify the reach and engagement of your Facebook page posts, increasing likes, comments, shares, and photo/video views."  },
  {icon :"" ,title :"Video Ads" , desc:" Engage your audience with captivating video ads that leverage the power of sound and motion to convey your message effectively."  },
  {icon :"" ,title :"Store Visits" , desc:" Attract local audiences to your brick-and-mortar store with Facebook store visit ads, targeting potential customers in your vicinity."  },
  {icon :"" ,title :"Facebook Canvas Ads" , desc:" Create a captivating full-screen, mobile-optimized experience for your audience with Facebook Canvas Ads."  },
  {icon :"" ,title :"Facebook Offers" , desc:" Share discounts and offers with your Facebook followers in the form of images, videos, or carousels."  },
  {icon :"" ,title :"Facebook Event Responses" , desc:" Raise awareness and garner responses for your events by designing event ads in image or video format."  },
  {icon :"" ,title :"App Installs" , desc:" Drive app downloads across various devices with Facebook app install ads."  },
]

const SERVICES = [
  {icon:"" , title:"Campaign Planning and Setup"     , desc:"We meticulously plan and set up campaigns aligned with your goals."},
  {icon:"" , title:"Multilingual Content Creation"     , desc:"Crafting content that resonates with diverse audiences through multilingual expertise."},
  {icon:"" , title:"Eye-catching Graphics and Video Creation"     , desc:"Designing visually appealing and compelling graphics and videos that capture attention."},
  {icon:"" , title:"Complete Ad Setup"     , desc:"Ensuring your ads are optimized for maximum impact and reach."},
  {icon:"" , title:"Building a Relevant Audience Base"     , desc:"Identifying and targeting the right audience for your brand."},
  {icon:"" , title:"Messenger Bots Installation"     , desc:"Implementing messenger bots for enhanced customer engagement."},
  {icon:"" , title:"Advanced Ad Technology Implementation"     , desc:"Leveraging advanced advertising technology for superior results."},
  {icon:"" , title:"Pixel Tracking Code Installation"     , desc:"Setting up pixel tracking to measure and optimize ad performance."},
  {icon:"" , title:"A/B Testing"     , desc:"Conducting tests to determine the most effective strategies for your business."},
  {icon:"" , title:"Continuous Audience Engagement"     , desc:"Keeping your audience engaged through responses, tags, likes, and comments."},
  {icon:"" , title:"Keyword Implementation"     , desc:"Incorporating keywords to enhance your brand's visibility."},
  {icon:"" , title:"Monitoring, Analysis, and Reporting"     , desc:"Ongoing monitoring, in-depth analysis, and monthly reports to track and improve campaign performance."},
  {icon:"" , title:"Dynamic Product Ads"     , desc:"Tailoring ads to showcase your products dynamically."},
  {icon:"" , title:"Messenger Bots Installation"     , desc:"Enhancing customer interactions through messenger bots."},
  {icon:"" , title:"Implementing Advanced Ad Technology"     , desc:"Leveraging cutting-edge ad technology to maximize results."},
  {icon:"" , title:"Installation of Pixel Tracking Code"     , desc:"Precise tracking of ad performance through pixel code."},
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




const Facebook = () => {
   return (
    <div className="Facebook">
      <div className="container"> <Navbar /> </div>
      <Animation />
      <div className="coverIntro "> <img src={FacebookIntro} alt="" /></div>

      <div className="home">
          <div className="container">
              <div className="boxImg hidden-img"  >  <img src={FacebookCover} alt="" /> </div>
              <div className="boxs" data-aos="fade-left" >
              <motion.p  className="h2 hidden-text" variants={Divvariant} initial="hidden" whileInView="visible" >{
                Array.from("Facebook has long been a leader in digital marketing, especially in the UAE, where almost the entire population is active on the platform. Utilizing Facebook for advertising can provide significant brand exposure, engage potential customers, increase brand recognition, and generate valuable leads.").map((e,index)=>(<motion.span variants={Pvariant}   key={index}>{e}</motion.span>))
              } </motion.p>
            </div>

        </div>
      </div>

      <Divider classn="divider" />
      <div className="quotation">
        <Pattern3 />
            <div className="container" >
            <motion.p  className="h3" variants={Divvariant} initial="hidden" whileInView="visible" >{
                Array.from(" MRM, recognized as a top Facebook advertising agency in Dubai, excels in creating engaging campaigns that allow businesses to precisely target their audience based on various criteria such as location, age, gender, interests, and demographics. We leverage this capability by conducting thorough research on your brand and offerings, enabling us to create and implement effective digital and social media marketing campaigns tailored to your business, capturing the attention of your target audience and converting them into loyal customers.").map((e,index)=>(<motion.span variants={Pvariant}   key={index}>{e}</motion.span>))
              }</motion.p>
            </div>
        </div>


        <Divider classn="divider-left" />
      <div className="impact">
        <Pattern2 />
            <div className="container">
                <div className="h2 clip"> A Comprehensive Range of Facebook Ad Types </div>
                <div className="phead"> MRM Agency offers a comprehensive array of Facebook ad types to suit your unique marketing objectives </div>
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
        <div className="process2">
        <div className="h2 clip"> Our Facebook advertising services include</div>
          <Pattern1 />
          <ul class="timeline">
            {
              SERVICES.map((e,index)=> (
                <li data-aos="fade-up"> <div class={`${index % 2 == 0 ? "direction-l" : "direction-r"}`}>
                  <div class="flag-wrapper ">
                    <span class="flag  "> <span className='h3 clip hidden-text'>{e.title}</span></span>
                  </div>
                  <div class="desc p hidden-text ">{e.desc}</div>
                </div> </li>
              ))
            }

          </ul>
        </div>

      <Footer />
      </div>
  )
}

export default Facebook





