import React, { useState } from 'react'
import Header from '../../component/Header/Header'
import './Home.css';
import Courses from '../../component/Courses/Courses';
import Lecture from '../../component/Lecture/Lecture';
import Contact from '../../component/Footer/Contact';
import Parent from '../../component/Parent/Parent';
import About from '../../component/About/About';
import Navbar from '../../component/Navbar/Navbar';







const Home = () => {

  return (
    <div className='home' >
        <Navbar/>
        <Header/>
        <About/>
        <Lecture/>
        <Contact/>      
    </div>
  )
}

export default Home