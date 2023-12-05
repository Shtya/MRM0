import React from 'react'

const OneWhy = ({img , title , desc , classn}) => {
  return (
    <div class={`one-why ${classn}`}>
      <div className="coverImg hidden-img"> <img src={img} alt="" /> </div>
      <div className="inner-box">
        {/* <div className="h2 hidden-text">{title}</div> */}
        <div className="p hidden-text">{desc}</div>
      </div>
  </div>
  )
}

export default OneWhy