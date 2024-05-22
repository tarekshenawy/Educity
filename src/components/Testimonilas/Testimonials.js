import React, { useRef } from 'react';
import "./Testimonials.css";
import backicon from "../edusity_assets/back-icon.png";
import nexticon from "../edusity_assets/next-icon.png";
import user1 from "../edusity_assets/user-1.png";
import user2 from "../edusity_assets/user-2.png";
import user3 from "../edusity_assets/user-3.png";
import user4 from "../edusity_assets/user-4.png";

export default function Testimonials() {
    let x = 0;
    const inputref= useRef();

    const slideforward=()=>{
        if(x > -50){
            x-= 25;
        }
        inputref.current.style.transform=`translateX(${x}%)`;
        
   
    }
    const slidebackward =()=>{
        if(x <0){
            x+= 25;
        }
        inputref.current.style.transform=`translateX(${x}%)`;
    
    }
  return (
    <div className='Testiomonials'>
         <img src={nexticon} alt='' className='nexticon' onClick={slideforward}></img>
            <img  src={backicon} alt='' className='backicon' onClick={slidebackward}></img>
           
      

        <div className='cards' ref={inputref} >
            
                <div className='card'>

                        <div className='cardimage'>
                            <img src={user1} alt=''></img>
                            <p>William Jackson</p>
                        </div>

                        <div className='cardtext'>
                            <p>Technology will continue to feature articles and special issues devoted to professional and academic writing and research, software and book reviews, literary and linguistic analyses of texts,
                                electronic publishing and issues related to the Internet.
                                
                               
                                </p>

                        </div>

                </div>

                <div className='card'>
                        <div className='cardimage'>
                            <img src={user2} alt=''></img>
                            <p>William Jackson</p>
                        </div>

                        <div className='cardtext'>
                            <p>Technology will continue to feature articles and special issues devoted to professional and academic writing and research, software and book reviews, literary and linguistic analyses of texts,
                                electronic publishing and issues related to the Internet.
                               </p>

                        </div>

                </div>

                <div className='card'>
                    <div className='cardimage'>
                        <img src={user3} alt=''></img>
                        <p>William Jackson</p>
                    </div>

                    <div className='cardtext'>
                        <p>Technology will continue to feature articles and special issues devoted to professional and academic writing and research, software and book reviews, literary and linguistic analyses of texts,
                            electronic publishing and issues related to the Internet.
                           
                            
                            </p>

                    </div>

            </div>

                <div className='card'>
                        <div className='cardimage'>
                            <img src={user4} alt=''></img>
                            <p>William Jackson</p>
                        </div>
                        
                <div className='cardtext'>
                    <p>Technology will continue to feature articles and special issues devoted to professional and academic writing and research, software and book reviews, literary and linguistic analyses of texts,
                        electronic publishing and issues related to the Internet.
                       

                       </p>

                </div>
            </div>
        </div>
        </div>
    
       
        
  )
}
