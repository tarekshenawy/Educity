import React from 'react';
import "./About.css";
import abouticon from "../edusity_assets/about.png";
import playicon from "../edusity_assets/play-icon.png";

export default function About() {
  return (
    <div className='about'>
        <div className='AboutIMage'>

            <img src={abouticon} alt='' className='abouticon'></img>
            <div className='iconvideo'>
            <img src={playicon} alt='' className='playicon'></img>

            </div>
           
        </div>
        <div className='abouttext'>
          
            <p className='aboutuniversiy'>About University</p>
            <h1>Nurturing Tomorrow <br></br>
            leaders Today
            </h1>
            <p>EducationCity specialises in primary teaching resources with
                 curriculum-mapped content for students aged 3-12. Teachers 
                 can beneﬁt from rigorous assessments with measurable
                  outcomes to support students’ growth and development. We provide time-saving tools and adaptive,
                 personalised content based on students’ needs.</p>
        </div>

    </div>
  )
}
