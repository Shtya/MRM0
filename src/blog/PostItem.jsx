import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const PostItem = ({e}) => {
  const Navigate = useNavigate()
  const [description , setdescription] = useState()
  // if(e?.desc){
  //   e?.desc?.length > 145 ?  setdescription(e?.desc.substr(0 , 145) + "...")  : setdescription(e?.desc)
  // }

  return (
      <figure class="snip1249">
        <div class="image">
          <img src={e.thumbnil} alt="sample90"/><i class="ion-ios-basketball-outline"></i>
        </div>
        <figcaption>
          <h3 onClick={_=> Navigate(`/posts/${e.id}`)}>{e.title}</h3>
          <p>{e.desc}</p>
          <a href="#" class="add-to-cart">Show more</a>
        </figcaption>
      </figure>
  )
}

export default PostItem