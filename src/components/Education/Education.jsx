import React, { useEffect } from "react";
import "./Education.css";

import AOS from "aos";
import 'aos/dist/aos.css';



const Education = () => {


  useEffect(()=>{

    AOS.init({
      offset:200,
      duration:900
    })

  })


  return (
    <>
      <div className="education">
        <h1 data-aos="flip-right" >Education</h1>

        <div className="edu-data" data-aos="zoom-in-up" >
          <div className="sub-datas">
            <img src="/atom.png" alt="Education" />
          </div>

          <div className="sub-datas">
            <p> A.C Patil College of Engg. University of Mumbai </p>
            <p>Course : B.E in Computer Engineering</p>

          </div>

          <div className="sub-datas">
            <p>Academic Years : 2021-2025</p>

          </div>
        </div>

        <div className="edu-data" data-aos="zoom-in-up" >
          <div className="sub-datas">
            <img src="/atom.png" alt="Education" />
          </div>

          <div className="sub-datas">
            <p>Kirti College.  </p>
            <p>Senior Secondary Education</p>

          </div>

          <div className="sub-datas">
          <p>Academic Years : 2018-2020</p>

          </div>
        </div>
      </div>
    </>
  );
};

export default Education;
