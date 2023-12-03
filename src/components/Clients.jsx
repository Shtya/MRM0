import Slider_3_Img from "./Slide/Slider_3_Img"
import { ImgsClients } from "./Images";
import { useEffect, useState } from "react";


var settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 7,
  slidesToScroll: 1 , 
  // autoplay:true ,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 6,
        slidesToScroll: 1,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 900,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 2,
        initialSlide: 1 ,
        dots: false,
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1 ,
        dots: false,
      }
    },
    {
      breakpoint: 400,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1 ,
        dots: false,
      }
    }
  ]
};



const Clients = () => {
  const ClientsImg = ImgsClients() ;
  const [data , setdata] = useState(ClientsImg)


    return (
    <section className='Clients' id='Clients'>
      <div className="container">
      <div className="h1">OUR CLIENTS</div>
      </div>
      <Slider_3_Img data={data} settings={settings} />

    </section>
  )
}

export default Clients