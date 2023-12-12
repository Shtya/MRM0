import React, { useEffect, useState } from 'react'

const SlideNav = ({share , whats}) => {

  // UP
  const [top , settop] = useState(false)
  useEffect(_=>{
    const handelScroll =  _=> window.scrollY > 500 ? settop(true) : settop(false)
    window.addEventListener("scroll" , handelScroll)
    return _=> window.removeEventListener("scroll" , handelScroll)} ,[])
  const handleScroll = ()=> window.scrollTo(0 , 0)

  return (
    <div className='slidenav' style={{display : `${top ? "flex" : "none"}`}}>
      <a style={{display:whats ? "none" : "flex" }} target='_black' href="https://api.whatsapp.com/send?phone=+971561384496&text=Hello%2C%20world!" className='active'> <i  className={`fa-brands fa-whatsapp whatsapp ${top ? "show-btn":""}`}></i></a>
      {share && <a   > <i  className={`fa-solid fa-share-nodes floatIcon `}></i> </a> }
      <a   > <i onClick={handleScroll} className={`fa-solid fa-chevron-up floatIcon ${top ? "show-btn":""}`}></i> </a>
    </div>
  )
}

export default SlideNav