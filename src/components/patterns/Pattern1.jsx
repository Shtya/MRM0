import React from 'react'
import "./patternScss/pattern.css"


export const Pattern1 = () => {
  return (
    <div className='pattern1'>
      <ul class="screens">
        <li class="screen screen0" id="[&quot;screen0&quot;]"><a class="back-arrow" href="#screen-1">
            <svg xmlns="http://www.w3.org/2000/svg" viewbox="0 0 50 50"><path d="M25,28.207l-5.354-5.354c-0.195-0.195-0.195-0.512,0-0.707s0.512-0.195,0.707,0L25,26.793l4.646-4.646 		c0.195-0.195,0.512-0.195,0.707,0s0.195,0.512,0,0.707L25,28.207z"/></svg></a><a class="next-arrow" href="#screen1">
            <svg xmlns="http://www.w3.org/2000/svg" viewbox="0 0 50 50"><path d="M25,28.207l-5.354-5.354c-0.195-0.195-0.195-0.512,0-0.707s0.512-0.195,0.707,0L25,26.793l4.646-4.646 		c0.195-0.195,0.512-0.195,0.707,0s0.195,0.512,0,0.707L25,28.207z"/>          </svg></a></li>
        </ul>
    </div>
  )
}
export const Divider = ({classn}) => {
  return(
    <div className={`${classn}`}> <span className='separator'> <h4/>  <h4/>  <h4/>  </span> <div className="other"><h4/>  <h4/>  <h4/> </div></div>
  )
}

export const Pattern2 = () => {
  return (
    <div className='pattern1'>
<ul class="screens">
  
  <li class="screen screen2" >
      <svg xmlns="http://www.w3.org/2000/svg" viewbox="0 0 50 50"><path d="M25,28.207l-5.354-5.354c-0.195-0.195-0.195-0.512,0-0.707s0.512-0.195,0.707,0L25,26.793l4.646-4.646 		c0.195-0.195,0.512-0.195,0.707,0s0.195,0.512,0,0.707L25,28.207z"/></svg>
      <svg xmlns="http://www.w3.org/2000/svg" viewbox="0 0 50 50"><path d="M25,28.207l-5.354-5.354c-0.195-0.195-0.195-0.512,0-0.707s0.512-0.195,0.707,0L25,26.793l4.646-4.646 		c0.195-0.195,0.512-0.195,0.707,0s0.195,0.512,0,0.707L25,28.207z"/></svg>
      </li>
  </ul>
    </div>
  )
}

export const Pattern3 = () => {
  return (
    <div className='pattern1'>
<ul class="screens">
  <li class="screen screen3" id="[&quot;screen3&quot;]">
      {/* <svg xmlns="http://www.w3.org/2000/svg" viewbox="0 0 50 50"><path d="M25,28.207l-5.354-5.354c-0.195-0.195-0.195-0.512,0-0.707s0.512-0.195,0.707,0L25,26.793l4.646-4.646 		c0.195-0.195,0.512-0.195,0.707,0s0.195,0.512,0,0.707L25,28.207z"/></svg></a><a class="next-arrow" href="#screen4"> */}
      
  </li>

</ul>
</div>
  )
}

export const Pattern4 = () => {
  return (
    <div className='pattern1'>
      <div className="separator">  <h4/>  <h4/>  <h4/> </div>
      <ul class="screens">
        <li class="screen screen2" id="[&quot;screen3&quot;]">3<a class="back-arrow" href="#screen2">
            <svg xmlns="http://www.w3.org/2000/svg" viewbox="0 0 50 50"><path d="M25,28.207l-5.354-5.354c-0.195-0.195-0.195-0.512,0-0.707s0.512-0.195,0.707,0L25,26.793l4.646-4.646 		c0.195-0.195,0.512-0.195,0.707,0s0.195,0.512,0,0.707L25,28.207z"/></svg></a><a class="next-arrow" href="#screen4">
            <svg xmlns="http://www.w3.org/2000/svg" viewbox="0 0 50 50"><path d="M25,28.207l-5.354-5.354c-0.195-0.195-0.195-0.512,0-0.707s0.512-0.195,0.707,0L25,26.793l4.646-4.646 		c0.195-0.195,0.512-0.195,0.707,0s0.195,0.512,0,0.707L25,28.207z"/>          </svg></a></li>
      </ul>
    </div>
  )
}

export const Pattern5 = ()=>{
  return (
    <div className="circle1">
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
    </div>
  )
}

export const Pattern8 = ()=>{
return (
  <div className="Pattern8">
  <div class="area" >
            <ul class="circles">
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
            </ul>
              
            </div >
            </div>
)
}
export const Pattern6 = ()=>{
return (
  <div className="Pattern6">
    <div className="line"> <span/> <span/> <span/> <span/><span/><span/><span/><span/> </div>
  </div>
)
}

export const Pattern7 = ()=>{
  return(
    <div className="pattern7">
      <svg class="editorial" href="http://www.w3.org/1999/xlink" viewBox="0 24 150 28 " preserveAspectRatio="none">
    <defs>
      <path id="gentle-wave" d="M-160 44c30 0 
      58-18 88-18s
      58 18 88 18 
      58-18 88-18 
      58 18 88 18
      v44h-352z" />
    </defs>
    <g class="parallax1">
      <use href="#gentle-wave" x="50" y="3" fill="#333" />
    </g>
    <g class="parallax2">
      <use href="#gentle-wave" x="50" y="0" fill="#222" />
    </g>
    <g class="parallax3">
      <use href="#gentle-wave" x="50" y="9" fill="#111" />
    </g>
    <g class="parallax4">
      <use href="#gentle-wave" x="50" y="6" fill="#181818" />
    </g>
  </svg>
</div>
  )
}
export default Pattern1