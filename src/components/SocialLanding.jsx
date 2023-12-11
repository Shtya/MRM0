import React from 'react'
import { Link } from 'react-router-dom'

const SocialLanding = () => {
  return (
    <div className='SocialLanding'>
      <ul className="social">
          {/* <Link to="/contact-us"> Contact us </Link> */}
          <li><i className="fa-brands fa-facebook-f"></i></li>
          <li><i className="fa-brands fa-instagram"></i></li>
          <li><i className="fa-brands fa-whatsapp"></i></li>
          <li><i className="fa-brands fa-linkedin-in"></i></li>
        </ul>

    </div>
  )
}

export default SocialLanding