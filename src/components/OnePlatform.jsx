import React from 'react'
import { Link } from 'react-router-dom'

const OnePlatform = ({title , paragraph , img , classn , path }) => {
  return (
    <Link to={path}  className={`box ${classn}`} data-aos="fade-up">
        <div className="coverImg hidden-img"> <img src={img} alt="" /></div>
        <div className="inner-box">
            <span className="one"/>
            <span className="two"/>
            <h2 className='h2 hidden-text clip'> {title} </h2>
            <p className='p hidden-text'>{paragraph}</p>
            {/* <button className='bt'> see more</button> */}
        </div>
      </Link>
  )
}

export default OnePlatform