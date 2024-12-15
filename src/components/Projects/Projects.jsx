import React, { useEffect } from "react";
import "./Projects.css";
import AOS from "aos";

import "aos/dist/aos.css";


const Projects = () => {


  useEffect(()=>{

    AOS.init({
      offset:200,
      duration:900,
    })

  },[]);

  return (
    <>
  
      <div id="Project" className="projects">
      <hr className='line-skill' />
       
        <div className="project-details">
        
          <h2 data-aos="flip-left">My Projects</h2>

          <h3>Check Out My Latest Projects</h3>

          {/* <p>
            I have worked on a variety of projects , from simple websites to
            complex end to end web applications. Here are a few of my favorite{" "}
          </p> */}
        </div>

        <div className="project-cards">
          <div className="cards-box" data-aos="zoom-in-right">
            <img src="/public/ecoms.png" alt="Ecommerce" />
            <h2>E-commerce</h2>

            <p>
              An e-commerce website is a platform that allows businesses to sell
              products and services directly to customers over the internet. It
              provides a convenient, efficient, and often more personalized
              shopping experience compared to traditional brick-and-mortar
              stores. Key features include product listings, shopping carts,
              secure checkout processes, and various interactive elements to
              enhance user engagement and satisfaction.
            </p>

            <div className="card-btns">
              <button>React.js</button>
              <button>Node.js</button>
              <button>Express.js</button>
              <button>Mongodb</button>
              <button>Tailwind CSS</button>
              <button>React Libraries</button>
            </div>
          </div>

          <div className="cards-box" data-aos="zoom-in-left" >
            <img src="/public/Bookimg.png" alt="Book Inventory" />
            <h2>Book Inventory System </h2>

            <p>
              Book inventory system summary and advatages Book Inventory System
              Summary A book inventory system is a software application designed
              to help libraries, bookstores, and individual book collectors
              manage their book collections efficiently. It tracks information
              about each book, such as title, author, genre, publication date,
              and stock levels. The system can also handle purchasing, lending,
              and returning books, ensuring that inventory levels are always
              accurate and up-to-date.
            </p>

            <div className="card-btns">
              <button>React.js</button>
              <button>Node.js</button>
              <button>Express.js</button>
              <button>Mongodb</button>
              <button>Tailwind CSS</button>
              <button>React Libraries</button>
            </div>
          </div>

          <div className="cards-box" data-aos="zoom-in-right" >
            <img src="/public/Food.png" alt="Food delivery" />
            <h2> Indian Food Delivery </h2>

            <p>
              A food delivery system is a platform that enables customers to
              order food from local restaurants and have it delivered to their
              location. It typically involves an online ordering system, a
              network of delivery personnel, and a fleet of vehicles or bikes to
              transport the food. The system integrates restaurant menus,
              customer orders, payment processing, and delivery logistics to
              provide a seamless experience for both customers and restaurants.
            </p>

            <div className="card-btns">
              <button>React.js</button>
              <button>Node.js</button>
              <button>Express.js</button>
              <button>Mongodb</button>
              <button>Tailwind CSS</button>
              <button>React Libraries</button>
            </div>
          </div>

          <div className="cards-box" data-aos="zoom-in-left" >
            <img src="/public/citygeo.png" alt="Food delivery" />
            <h2> AI-Driven Urban Planning </h2>

            <p>
               AI-driven urban planning leverages artificial
              intelligence technologies to enhance the design, development, and
              management of urban areas. By analyzing vast amounts of data, AI
              can help city planners make more informed decisions, optimize
              resource allocation, and create more sustainable and livable
              environments2. Key applications include predictive analytics,
              smart infrastructure, urban simulation, and enhanced citizen
              engagement.
            </p>

            <div className="card-btns">
              <button>React.js</button>
              <button>Node.js</button>
              <button>GIS</button>
              <button>Python</button>
              <button>Mongodb</button>
              <button>Tailwind CSS</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Projects;
