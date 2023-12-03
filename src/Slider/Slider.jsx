import React from 'react'
import "./index.css" ;
import ImageSlider from './helpers/ImageSlider';


export const Slider1 = () => {
  return (
    <div className='Slider'>
      <div className="slider-wrapper">
        <div className="slider">
          <img id='1' src="./Stands/1.jpg" alt="" />
          <img id='2' src="./Stands/1.jpg" alt="" />
          <img id='3' src="./Stands/1.jpg" alt="" />
        </div>
      </div>

      <div className="nav">
        <a href="#1"></a>
        <a href="#2"></a>
        <a href="#3"></a>
      </div>
    </div>
  )
}


const  Slider = ()=>{
  const Imgs = [
    {img:"./port-1.jpg" , type:"all"} ,{img:"./port-2.jpg" , type:"all"} ,
    {img:"./port-3.jpg" , type:"all"} ,{img:"./port-4.jpg" , type:"all"} ,
    {img:"./port-5.jpg" , type:"all"} ,{img:"./port-6.jpg" , type:"all"} ,
    {img:"./port-7.jpg" , type:"all"} ,{img:"./port-8.jpg" , type:"all"} ,
    {img:"./Stands/1.jpg" , type:"all"} ,{img:"./Stands/2jpg" , type:"all"} ,
    {img:"./Stands/3.jpg" , type:"all"} ,{img:"./Stands/4jpg" , type:"all"} ,
    {img:"./Stands/5.jpg" , type:"all"} ,{img:"./Stands/6jpg" , type:"all"} ,
    {img:"./Stands/7.jpg" , type:"all"} ,{img:"./Stands/8jpg" , type:"all"} ,
    {img:"./Stands/9.jpg" , type:"all"} ,{img:"./Stands/10jpg" , type:"all"} ,
    {img:"./Stands/11.jpg" , type:"all"} ,{img:"./Stands/12jpg" , type:"all"} ,
    {img:"./Stands/13.jpg" , type:"all"} ,{img:"./Stands/14jpg" , type:"all"} ,
    {img:"./Stands/14.jpg" , type:"all"} ,{img:"./Stands/16jpg" , type:"all"} ,
    {img:"./Stands/16.jpg" , type:"all"} ,{img:"./Stands/18jpg" , type:"all"} ,
  ]

  return (
    <div className='slider'>
        <ImageSlider Imgs={Imgs} />
      </div>
  );
}


export default Slider
