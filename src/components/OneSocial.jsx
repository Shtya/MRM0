import React from 'react'

const OneSocial = ({Img , title ,desc , classn}) => {
  return (
    <div className={`cover1 ${classn}`}><div className="box">
        <div className="IcomCover hidden-img">  <img src={Img} alt="" /> </div>

        <h2 className='h2 clip hidden-text'>{title}</h2>
        <p className='p hidden-text'>{desc}</p>
    </div></div>
  )
}

export default OneSocial