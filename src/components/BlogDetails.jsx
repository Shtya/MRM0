import React, { useEffect, useState } from 'react'
import {DocsBlogs} from "./docs_blogs"
import { useLocation, useParams } from 'react-router-dom'
import Navbar from './Navbar1';
import Animation from './helpers/Animation';
import Footer from './Footer';


const BlogDetails = () => {
  const [data , setdata] = useState([])
  const {pathname} = useLocation()
  let {id} = useParams() ;
  useEffect(_=>{ DocsBlogs.filter( e => e.num == id ? setdata(e) : console.log(null)) } ,[pathname] )

  return (
    <div className='blog-details'>
      <div className="container"> <Navbar /> </div>
      <Animation />
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
        <div className="coverImg"><img src={data?.ImgCover} alt="" /></div>
        <div className="reacted">
          <span> <i class="fa-solid fa-share-nodes"></i>  Like  </span>
          <span> <i class="fa-solid fa-comment"></i>  Comment  </span>
          <span> <i class="fa-solid fa-share-nodes"></i> Share  </span>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default BlogDetails