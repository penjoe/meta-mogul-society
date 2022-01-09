// dependencies
import React from 'react';

// stylesheets
import './App.css'

// custom modules
import Header from './header/Header.js';
import About from './about/About.js';
import Roadmap from './roadmap/Roadmap.js';
import Team from './team/Team.js';
import Footer from './footer/Footer.js';

const App = () => {
  return (
    <div className='app'>
      <Header />
      <About />
      <Roadmap />
      <Team />
      <Footer />
    </div>
  );
};

export default App;