import React from 'react'

const Hidline = ({name}) => {
  return (
    <div className="hidline">
    <h2 className='clip'> <h3>{name} </h3> </h2>
    
      <svg  width="302" height="25" viewBox="0 0 302 25" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M302 12.5C295.107 12.5 289.5 18.1072 289.5 25C289.5 18.1072 283.893 12.5 277 12.5C283.893 12.5 289.5 6.89279 289.5 0C289.5 6.89279 295.08 12.5 302 12.5Z" fill="#BF9D50"></path>
        <path d="M25 12.5C18.1072 12.5 12.5 18.1072 12.5 25C12.5 18.1072 6.89277 12.5 0 12.5C6.89277 12.5 12.5 6.89279 12.5 0C12.5 6.89279 18.0799 12.5 25 12.5Z" fill="#BF9D50"></path>
        <path d="M21 12H281V13H21V12Z" fill="#BF9D50"></path>
      </svg>
    </div>
  )
}

export default Hidline