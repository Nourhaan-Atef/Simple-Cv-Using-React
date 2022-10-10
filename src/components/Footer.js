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
            <a href='https://www.facebook.com/nony.atef.77' target='_blank' rel="noreferrer noopener">
            <FaFacebook className='icon'/>
            </a>
            <a href='https://twitter.com/AtefNoury?s=08' target='_blank' rel="noreferrer noopener">
            <FaTwitter className='icon'/>
            </a>
            <a href='https://github.com/Nourhaan-Atef' target='_blank' rel="noreferrer noopener">
            <FaGithub className='icon'/>
            </a>
            <a href='https://www.linkedin.com/in/nourhaan-atef/' target='_blank' rel="noreferrer noopener">
            <FaLinkedin className='icon'/>
            </a>
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
