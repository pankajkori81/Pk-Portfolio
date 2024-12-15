import React, { useEffect } from 'react';
import './Skill.css';

import AOS from "aos";
import "aos/dist/aos.css";

const Skill = () => {


  useEffect(()=>{

    AOS.init({
      offset:200,
      duration:1000,
      easing:"ease-in-sine"
    })
  },[]);

  return (
   

    <>
    
    <div id='Skill' className='skills'>
    <hr className='line-skill' />
           
            <h1 data-aos="flip-left" >My top skills</h1>

       
         

          
        

        
        <div className='skill-part' >
          

            <div className='skill-card' data-aos="zoom-in-right">
                <h2>Programming Langauage</h2>
                <div className='card-box' ><img src="/public/c-.png" alt="c/c++" />
               
                <div class="container">
                <div class="skill-box">
                 <span class="title">C/C++</span>

                   <div class="skill-bar">
                   <span class="skill-per c">
                   <span class="tooltip">80%</span>
                 </span>
             </div>
             </div>
              </div>

                </div>
                
                <div className='card-box' >
                  <img src="/public/java.png" alt="Java" />
                <div class="container">
                <div class="skill-box">
                 <span class="title">JAVA</span>

                   <div class="skill-bar">
                   <span class="skill-per java">
                   <span class="tooltip">85%</span>
                 </span>
             </div>
             </div>
              </div>
                </div>
                
                <div className='card-box' >
                  <img src="/public/js.png" alt="Javascript" />
                 <div class="container">
                <div class="skill-box">
                 <span class="title">JavaScript</span>

                   <div class="skill-bar">
                   <span class="skill-per javascript">
                   <span class="tooltip">78%</span>
                 </span>
             </div>
             </div>
              </div>
                </div>
                 
            </div>

            <div className='skill-card' data-aos="zoom-in-left">
                <h2>Web Development</h2>
                <div className='card-box' >
                  <img src="/public/atom.png"alt="React" />

                <div class="container">
                <div class="skill-box">
                 <span class="title">ReactJs</span>

                   <div class="skill-bar">
                   <span class="skill-per react">
                   <span class="tooltip">85%</span>
                 </span>
             </div>
             </div>
              </div>

                </div>

                <div className='card-box' >
                  <img src="/public/programing.png" alt="Node" />
                <div class="container">
                <div class="skill-box">
                 <span class="title">NodeJs</span>

                   <div class="skill-bar">
                   <span class="skill-per node">
                   <span class="tooltip">75%</span>
                 </span>
             </div>
             </div>
              </div>
                </div>

                <div className='card-box' >
                  <img src="/public/database-management.png"alt="database" />
                <div class="container">
                <div class="skill-box">
                 <span class="title">Mongodb / MySql</span>

                   <div class="skill-bar">
                   <span class="skill-per mongodb">
                   <span class="tooltip">71%</span>
                 </span>
             </div>
             </div>
              </div>
                </div>

                 
                </div>
                
            </div>

        </div>


    
    </>
  )
}

export default Skill