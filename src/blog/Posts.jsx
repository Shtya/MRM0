import { useState } from "react";
import Img1 from "../assets/blog/blog1.jpg" ;
import Img2 from "../assets/blog/blog2.jpg" ;
import Img3 from "../assets/blog/blog3.jpg" ;
import Img4 from "../assets/blog/blog4.jpg" ;
import Img5 from "../assets/blog/blog5.jpg" ;
import PostItem from "./PostItem";


export const DUMMY = [
  {id:"1" , thumbnil : Img1 , category : "Education" ,title:"lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem .",desc:"DEscription DEscription DEscription DEscription DEscription DEscription DEscription DEscription DEscription DEscription DEscription DEscription .",authorId : 1 },
  {id:"1" , thumbnil : Img2 , category : "Education" ,title:"lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem .",desc:"DEscription DEscription DEscription DEscription DEscription DEscription DEscription DEscription DEscription DEscription DEscription DEscription .",authorId : 2 },
  {id:"1" , thumbnil : Img3 , category : "Education" ,title:"lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem .",desc:"DEscription DEscription DEscription DEscription DEscription DEscription DEscription DEscription DEscription DEscription DEscription DEscription .",authorId : 3 },
  {id:"1" , thumbnil : Img1 , category : "Education" ,title:"lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem .",desc:"DEscription DEscription DEscription DEscription DEscription DEscription DEscription DEscription DEscription DEscription DEscription DEscription .",authorId : 4 },
  {id:"1" , thumbnil : Img2 , category : "Education" ,title:"lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem .",desc:"DEscription DEscription DEscription DEscription DEscription DEscription DEscription DEscription DEscription DEscription DEscription DEscription .",authorId : 5 },
  {id:"1" , thumbnil : Img3 , category : "Education" ,title:"lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem .",desc:"DEscription DEscription DEscription DEscription DEscription DEscription DEscription DEscription DEscription DEscription DEscription DEscription .",authorId : 3 },
  {id:"1" , thumbnil : Img4 , category : "Education" ,title:"lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem .",desc:"DEscription DEscription DEscription DEscription DEscription DEscription DEscription DEscription DEscription DEscription DEscription DEscription .",authorId : 4 },
  {id:"1" , thumbnil : Img5 , category : "Education" ,title:"lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem .",desc:"DEscription DEscription DEscription DEscription DEscription DEscription DEscription DEscription DEscription DEscription DEscription DEscription .",authorId : 5 },
]


export const Posts =  ()=>{
  const [posts , setposts] = useState(DUMMY) ;
  return (
    <section className="posts">
      {posts.map((e,index)=> ( <PostItem e={e} key={index} /> ))}
    </section>
  )
}