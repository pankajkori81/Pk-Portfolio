import React, { useState } from 'react'

import './Navbar.css'

const Navbar = () => {

    const [openMenu , setOpenMenu]=useState(false)
  return (
    
    <>


    <div className='navbar'>
        <div className='menu'  onClick={()=>{
            setOpenMenu(!openMenu)

        }} >
            <span></span>
            <span></span>
            <span></span>

        </div>


        <div className='nav-part'>
          
          {/* <h2>Portfolio</h2> */}

          <img src="/logo_transparent.png" alt="Profile photo" />
      

         <ul className={openMenu ? "open" :""} >
            <li><a href="/">Home</a></li>
            <li><a href="#About">About</a></li>
            <li><a href="#Skill">Skills</a></li>
            <li><a href="#Project">Projects</a></li>
            <li><a href="#Experince">Experience</a></li>
            <li><a href="#Contact">Contact</a></li>
         </ul>

</div>

    </div>

    </>
  )
}

export default Navbar
