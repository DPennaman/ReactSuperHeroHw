import React, { Component } from 'react';
import Contact from '../src/components/Contact.js';
import Footer from '../src/components/Footer.js';
import Home from '../src/components/Home.js';
import Main from '../src/components/Main.js';
import Navbar from '../src/components/Navbar.js';
import Resume from '../src/components/Resume.js';
import Projects from '../src/components/Projects.js';
import SocialLinks from '../src/components/SocialLinks.js';










import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <Home />
        <Main />
        <Projects />
        <Resume />
        <Contact />
        <SocialLinks />
        <Footer />
      </div>
    );
  }
}

export default App;
