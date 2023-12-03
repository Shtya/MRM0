import React, { useState } from 'react'

const ImageSlider = ({Imgs}) => {
  const [cur , setcur] = useState(0)
  const prev = ()=>{ setcur( curr => curr === 0 ? Imgs.length -1 : curr -1 )}
  const next = ()=>{ setcur( curr => curr === Imgs.length -1 ? 0 : curr +1 )}
  console.log(cur)
  return (
    <div className='slider-wrapper'>
      <div className="slider-img">
        {Imgs?.map(e=> ( <img key={index} style={{transform:`translateX(-${cur * 400}px)`}} src={e.img} />))}
      </div>

        <div className="bullets">
          <i onClick={next} className="fa-solid fa-chevron-right"></i>
          <i onClick={prev} className="fa-solid fa-chevron-left"></i>
        </div>

      </div>
  )
}

export default ImageSlider