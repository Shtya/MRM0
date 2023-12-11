import React, { useState , useEffect } from 'react'
import Animation from './helpers/Animation'
import Pattern1, {Pattern2, Pattern3, Pattern4, Pattern5} from './patterns/Pattern1'

import WhyImg from "../assets/Why.jpg"


const Why = () => {


  const [index , setindex] = useState(0)
  const [Class , setClass] = useState("null")

  const choose = [
    {idx:"0", animate:"fade-up" , icon : 'fas fa-pencil-ruler font-icon' , title : "We're problem solvers"  , desc:"We conquer all challenges with creativity, determination, and a 'can-do' attitude. We have solutions to your problems. "} ,
    {idx:"1", animate:"fade-up" , icon : 'fas fa-drafting-compass font-icon' , title : "We deliver results, not just talk"  , desc:"Our commitment is to implement effective strategies, never overpromise, work hard, and measure success by our achievements. "} ,
    {idx:"2", animate:"fade-up" , icon : 'fas fa-layer-group font-icon' , title : "We prioritize you"  , desc:"Your success drives us. We're always available to meet your needs, offer guidance, and listen closely to your input.  "} ,
    {idx:"3", animate:"fade-up" , icon : 'fas fa-rocket font-icon' , title : "We focus on your growth"  , desc:" Our solutions are always advanced, results-driven, and up-to-date with the latest technologies and trends. "} ,
    // {idx:"4", icon : 'fas fa-gavel font-icon' , title : "We Are Professionals Who Get Results."  , desc:" We strive for excellence through professionalism. Innovation, technology, content, and creative problem-solving help us maintain the highest standards."} ,
  ]
  
  return (

    <section id='Why' className='Why'>
      <Animation />
      <Pattern3 />
      <div className="container1">
        <div className="h1 clip hidden-text" >WHY CHOOSE US</div>
      </div>
      <div className="container">
              <div className="boxs"  >
                  {choose.map((e,idx)=> (
                    <div className="box" data-aos="fade-right" key={idx} >
                      <div className="group" >
                          <i  className={`${e.icon} hidden-img`}></i>
                          <h3 className='h2 hidden-text' > {e.title}  </h3>
                      </div>
                      <span className={` p hidden-text`}>{e.desc}</span>
                    </div>
                  ))}
              </div>

            <div className="Img hidden-img"  >
              <img src={WhyImg} alt="" />
            </div>
      </div>
    </section>
  )
}

export default Why