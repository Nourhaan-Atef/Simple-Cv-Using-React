import React, { Component } from 'react'
import {FaFacebook, FaGithub , FaLinkedin , FaTwitter } from "react-icons/fa";
import '../App.css'
class Footer extends Component {
  render() {
    return (
      <>
        <footer>
          <section className='top'>
          <p>Find Me One Social Media</p>
          </section>
          <section className='middle'>
            <FaFacebook className='icon'/>
            <FaTwitter className='icon'/>
            <FaGithub className='icon'/>
            <FaLinkedin className='icon'/>
          </section>
          <section className='bottom'>
          <p>Designed By <span>Nourhan Atef</span></p>
          </section>
        </footer>
      </>
    )
  }
}

export default Footer
