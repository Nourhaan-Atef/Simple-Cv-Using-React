import React, { Component } from 'react'
import {FaUniversity, FaCalendarAlt } from "react-icons/fa";
import '../App.css'
class Education extends Component {
  render() {
    return (
      <>
        <div className='education-card'>
        <header>
        <FaUniversity className='icon'/>
        <h2>Education</h2>
        </header>
        <section className='edu one '>
          <h3>W3Schools.com</h3>
          <div className='date'>
            <FaCalendarAlt />
            <p>ForEver</p>
          </div>
          <div className='desc'>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Libero sint unde atque
          ipsam expedita earum dolores deserunt quasi error? Veniam optio,
          voluptatibus sequi nam voluptatem aliquam nihil maxime repellendus atque?
          </div>
         </section>
         <div className='separator'></div>
         <section className='edu two '>
          <h3>ITI information Technology Institue</h3>
          <div className='date'>
            <FaCalendarAlt />
            <p>jan 2020 - Jan 2021</p>
          </div>
          <div className='desc'>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Libero sint unde atque
          ipsam expedita earum dolores deserunt quasi error? Veniam optio,
          voluptatibus sequi nam voluptatem aliquam nihil maxime repellendus atque?
          </div>
         </section>
         <div className='separator'></div>
         <section className='edu three '>
          <h3>Faculty of copmuters and Information</h3>
          <div className='date'>
            <FaCalendarAlt />
            <p>Mar 2018- Jan 2022</p>
          </div>
          <div className='desc'>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
          </div>
         </section>
        </div>
      </>
    )
  }
}

export default Education

