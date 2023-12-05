import React, { useEffect, useRef, useState } from 'react'
import Logo from "../assets/Logo1.png"
import { Link , Location, useLocation } from 'react-router-dom'
import {motion} from "framer-motion" ;



// const Navbar = () => {
//   const {pathname} = useLocation() ;

//   const [show , setshow] = useState(false)
//   useEffect(_=>{
//     const handleResize =  _=> window.innerWidth > 800 && setshow(false)
//     window.addEventListener("resize" , handleResize)
//     return _=> window.removeEventListener("resize" ,handleResize)
//   },[])

//   const routes = [
//     {Icon:"" ,path:"/" , route:"Home"},
//     {Icon:"" ,path:"/about-us" , route:"About Us"},
//     {Icon:<i className="fa-solid fa-caret-down"></i> ,path:"/landing" , route:"Services" , 
//       nestedRoute:[
//         {N_route:"social media marketing"       , N_path:"/social"},
//         {N_route:"media buying"                 , N_path:"/media"},
//         {N_route:"web design & Development "    , N_path:"/web-design"},
//         {N_route:"SEO "                         , N_path:"/seo"},
//         {N_route:"Branding "                    , N_path:"/branding"},
//         {N_route:"indoor & outdoor signages " , N_path:"/signages"},
//         {N_route:"exhibition display stands"    , N_path:"/exhibition"},
//         {N_route:"photography & videography "   , N_path:"/photography"},
//         {N_route:"cooperated gifts "            , N_path:"/gifts"}]},
//     {Icon:"" ,path:"/portfolio" , route:"Portfolio"},
//     {Icon:"" ,path:"/blog" , route:"Blog"},
//     {Icon:"" ,path:"/contact-us" , route:"Contact Us"},
//   ]

//   const handelRoutes = ()=>{
//     setshow(false)
//   }
//   return (

//       <nav >
//           <div className="Img">
//             <img src={Logo} alt="" />
//           </div>

//           <motion.ul animate="animate" initial="initial" className={show ? "show" :""}>{
//               routes.map((e,index)=> ( 
//               <motion.li  key={index} className={`Li-${e.route} `} onClick={handelRoutes}> 
//                 <Link to={e.path}  className={`${e.path == pathname ? "active" : ""}`} > {e.route} {e.Icon} </Link> 
                
//                 {e.nestedRoute && <ul className='ul-nested'>
//                   {
//                   e.nestedRoute.map((ele , idx)=>(
//                     <Link key={idx} to={ele.N_path} className={`N_link-${idx+1} ${ele.N_path == pathname ? "active" : ""} `}> {ele.N_route} </Link>
//                   ))
//                   }
//             </ul>}


//               </motion.li> ))
//           }

//           <li><i className="fa-solid fa-magnifying-glass"></i>  </li>
//           </motion.ul>

//           <i onClick={_=> setshow(!show)} className="fa-solid fa-bars"></i>
//         </nav>
//   )
// }

const Navbar = ()=>{
  // <i class="fa-solid fa-xmark"></i>
  const [shownav , setshownav] = useState("")
    const routes = [
    {path:"/" , route:"Home"}, {path:"/about-us" , route:"About Us"},

    {Icon:<i class={`fa-solid fa-angle-down`}></i> ,path:"/landing" , route:"Services" , 
      nestedRoute:[
        {N_route:"web design & Development "    , N_path:"/web-design"},
        {N_route:"photography & videography "   , N_path:"/photography"},
        {N_route:"indoor & outdoor signages " , N_path:"/signages"},
        {N_route:"exhibition display stands"    , N_path:"/exhibition"},
        {N_route:"social media marketing"       , N_path:"/social"},
        {N_route:"cooperated gifts "            , N_path:"/gifts"},
        {N_route:"media buying"                 , N_path:"/media"},
        {N_route:"Branding "                    , N_path:"/branding"},
        {N_route:"SEO "                         , N_path:"/seo"},
      ]},
        
        {path:"/portfolio" , route:"Portfolio"},{path:"/blog" , route:"Blog"},{path:"/contact-us" , route:"Contact Us"},
  ]
  return(
    <div className="navbar">
      <Link to="/" className="logo"> <img src={Logo} alt="" /></Link>

      <nav>
        <ul className={`${shownav}`}>
          {routes.map((e,index) => ( 
            <li key={index} className={e.path == "/landing" ? "service" : ""}> 
              
              <Link to={e.path}> {e.route} {e.Icon}
                
                {e.path === "/landing" &&
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