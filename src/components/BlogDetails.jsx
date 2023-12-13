import React, { useEffect, useState } from 'react'
import {DocsBlogs, blogs} from "./docs_blogs"
import { useLocation, useNavigate, useParams } from 'react-router-dom'
import Animation from './helpers/Animation';
import Footer from './Footer';
import Navbar1 from './Navbar';
import SlideNav from './SlideNav';
import Related from './Slide/Related';
import baseURL, { baseImg } from '../API/API';


const BlogDetails = () => {
  const [data , setdata] = useState([])
  const [titleCustom , settitleCustom] = useState()
  
  const {pathname} = useLocation()
  let {id} = useParams() ;
  useEffect(_=>{baseURL.get(id).then(e=>{
    setdata(e.data.data)
        e.data?.data?.title?.length >= 110 ? settitleCustom(e.data?.data?.title.slice(0,110) + "..."): settitleCustom(e.data?.data?.title)
        })} ,[] )

  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1 , 
    autoplay:true ,
    responsive: [
      {
        breakpoint: 1100,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 1,
          dots: true,
        }
      },
      {
        breakpoint: 680,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1 ,
        }
      }
    ]
  };


  return (
    <div className='blog-details'>
      <div className="container container3"> <Navbar1 /> </div>
      <Animation />
      <SlideNav share={true} whats={true} />
      <div className="coverIntro "> </div>

      <div className="home">
          <div className="container">
              <div className="boxImg hidden-img"  >  <img src={baseImg + data?.thumbnail} alt="" /> </div>
              <div className="boxs" data-aos="fade-left" >
              <p  className="h2 hidden-text" > <span>{titleCustom}</span> </p>
            </div>
        </div>
      </div>

      <div className={`blog-detail blog-detail-${data?.num}`}>
        <div className="container">
          <div dangerouslySetInnerHTML={{ __html: data?.description }} />
        </div>
      </div>
      
      <div className="interactive">
        <div className="container">
        <div className="reacted">
            <span className='icons'><i class="fa-solid fa-thumbs-up"></i></span>
            <span> 
              <input type="text" placeholder='Leave a reply' />  
              <i class="bt2 fa-solid fa-paper-plane"></i>
            </span>
            <span className='icons'><i class="fa-brands fa-linkedin"></i> </span>
            <span className='icons'><i class="fa-brands fa-x-twitter"></i> </span>
            <span className='icons'><i class="fa-brands fa-facebook-f"></i> </span>
          </div>
        </div>
      </div>

      <div className="related">
        <div className="h1">Dive Into More Articles on This Topic</div>
        <Related  data={blogs} settings={settings} />
        </div>
      <Footer />
    </div>
  )
}

export default BlogDetails