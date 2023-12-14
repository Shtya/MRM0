import React from 'react'
import Footer from '../Footer'
import Navbar from '../Navbar'

import FacebookIntro from "../../assets/Socialmedia/bg-social.jpg"
import FacebookCover from "../../assets/Socialmedia/linkedin.png"


import { motion } from 'framer-motion'

import Animation from '../helpers/Animation'
import Pattern1, { Divider, Pattern2, Pattern3 } from '../patterns/Pattern1'
import SocialLanding from '../SocialLanding'



const TYPES = [
  {icon :"" ,title:" Sponsored Content" , desc:" Promote existing content from your business page to a tailored target demographic. Utilize LinkedIn's robust profile data to create an ideal audience and engage with those genuinely interested in your brand."},
  {icon :"" ,title:" Sponsored InMail" , desc:" Deliver personalized ads directly to a LinkedIn user's inbox, adding a personal touch to your messages. Sponsored InMail reaches active users across both desktop and mobile devices, making it a potent tool"},
  {icon :"" ,title:"Text Ads" , desc:" Text Ads include compelling headlines, descriptions, and images. With this ad format, we create multiple ad versions for each campaign to optimize performance. These ads are viewable on desktop computers, providing a versatile advertising option."},
 ]

const SERVICES = [
  {icon:"" , title:"Strategic Audience Targeting" , desc:"Our expert team utilizes LinkedIn's precise targeting options to identify and reach the most relevant professionals for your business. We tailor your marketing campaigns to connect with decision-makers, industry experts, and potential clients who are genuinely interested in your offerings."} ,
  {icon:"" , title:"Optimized Brand Visibility" , desc:"MRM focuses on optimizing your brand's visibility on LinkedIn. We create and share insightful content that resonates with your target audience, positioning your business as a thought leader in your industry. This heightened visibility fosters trust and recognition among your peers and potential customers."} ,
  {icon:"" , title:"Quality Lead Generation" , desc:"We recognize that LinkedIn's user base is composed of professionals actively seeking business-related opportunities. Our strategies are designed to generate high-quality leads, ensuring that the individuals you connect with are more likely to engage with your business and convert into valuable clients."} ,
  {icon:"" , title:"B2B Networking Excellence" , desc:"LinkedIn is a powerful platform for B2B networking, and we make the most of it. We help you build and nurture professional relationships with decision-makers, potential partners, and industry influencers. These connections can lead to collaborative ventures, referrals, and overall business growth."} ,
  {icon:"" , title:"Content Sharing and Thought Leadership" , desc:"MRM emphasizes content sharing and thought leadership on LinkedIn. We publish informative articles, share compelling case studies, and offer valuable insights that not only attract your target audience but also establish your business as an industry authority."} ,
  {icon:"" , title:"Recruitment and Employer Branding" , desc:"Beyond marketing, we recognize LinkedIn's potential for recruitment and employer branding. We assist in identifying and connecting with potential employees, posting job openings, and promoting your company culture. This comprehensive approach aids in talent acquisition and enhances your reputation as an employer of choice."} ,
]


