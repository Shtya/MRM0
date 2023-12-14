import React , { useEffect, useRef, useState} from 'react'
import {  useNavigate, useParams } from 'react-router-dom'

import JoditEditor from 'jodit-react';
import baseURL from '../API/API';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Alt_Navbar from '../components/Navbar1';
const config = {headers : { "Content-Type":"multipart/form-data" , "Cache-Control": "no-cache"} , theme:"dark" }
const Section = ["Digital Marketing News" ,"Latest Updates & Insights" , "Tips & Strategies" ]



const E_post = () => {
  const editor = useRef(null);
  const [OnePost , setOnePost] = useState()
  const navigate = useNavigate();
  const [isload , setisload] = useState(false)
  const [Img, setImg] = useState("");
  const [title, settitle] = useState("");
  const [Des, setDes] = useState("");
  const [category, setCategory] = useState();
  

  const handleImg = (e) => { if (e.target.files && e.target.files[0]) { setImg(e.target.files[0]) } }

  const handleSubmit = async (e) => {
    e.preventDefault()
    console.log( Des )
      if(Img == "" || title == ""  || Des == ""  || category == "" ) return toast.error("Please fill in all the field!")
    var form = new FormData();
    form.append( 'title', title );
    form.append( 'description', Des);
    form.append( 'category', category );
    form.append( 'thumbnail', Img );
    setisload(true)
    await baseURL.post("" , form , config)
    setisload(false)
    navigate("/MRM")
  }

  return (
    <div className='Dashboard-blog'>
      <div className="container"> <Alt_Navbar /> </div>
        <section className="create-post">
          <div className="container">
            <h2 className="h1">Create blog</h2>
            <form className="form create-post_form">
              <p className="error-message"> THis is an error message </p>
              <input type="text" placeholder='title'  value={title}    onChange={e=> settitle(e.target.value)}  />
              <select name=""                        value={category} onChange={e=> setCategory(e.target.value)}> {Section.map((e,index)=> ( <option value={e}>{e}</option> ))} </select>
              <input type="file"                  value={Img[0]}    onChange={handleImg} autoFocus />

              <JoditEditor
                  ref={editor}
                  value={Des}
                  config={config}
                  tabIndex={1} // tabIndex of textarea
                  onChange={setDes}
                />

              <button className='bt' style={{opacity: !isload ? "1":".7" }}  onClick={handleSubmit} > 
                {
                  !isload ? "Create" 
                  :  <div className="LoadingAnimate"> <div class="load-wrapp"> <div class="load-3"> <div class="line"></div> <div class="line"></div> <div class="line"></div> </div> </div></div>
                }
              </button>
            </form>
            
          </div>
        </section>
        <ToastContainer />
    </div>
  )
}

export default E_post