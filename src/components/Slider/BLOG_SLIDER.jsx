import React, { useEffect, useState } from 'react'
import {AnimatePresence, motion} from "framer-motion"

const BLOG_SLIDER = ({data}) => {
  const halfOfArray = Array(Math.floor(data?.length / 2) ).fill(10)
  
  useEffect(_=>{
    const arrows = document.querySelectorAll(".BLOG_SLIDER .arrow i")
    const Imgs = document.querySelector(".BLOG_SLIDER .slider-wrapper")
    const MaxScrollLeft = Imgs.scrollWidth - (Imgs.clientWidth + 50)
    

    arrows.forEach(btn =>{
      btn.addEventListener("click" , _=> {
        const direction = btn.id === "prev-slide" ? -1 : 1
        const scrollAmount =  Imgs.clientWidth * direction ;
        Imgs.scrollBy({left:scrollAmount , behavior:"smooth"})
      })
    })
    
    const handleBtns = ()=>{
      arrows[0].style.display = Imgs.scrollLeft <= 0 ? "none"  : "flex"
      arrows[1].style.display = Imgs.scrollLeft >= MaxScrollLeft ? "none"  : "flex"
    }

    const Interval = setInterval(() => {
      arrows[1].click()
    }, 6000);

    Imgs.addEventListener("scroll" , _=>{
        handleBtns()
        if(Imgs.scrollLeft >= MaxScrollLeft ) clearInterval(Interval)
      })
      
  } ,[])

  return (
<div className="BLOG_SLIDER">
<div className="container-slider">
          <motion.div exit={{opacity:0}} transition={{duration:1 , type:"spring"}} className="slider-wrapper">
            <AnimatePresence>{
              data.map((e,index)=> (
                  <motion.div  exit={{opacity:0 , y:-100}}  transition={{duration:1 , type:"spring"}} key={index} className="coverImg">
                      <img src={e.img} alt=""  />
                      <div className="date">Thursday, November 9, 2023</div>
                      <p className='p'>{e.desc}</p>
                  </motion.div>
              ))
              }</AnimatePresence>
          </motion.div>
          <div className="arrow">
            <i className="fa-solid fa-arrow-left" id='prev-slide'></i>
            <i className="fa-solid fa-arrow-right" id='next-slide'></i>
          </div>
        </div>
      </div>
  )
}

export default BLOG_SLIDER