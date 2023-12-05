import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import Animation from './helpers/Animation'

const Intro = ({children , classn , ImgIntro , ImgSection , main_title , second_title , desc , li}) => {
  return (
    <div className={classn}>
      <Animation />
      <div className="container"> <Navbar /> </div>

      <div className="coverIntro"> <img src={ImgIntro} alt="" /></div>

      <div className="home">
          <div className="container">
              <div className="boxImg hidden-img " data-aos="fade-rigth" >  <img src={ImgSection} alt="" /> </div>
              <div className="boxs " data-aos="fade-rigth" >
                  <h2 className='h1 hidden-text'> {main_title} </h2>
                  <p className='h2 hidden-text'>{second_title}</p>
                  <ul className="inner-boxs"  >
                    {
                      li && <div className="box" data-aos="fade-rigth">
                        <li className='p hidden-text'> {li[0]} </li>
                        <li className='p hidden-text'> {li[1]} </li>
                        <li className='p hidden-text'> {li[2]} </li>
                        <li className='p hidden-text'> {li[3]} </li>
                      </div>
                    }
                    <div className="box " data-aos="fade-left">
                      {li?.length > 4 &&<li className='p hidden-text'> {li[4]} </li>}
                      {li?.length > 5 &&<li className='p hidden-text'> {li[5]} </li>}
                      {li?.length > 6 &&<li className='p hidden-text'> {li[6]} </li>}
                      {li?.length > 7 &&<li className='p hidden-text'> {li[7]} </li>}
                    </div>
            </ul>
            </div>
        </div>
      </div>
      {children}
      <Footer />
      </div>
  )
}

export default Intro