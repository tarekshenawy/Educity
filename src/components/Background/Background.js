import React from 'react';
import "./Background.css";
import darkicon from "../edusity_assets/dark-arrow.png";


export default function Background() {
  return (
    <div className='background container' >
        <div className='contents'>
        <h2>We Ensure better Education<br></br>
           for a better World</h2>
      
        <p>our-cutting edge curriclum is designed to empower students with the Knowledge,skills</p>
        <p>experience needed to excel in the dynamic field of education</p>
        <button >Explore more <img src={darkicon} alt=''></img></button>

        </div>
        
   

    </div>
  )
}
