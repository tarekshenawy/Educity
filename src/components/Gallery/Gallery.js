import React from 'react';
import "./Gallery.css";
import gallery1 from "../edusity_assets/gallery-1.png";
import gallery2 from "../edusity_assets/gallery-2.png";
import gallery3 from "../edusity_assets/gallery-3.png";
import gallery4 from "../edusity_assets/gallery-4.png";

export default function Gallery() {
  return (
    <div className='gallery'>
        <div className='galleryphotos'>
            <img src={gallery1} alt=''></img>
            <img src={gallery2} alt=''></img>
            <img src={gallery3} alt=''></img>
            <img src={gallery4} alt=''></img>
      </div>
    
        <div className='buttons'>
            <button>Show more</button>

        </div>
    

    </div>
  
  )
}
