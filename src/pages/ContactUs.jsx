import React from 'react'
import Navbar from '../components/Navbar'
import Contact2 from '../components/Contact2'
import Footer from '../components/Footer'

const ContactUs = () => {
  return (
    <div className='contact-us'>
      <div className="container"> <Navbar /> </div>
      <Contact2  />
      <Footer appear={false} />
    </div>
  )
}

export default ContactUs