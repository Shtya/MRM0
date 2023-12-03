import React from 'react'

const OneWhy = ({img , title , desc , classn}) => {
  return (
    <div class={`one-why ${classn}`}>
      <div className="coverImg"> <img src={img} alt="" /> </div>
      <div className="inner-box">
        <div className="h2">{title}</div>
        <div className="p">{desc}</div>
      </div>
  </div>
  )
}

export default OneWhy