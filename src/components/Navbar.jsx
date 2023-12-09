import React, { useEffect, useState } from 'react'
import Logo from "../assets/Logo1.png"
import { Link } from 'react-router-dom';

const Navbar1 = () => {

  const [top , settop] = useState(false)
  useEffect(_=>{
    const handelScroll =  _=> window.scrollY > 200 ? settop("black") : settop("")
    window.addEventListener("scroll" , handelScroll)
    return _=> window.removeEventListener("scroll" , handelScroll)} ,[ window])



  useEffect(_=>{
// search-box open close js code
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


// sidebar submenu open close js code
let htmlcssArrow = document.querySelector(".Navbar1 .htmlcss-arrow");
htmlcssArrow.onclick = function() {
 navLinks.classList.toggle("show1");
}
// let moreArrow = document.querySelector(".Navbar1 .more-arrow");
// moreArrow.onclick = function() {
//  navLinks.classList.toggle("show2");
// }
// let jsArrow = document.querySelector(".Navbar1 .js-arrow");
// jsArrow.onclick = function() {
//  navLinks.classList.toggle("show3");
// }


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
            <li><Link >Services</Link>
              <i class='bx bxs-chevron-down htmlcss-arrow arrow  '></i>
              <ul class="htmlCss-sub-menu sub-menu">
                <li><Link to="/web-design"> web design & Development </Link></li>
                <li><Link to="/photography"> photography & videography </Link></li>
                <li><Link to="/signages"> indoor & outdoor signages </Link></li>
                <li><Link to="/exhibition"> exhibition display stands</Link></li>
                <li><Link to="/social"> social media marketing</Link></li>
                <li><Link to="/gifts">cooperated gifts </Link></li>
                <li><Link to="/media">media buying </Link></li>
                <li><Link to="/branding">Branding </Link></li>
                <li><Link to="/seo">SEO </Link></li>
              </ul>
            </li>

            <li><Link to="/portfolio"> Portfolio</Link></li>
            <li><Link to="/blog">Blog</Link></li>
            <li><Link to="/about-us">About Us</Link></li>
            <li><Link to="/contact-us"> Contact Us</Link></li>
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

export default Navbar1