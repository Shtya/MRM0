import React, { useEffect } from 'react'
import AOS from "aos";
import "aos/dist/aos.css";
import { useLocation } from 'react-router-dom';


const Animation = () => {
  const {pathname} = useLocation() ;
  useEffect(() => {
    AOS.init({
      offset: -100,
      duration: 100,
      easing: 'ease-in-out',
      delay: 100,
      
    });
    AOS.refresh();
  }, [])

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])

  return(

    
    useEffect(_=>{
    const Text = new IntersectionObserver(eles => {
      eles.forEach(ele =>{
        if(ele.isIntersecting){ele.target.classList.add("hidden-acitve")}
        // else ele.target.classList.remove("hidden-acitve")
      })
    })

    const Transform = new IntersectionObserver(eles => {
      eles.forEach(ele =>{
        if(ele.isIntersecting){ele.target.classList.add("show")}
        // else ele.target.classList.remove("show")
      })
    })
    

    const Hidden_img = new IntersectionObserver(eles => {
      eles.forEach(ele =>{
        if(ele.isIntersecting){ele.target.classList.add("show-img")}
        // else ele.target.classList.remove("show")
      })
    })

    document.querySelectorAll(".hidden-img").forEach(e => Hidden_img.observe(e))
    document.querySelectorAll(".hidden-text").forEach(e => Text.observe(e))
    document.querySelectorAll(".hidden").forEach(e => Transform.observe(e))
  },[])
  
  )
}

export default Animation