import React, { useEffect, useState } from 'react'
import Navbar from './components/Navbar/Navbar'
import Header from './components/Header/Header'
import About from './components/About/About'
import Skill from './components/Skills/Skill'
import Projects from './components/Projects/Projects'
import Newsletter from './components/Newsletter/Newsletter'
import Footer from './components/Footer/Footer'
import Contact from './components/Contact/Contact'
import Loading from './components/Loading/Loading'
import Experince from './components/Experince/Experince'


const App = () => {


  const [isLoading , setIsLoading ]=useState(true);



  useEffect(()=>{

    setTimeout(()=>{
      setIsLoading(false);
    },2000)

  })


  return (
   <>

<div class="gradient"></div>

   <div>

    {
      isLoading ? <Loading/> : <div>   {/* Navbar */}
      <Navbar/>
   
      {/* Home part */}
      <Header/>
   
      {/* About part */}
      <About/>
   
      {/* Skill part */}
      <Skill/>
   
      {/* Projects */}
       <Projects/>
   

   {/* Work experince  */}

   <Experince/>
   
      {/* Newsletter   */}
      <Newsletter/>
     
   
     {/* Contact Form */}
      <Contact/>
     
   
     {/* Footer */}
      <Footer/> </div>
    }
   </div>



   </>

    
  )
}

export default App