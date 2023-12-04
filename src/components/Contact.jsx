import {useEffect, useState} from 'react'
import ImgContact from "../assets/contact/contact.jpg"
import Animation from './helpers/Animation';
import { Pattern2, Pattern6 } from './patterns/Pattern1';


const Contact = ({title , desc}) => {
  const [value , setvalue] = useState() ;

  let services = [ "social media marketing" , "media buyin" , "web design & Development" , "SEO" , "Branding" , "indoor and outdoor signages" , "exhibition display stand" , "photography & videography" , "cooperated gifts" ,]
  return (
    <section className='Contact' id='Contact'>
      <Animation />
      <Pattern2 />
     <div className="container">  <h2 className='h1'>{title || "We're here to help you."}</h2> </div>
     <div className="container">  <h2 className='h2'>{desc }</h2> </div>
      <div className="container">

      <div className="box box-img hidden-img">
          <img src={ImgContact} alt="" />
        </div>

        <div   className="box" data-aos="fade-left" >
        <p className='h2'>{desc ? "" : "Reach Out and Let's Talk."} </p>
          <form action="">
            <div className="group">
              <input type="text" name="" placeholder='Your Name' id="" />
              <input type="Email" name="" placeholder='Email address' id="" />
            </div>
            <div className="group">
              <input type="text" name="" placeholder='Phone' id="" />

                <select className='input form-select' aria-label=".form-select-lg examplev" value={value} onChange={e=> setvalue(e.target.value)}>
                <option value="0">Select a service</option>
                {services.map((e,index)=> <option key={index} value={e} >{e}</option> )}
                </select>

            </div>
            <textarea placeholder="Write a message" id="" cols="30" rows="10"></textarea>

              <button className='bt'>Send a message</button>
          </form>
        </div>

      </div>
    </section>
  )
}

export default Contact