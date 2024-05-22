import React from 'react';
import "./Program.css";
import program1 from "../edusity_assets/program-1.png";
import program2 from "../edusity_assets/program-2.png";
import program3 from "../edusity_assets/program-3.png";
import promgramicon1 from "../edusity_assets/program-icon-1.png";
import programicon2 from "../edusity_assets/program-icon-2.png";
import programicon3 from "../edusity_assets/program-icon-3.png";

export default function Program() {
  return (
    <div className='programs'>

        <div className='images'>
            <img src={program1} alt='' ></img>
             <div className='icon'>
            <img src={promgramicon1} alt='' ></img>
            <p>Gradution degree</p> 
            </div> 
       
            </div>

            <div className='images'>
             <img src={program2} alt=''></img>
                <div className='icon'>
                <img src={programicon2} alt='' ></img>
                <p>Master degree</p>
                </div>
            </div>
             
            <div className='images'>
                <img src={program3} alt=''></img>
                <div className='icon'>
                <img src={programicon3} alt='' ></img>
                <p>Post degree</p>
                </div>
            </div>
  
        
       
        
    </div>

  )
}

