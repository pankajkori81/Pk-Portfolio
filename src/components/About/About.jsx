import React, { useEffect } from 'react';
import './About.css';

import AOS from "aos";
import "aos/dist/aos.css";

const About = () => {



    useEffect(()=>{

        AOS.init({
            offset: 200,
      duration: 800,
      easing: 'ease-in-sine',

        })
    },[])
  
  return (

    <>
    
    <div className='about'>

         <h1 id='About'></h1>

        <div className='about-left' data-aos="fade-up-right">

  

        <img src="/Pankaj.jpeg" alt="Profile Photo" />
       
    

        </div>
        
        <div className='about-right' data-aos="fade-up-left">
            <h1 className='h1' data-aos="zoom-in-up" >About Me</h1>
            <hr className='about-line' />
            <h3>Full Stack Developer</h3>
            <hr className='about-line2' />


        <p>  I am a full stack web developer with a passion for creating interactive and responsive web applications.
         I have experience working with JavaScript, React, Redux, Nodejs, Express, HTML, CSS, and Git&Github, I am a quick learner and I am always looking to expand my knowledge and skill set.
         I am a team player and I am excited to work with others to create amazing applications.
         </p>

         <div className='card-part'>
 
            <div className='subcard1' data-aos="flip-left" >

                <h2>Frontend Developer</h2>
                 
                <img src="/ui-design.png" alt="Frontend" />
                <p>
                    I'm frontend delevepor with experience in building responsive and optimized websites 
                </p>

            </div>
            <div className='subcard1' data-aos="flip-left" >
                
                <h2>Backend Developer</h2>
                <img src="/backend.png" alt="Backend" />

                <p>I have experience developing fast and optimized backend systems and APIs</p>

            </div>

            <div className='subcard1' data-aos="flip-left" >

                  <h2>UI/UX Developer</h2>
                <img src="/designer.png" alt="UI/UX" />
                <p>I have experience in designing landing pages</p>

            </div>

         </div>
        </div>

    </div>
    
    </>
  )
}

export default About
