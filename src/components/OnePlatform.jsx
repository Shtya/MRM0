import React from 'react'

const OnePlatform = ({title , paragraph , img , classn }) => {
  return (
    <div className={`box ${classn}`}>
        <div className="coverImg hidden-img"> <img src={img} alt="" /></div>
        <div className="inner-box">
            <span className="one"/>
            <span className="two"/>
            <h2 className='h2 hidden-text'> {title} </h2>
            <p className='p hidden-text'>{paragraph}</p>
            {/* <button className='bt'> see more</button> */}
        </div>
      </div>
  )
}

export default OnePlatform