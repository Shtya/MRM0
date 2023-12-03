import React, { useEffect, useState } from 'react'
import Img1 from "../assets/sidenav/1.png"
import Img2 from "../assets/sidenav/2.png"
import Img3 from "../assets/sidenav/3.png"
import Img4 from "../assets/sidenav/4.png"
import Img5 from "../assets/sidenav/5.png"
import Img6 from "../assets/sidenav/6.png"
import Img7 from "../assets/sidenav/7.png"
import Img8 from "../assets/sidenav/8.png"
const SlideNav = () => {
// active when get section 

  // UP
  const [top , settop] = useState(false)
  useEffect(_=>{
    const handelScroll =  _=> window.scrollY > 800 ? settop(true) : settop(false)
    window.addEventListener("scroll" , handelScroll)
    return _=> window.removeEventListener("scroll" , handelScroll)} ,[])
  const handleScroll = ()=> window.scrollTo(0 , 0)


  const routes = [
    {name:"Landing" ,icon:<i className="fa-solid fa-house"></i>, hash:"#home"},
    {name:"Who" ,icon:<i className="fa-solid fa-circle-question"></i>, hash:"#Who"},
    {name:"Services" ,icon:<i className="fa-solid fa-briefcase"></i>, hash:"#Services"},
    {name:"Portfolio" ,icon:<i className="fa-solid fa-panorama"></i> , hash:"#Portfolio"},
    {name:"Clients" ,icon:<i className="fa-solid fa-users-gear"></i> , hash:"#Clients"},
    {name:"Contact" ,icon:<i className="fa-solid fa-envelope"></i> , hash:"#Contact"},
    {name:"Blog" ,icon:<i className="fa-solid fa-blog"></i> , hash:"#Blog"},
  ]
  return (
    <div className='slidenav' style={{display : `${top ? "flex" : "none"}`}}>
      {/* {
        routes.map((e,index)=> (
          <a key={index} href={e.hash} className="coverImg">  {e.icon} <h2> {e.name}</h2> </a>
        )) } */}
      <a target='_black' href="https://api.whatsapp.com/send?phone=+201062134055&text=Hello%2C%20world!" className='active'> <i  className={`fa-brands fa-whatsapp whatsapp ${top ? "show-btn":""}`}></i></a>
      <a   > <i onClick={handleScroll} className={`fa-solid fa-chevron-up floatIcon ${top ? "show-btn":""}`}></i> </a>
    </div>
  )
}

export default SlideNav