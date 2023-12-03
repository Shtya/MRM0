import clients19 from "../../assets/png/  (1).png" ;
import clients20 from "../../assets/png/  (2).png" ;
import clients22 from "../../assets/png/  (3).png" ;
import clients23 from "../../assets/png/  (4).png" ;
import clients24 from "../../assets/png/  (5).png" ;
import clients25 from "../../assets/png/  (6).png" ;
import clients26 from "../../assets/png/  (7).png" ;
import clients27 from "../../assets/png/  (8).png" ;
import clients28 from "../../assets/png/  (9).png" ;
import clients29 from "../../assets/png/  (10).png" ;
import clients30 from "../../assets/png/  (11).png" ;
import clients31 from "../../assets/png/  (12).png" ;
import clients32 from "../../assets/png/  (13).png" ;
import clients33 from "../../assets/png/  (14).png" ;
import clients34 from "../../assets/png/  (15).png" ;
import clients35 from "../../assets/png/  (16).png" ;
import clients36 from "../../assets/png/  (17).png" ;
import clients38 from "../../assets/png/  (19).png" ;
import clients39 from "../../assets/png/  (20).png" ;

import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'

const spanStyle = {
  padding: '20px',
  background: '#efefef',
  color: '#000000'
}

const divStyle = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  backgroundSize: 'cover',
  height: '400px'
}

const slideImages = [
  {url:clients19 , caption:""},
  {url:clients20 , caption:""},
  {url:clients22 , caption:""},
  {url:clients23 , caption:""},
  {url:clients24 , caption:""},
  {url:clients25 , caption:""},
  {url:clients26 , caption:""},
  {url:clients27 , caption:""},
  {url:clients28 , caption:""},
  {url:clients29 , caption:""},
  {url:clients30 , caption:""},
  {url:clients31 , caption:""},
  {url:clients32 , caption:""},
  {url:clients33 , caption:""},
  {url:clients34 , caption:""},
  {url:clients35 , caption:""},
  {url:clients36 , caption:""},
  {url:clients38 , caption:""},
  {url:clients39 , caption:""},
];

const GallerySlider = () => {
    return (
      <div className="slide-container">
        <Slide>
         {slideImages.map((e, index)=> (
            <div key={index}>
              <div style={{ ...divStyle}}>
                <img src={e.url} alt="" />
                <span style={spanStyle}>{e.caption}</span>
              </div>
            </div>
          ))} 
        </Slide>
      </div>
    )
}

export default GallerySlider ;