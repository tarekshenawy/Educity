import React from 'react';
import "./Title.css";

export default function Title({title1,title2}) {
  return (
    <div className='title'>
        <p>{title1}</p>
        <h1>{title2}</h1>
    </div>
  )
}
