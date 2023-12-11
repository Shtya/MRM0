import {useEffect, useState} from 'react'
import MapImg from "../assets/contact-us/map.jpg"


const Contact2 = () => {
  const [value , setvalue] = useState() ;

  let services = [ "social media marketing" , "media buyin" , "web design & Development" , "SEO" , "Branding" , "indoor and outdoor signages" , "exhibition display stand" , "photography & videography" , "cooperated gifts" ,]
  return (
    <section className='Contact2' id='Contact2'>
      <div className="container">
          <div className="coverImg"> <img src={MapImg} alt="" /> </div>
          <div className="home">
              <div className="box2">
                  <div className="text">
                      <h2 className='h1 clip blur'>Turn your dreams into digital realities. </h2>
                      {/* <p className='h2'> Get in touch with us to start your digital journey.</p> */}
                  </div>
                  <ul className='social'>
                    <li> <a className="Iicon"> <div className="style"><i className="fa-solid fa-phone"></i></div>         </a>    <span className='p'>+971561384496</span></li>
                    <li> <a className="Iicon"> <div className="style"> <i className="fa-solid fa-envelope"></i>    </div> </a>    <span className='p'>info@mrmadvertisingdubai.com</span> </li>
                    <li> <a className="Iicon"> <div className="style"> <i className="fa-solid fa-location-dot"></i></div> </a>    <span className='p'>Business Bay - Dubai</span></li>
                    <hr />
                    <ul className='social last-social'>
                      <li> <a className="Iicon"> <div className="style"> <i className="fa-brands fa-facebook-f"></i>    </div> </a></li>
                      <li> <a className="Iicon"> <div className="style"> <i className="fa-brands fa-instagram"></i></div> </a></li>
                      <li> <a className="Iicon"> <div className="style"><i className="fa-brands fa-whatsapp"></i>        </div> </a></li>
                      <li> <a className="Iicon"> <div className="style"> <i className="fa-brands fa-linkedin-in"></i></div> </a></li>
                    </ul>
                  </ul>
              </div>

              <div className="box">
              <p className='h1 clip'>Reach Out And Let's Talk</p>
              <form action="">
                  <input type="text" name="" placeholder='Your Name' id="" />
                  <input type="Email" name="" placeholder='Email address' id="" />
                  <input type="text" name="" placeholder='Phone' id="" />
                  <select className='input form-select' aria-label=".form-select-lg examplev" value={value} onChange={e=> setvalue(e.target.value)}>
                    <option value="0">Select a service</option>
                    {services.map((e,index)=> <option key={index} value={e} >{e}</option> )}
                  </select>
                  <input placeholder="Write a message" id="" type='text'></input>
                   <button className='bt'>Send a message</button>
              </form>
              </div>
          </div>
          </div>
    </section>
  )
}

export default Contact2