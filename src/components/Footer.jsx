import React from 'react'
import Logo from "../assets/Logo1.png"
import { Link } from 'react-router-dom'
import { Divider, Pattern2, Pattern3, Pattern5, Pattern6, Pattern7, Pattern8 } from './patterns/Pattern1'
import QuickContact from './QuickContact'

const Footer = ({appear}) => {
  return (
    <>
    <Divider classn="divider-left" />
    {/* <Divider classn='divider-left' /> */}
    <footer>
    <Pattern8 />
    {appear != false &&<QuickContact  />}
      <div className="container">
      <div className="top">
        <img src={Logo} alt="" />
        <div className="phead">We Don't Create Ads ,We Build Successful Campaigns</div>
        <ul className="social">
          <li><i className="fa-brands fa-facebook-f"></i></li>
          <li><i className="fa-brands fa-instagram"></i></li>
          <li><i className="fa-brands fa-whatsapp"></i></li>
          <li><i className="fa-brands fa-linkedin-in"></i></li>
        </ul>
      </div>

      <div className="center">
        <ul className='ul-1'>
          <h2 className='h2 clip'>Contact INFO</h2>
          <li><i className="fa-solid fa-phone"></i>  +971561384496 </li>
          <li><i className="fa-solid fa-envelope"></i>  info@mrmadvertisingdubai.com </li>
          <li><i className="fa-solid fa-map-location-dot"></i>  Business Bay - Dubai </li>
        </ul>

        <ul className='ul-2'>
          <h2 className='h2 clip'>Quick Links</h2>
          <li > <Link className='p' to="/about-us"> about us </Link></li>
          <li > <Link className='p' to="/landing"> services </Link></li>
          <li > <Link className='p' to="/contact-us"> contact us </Link></li>
          <li > <Link className='p' to="/blog"> blog </Link></li>
        </ul>

        <ul className='ul-3' >
          <h2 className='h2 clip'>SUBSCRIBE TO OUR NEWSLETTER</h2>
          <li className='newsletter'>Stay Informed and Inspired Subscribe to Our Newsletter for Exclusive Updates, Insights, and Offers</li>
          <div className="group">
            <input type="text" placeholder='Email Address' />
            <i className="fa-regular fa-envelope"></i>
          </div>
        </ul>


      </div>

        <div className="bottom">
          <p className='p'>All rights reserved 2023 ©MRM Adevertising Agency</p>
          <div className="last">
            <Link className='p' to="/terms">  terms </Link>
            <Link className='p' to="/privacy">  privacy </Link>
          </div>
        </div>
      </div>
    </footer>
    </>
  )
}

export default Footer