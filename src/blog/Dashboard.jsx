import React , {useEffect, useState} from 'react'
import { Link, useNavigate, useNavigation, useParams } from 'react-router-dom'
import Navbar1 from '../components/Navbar'
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import baseURL from '../API/API';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Alt_Navbar from '../components/Navbar1';
const config = {headers : { "Content-Type":"multipart/form-data"}}
const modules = {  toolbar :[ [{ 'header' : [1, 2, 3 , 4 , 5 , 6 , false] }], ['bold', 'italic', 'underline', 'strike', 'blockquote'] ,[{'list' : 'ordered'}, {'list' : 'bullet'}, {'indent' : '-1'}, {'indent' : '+1'}],['link' , "image"],['clean']] }
const formats = [ 'header', 'bold', 'italic', 'underline', 'strike', 'blockquote', 'list', 'bullet', 'indent', 'link' , "image" ]
const Section = ["Digital Marketing News" ,"Latest Updates & Insights" , "Tips & Strategies" ]



const E_post = () => {
  
  const navigate = useNavigate();
  const [isload , setisload] = useState(false)
  const [Img, setImg] = useState("");
  const [title, settitle] = useState("");
  const [Des, setDes] = useState("");
  const [category, setCategory] = useState();
  

  

  // 1 ) Img 
  const handleImg = (e) => { if (e.target.files && e.target.files[0]) { setImg(e.target.files[0]) } }

  const handleSubmit = async (e) => {
    e.preventDefault()
    if(Img == "" || title == ""  || Des == ""  || category == "" ) return toast.error("Please fill in all the fields!")

    setisload(true)
    await baseURL.post( "" , {title , category , description:Des , thumbnail:Img} , config).then(res => console.log(res))
    setisload(false)
    settitle("")
    setDes("")
    setCategory("")
    setImg("")
    navigate("/all-blogs")
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
              <ReactQuill placeholder='Description' theme="snow" modules={modules} formats={formats} value={Des} onChange={setDes} />
              <button className='bt' style={{opacity: !isload ? "1":".7"}}  onClick={handleSubmit} > 
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