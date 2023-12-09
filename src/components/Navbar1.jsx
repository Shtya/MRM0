import React, { useEffect, useRef, useState } from 'react'
import Logo from "../assets/Logo1.png"
import { Link , Location, useLocation } from 'react-router-dom'
import {motion} from "framer-motion" ;



const Navbar = ()=>{
  // <i class="fa-solid fa-xmark"></i>
  const [shownav , setshownav] = useState("")
    const routes = [
    {path:"/" , route:"Home"}, {path:"/about-us" , route:"About Us"},

    {Icon:<i class={`fa-solid fa-angle-down`}></i> ,path1:"/landing" , route:"Services" , 
      nestedRoute:[
        {N_route:"web design & Development "    , N_path:"/web-design"},
        {N_route:"photography & videography "   , N_path:"/photography"},
        {N_route:"indoor & outdoor signages "  , N_path:"/signages"},
        {N_route:"exhibition display stands"    , N_path:"/exhibition"},
        {N_route:"social media marketing"       , N_path:"/social"},
        {N_route:"cooperated gifts"            , N_path:"/gifts"},
        {N_route:"media buying"                 , N_path:"/media"},
        {N_route:"Branding "                    , N_path:"/branding"},
        {N_route:"SEO "                         , N_path:"/seo"},
      ]},
        
        {path:"/portfolio" , route:"Portfolio"},{path:"/blog" , route:"Blog"},{path:"/contact-us" , route:"Contact Us"},
  ]

  return(
    <div className="navbar"> <Link to="/" className="logo"> <img src={Logo} alt="" /></Link> <nav> <ul className={`${shownav}`}> {routes.map((e,index) => ( 

            <li key={index} className={e.path1 == "/landing" ? "service" : ""}> 
              
              <Link  to={e.path}> {e.route} {e.Icon}
                
                {e.path1 === "/landing" &&
                  <ul className='ul-services'>
                    {e.nestedRoute.map((ele , idx) => (
                      <li> <Link to={ele.N_path}> {ele.N_route} </Link> </li>
                    ))}
                  </ul>
                  }
              </Link> 

            </li> 
          ))}
        </ul>
      </nav>
      <i  className={`fa-solid ${shownav == "active_nav" ? "fa-xmark" :"fa-bars"} close`} onClick={_=> setshownav(pre=> pre == "active_nav" ?"" : "active_nav")}></i>
    </div>
  )
}
export default Navbar