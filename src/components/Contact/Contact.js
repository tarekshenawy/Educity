import React from 'react';
import "./Contact.css";
import message from "../edusity_assets/msg-icon.png";
import mail from "../edusity_assets/mail-icon.png";
import phone from "../edusity_assets/phone-icon.png";

export default function Contact() {
  return (
    <div className='contact'>
        <div className='col-1'>
            <h2>Send Us a message <img src={message} alt=''></img></h2>
            <p className='text'>
              Feel free to reach out through contact from or find our
               contact information below .your feedback .questions and 
               suggestion are important to us as we strive to provide exeptional
                service to our university community.
            </p>
                <p ><img src={mail}alt='' className='mail'></img>contact @gmail.com  </p>
                <p ><img src={phone} alt='' className='phone'></img>05022222224455</p>
        </div>

        <div className='col-2'>
          
            <form>
                <label >name</label>
                <input type="text"  placeholder='Enter name' name="name" required></input>
             
                <label >Phone Number</label>
                <input type="number"  placeholder='Enter Phone' name='phone' required></input>

                <label >Write your message here</label>
                <textarea type="text" placeholder='enter your massege' name='message'  required></textarea>
                <button type='submit' className='btn'>Submit now</button>
            </form>
        </div>

    </div>
  )
}
