import React, { useEffect, useRef } from 'react'
import Navbar from '../components/Navbar'
import Intro1 from "../assets/social media marketing/intro.jpg" ;
import Community from "../assets/social media marketing/cover.jpg" ;

import Social_1 from "../assets/landing/social-1.png"
  import Social_2 from "../assets/landing/social-2.png"
  import Social_3 from "../assets/landing/social-3.png"
  import Social_4 from "../assets/landing/social-4.png"
  import Social_5 from "../assets/landing/social-5.png"
  import Social_6 from "../assets/landing/social-6.png"

import Icon_1 from   "../assets/landing/icon (1).png"
  import Icon_2 from "../assets/landing/icon (2).png"
  import Icon_3 from "../assets/landing/icon (3).png"
  import Icon_4 from "../assets/landing/icon (4).png"
  import Icon_5 from "../assets/landing/icon (5).png"
  import Icon_6 from "../assets/landing/icon (6).png"
  import OnePlatform from '../components/OnePlatform';

import Grid1 from "../assets/landing/Grid1.jpg" ;
  import Grid2 from "../assets/landing/Grid2.jpg" ;
  import Grid3 from "../assets/landing/Grid3.jpg" ;
  import Grid4 from "../assets/landing/Grid4.jpg" ;

import Process1 from "../assets/landing/process1.png" ;
  import Process2 from "../assets/landing/process2.png" ;
  import Process3 from "../assets/landing/process3.png" ;
  import Process4 from "../assets/landing/process4.png" ;
  import Process5 from "../assets/landing/process5.png" ;

import OneProcess from '../components/OneProcess';
import Clients from '../components/Clients';
import Footer from '../components/Footer';
import OneSocial from '../components/OneSocial';
import Animation from '../components/helpers/Animation';
import Pattern1, { Divider, Pattern2, Pattern3 } from '../components/patterns/Pattern1';

