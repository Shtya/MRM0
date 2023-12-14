import React from 'react'
import Footer from '../Footer'
import Navbar from '../Navbar'
import CoverImg from "../../assets/nEW/COVER1.jpg"

import  ImgSection from "../../assets/Socialmedia/bg-1.webp"
import FacebookIntro from "../../assets/Socialmedia/bg-social.jpg"
import FacebookCover from "../../assets/Socialmedia/x.png"


import { motion } from 'framer-motion'

import Animation from '../helpers/Animation'
import Pattern1, { Divider, Pattern2, Pattern3 } from '../patterns/Pattern1'
import SocialLanding from '../SocialLanding'



const TYPES = [
  {icon :"" ,title:"Promoted Tweets:" , desc:"Promoted Tweets are designed to reach users who do not follow your account. As your social media management agency, we pay to deliver these tweets to diverse audiences. These Twitter marketing initiatives can expand your business's reach and engage new potential customers. Similar to boosting posts on Facebook, promoted tweets increase visibility and engagement."},
  {icon :"" ,title:"Promoted Accounts:" , desc:"With Promoted Accounts, advertisers pay to have your complete Twitter account displayed to a carefully targeted audience. These ads are shown to individuals interested in your business or services. This is ideal for those seeking to attract specific users based on their business objectives, encouraging them to follow your account and become acquainted with your brand or service."},
  {icon :"" ,title:"Promoted Trends:" , desc:"Hashtags are the key to tracking online trends. Promoted Trends allow you to promote your unique hashtag to the top of the trending list. Create a distinctive hashtag, promote it, and watch it gain momentum as people use it in their tweets. While highly effective, it's important to note that running this form of advertisement can be costly and complex. Entrust it to social media marketing experts to effectively manage your budget, targeting, and content relevance."},
 ]

const SERVICES = [
  {icon:"" , title:"Strategic Planning" , desc:"We begin by understanding your business, goals, and target audience. Based on this information, we formulate a comprehensive Twitter marketing strategy tailored to your unique objectives."} ,
  {icon:"" , title:"Audience Targeting" , desc:"Precise audience targeting is crucial for Twitter's marketing success. We use Twitter's advanced targeting options to reach the right demographics, interests, and behaviours, ensuring your message reaches those most likely to engage with your brand."} ,
  {icon:"" , title:"Content Creation" , desc:"Our creative team develops engaging content that resonates with your audience. From compelling tweets to eye-catching visuals, we craft content that drives engagement and boosts brand visibility."} ,
  {icon:"" , title:"Ad Campaign Execution" , desc:"We carefully launch and manage your Twitter ad campaigns, whether they involve Promoted Tweets, Promoted Accounts, or Promoted Trends. Our experts monitor campaign performance in real time to optimize budget allocation and maximize results."} ,
  {icon:"" , title:"Analytics and Reporting" , desc:"We provide regular reports and insights into your campaign's performance. Our analytics help you track key metrics, such as engagement rates, click-through rates, and lead conversions, ensuring transparency and accountability."} ,
  {icon:"" , title:"Continuous Optimization" , desc:"Twitter marketing is dynamic, and we stay agile. We continuously optimize your campaigns based on data-driven insights to ensure the best possible results and return on investment."} ,
  {icon:"" , title:"Strategic Guidance" , desc:"Beyond campaigns, we offer strategic guidance on Twitter content, trends, and industry best practices. We aim to empower your brand to thrive on Twitter independently."} ,
]


