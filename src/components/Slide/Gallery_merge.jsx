
import {ImgsSignages ,ImgsStands ,ImgsAll  ,Imgsdisplay  ,ImgsDesign   ,ImgsBranding} from "../ImgGallery"

import React, { useEffect, useState } from 'react'
import {AnimatePresence, motion} from "framer-motion"

const Gallery_merge = () => {
  // useEffect(_=>{
  //   const arrows = document.querySelectorAll(".CLIENTS_SLIDER .arrow i")
  //   const Imgs = document.querySelector(".CLIENTS_SLIDER .slider-wrapper")
  //   const MaxScrollLeft = Imgs.scrollWidth - (Imgs.clientWidth + 20)
    
  //   arrows.forEach(btn =>{
  //     btn.addEventListener("click" , _=> {
  //       const direction = btn.id === "prev-slide" ? -1 : 1
  //       const scrollAmount =  Imgs.clientWidth * direction ;
  //       Imgs.scrollBy({left:scrollAmount , behavior:"smooth"})
  //     })
  //   })
    
  //   const handleBtns = ()=>{
  //     arrows[0].style.display = Imgs.scrollLeft <= 0 ? "none"  : "flex"
  //     arrows[1].style.display = Imgs.scrollLeft >= MaxScrollLeft ? "none"  : "flex"
  //   }

  //   // const Interval = setInterval(() => {
  //   //   arrows[1].click()
  //   // }, 6000);

  //   Imgs.addEventListener("scroll" , _=>{
  //       handleBtns()
  //       // if(Imgs.scrollLeft >= MaxScrollLeft ) clearInterval(Interval)
  //     })
      
  // } ,[])
  const headers = [ "all" , "Signages", "Display Stands", "Exhibition Stand", "branding", "photography", "Web design",]
  const [data , setdata ] =useState(ImgsAll)

  const handleHeader = (e)=>{
    if(e == headers[0] )  setdata(ImgsAll) ;
    if(e == headers[1] )  setdata(ImgsSignages) ;
    if(e == headers[2] )  setdata(Imgsdisplay) ;
    if(e == headers[3] )  setdata(ImgsStands) ;
    if(e == headers[4] )  setdata(ImgsBranding) ;
    if(e == headers[5] )  setdata(ImgsSignages) ;
    if(e == headers[6] )  setdata(ImgsDesign) ;
  }
  
  return (
    <div className='Gallery_merge'>
      <div className="header1">{
          headers.map((e,index)=> (
          <li className="" key={index} onClick={_=> handleHeader(e)}  > {e} </li>
        ))}</div>

      <div  className="container">
      {data?.map((e,index)=> ( <div  className={`coverImg img-${index+1}`} key={index}> <img  src={e} alt="" /> </div> ))}
      </div>

{/* 
      <div className="CLIENTS_SLIDER">
        <div className="container">
          <div  className="slider-wrapper">
              {Imgs.map((e,index)=> ( <div className={`coverImg img-${index+1}`} key={index}> <img src={e} alt="" /> </div> ))}
          </div>

          <div className="arrow">
            <i className="fa-solid fa-arrow-left" id='prev-slide'></i>
            <i className="fa-solid fa-arrow-right" id='next-slide'></i>
          </div>

        </div>
  </div> */}
    </div>
  )
}

export default Gallery_merge