const SocialMedia = [
  {classn :"hidden hidden-left" , img:Social_1 , title:"Social Media Strategy"    , desc:"Our social media experts will create a custom strategy that aligns with your brand's objectives and target audience."},
  {classn :"hidden hidden-left" , img:Social_2 , title:"Content Creation "        , desc:"Producing captivating, high-quality content that reflects your brand's identity and appeals to your target audience is the cornerstone of successful social media marketing, and our skilled content creators specialize in just that."},
  {classn :"hidden hidden-left" , img:Social_3 , title:"Platform Optimization"    , desc:"Our platform optimization services aim to maximize your social media profiles' effectiveness and appeal. We optimize your profile descriptions, images, and keywords for organic growth and visibility."},
  {classn :"hidden hidden-left" , img:Social_4 , title:"Social Media Advertising" , desc:"Paid advertising can effectively increase brand reach and conversions. Our team creates targeted social media ad campaigns using platform-specific ad formats and advanced targeting options."},
  {classn :"hidden hidden-left" , img:Social_5 , title:"Community Management"     , desc:"A robust online community is crucial for brand loyalty and success. We build and maintain relationships with your audience by engaging regularly, responding promptly to inquiries, and monitoring your brand's reputation."},
  {classn :"hidden hidden-left" , img:Social_6 , title:"Analytics and Reporting"  , desc:"Data empowers informed decision-making. Our analytics and reports provide detailed insights into social media performance, including engagement, reach, conversions, and growth."},
]
const Landing = () => {

  return (
    <div className='landing'>
      <Animation />
      <div className="container"> <Navbar /> </div>
      <div className="coverIntro"> <img  src={Intro1} alt="" /></div>
      
      <div className="home">
        <div className="container">
          <div className="boxImg hidden-img" >  <img className='n-border' src={Community} alt="" /> </div>
          <div className="boxs" >
            <h2 className='h1 hidden-text' data-aos="fade-left"> Enhance the Effectiveness of Your Social Media Presence</h2>
            <p className='h3 hidden-text' data-aos="fade-left">Boost your brand online with our social media management services </p>
            <div className="inner-boxs" >

              <ul className="box">
                <li className='li hidden-text'>Social media strategy development</li>
                <li className='li hidden-text'>Content creation</li>
                <li className='li hidden-text'>Social media advertising</li>
                <li className='li hidden-text'>Social media Marketing</li>
              </ul>

              <ul className="box box-2">
                <li className='li hidden-text'>Influencer marketing</li>
                <li className='li hidden-text'>Community management </li>
                <li className='li hidden-text'>Reputation management</li>
                <li className='li hidden-text'>Crisis management</li>
              </ul>

            </div>
          </div>
        </div>
      </div>

      <Divider classn="divider" />
      <div className="searching">
        <Pattern1 />
          <div className="container">
              <div className="coverImg  "> 
                  <img className='hidden-img' src={Grid1} alt="" /> 
                  <img className='hidden-img' src={Grid2} alt="" /> 
                  <img className='hidden-img' src={Grid3} alt="" /> 
                  <img className='hidden-img' src={Grid4} alt="" /> 
              </div>

              <div className="boxs ">
                  <h3 className='h2 hidden-text' data-aos="fade-left">Are you searching for top-notch <br/> social media management services in Dubai?</h3>
                  
                  <div className="box">
                      <h2 className='h3 hidden-text' data-aos="fade-left"> We've got you covered</h2>
                      <p className='p hidden-text' data-aos="fade-left"> We take pride in delivering exceptional results that help increase sales while minimizing costs. We collaborate with you to develop a tailored strategy that aligns with your business goals. Our team can help you achieve your digital marketing goals, whether you need to drive traffic, increase brand awareness, or boost sales. </p>
                  </div>

                  <div className="box">
                      <h2 className='h3 hidden-text' data-aos="fade-left">We're A Full-Service Digital Agency</h2>
                      <p className='p hidden-text' data-aos="fade-left"> MRM is an innovative social media management agency that helps brands fully leverage their online presence. We have a dynamic team of strategists, content creators, and social media experts who collaborate to develop innovative, data-driven solutions tailored to your specific goals and objectives. Partnering with MRM unlocks the power of expert social media management to elevate your brand's digital presence.</p>
                  </div>

              </div>
          </div>
      </div>


      <Divider classn="divider-left" />
      <div className="social-media  ">
        <Pattern3 />
        <div className="container">
          <h3 className='h1 hidden-text clip'>Our Social Media Marketing Services</h3>
          <div className="boxs">
            {
              SocialMedia.map((e,index)=> ( <OneSocial  key={index} Img={e.img} title={e.title} desc={e.desc} classn={e.classn} />))
            }
          </div>
        </div>
      </div>

      <Divider classn="divider" />
      <div className="platforms">
        <Pattern2 />
          <div className="container">
              <h3 className='h1 hidden-text clip'>Platforms we've managed on social media</h3>
              <div className="boxs">
                  <OnePlatform trueBtn={true} path="/facebook" num="hidden hidden-left" img={Icon_1} title="Facbook Marketing "   paragraph="we can increase your brand interaction on Facebook and Instagram with deep engagement methods and rich content, including video marketing. Our specialists help you achieve your marketing goals by leveraging your Facebook presence to raise brand awareness, reach new customers, generate leads, boost website traffic, or gather market and competitor information." />
                  <OnePlatform trueBtn={true} path="/snapchat" num="hidden" img={Icon_4} title="Snapchat Marketing "  paragraph="We specialize in creating effective Snapchat Ads to boost your brand's visibility, drive traffic, and increase sales. Our region-specific marketing tactics leverage features like Snap Ads, Geofilters, and Sponsored Lens to optimize your presence on this fast-growing platform. We can help you incorporate Snapchat into your marketing strategy for short-term, impactful campaigns." />
                  <OnePlatform trueBtn={true} path="/instagram" classn="different" num="hidden hidden-left" img={Icon_2} title="Instagram Marketing " paragraph="We bring your brand to life on Instagram through innovative visual marketing. Our marketing services are customized to help businesses reach their goals and generate leads, increase engagement, and drive sales. Our specialists conduct research before creating regular content to ensure effective campaigns." />
                  <OnePlatform trueBtn={true} path="/x" num="hidden hidden-left" img={Icon_5} title="X Marketing "         paragraph="We can help you enhance your Twitter presence by connecting you with millions of users and creating viral videos. Our X management services provide prompt responses and strategic messaging, resulting in positive word-of-mouth that enhances your business's profits." />
                  <OnePlatform trueBtn={true} path="/linkedin" num="hidden" img={Icon_3} title="LinkedIn Marketing "  paragraph="LinkedIn is essential for B2B companies. Partner with our team of specialists to manage your company's LinkedIn page, connect with decision-makers, and increase your online rankings. Prism is a leading LinkedIn marketing agency that provides outstanding content and advertising services to help your company stand out." />
                  <OnePlatform trueBtn={true} path="/tiktok" num="hidden" img={Icon_6} title="TikTok Marketing "    paragraph="We can help you develop campaigns that maximize your advertising budget's ROI and capture your target audience's attention with creative videos." />
              </div>
          </div>
      </div>

      <Divider classn="divider-left" />
    <div className="process">
        <Pattern3 />
    <div className="container1"> <div className="h1 hidden-text clip">our proccess</div></div>
        <div className="container">
            <div className="box box1">
                <OneProcess num="1" classn="hidden" img={Process1} title="Optimized For Results" paragraph="We work closely with our clients to understand their business goals, target audience, industry, and competitors. With this knowledge, we create a tailored social media plan that meets their unique needs. We aim to deliver a strategy customized to each client's specific requirements." />
                <OneProcess num="2" classn="hidden" img={Process2} title="Planning" paragraph="During the planning phase, we create a detailed strategy outlining tactics for achieving the client's goals such as content creation, advertising, and social media management." />
                <OneProcess num="3" classn="hidden" img={Process3} title="Implementation" paragraph="We begin executing the plan. Our team of social media experts creates and publishes high-quality content, manages social media accounts, and runs advertising campaigns. We constantly monitor and analyze our campaigns to ensure we achieve our clients' goals." />
            </div>
            <div className="box box2">
                <OneProcess num="4" classn="hidden hidden-left" img={Process4} title="Optimization" paragraph="As we collect data on our campaigns, we use it to optimize our strategy and tactics, making data-driven decisions that improve engagement, drive traffic, and generate leads and sales." />
                <OneProcess num="5" classn="hidden hidden-left" img={Process5} title="Reporting" paragraph="We regularly provide clients with detailed reports on the progress of their social media campaigns. These reports include key metrics like engagement, reach, traffic, and leads. They help clients understand the value of our services and make data-driven decisions for future campaigns." />
            </div>
        </div>
    </div>

    <Divider classn="divider" />
      <Clients />

      <Footer />
    </div>
  )
}

export default Landing