const SERVICES1 = [
  {icon:"" , title:"Real-time Engagement" , desc:"Twitter's real-time nature enables businesses to engage with their audience instantly. Timely responses, updates, and interactions strengthen customer relationships, increasing loyalty and trust."},
  {icon:"" , title:"Audience Insights" , desc:"Twitter provides valuable data on your audience's preferences, opinions, and behaviours. These insights inform marketing strategies, allowing you to tailor content for maximum impact and relevance."},
  {icon:"" , title:"Brand Visibility" , desc:"Active presence on Twitter ensures your brand remains visible to your target audience. Consistent tweeting, sharing relevant content, and meaningful engagement enhance your brand's recognition and credibility."},
  {icon:"" , title:"Instant Feedback" , desc:"Twitter facilitates instant feedback from your audience. Users often express their opinions openly, whether it's about a product, service, or marketing campaign. This feedback helps you make real-time adjustments and improvements."},
  {icon:"" , title:"Amplified Reach" , desc:"Twitter's vast user base and viral potential mean your message can quickly reach a broad audience. Effective Twitter marketing can lead to wider recognition and a stronger position within your industry."},
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




const X = () => {
   return (
    <div className="x shared">
      <div className="container"> <Navbar /> </div>
      <Animation />
      <div className="coverIntro "> <img src={FacebookIntro} alt="" /></div>

      <div className="home">
          <div className="container">
              <div className="boxImg hidden-img"  >  <img src={FacebookCover} alt="" /> </div>
              <div className="boxs" data-aos="fade-left" >
              <motion.p  className="h2 hidden-text" variants={Divvariant} initial="hidden" whileInView="visible" >{ Array.from("Transform Your Business with our Expert X Marketing Services").map((e,index)=>(<motion.span variants={Pvariant}   key={index}>{e}</motion.span>))} </motion.p>
              <SocialLanding />
            </div>

        </div>
      </div>
      
      
      <Divider classn="divider" />
      <div className="quotation">
        <Pattern3 />
        <div className="container" >
        <div className="box-style" data-aos="fade-up">
            <motion.p  className="h2" variants={Divvariant} initial="hidden" whileInView="visible" >{ Array.from("Unlocking X Marketing Success With MRM ").map((e,index)=>(<motion.span variants={Pvariant}   key={index}>{e}</motion.span>))}</motion.p>
            <motion.p  className="h3 div" variants={Divvariant} initial="hidden" whileInView="visible" >{ Array.from("X is a powerful social media platform with immense potential for business growth, boasting over 353 million active users. Recent studies reveal that 79% of X users recommend businesses and brands they follow, making it an excellent tool for advertising. To fully utilize X's advertising capabilities, taking necessary measures and reaching the right audience is vital.").map((e,index)=>(<motion.span variants={Pvariant}   key={index}>{e}</motion.span>))}</motion.p>
        </div>
        <div className="box-style-2" data-aos="fade-up">
            <motion.p  className="h2" variants={Divvariant} initial="hidden" whileInView="visible" >{ Array.from("MRM - Your Partner for Successful X Marketing in Dubai").map((e,index)=>(<motion.span variants={Pvariant}   key={index}>{e}</motion.span>))}</motion.p>
            <motion.p  className="h3 " variants={Divvariant} initial="hidden" whileInView="visible" >{ Array.from("We are dedicated to creating a unique brand identity, promoting growth, and ensuring the success of your business through our advertising campaigns.Our X advertising services allow you to connect with the right audience, increase brand visibility, improve engagement rates, and expand your online presence. By partnering with us, you can unlock the full potential of X marketing.").map((e,index)=>(<motion.span variants={Pvariant}   key={index}>{e}</motion.span>))}</motion.p>
        </div>
            </div>
        </div>

        <Divider classn="divider" />
        <div className="box-style-5">
          <Pattern3/>
          <div className="container">
            <ul class="cards">
            {SERVICES.map((e,index)=> (
            <li className='box'>
              <a  class="card">
                <div className="cover"> <img src={CoverImg} class="card__image" alt="" /> </div>
                <div class="card__overlay">
                  <div class="card__header">
                    <svg class="card__arc" xmlns="http://www.w3.org/2000/svg"><path /></svg>                     
                    <div class="card__header-text"> <h3 class="card__title h2" style={{color:"var(--text-color)"}}>{e.title}</h3>  </div>
                  </div>
                  <p class="card__description p" >{e.desc}</p>
                </div>
              </a>      
            </li>
            ))}
            </ul>
          </div>
        </div>


        <Divider classn="divider-left" />
      <div className="impact">
        <Pattern2 />
            <div className="container">
                <div className="h2 clip"> Types of Twitter Ads MRM Offers </div>
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
            <div className="h1" style={{marginBottom:""}}> Our Twitter Marketing Businesses</div>
            <div className="phead" style={{marginBottom:"40px"}}> At MRM, we have a refined Twitter marketing process that ensures the success of your campaigns. Here's a glimpse into our systematic approach</div>
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
        <div className="h2 clip"> Our Twitter Marketing Businesses</div>
        <div className="phead"> At MRM, we have a refined Twitter marketing process that ensures the success of your campaigns. Here's a glimpse into our systematic approach</div>
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
        </div> */}

        <Divider classn="divider-left" />
      <div className="box-style-1">
        <Pattern2 />
            <div className="container">
                <div className="h2 clip">How Twitter Marketing Helps Businesses</div>
                <div className="phead">Twitter marketing plays a pivotal role in driving business success. Here's how it can benefit your brand</div>
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

export default X





