import React, { useEffect } from 'react'

import ImgIntro from "../assets/S_media/intro.jpg"
import ImgSection from "../assets/S_media/cover.jpg"
import OneSocial from '../components/OneSocial'

import   F from "../assets/S_media/facebook.png"
  import X from "../assets/S_media/x.png"
  import I from "../assets/S_media/instagram.png"
  import L from "../assets/S_media/linkedin.png"
  import S from "../assets/S_media/snapchat.png"
  import T from "../assets/S_media/tiktok.png"
  import G from "../assets/S_media/google.png"


import Icon_1 from "../assets/S_media/1.png" ;
import Icon_2 from "../assets/S_media/2.png" ;
import Icon_3 from "../assets/S_media/3.png" ;
import Icon_4 from "../assets/S_media/4.png" ;
import Icon_5 from "../assets/S_media/5.png" ;
import Icon_6 from "../assets/S_media/6.png" ;
import Icon_7 from "../assets/S_media/7.png" ;
import Icon_8 from "../assets/S_media/8.png" ;

import ImpactImg1 from "../assets/S_media/impact1.png" ;
import ImpactImg2 from "../assets/S_media/impact2.png" ;
import ImpactImg3 from "../assets/S_media/impact3.png" ;
import ImpactImg4 from "../assets/S_media/impact4.png" ;

import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Animation from '../components/helpers/Animation'
import Pattern1, { Divider, Pattern2, Pattern3 } from '../components/patterns/Pattern1'


const li = [ "Google Ads Campaigns","Facebook Advertising","Instagram Advertising","LinkedIn Advertising","Snapchat Advertising","Twitter Advertising", "Tiktok Advertising"]
const Paid = [ 
  {classn: "hidden hidden-left"  ,img: X , path:"/x" ,title:"X (Twitter) Advertising" , desc:"Boost your brand on Twitter with our expert campaigns. Tailored to your needs, we'll help you engage, generate leads and drive sales."},
  {classn: "hidden hidden-left"  ,img: F , path:"/facebook" ,title:"Facebook Advertising" , desc:"Connect with your target audience on one of their most frequented platforms. Our in-depth expertise leverages Facebook's detailed targeting capabilities to engage the most receptive consumers."},
  {classn: "hidden hidden-left"  ,img: I , path:"/instagram" ,title:"Instagram Advertising" , desc:"Showcase your brand with visually captivating Instagram ads. Stay top-of-mind with powerful advertising features that drive brand recognition and engagement."},
  {classn: "hidden hidden-left"  ,img: L , path:"/linkedin" ,title:"LinkedIn Advertising" , desc:"Contact business owners and potential clients through LinkedIn's specialized advertising platform. Our strategies ensure you connect with the right audience for your business goals."},
  {classn: "hidden hidden-left"  ,img: T , path:"/tiktok" ,title:"TikTok Advertising" , desc:"Ignite excitement around your brand with fun and engaging ads on the latest Social Media sensation, TikTok. Harness the creativity of this popular new platform to connect with your target audience."},
  {classn: "hidden hidden-left"  ,img: S , path:"/snapchat" ,title:"Snapchat Advertising" , desc:"Captivate the Snapchat audience with creative and impactful advertising. Share your brand's story and products in a format that resonates with this unique demographic."},
  {classn: "hidden hidden-left"  ,img: G  ,title:"Google Ads Campaigns" , desc:"Effective PPC management requires specialized expertise in advertising strategies, budget planning, and execution. Our experienced team leverages data-driven insights, cutting-edge technology, and creative solutions to create high-performing campaigns that can significantly impact your bottom line."},
]
const Impact = [
  {img:ImpactImg1 , title:"Higher Conversion Rate" , desc:"By utilizing the latest tools and techniques, we guarantee highly effective social media ad campaigns that drive conversions and significantly boost your business's conversion rate."  } ,
  {img:ImpactImg2 , title:"Better Customer Engagement" , desc:"Our team of creative writers and graphic designers excel at crafting engaging content that resonates with your target audience. This content increases engagement and attracts a growing base of social media followers."  } ,
  {img:ImpactImg3 , title:"Cost-Effective Solutions" , desc:"Worried about the cost? Don't be. We offer cost-effective social media management services that deliver exceptional value for your investment. "  } ,
  {img:ImpactImg4 , title:"More Inbound Traffic" , desc:"Besides increasing inbound traffic to your social media profiles and website, our strategies enhance your brand's visibility and impact with consistent visitor flow."  } ,
]
const process = [
  {img: Icon_1, title:"Strategy Development" ,desc:"We dive deep into your business, understanding your goals, audience, and competition to create a tailored strategy."},
  {img: Icon_2, title:"Customized Campaign Creation" ,desc:"Our team of skilled advertising specialists creates customized campaigns tailored to your unique needs.3. Precise Targeting:"},
  {img: Icon_3, title:"We prioritize conversions over clicks" ,desc:"Our advanced targeting techniques ensure that your ads reach the right audience at the right time, making the most of your budget."},
  {img: Icon_4, title:"Engaging Ad Creative" ,desc:"Compelling ad copy and eye-catching visuals are essential. Our creative team designs ads that grab attention and convey your message effectively."},
  {img: Icon_5, title:"Continuous Optimization" ,desc:"The digital landscape is ever-changing. We continually monitor and optimize your campaigns to ensure they perform at their best. "},
  {img: Icon_6, title:"Detailed Reporting" ,desc:"Transparency is at the core of our service. You'll receive detailed reports that provide insights into campaign performance. We believe in keeping you informed every step of the way."},
  {img: Icon_7, title:"A/B Testing" ,desc:"We always strive for good when we can make it great. A/B testing allows us to refine ad elements, ensuring your campaigns are continually improving."},
  {img: Icon_8, title:"Ongoing Support" ,desc:"Our commitment to your success continues after the campaign is launched. We provide ongoing support and insights to ensure your advertising efforts remain effective and aligned with your goals."},
]

