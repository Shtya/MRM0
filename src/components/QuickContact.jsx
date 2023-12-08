import React from 'react'
import Pattern1, { Pattern2, Pattern3, Pattern8 } from './patterns/Pattern1'

const QuickContact = () => {
  return (
    <div className='QuickContact'>
      {/* <Pattern8 /> */}
      <div className="container">
      <div className="h1">contact for your consultation </div>
      <form action="">
        <input type="text" placeholder='Name' />
        <input type="text" placeholder='Phone' />
        <input type="email" placeholder='Email' />
        <input className='bt' type="submit" value="Submit" />
        <i class="bt2 fa-solid fa-paper-plane"></i>
      </form>
      </div>
    </div>
  )
}

export default QuickContact