import React, { useEffect, useState } from 'react'
import {Routes , Route, useLocation} from "react-router-dom"
import "./sass/main.css"
import "./sass/sass-main/second.css" 
import Loading1 from "../src/assets/loading1.svg"

import Home from './pages/Home'
import AboutUs from './pages/AboutUs'
import ContactUs from './pages/ContactUs'
import Blogs from './pages/Blogs'
import Landing from './pages/Landing'
import Error from './pages/Error'
import Privacy from './pages/Privacy'
import Terms from './pages/Terms'
import S_SEO from './pages/S_SEO'
import S_WebDesign from './pages/S_WebDesign'
import S_Media from './pages/S_Media'
import M_Signages from './pages/M_Signages'
import S_Branding from './pages/S_Branding'
import S_Gifts from './pages/S_Gifts'
import S_Exhibition from './pages/S_Exhibition'
import S_photography from './pages/S_photography';
import { AnimatePresence } from 'framer-motion'
import Pattern1 from './components/patterns/Pattern1'
import Facebook from './components/Social-media/Facebook'

const App = () => {
  const [Done , setDone] = useState(true)
  const {pathname} = useLocation() ;

  const Divvariant = {
    hidden:{opacity:0 },
    visible:{
      opacity:1,
      transition : {duration : 1 ,staggerChildren : 0.2},
      y:5
    },
  }
  const Pvariant = {
    hidden:{opacity:0, y:100 },
    visible:{
      opacity:1, y:10
    },
  }
  const text = "WELCOME TO MRM" ;

  useEffect(_=>{
    if(pathname != "jj") setDone(true)
    setTimeout(() => {
      setDone(false)
    }, 3500);
    
  },[pathname])
  

  return ( 
    <div className='App'>
       <div className="animation_text" style={{display:`${Done ? "" : "none"}` }}>
        <Pattern1 />
        
        <img src={Loading1} alt="" />
        <svg viewBox="0 0 400 400" >
            <text  x="30%" y="50%" fill="transparent" textAnchor="middel"  > WELCOME TO MRM</text>
        </svg>

{/* 
    <motion.p  className="typing"onAnimationComplete={_=> setDone(false)} variants={Divvariant} initial="hidden" whileInView="visible" >{
      text.split("").map((e,index)=>(<motion.span variants={Pvariant}   key={index}>{e}</motion.span>))
    } </motion.p> */}

  </div>
      <Routes>
        <Route index element={<Home />} />
        <Route path='/contact-us' element={<ContactUs />} /> 
        <Route path='/about-us' element={<AboutUs />} />
        <Route path='/blog' element={<Blogs />} /> 
        <Route path='/landing' element={<Landing />} />
        <Route path='*' element={<Error />} />
        <Route path='/privacy' element={<Privacy />} />
        <Route path='/terms' element={<Terms />} />

        {/* Services Pages */}
        <Route path='/web-design' element={<S_WebDesign/>} />
        <Route path='/photography' element={<S_photography />} />
        <Route path='/social' element={<S_photography />} />
        <Route path='/signages' element={<M_Signages />} />
        <Route path='/exhibition' element={<S_Exhibition  />} />
        <Route path='/media' element={<S_Media />} />
        <Route path='/branding' element={<S_Branding  />} />
        <Route path='/gifts' element={<S_Gifts  />} />
        <Route path='/seo' element={<S_SEO />} />

      {/* Social media Pages */}
        <Route path='/facebook' element={<Facebook />} />

      </Routes>
      {/* </AnimatePresence> */}
    </div>

  )
}

export default App



    //   <AnimatePresence mode="wait">
    //     <Routes location={location} key={location.pathname} >
    //       <Route path="/motion"  element={<Motion />} />
    //       <Route path="/sec2"  element={<Sec2 />} />
    //       <Route path="/sec3"  element={<Sec3 />} />
    //       <Route path="/sec4"  element={<Sec4 />} />
    //     </Routes>
    //   </AnimatePresence> 


    //   {/*  1. Scroll  */}
    //   <motion.div className="progress-bar" style={{ scaleX: scrollYProgress}} />
    //   <Lesson1 />
    //   {/* <Lesson2 /> */}