const SERVICES1 = [
  {icon:"" , title:"Research" , desc:"We gather in-depth knowledge about your business and services to identify your target audience based on various parameters such as company, job position, education, and skills."},
  {icon:"" , title:"Budgeting" , desc:"We create an advertising plan tailored to your budget, ensuring a high return on investment without compromising results."},
  {icon:"" , title:"Targeting" , desc:"Our expertise in targeting allows us to leverage LinkedIn's self-reported data for precise audience selection, minimizing advertising waste."},
  {icon:"" , title:"Campaign Setup" , desc:"We choose the right ad format, create multiple ad variations, and continuously optimize to maximize results."},
  {icon:"" , title:"Measure and Optimize" , desc:"We closely monitor metrics, adjusting campaigns to improve performance and deliver the best possible outcomes."},
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




const Linkedin = () => {
   return (
    <div className="Linkedin shared">
      <div className="container"> <Navbar /> </div>
      <Animation />
      <div className="coverIntro "> <img src={FacebookIntro} alt="" /></div>

      <div className="home">
          <div className="container">
              <div className="boxImg hidden-img"  >  <img src={FacebookCover} alt="" /> </div>
              <div className="boxs" data-aos="fade-left" >
              <motion.p  className="h2 hidden-text" variants={Divvariant} initial="hidden" whileInView="visible" >{ Array.from("Grow Your Business with Our Comprehensive LinkedIn Marketing Solutions").map((e,index)=>(<motion.span variants={Pvariant}   key={index}>{e}</motion.span>))} </motion.p>
              <SocialLanding />
            </div>

        </div>
      </div>
      

      <Divider classn="divider" />
      <div className="quotation">
        <Pattern3 />
        <div className="container" >
        <div className="box-style" data-aos="fade-up">
            <motion.p  className="h2" variants={Divvariant} initial="hidden" whileInView="visible" >{ Array.from("Partner with MRM for Results-Driven LinkedIn Marketing in Dubai ").map((e,index)=>(<motion.span variants={Pvariant}   key={index}>{e}</motion.span>))}</motion.p>
            <motion.p  className="h3 div" variants={Divvariant} initial="hidden" whileInView="visible" >{ Array.from("At MRM, we strive to captivate and engage your audience on LinkedIn by going above and beyond. Our team specializes in creating custom ads featuring compelling content, such as short videos, GIFs, and images. As the leading social media agency in Dubai, our solutions are meticulously optimized and tailored to meet your objectives and connect with your target audiences. We excel at identifying the right audience and monitoring brand conversations on social media. LinkedIn's powerful targeting capabilities enable us to reach individuals based on their occupation, job title, corporate position, location, and more, making it an ideal platform for B2B clients to generate high-quality leads.").map((e,index)=>(<motion.span variants={Pvariant}   key={index}>{e}</motion.span>))}</motion.p>
</div>
<div className="box-style-2" data-aos="fade-up">
            <motion.p  className="h2" variants={Divvariant} initial="hidden" whileInView="visible" >{ Array.from("The Power of LinkedIn Marketing for Businesses").map((e,index)=>(<motion.span variants={Pvariant}   key={index}>{e}</motion.span>))}</motion.p>
            <motion.p  className="h3 " variants={Divvariant} initial="hidden" whileInView="visible" >{ Array.from("LinkedIn is certainly a great platform for professionals to connect with each other from all over the world. With over 1.5 billion active users, it provides a unique opportunity to enhance personal brand and professional influence. By using LinkedIn, you can enhance your professional influence and expand your social network.").map((e,index)=>(<motion.span variants={Pvariant}   key={index}>{e}</motion.span>))}</motion.p>
</div>
            </div>
        </div>


        <Divider classn="divider-left" />
      <div className="impact">
        <Pattern2 />
            <div className="container">
                <div className="h2 clip"> Types of Linkedin Ads </div>
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
            <div className="h1" style={{marginBottom:""}}>How MRM Utilizes LinkedIn's Advantages for Your Business Success</div>
            <div className="phead" style={{marginBottom:"40px"}}>At MRM, we understand that LinkedIn is a dynamic platform with unique features </div>
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


{/* 
        <Divider classn="divider" />
        <div className="process2">
        <div className="h2 clip">How MRM Utilizes LinkedIn's Advantages for Your Business Success</div>
        <div className="phead">At MRM, we understand that LinkedIn is a dynamic platform with unique features </div>
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
                <div className="h2 hidden-text">MRM's LinkedIn Advertising Process</div>
                <div className="boxs" >
                  {
                    SERVICES1.map((e,index)=> (
                      <div className="box" key={index} data-aos="fade-up" >
                          <div className="text">
                              <div className="h3 hidden-text" >{e.title} </div>
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

export default Linkedin





