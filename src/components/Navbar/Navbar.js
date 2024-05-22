import React, { useEffect, useRef, useState } from 'react';
import "./Navbar.css";
import logo from "../edusity_assets/logo.png"
import { Link } from 'react-scroll';
import menuicon from "../edusity_assets/menu-icon.png";

export default function Navbar() {
  const [state,setState]=useState(false);

  let time = useRef(true);
  useEffect(()=>{
    if(time.current){
      window.addEventListener("scroll",()=>{
       window.scrollY > 60 ? setState(true) : setState(false);
      })

    }
    time.current=false;
  },[]);

  const[mobileicon,setMobileicon]=useState(false);

  function togglemenu(){
    mobileicon ? setMobileicon(false):setMobileicon(true);

  }
  return (
   
        <nav className={`container ${state ? "dark-nav" : ''}`}>
        <div className='logo'>
            <img src={logo} alt=''></img>
            </div>

            <ul className={mobileicon ? "" :"hidemenu"}>
                <li><Link to='background' smooth={true} offset={0} duration={500}>Home</Link></li>
                <li><Link to='programs' smooth={true} offset={-230} duration={500}>Program</Link></li>
                <li><Link to='about' smooth={true} offset={-100} duration={500}>About us</Link></li>
                <li><Link to='gallery' smooth={true} offset={-200} duration={500}>Campus</Link></li>
                <li><Link to='Testiomonials' smooth={true} offset={-220} duration={500}>Testimonials</Link></li>
                <li><Link to='contact' smooth={true} offset={-200} duration={500} className='btn'>Contact us</Link></li>
            </ul>
            
            <img src={menuicon} alt='' className='menuicon' onClick={togglemenu}></img>

        </nav>
       
        
 
    
  )
}
