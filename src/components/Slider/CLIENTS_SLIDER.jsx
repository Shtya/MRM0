import React, { useEffect, useState } from 'react'
import {AnimatePresence, motion} from "framer-motion"

const CLIENTS_SLIDER = ({data}) => {
  const ClientsImg = data
  useEffect(_=>{
    const arrows = document.querySelectorAll(".CLIENTS_SLIDER .arrow i")
    const Imgs = document.querySelector(".CLIENTS_SLIDER .slider-wrapper")
    const MaxScrollLeft = Imgs.scrollWidth - (Imgs.clientWidth + 20)
    
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

    // const Interval = setInterval(() => {
    //   arrows[1].click()
    // }, 6000);

    Imgs.addEventListener("scroll" , _=>{
        handleBtns()
        // if(Imgs.scrollLeft >= MaxScrollLeft ) clearInterval(Interval)
      })
      
  } ,[])

  return (
<div className="CLIENTS_SLIDER">
        <div className="container">
          <motion.div exit={{opacity:0}} transition={{duration:1 , type:"spring"}} className="slider-wrapper">
            <AnimatePresence>
            <div className="coverImg"> {ClientsImg?.slice(0 , 2).map((e,index) => ( <img key={index} src={e} alt="" /> ))}</div>
            <div className="coverImg"> {ClientsImg?.slice(2 , 5).map((e,index) => ( <img key={index} src={e} alt="" /> ))}</div>
            <div className="coverImg"> {ClientsImg?.slice(5 , 9).map((e,index) => ( <img key={index} src={e} alt="" /> ))}</div>
            <div className="coverImg"> {ClientsImg?.slice(9 , 13).map((e,index) => ( <img key={index} src={e} alt="" /> ))}</div>
            <div className="coverImg"> {ClientsImg?.slice(13 , 16).map((e,index) => ( <img key={index} src={e} alt="" /> ))}</div>
            <div className="coverImg"> {ClientsImg?.slice(16 , 18).map((e,index) => ( <img key={index} src={e} alt="" /> ))}</div>
            <div className="coverImg"> {ClientsImg?.slice(19 , 21).map((e,index) => ( <img key={index} src={e} alt="" /> ))}</div>
            <div className="coverImg"> {ClientsImg?.slice(21 , 24).map((e,index) => ( <img key={index} src={e} alt="" /> ))}</div>
            <div className="coverImg"> {ClientsImg?.slice(24 , 28).map((e,index) => ( <img key={index} src={e} alt="" /> ))}</div>
            <div className="coverImg"> {ClientsImg?.slice(28 , 32).map((e,index) => ( <img key={index} src={e} alt="" /> ))}</div>
        
              
            </AnimatePresence>
          </motion.div>
          <div className="arrow">
            <i className="fa-solid fa-arrow-left" id='prev-slide'></i>
            <i className="fa-solid fa-arrow-right" id='next-slide'></i>
          </div>
        </div>
  </div>
  )
}

export default CLIENTS_SLIDER