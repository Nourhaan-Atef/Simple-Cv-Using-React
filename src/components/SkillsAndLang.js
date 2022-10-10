import React, { Component } from 'react'
import {FaBriefcase , FaHome , FaEnvelope , FaPhone, FaStar,FaGlobeEurope} from "react-icons/fa";
import '../App.css'
import pic from "../images/me.jpg"
class SkillsAndLang extends Component {
  render() {
    return (
      <>
        <div className='card'>
           <section className='photo'>
            <img src={pic} alt="My_Image"/>
            <h3 className='name'>Nourhan Atef </h3>
           </section>
           <section className='contacts'>
            <div className='contact-details'>
                <div className='icon'>
                <FaBriefcase />
                </div>
                <p>Front-End Developer</p>
            </div>
            <div className='contact-details'>
                <div className='icon'>
                <FaHome />
                </div>
                <p>Menoufya, Egypt</p>
            </div>
            <div className='contact-details'>
                <div className='icon'>
                <FaEnvelope />
                </div>
                <p>anour2168@gmail.com</p>
            </div>
            <div className='contact-details'>
                <div className='icon'>
                <FaPhone />
                </div>
                <p>+20 128-978-0115</p>
            </div>
           </section>
           <section className='skills'>
            <header>
                <div className='icon'>
                <FaStar />
                </div>
                <h3>Skills</h3>
            </header>
            <div className='skill-details'>
                <p>HTML</p>
                <div className='progress html'>98%</div>
            </div>
            <div className='skill-details'>
                <p>CSS</p>
                <div className='progress css'>90%
                </div>
            </div>
            <div className='skill-details'>
                <p>JavaScript</p>
                <div className='progress js'>95%</div>
            </div>
            <div className='skill-details'>
                <p>Bootstrap</p>
                <div className='progress bootstrap'>75%</div>
            </div>
            <div className='skill-details'>
                <p>React</p>
                <div className='progress react'>70%</div>
            </div>
           </section>
           <section className='langs'>
            <header>
                <div className='icon'>
                <FaGlobeEurope />
                </div>
                <h3>Languages</h3>
            </header>
            <div className='lang-details'>
                <p>Arabic</p>
                <div className='arabic'>Native</div>
            </div>
            <div className='lang-details'>
                <p>English</p>
                <div className='english'>Good</div>
            </div>
           </section>
        </div>
      </>
    )
  }
}

export default SkillsAndLang
