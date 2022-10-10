import './App.css';
import React, { Component } from 'react'
import SkillsAndLang from './components/SkillsAndLang';
import Education from './components/Education';
import Experience from './components/Experience';
import Footer from './components/Footer';

export class App extends Component {
  render() {
    return (
      <div className='App'>
          <div className='content'>
            <SkillsAndLang />
            <div className='right'>
              <Experience />
              <Education />
            </div>
          </div>
          <Footer />
      </div>
    )
  }
}

export default App
