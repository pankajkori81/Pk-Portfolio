import React , {useEffect} from 'react';
import './Experince.css';

import AOS from "aos";
import "aos/dist/aos.css";


const Experince = () => {


    useEffect(()=>{

        AOS.init({
          offset:200,
          duration:900,
        })
    
      },[]);



  return (
   
   
   <>
   
    <div id="Experince"></div>
    <div className='work-exp'>
    <h1 data-aos="flip-left">Work Experince</h1>


        <div className='work'data-aos="zoom-in-up" >
            
            <div className='data-left' >
            <img src="/public/nullclass.png" alt="NullClass" />
            <h3>NullClass</h3>
            <p>Remote</p>
            <p>India</p>
            <p>Aug 2024 to Oct 2024 </p>

            </div>
            <div className='data-right'>

                <p>Role : FrontEnd Developer</p>

            </div>

          

        </div>

    </div>

   </>
  )
}

export default Experince