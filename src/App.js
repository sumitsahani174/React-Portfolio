import React from 'react';
import './App.css';
import About from './components/About';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Education from './components/Education';
import Contact from './components/Contact';
import Certificates from './components/Certificates';
import Awards from './components/Awards';

function App() {
  return (
    <div className="App">
      <About />
      <Experience />
      <Projects />
      <Skills />
      <Education />
      <Certificates />
      {/* <Awards /> */}
      <Contact />
    </div>
  );
}

export default App;
