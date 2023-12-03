import React from 'react'
import img1 from "../assets/about-us/about-us.jpg"
import img2 from "../assets/about-us/contact.jpg"
import img3 from "../assets/about-us/vision.jpg"
import img4 from "../assets/about-us/mission.jpg"


import { Swiper , SwiperSlide } from "swiper/react" ;
import 'swiper/css' ;
import 'swiper/css/effect-coverflow' ;
import 'swiper/css/pagination' ;
import 'swiper/css/navigation' ;
import { EffectCoverflow , Pagination, Navigation } from 'swiper/modules' ;



const SliderSwiper = () => {
  return (
      <Swiper slidesPerView={"auto"} coverflowEffect={{rotate:0 , stretch:0 , depth : 100 , modifier: 2.5} }
        effect={"coverflow"} grabCursor={true} centeredSlides={true} loop={true}
        pagination={{el:'.swiper-pagination' , clickable:true}}
        modules={[EffectCoverflow , Pagination , Navigation]}
        navigation={{nextEl:".swiper-next" , prevEl:".swiper-prev" , clickable:true}}
        className='swiper-container' 
      >
        <SwiperSlide className='swiper-img' > <img src={img1} alt="" /> </SwiperSlide>
        <SwiperSlide className='swiper-img'> <img src={img2} alt="" /> </SwiperSlide>
        <SwiperSlide className='swiper-img'> <img src={img3} alt="" /> </SwiperSlide>
        <SwiperSlide className='swiper-img'> <img src={img4} alt="" /> </SwiperSlide>
        <div className="swiper-next">next</div>
        <div className="swiper-prev">prev</div>
        <div className="swiper-pagination"></div>
      </Swiper>
  )
}

export default SliderSwiper