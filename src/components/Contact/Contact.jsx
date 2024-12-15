import React, { useEffect } from 'react'

import './Contact.css'

import AOS from "aos";
import "aos/dist/aos.css";

const Contact = () => {


  useEffect(()=>{

    AOS.init({
      offset:200,
      duration:900,
    })

  },[]);

  return (
    

    <>
     <div id='Contact'></div>
     

     <div className='contact-head'>

      <hr className='contact-line' />

            <h2 data-aos="flip-right" >Contact Us</h2>
 

     </div>
    <div className='contact'>
      

      <div className='left-contact' data-aos="fade-up-right" >

      {/* <img src="https://images.unsplash.com/photo-1534536281715-e28d76689b4d?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="contact-form" />
                     */}
                    <div className="detail">
                     <h2>Let's talk</h2> 

                     <p> I am currently avaiable to take on new projects . so feel free ti send me a message about anything that you want me to work on. You can contact me anytime.</p> 
                    
                     <p>Email: mahikori@8169gmail.com</p> 
                    
                     <p>Mob. No.: +91 83453 34454</p>
                    
                     <p>Location: Mumbai , India.</p>

                     </div>



      </div>
   
     <div className='right-contact' data-aos="fade-up-left">

     <h2>Contact Form</h2> 

<form action=""  id="login-form" >
 
 <label htmlFor="name">Name</label> 
 <input type="text" name="name" className="contact_name" placeholder="Enter Your Name"  required />

 <label htmlFor="email">Email</label>
 <input type="email" name="email" className="contact_email" placeholder="Enter Your Email"  required  />

 <label htmlFor="textarea">Write Your Query Here?</label>
 <textarea type="text" name="text" className="textarea" id="" cols="40" rows="10" placeholder="write Your Query Here?" required />

   <div>
 <button type="submit" className='btn' >Submit</button>

 </div>
 
 </form> 


     </div>
    </div>
    
    </>
  )
}

export default Contact