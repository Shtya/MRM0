import React, { useEffect, useState } from 'react'
import Logo from "../assets/Logo1.png"
import { Link, useNavigate } from 'react-router-dom';

const Alt_Navbar = () => {
  const Navigate = useNavigate()
  const [top , settop] = useState(false)
  useEffect(_=>{
    const handelScroll =  _=> window.scrollY > 50 ? settop("black") : settop("")
    window.addEventListener("scroll" , handelScroll)
    return _=> window.removeEventListener("scroll" , handelScroll)} ,[ window])

    
  useEffect(_=>{
    let navbar = document.querySelector(".Navbar1 .navbar");
    let searchBox = document.querySelector(".Navbar1 .search-box .bx-search");

searchBox.addEventListener("click", ()=>{
  navbar.classList.toggle("showInput");
  if(navbar.classList.contains("showInput")){
    searchBox.classList.replace("bx-search" ,"bx-x");
  }else {
    searchBox.classList.replace("bx-x" ,"bx-search");
  }
});

let navLinks = document.querySelector(" .Navbar1 .nav-links");
let menuOpenBtn = document.querySelector(" .Navbar1 .navbar .bx-menu");
let menuCloseBtn = document.querySelector(" .Navbar1 .nav-links .bx-x");
menuOpenBtn.onclick = function() {
navLinks.style.left = "0";
}
menuCloseBtn.onclick = function() {
navLinks.style.left = "-100%";
}

  } ,[])


  return (
  <div className="Navbar1" >
    <nav>
      <div class="navbar" style={{background:top}}>
        <i class='bx bx-menu'></i>
        <div class="logo"><Link to="/"> <img src={Logo} alt="" /></Link></div>
        <div class="nav-links">
          <div class="sidebar-logo">   <span class="logo-name"><img src={Logo} alt="" /></span>   <i class='bx bx-x' ></i> </div>
          
          <ul class="links">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/MRM" >Blogs</Link></li>
            <li><Link to="/dashboard">Create</Link></li>
          </ul>
        </div>
        <div class="search-box">
          <i class='bx bx-search'></i>
          <div class="input-box"> <input type="text" placeholder="Search..."/>  </div>
        </div>
      </div>
    </nav>
  </div>
  )
}

export default Alt_Navbar