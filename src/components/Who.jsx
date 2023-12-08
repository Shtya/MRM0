import React , {useEffect} from 'react'
import About_us from "../assets/about-us/aboutus.png"
import Animation  from './helpers/Animation'
import Pattern1, { Pattern2 } from './patterns/Pattern1'

const Who = () => {
  
  
  return(
    <section className="Who " id='who' >
      <Animation />
      <Pattern1 />
      <div className="container">

      <div className="Img hidden-img " >
        <img src={About_us} alt="" />
      </div>

      <div className="box"  >
        <h2 className='h2 clip hidden-text  '>Your Partner for Advertising & Digital Marketing Success in Dubai</h2>
        <span className='p hidden-text' >We are a Dubai-based agency specialized in advertising, and digital marketing with years of experience. Our team delivers the highest level of service, combining creativity and strategic thinking for effective campaigns. Our values are dedication, excellence, and transparency. </span>
        <div className="info">
            <div className="box-child"  >
              <h3 className='h2 clip hidden-text'><i className="fa-solid fa-check"></i>Our mission</h3>
              <span className='p hidden-text'>Our goal is to enable businesses and brands to succeed in marketing and digital solutions, using our expertise in advertising, branding, and innovative strategies to deliver outstanding results.</span>
            </div>
            <div className="box-child"  >
              <h3 className='h2 clip hidden-text'><i className="fa-solid fa-check"></i>Our vision</h3>
              <span className='p hidden-text'>We aim to be a leading figure in the industry, dedicated to elevating work to the highest standards. Our goal is to inspire creativity and achieve remarkable results through innovative ideas.</span>
            </div>
        </div>

        <button className='bt hidden-text'>Find out more </button>



      </div>

      </div>
    </section>
  )
}

export default Who