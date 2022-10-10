import React, { Component } from 'react'
import {FaBriefcase, FaCalendarAlt } from "react-icons/fa";
import '../App.css'
class Experience extends Component {
  render() {
    return (
      <>
      <div className='experience-card'>
         <header>
          <FaBriefcase className='icon'/>
          <h2>Work Experience</h2>
         </header>
         <section className='job one '>
          <h3>Front-End Developer</h3>
          <div className='date'>
            <FaCalendarAlt />
            <p>jan 2015- <span>Current</span></p>
          </div>
          <div className='desc'>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Libero sint unde atque
          ipsam expedita earum dolores deserunt quasi error? Veniam optio,
          voluptatibus sequi nam voluptatem aliquam nihil maxime repellendus atque?
          </div>
         </section>
         <div className='separator'></div>
         <section className='job two'>
          <h3>Web Developer</h3>
          <div className='date'>
            <FaCalendarAlt />
            <p>Mar 2012- Dec 2014</p>
          </div>
          <div className='desc'>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Libero sint unde atque
          ipsam expedita earum dolores deserunt quasi error? Veniam optio,
          voluptatibus sequi nam voluptatem aliquam nihil maxime repellendus atque?
          </div>
         </section>
         <div className='separator'></div>
         <section className='job three'>
          <h3>Graphic Designer</h3>
          <div className='date'>
            <FaCalendarAlt />
            <p>Mar 2010- Jan 20112</p>
          </div>
          <div className='desc'>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Libero sint          </div>
         </section>
        </div> 
      </>
    )
  }
}

export default Experience
