import React, { useEffect, useState } from 'react'
import {Routes , Route, useLocation} from "react-router-dom"
import "./sass/main.css"
import "./sass/sass-main/second.css" 
import "./blog/sass/blog.css"

import Sitemap from "./Sitemap.xml"
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

import Facebook from './components/Social-media/Facebook'
import Instagram from './components/Social-media/Instagram'
import Snapchat from './components/Social-media/Snapchat'
import Linkedin from './components/Social-media/Linkedin'
import Tiktok from './components/Social-media/Tiktok'
import X from './components/Social-media/X'
import SlideNav from './components/SlideNav'


import BlogDetails from './components/BlogDetails'
import Dashboard from './blog/Dashboard'
import axios from 'axios'
import BlogsAll from './blog/BlogsAll'
import E_post from './blog/E_post'



const App = () => {
  const [Done , setDone] = useState(true)
  const {pathname} = useLocation() ;

  useEffect(_=>{
    if(pathname != "jj") setDone(true)
    setTimeout(() => {
      setDone(false)
    }, 1600);
    
  },[pathname])
  

  return ( 
    <div className='App'>
      <div className="animation_text" style={{display:`${Done ? "" : "none"}` }}>
        <div className="Loading">
        <div class="cube-wrapper">
          <div class="cube-folding">
            <span class="leaf1"></span>
            <span class="leaf2"></span>
            <span class="leaf3"></span>
            <span class="leaf4"></span>
          </div>
          <span class="loading" data-name="Loading">Loading</span>
        </div>

        </div>
      </div>
      <SlideNav whats={false} />
      
      <Routes>
        <Route path="/dashboard" element={<Dashboard />} /> 
        <Route path="/MRM" element={<BlogsAll />} /> 
        <Route path="/edite-blog/:id" element={<E_post />} /> 
        <Route path="/blog/:id" element={<BlogDetails />} />
        <Route path='/blog' element={<Blogs />} /> 

        <Route index element={<Home />} />
        <Route path='/contact-us' element={<ContactUs />} /> 
        <Route path='/sitemap' element={Sitemap} /> 
        <Route path='/about-us' element={<AboutUs />} />
        <Route path='*' element={<Error />} />
        <Route path='/privacy' element={<Privacy />} />
        <Route path='/terms' element={<Terms />} />

        {/* Services Pages */}
        <Route path='/web-design' element={<S_WebDesign/>} />
        <Route path='/photography' element={<S_photography />} />
        {/* <Route path='/social' element={<S_SocialMediaMarketing />} /> */}
        <Route path='/exhibition' element={<S_Exhibition  />} />
        <Route path='/signages' element={<M_Signages />} />
        <Route path='/portfolio' element={<Landing />} />
        <Route path='/media' element={<S_Media />} />
        <Route path='/branding' element={<S_Branding  />} />
        <Route path='/gifts' element={<S_Gifts  />} />
        <Route path='/seo' element={<S_SEO />} />

      {/* Social media Pages */}
        <Route path='/facebook' element={<Facebook />} />
        <Route path='/snapchat' element={<Snapchat />} />
        <Route path='/instagram' element={<Instagram />} />
        <Route path='/x' element={<X />} />
        <Route path='/linkedin' element={<Linkedin />} />
        <Route path='/tiktok' element={<Tiktok />} />


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




