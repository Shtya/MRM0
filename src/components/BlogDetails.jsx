import React, { useEffect, useState } from 'react'
import {DocsBlogs} from "./docs_blogs"
import { useLocation, useParams } from 'react-router-dom'
import Navbar from './Navbar1';
import Animation from './helpers/Animation';
import Footer from './Footer';
import Navbar1 from './Navbar';
import SlideNav from './SlideNav';


const BlogDetails = () => {
  const [data , setdata] = useState([])
  const {pathname} = useLocation()
  let {id} = useParams() ;
  useEffect(_=>{ DocsBlogs.filter( e => e.num == id ? setdata(e) : console.log(null)) } ,[pathname] )

  return (
    <div className='blog-details'>
      <div className="container container3"> <Navbar1 /> </div>
      <Animation />
      <SlideNav share={true} whats={true} />
      <div className="coverIntro "> </div>

      <div className="home">
          <div className="container">
              <div className="boxImg hidden-img"  >  <img src={data?.ImgCover} alt="" /> </div>
              <div className="boxs" data-aos="fade-left" >
              <p  className="phead hidden-text" > {data?.date} </p>
              <p  className="h2 hidden-text" > <span>{data?.title}</span> </p>
            </div>
        </div>
      </div>

      <div className={`blog-detail blog-detail-${data?.num}`}>
        <div className="container">
          <div dangerouslySetInnerHTML={{ __html: data?.data }} />
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
      <Footer />
    </div>
  )
}

export default BlogDetails