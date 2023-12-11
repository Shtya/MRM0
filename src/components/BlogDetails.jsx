import React, { useEffect, useState } from 'react'
import {DocsBlogs} from "./docs_blogs"
import { useParams } from 'react-router-dom'
import Navbar from './Navbar1';
import FacebookCover from "../assets/Socialmedia/facebook.png"
import {motion} from "framer-motion"
import Animation from './helpers/Animation';
import Footer from './Footer';

import Markdown from 'markdown-to-jsx'

const BlogDetails = () => {
  const [data , setdata] = useState()
  let {id} = useParams() ;
  useEffect(_=>{DocsBlogs.filter(e=> e.num == id ? setdata(e) : setdata(null) )} ,[] )

  console.log(data)
  return (
    <div className='blog-details'>
      <div className="container"> <Navbar /> </div>
      <Animation />
      <div className="coverIntro "> </div>

      <div className="home">
          <div className="container">
              <div className="boxImg hidden-img"  >  <img src={data?.ImgCover} alt="" /> </div>
              <div className="boxs" data-aos="fade-left" >
              <p  className="h2 hidden-text" > <span>{data?.title}</span> </p>
            </div>
        </div>
      </div>

      <div className={`blog-detail blog-detail-${data?.num}`}>
        <div className="container">
          <div dangerouslySetInnerHTML={{ __html: data?.data }} />
        </div>
      </div>

      <Footer />
    </div>
  )
}

export default BlogDetails