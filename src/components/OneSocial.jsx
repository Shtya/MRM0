import React from 'react'
import { Link } from 'react-router-dom'

const OneSocial = ({Img , title ,desc , classn , path}) => {
  return (
    <Link to={path} className={`cover1 ${classn}`}><div className="box">
        <div className="IcomCover hidden-img">  <img src={Img} alt="" /> </div>

        <h2 className='h2 clip hidden-text'>{title}</h2>
        <p className='p hidden-text'>{desc}</p>
    </div></Link>
  )
}

export default OneSocial