const S_Media = () => {

  return (
  <div className="S_media landing">
    <Animation />
      <div className="container"> <Navbar /> </div>

      <div className="coverIntro "> <img src={ImgIntro} alt="" /></div>

      <div className="home">
        <div className="container">
            <div className="boxImg hidden-img " >  <img src={ImgSection} alt="" /> </div>
            <div className="boxs" >
                <h2 className='h1 hidden-text' data-aos="fade-left"> Boost your brand's presence and supercharge your online growth with MRM's paid advertising expertise</h2>
                <h2 className='h2 hidden-text' data-aos="fade-left">Transform your social platforms into full revenue drivers and maximize your return on investment </h2>
                <div className="inner-boxs" >
              <ul className="box">
                <li className='li hidden-text' data-aos="fade-left"> {li[0]} </li>
                <li className='li hidden-text' data-aos="fade-left"> {li[1]} </li>
                <li className='li hidden-text' data-aos="fade-left"> {li[2]} </li>
                <li className='li hidden-text' data-aos="fade-left"> {li[3]} </li>
              </ul>

              <ul className="box box-2">
                <li className='li hidden-text' data-aos="fade-left"> {li[4]} </li>
                <li className='li hidden-text' data-aos="fade-left"> {li[5]} </li>
                <li className='li hidden-text' data-aos="fade-left"> {li[6]} </li>
              </ul>
            </div>
          </div>
      </div>
      </div>

      <Divider classn="divider" />
      <div className="quotation">
        <Pattern1 />
        <div className="container">
              <div className="h2 hidden-text" data-aos="fade-up"> Experience the Power of Paid Amplification</div>
              <p className="h3 "> We create paid campaigns with specific goals, such as boosting brand awareness, engaging with audiences, generating leads, and driving sales. We understand that success varies for each business, so we tailor our campaigns to align with your unique Key Performance Indicators. Connect with your target audience on one of their most frequented platforms. Our in-depth expertise leverages Facebook's detailed targeting capabilities to engage the most receptive consumers.</p>
        </div>
        </div>

        <Divider classn="divider-left" />
        <div className="social-media">
        <Pattern3 />
        <div className="container">
            <h3 className='h1'>We offer standout paid campaigns for your business</h3>
            <div className="boxs">
            {
                Paid.map((e,index)=> ( <OneSocial key={index} Img={e.img} title={e.title} desc={e.desc} path={e.path} classn={e.classn} /> ))
            }
            </div>
        </div>
        </div>

        <Divider classn="divider" />
        <div className="impact">
        <Pattern2 />
            <div className="container">
                <div className="h1 clip hidden-text" data-aos="fade-left"  >Impact of what you'll get</div>
                <div className="phead hidden-text" data-aos="fade-left"  >MRM is the preferred choice for social media marketing services in Dubai.  We specialize in tailoring effective strategies that fit your brand and objectives. Here's how we can help</div>
                <div className="boxs">
                  {
                    Impact.map((e,index)=> (
                      <div className="box" key={index}>
                          <div className="coverImg hidden-img"> <img src={e.img} alt="" /> </div>
                          <div className="text">
                              <div className="h3 clip hidden-text" data-aos="fade-up">{e.title} </div>
                              <div className="p hidden-text" data-aos="fade-up">{e.desc} </div>
                          </div>
                      </div>
                    ))
                  }
                </div>
            </div>
        </div>


        <Divider classn="divider-left" />
        <div className="process3">
        <Pattern3 />
            <div className="container">
                <div className="h1 clip hidden-text" data-aos="fade-left">Our Process</div>

                <div className="timeline">
                  {
                    process.map((e,index)=>(
                      <div className="check-point" key={index} data-aos="fade-up" >
                        <div className="number hidden-text" data-aos="fade-left"> 0{index +1} </div>
                        <div className='inner-box'>
                          <span className='hidden-img' ><img src={e.img} alt="" /></span>
                          <h2 className="h3 clip hidden-text" data-aos="fade-left">{e.title}</h2>
                          <p className="p hidden-text" data-aos="fade-left"> {e.desc}</p>
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

export default S_Media