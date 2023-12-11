import React from 'react'
import Footer from '../Footer'
import Navbar from '../Navbar'

import FacebookIntro from "../../assets/Socialmedia/bg-social.jpg"
import FacebookCover from "../../assets/Socialmedia/instagram.png"

import { motion } from 'framer-motion'

import Animation from '../helpers/Animation'
import Pattern1, { Divider, Pattern2, Pattern3 } from '../patterns/Pattern1'
import SocialLanding from '../SocialLanding'



const TYPES = [
  {icon :"" ,title :"Picture Ad" , desc:"This is a static picture post designed to showcase your company's products or services. Our experts craft compelling sponsored posts with a clear call to action (CTA) button that guides users to your desired destination, whether it's your website, WhatsApp, Messenger, Maps, and more."},
  {icon :"" ,title :"Stories Ads" , desc:"These are full-screen ads that appear in the midst of users' stories. With over 500 million people viewing Instagram stories daily, this format has immense potential to reach a vast audience. We include a 'swipe up' CTA button in these ads, directing viewers to a landing page or your website."},
  {icon :"" ,title :"Insta 30 Second Video Ads" , desc:"Instagram offers 30-second video ads, perfect for engaging your audience with captivating video content. Video ads are highly effective in retaining viewer attention, and the Middle East, in particular, has a significant ad reach, making them a powerful choice."},
  {icon :"" ,title :"IGTV Ads" , desc:"Instagram's IGTV feature, similar to YouTube, allows brands and influencers to share non-promotional video content. IGTV ads have no restrictions on video length, offering flexibility and creativity in your marketing approach."},
  {icon :"" ,title :"Collection Ads" , desc:"These ads combine both photo and video elements and include a CTA button like 'Learn more' or 'Purchase.' They allow you to showcase a range of products, enabling users to browse, discover, and take immediate action. This format is ideal for driving engagement and conversions."},
  {icon :"" ,title :"Multi-photo Carousel Ads" , desc:"Utilize carousel ads to display multiple product images in a single ad, accompanied by a link to your brand's website. This engaging format helps viewers retain more information and drives traffic to your site."},
]

const SERVICES = [
  {icon:"" , title:"Expertise and Experience" , desc:"Choosing to collaborate with MRM means tapping into a wealth of experience and expertise in the realm of Instagram marketing. Our seasoned professionals understand the ins and outs of the platform, which ultimately saves you valuable time and resources."},
  {icon:"" , title:"Tailored Strategies" , desc:"At MRM, we don't believe in one-size-fits-all approaches. Instead, we specialize in crafting customized digital and social media advertising strategies. By tailoring our methods to suit your specific business needs, we ensure that you get the best possible results."},
  {icon:"" , title:"Window Shopping Experience" , desc:"Through our services, we offer your followers a captivating virtual window-shopping experience. We provide insights, promotions, and other valuable information that piques their interest and keeps them engaged with your brand."},
  {icon:"" , title:"Brand Promotion" , desc:"MRM excels at promoting your brand effectively on Instagram. We share stunning images and pair them with engaging captions that tell your brand's unique story. Our goal is to create a lasting impression and drive customer engagement."},
  {icon:"" , title:"Attract Fans and Boost Sales" , desc:"Leveraging coupon codes and discounts, we help you attract more followers to your brand. By creating a sense of exclusivity and preferred status among specific audiences, we increase engagement and drive sales."},
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




const Instagram = () => {
   return (
    <div className="Instagram shared">
      <div className="container"> <Navbar /> </div>
      <Animation />
      <div className="coverIntro "> <img src={FacebookIntro} alt="" /></div>

      <div className="home">
          <div className="container">
              <div className="boxImg hidden-img"  >  <img src={FacebookCover} alt="" /> </div>
              <div className="boxs" data-aos="fade-left" >
              <motion.p  className="h2 hidden-text" variants={Divvariant} initial="hidden" whileInView="visible" >{ Array.from("Maximize Your Reach and Engagement with Our Instagram Marketing Services").map((e,index)=>(<motion.span variants={Pvariant}   key={index}>{e}</motion.span>))} </motion.p>
              <SocialLanding />
            </div>

        </div>
      </div>

      <Divider classn="divider-left" />
      <div className="quotation">
        <Pattern3 />
        <div className="container" >
        <div className="box-style" data-aos="fade-up">
            <motion.p  className="h2" variants={Divvariant} initial="hidden" whileInView="visible" >{ Array.from("MRM Your Premier Choice for Instagram Marketing Services In Dubai").map((e,index)=>(<motion.span variants={Pvariant}   key={index}>{e}</motion.span>))}</motion.p>
            <motion.p  className="h3 div" variants={Divvariant} initial="hidden" whileInView="visible" >{ Array.from("At MRM, we are proud to be known as the best in Dubai for providing top-notch Instagram marketing services. We invite business owners to partner with us and experience the unparalleled potential of Instagram marketing. Our services help you connect with your audience, promote your brand, and increase sales.").map((e,index)=>(<motion.span variants={Pvariant}   key={index}>{e}</motion.span>))}</motion.p>
        </div>

        <div className="box-style-2" data-aos="fade-up">
            <motion.p  className="h2" variants={Divvariant} initial="hidden" whileInView="visible" >{ Array.from("Instagram Marketing with MRM Your Gateway To Success").map((e,index)=>(<motion.span variants={Pvariant}   key={index}>{e}</motion.span>))}</motion.p>
            <motion.p  className="h3 " variants={Divvariant} initial="hidden" whileInView="visible" >{ Array.from("In today's digital landscape, social media has become a dominant force in the marketing world. Among all the social media platforms, Instagram is a powerful tool for businesses to showcase their products and services to a wider audience. With its visual focus and engaged user base, Instagram offers a unique opportunity for businesses to connect with their customers and build their brands.").map((e,index)=>(<motion.span variants={Pvariant}   key={index}>{e}</motion.span>))}</motion.p>
        </div>
            </div>
        </div>

      <Divider classn="divider" />
      <div className="impact">
        <Pattern2 />
            <div className="container">
                <div className="h2 clip">Types of Ads You Can Run on Instagram</div>
                <div className="phead">Let's dive into the various types of Instagram ads that our expert team at MRM can strategically execute for your brand</div>
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



        <Divider classn="divider-left" />
      <div className="box-style-1">
        <Pattern2 />
            <div className="container">
            Why Working With MRM Has More Advantages:
When it comes to Instagram marketing, partnering with MRM provides a host of unique advantages that can significantly benefit your business:

                <div className="h2 clip"> What MRM, a Premier Snapchat Marketing Agency, Can Do for You</div>
                <div className="boxs" >
                  {
                    SERVICES.map((e,index)=> (
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

export default Instagram





