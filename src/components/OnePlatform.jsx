import React from 'react'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom';


const OnePlatform = ({title , paragraph , img , classn , path , trueBtn}) => {
  const navigate = useNavigate()

  return (
    <Link to={path}  className={`box ${classn}`} data-aos="fade-up">
        <div className="coverImg hidden-img"> <img src={img} alt="" /></div>
        <div className="inner-box">
            <span className="one"/>
            <span className="two"/>
            <h2 className='h2 hidden-text clip'> {title} </h2>
            <p className='p hidden-text'>{paragraph}</p>
            {trueBtn &&<button className='bt' onClick={_=> navigate(path)}> see more</button>}
        </div>
      </Link>
  )
}

export default OnePlatform