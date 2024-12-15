import React, { useEffect } from 'react';
import './Newsletter.css';

import AOS from "aos";

import "aos/dist/aos.css";


const Newsletter = () => {


  useEffect(()=>{

    AOS.init({
      offset:100,
      duration:1000,
    })
  },[]);

  return (
   

    <>
    
    <div className='updates'>

        <div className='update-box' data-aos="flip-left">

            <div className='box-left'>
               
               <p>Subscribe to my Newsletter & Never miss latest updates</p>
           
            </div>

            <div className='box-right'>
                  
            <div class="input-group">
    <input type="email" className="input" id="Email" name="Email" placeholder="Enter Email"  autocomplete="off" />
    <input class="button--submit" value="Submit" type="submit" />
      </div>
            </div>

        </div>
      
    </div>
    
    </>

  )
}

export default Newsletter