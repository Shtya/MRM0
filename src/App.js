import React, { useEffect, useState } from 'react'
import {Routes , Route} from "react-router-dom"
import "./sass/main.css"
import "./sass/sass-main/second.css" 


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

const App = () => {
  
  return (
    <div className='App'>
      <Routes>
        <Route index element={<Home />} />
        <Route path='/contact-us' element={<ContactUs />} /> 
        <Route path='/about-us' element={<AboutUs />} />
        <Route path='/blog' element={<Blogs />} /> 
        <Route path='/landing' element={<Landing />} />

        <Route path='*' element={<Error />} />
        <Route path='/privacy' element={<Privacy />} />
        <Route path='/terms' element={<Terms />} />

        {/* secondary Pages */}
        <Route path='/social' element={<S_photography />} />
        <Route path='/web-design' element={<S_WebDesign/>} />
        <Route path='/branding' element={<S_Branding  />} />
        <Route path='/exhibition' element={<S_Exhibition  />} />
        <Route path='/gifts' element={<S_Gifts  />} />

        <Route path='/media' element={<S_Media />} />
        <Route path='/seo' element={<S_SEO />} />
        <Route path='/signages' element={<M_Signages />} />

        <Route path='/photography' element={<S_photography />} />
      </Routes>
      
    </div>
  )
}

export default App